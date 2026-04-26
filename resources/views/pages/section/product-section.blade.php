<section
    x-data="productPage()"
    class="bg-gray-50 min-h-screen relative">

    <!-- ================= HEADER ================= -->
    <div class="tech-header-container text-white py-16 px-6 relative overflow-hidden">
        <div class="relative z-10 max-w-7xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-black mb-4 uppercase">
                Wire Harness & Cable Products
            </h1>

            <p class="text-blue-100 max-w-xl mx-auto text-base md:text-lg">
                Explore high-quality wire harnesses, cable assemblies, injection molding,
                and power cords designed for industrial and global standards.
            </p>
        </div>

    </div>


    @php
    $products = [
    [
    'category' => 'Cable Assemblies',
    'items' => [
    [
    'name' => 'WH-1001 Automotive Wire Harness',
    'description' => 'Automotive wire harness for vehicles and industrial use',
    'image' => asset('images/images/CABLE ASSEMBIES/cable-assy.jpg'),
    'gallery' => [
    asset('images/images/CABLE ASSEMBIES/img-1.jpg'),
    asset('images/images/CABLE ASSEMBIES/img-2.jpg'),
    asset('images/images/CABLE ASSEMBIES/img-3.jpg')
    ]
    ],
    [
    'name' => 'WH-1002 Industrial Wire Harness',
    'description' => 'Industrial-grade wiring harness for heavy machinery',
    'image' => asset('images/images/CABLE ASSEMBIES/cable-assy2.jpg'),
    'gallery' => [
    asset('images/images/CABLE ASSEMBIES/cable-assy2.jpg'),
    asset('images/images/CABLE ASSEMBIES/cable-assy3.jpg')
    ]
    ],
    [
    'name' => 'WH-1003 Custom Wire Harness',
    'description' => 'Custom wire harness solutions for specialized applications',
    'image' => asset('images/images/CABLE ASSEMBIES/cable-assy3.jpg'),
    'gallery' => [
    asset('images/images/CABLE ASSEMBIES/cable-assy3.jpg')
    ]
    ],
    [
    'name' => 'WH-1004 Heavy Duty Harness',
    'description' => 'Heavy-duty harness for industrial and automotive systems',
    'image' => asset('images/images/CABLE ASSEMBIES/cable-assy4.jpg'),
    'gallery' => [
    asset('images/images/CABLE ASSEMBIES/cable-assy4.jpg')
    ]
    ]
    ]
    ],
    [
    'category' => 'Injection Molding',
    'items' => [
    [
    'name' => 'SA-2001 Precision Assembly Unit',
    'description' => 'Precision injection molded assembly unit',
    'image' => asset('images/images/INJECTION MOLDING/7.png'),
    'gallery' => [asset('images/images/INJECTION MOLDING/7.png')]
    ],
    [
    'name' => 'SA-2002 Electronic Assembly',
    'description' => 'Injection molded electronic components',
    'image' => asset('images/images/INJECTION MOLDING/8.png'),
    'gallery' => [asset('images/images/INJECTION MOLDING/8.png')]
    ],
    [
    'name' => 'SA-2003 Mechanical Assembly',
    'description' => 'Mechanical molded components for industrial use',
    'image' => asset('images/images/INJECTION MOLDING/9.png'),
    'gallery' => [asset('images/images/INJECTION MOLDING/9.png')]
    ],
    [
    'name' => 'SA-2004 Custom Subcon Unit',
    'description' => 'Custom injection molding solutions',
    'image' => asset('images/images/INJECTION MOLDING/20.png'),
    'gallery' => [asset('images/images/INJECTION MOLDING/20.png')]
    ]
    ]
    ],
    [
    'category' => 'Power Cords',
    'items' => [
    [
    'name' => 'CA-3001 High-Speed Cable',
    'description' => 'High-speed cable for industrial transmission',
    'image' => asset('images/images/POWER CORDS/24.png'),
    'gallery' => [asset('images/images/POWER CORDS/24.png')]
    ],
    [
    'name' => 'CA-3002 USB Cable Assembly',
    'description' => 'USB cable assembly for electronics',
    'image' => asset('images/images/POWER CORDS/busbar-assemblies1.jpg'),
    'gallery' => [asset('images/images/POWER CORDS/busbar-assemblies1.jpg')]
    ],
    [
    'name' => 'CA-3003 HDMI Assembly',
    'description' => 'HDMI cable assembly for high-definition systems',
    'image' => asset('images/images/POWER CORDS/busbar-assemblies2.jpg'),
    'gallery' => [asset('images/images/POWER CORDS/busbar-assemblies2.jpg')]
    ],
    [
    'name' => 'CA-3004 Industrial Cable',
    'description' => 'Industrial-grade cable solutions',
    'image' => asset('images/images/POWER CORDS/hubel-leviton-plugs.jpg'),
    'gallery' => [asset('images/images/POWER CORDS/hubel-leviton-plugs.jpg')]
    ],
    [
    'name' => 'CA-3005 ICE Cords',
    'description' => 'ICE power cords for appliances',
    'image' => asset('images/images/POWER CORDS/ice-cords.jpg'),
    'gallery' => [asset('images/images/POWER CORDS/ice-cords.jpg')]
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
            $totalProducts = 0;

            foreach ($products as $category) {
            $totalProducts += count($category['items']);
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
                            class="w-full flex justify-between items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
                            :class="selected.includes('{{ $cat['category'] }}')
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] translate-x-1'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'">

                            <span>{{ $cat['category'] }}</span>

                            <span
                                class="text-[10px] px-2 py-0.5 rounded-md font-bold"
                                :class="selected.includes('{{ $cat['category'] }}')
                        ? 'bg-white/20 text-white border border-white/30'
                        : 'bg-blue-50 text-blue-600 border border-blue-100'">

                                {{ count($cat['items']) }}
                            </span>
                        </button>
                        @endforeach

                    </div>
                </div>
            </div>

            <!-- ================= PRODUCTS ================= -->
            <div class="md:col-span-3">

                <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    @foreach ($products as $category)
                    @foreach ($category['items'] as $product)

                    <article
                        @click="openGallery({{ \Illuminate\Support\Js::from($product) }})"
                        class="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-xl transition cursor-pointer"
                        x-show="filterProduct('{{ strtolower($product['name']) }}', '{{ $category['category'] }}')">

                        <div class="h-40 flex items-center justify-center mb-6 bg-gray-50 rounded-xl p-4">
                            <img
                                src="{{ $product['image'] }}"
                                alt="{{ $product['name'] }} Philippines - {{ $product['description'] }}"
                                loading="lazy"
                                class="max-h-full object-contain pointer-events-none">
                        </div>

                        <h2 class="font-bold text-gray-900">
                            {{ $product['name'] }}
                        </h2>

                        <p class="text-sm text-gray-500">
                            {{ $product['description'] }}
                        </p>

                        <button
                            @click.stop="openGallery({{ \Illuminate\Support\Js::from($product) }})"
                            class="mt-4 text-blue-600 font-semibold">
                            View Details
                        </button>

                    </article>

                    @endforeach
                    @endforeach

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
    function productPage() {
        return {
            searchTerm: '',
            selected: [],
            categories: ['Cable Assemblies', 'Power Cords', 'Injection Molding'],

            // GALLERY STATE (RESTORED)
            isOpen: false,
            gallery: [],
            index: 0,
            productName: '',

            toggleCategory(cat) {
                if (this.selected.includes(cat)) {
                    this.selected = this.selected.filter(c => c !== cat)
                } else {
                    this.selected.push(cat)
                }
            },

            filterProduct(name, category) {
                let search = name.toLowerCase().includes(this.searchTerm.toLowerCase())
                let cat = this.selected.length === 0 || this.selected.includes(category)
                return search && cat
            },

            openGallery(product) {
                this.gallery = product.gallery || []
                this.index = 0
                this.productName = product.name
                this.isOpen = true
                document.body.style.overflow = 'hidden'
            },

            close() {
                this.isOpen = false
                document.body.style.overflow = 'auto'
            },

            next() {
                this.index = (this.index + 1) % this.gallery.length
            },

            prev() {
                this.index = (this.index - 1 + this.gallery.length) % this.gallery.length
            }
        }
    }
</script>