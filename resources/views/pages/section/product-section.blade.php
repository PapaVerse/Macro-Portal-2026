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
            <div class="md:col-span-1">
                <div class="bg-white p-6 rounded-2xl shadow-sm border sticky top-28">

                    <h2 class="text-xl font-bold mb-4">Filter Products</h2>

                    <input
                        type="text"
                        placeholder="Search wire harness, cables..."
                        class="w-full border rounded-xl px-4 py-2 mb-6"
                        x-model="searchTerm">

                    <div class="space-y-2">
                        <template x-for="cat in categories">
                            <button
                                @click="toggleCategory(cat)"
                                class="w-full flex justify-between px-4 py-2 rounded-lg"
                                :class="selected.includes(cat) ? 'bg-blue-600 text-white' : 'bg-gray-100'">
                                <span x-text="cat"></span>
                            </button>
                        </template>
                    </div>
                </div>
            </div>

            <!-- ================= PRODUCTS ================= -->
            <div class="md:col-span-3">

                <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    @foreach ($products as $category)
                    @foreach ($category['items'] as $product)

                    <article
                        class="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-xl transition"
                        x-show="filterProduct('{{ strtolower($product['name']) }}', '{{ $category['category'] }}')">

                        <div class="h-40 flex items-center justify-center mb-6 bg-gray-50 rounded-xl p-4">
                            <img
                                src="{{ $product['image'] }}"
                                alt="{{ $product['name'] }} Philippines - {{ $product['description'] }}"
                                loading="lazy"
                                class="max-h-full object-contain">
                        </div>

                        <h2 class="font-bold text-gray-900">
                            {{ $product['name'] }}
                        </h2>

                        <p class="text-sm text-gray-500">
                            {{ $product['description'] }}
                        </p>

                        <button
                            @click='openGallery(@json($product))'
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
    <div x-show="isOpen"
        @click.self="close()"
        class="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50 p-6">

        <!-- TOP BAR -->
        <div class="absolute top-6 left-6 right-6 flex justify-between text-white">
            <h2 class="font-bold" x-text="productName"></h2>
            <button @click="close()" class="text-2xl">✕</button>
        </div>

        <!-- IMAGE VIEWER -->
        <div class="relative flex items-center justify-center w-full max-w-5xl h-[70vh]">

            <!-- PREV -->
            <button @click="prev()"
                class="absolute left-0 p-4 text-white bg-white/10 rounded-full">
                ‹
            </button>

            <!-- IMAGE -->
            <img :src="gallery[index]"
                class="max-h-full object-contain">

            <!-- NEXT -->
            <button @click="next()"
                class="absolute right-0 p-4 text-white bg-white/10 rounded-full">
                ›
            </button>
        </div>

        <!-- THUMBNAILS -->
        <div class="flex gap-3 mt-6">
            <template x-for="(img, i) in gallery" :key="i">
                <img :src="img"
                    @click="index = i"
                    class="w-16 h-16 object-cover rounded cursor-pointer border"
                    :class="index === i ? 'border-blue-500' : 'opacity-50'">
            </template>
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