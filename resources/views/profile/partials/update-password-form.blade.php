<section class="bg-white p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm relative overflow-hidden mt-8">
    
    {{-- Decorative Security Accent --}}
    <div class="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full opacity-40 -z-0"></div>

    <header class="relative z-10 mb-8">
        <div class="flex items-center gap-3 mb-2">
            <div class="bg-slate-900 p-2 rounded-xl text-white shadow-lg shadow-slate-200">
                <i class="fas fa-shield-halved text-sm"></i>
            </div>
            <h2 class="text-xl font-bold text-gray-900 uppercase tracking-tight">
                {{ __('Update Password') }}
            </h2>
        </div>

        <p class="text-sm text-gray-500 font-medium">
            {{ __('Ensure your account is using a long, random password to stay secure.') }}
        </p>
    </header>

    <form method="post" action="{{ route('password.update') }}" class="relative z-10 space-y-6 max-w-xl">
        @csrf
        @method('put')

        {{-- Current Password --}}
        <div class="group">
            <x-input-label for="update_password_current_password" :value="__('Current Password')" class="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <div class="relative mt-1">
                <x-text-input id="update_password_current_password" name="current_password" type="password" 
                    class="block w-full border-gray-100 bg-gray-50/50 rounded-xl focus:ring-blue-500 focus:border-blue-500 py-3 px-4 transition-all" 
                    autocomplete="current-password" />
            </div>
            <x-input-error :messages="$errors->updatePassword->get('current_password')" class="mt-2" />
        </div>

        {{-- New Password --}}
        <div class="group">
            <x-input-label for="update_password_password" :value="__('New Password')" class="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <div class="relative mt-1">
                <x-text-input id="update_password_password" name="password" type="password" 
                    class="block w-full border-gray-100 bg-gray-50/50 rounded-xl focus:ring-blue-500 focus:border-blue-500 py-3 px-4 transition-all" 
                    autocomplete="new-password" />
            </div>
            <x-input-error :messages="$errors->updatePassword->get('password')" class="mt-2" />
        </div>

        {{-- Confirm Password --}}
        <div class="group">
            <x-input-label for="update_password_password_confirmation" :value="__('Confirm New Password')" class="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <div class="relative mt-1">
                <x-text-input id="update_password_password_confirmation" name="password_confirmation" type="password" 
                    class="block w-full border-gray-100 bg-gray-50/50 rounded-xl focus:ring-blue-500 focus:border-blue-500 py-3 px-4 transition-all" 
                    autocomplete="new-password" />
            </div>
            <x-input-error :messages="$errors->updatePassword->get('password_confirmation')" class="mt-2" />
        </div>

        {{-- Action Section --}}
        <div class="flex items-center gap-4 pt-4 border-t border-gray-50">
            <button type="submit" class="bg-slate-900 hover:bg-black text-white font-black uppercase text-xs tracking-[0.2em] px-8 py-3 rounded-xl transition-all hover:shadow-xl hover:shadow-slate-200 active:scale-95">
                {{ __('Update Password') }}
            </button>

            @if (session('status') === 'password-updated')
                <div 
                    x-data="{ show: true }"
                    x-show="show"
                    x-transition
                    x-init="setTimeout(() => show = false, 3000)"
                    class="flex items-center gap-2 text-green-600 font-bold text-sm"
                >
                    <i class="fas fa-circle-check"></i>
                    {{ __('Password Saved.') }}
                </div>
            @endif
        </div>
    </form>
</section>