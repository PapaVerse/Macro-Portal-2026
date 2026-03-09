<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
<link rel="icon" type="image/png" href="{{ asset('images/M.png') }}">
<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Profile Settings') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
            
            {{-- Update Profile Info --}}
            <div class="p-4 sm:p-8 bg-white shadow-sm sm:rounded-[3rem] border border-gray-100">
                <div class="max-w-xl">
                    @include('profile.partials.update-profile-information-form')
                </div>
            </div>

            {{-- Administrative Password Reset --}}
            @if(auth()->user()->is_admin)
                <div class="p-4 sm:p-8 bg-white shadow-sm sm:rounded-[3rem] border border-gray-100">
                    <div class="max-w-xl">
                        <section>
                            <header class="mb-6">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="bg-red-500 p-2 rounded-xl text-white">
                                        <i class="fas fa-user-shield text-sm"></i>
                                    </div>
                                    <h2 class="text-xl font-bold text-gray-900 uppercase tracking-tight">
                                        {{ __('Administrative Password Reset') }}
                                    </h2>
                                </div>
                                <p class="text-xs text-gray-500 font-medium italic">
                                    {{ __('Security Override: Update the password for any staff member by providing their account email.') }}
                                </p>
                            </header>

                            <form method="post" action="{{ route('admin.password.update') }}" class="mt-6 space-y-4">
                                @csrf
                                @method('put')

                                <div class="relative group">
                                    <x-input-label for="target_email" :value="__('Staff Email Address')" class="text-slate-700 font-bold mb-1" />
                                    <div class="relative">
                                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <i class="fas fa-envelope text-xs"></i>
                                        </div>
                                        <x-text-input id="target_email" name="email" type="email" class="block w-full pl-9 bg-gray-50/50 border-gray-200 focus:ring-slate-500 focus:border-slate-500 rounded-2xl transition-all" placeholder="staff@macrowiring.com" required />
                                    </div>
                                    <x-input-error :messages="$errors->get('email')" class="mt-1 text-[10px]" />
                                </div>

                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <x-input-label for="admin_update_password" :value="__('New Password')" class="text-slate-700 font-bold mb-1" />
                                        <x-text-input id="admin_update_password" name="password" type="password" class="block w-full bg-gray-50/50 border-gray-200 rounded-2xl transition-all" autocomplete="new-password" />
                                        <x-input-error :messages="$errors->get('password')" class="mt-1 text-[10px]" />
                                    </div>

                                    <div>
                                        <x-input-label for="admin_update_password_confirmation" :value="__('Confirm Password')" class="text-slate-700 font-bold mb-1" />
                                        <x-text-input id="admin_update_password_confirmation" name="password_confirmation" type="password" class="block w-full bg-gray-50/50 border-gray-200 rounded-2xl transition-all" autocomplete="new-password" />
                                        <x-input-error :messages="$errors->get('password_confirmation')" class="mt-1 text-[10px]" />
                                    </div>
                                </div>

                                <div class="flex items-center gap-4 pt-4">
                                    <button type="submit" class="inline-flex items-center px-6 py-3 bg-slate-900 !bg-[#0f172a] border border-transparent rounded-2xl font-black text-[10px] text-white !text-white uppercase tracking-[0.2em] hover:bg-slate-800 active:bg-black transition ease-in-out duration-150 shadow-xl shadow-slate-200">
                                        <i class="fas fa-key mr-2"></i> {{ __('Override Password') }}
                                    </button>

                                    @if (session('status') === 'admin-password-updated')
                                        <div x-data="{ show: true }" x-show="show" x-transition x-init="setTimeout(() => show = false, 4000)" class="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-xl border border-green-100">
                                            <i class="fas fa-check-circle text-xs"></i>
                                            <span class="text-xs font-bold">{{ __('Update Successful') }}</span>
                                        </div>
                                    @endif
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            @endif

            {{-- Create Admin & Staff List Section --}}
            @if(auth()->user()->is_admin)
                <div class="flex flex-col lg:flex-row gap-6">
                    <div class="w-full lg:w-1/2">
                        @include('profile.partials.create-admin-form')
                    </div>

                    <div class="w-full lg:w-1/2 p-8 bg-white shadow-sm rounded-[3rem] border border-gray-100">
                        <header class="mb-6">
                            <div class="flex items-center gap-3 mb-2">
                                <div class="bg-slate-800 p-2 rounded-xl text-white">
                                    <i class="fas fa-users-cog text-sm"></i>
                                </div>
                                <h2 class="text-xl font-bold text-gray-900 uppercase tracking-tight">
                                    {{ __('Administrative Staff') }}
                                </h2>
                            </div>
                            <p class="text-xs text-gray-500 font-medium uppercase tracking-widest">Currently active admin accounts</p>
                        </header>

                        <div class="space-y-4 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
                            @php
                                $admins = \App\Models\User::where('is_admin', true)->latest()->get();
                            @endphp

                            @foreach($admins as $admin)
                                <div class="flex items-center justify-between p-4 rounded-2xl bg-gray-50/50 border border-gray-100 hover:border-blue-50 transition-all group">
                                    <div class="flex items-center gap-3">
                                        <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                                            {{ strtoupper(substr($admin->name, 0, 2)) }}
                                        </div>
                                        <div>
                                            <h4 class="text-sm font-bold text-gray-900 leading-tight">{{ $admin->name }}</h4>
                                            <p class="text-[11px] text-gray-500">{{ $admin->email }}</p>
                                        </div>
                                    </div>

                                    <div class="flex items-center gap-4">
                                        <div class="text-right">
                                            <span class="block text-[9px] font-black uppercase tracking-widest text-gray-400">Created</span>
                                            <span class="text-[10px] font-bold text-gray-600">{{ $admin->created_at->format('M d, Y') }}</span>
                                        </div>

                                        {{-- WORD-BASED DELETE BUTTON --}}
                                        @if(auth()->id() !== $admin->id)
                                            <form method="POST" action="{{ route('admin.destroy', $admin->id) }}" onsubmit="return confirm('Are you sure you want to delete this staff member?');">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="px-3 py-1 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all border border-red-100 text-[10px] font-black uppercase tracking-tighter">
                                                    DELETE
                                                </button>
                                            </form>
                                        @endif
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            @endif
        </div>
    </div>
</x-app-layout>