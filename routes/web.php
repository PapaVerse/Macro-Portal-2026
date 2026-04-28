<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

// Added ->name('home') so route('home') in your navbar works
Route::get('/', function () {
    return view('welcome');
})->name('home');

// --- Public Pages SEO ADDED---
// Products page
Route::view('/products', 'pages.products')->name('products');

// Redirect old URL
Route::redirect('/products.php', '/products', 301);

// Ensure these view files exist in resources/views/pages/
Route::view('/certifications', 'pages.certifications')->name('certifications');


// --- About Page SEO ADDED ---

// New clean URL
Route::view('/about-us', 'pages.about-us')->name('about-us');

// Redirect old URL → new URL (SEO preservation)
Route::redirect('/about.php', '/about-us', 301);

// Optional: catch common variations
Route::redirect('/about', '/about-us', 301);




Route::view('/contact', 'pages.contact')->name('contact');

// --- Auth & Dashboard ---
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// contacts 

use App\Http\Controllers\ContactController;

Route::post('/contact/send', [ContactController::class, 'send'])->name('contacts.send');

// This file contains the 'login' and 'register' named routes
require __DIR__ . '/auth.php';
