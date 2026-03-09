<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\View\View;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): View
    {
        return view('auth.register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            // Updated to be more reliable for your phpMyAdmin setup
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

    $user = User::create([
    'name' => $request->name,
    'email' => $request->email,
    'password' => Hash::make($request->password),
    'is_admin' => true, // Force this to true just for a test
]);

        // Debug line to confirm database storage
        if (!$user) { 
            dd("Database failed to save the user"); 
        }

        event(new Registered($user));

        // Prevents logging you out when you create a new staff account
        if (auth()->check() && auth()->user()->is_admin) {
            return back()->with('status', 'admin-created');
        }

        // Standard login for guests/initial registration
        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
} // Properly closing the class