<section x-data="productManager()" class="bg-gray-50 min-h-screen relative">
    <div class="tech-header-container text-white py-16 px-6 relative overflow-hidden">
        <div class="moving-glow"></div>
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
                    <h2 class="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                        <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                        Filter
                    </h2>
                    
                    <div class="mb-8">
                        <input
                            type="text"
                            placeholder="Search products..."
                            class="w-full border border-gray-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition"
                            x-model="searchTerm"
                        />
                    </div>

                    <div class="space-y-3">
                        <h3 class="font-semibold text-gray-400 text-xs uppercase tracking-widest mb-4">Categories</h3>
                        <template x-for="cat in categories" :key="cat">
                            <label class="flex items-center justify-between p-2 rounded-lg cursor-pointer group transition-all duration-300"
                                   :class="selectedCategories.includes(cat) ? 'bg-blue-50/50' : 'hover:bg-gray-50'">
                                <div class="flex items-center space-x-3">
                                    <input type="checkbox" :value="cat" x-model="selectedCategories" class="w-4 h-4 accent-blue-600 rounded cursor-pointer" />
                                    <span class="text-sm transition-colors duration-300" 
                                          :class="selectedCategories.includes(cat) ? 'text-blue-700 font-semibold' : 'text-gray-700 group-hover:text-blue-600'" 
                                          x-text="cat"></span>
                                </div>
                            </label>
                        </template>
                    </div>
                </div>
            </div>

            <div class="md:col-span-3">
                <div x-show="filteredProducts().length === 0" class="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
                    <p class="text-gray-500">No products found matching your criteria.</p>
                </div>

                <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <template x-for="product in filteredProducts()" :key="product.name">
                        <div class="relative group bg-white p-4 rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-xl flex flex-col h-full">
                            <div class="relative overflow-hidden rounded-2xl mb-4 h-48 bg-gray-100 flex-shrink-0">
                                <img :src="product.image" :alt="product.name" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                                
                                <div class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    <button @click="openGallery(product)" class="pointer-events-auto bg-white text-blue-600 px-6 py-2.5 rounded-xl font-bold text-sm shadow-2xl flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                                        View Details
                                    </button>
                                </div>
                            </div>
                            <div class="flex flex-col flex-grow">
                                <h3 class="font-bold text-slate-900 text-lg" x-text="product.name"></h3>
                                <p class="text-slate-500 text-sm" x-text="product.description"></p>
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
         x-cloak
         class="fixed inset-0 z-[2000] bg-slate-900/95 backdrop-blur-sm flex flex-col items-center justify-center p-4"
         @keydown.escape.window="closeGallery()">
        
        <div class="absolute top-6 left-6 right-6 flex justify-between items-center text-white">
            <div>
                <h2 class="text-xl font-black tracking-tight uppercase" x-text="activeProduct.name"></h2>
                <p class="text-xs text-blue-400 font-bold tracking-widest uppercase">
                    Image <span x-text="currentImgIndex + 1"></span> of <span x-text="activeProduct.gallery?.length"></span>
                </p>
            </div>
            <button @click="closeGallery()" class="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        </div>

        <div class="relative w-full max-w-5xl h-[70vh] flex items-center justify-center">
            <button @click="prevImg()" class="absolute left-0 md:-left-16 z-10 p-4 bg-white/10 hover:bg-white text-white hover:text-blue-600 rounded-full transition-all">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            </button>

            <div class="w-full h-full flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                <img :src="activeProduct.gallery ? activeProduct.gallery[currentImgIndex] : ''" class="max-w-full max-h-full object-contain">
            </div>

            <button @click="nextImg()" class="absolute right-0 md:-right-16 z-10 p-4 bg-white/10 hover:bg-white text-white hover:text-blue-600 rounded-full transition-all">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
        </div>
    </div>
</section>

