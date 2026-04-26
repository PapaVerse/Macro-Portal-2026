<section 
    x-data="{
        searchTerm: '',
        selectedCategories: [],
        showScrollTop: false,
        isAtBottom: false,
        
        // Gallery State
        isGalleryOpen: false,
        currentGallery: [],
        currentImgIndex: 0,
        activeProductName: '',

        // --- PRODUCT DATA ---
        productData: [
            {
                category: 'Cable Assemblies',
                items: [
                    { name: 'WH-1001', description: 'Automotive wire harness', image: '{{ asset('images/images/CABLE ASSEMBIES/cable-assy.jpg') }}', gallery: ['{{ asset('images/images/CABLE ASSEMBIES/img-1.jpg') }}', '{{ asset('images/images/CABLE ASSEMBIES/img-2.jpg') }}', '{{ asset('images/images/CABLE ASSEMBIES/img-3.jpg') }}'] },
                    { name: 'WH-1002', description: 'Industrial wire harness', image: '{{ asset('images/images/CABLE ASSEMBIES/cable-assy2.jpg') }}', gallery: ['{{ asset('images/images/CABLE ASSEMBIES/cable-assy2.jpg') }}', '{{ asset('images/images/CABLE ASSEMBIES/cable-assy3.jpg') }}', '{{ asset('images/images/CABLE ASSEMBIES/cable-assy4.jpg') }}'] },
                    { name: 'WH-1003', description: 'Custom wire harness', image: '{{ asset('images/images/CABLE ASSEMBIES/cable-assy3.jpg') }}', gallery: ['{{ asset('images/images/CABLE ASSEMBIES/cable-assy3.jpg') }}', '{{ asset('images/images/CABLE ASSEMBIES/cable-assy.jpg') }}', '{{ asset('images/images/CABLE ASSEMBIES/cable-assy4.jpg') }}'] },
                    { name: 'WH-1004', description: 'Heavy-duty harness', image: '{{ asset('images/images/CABLE ASSEMBIES/cable-assy4.jpg') }}', gallery: ['{{ asset('images/images/CABLE ASSEMBIES/cable-assy4.jpg') }}', '{{ asset('images/images/CABLE ASSEMBIES/cable-assy3.jpg') }}'] }
                ]
            },
            {
                category: 'Injection Molding',
                items: [
                    { name: 'SA-2001', description: 'Precision assembly unit', image: '{{ asset('images/images/INJECTION MOLDING/7.png') }}', gallery: ['{{ asset('images/images/INJECTION MOLDING/7.png') }}'] },
                    { name: 'SA-2002', description: 'Electronic assembly', image: '{{ asset('images/images/INJECTION MOLDING/8.png') }}', gallery: ['{{ asset('images/images/INJECTION MOLDING/8.png') }}'] },
                    { name: 'SA-2003', description: 'Mechanical assembly', image: '{{ asset('images/images/INJECTION MOLDING/9.png') }}', gallery: ['{{ asset('images/images/INJECTION MOLDING/9.png') }}'] },
                    { name: 'SA-2004', description: 'Custom subcon unit', image: '{{ asset('images/images/INJECTION MOLDING/20.png') }}', gallery: ['{{ asset('images/images/INJECTION MOLDING/20.png') }}'] }
                ]
            },
            {
                category: 'Power Cords',
                items: [
                    { name: 'CA-3001', description: 'High-speed cable', image: '{{ asset('images/images/POWER CORDS/24.png') }}', gallery: ['{{ asset('images/images/POWER CORDS/24.png') }}'] },
                    { name: 'CA-3002', description: 'USB cable assembly', image: '{{ asset('images/images/POWER CORDS/busbar-assemblies1.jpg') }}', gallery: ['{{ asset('images/images/POWER CORDS/busbar-assemblies1.jpg') }}'] },
                    { name: 'CA-3003', description: 'HDMI assembly', image: '{{ asset('images/images/POWER CORDS/busbar-assemblies2.jpg') }}', gallery: ['{{ asset('images/images/POWER CORDS/busbar-assemblies2.jpg') }}'] },
                    { name: 'CA-3004', description: 'Industrial cable', image: '{{ asset('images/images/POWER CORDS/hubel-leviton-plugs.jpg') }}', gallery: ['{{ asset('images/images/POWER CORDS/hubel-leviton-plugs.jpg') }}'] },
                    { name: 'CA-3005', description: 'ICE Cords', image: '{{ asset('images/images/POWER CORDS/ice-cords.jpg') }}', gallery: ['{{ asset('images/images/POWER CORDS/ice-cords.jpg') }}'] }
                ]
            }
        ],

        get filteredProducts() {
            let all = [];
            this.productData.forEach(cat => {
                cat.items.forEach(item => {
                    all.push({...item, category: cat.category});
                });
            });
            return all.filter(p => {
                const matchesSearch = p.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
                                     p.description.toLowerCase().includes(this.searchTerm.toLowerCase());
                const matchesCategory = this.selectedCategories.length === 0 || this.selectedCategories.includes(p.category);
                return matchesSearch && matchesCategory;
            });
        },

        toggleCategory(cat) {
            if (this.selectedCategories.includes(cat)) {
                this.selectedCategories = this.selectedCategories.filter(c => c !== cat);
            } else {
                this.selectedCategories.push(cat);
            }
        },

        openGallery(product) {
            if (product.gallery && product.gallery.length > 0) {
                this.currentGallery = product.gallery;
                this.currentImgIndex = 0;
                this.activeProductName = product.name;
                this.isGalleryOpen = true;
                document.body.style.overflow = 'hidden';
            }
        },

        closeGallery() {
            this.isGalleryOpen = false;
            document.body.style.overflow = 'auto';
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
    class="bg-gray-50 min-h-screen relative"
>
    <div class="tech-header-container text-white py-16 px-6 relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
            <div class="motherboard-traces"></div>
            <div class="moving-glow"></div>
        </div>
        <div class="relative z-10 max-w-7xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">Products</h1>
            <div class="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
            <p class="text-blue-100 max-w-xl mx-auto text-base md:text-lg font-light leading-relaxed">
                High-quality wiring solutions and precision components tailored for global industrial standards.
            </p>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
            
                <div class="md:col-span-1">
                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-28 h-fit">
                        <h2 class="text-xl font-bold mb-6 flex items-center gap-2">
                            <i class="fas fa-search text-blue-600"></i> Filter
                        </h2>
                        <div class="mb-8">
                            <input
                                type="text"
                                placeholder="Search products..."
                                class="w-full border border-gray-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition"
                                x-model="searchTerm"
                        />
</div>
                       <div class="space-y-2">
    <h3 class="font-semibold text-gray-400 text-xs uppercase tracking-widest mb-4">
        Categories
    </h3>

    <template x-for="cat in productData" :key="cat.category">
        <button
            @click="toggleCategory(cat.category)"
            class="w-full flex justify-between items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
            
            :class="selectedCategories.includes(cat.category)
                ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] translate-x-1'
                : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'"
        >
            <span class="tracking-tight" x-text="cat.category"></span>

            <span 
                class="text-[10px] px-2 py-0.5 rounded-md font-bold transition-all duration-300"
                :class="selectedCategories.includes(cat.category)
                    ? 'bg-white/20 text-white border border-white/30'
                    : 'bg-blue-50 text-blue-600 border border-blue-100'"
                x-text="cat.items.length.toString().padStart(2, '0')"
            ></span>
        </button>
    </template>
