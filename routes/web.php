<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\InquiryController; // Import the controller
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Grouped under auth middleware for security
Route::middleware('auth')->group(function () {
    // Inquiry Routes
    Route::get('/inquiries', [InquiryController::class, 'index'])->name('inquiry.index');

    // Profile Routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';