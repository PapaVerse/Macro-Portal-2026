<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\InquiryController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::view('/products', 'pages.products')->name('products');
Route::redirect('/products.php', '/products', 301);

Route::view('/certifications', 'pages.certifications')->name('certifications');

Route::view('/about-us', 'pages.about-us')->name('about-us');
Route::redirect('/about.php', '/about-us', 301);
Route::redirect('/about', '/about-us', 301);

Route::view('/contact', 'pages.contact')->name('contact');

/*
|--------------------------------------------------------------------------
| Inquiry (Public)
|--------------------------------------------------------------------------
*/

Route::post('/contact/send', [ContactController::class, 'send'])->name('contacts.send');

/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
*/

Route::middleware(['auth', 'verified'])->group(function () {

    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Admin Inquiries
    Route::get('/admin/inquiries', [InquiryController::class, 'index'])
        ->name('admin.inquiries.index');

    Route::post('/admin/inquiries/bulk', [DashboardController::class, 'bulkAction'])
        ->name('admin.inquiries.bulk');

    Route::post('/admin/inquiries/{contact}/read', [DashboardController::class, 'markAsRead'])
        ->name('admin.inquiries.read');

    /*
    |--------------------------------------------------------------------------
    | Profile / Admin Management
    |--------------------------------------------------------------------------
    */

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Admin actions
    Route::delete('/admin/user/{user}', [ProfileController::class, 'adminDestroy'])
        ->name('admin.destroy');

    Route::put('/admin/password-update', [ProfileController::class, 'adminUpdatePassword'])
        ->name('admin.password.update');
});

/*
|--------------------------------------------------------------------------
| Auth Routes (Login/Register)
|--------------------------------------------------------------------------
*/

require __DIR__ . '/auth.php';
