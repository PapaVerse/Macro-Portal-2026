<section class="bg-white p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm relative overflow-hidden mt-8">

    {{-- Decorative Security Accent --}}
    <div class="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full opacity-40 -z-0"></div>

    <header class="relative z-10 mb-8">
        <div class="flex items-center gap-3 mb-2">
            <div class="bg-blue-600 p-2 rounded-xl text-white shadow-lg shadow-blue-200">
                <i class="fas fa-user-plus text-sm"></i>
            </div>
            <h2 class="text-xl font-bold text-gray-900 uppercase tracking-tight">
                {{ __('Create Admin Account') }}
            </h2>
        </div>

        <p class="text-sm text-gray-500 font-medium">
            {{ __('Register a new administrative user with full access to the dashboard.') }}
        </p>
    </header>

    <form method="post" action="{{ route('admin.register') }}" class="relative z-10 space-y-6 max-w-xl">
        @csrf

        {{-- Name --}}
        <div class="group">
            <x-input-label for="name" :value="__('Full Name')" class="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <div class="relative mt-1">
                <x-text-input id="name" name="name" type="text"
                    class="block w-full border-gray-100 bg-gray-50/50 rounded-xl focus:ring-blue-500 focus:border-blue-500 py-3 px-4 transition-all"
                    :value="old('name')" required autofocus />
            </div>
            <x-input-error :messages="$errors->get('name')" class="mt-2" />
        </div>

        {{-- Email Address --}}
        <div class="group">
            <x-input-label for="email" :value="__('Email Address')" class="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <div class="relative mt-1">
                <x-text-input id="email" name="email" type="email"
                    class="block w-full border-gray-100 bg-gray-50/50 rounded-xl focus:ring-blue-500 focus:border-blue-500 py-3 px-4 transition-all"
                    :value="old('email')" required />
            </div>
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        {{-- Password --}}
        <div class="group">
            <x-input-label for="password" :value="__('Temporary Password')" class="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <div class="relative mt-1">
                <x-text-input id="password" name="password" type="password"
                    class="block w-full border-gray-100 bg-gray-50/50 rounded-xl focus:ring-blue-500 focus:border-blue-500 py-3 px-4 transition-all"
                    required autocomplete="new-password" />
            </div>
            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        {{-- Confirm Password --}}
        <div class="group">
            <x-input-label for="password_confirmation" :value="__('Confirm Password')" class="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <div class="relative mt-1">
                <x-text-input id="password_confirmation" name="password_confirmation" type="password"
                    class="block w-full border-gray-100 bg-gray-50/50 rounded-xl focus:ring-blue-500 focus:border-blue-500 py-3 px-4 transition-all"
                    required />
            </div>
        </div>

        {{-- Action Section --}}
        <div class="flex flex-col gap-4 pt-4 border-t border-gray-50">
            {{-- Add this block to see errors --}}
            @if ($errors->any())
            <div class="text-red-600 text-sm font-bold bg-red-50 p-3 rounded-xl">
                <ul>
                    @foreach ($errors->all() as $error)
                    <li><i class="fas fa-exclamation-circle mr-1"></i> {{ $error }}</li>
                    @endforeach
                </ul>
            </div>
            @endif

            <div class="flex items-center gap-4">
                <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-black uppercase text-xs tracking-[0.2em] px-8 py-3 rounded-xl transition-all hover:shadow-xl hover:shadow-blue-200 active:scale-95">
                    {{ __('Register Admin') }}
                </button>

                {{-- Success Message --}}
                @if (session('status') === 'admin-created')
                <div x-data="{ show: true }" x-show="show" x-transition x-init="setTimeout(() => show = false, 3000)" class="text-green-600 font-bold text-sm">
                    <i class="fas fa-circle-check"></i> {{ __('Account Created.') }}
                </div>
                @endif
            </div>
        </div>
    </form>
</section>