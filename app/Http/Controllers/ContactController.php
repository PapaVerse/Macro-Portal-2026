<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use Illuminate\Support\Facades\Mail;
use App\Mail\NewInquiryNotification;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $validated = $request->validate([
            'full_name' => 'required',
            'email' => 'required|email',
            'subject' => 'required',
            'message' => 'required'
        ]);

        // Saves to MySQL in XAMPP - including status via model defaults
        Contact::create($validated);

        try {
            // Sends to the account you have access to
            Mail::to('macrowiringtech1official@gmail.com')->send(new NewInquiryNotification($validated));
        } catch (\Exception $e) {
            \Log::error('Mail Error: ' . $e->getMessage());
        }

        return back()->with('success', 'Message submitted successfully!');
    }
}