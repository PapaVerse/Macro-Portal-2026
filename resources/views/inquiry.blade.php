<x-app-layout>
    <x-slot name="header">
        <div class="flex items-center justify-between">
            <h2 class="font-black text-xl text-slate-800 tracking-tight uppercase">
                Customer <span class="text-blue-600">Inquiries</span>
            </h2>
            <div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">
                Macro Wiring Technologies Co. Inc.
            </div>
        </div>
    </x-slot>

    <div class="py-12 bg-slate-50 min-h-screen">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Inquiries</p>
                    <p class="text-3xl font-black text-slate-800">0</p>
                </div>
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <p class="text-xs font-bold text-blue-400 uppercase tracking-widest">Pending Review</p>
                    <p class="text-3xl font-black text-blue-600">0</p>
                </div>
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <p class="text-xs font-bold text-emerald-400 uppercase tracking-widest">Completed</p>
                    <p class="text-3xl font-black text-emerald-600">0</p>
                </div>
            </div>

            <div class="bg-white overflow-hidden shadow-sm rounded-3xl border border-slate-100">
                <div class="p-8">
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="font-bold text-slate-700">Recent Submissions</h3>
                        <button class="text-xs font-bold text-blue-600 uppercase tracking-tighter hover:underline">
                            Export to Excel
                        </button>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="border-b border-slate-50">
                                    <th class="py-4 px-2 text-[10px] uppercase tracking-widest text-slate-400">Date</th>
                                    <th class="py-4 px-2 text-[10px] uppercase tracking-widest text-slate-400">Customer Name</th>
                                    <th class="py-4 px-2 text-[10px] uppercase tracking-widest text-slate-400">Service Type</th>
                                    <th class="py-4 px-2 text-[10px] uppercase tracking-widest text-slate-400 text-center">Status</th>
                                    <th class="py-4 px-2 text-[10px] uppercase tracking-widest text-slate-400 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="text-slate-600">
                                <tr>
                                    <td colspan="5" class="py-20 text-center">
                                        <div class="flex flex-col items-center opacity-20">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                            </svg>
                                            <p class="font-bold uppercase tracking-widest text-xs">No inquiries found in database</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>