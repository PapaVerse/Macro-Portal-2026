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
        
        mark.search-highlight {
            background-color: #dbeafe;
            color: #1e40af;
            padding: 0 2px;
            border-radius: 2px;
            font-weight: 900;
        }

        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 10px;
        }
    </style>
    @endpush

    <div x-data="{ 
        loading: true, 
        filtering: false,
        search: '', 
        view: 'active', 
        selectedRange: '',
        selectedMonth: '',
        selectedInquiry: null,
        selectedIds: [],
        inquiries: @js($inquiries),
        chartData: @js($chartData),
        chartLabels: @js($chartLabels),
        stats: @js($stats),
        chartInstance: null,
        
        // Pagination Logic
        currentPage: 1,
        perPage: 10,

        highlight(text) {
            if (!this.search.trim()) return text;
            const source = String(text);
            const regex = new RegExp(`(${this.search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
            return source.replace(regex, '<mark class=\'search-highlight\'>$1</mark>');
        },

        get unreadCount() {
            return this.inquiries.filter(i => i.status === 'unread' && !i.deleted_at).length;
        },
        
        get totalFiltered() {
            return this.inquiries.filter(i => {
                const searchTerm = this.search.toLowerCase();
                const matchesSearch = 
                    i.full_name.toLowerCase().includes(searchTerm) || 
                    i.email.toLowerCase().includes(searchTerm) || 
                    i.subject.toLowerCase().includes(searchTerm) || 
                    i.message.toLowerCase().includes(searchTerm) ||
                    i.id.toString().includes(searchTerm) ||
                    `#${i.id.toString().padStart(4, '0')}`.includes(searchTerm);

                const matchesView = this.view === 'trash' ? i.deleted_at !== null : i.deleted_at === null;
                return matchesSearch && matchesView;
            });
        },

        get filteredInquiries() {
            const start = (this.currentPage - 1) * this.perPage;
            const end = start + this.perPage;
            return this.totalFiltered.slice(start, end);
        },

        get totalPages() {
            return Math.ceil(this.totalFiltered.length / this.perPage);
        },

        async updateFilter() {
            this.filtering = true;
            this.currentPage = 1; // Reset to page 1 on filter
            const params = new URLSearchParams();
            if (this.selectedRange) params.append('range', this.selectedRange);
            if (this.selectedMonth) params.append('month', this.selectedMonth);

            try {
                const response = await fetch(`${window.location.pathname}?${params.toString()}`, {
                    headers: { 'X-Requested-With': 'XMLHttpRequest' }
                });
                const data = await response.json();
                
                this.inquiries = data.inquiries;
                this.stats = data.stats;
                this.chartLabels = data.chartLabels;
                this.chartData = data.chartData;
                
                this.initChart();
            } catch (error) {
                console.error('Filter Error:', error);
            } finally {
                this.filtering = false;
            }
        },

        toggleSelectAll() {
            if (this.selectedIds.length === this.filteredInquiries.length) {
                this.selectedIds = [];
            } else {
                this.selectedIds = this.filteredInquiries.map(i => i.id);
            }
        },

        async openInquiry(item) {
            this.selectedInquiry = item;
            
            if (item.status === 'unread') {
                try {
                    await fetch(`/admin/inquiries/${item.id}/read`, {
                        method: 'POST',
                        headers: {
                            'X-CSRF-TOKEN': '{{ csrf_token() }}',
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    });

                    const index = this.inquiries.findIndex(i => i.id === item.id);
                    if (index !== -1) {
                        this.inquiries[index].status = 'read';
                    }
                } catch (error) {
                    console.error('Error marking as read:', error);
                }
            }
        },

        initChart() {
            const canvas = document.getElementById('inquiryChart');
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            if (this.chartInstance) {
                this.chartInstance.destroy();
            }
            
            this.chartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: this.chartLabels,
                    datasets: [{
                        data: this.chartData,
                        borderColor: '#2563eb',
                        borderWidth: 3,
                        tension: 0.4,
                        pointRadius: 0,
                        pointHoverRadius: 6,
                        pointBackgroundColor: '#2563eb',
                        fill: true,
                        backgroundColor: (context) => {
                            const chart = context.chart;
                            const {ctx, chartArea} = chart;
                            if (!chartArea) return null;
                            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                            gradient.addColorStop(0, 'rgba(37, 99, 235, 0)');
                            gradient.addColorStop(1, 'rgba(37, 99, 235, 0.1)');
                            return gradient;
                        },
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false, 
                    resizeDelay: 50,
                    plugins: { 
                        legend: { display: false },
                        tooltip: {
                            enabled: true,
                            backgroundColor: '#0f172a',
                            titleFont: { size: 10, weight: 'bold' },
                            bodyFont: { size: 12, weight: 'black' },
                            padding: 12,
                            displayColors: false,
                            callbacks: {
                                label: function(context) {
                                    return 'Inquiries: ' + context.parsed.y;
                                }
                            }
                        }
                    },
                    scales: { 
                        x: { 
                            display: true,
                            grid: { display: false },
                            ticks: {
                                font: { size: 9, weight: 'bold' },
                                color: '#94a3b8',
                                autoSkip: true,
                                maxTicksLimit: 7
                            }
                        }, 
                        y: { 
                            display: true,
                            beginAtZero: true,
                            grid: { color: '#f8fafc' },
                            border: { display: false },
                            ticks: {
                                font: { size: 9, weight: 'bold' },
                                color: '#94a3b8',
                                precision: 0,
                                padding: 10
                            }
                        } 
                    }
                }
            });
        }
    }" x-init="setTimeout(() => { loading = false; $nextTick(() => { setTimeout(() => { initChart(); }, 100); }); }, 1500)">
        
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

        <div x-show="!loading" x-cloak class="min-h-screen bg-slate-50">
            <div class="max-w-7xl mx-auto px-6 py-10">
                
                <div class="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                    <div>
                        <h2 class="text-2xl font-black text-slate-900 uppercase tracking-tight">Dashboard Overview</h2>
                        <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Macro Wiring Technologies</p>
                    </div>
                    <div class="flex gap-3 bg-white p-2 rounded-2xl shadow-sm border border-slate-100 relative">
                        <div x-show="filtering" class="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-10 rounded-2xl flex items-center justify-center">
                            <div class="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                        
                        <select x-model="selectedRange" @change="updateFilter()" class="w-48 bg-slate-50 border-none rounded-xl text-[10px] font-black uppercase px-4 focus:ring-2 focus:ring-blue-500">
                            <option value="">Range: All Time</option>
                            <option value="1day">Past 24 Hours</option>
                            <option value="2days">Past 2 Days</option>
                            <option value="3days">Past 3 Days</option>
                            <option value="4days">Past 4 Days</option>
                            <option value="5days">Past 5 Days</option>
                            <option value="7days">Past 7 Days</option>
                            <option value="10days">Past 10 Days</option>
                            <option value="15days">Past 15 Days</option>
                            <option value="20days">Past 20 Days</option>
                            <option value="25days">Past 25 Days</option>
                            <option value="30days">Past 30 Days</option>
                        </select>

                        <select x-model="selectedMonth" @change="updateFilter()" class="w-48 bg-slate-50 border-none rounded-xl text-[10px] font-black uppercase px-4 focus:ring-2 focus:ring-blue-500">
                            <option value="">Month: All</option>
                            @foreach(range(1, 12) as $m)
                                <option value="{{ $m }}">{{ date('F', mktime(0, 0, 0, $m, 1)) }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
                    
                    <div class="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-white p-5 rounded-[2rem] shadow-sm border border-slate-100 flex justify-between items-center group transition-all hover:shadow-md">
                            <div>
                                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Active</p>
                                <h3 class="text-3xl font-black text-slate-900 tracking-tighter" x-text="stats.total_active"></h3>
                            </div>
                            <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                                </svg>
                            </div>
                        </div>

                        <div class="bg-white p-5 rounded-[2rem] shadow-sm border border-slate-100 flex justify-between items-center group transition-all hover:shadow-md">
                            <div>
                                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Unread</p>
                                <h3 class="text-3xl font-black text-emerald-500 tracking-tighter" x-text="unreadCount"></h3>
                            </div>
                            <div class="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                                <div class="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                    <template x-if="unreadCount > 0">
                                        <div class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                                    </template>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white p-5 rounded-[2rem] shadow-sm border border-slate-100 flex justify-between items-center group transition-all hover:shadow-md">
                            <div>
                                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Trash Bin</p>
                                <h3 class="text-3xl font-black text-slate-400 tracking-tighter" x-text="stats.trash_count"></h3>
                            </div>
                            <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-red-50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-400 group-hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-12 bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col min-h-[400px]">
                        <div class="flex justify-between items-start mb-6 shrink-0 h-10">
                            <div>
                                <h4 class="text-sm font-black text-slate-800 uppercase tracking-tight">Inquiry Traffic</h4>
                                <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Growth over selected period</p>
                            </div>
                            <span class="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">Real-time Data</span>
                        </div>
                        <div class="relative flex-grow overflow-hidden">
                            <canvas id="inquiryChart"></canvas>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
                    <div class="p-8 border-b border-slate-50 flex flex-col lg:flex-row justify-between items-center gap-6">
                        <div class="flex items-center gap-6">
                            <div>
                                <h2 class="text-xl font-black text-slate-900 uppercase tracking-tight" x-text="view === 'active' ? 'Inquiry Management' : 'Trash Bin'"></h2>
                                <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Logs & Records</p>
                            </div>
                            <div class="flex bg-slate-100 p-1 rounded-xl">
                                <button @click="view = 'active'; selectedIds = []; currentPage = 1" 
                                    :class="view === 'active' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'" 
                                    class="relative px-4 py-2 rounded-lg text-[10px] font-black uppercase transition-all">
                                    Inbox
                                    <template x-if="unreadCount > 0">
                                        <span class="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[8px] font-bold text-white shadow-sm" x-text="unreadCount"></span>
                                    </template>
                                </button>
                                <button @click="view = 'trash'; selectedIds = []; currentPage = 1" :class="view === 'trash' ? 'bg-white shadow-sm text-red-600' : 'text-slate-500'" class="px-4 py-2 rounded-lg text-[10px] font-black uppercase transition-all">Trash</button>
                            </div>
                        </div>

                        <div class="flex items-center gap-3 w-full lg:w-auto">
                            <div x-show="selectedIds.length > 0" x-transition class="flex items-center gap-2 mr-2">
                                <form action="{{ route('admin.inquiries.bulk') }}" method="POST" class="flex gap-2">
                                    @csrf
                                    <template x-for="id in selectedIds" :key="id">
                                        <input type="hidden" name="ids[]" :value="id">
                                    </template>
                                    <template x-if="view === 'active'">
                                        <button name="action" value="delete" class="bg-red-50 text-red-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-tighter hover:bg-red-600 hover:text-white transition-all">Delete Selected</button>
                                    </template>
                                    <template x-if="view === 'trash'">
                                        <div class="flex gap-2">
                                            <button name="action" value="restore" class="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-tighter hover:bg-emerald-600 hover:text-white transition-all">Restore</button>
                                            <button name="action" value="force_delete" class="bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-tighter hover:bg-red-600 transition-all">Purge</button>
                                        </div>
                                    </template>
                                </form>
                            </div>
                            <input type="text" x-model="search" @input="currentPage = 1" placeholder="Search logs or Ref #..." class="w-full lg:w-80 bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 font-semibold text-slate-700">
                        </div>
                    </div>

                    <div class="overflow-x-auto custom-scrollbar">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-slate-50 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                                <tr>
                                    <th class="px-8 py-4 w-10">
                                        <input type="checkbox" @click="toggleSelectAll" :checked="selectedIds.length === filteredInquiries.length && filteredInquiries.length > 0" class="rounded border-slate-300 text-blue-600">
                                    </th>
                                    <th class="px-4 py-4">Sender</th>
                                    <th class="px-8 py-4">Subject</th>
                                    <th class="px-8 py-4">Ref #</th>
                                    <th class="px-8 py-4 text-right">Date</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-50">
                                <template x-for="item in filteredInquiries" :key="item.id">
                                    <tr @click="openInquiry(item)" class="hover:bg-blue-50/30 transition-colors cursor-pointer group" :class="item.status === 'unread' ? 'bg-blue-50/10' : ''">
                                        <td class="px-8 py-5" @click.stop>
                                            <input type="checkbox" :value="item.id" x-model="selectedIds" class="rounded border-slate-300 text-blue-600">
                                        </td>
                                        <td class="px-4 py-5">
                                            <div class="flex items-center gap-4">
                                                <div class="relative flex-shrink-0">
                                                    <div :class="item.status === 'unread' ? 'bg-emerald-500' : 'bg-slate-300'" class="w-2.5 h-2.5 rounded-full transition-colors duration-300"></div>
                                                    <template x-if="item.status === 'unread'">
                                                        <div class="absolute inset-0 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
                                                    </template>
                                                </div>
                                                <div>
                                                    <div :class="item.status === 'unread' ? 'font-black text-slate-900' : 'font-medium text-slate-500'" x-html="highlight(item.full_name)"></div>
                                                    <div class="text-[9px] text-slate-400 font-bold uppercase tracking-tighter" x-html="highlight(item.email)"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-8 py-5">
                                            <span :class="item.status === 'unread' ? 'font-black text-slate-800' : 'font-medium text-slate-400'" class="text-sm line-clamp-1" x-html="highlight(item.subject)"></span>
                                        </td>
                                        <td class="px-8 py-5">
                                            <div class="bg-slate-100 text-slate-500 px-2 py-1 rounded text-[10px] font-black w-fit" x-html="highlight('#' + item.id.toString().padStart(4, '0'))"></div>
                                        </td>
                                        <td class="px-8 py-5 text-right">
                                            <div class="text-[10px] font-black text-slate-400 uppercase tracking-tighter" x-text="new Date(item.created_at).toLocaleDateString(undefined, {month: 'short', day: 'numeric'})"></div>
                                        </td>
                                    </tr>
                                </template>
                                <template x-if="filteredInquiries.length === 0">
                                    <tr>
                                        <td colspan="5" class="px-8 py-20 text-center">
                                            <div class="flex flex-col items-center opacity-20">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0V9a2 2 0 00-2-2H6a2 2 0 00-2 2v1M12 11l-4 4m0 0l4 4m-4-4h8" />
                                                </svg>
                                                <p class="font-black uppercase tracking-widest text-sm">No Records Found</p>
                                            </div>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>

                    <div class="px-8 py-6 bg-slate-50/50 border-t border-slate-50 flex items-center justify-between">
                        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                            Showing <span class="text-slate-900" x-text="filteredInquiries.length"></span> of <span class="text-slate-900" x-text="totalFiltered.length"></span> inquiries
                        </p>
                        <div class="flex gap-2" x-show="totalPages > 1">
                            <button 
                                @click="currentPage--" 
                                :disabled="currentPage === 1"
                                :class="currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-slate-900 hover:text-white'"
                                class="px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-tighter transition-all shadow-sm">
                                Previous
                            </button>
                            <div class="flex items-center px-4 text-[10px] font-black text-slate-400">
                                <span class="text-blue-600" x-text="currentPage"></span>
                                <span class="mx-1">/</span>
                                <span x-text="totalPages"></span>
                            </div>
                            <button 
                                @click="currentPage++" 
                                :disabled="currentPage === totalPages"
                                :class="currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:bg-slate-900 hover:text-white'"
                                class="px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-tighter transition-all shadow-sm">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<template x-if="selectedInquiry">
            <div class="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6" @click.self="selectedInquiry = null" x-transition.opacity>
                
                <div class="bg-white w-full max-w-2xl max-h-[85vh] sm:max-h-[90vh] rounded-[2rem] sm:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col" 
                     x-transition:enter="transition ease-out duration-300"
                     x-transition:enter-start="opacity-0 scale-95"
                     x-transition:enter-end="opacity-100 scale-100">
                    
                    <div class="p-6 sm:p-8 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start gap-4 bg-slate-50/50 flex-shrink-0">
<div class="flex items-center gap-4">
    <div class="w-12 h-12 flex-shrink-0 aspect-square rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-xl" 
         x-text="selectedInquiry.full_name.charAt(0)">
    </div>
    <div class="min-w-0"> <div class="flex items-center gap-2">
            <h3 class="text-lg font-black text-slate-900 truncate" x-text="selectedInquiry.full_name"></h3>
            <span class="flex-shrink-0 text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-black" 
                  x-text="'#' + selectedInquiry.id.toString().padStart(4, '0')"></span>
        </div>
        <p class="text-[10px] text-blue-600 font-black uppercase tracking-widest truncate" x-text="selectedInquiry.email"></p>
    </div>
</div>

                        <div class="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
                            <div class="text-left sm:text-right">
                                <div class="text-[9px] sm:text-[10px] font-black text-slate-900 uppercase tracking-tighter" 
                                     x-text="new Date(selectedInquiry.created_at).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })"></div>
                                <div class="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]" 
                                     x-text="new Date(selectedInquiry.created_at).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })"></div>
                            </div>
                            <button @click="selectedInquiry = null" class="w-8 h-8 flex items-center justify-center rounded-xl bg-slate-200/50 text-slate-400 hover:bg-red-50 hover:text-red-600 transition-all text-xl font-light">
                                &times;
                            </button>
                        </div>
                    </div>

                    <div class="p-6 sm:p-10 overflow-y-auto custom-scrollbar flex-grow space-y-6">
                        <div>
                            <p class="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Subject</p>
                            <h4 class="text-sm sm:text-base font-bold text-slate-800" x-text="selectedInquiry.subject"></h4>
                        </div>
                        
                        <div class="bg-slate-50 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-slate-100 shadow-inner">
                            <p class="text-[9px] sm:text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">Message Body</p>
                            <div class="text-xs sm:text-sm text-slate-600 leading-[1.8] whitespace-pre-line font-medium" x-text="selectedInquiry.message"></div>
                        </div>
                    </div>

<div class="p-8 border-t border-slate-50 bg-white flex-shrink-0">
    <div class="flex flex-col sm:flex-row gap-4">
        <a :href="'mailto:' + selectedInquiry.email" 
           class="flex-1 whitespace-nowrap bg-slate-900 text-white text-center py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-600 transition-all shadow-lg">
           Reply via Client
        </a>
        <button @click="selectedInquiry = null" 
                class="px-8 py-4 whitespace-nowrap bg-slate-100 text-slate-500 rounded-xl font-black uppercase text-[10px] tracking-widest">
                Dismiss
        </button>
    </div>
</div>
                </div>
            </div>
        </template>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</x-app-layout>