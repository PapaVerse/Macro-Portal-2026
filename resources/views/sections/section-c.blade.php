<section id="products" class="bg-gray-100 text-gray-800 py-20 px-6">
    <div class="max-w-7xl mx-auto text-center">
        <p class="text-gray-400 uppercase tracking-widest mb-3 font-semibold">
            Offerings
        </p>

        <h2 class="text-4xl md:text-5xl font-bold mb-4">
            Our Featured Products
        </h2>

        <p class="text-gray-600 max-w-2xl mx-auto mb-16">
            Check out our hot products today — strong electrical wire solutions
            for your business needs.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            
            <div class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
                <div class="h-56 overflow-hidden bg-gray-200">
                    <img
                        src="{{ asset('images/products/CABLE.jpg') }}"
                        alt="Cable Assemblies"
                        class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                </div>
                <div class="p-6">
                    <h3 class="text-lg font-semibold text-gray-800 mb-3">
                        Cable Assemblies
                    </h3>
                    <p class="text-gray-600 mb-4 text-sm leading-relaxed">
                        High-capacity wiring built for factories and heavy-duty
                        commercial applications.
                    </p>
                    <a href="{{ url('/products?category=Cable+Assemblies') }}" 
                       class="inline-block text-blue-600 font-bold hover:text-blue-800 transition-colors">
                        Learn More →
                    </a>
                </div>
            </div>

            <div class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
                <div class="h-56 overflow-hidden bg-gray-200">
                    <img
                        src="{{ asset('images/products/CIRCUIT BREAKERS2.jpg') }}"
                        alt="Injection Molding"
                        class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                </div>
                <div class="p-6">
                    <h3 class="text-lg font-semibold text-gray-800 mb-3">
                        Injection Molding
                    </h3>
                    <p class="text-gray-600 mb-4 text-sm leading-relaxed">
                        Safe and durable electrical components designed for modern
                        industrial and residential housing.
                    </p>
                    <a href="{{ url('/products?category=Injection+Molding') }}" 
                       class="inline-block text-blue-600 font-bold hover:text-blue-800 transition-colors">
                        Learn More →
                    </a>
                </div>
            </div>

            <div class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
                <div class="h-56 overflow-hidden bg-gray-200">
                    <img
                        src="{{ asset('images/products/ICE CORDS.jpg') }}"
                        alt="Power Cords"
                        class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                </div>
                <div class="p-6">
                    <h3 class="text-lg font-semibold text-gray-800 mb-3">
                        Power Cords
                    </h3>
                    <p class="text-gray-600 mb-4 text-sm leading-relaxed">
                        Reliable and efficient cables engineered for business and office
                        infrastructures.
                    </p>
                    <a href="{{ url('/products?category=Power+Cords') }}" 
                       class="inline-block text-blue-600 font-bold hover:text-blue-800 transition-colors">
                        Learn More →
                    </a>
                </div>
            </div>

            <div class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
                <div class="h-56 overflow-hidden bg-gray-200">
                    <img
                        src="{{ asset('images/products/HOUSING.jpg') }}"
                        alt="Wire Harnesses"
                        class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                </div>
                <div class="p-6">
                    <h3 class="text-lg font-semibold text-gray-800 mb-3">
                        Wire Harnesses
                    </h3>
                    <p class="text-gray-600 mb-4 text-sm leading-relaxed">
                        Premium quality wiring built for flexibility,
                        conductivity, and long-term durability in automotive and energy sectors.
                    </p>
                    <a href="{{ url('/products?category=Wire+Harnesses') }}" 
                       class="inline-block text-blue-600 font-bold hover:text-blue-800 transition-colors">
                        Learn More →
                    </a>
                </div>
            </div>

        </div>
    </div>
</section>