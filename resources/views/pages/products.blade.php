<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Products | Macro Wiring Technologies</title>

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    @else
        <script src="https://cdn.tailwindcss.com"></script>
    @endif

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&family=Inter:wght@400;700;900&display=swap');
        
        nav {
            background: #001e30;
            height: 90px;
            width: 100%;
            font-family: "Montserrat", sans-serif;
            position: sticky;
            top: 0;
            z-index: 1001;
        }
        label.logo {
            color: white;
            font-size: 24px;
            line-height: 90px;
            padding: 0 40px;
            font-weight: 800;
            cursor: pointer;
            text-transform: uppercase;
        }
        nav ul {
            float: right;
            margin-right: 30px;
            list-style: none;
            display: flex;
            gap: 2rem;
            align-items: center;
            height: 100%;
        }
        .nav-link-animated {
            position: relative;
            color: white;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
            transition: color 0.3s ease;
            padding-bottom: 8px;
        }
        .nav-link-animated:hover { color: #60a5fa; }
        .nav-link-animated::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #60a5fa;
            transform: scaleX(0);
            transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
        }
        .nav-link-animated:hover::after { transform: scaleX(1); }
        .active-link { color: #60a5fa !important; }
        .active-link::after { transform: scaleX(1); }

        .checkbtn {
            font-size: 30px;
            color: white;
            float: right;
            line-height: 90px;
            margin-right: 40px;
            cursor: pointer;
            display: none;
        }
        #check { display: none; }

        @media (max-width: 1100px) {
            .checkbtn { display: block; }
            nav ul {
                position: fixed;
                width: 100%;
                height: 100vh;
                background: #0b1120;
                top: 90px;
                left: -100%;
                text-align: center;
                flex-direction: column;
                padding-top: 60px;
                transition: all .4s;
            }
            #check:checked ~ ul { left: 0; }
        }

        /* Integrated New Tech Header CSS */
        .tech-header-container {
            position: relative;
            isolation: isolate;
            overflow: hidden;
            background-color: #020617; 
        }


        .moving-glow {
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 50% 50%, 
                rgba(30, 64, 175, 0.4) 0%, 
                rgba(15, 23, 42, 0.2) 50%, 
                transparent 100%);
            animation: pulse-glow 8s ease-in-out infinite;
            z-index: -1;
        }

        .tech-header-container::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image: radial-gradient(rgba(96, 165, 250, 0.4) 1px, transparent 1px);
            background-size: 40px 40px;
            opacity: 0.3;
            z-index: -1;
        }

        @keyframes circuit-drift {
            from { transform: perspective(1000px) rotateX(20deg) translateY(0); }
            to { transform: perspective(1000px) rotateX(20deg) translateY(-150px); }
        }

        @keyframes pulse-glow {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
        }

        [x-cloak] { display: none !important; }

        .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;  
            overflow: hidden;
        }

        /* --- SCROLL TO TOP BUTTON --- */
.glass-button {
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
    color: #1e293b;
}

.glass-button:hover {
    background: #2563eb; /* blue-600 */
    color: white;
    transform: translateY(-5px);
    box-shadow: 0 12px 40px 0 rgba(37, 99, 235, 0.3);
}
    </style>
</head>

