<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rules\Password;
use Illuminate\View\View;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): View
    {
        return view('profile.edit', [
            'user' => $request->user(),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $user = $request->user();
        $user->fill($request->validated());

        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        }

        $user->save();

        // REFRESH SESSION DATA: This ensures the name updates on all pages immediately
        $request->session()->put('user', $user);

        return Redirect::route('profile.edit')->with('status', 'profile-updated');
    }

    /**
     * Delete the user's own account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validateWithBag('userDeletion', [
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    /**
     * Delete a staff member's account (Administrative).
     */
    public function adminDestroy(User $user): RedirectResponse
    {
        // Prevent deleting yourself
        if (Auth::id() === $user->id) {
            return Redirect::route('profile.edit')->with('error', 'You cannot delete your own account from the staff list.');
        }

        // Ensure only admins can perform this
        if (!Auth::user()->is_admin) {
            abort(403);
        }

        $user->delete();

        return Redirect::route('profile.edit')->with('status', 'staff-deleted');
    }

    /**
     * Update a staff member's password (Administrative Override).
     */
    public function adminUpdatePassword(Request $request): RedirectResponse
    {
        // Ensure only admins can perform this
        if (!Auth::user()->is_admin) {
            abort(403);
        }

        $validated = $request->validate([
            'email' => ['required', 'email', 'exists:users,email'],
            'password' => ['required', 'confirmed', Password::defaults()],
        ]);

        $user = User::where('email', $validated['email'])->first();

        $user->update([
            'password' => Hash::make($validated['password']),
        ]);

        return Redirect::route('profile.edit')->with('status', 'admin-password-updated');
    }
}