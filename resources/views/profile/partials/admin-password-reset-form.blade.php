<section>
    <header>
        <h2 class="text-lg font-medium text-gray-900">
            {{ __('Administrative Password Reset') }}
        </h2>
        <p class="mt-1 text-sm text-gray-600">
            {{ __('Update the password for any staff member by providing their account email.') }}
        </p>
    </header>

    <form method="post" action="{{ route('admin.password.update') }}" class="mt-6 space-y-6">
        @csrf
        @method('put')

        {{-- Target User Email --}}
        <div>
            <x-input-label for="target_email" :value="__('Staff Email Address')" />
            <x-text-input id="target_email" name="email" type="email" class="mt-1 block w-full" placeholder="staff@macrowiring.com" required />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        {{-- New Password --}}
        <div>
            <x-input-label for="admin_update_password" :value="__('New Password')" />
            <x-text-input id="admin_update_password" name="password" type="password" class="mt-1 block w-full" autocomplete="new-password" />
            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        {{-- Confirm Password --}}
        <div>
            <x-input-label for="admin_update_password_confirmation" :value="__('Confirm Password')" />
            <x-text-input id="admin_update_password_confirmation" name="password_confirmation" type="password" class="mt-1 block w-full" autocomplete="new-password" />
            <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />
        </div>

        <div class="flex items-center gap-4">
            <x-primary-button>{{ __('Override Password') }}</x-primary-button>

            @if (session('status') === 'admin-password-updated')
                <p
                    x-data="{ show: true }"
                    x-show="show"
                    x-transition
                    x-init="setTimeout(() => show = false, 2000)"
                    class="text-sm text-green-600 font-bold"
                >{{ __('Staff password updated successfully.') }}</p>
            @endif
        </div>
    </form>
</section>