

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
    'name' => 'Cut/Crimp Wires',
    'description' => 'Cut/Crimp Wires',
    'image' => asset('images/images/WIRE-HARNESSES/CUT-CRIMP-WIRES/BIGWIRE/big1.jpg'),


    'subcategories' => [
    [
    'name' => 'Big Wires',
    'gallery' => [
    asset('images/images/WIRE-HARNESSES/CUT-CRIMP-WIRES/BIGWIRE/big1.jpg'),
    asset('images/images/WIRE-HARNESSES/CUT-CRIMP-WIRES/BIGWIRE/big2.jpg'),
    asset('images/images/WIRE-HARNESSES/CUT-CRIMP-WIRES/BIGWIRE/big3.jpg'),
    asset('images/images/WIRE-HARNESSES/CUT-CRIMP-WIRES/BIGWIRE/big4.jpg'),
    asset('images/images/WIRE-HARNESSES/CUT-CRIMP-WIRES/BIGWIRE/big5.jpg'),
    asset('images/images/WIRE-HARNESSES/CUT-CRIMP-WIRES/BIGWIRE/big6.jpg'),
    asset('images/images/WIRE-HARNESSES/CUT-CRIMP-WIRES/BIGWIRE/big7.jpg'),
    asset('images/images/WIRE-HARNESSES/CUT-CRIMP-WIRES/BIGWIRE/bigwire.png')
    ]
    ],
    [
    'name' => 'Lead Wires',
    'gallery' => [
    asset('images\images\WIRE-HARNESSES\CUT-CRIMP-WIRES\CUT-CRIMP-LEADWIRE\cut-crimp1.jpg'),
    asset('images\images\WIRE-HARNESSES\CUT-CRIMP-WIRES\CUT-CRIMP-LEADWIRE\cut-crimp2.jpg'),
    asset('images\images\WIRE-HARNESSES\CUT-CRIMP-WIRES\CUT-CRIMP-LEADWIRE\cut-crimp3.jpg'),
    asset('images\images\WIRE-HARNESSES\CUT-CRIMP-WIRES\CUT-CRIMP-LEADWIRE\cut-crimp4.png'),
    asset('images\images\WIRE-HARNESSES\Additional2\leadwire.png'),
    asset('images\images\WIRE-HARNESSES\Additional2\leadwire1.png'),
    asset('images\images\WIRE-HARNESSES\Additional2\leadwire4.png'),
    asset('images\images\WIRE-HARNESSES\Additional2\leadwire5.png'),
    asset('images\images\WIRE-HARNESSES\Additional2\leadwire7.png'),
    asset('images\images\WIRE-HARNESSES\Additional2\leadwire8.png'),
    asset('images\images\WIRE-HARNESSES\Additional2\leadwire9.png'),
    asset('images\images\WIRE-HARNESSES\Additional2\leadwire10.png'),
    asset('images\images\WIRE-HARNESSES\Additional2\leadwire11.png'),
    asset('images\images\WIRE-HARNESSES\Additional2\leadwire12.png')


    ]
    ],
    [
    'name' => 'Tinned Wires',
    'gallery' => [
    asset('images\images\WIRE-HARNESSES\CUT-CRIMP-WIRES\CUT-AND-TINNED\cut1.jpg'),
    asset('images\images\WIRE-HARNESSES\CUT-CRIMP-WIRES\CUT-AND-TINNED\cut2.jpg')
    ]
    ],
    [
    'name' => 'Cut Wires',
    'gallery' => [
    asset('images\images\WIRE-HARNESSES\CUT-CRIMP-WIRES\CUTTING\cutting1.jpg'),
    asset('images\images\WIRE-HARNESSES\CUT-CRIMP-WIRES\CUTTING\cutting2.jpg'),
    asset('images\images\WIRE-HARNESSES\CUT-CRIMP-WIRES\CUTTING\cutting3.jpg'),
    asset('images\images\WIRE-HARNESSES\CUT-CRIMP-WIRES\CUTTING\cutting4.jpg'),
    asset('images\images\WIRE-HARNESSES\CUT-CRIMP-WIRES\CUTTING\cutting5.jpg')

    ]
    ]
    ],

    // optional fallback gallery
    'gallery' => []
    ],





    [
    'name' => 'Fan Motors',
    'description' => 'Fan Motors',
    'image' => asset('images\images\WIRE-HARNESSES\FAN-MOTORS\FAN-MOTORS.jpg'),
    'gallery' => [
    asset('images\images\WIRE-HARNESSES\FAN-MOTORS\FAN-MOTORS.jpg'),
    asset('images\images\WIRE-HARNESSES\FAN-MOTORS\FAN-MOTORS2.jpg')
    ]
    ],




    [
    'name' => 'Wire Assemblies',
    'description' => 'Wire Assemblies',
    'image' => asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\MORE-WIRE-HARNESS-ASSEMBLY\1.jpg'),


    'subcategories' => [
    [
    'name' => 'Wires with Mate-N Lock Housting',
    'gallery' => [
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\WIRE-WITH-MATE-N-LOCK-HOUSING\HOUSING.jpg'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\WIRE-WITH-MATE-N-LOCK-HOUSING\HOUSING2.jpg'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\WIRE-WITH-MATE-N-LOCK-HOUSING\HOUSING3.jpg'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\WIRE-WITH-MATE-N-LOCK-HOUSING\wirehousing.png'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\WIRE-WITH-MATE-N-LOCK-HOUSING\wirehousing1.png'),


    ]
    ],
    [
    'name' => 'Wires to Bussbar Assy',
    'gallery' => [
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\WIRE-TO-BUSSBAR-ASSY\BUSSBAR-ASSY.jpg'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\WIRE-TO-BUSSBAR-ASSY\BUSSBAR-ASSY2.jpg'),


    ]
    ],
    [
    'name' => 'Wires to Inlet/Outlet Assy ',
    'gallery' => [
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\WIRES-TO-INLET-OUTLET-ASSY\INLET1.jpg'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\WIRES-TO-INLET-OUTLET-ASSY\INLET2.jpg'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\WIRES-TO-INLET-OUTLET-ASSY\INLET3.jpg'),
    asset('images\images\WIRE-HARNESSES\Additional\soldering.png'),

    ]
    ],
    [
    'name' => 'Wire with Housing ',
    'gallery' => [
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\WIRE-WITH-HOUSING\HOUSING1.jpg'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\WIRE-WITH-HOUSING\HOUSING2.jpg'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\WIRE-WITH-HOUSING\HOUSING3.jpg'),
    asset('images\images\WIRE-HARNESSES\Additional2\float1.png'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\WIRE-WITH-HOUSING\om_assy.png'),


    ]
    ],
    [
    'name' => 'More Wire Harness Assembly',
    'gallery' => [
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\MORE-WIRE-HARNESS-ASSEMBLY\1.jpg'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\MORE-WIRE-HARNESS-ASSEMBLY\2.jpg'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\MORE-WIRE-HARNESS-ASSEMBLY\3.jpg'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\MORE-WIRE-HARNESS-ASSEMBLY\4.jpg'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\MORE-WIRE-HARNESS-ASSEMBLY\5.jpg'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\MORE-WIRE-HARNESS-ASSEMBLY\6.jpg'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\MORE-WIRE-HARNESS-ASSEMBLY\7.jpg'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\MORE-WIRE-HARNESS-ASSEMBLY\8.jpg'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\MORE-WIRE-HARNESS-ASSEMBLY\9.jpg'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\MORE-WIRE-HARNESS-ASSEMBLY\10.png'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\MORE-WIRE-HARNESS-ASSEMBLY\11.png'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\MORE-WIRE-HARNESS-ASSEMBLY\12.png'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\MORE-WIRE-HARNESS-ASSEMBLY\13.png'),
    asset('images\images\WIRE-HARNESSES\Additional\litkit.png'),
    asset('images\images\WIRE-HARNESSES\Additional\wireassy.png'),
    asset('images\images\WIRE-HARNESSES\Additional\wireassy111.png'),
    asset('images\images\WIRE-HARNESSES\Additional\wireassy112.png'),
    asset('images\images\WIRE-HARNESSES\Additional\wireassy113.png'),
    asset('images\images\WIRE-HARNESSES\Additional\wireassy114.png'),
    asset('images\images\WIRE-HARNESSES\Additional2\agilis.png'),
    asset('images\images\WIRE-HARNESSES\Additional2\agilis1.png'),
    asset('images\images\WIRE-HARNESSES\Additional2\agilis2.png'),
    asset('images\images\WIRE-HARNESSES\Additional2\agilis3.png'),
    asset('images\images\WIRE-HARNESSES\Additional2\agilis4.png'),
    asset('images\images\WIRE-HARNESSES\Additional2\agilis5.png'),
    asset('images\images\WIRE-HARNESSES\WIRE-ASSEMBLIES\MORE-WIRE-HARNESS-ASSEMBLY\wireassy.png'),



    ]
    ]
    ],

    // optional fallback gallery
    'gallery' => []
    ],





    [
    'name' => 'Ribon Cables',
    'description' => 'Ribon Cables',
    'image' => asset('images\images\WIRE-HARNESSES\RIBBON-CABLE\1.jpg'),
    'gallery' => [
    asset('images\images\WIRE-HARNESSES\RIBBON-CABLE\1.jpg'),
    asset('images\images\WIRE-HARNESSES\RIBBON-CABLE\2.jpg'),
    asset('images\images\WIRE-HARNESSES\RIBBON-CABLE\3.jpg'),
    asset('images\images\WIRE-HARNESSES\RIBBON-CABLE\4.jpg'),
    asset('images\images\WIRE-HARNESSES\RIBBON-CABLE\5.jpg'),
    asset('images\images\WIRE-HARNESSES\RIBBON-CABLE\6.jpg'),
    asset('images\images\WIRE-HARNESSES\RIBBON-CABLE\7.png'),
    asset('images\images\WIRE-HARNESSES\RIBBON-CABLE\8.png'),
    asset('images\images\WIRE-HARNESSES\Additional\flatcable.png'),
    asset('images\images\WIRE-HARNESSES\Additional2\flatcable1.png'),
    asset('images\images\WIRE-HARNESSES\Additional2\flatcable2.png'),


    ]
    ],


    [
    'name' => 'Wire Harnesses with Ferrite Core',
    'description' => 'Wire Harnesses with Ferrite Core',
    'image' => asset('images\images\WIRE-HARNESSES\FERRITE-CORE\1.jpg'),
    'gallery' => [
    asset('images\images\WIRE-HARNESSES\FERRITE-CORE\1.jpg'),
    asset('images\images\WIRE-HARNESSES\FERRITE-CORE\2.jpg'),
    asset('images\images\WIRE-HARNESSES\FERRITE-CORE\3.jpg'),
    ]
    ],

    [
    'name' => 'Power Pole',
    'description' => 'Power Pole',
    'image' => asset('images\images\WIRE-HARNESSES\POWERPOLE-ASSEMBLIES\1.jpg'),
    'gallery' => [
    asset('images\images\WIRE-HARNESSES\POWERPOLE-ASSEMBLIES\1.jpg'),
    asset('images\images\WIRE-HARNESSES\POWERPOLE-ASSEMBLIES\2.jpg'),
    asset('images\images\WIRE-HARNESSES\POWERPOLE-ASSEMBLIES\3.jpg'),
    asset('images\images\WIRE-HARNESSES\POWERPOLE-ASSEMBLIES\4.png'),
    asset('images\images\WIRE-HARNESSES\Additional\float.png'),
    asset('images\images\WIRE-HARNESSES\Additional2\float0.png'),
    asset('images\images\WIRE-HARNESSES\Additional2\float2.png'),
    asset('images\images\WIRE-HARNESSES\Additional2\float3.png'),
    asset('images\images\WIRE-HARNESSES\Additional2\float4.png')



    ]
    ]
    ]
    ],



    [
    'category' => 'Cable Assemblies',
    'items' => [
    [
    'name' => 'Cable Assemblies',
    'description' => 'Cable Assemblies',
    'image' => asset('images\images\CABLE-ASSEMBIES\1.jpg'),
    'gallery' => [
    asset('images\images\CABLE-ASSEMBIES\1.jpg'),
    asset('images\images\CABLE-ASSEMBIES\3.jpg'),
    asset('images\images\CABLE-ASSEMBIES\4.jpg'),
    asset('images\images\CABLE-ASSEMBIES\6.jpg'),
    asset('images\images\CABLE-ASSEMBIES\7.jpg')
    ]
    ]
    ]
    ],



    [
    'category' => 'Subcon Assemblies',
    'items' => [
    [
    'name' => 'Circuit Breakers',
    'description' => 'Circuit Breakers',
    'image' => asset('images\images\SUBCON\CIRCUIT-BREAKERS\1.jpg'),
    'gallery' => [
    asset('images\images\SUBCON\CIRCUIT-BREAKERS\1.jpg'),
    asset('images\images\SUBCON\CIRCUIT-BREAKERS\2.jpg'),

    ]
    ],

    [
    'name' => 'Spot Assembly',
    'description' => 'Spot Assembly',
    'image' => asset('images\images\SUBCON\SPOT-ASSEMBLY\1.jpg'),
    'gallery' => [
    asset('images\images\SUBCON\SPOT-ASSEMBLY\1.jpg'),
    asset('images\images\SUBCON\SPOT-ASSEMBLY\2.jpg'),
    asset('images\images\SUBCON\SPOT-ASSEMBLY\3.jpg')


    ]
    ],

    [
    'name' => 'User Interface Assembly',
    'description' => 'User Interface Assembly',
    'image' => asset('images\images\SUBCON\USER-INTERFACE\1.jpg'),
    'gallery' => [
    asset('images\images\SUBCON\USER-INTERFACE\1.jpg'),
    asset('images\images\SUBCON\USER-INTERFACE\2.jpg'),
    asset('images\images\SUBCON\USER-INTERFACE\3.jpg')



    ]
    ],

    [
    'name' => 'Kits',
    'description' => 'Kits',
    'image' => asset('images\images\SUBCON\KITS\LITERATURE\LITKIT4.jpg'),


    'subcategories' => [
    [
    'name' => 'Hardware',
    'gallery' => [
    asset('images\images\SUBCON\KITS\HARDWARE\HARDWARE-KITS.jpg'),
    asset('images\images\SUBCON\KITS\HARDWARE\HARDWARE-KITS2.jpg'),
    asset('images\images\SUBCON\KITS\HARDWARE\HARDWARE-KITS3.jpg'),
    asset('images\images\SUBCON\KITS\HARDWARE\HARDWARE-KITS4.jpg'),
    asset('images\images\SUBCON\KITS\HARDWARE\HARDWARE-KITS5.jpg')

    ]
    ],
    [
    'name' => 'Literature',
    'gallery' => [
    asset('images\images\SUBCON\KITS\LITERATURE\LITKIT.jpg'),
    asset('images\images\SUBCON\KITS\LITERATURE\LITKIT2.jpg'),
    asset('images\images\SUBCON\KITS\LITERATURE\LITKIT3.jpg'),
    asset('images\images\SUBCON\KITS\LITERATURE\LITKIT4.jpg'),
    asset('images\images\SUBCON\KITS\LITERATURE\LITKIT5.jpg')


    ]
    ],
    [

    'name' => 'Rail',
    'gallery' => [
    asset('images\images\SUBCON\KITS\RAIL\RAILKIT.jpg'),
    asset('images\images\SUBCON\KITS\RAIL\RAILKIT2.jpg'),


    ]
    ]
    ],

    // optional fallback gallery
    'gallery' => []
    ],




    [
    'name' => 'Mount and Top Panel Assy',
    'description' => 'Mount and Top Panel Assy',
    'image' => asset('images\images\SUBCON\REAR-PANEL\METAL-BEZZEL\1.jpg'),


    'subcategories' => [
    [
    'name' => 'Metal Bezzel Assy',
    'gallery' => [
    asset('images\images\SUBCON\REAR-PANEL\METAL-BEZZEL\1.jpg'),
    asset('images\images\SUBCON\REAR-PANEL\METAL-BEZZEL\2.jpg'),
    asset('images\images\SUBCON\REAR-PANEL\METAL-BEZZEL\3.jpg'),
    asset('images\images\SUBCON\REAR-PANEL\METAL-BEZZEL\4.jpg'),
    asset('images\images\SUBCON\REAR-PANEL\METAL-BEZZEL\5.jpg'),
    asset('images\images\SUBCON\REAR-PANEL\METAL-BEZZEL\s_pannel.png')


    ]
    ],
    [
    'name' => 'Top Panel Assy',
    'gallery' => [
    asset('images\images\SUBCON\REAR-PANEL\TOP-PANEL\1.jpg'),
    asset('images\images\SUBCON\REAR-PANEL\TOP-PANEL\2.jpg'),
    asset('images\images\SUBCON\REAR-PANEL\TOP-PANEL\3.jpg'),
    asset('images\images\SUBCON\REAR-PANEL\TOP-PANEL\4.jpg'),
    asset('images\images\SUBCON\REAR-PANEL\TOP-PANEL\5.jpg'),


    ]
    ],


    [
    'name' => 'Rack Mount Assembly',
    'gallery' => [
    asset('images\images\SUBCON\REAR-PANEL\RACKMOUNT-ASSEMBLY\1.jpg'),
    asset('images\images\SUBCON\REAR-PANEL\RACKMOUNT-ASSEMBLY\2.jpg'),
    asset('images\images\SUBCON\REAR-PANEL\RACKMOUNT-ASSEMBLY\3.jpg'),
    asset('images\images\SUBCON\REAR-PANEL\RACKMOUNT-ASSEMBLY\rearpanel.png'),
    asset('images\images\SUBCON\REAR-PANEL\RACKMOUNT-ASSEMBLY\rearpanel1.png'),


    ]
    ]
    ]
    ]
    ],

    // optional fallback gallery
    'gallery' => []
    ],








    [
    'category' => 'Power Cords',
    'items' => [
    [
    'name' => 'IEC Cords',
    'description' => 'IEC Cords',
    'image' => asset('images\images\POWER-CORDS\ice-cords.jpg'),
    'gallery' => [
    asset('images\images\POWER-CORDS\ice-cords.jpg'),
    asset('images\images\POWER-CORDS\24.png'),
    ]
    ],
    [
    'name' => 'Hubbel-Leviton',
    'description' => 'Hubbel-Leviton',
    'image' => asset('images\images\POWER-CORDS\hubel-leviton-plugs.jpg'),
    'gallery' => [asset('images\images\POWER-CORDS\hubel-leviton-plugs.jpg')]
    ],

    [
    'name' => 'Bussbar Assemblies',
    'description' => 'Bussbar Assemblies',
    'image' => asset('images\images\POWER-CORDS\busbar-assemblies1.jpg'),
    'gallery' => [
    asset('images\images\POWER-CORDS\busbar-assemblies1.jpg'),
    asset('images\images\POWER-CORDS\busbar-assemblies2.jpg'),
    ]
    ],

    [
    'name' => 'AUX Cable Connectors',
    'description' => 'AUX Cable Connectors ',
    'image' => asset('images\images\POWER-CORDS\powercord5.png'),
    'gallery' => [
    asset('images\images\POWER-CORDS\powercord5.png'),

    ]
    ],

    [
    'name' => 'Three Prong Cords',
    'description' => 'Three Prong Cords',
    'image' => asset('images\images\POWER-CORDS\44.png'),
    'gallery' => [
    asset('images\images\POWER-CORDS\powercord.png'),
    asset('images\images\POWER-CORDS\powercord3.png'),
    asset('images\images\POWER-CORDS\powercord6.png'),
    asset('images\images\POWER-CORDS\44.png')
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

            // Count the main product itself
            $count += 1;

            // If it has subcategories, count them too
            if (!empty($item['subcategories']) && is_array($item['subcategories'])) {
            $count += count($item['subcategories']);
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

                                {{ countAllProducts($cat['items']) }}
                            </span>
                        </button>
                        @endforeach

                    </div>
                </div>
            </div>



            <!-- ================= PRODUCTS ================= -->
            <div class="md:col-span-3">
                <div x-show="activeSubcategories.length > 0">

                    <!-- HEADER -->
                    <div class="mb-8">
                        <button
                            @click="resetSubcategories()"
                            class="text-blue-600 font-semibold hover:underline mb-2">
                            ← Back to Products
                        </button>

                        <h2 class="text-2xl font-bold"
                            x-text="selectedProduct?.name">
                        </h2>
                    </div>

                    <!-- SAME GRID AS PRODUCTS -->
                    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        <template x-for="sub in activeSubcategories" :key="sub.name">
                            <article
                                @click="openSubCategory(sub)"
                                class="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-xl transition cursor-pointer">

                                <!-- IMAGE (MATCH PRODUCT STYLE EXACTLY) -->
                                <div class="h-40 flex items-center justify-center mb-6 bg-gray-50 rounded-xl p-4">
                                    <img
                                        :src="sub.gallery[0]"
                                        class="max-h-full object-contain">
                                </div>

                                <!-- TITLE -->
                                <h2 class="font-bold text-gray-900">
                                    <span x-text="sub.name"></span>
                                </h2>

                                <!-- DESCRIPTION (FAKE BUT IMPORTANT FOR BALANCE) -->
                                <p class="text-sm text-gray-500">
                                    Sub-category of <span x-text="selectedProduct?.name"></span>
                                </p>

                                <!-- BUTTON -->
                                <button
                                    class="mt-4 text-blue-600 font-semibold">
                                    View Details
                                </button>

                            </article>
                        </template>

                    </div>
                </div>

                <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    x-show="activeSubcategories.length === 0">

                    @foreach ($products as $category)
                    @foreach ($category['items'] as $product)

                    <article
                        @click="openGallery({{ \Illuminate\Support\Js::from($product) }})"
                        class="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-xl transition cursor-pointer"
                        x-show="filterProduct(
    '{{ strtolower($product['name']) }}',
    '{{ $category['category'] }}',
    {{ \Illuminate\Support\Js::from($product['subcategories'] ?? []) }}
)">

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

            activeSubcategories: [],
            selectedProduct: null,

            // GALLERY STATE
            isOpen: false,
            gallery: [],
            index: 0,
            productName: '',

            // ✅ ADD THIS
            init() {
                const params = new URLSearchParams(window.location.search)
                let category = params.get('category')

                if (category) {
                    category = decodeURIComponent(category)

                    // optional: normalize (handles + or lowercase cases)
                    category = category.replace(/\+/g, ' ')

                    this.selected = [category]
                }
            },

            toggleCategory(cat) {
                if (this.selected.includes(cat)) {
                    this.selected = this.selected.filter(c => c !== cat)
                } else {
                    this.selected.push(cat)
                }
            },

            filterProduct(name, category, subcategories = []) {
                let term = this.searchTerm.toLowerCase()

                let matchName = name.includes(term)
                let matchCategory = category.toLowerCase().includes(term)

                let matchSub = subcategories.some(sub =>
                    sub.name.toLowerCase().includes(term)
                )

                let catFilter = this.selected.length === 0 || this.selected.includes(category)

                return (matchName || matchCategory || matchSub) && catFilter
            },

            openGallery(product) {
                if (product.subcategories) {
                    this.activeSubcategories = product.subcategories
                    this.selectedProduct = product
                    return
                }

                this.gallery = product.gallery || []
                this.index = 0
                this.productName = product.name
                this.isOpen = true
                document.body.style.overflow = 'hidden'
            },

            openSubCategory(sub) {
                this.gallery = sub.gallery || []
                this.index = 0
                this.productName = sub.name
                this.isOpen = true
                document.body.style.overflow = 'hidden'
            },

            resetSubcategories() {
                this.activeSubcategories = []
                this.selectedProduct = null
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