<script>
function productManager() {
    return {
        searchTerm: '',
        selectedCategories: [],
        categories: ['Cable Assemblies', 'Injection Molding', 'Power Cords', 'Sub-Con'],
        isGalleryOpen: false,
        currentImgIndex: 0,
        activeProduct: { name: '', gallery: [] },
        
        products: [
            // --- CABLE ASSEMBLIES ---
            { 
                name: 'WH-1001', 
                description: 'Automotive wire harness', 
                category: 'Cable Assemblies', 
                image: "{{ asset('images/images/CABLE ASSEMBIES/cable-assy.jpg') }}",
                gallery: ["{{ asset('images/images/CABLE ASSEMBIES/img-1.jpg') }}", "{{ asset('images/images/CABLE ASSEMBIES/img-2.jpg') }}", "{{ asset('images/images/CABLE ASSEMBIES/img-3.jpg') }}"]
            },
            { 
                name: 'WH-1002', 
                description: 'Industrial wire harness', 
                category: 'Cable Assemblies', 
                image: "{{ asset('images/images/CABLE ASSEMBIES/cable-assy2.jpg') }}",
                gallery: ["{{ asset('images/images/CABLE ASSEMBIES/cable-assy2.jpg') }}"]
            },
            { 
                name: 'WH-1003', 
                description: 'Custom wire harness', 
                category: 'Cable Assemblies', 
                image: "{{ asset('images/images/CABLE ASSEMBIES/cable-assy3.jpg') }}",
                gallery: ["{{ asset('images/images/CABLE ASSEMBIES/cable-assy3.jpg') }}"]
            },

            // --- INJECTION MOLDING ---
            { 
                name: 'SA-2001', 
                description: 'Precision injection unit (7)', 
                category: 'Injection Molding', 
                image: "{{ asset('images/images/INJECTION MOLDING/7.png') }}",
                gallery: ["{{ asset('images/images/INJECTION MOLDING/7.png') }}"]
            },
            { 
                name: 'SA-2002', 
                description: 'Electronic molding (20)', 
                category: 'Injection Molding', 
                image: "{{ asset('images/images/INJECTION MOLDING/20.png') }}",
                gallery: ["{{ asset('images/images/INJECTION MOLDING/20.png') }}"]
            },
            { 
                name: 'SA-2003', 
                description: 'Connector Molding (21)', 
                category: 'Injection Molding', 
                image: "{{ asset('images/images/INJECTION MOLDING/21.png') }}",
                gallery: ["{{ asset('images/images/INJECTION MOLDING/21.png') }}"]
            },

            // --- POWER CORDS ---
            { 
                name: 'CA-3001', 
                description: 'Industrial cord (24)', 
                category: 'Power Cords', 
                image: "{{ asset('images/images/POWER CORDS/24.png') }}",
                gallery: ["{{ asset('images/images/POWER CORDS/24.png') }}"]
            },
            { 
                name: 'CA-3002', 
                description: 'Busbar Assembly Type 1', 
                category: 'Power Cords', 
                image: "{{ asset('images/images/POWER CORDS/busbar-assemblies1.jpg') }}",
                gallery: ["{{ asset('images/images/POWER CORDS/busbar-assemblies1.jpg') }}", "{{ asset('images/images/POWER CORDS/busbar-assemblies2.jpg') }}"]
            },
            { 
                name: 'CA-3005', 
                description: 'ICE Cords Connection', 
                category: 'Power Cords', 
                image: "{{ asset('images/images/POWER CORDS/ice-cords.jpg') }}",
                gallery: ["{{ asset('images/images/POWER CORDS/ice-cords.jpg') }}"]
            },

            // --- SUB-CON ---
            { 
                name: 'CB-4001', 
                description: 'Industrial Circuit Breaker', 
                category: 'Sub-Con', 
                image: "{{ asset('images/images/SUBCON/CIRCUIT BREAKERS/CIRCUIT BREAKERS.jpg') }}",
                gallery: ["{{ asset('images/images/SUBCON/CIRCUIT BREAKERS/CIRCUIT BREAKERS2.jpg') }}"]
            },
            { 
                name: 'PP-5001', 
                description: 'Powerpole Assembly Unit', 
                category: 'Sub-Con', 
                image: "{{ asset('images/images/SUBCON/USER INTERFACE ASSEMBLY/USER INTERFACE ASSEMBLY2.jpg') }}",
                gallery: ["{{ asset('images/images/SUBCON/USER INTERFACE ASSEMBLY/USER INTERFACE ASSEMBLY.jpg') }}"]
            },
            { 
                name: 'PP-5002', 
                description: 'Ribbon Assembly (25)', 
                category: 'Sub-Con', 
                image: "{{ asset('images/images/SUBCON/SPOT ASSEMBLY/SPOT ASSEMBLY.jpg') }}",
                gallery: ["{{ asset('images/images/SUBCON/SPOT ASSEMBLY/SPOT ASSEMBLY2.jpg') }}"]
            }
        ],

        filteredProducts() {
            return this.products.filter(p => {
                const s = this.searchTerm.toLowerCase();
                const matchesSearch = p.name.toLowerCase().includes(s) || p.description.toLowerCase().includes(s);
                const matchesCat = this.selectedCategories.length === 0 || this.selectedCategories.includes(p.category);
                return matchesSearch && matchesCat;
            });
        },

        openGallery(product) {
            this.activeProduct = product;
            this.currentImgIndex = 0;
            this.isGalleryOpen = true;
            document.body.style.overflow = 'hidden';
        },

        closeGallery() {
            this.isGalleryOpen = false;
            document.body.style.overflow = 'auto';
        },

        nextImg() {
            this.currentImgIndex = (this.currentImgIndex + 1) % this.activeProduct.gallery.length;
        },

        prevImg() {
            this.currentImgIndex = (this.currentImgIndex - 1 + this.activeProduct.gallery.length) % this.activeProduct.gallery.length;
        }
    }
}
</script>