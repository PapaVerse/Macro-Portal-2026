<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $query = Contact::withTrashed();

        // --- 1. Filter by Pass Days Analytics ---
        if ($request->range === '7days') {
            $query->where('created_at', '>=', now()->subDays(7));
        } elseif ($request->range === '30days') {
            $query->where('created_at', '>=', now()->subDays(30));
        }

        // --- 2. Filter by Specific Month ---
        if ($request->month) {
            $query->whereMonth('created_at', $request->month)
                  ->whereYear('created_at', now()->year);
        }

        // Fetch the filtered inquiries
        $inquiries = $query->orderBy('created_at', 'desc')->get();

        // --- 3. Calculate Updated Stats ---
        $stats = [
            'total_active' => $inquiries->whereNull('deleted_at')->count(), 
            'unread'       => $inquiries->whereNull('deleted_at')->where('status', 'unread')->count(),
            'trash_count'  => $inquiries->whereNotNull('deleted_at')->count(),
        ];

        // --- 4. Prepare Dynamic Chart Labels and Data ---
        $chartLabels = [];
        $chartData = [];

        if ($request->range || $request->month) {
            // If filtering, show data grouped by day for the specific period
            $chartStats = Contact::select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as aggregate'))
                ->whereIn('id', $inquiries->pluck('id')) // Match the already filtered list
                ->groupBy('date')
                ->orderBy('date', 'ASC')
                ->get();

            $chartLabels = $chartStats->pluck('date')->map(fn($date) => Carbon::parse($date)->format('M d'));
            $chartData = $chartStats->pluck('aggregate');
        } else {
            // Default: Show last 6 months trend
            for ($i = 5; $i >= 0; $i--) {
                $month = Carbon::now()->subMonths($i);
                $chartLabels[] = $month->format('M');
                $chartData[] = Contact::whereMonth('created_at', $month->month)
                                      ->whereYear('created_at', $month->year)
                                      ->count();
            }
        }

        // --- 5. Return JSON for AJAX or Blade for initial load ---
        if ($request->ajax()) {
            return response()->json([
                'inquiries'   => $inquiries,
                'stats'       => $stats,
                'chartLabels' => $chartLabels,
                'chartData'   => $chartData,
            ]);
        }

        return view('dashboard', compact('inquiries', 'stats', 'chartLabels', 'chartData'));
    }

    /**
     * Updates the status to 'read' via AJAX when a message is opened
     */
    public function markAsRead(Contact $contact)
    {
        if ($contact->status === 'unread') {
            $contact->update(['status' => 'read']);
        }

        return response()->json(['success' => true]);
    }

    /**
     * Handles bulk actions (Delete, Restore, Permanent Purge)
     */
    public function bulkAction(Request $request)
    {
        $ids = $request->input('ids', []);
        $action = $request->input('action');

        if (empty($ids)) {
            return back()->with('error', 'No items selected.');
        }

        if ($action === 'delete') {
            Contact::whereIn('id', $ids)->delete();
            $msg = "Selected items moved to trash.";
        } elseif ($action === 'restore') {
            Contact::withTrashed()->whereIn('id', $ids)->restore();
            $msg = "Selected items restored.";
        } elseif ($action === 'force_delete') {
            Contact::withTrashed()->whereIn('id', $ids)->forceDelete();
            $msg = "Selected items permanently deleted.";
        }

        return back()->with('success', $msg ?? 'Action completed.');
    }
}