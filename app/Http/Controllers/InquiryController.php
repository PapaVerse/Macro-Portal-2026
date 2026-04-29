<?php

namespace App\Http\Controllers;

<<<<<<< HEAD
use App\Models\Inquiry;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class InquiryController extends Controller
{
    public function index(Request $request)
    {
        $query = Inquiry::query();

        // --- Filter by Past Days ---
        if ($request->range === '7days') {
            $query->where('created_at', '>=', now()->subDays(7));
        } elseif ($request->range === '30days') {
            $query->where('created_at', '>=', now()->subDays(30));
        }

        // --- Filter by Specific Month ---
        if ($request->month) {
            $query->whereMonth('created_at', $request->month)
                  ->whereYear('created_at', now()->year);
        }

        // Get the inquiries based on filters
        $inquiries = $query->latest()->get();

        // --- Prepare Chart Data (Grouped by Date) ---
        // We fetch the last 10 entries of activity to show a trend line
        $chartStats = Inquiry::select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as aggregate'))
            ->when($request->range === '7days', fn($q) => $q->where('created_at', '>=', now()->subDays(7)))
            ->when($request->month, fn($q) => $q->whereMonth('created_at', $request->month))
            ->groupBy('date')
            ->orderBy('date', 'ASC')
            ->get();

        $chartLabels = $chartStats->pluck('date')->map(fn($date) => Carbon::parse($date)->format('M d'));
        $chartData = $chartStats->pluck('aggregate');

        // --- Statistics for the top cards ---
        $stats = [
            'total_active' => $inquiries->whereNull('deleted_at')->count(),
            'trash_count' => Inquiry::onlyTrashed()->count(),
        ];

        // If the request is AJAX (from our Alpine.js filter), return JSON
        if ($request->ajax()) {
            return response()->json([
                'inquiries' => $inquiries,
                'stats' => $stats,
                'chartLabels' => $chartLabels,
                'chartData' => $chartData,
            ]);
        }

        // Otherwise, return the full blade view
        return view('admin.inquiries.index', compact('inquiries', 'stats', 'chartLabels', 'chartData'));
=======
use Illuminate\Http\Request;

class InquiryController extends Controller
{
    public function index()
    {
        return view('inquiry'); // This loads your inquiry.blade.php
>>>>>>> a5273f9723aa1500883533595150bff389038351
    }
}