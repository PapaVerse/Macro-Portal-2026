<section
    x-data="{
        searchTerm: '',
        selectedCategory: 'All',
        showScrollTop: false,
        isAtBottom: false,
        /* --- DATA ARRAY --- */
        certifications: [
            { category: 'Management Systems', name: 'ISO 9001:2015', description: 'Quality Management System', image: '{{ asset('images/certificates/iso-9001.png') }}', status: 'Certified' },
            { category: 'Management Systems', name: 'ISO 14001:2015', description: 'Environmental Management System', image: '{{ asset('images/certificates/iso-14001.png') }}', status: 'Certified' },
            { category: 'Product Safety', name: 'UL Recognized', description: 'Wire Harness & Power Cord Safety (E89012)', image: '{{ asset('images/certificates/ul-logo.png') }}', status: 'Active' },
            { category: 'Product Safety', name: 'RoHS & REACH', description: 'Environmental Material Compliance', image: '{{ asset('images/certificates/rohs-reach.png') }}', status: 'Compliant' },
            { category: 'Industry & ESG', name: 'EcoVadis Silver', description: 'Sustainability & CSR Rating', image: '{{ asset('images/certificates/eco-vadis.png') }}', status: 'Awarded' },
            { category: 'Industry & ESG', name: 'SEIPI Member', description: 'Semiconductor & Electronics Industry', image: '{{ asset('images/certificates/seipi-logo.png') }}', status: 'Member' },
            { category: 'Industry & ESG', name: 'Best Employer', description: 'PEZA Outstanding Employer Award', image: '{{ asset('images/certificates/best-employer.png') }}', status: 'Awarded' },
            { category: 'Industry & ESG', name: 'PEME Quality', description: 'Excellence in Manufacturing', image: '{{ asset('images/certificates/da-best-removebg-preview.png') }}', status: 'Awarded' }
        ],
        categories: ['All', 'Management Systems', 'Product Safety', 'Industry & ESG'],
        
        /* --- LOGIC --- */
        get filteredCerts() {
            return this.certifications.filter(cert => {
                const matchesSearch = cert.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
                                     cert.description.toLowerCase().includes(this.searchTerm.toLowerCase());
                const matchesCategory = this.selectedCategory === 'All' || cert.category === this.selectedCategory;
                return matchesSearch && matchesCategory;
            });
        },

        getCategoryCount(catName) {
            if (catName === 'All') return this.certifications.length;
            return this.certifications.filter(c => c.category === catName).length;
        },

        highlight(text) {
            if (!this.searchTerm.trim()) return text;
            const regex = new RegExp(`(${this.searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
            return text.replace(regex, `<mark class='bg-yellow-200 text-blue-900 rounded-sm px-0.5 font-bold'>$1</mark>`);
        },

        handleScroll() {
            this.showScrollTop = window.scrollY > 400;
            this.isAtBottom = (window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 120);
        }
    }"
    @scroll.window="handleScroll()"
    class="bg-gray-50 min-h-screen relative">
    <div class="tech-header-container text-white py-16 px-6 relative overflow-hidden">
        <div class="moving-glow"></div>
        <div class="relative z-10 max-w-7xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase" style="text-shadow: 0 0 15px rgba(96, 165, 250, 0.6);">
                Quality Assurance
            </h1>
            <div class="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
            <p class="text-blue-100 max-w-xl mx-auto text-base md:text-lg font-light leading-relaxed">
                Our commitment to excellence is verified by international governing bodies and global industry standards.
            </p>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">

            <div class="md:col-span-1">
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 md:sticky md:top-28 h-fit">
                    <h2 class="text-xl font-bold mb-6 flex items-center gap-2">
                        <i class="fas fa-search text-blue-600 text-sm"></i> Filter
                    </h2>
                    <div class="mb-8">
                        <input
                            type="text"
                            placeholder="Search standards..."
                            class="w-full border border-gray-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition"
                            x-model="searchTerm" />
                    </div>
                    <div class="space-y-2">
                        <h3 class="font-semibold text-gray-400 text-xs uppercase tracking-widest mb-4">Categories</h3>
                        <template x-for="cat in categories" :key="cat">
                            <button
                                @click="selectedCategory = cat"
                                class="w-full flex justify-between items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
                                :class="selectedCategory === cat 
                                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] translate-x-1' 
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'">
                                <span class="tracking-tight" x-text="cat"></span>
                                <span
                                    class="text-[10px] px-2 py-0.5 rounded-md font-bold transition-all duration-300"
                                    :class="selectedCategory === cat ? 'bg-white/20 text-white border border-white/30' : 'bg-blue-50 text-blue-600 border border-blue-100'"
                                    x-text="getCategoryCount(cat)"></span>
                            </button>
                        </template>
                    </div>
                </div>
            </div>

            <div class="md:col-span-3">
                <div x-show="filteredCerts.length === 0" x-cloak class="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300 animate-fade-in">
                    <p class="text-gray-500">No matching certifications found.</p>
                </div>

                <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <template x-for="(cert, index) in filteredCerts" :key="index">
                        <div class="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div class="h-40 flex items-center justify-center mb-6 bg-gray-50 rounded-xl p-4 overflow-hidden">
                                <img :src="cert.image" :alt="cert.name" class="max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div class="flex justify-between items-start mb-2 gap-2">
                                <h3 class="font-bold text-gray-900 leading-tight" x-html="highlight(cert.name)"></h3>
                                <span class="text-[9px] whitespace-nowrap bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold uppercase" x-text="cert.status"></span>
                            </div>
                            <p class="text-sm text-gray-500" x-html="highlight(cert.description)"></p>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>


</section>