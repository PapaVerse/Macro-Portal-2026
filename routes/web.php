<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\InquiryController;
use Illuminate\Support\Facades\Route;

// --- Admin Inquiry Routes ---
// Fixed the syntax from .php to ::class
Route::get('/admin/inquiries', [InquiryController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('admin.inquiries.index');

// --- Public Pages ---
Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::view('/products', 'pages.products')->name('products');
Route::view('/certifications', 'pages.certifications')->name('certifications');
Route::view('/about-us', 'pages.about-us')->name('about-us');
Route::view('/contact', 'pages.contact')->name('contact');

// --- Auth & Dashboard ---
// This handles the main analytics view
Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// --- Inquiry Actions ---
Route::post('/contact/send', [ContactController::class, 'send'])->name('contacts.send');
Route::post('/admin/inquiries/bulk', [DashboardController::class, 'bulkAction'])->name('admin.inquiries.bulk');
Route::post('/admin/inquiries/{contact}/read', [DashboardController::class, 'markAsRead'])->name('admin.inquiries.read');

require __DIR__.'/auth.php';