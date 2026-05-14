<section

    x-data="productPage()"
    class="bg-gray-50 min-h-screen relative">

    <!-- ================= HEADER ================= -->


    <div class="tech-header-container text-white py-16 px-6 relative overflow-hidden">
        <div class="moving-glow"></div>
        <div class="relative z-10 max-w-7xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase" style="text-shadow: 0 0 15px rgba(96, 165, 250, 0.6);">
                Wire Harness & Cable Products
            </h1>
            <div class="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
            <p class="text-blue-100 max-w-xl mx-auto text-base md:text-lg font-light leading-relaxed">
                Explore high-quality wire harnesses, cable assemblies, subcon assemblies,
                and power cords designed for industrial and global standards. </p>
        </div>
    </div>


    @php
    $products = [

    [
    'category' => 'Wire Harnesses',
    'items' => [
    [
    'name' => 'Wire Harnesses',
    'description' => 'Wire Harnesses',
    'image' => asset('images\images\WIRE-HARNESSES\Wire-Harnesses\18.png'),
    'gallery' => [
    asset('images\images\WIRE-HARNESSES\Wire-Harnesses\18.png'),
    asset('images\images\WIRE-HARNESSES\Wire-Harnesses\50.png'),
    asset('images\images\WIRE-HARNESSES\Wire-Harnesses\55.png'),
    asset('images\images\WIRE-HARNESSES\Wire-Harnesses\56.png'),
    asset('images\images\WIRE-HARNESSES\Wire-Harnesses\58.png'),
    asset('images\images\WIRE-HARNESSES\Wire-Harnesses\61.png'),
    asset('images\images\WIRE-HARNESSES\Wire-Harnesses\70.png'),
    asset('images\images\WIRE-HARNESSES\Wire-Harnesses\83.png'),
    asset('images\images\WIRE-HARNESSES\Wire-Harnesses\84.png'),
    asset('images\images\WIRE-HARNESSES\Wire-Harnesses\92.png'),
    asset('images\images\WIRE-HARNESSES\Wire-Harnesses\93.png'),
    asset('images\images\WIRE-HARNESSES\Wire-Harnesses\95.png')


    ]
    ]
    ]
    ],





    /* Zero Images Cable Assemblies - Sir Pau*/
    /* | asset('images\images\Wire-Assembly\12.png'), | Example start after " | " */

    [
    'category' => 'Cable Assemblies',
    'items' => [
    [
    'name' => 'Cable Assemblies',
    'description' => 'Cable Assemblies',
    'image' => asset('images\images\CABLE-ASSEMBIES\1.jpg'),
    'gallery' => [

    ]
    ]
    ]
    ],


    [
    'category' => 'Wire Assemblies',
    'items' => [
    [
    'name' => 'Wire Assemblies',
    'description' => 'Wire Assemblies',
    'image' => asset('images\images\Wire-Assembly\12.png'),
    'gallery' => [
    asset('images\images\Wire-Assembly\12.png'),
    asset('images\images\Wire-Assembly\19.png'),
    asset('images\images\Wire-Assembly\20.png'),
    asset('images\images\Wire-Assembly\21.png'),
    asset('images\images\Wire-Assembly\32.png'),
    asset('images\images\Wire-Assembly\34.png'),
    asset('images\images\Wire-Assembly\43.png'),
    asset('images\images\Wire-Assembly\44.png'),
    asset('images\images\Wire-Assembly\47.png'),
    asset('images\images\Wire-Assembly\48.png'),
    asset('images\images\Wire-Assembly\49.png'),
    asset('images\images\Wire-Assembly\51.png'),
    asset('images\images\Wire-Assembly\52.png'),
    asset('images\images\Wire-Assembly\64.png'),
    asset('images\images\Wire-Assembly\65.png'),
    asset('images\images\Wire-Assembly\71.png'),
    asset('images\images\Wire-Assembly\74.png'),
    asset('images\images\Wire-Assembly\78.png'),
    asset('images\images\Wire-Assembly\80.png'),
    asset('images\images\Wire-Assembly\85.png')

    ]
    ]
    ]
    ],


    [
    'category' => 'Lead Wires',
    'items' => [
    [
    'name' => 'Lead Wires',
    'description' => 'Lead Wires',
    'image' => asset('images\images\Lead-Wires\8.png'),
    'gallery' => [
    asset('images\images\Lead-Wires\8.png'),
    asset('images\images\Lead-Wires\16.png'),
    asset('images\images\Lead-Wires\17.png'),
    asset('images\images\Lead-Wires\27.png'),
    asset('images\images\Lead-Wires\33.png'),
    asset('images\images\Lead-Wires\37.png'),
    asset('images\images\Lead-Wires\39.png'),
    asset('images\images\Lead-Wires\40.png'),
    asset('images\images\Lead-Wires\54.png'),
    asset('images\images\Lead-Wires\60.png'),
    asset('images\images\Lead-Wires\62.png'),
    asset('images\images\Lead-Wires\66.png'),
    asset('images\images\Lead-Wires\67.png'),
    asset('images\images\Lead-Wires\72.png'),
    asset('images\images\Lead-Wires\76.png'),
    asset('images\images\Lead-Wires\89.png')
    ]
    ]
    ]
    ],

    [
    'category' => 'Battery Cable Assemblies',
    'items' => [
    [
    'name' => 'Battery Cable Assemblies',
    'description' => 'Cable Assemblies',
    'image' => asset('images\images\Battery-Cable\3.png'),
    'gallery' => [
    asset('images\images\Battery-Cable\3.png'),
    asset('images\images\Battery-Cable\5.png'),
    asset('images\images\Battery-Cable\7.png'),
    asset('images\images\Battery-Cable\9.png'),
    asset('images\images\Battery-Cable\10.png'),
    asset('images\images\Battery-Cable\14.png'),
    asset('images\images\Battery-Cable\23.png'),
    asset('images\images\Battery-Cable\28.png'),
    asset('images\images\Battery-Cable\38.png'),
    asset('images\images\Battery-Cable\45.png'),
    asset('images\images\Battery-Cable\77.png'),
    asset('images\images\Battery-Cable\87.png')
    ]
    ]
    ]
    ],

    [
    'category' => 'Ribbon Cable',
    'items' => [
    [
    'name' => 'Ribbon Cable',
    'description' => 'Ribbon Cable',
    'image' => asset('images\images\Ribbon-Cables\36.png'),
    'gallery' => [
    asset('images\images\Ribbon-Cables\36.png'),
    asset('images\images\Ribbon-Cables\41.png'),
    asset('images\images\Ribbon-Cables\42.png'),
    asset('images\images\Ribbon-Cables\46.png'),
    asset('images\images\Ribbon-Cables\57.png'),
    asset('images\images\Ribbon-Cables\75.png'),
    asset('images\images\Ribbon-Cables\81.png'),
    asset('images\images\Ribbon-Cables\82.png'),
    asset('images\images\Ribbon-Cables\86.png'),
    asset('images\images\Ribbon-Cables\88.png')
    ]
    ]
    ]
    ],

    [
    'category' => 'Metal & Plastic Wire Harness Assemblies',
    'items' => [
    [
    'name' => 'Metal and Plastic Wire Assemblies',
    'description' => 'Metal and Plastic Wire Assemblies',
    'image' => asset('images\images\Metal-and-Plastic\1.png'),
    'gallery' => [
    asset('images\images\Metal-and-Plastic\1.png'),
    asset('images\images\Metal-and-Plastic\2.png'),
    asset('images\images\Metal-and-Plastic\6.png'),
    asset('images\images\Metal-and-Plastic\13.png'),
    asset('images\images\Metal-and-Plastic\22.png'),
    asset('images\images\Metal-and-Plastic\24.png'),
    asset('images\images\Metal-and-Plastic\25.png'),
    asset('images\images\Metal-and-Plastic\26.png'),
    asset('images\images\Metal-and-Plastic\68.png'),
    asset('images\images\Metal-and-Plastic\69.png'),
    asset('images\images\Metal-and-Plastic\90.png'),
    asset('images\images\Metal-and-Plastic\91.png')
    ]
    ]
    ]
    ],

    /* Zero Images Cable Assemblies - Sir Pau*/
    /* | asset('images\images\Wire-Assembly\12.png'), | Example start after " | " */



    [
    'category' => 'Communication Cables',
    'items' => [
    [
    'name' => 'Communication Cables',
    'description' => 'Communication Cables',
    'image' => asset('images\images\CABLE-ASSEMBIES\1.jpg'),
    'gallery' => [

    ]
    ]
    ]
    ],

    /* Zero Images Fan Motors - Sir Pau*/
    /* | asset('images\images\Wire-Assembly\12.png'), | Example start after " | " */

    [
    'category' => 'Fan Motor Assemblies',
    'items' => [
    [
    'name' => 'Fan Motor Assemblies',
    'description' => 'Fan Motor Assemblies',
    'image' => asset('images\images\CABLE-ASSEMBIES\1.jpg'),
    'gallery' => [

    ]
    ]
    ]
    ]
    ];


    @endphp

    <!-- ================= CONTENT ================= -->
    <div class="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">

            <!-- ================= FILTER ================= -->

            @php
            function countAllProducts($items) {
            $count = 0;

            foreach ($items as $item) {

            // Count images in main gallery
            if (!empty($item['gallery']) && is_array($item['gallery'])) {
            $count += count($item['gallery']);
            }

            // Count images in subcategories
            if (!empty($item['subcategories']) && is_array($item['subcategories'])) {

            foreach ($item['subcategories'] as $sub) {

            if (!empty($sub['gallery']) && is_array($sub['gallery'])) {
            $count += count($sub['gallery']);
            }
            }
            }
            }

            return $count;
            }

            $totalProducts = 0;

            foreach ($products as $category) {
            $totalProducts += countAllProducts($category['items']);
            }
            @endphp
            <div class="md:col-span-1">
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-28 h-fit">

                    <!-- TITLE -->
                    <h2 class="text-xl font-bold mb-6 flex items-center gap-2">
                        <i class="fas fa-search text-blue-600 text-sm"></i> Filter
                    </h2>

                    <!-- SEARCH -->
                    <div class="mb-8">
                        <input
                            type="text"
                            placeholder="Search products..."
                            class="w-full border border-gray-200 rounded-xl px-4 py-2 
                       focus:ring-2 focus:ring-blue-500 outline-none transition"
                            x-model="searchTerm" />
                    </div>

                    <!-- CATEGORIES -->
                    <div class="space-y-2">
                        <h3 class="font-semibold text-gray-400 text-xs uppercase tracking-widest mb-4">
                            Categories
                        </h3>

                        <!-- ALL BUTTON -->
                        <button
                            @click="selected = []"
                            class="w-full flex justify-between items-center px-4 py-2 rounded-lg"
                            :class="selected.length === 0 ? 'bg-blue-600 text-white' : 'bg-gray-100'">

                            <span>All</span>

                            <span class="text-xs font-bold bg-white/20 px-2 py-1 rounded">
                                {{ $totalProducts }}
                            </span>
                        </button>

                        <!-- CATEGORY BUTTONS -->
                        @foreach ($products as $cat)
                        <button
                            @click="toggleCategory('{{ $cat['category'] }}')"
                            class="w-full flex justify-between items-start gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-all duration-300"
                            :class="selected.includes('{{ $cat['category'] }}')
        ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] translate-x-1'
        : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'">

                            <span class="flex-1">
                                {{ $cat['category'] }}
                            </span>

                            <span
                                class="shrink-0 text-[10px] px-2 py-0.5 rounded-md font-bold"
                                :class="selected.includes('{{ $cat['category'] }}')
            ? 'bg-white/20 text-white border border-white/30'
            : 'bg-blue-50 text-blue-600 border border-blue-100'">

                                {{ countAllProducts($cat['items']) }}
                            </span>
                        </button>
                        @endforeach

                    </div>
                </div>
            </div>



            <!-- ================= PRODUCTS ================= -->
            <!-- ================= PRODUCTS (CAROUSEL) ================= -->
            <div class="md:col-span-3">

                @php
                $slides = [];
                foreach ($products as $category) {
                foreach ($category['items'] as $product) {
                if (!empty($product['subcategories'])) {
                foreach ($product['subcategories'] as $sub) {
                foreach ($sub['gallery'] as $img) {
                $slides[] = [
                'img' => $img,
                'name' => $sub['name'],
                'cat' => $category['category'],
                'parent' => $product['name']
                ];
                }
                }
                } else {
                foreach ($product['gallery'] as $img) {
                $slides[] = [
                'img' => $img,
                'name' => $product['name'],
                'cat' => $category['category'],
                'parent' => null
                ];
                }
                }
                }
                }
                @endphp

                <div x-data="carouselSection({{ \Illuminate\Support\Js::from($slides) }})"
                    x-init="init()"
                    class="w-full">

                    {{-- TITLE BAR --}}
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-xl font-bold text-gray-800" x-text="activeTitle"></h2>
                        <span class="text-sm text-gray-400" x-text="filtered.length + ' images'"></span>
                    </div>

                    {{-- MAIN CAROUSEL --}}
                    <div class="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden backdrop-blur-sm"
                        style="height: 460px;">

                        {{-- COUNTER --}}
                        <div class="absolute top-4 right-4 z-20 bg-black/50 text-white text-xs px-3 py-1 rounded-full"
                            x-text="(idx + 1) + ' / ' + filtered.length">
                        </div>

                        {{-- SLIDES --}}
                        <template x-for="(slide, i) in filtered" :key="i">
                            <div class="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
                                :style="i === idx ? 'opacity:1' : 'opacity:0; pointer-events:none'">
                                <img :src="slide.img"
                                    :alt="slide.name"
                                    class="max-h-full max-w-full object-contain"
                                    loading="lazy">
                            </div>
                        </template>

                        {{-- GRADIENT OVERLAY --}}


                        {{-- SLIDE LABEL --}}
                        <div class="absolute bottom-16 left-6 z-10 text-black" x-show="filtered.length > 0">
                            <div class="text-lg font-semibold" style="text-shadow: 0 1px 6px rgba(0,0,0,0.6)"
                                x-text="filtered[idx]?.name"></div>
                            <div class="text-sm text-black"
                                x-text="filtered[idx]?.cat"></div>
                        </div>

                        {{-- LEFT ARROW --}}
                        <button @click="prev()"
                            class="absolute left-4 top-1/2 -translate-y-1/2 z-20
                           w-10 h-10 rounded-full bg-black/50 hover:bg-black/70
                           text-white flex items-center justify-center transition-all">
                            <i class="fas fa-chevron-left text-sm"></i>
                        </button>

                        {{-- RIGHT ARROW --}}
                        <button @click="next()"
                            class="absolute right-4 top-1/2 -translate-y-1/2 z-20
                           w-10 h-10 rounded-full bg-black/50 hover:bg-black/70
                           text-white flex items-center justify-center transition-all">
                            <i class="fas fa-chevron-right text-sm"></i>
                        </button>

                        {{-- EMPTY STATE --}}
                        <div x-show="filtered.length === 0"
                            class="absolute inset-0 flex items-center justify-center text-white/50 text-sm">
                            No products match your search.
                        </div>
                    </div>

                    {{-- THUMBNAILS --}}
                    <div x-show="filtered.length > 0"
                        class="flex gap-2 overflow-x-auto py-3 px-2 bg-gray-100 rounded-b-2xl"
                        style="scrollbar-width: thin;">
                        <template x-for="(slide, i) in filtered" :key="i">
                            <div @click="goTo(i)"
                                class="flex-shrink-0 w-16 h-14 rounded-lg overflow-hidden cursor-pointer
                            border-2 transition-all duration-200"
                                :class="i === idx
                         ? 'border-blue-500 opacity-100 scale-105'
                         : 'border-transparent opacity-50 hover:opacity-80'">
                                <img :src="slide.img"
                                    :alt="slide.name"
                                    class="w-full h-full object-cover"
                                    loading="lazy">
                            </div>
                        </template>
                    </div>

                </div>
            </div>

        </div>
    </div>

    <!-- ================= GALLERY ================= -->
    <div
        x-show="isOpen"
        x-transition
        @click="close()"

        @keydown.window.escape="close()"
        @keydown.window.arrow-right.prevent="next()"
        @keydown.window.arrow-left.prevent="prev()"

        class="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

        <!-- CLOSE BUTTON -->
        <button
            @click="close()"
            class="absolute top-6 right-6 text-white text-2xl z-50">
            ✕
        </button>

        <div class="relative flex items-center justify-center w-full max-w-5xl">

            <!-- LEFT ARROW -->
            <button
                @click.stop="prev()"
                class="absolute -left-12 md:-left-16 top-1/2 -translate-y-1/2 
           w-12 h-12 flex items-center justify-center
           bg-white/10 hover:bg-white text-white hover:text-blue-600
           rounded-full transition-all z-50">

                <i class="fas fa-chevron-left text-xl"></i>
            </button>

            <!-- IMAGE -->
            <img
                :src="gallery.length ? gallery[index] : ''"
                @click.stop
                class="max-h-[70vh] object-contain rounded-xl shadow-2xl transition-all duration-300">

            <!-- RIGHT ARROW -->
            <button
                @click.stop="next()"
                class="absolute -right-12 md:-right-16 top-1/2 -translate-y-1/2 
           w-12 h-12 flex items-center justify-center
           bg-white/10 hover:bg-white text-white hover:text-blue-600
           rounded-full transition-all z-50">

                <i class="fas fa-chevron-right text-xl"></i>

            </button>

        </div>

        <div class="absolute bottom-6 left-0 right-0 flex justify-center">
            <div class="flex gap-3 overflow-x-auto px-4 py-2 bg-white/10 backdrop-blur rounded-xl">

                <template x-for="(img, i) in gallery" :key="i">
                    <img
                        :src="img"
                        @click.stop="index = i"
                        class="w-16 h-16 object-cover rounded-lg cursor-pointer border-2 transition-all"
                        :class="index === i 
                    ? 'border-blue-500 scale-110' 
                    : 'border-transparent opacity-60 hover:opacity-100'">
                </template>

            </div>
        </div>

    </div>



    <!-- ================= SEO PRODUCTS ================= -->
    @php
    $seoProducts = [];

    foreach ($products as $category) {
    foreach ($category['items'] as $product) {
    $seoProducts[] = [
    "@type" => "Product",
    "name" => $product['name'],
    "description" => $product['description'],
    "image" => $product['image'],
    ];
    }
    }
    @endphp

    <!-- ================= STRUCTURED DATA ================= -->
    <script type="application/ld+json">
        @json([
            "@context" => "https://schema.org",
            "@type" => "ItemList",
            "itemListElement" => $seoProducts
        ])
    </script>
