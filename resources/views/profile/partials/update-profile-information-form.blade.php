<section class="bg-white p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm relative overflow-hidden">
    
    {{-- Subtle Decorative Accent --}}
    <div class="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-40 -z-0"></div>

    <header class="relative z-10 mb-8">
        <div class="flex items-center gap-3 mb-2">
            <div class="bg-blue-600 p-2 rounded-xl text-white shadow-lg shadow-blue-100">
                <i class="fas fa-user-gear text-sm"></i>
            </div>
            <h2 class="text-xl font-bold text-gray-900 uppercase tracking-tight">
                {{ __('Profile Information') }}
            </h2>
        </div>

        <p class="text-sm text-gray-500 font-medium">
            {{ __("Update your account's profile information and email address.") }}
        </p>
    </header>

    <form id="send-verification" method="post" action="{{ route('verification.send') }}">
        @csrf
    </form>

    <form method="post" action="{{ route('profile.update') }}" class="relative z-10 space-y-6 max-w-xl">
        @csrf
        @method('patch')

        {{-- Name Input --}}
        <div class="group">
            <x-input-label for="name" :value="__('Full Name')" class="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <div class="relative mt-1">
                <x-text-input id="name" name="name" type="text" 
                    class="block w-full border-gray-100 bg-gray-50/50 rounded-xl focus:ring-blue-500 focus:border-blue-500 py-3 px-4 transition-all" 
                    :value="old('name', $user->name)" required autofocus autocomplete="name" />
            </div>
            <x-input-error class="mt-2" :messages="$errors->get('name')" />
        </div>

        {{-- Email Input --}}
        <div class="group">
            <x-input-label for="email" :value="__('Email Address')" class="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <div class="relative mt-1">
                <x-text-input id="email" name="email" type="email" 
                    class="block w-full border-gray-100 bg-gray-50/50 rounded-xl focus:ring-blue-500 focus:border-blue-500 py-3 px-4 transition-all" 
                    :value="old('email', $user->email)" required autocomplete="username" />
            </div>
            <x-input-error class="mt-2" :messages="$errors->get('email')" />

            @if ($user instanceof \Illuminate\Contracts\Auth\MustVerifyEmail && ! $user->hasVerifiedEmail())
                <div class="mt-4 p-4 bg-amber-50 rounded-2xl border border-amber-100">
                    <p class="text-xs font-bold text-amber-800 flex items-center gap-2">
                        <i class="fas fa-circle-exclamation"></i>
                        {{ __('Your email address is unverified.') }}
                    </p>

                    <button form="send-verification" class="mt-2 text-xs font-black uppercase tracking-tighter text-amber-600 hover:text-amber-700 underline underline-offset-4">
                        {{ __('Click here to re-send the verification email.') }}
                    </button>

                    @if (session('status') === 'verification-link-sent')
                        <p class="mt-2 font-bold text-xs text-green-600 italic">
                            {{ __('A new verification link has been sent to your email address.') }}
                        </p>
                    @endif
                </div>
            @endif
        </div>

        {{-- Action Section --}}
        <div class="flex items-center gap-4 pt-4 border-t border-gray-50">
            <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-black uppercase text-xs tracking-[0.2em] px-8 py-3 rounded-xl transition-all hover:shadow-xl hover:shadow-blue-100 active:scale-95">
                {{ __('Save Changes') }}
            </button>

            @if (session('status') === 'profile-updated')
                <div 
                    x-data="{ show: true }"
                    x-show="show"
                    x-transition
                    x-init="setTimeout(() => show = false, 3000)"
                    class="flex items-center gap-2 text-green-600 font-bold text-sm"
                >
                    <i class="fas fa-circle-check"></i>
                    {{ __('Profile Updated Successfully.') }}
                </div>
            @endif
        </div>
    </form>
</section>