<body class="bg-gray-50 font-sans antialiased" x-data="productGallery()" @scroll.window="handleScroll()">

    <nav>
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn"><i class="fas fa-bars"></i></label>
        <label class="logo" onclick="window.location.href='{{ route('home') }}'">Macro Wiring</label>
        <ul>
            <li><a href="{{ route('home') }}" class="nav-link-animated">Home</a></li>
            <li><a href="{{ route('products') }}" class="nav-link-animated active-link">Products</a></li>
            <li><a href="#" class="nav-link-animated">Certifications</a></li>
            <li><a href="#" class="nav-link-animated">About Us</a></li>
            <li><a href="#" class="nav-link-animated">Contact Us</a></li>
            <li><a href="{{ route('login') }}" class="nav-link-animated">Admin</a></li>
        </ul>
    </nav>

    <div class="tech-header-container text-white py-20 px-6 overflow-hidden">
        <div class="tech-grid-animation"></div>
        <div class="moving-glow"></div>

        <div class="relative z-10 max-w-7xl mx-auto text-center">
            <h1 class="text-4xl md:text-6xl font-black mb-4 tracking-tight uppercase">Products</h1>
            <div class="h-1.5 w-24 bg-blue-500 mx-auto mb-6 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
            <p class="text-blue-100 max-w-xl mx-auto text-base md:text-lg font-light leading-relaxed">
                High-quality wiring solutions and precision components tailored for global industrial standards.
            </p>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
            
            <aside class="md:col-span-1">
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

                    <div class="space-y-3">
                        <h3 class="font-semibold text-gray-400 text-xs uppercase tracking-widest mb-4">Categories</h3>
                        <template x-for="cat in productData" :key="cat.category">
                            <label class="flex items-center justify-between p-2 rounded-lg cursor-pointer group transition-all duration-300"
                                   :class="selectedCategories.includes(cat.category) ? 'bg-blue-50/50' : 'hover:bg-gray-50'">
                                <div class="flex items-center space-x-3">
                                    <input type="checkbox" 
                                           :value="cat.category" 
                                           x-model="selectedCategories"
                                           class="w-4 h-4 accent-blue-600 rounded cursor-pointer" />
                                    <span class="transition-colors duration-300 text-sm" 
                                          :class="selectedCategories.includes(cat.category) ? 'text-blue-700 font-semibold' : 'text-gray-700 group-hover:text-blue-600'"
                                          x-text="cat.category"></span>
                                </div>
                                <span class="text-[10px] px-2 py-0.5 rounded font-mono font-bold transition-all duration-300 border"
                                      :class="selectedCategories.includes(cat.category) ? 'bg-blue-600 text-white border-blue-400' : 'bg-gray-100 text-gray-500 border-gray-200'"
                                      x-text="cat.items.length.toString().padStart(2, '0')"></span>
                            </label>
                        </template>
                    </div>
                </div>
            </aside>

            <main class="md:col-span-3">
                <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <template x-for="(product, i) in filteredProducts" :key="i">
                        <div class="relative group h-full">
                            <div class="bg-white rounded-[2.5rem] p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                                <div class="aspect-square bg-gray-50 rounded-3xl mb-6 flex items-center justify-center overflow-hidden">
                                    <img :src="product.image" :alt="product.name" class="w-2/3 h-2/3 object-contain group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div class="flex-grow">
                                    <h3 class="text-xl font-bold text-gray-900 mb-2" x-text="product.name"></h3>
                                    <p class="text-gray-500 text-sm line-clamp-2" x-text="product.description"></p>
                                </div>
                            </div>

                            <div class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-[2.5rem] pointer-events-none">
                                <button @click="openGallery(product)"
                                        class="pointer-events-auto bg-white text-blue-600 px-6 py-2.5 rounded-xl font-bold text-sm shadow-2xl flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 active:scale-95">
                                    <i class="fas fa-search-plus"></i> View Details
                                </button>
                            </div>
                        </div>
                    </template>
                </div>

                <div x-show="filteredProducts.length === 0" x-cloak class="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
                    <p class="text-gray-500">No products found matching your criteria.</p>
                </div>
            </main>
        </div>
    </div>

    <div x-show="isGalleryOpen" x-cloak
         class="fixed inset-0 z-[2000] bg-slate-900/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-10"
         x-transition:enter="transition ease-out duration-300"
         x-transition:enter-start="opacity-0"
         x-transition:leave="transition ease-in duration-200"
         x-transition:leave-end="opacity-0">
        
        <div class="absolute top-6 left-6 right-6 flex justify-between items-center text-white">
            <div>
                <h2 class="text-xl font-black tracking-tight uppercase" x-text="activeProductName"></h2>
                <p class="text-xs text-blue-400 font-bold tracking-widest uppercase" x-text="'Image ' + (currentImgIndex + 1) + ' of ' + currentGallery.length"></p>
            </div>
            <button @click="closeGallery()" class="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <i class="fas fa-times text-xl"></i>
            </button>
        </div>

        <div class="relative w-full max-w-5xl h-[70vh] flex items-center justify-center">
            <button @click="prevImg()" class="absolute left-0 md:-left-16 z-10 p-4 bg-white/10 hover:bg-white text-white hover:text-blue-600 rounded-full transition-all">
                <i class="fas fa-chevron-left text-2xl"></i>
            </button>

            <div class="w-full h-full flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-white/5">
                <img :src="currentGallery[currentImgIndex]" class="max-w-full max-h-full object-contain" />
            </div>

            <button @click="nextImg()" class="absolute right-0 md:-right-16 z-10 p-4 bg-white/10 hover:bg-white text-white hover:text-blue-600 rounded-full transition-all">
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


    <script>
    function productGallery() {
        return {
            searchTerm: '',
            selectedCategories: [],
            isGalleryOpen: false,
            currentGallery: [],
            currentImgIndex: 0,
            activeProductName: '',
            showScrollTop: false,
            isAtBottom: false,

productData: [
    {
        category: "Wire Harnesses",
        items: [
            { 
                name: "WH-1001", 
                description: "Automotive wire harness", 
                image: "{{ asset('images/images/WIRE HARNESSES/WH-1001.png') }}", 
                gallery: ["{{ asset('images/images/WIRE HARNESSES/WH-1001.png') }}"] 
            },
            { 
                name: "WH-1002", 
                description: "Industrial wire harness", 
                image: "{{ asset('images/images/WIRE HARNESSES/WH-1002.png') }}", 
                gallery: ["{{ asset('images/images/WIRE HARNESSES/WH-1002.png') }}"] 
            },
            { 
                name: "WH-1003", 
                description: "Custom wire harness", 
                image: "{{ asset('images/images/WIRE HARNESSES/WH-1003.png') }}", 
                gallery: ["{{ asset('images/images/WIRE HARNESSES/WH-1003.png') }}"] 
            },
            { 
                name: "WH-1004", 
                description: "Heavy-duty harness", 
                image: "{{ asset('images/images/WIRE HARNESSES/WH-1004.png') }}", 
                gallery: ["{{ asset('images/images/WIRE HARNESSES/WH-1004.png') }}"] 
            },
        ]
    },
    {
        category: "Subcon / Assemblies",
        items: [
            { 
                name: "Circuit Breakers", 
                description: "High-voltage circuit protection", 
                image: "{{ asset('images/images/SUBCON/CIRCUIT BREAKERS/CIRCUIT BREAKERS.png') }}", 
                gallery: [
                    "{{ asset('images/images/SUBCON/CIRCUIT BREAKERS/CIRCUIT BREAKERS.png') }}",
                    "{{ asset('images/images/SUBCON/CIRCUIT BREAKERS/CIRCUIT BREAKERS2.png') }}"
                ] 
            },
            { 
                name: "Powerpole Assemblies", 
                description: "Modular power connector assemblies", 
                image: "{{ asset('images/images/SUBCON/POWERPOLE ASSEMBLIES/25.png') }}", 
                gallery: [
                    "{{ asset('images/images/SUBCON/POWERPOLE ASSEMBLIES/25.png') }}",
                    "{{ asset('images/images/SUBCON/POWERPOLE ASSEMBLIES/POWERPOLE ASSY.png') }}",
                    "{{ asset('images/images/SUBCON/POWERPOLE ASSEMBLIES/POWERPOLE ASSY1.png') }}",
                    "{{ asset('images/images/SUBCON/POWERPOLE ASSEMBLIES/POWERPOLE ASSY2.png') }}"
                ] 
            }
        ]
    },
    {
        category: "Power Cords",
        items: [
            { 
                name: "CA-3001", 
                description: "High-speed cable", 
                image: "{{ asset('images/images/power-cords/24.png') }}", 
                gallery: ["{{ asset('images/images/power-cords/24.png') }}"] 
            },
            { 
                name: "CA-3005", 
                description: "ICE Cords", 
                image: "{{ asset('images/images/power-cords/ice-cords.png') }}", 
                gallery: ["{{ asset('images/images/power-cords/ice-cords.png') }}"] 
            },
            { 
                name: "Busbar Assemblies", 
                description: "Custom power distribution busbars", 
                image: "{{ asset('images/images/power-cords/busbar-assemblies1.png') }}", 
                gallery: [
                    "{{ asset('images/images/power-cords/busbar-assemblies1.png') }}",
                    "{{ asset('images/images/power-cords/busbar-assemblies2.png') }}"
                ] 
            }
        ]
    },
    {
        category: "Cable Assemblies",
        items: [
            { 
                name: "General Assembly", 
                description: "Custom cable assembly solutions", 
                image: "{{ asset('images/images/cable-assemblies/cable-assy.png') }}", 
                gallery: [
                    "{{ asset('images/images/cable-assemblies/cable-assy.png') }}",
                    "{{ asset('images/images/cable-assemblies/cable-assy2.png') }}",
                    "{{ asset('images/images/cable-assemblies/cable-assy3.png') }}",
                    "{{ asset('images/images/cable-assemblies/img-1.png') }}"
                ] 
            }
        ]
    },
    {
        category: "Injection Molding",
        items: [
            { 
                name: "Molded Plugs", 
                description: "Precision injection molded power connectors", 
                image: "{{ asset('images/images/injection-molding/7.png') }}", 
                gallery: [
                    "{{ asset('images/images/injection-molding/7.png') }}",
                    "{{ asset('images/images/injection-molding/8.png') }}",
                    "{{ asset('images/images/injection-molding/9.png') }}",
                    "{{ asset('images/images/injection-molding/20.png') }}",
                    "{{ asset('images/images/injection-molding/21.png') }}"
                ] 
            }
        ]
    }
],

            handleScroll() {
                this.showScrollTop = window.scrollY > 400;
                this.isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 120);
            },

            get filteredProducts() {
                let flattened = [];
                this.productData.forEach(cat => {
                    cat.items.forEach(item => {
                        flattened.push({ ...item, category: cat.category });
                    });
                });

                return flattened.filter(p => {
                    const matchSearch = p.name.toLowerCase().includes(this.searchTerm.toLowerCase());
                    const matchCat = this.selectedCategories.length === 0 || this.selectedCategories.includes(p.category);
                    return matchSearch && matchCat;
                });
            },

            openGallery(product) {
                this.currentGallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
                this.currentImgIndex = 0;
                this.activeProductName = product.name;
                this.isGalleryOpen = true;
                document.body.style.overflow = 'hidden';
            },

            closeGallery() {
                this.isGalleryOpen = false;
                document.body.style.overflow = 'auto';
            },

            nextImg() { this.currentImgIndex = (this.currentImgIndex + 1) % this.currentGallery.length; },
            prevImg() { this.currentImgIndex = (this.currentImgIndex - 1 + this.currentGallery.length) % this.currentGallery.length; }
        }
    }
    </script>
        <button @click="window.scrollTo({ top: 0, behavior: 'smooth' })"
        class="fixed z-[999] p-4 rounded-full transition-all duration-500 hover:bg-blue-600 hover:text-white glass-button"
        :class="{ 'bottom-32 right-8': isAtBottom, 'bottom-8 right-8': !isAtBottom, 'opacity-100 scale-100': showScrollTop, 'opacity-0 scale-50 pointer-events-none': !showScrollTop }">
        <i class="fas fa-chevron-up"></i>
    </button>
            @include('.footer')
</body>
</html>