</div>
                    </div>
                </div>

                <div class="md:col-span-3">
                    <div x-show="filteredProducts.length === 0" x-cloak class="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
                        <p class="text-gray-500">No products found matching your criteria.</p>
                </div>
                

                    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <template x-for="(product, i) in filteredProducts" :key="i">
            <div class="relative group">

            <!-- CARD -->
            <div class="bg-white p-6 rounded-2xl border border-gray-100 
                        shadow-sm hover:shadow-xl hover:-translate-y-1 
                        transition-all duration-300">

                <!-- IMAGE (MATCHED TO CERTIFICATIONS) -->
                <div class="h-40 flex items-center justify-center mb-6 
                            bg-gray-50 rounded-xl p-4 overflow-hidden">
                    <img :src="product.image"
                        class="max-h-full object-contain 
                               transition-transform duration-500 
                               group-hover:scale-110" />
                </div>

                <!-- TEXT -->
                <div>
                    <h3 class="font-bold text-gray-900 leading-tight mb-1"
                        x-html="highlight(product.name)"></h3>

                    <p class="text-sm text-gray-500"
                       x-html="highlight(product.description)"></p>
                </div>
            </div>

            <!-- OVERLAY BUTTON -->
            <div class="absolute inset-0 flex items-center justify-center 
                        bg-black/40 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 rounded-2xl">

                <button @click="openGallery(product)"
                    class="bg-white text-blue-600 px-5 py-2 rounded-lg 
                           font-bold text-sm shadow-xl flex items-center gap-2 
                           hover:bg-blue-600 hover:text-white 
                           transition-all transform hover:scale-105">
                    <i class="fas fa-search-plus"></i> View Details
                </button>
            </div>

        </div>
    </template>
