<x-app-layout>
    @push('styles')
    <style>
        @keyframes reverse-spin {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
        }
        .animate-reverse-spin {
            animation: reverse-spin 3s linear infinite;
        }
        [x-cloak] { display: none !important; }
    </style>
    @endpush

    <div x-data="{ loading: true }" x-init="setTimeout(() => loading = false, 1500)">
        
        <template x-if="loading">
            <div class="fixed inset-0 z-[9999] bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
                <div class="absolute inset-0 pointer-events-none opacity-20">
                    <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400 rounded-full blur-[120px] animate-pulse"></div>
                    <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-400 rounded-full blur-[120px] animate-pulse delay-700"></div>
                </div>

                <div class="relative z-10 flex flex-col items-center">
                    <div class="relative w-24 h-24 mb-8">
                        <div class="absolute inset-0 border-4 border-blue-100 rounded-2xl"></div>
                        <div class="absolute inset-0 border-4 border-blue-600 rounded-2xl animate-spin [animation-duration:3s] border-t-transparent shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
                        
                        <div class="absolute inset-4 border-2 border-slate-200 rounded-xl animate-reverse-spin border-b-transparent"></div>
                        
                        <div class="absolute inset-0 m-auto flex items-center justify-center text-blue-600 animate-pulse">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                    </div>

                    <div class="text-center space-y-2">
                        <h2 class="text-xl font-black text-slate-800 tracking-tighter uppercase flex items-center gap-2">
                            Syncing <span class="text-blue-600">Admin Portal</span>
                        </h2>
                        <p class="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em] animate-pulse">
                            Establishing Secure Connection...
                        </p>
                    </div>
                </div>
            </div>
        </template>

        <div x-show="!loading" x-cloak>
            <x-slot name="header">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    {{ __('Dashboard') }}
                </h2>
            </x-slot>

            <div class="py-12">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="p-6 text-gray-900">
                            {{ __("You're logged in!") }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>