</section>

<!-- ================= ALPINE ================= -->
<script>
    function carouselSection(allSlides) {
        return {
            allSlides,
            filtered: [],
            idx: 0,
            autoTimer: null,
            activeTitle: 'All Products',

            init() {
                this.filtered = [...this.allSlides];
                this.startAuto();

                window.addEventListener('product-filter', (e) => {
                    const {
                        selected,
                        searchTerm,
                        title
                    } = e.detail;

                    this.activeTitle = title;

                    this.filtered = this.allSlides.filter(s => {
                        const catMatch =
                            selected.length === 0 ||
                            selected.includes(s.cat);

                        const term = searchTerm.toLowerCase();

                        const nameMatch = !term ||
                            s.name.toLowerCase().includes(term) ||
                            s.cat.toLowerCase().includes(term);

                        return catMatch && nameMatch;
                    });

                    this.idx = 0;
                });
            },

            goTo(i) {
                this.idx =
                    (i + this.filtered.length) %
                    this.filtered.length;

                this.resetAuto();
            },

            next() {
                this.goTo(this.idx + 1);
            },

            prev() {
                this.goTo(this.idx - 1);
            },

            startAuto() {
                this.autoTimer = setInterval(() => {
                    this.next();
                }, 4500);
            },

            resetAuto() {
                clearInterval(this.autoTimer);
                this.startAuto();
            }
        };
    }

    function productPage() {
        return {
            searchTerm: '',
            selected: [],
            categories: [
                'Cable Assemblies',
                'Power Cords',
                'Injection Molding'
            ],

            activeSubcategories: [],
            selectedProduct: null,

            // GALLERY
            isOpen: false,
            gallery: [],
            index: 0,
            productName: '',

            init() {
                const params = new URLSearchParams(window.location.search);

                let category = params.get('category');

                if (category) {
                    category = decodeURIComponent(category);
                    category = category.replace(/\+/g, ' ');

                    this.selected = [category];
                }

                // WATCHERS
                this.$watch('searchTerm', () => {
                    this.dispatchFilter();
                });

                this.$watch('selected', () => {
                    this.dispatchFilter();
                });

                // INITIAL DISPATCH
                this.dispatchFilter();
            },

            dispatchFilter() {
                const title =
                    this.selected.length === 0 ?
                    'All Products' :
                    this.selected.join(', ');

                window.dispatchEvent(
                    new CustomEvent('product-filter', {
                        detail: {
                            selected: this.selected,
                            searchTerm: this.searchTerm,
                            title
                        }
                    })
                );
            },

            toggleCategory(cat) {
                if (this.selected.includes(cat)) {
                    this.selected =
                        this.selected.filter(c => c !== cat);
                } else {
                    this.selected.push(cat);
                }

                this.dispatchFilter();
            },

            filterProduct(name, category, subcategories = []) {
                let term = this.searchTerm.toLowerCase();

                let matchName =
                    name.toLowerCase().includes(term);

                let matchCategory =
                    category.toLowerCase().includes(term);

                let matchSub =
                    subcategories.some(sub =>
                        sub.name.toLowerCase().includes(term)
                    );

                let catFilter =
                    this.selected.length === 0 ||
                    this.selected.includes(category);

                return (
                    (matchName || matchCategory || matchSub) &&
                    catFilter
                );
            },

            openGallery(product) {
                if (product.subcategories) {
                    this.activeSubcategories =
                        product.subcategories;

                    this.selectedProduct = product;

                    return;
                }

                this.gallery = product.gallery || [];
                this.index = 0;
                this.productName = product.name;
                this.isOpen = true;

                document.body.style.overflow = 'hidden';
            },

            openSubCategory(sub) {
                this.gallery = sub.gallery || [];
                this.index = 0;
                this.productName = sub.name;
                this.isOpen = true;

                document.body.style.overflow = 'hidden';
            },

            resetSubcategories() {
                this.activeSubcategories = [];
                this.selectedProduct = null;
            },

            close() {
                this.isOpen = false;
                document.body.style.overflow = 'auto';
            },

            next() {
                this.index =
                    (this.index + 1) %
                    this.gallery.length;
            },

            prev() {
                this.index =
                    (this.index - 1 + this.gallery.length) %
                    this.gallery.length;
            }
        };
    }
</script>