</div>
            </div>
        </div>
    </div>

    <div x-show="isGalleryOpen" 
        x-transition:enter="transition ease-out duration-300"
        x-transition:enter-start="opacity-0"
        x-transition:enter-end="opacity-100"
        x-transition:leave="transition ease-in duration-200"
        x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0"
        class="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-10" 
        x-cloak>
        
        <div class="absolute top-6 left-6 right-6 flex justify-between items-center text-white">
            <div>
                <h2 class="text-xl font-black tracking-tight uppercase" x-text="activeProductName"></h2>
                <p class="text-xs text-blue-400 font-bold tracking-widest uppercase">
                    Image <span x-text="currentImgIndex + 1"></span> of <span x-text="currentGallery.length"></span>
                </p>
            </div>
            <button @click="closeGallery()" class="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <i class="fas fa-times text-xl"></i>
            </button>
        </div>

        <div class="relative w-full max-w-5xl h-[70vh] flex items-center justify-center" @click.away="closeGallery()">
            <button @click="currentImgIndex = (currentImgIndex - 1 + currentGallery.length) % currentGallery.length" 
                class="absolute left-0 md:-left-16 z-10 p-4 bg-white/10 hover:bg-white text-white hover:text-blue-600 rounded-full transition-all active:scale-90">
                <i class="fas fa-chevron-left text-2xl"></i>
            </button>
<div class="w-full h-full flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                <img :src="currentGallery[currentImgIndex]" 
                    class="max-w-full max-h-full object-contain transition-all duration-500 transform" 
                    :key="currentImgIndex" />
            </div>

            <button @click="currentImgIndex = (currentImgIndex + 1) % currentGallery.length" 
                class="absolute right-0 md:-right-16 z-10 p-4 bg-white/10 hover:bg-white text-white hover:text-blue-600 rounded-full transition-all active:scale-90">
                <i class="fas fa-chevron-right text-2xl"></i>
            </button>
        </div>

        <div class="mt-8 flex gap-3 overflow-x-auto p-2">
            <template x-for="(img, idx) in currentGallery" :key="idx">
                <button @click="currentImgIndex = idx" 
                    class="w-16 h-16 rounded-lg overflow-hidden border-2 transition-all"
                    :class="currentImgIndex === idx ? 'border-blue-500 scale-110 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100'">
                    <img :src="img" class="w-full h-full object-cover" />
                </button>
            </template>
        </div>
    </div>

   
</section>