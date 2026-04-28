<section
    x-data="{
    showScrollTop:false,
    isAtBottom:false,
    isZoomed:false,

    leadership:{
        name:'Jerenato B. Alfante',
        role:'President',
        image:'{{ asset('images/founder/sirjerry.jpg') }}',
        quote:'Driving innovation and quality excellence in the wire harness industry through dedicated leadership and operational precision.'
    },

    productSpecializations:[
        {title:'Home Appliances',desc:'Refrigerators, Freezers, AC units, Washing Machines'},
        {title:'Electronics',desc:'Computers, TV, Karaoke, Monitors, AVRs'},
        {title:'Automotive',desc:'Small harnesses & specialized wiring'},
        {title:'Power Supplies',desc:'UPS & specialized assemblies'}
    ],

    mission:[
        {label:'Customer',text:'Macro Wiring Technologies Co. Inc. exist to fully support and completely satisfy the specified needs of its customers in the wiring harness and assemblies business.'},
        {label:'Employees',text:'The company appreciates hard work, dedication to service, and loyalty to the company of its employees.'},
        {label:'Owners',text:'The company will pursue targeted growth to keep pace with the evolution of the industry.'},
        {label:'World',text:'The company contributes wire harness components to branded electronic products sold globally.'},
        {label:'Environment',text:'The company supports the global movement for a greener planet.'}
    ],

    workflow:[
        {title:'Planning',desc:'MRP and Weekly Delivery Order receiving and alignment.'},
        {title:'Warehouse',desc:'Strict Inventory Transfer (ITR) and staging.'},
        {title:'Production',desc:'Real-time Backflushing (FGTR) and Quality endorsement.'}
    ],

    companies:[
        '{{ asset('images/group/goldrich-logo.jpg') }}',
        '{{ asset('images/group/mega-packaging.png') }}',
        '{{ asset('images/group/macro-lpg.png') }}',
        '{{ asset('images/group/macro-industrial-logo.png') }}',
        '{{ asset('images/group/acre-logo.png') }}'
    ],

    handleScroll(){
        this.showScrollTop = window.scrollY > 400
        this.isAtBottom = window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 120
    }
}"
    @scroll.window="handleScroll()"
    class="bg-gray-50 min-h-screen relative">

    <div class="tech-header-container text-white py-16 px-6 relative overflow-hidden">
        <div class="moving-glow"></div>
        <div class="relative z-10 max-w-7xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase" style="text-shadow: 0 0 15px rgba(96, 165, 250, 0.6);">
                ABOUT US
            </h1>
            <div class="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
            <p class="text-blue-100 max-w-xl mx-auto text-base md:text-lg font-light leading-relaxed">
                Macro Wiring Technologies Co. Inc. – Providing World-Class Interconnect
                Solutions and Manufacturing Excellence since 1998.
            </p>
        </div>
    </div>


    <div class="max-w-7xl mx-auto px-6 py-16 space-y-24">

        {{-- LEADERSHIP --}}
        <section class="relative bg-white p-10 md:p-16 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden group">

            {{-- Decorative Background Accents --}}
            <div class="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-50 rounded-full opacity-50 transition-transform duration-700 group-hover:scale-110"></div>
            <div class="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-slate-50 rounded-full opacity-80"></div>

            <div class="flex flex-col md:flex-row items-center gap-12 md:gap-20 relative z-10">

                {{-- Image Container --}}
                <div class="w-full md:w-1/3 flex justify-center relative">
                    {{-- Decorative Frame --}}
                    <div class="absolute -inset-3 border-2 border-blue-600/10 rounded-[2rem] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>

                    <div class="relative">
                        <img
                            :src="leadership.image"
                            class="rounded-2xl w-full max-w-[320px] aspect-[4/5] object-cover border-8 border-white shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                    </div>
                </div>

                {{-- Content Area --}}
                <div class="w-full md:w-2/3 text-center md:text-left space-y-6">
                    <div class="space-y-2">
                        <span class="inline-block text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full mb-2">
                            Executive Board
                        </span>

                        <h2 class="text-4xl md:text-5xl font-black text-gray-900 uppercase italic tracking-tighter leading-none"
                            x-text="leadership.name">
                        </h2>

                        <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                            <p class="text-xl text-blue-600 font-black uppercase tracking-widest"
                                x-text="leadership.role">
                            </p>
                            <div class="hidden md:block h-1 w-12 bg-gray-200 rounded-full"></div>
                        </div>
                    </div>

                    {{-- Restored Tagline --}}
                    <div class="relative">
                        <p class="text-gray-500 leading-relaxed italic text-lg md:text-xl font-light border-l-4 border-blue-600 pl-6 md:pl-8 py-2 group-hover:text-gray-700 transition-colors"
                            x-text="leadership.quote">
                        </p>
                    </div>

                    <div class="pt-4 flex justify-center md:justify-start gap-4">
                        <div class="w-12 h-1 bg-blue-600 rounded-full"></div>
                        <div class="w-4 h-1 bg-gray-200 rounded-full"></div>
                        <div class="w-4 h-1 bg-gray-200 rounded-full"></div>
                    </div>
                </div>

            </div>
        </section>


        {{-- COMPANY PROFILE --}}
        <section class="grid lg:grid-cols-2 gap-12 mt-12 items-center">

            {{-- LEFT SIDE: Story & Capability --}}
            <div class="space-y-8">
                <div class="space-y-4">
                    <h2 class="text-3xl font-bold text-slate-900 flex items-center gap-3 uppercase tracking-tight">
                        <i class="fas fa-industry text-blue-600"></i>
                        Company Profile
                    </h2>

                    <div class="h-1 w-16 bg-blue-600 rounded-full"></div>
                </div>

                <div class="text-slate-600 space-y-5 leading-relaxed text-base">
                    <p>
                        Macro Wiring Technologies Co. Inc. is a reliable manufacturer of high-quality wire harnesses.
                        We are committed to delivering superior products that meet customer requirements,
                        stakeholder expectations, and regulatory obligations while promoting sustainability.
                    </p>

                    <p class="p-4 bg-slate-50 border-l-4 border-blue-600 rounded-r-xl">
                        Presently the company is capable of producing wire harnesses ranging
                        from <strong class="text-blue-600 font-bold">AWG #32 to 350 MCM</strong>.
                        Our operations are machine-intensive, designed for global technology leaders.
                    </p>
                </div>

                {{-- SIMPLE STAT CARD --}}
                <div class="inline-flex items-center gap-4 p-4 bg-white border border-slate-100 shadow-sm rounded-2xl">
                    <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                        <i class="fas fa-users text-blue-600"></i>
                    </div>
                    <div>
                        <p class="text-2xl font-bold text-slate-900">450+</p>
                        <p class="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Skilled Workers</p>
                    </div>
                </div>
            </div>

            {{-- RIGHT SIDE: Specializations --}}
            <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h3 class="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-8 flex items-center gap-2">
                    <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Product Specializations
                </h3>

                <div class="grid sm:grid-cols-2 gap-8">
                    {{-- Item 1 --}}
                    <div class="space-y-2 group">
                        <div class="flex items-center gap-2 text-blue-600">
                            <i class="fas fa-plug-circle-bolt"></i>
                            <p class="font-bold text-slate-900 text-sm uppercase">Home Appliances</p>
                        </div>
                        <p class="text-[12px] text-slate-500 leading-snug pl-6">Refrigerators, Freezers, AC units, Washing Machines</p>
                    </div>

                    {{-- Item 2 --}}
                    <div class="space-y-2 group">
                        <div class="flex items-center gap-2 text-blue-600">
                            <i class="fas fa-tv"></i>
                            <p class="font-bold text-slate-900 text-sm uppercase">Electronics</p>
                        </div>
                        <p class="text-[12px] text-slate-500 leading-snug pl-6">Computers, TV, Karaoke, Monitors, AVRs</p>
                    </div>

                    {{-- Item 3 --}}
                    <div class="space-y-2 group">
                        <div class="flex items-center gap-2 text-blue-600">
                            <i class="fas fa-car"></i>
                            <p class="font-bold text-slate-900 text-sm uppercase">Automotive</p>
                        </div>
                        <p class="text-[12px] text-slate-500 leading-snug pl-6">Small harnesses & specialized wiring</p>
                    </div>

                    {{-- Item 4 --}}
                    <div class="space-y-2 group">
                        <div class="flex items-center gap-2 text-blue-600">
                            <i class="fas fa-battery-three-quarters"></i>
                            <p class="font-bold text-slate-900 text-sm uppercase">Power Supplies</p>
                        </div>
                        <p class="text-[12px] text-slate-500 leading-snug pl-6">UPS & specialized assemblies</p>
                    </div>
                </div>

                {{-- Clean footer tag --}}
                <div class="mt-10 pt-6 border-t border-slate-50 text-center">
                    <p class="text-[10px] text-slate-300 font-bold uppercase tracking-widest">Precision since 1998</p>
                </div>
            </div>

        </section>



        <section class="space-y-10 mt-12">

            {{-- VISION: Clean & Focused --}}
            <div class="relative bg-blue-600 rounded-2xl p-10 md:p-14 shadow-lg overflow-hidden">
                {{-- Subtle watermark --}}
                <i class="fas fa-globe absolute -right-10 -bottom-10 text-white/10 text-[200px]"></i>

                <div class="relative z-10 max-w-4xl mx-auto text-center space-y-4">
                    <h2 class="text-sm font-black uppercase tracking-[0.3em] text-blue-100 opacity-80">Our Vision</h2>

                    <p class="text-lg md:text-xl text-white leading-relaxed font-medium italic">
                        "To see the spawning of the <span class="not-italic font-bold">Macro Wiring Technologies Co. Inc.</span>
                        logo on the assembly lines of tech companies and allied businesses
                        in the export processing zones of the country, and catch the nod
                        of approval of our customers as they make our wire harnesses and
                        assemblies their own."
                    </p>

                    <p class="text-[9px] text-blue-200 font-bold uppercase tracking-widest pt-4">
                        Effectivity Date: July 14, 2015
                    </p>
                </div>
            </div>


            {{-- MISSION: Simplified Grid --}}
            <div class="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm mt-12">

                <div class="flex items-center gap-3 mb-10 border-b border-gray-50 pb-6">
                    <i class="fas fa-bullseye text-blue-600 text-xl"></i>
                    <h2 class="text-2xl font-bold text-gray-900 uppercase tracking-tight">Our Mission</h2>
                </div>

                @php
                $missions = [
                ["label" => "Customer", "text" => "Macro Wiring Technologies Co. Inc. exist to fully support and completely satisfy the specified needs of its customers in the wiring harness and assemblies business."],
                ["label" => "Employees", "text" => "The company appreciates hard work, dedication to service, and loyalty to the company of its employees; in return, the Company guarantees fair compensation, room to grow, training and a healthy work environment."],
                ["label" => "Owners", "text" => "The company will pursue targeted growth to keep pace with the evolution of the industry, if not stay ahead."],
                ["label" => "World", "text" => "The company is a proud contributor of wire harness components and assemblies to branded electronic products sold all over the world, and will seek allied sectors where it can extend further service."],
                ["label" => "Environment", "text" => "Finally, the company subscribes to the worldwide movement for a green planet as a way of ensuring the health and safety of its employees, of their children, and their children's children"]
                ];
                @endphp

                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    @foreach($missions as $m)
                    <div class="space-y-3">
                        <h4 class="text-blue-600 font-bold uppercase text-[11px] tracking-wider">
                            {{ $m['label'] }}
                        </h4>
                        <p class="text-[13px] text-gray-600 leading-relaxed">
                            {{ $m['text'] }}
                        </p>
                    </div>
                    @endforeach
                </div>

                <div class="mt-12 text-center">
                    <p class="text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                        Effectivity Date: July 14, 2015
                    </p>
                </div>
            </div>

        </section>

        {{-- GROUP OF COMPANIES --}}
        <section class="py-16 border-t border-slate-100 bg-white">

            <div class="text-center mb-16 space-y-3">
                <h2 class="text-2xl font-bold text-slate-900 uppercase tracking-tight">
                    Macro <span class="text-blue-600">Group</span> of Companies
                </h2>
                <div class="h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div class="max-w-6xl mx-auto px-6">
                <div class="flex flex-wrap justify-center items-center gap-10 md:gap-20">

                    <template x-for="logo in companies">
                        <div class="group cursor-pointer">

                            {{-- Default: Grayscale | Hover: Original Full Color --}}
                            <img
                                :src="logo"
                                class="h-12 md:h-14 w-auto object-contain 
                               filter grayscale opacity-40 
                               group-hover:grayscale-0 group-hover:opacity-100 
                               group-hover:scale-110 transition-all duration-500" />

                        </div>
                    </template>

                </div>
            </div>

        </section>

        {{-- SAP FLOW --}}
        <section class="mt-8">

            <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">

                <div class="flex flex-col lg:flex-row gap-8 items-center">

                    {{-- Compact Image Section --}}
                    <div
                        class="w-full lg:w-1/2 group relative overflow-hidden rounded-xl cursor-zoom-in border border-gray-50"
                        @click="isZoomed=true">
                        <img
                            src="{{ asset('images/process/sap-flow.jpg') }}"
                            class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105">
                        <div class="absolute top-2 right-2 bg-white/80 px-2 py-1 rounded text-[10px] font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                            CLICK TO ZOOM
                        </div>
                    </div>

                    {{-- Compact Content Section --}}
                    <div class="w-full lg:w-1/2 space-y-5">
                        <div>
                            <h2 class="text-xl font-black text-gray-900 uppercase tracking-tight leading-none">
                                Operational <span class="text-blue-600">Excellence</span>
                            </h2>
                            <p class="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">Digital Workflow • SAP System</p>
                        </div>

                        <div class="space-y-4">
                            <template x-for="step in workflow">
                                <div class="flex items-start gap-3 group/item">
                                    <div class="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 group-hover/item:scale-150 transition-transform"></div>

                                    <div>
                                        <p class="font-bold text-gray-900 text-[13px] uppercase tracking-wide group-hover/item:text-blue-600 transition-colors" x-text="step.title"></p>
                                        <p class="text-[12px] text-gray-500 leading-snug" x-text="step.desc"></p>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>

                </div>
            </div>

        </section>

        <section class="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden mt-12">

            {{-- background icon --}}
            <div class="absolute top-0 right-0 p-8 opacity-5 text-blue-600">
                <i class="fas fa-shield-alt text-[250px]"></i>
            </div>

            <div class="relative z-10 max-w-4xl mb-12">

                <div class="flex items-center gap-3 text-blue-600 font-black uppercase text-xs tracking-[0.3em] mb-4">
                    <i class="fas fa-shield-alt text-sm"></i>
                    Integrated Management System
                </div>

                <h2 class="text-3xl font-bold text-gray-900 mb-6 uppercase">
                    IMS Policy
                </h2>

                <p class="text-gray-600 leading-relaxed border-l-4 border-blue-600 pl-6 text-lg italic">
                    "We adopt an Integrated Management System that fosters quality
                    excellence, environmental stewardship, and continuous improvement
                    throughout our operations."
                </p>

                <div class="flex gap-4 mt-6">
                    <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded text-[10px] font-bold">
                        ISO 9001:2015
                    </span>

                    <span class="bg-green-100 text-green-700 px-3 py-1 rounded text-[10px] font-bold">
                        ISO 14001:2015
                    </span>
                </div>

                <p class="text-[10px] text-gray-400 mt-4 font-bold uppercase tracking-widest">
                    Effectivity Date: July 18, 2025
                </p>

            </div>


            @php
            $imsPolicies = [
            [
            "t" => "Customer Focus and Satisfaction",
            "d" => "We are committed to understanding and fulfilling customer-specific requirements, industry standards, and applicable statutory and regulatory requirements to ensure consistent delivery of world-class wire harness products and services."
            ],
            [
            "t" => "Environmental Protection and Sustainability",
            "d" => "We take proactive steps to minimize environmental impacts by promoting resource conservation, responsible waste management, and pollution prevention. We continuously improve our energy efficiency and strive to reduce our carbon footprint across our manufacturing processes."
            ],
            [
            "t" => "Stakeholder Engagement",
            "d" => "We recognize the importance of addressing the needs and expectations of all relevant stakeholders, including customers, employees, suppliers, regulatory authorities, stakeholders and communities where we operate."
            ],
            [
            "t" => "Compliance with Legal and Other Requirements",
            "d" => "We ensure strict compliance with applicable legal requirements, customer specifications, environmental regulations, and other obligations relevant to our operations and products."
            ],
            [
            "t" => "Energy Initiatives",
            "d" => "We are committed to enhance energy efficiency in our facilities adopting energy-saving technologies, optimizing resource utilization, and promoting awareness among employees"
            ],
            [
            "t" => "Continuous Improvement and Innovation",
            "d" => "We drive continual improvement in quality, environmental performance and operational efficiency by setting measurable objectives, monitoring key performance indicators, and applying risk-based thinking in all processes."
            ],
            [
            "t" => "Employee Involvement and Competency Development",
            "d" => "We provide training and development programs to ensure all employees are competent, fully aware of their responsibilities, and actively engaged in achieving our quality, environmental, and sustainability goals."
            ],
            ];
            @endphp


            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">

                @foreach($imsPolicies as $item)

                <div class="p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 group">

                    <p class="font-bold text-gray-900 mb-2 flex items-center gap-2 group-hover:text-blue-600">

                        <i class="fas fa-chevron-right text-blue-600 text-xs"></i>

                        {{ $item['t'] }}

                    </p>

                    <p class="text-xs text-gray-500 leading-relaxed">
                        {{ $item['d'] }}
                    </p>

                </div>

                @endforeach

            </div>

        </section>

        <section class="bg-green-50 p-8 md:p-12 rounded-[2.5rem] border border-green-100 relative overflow-hidden mt-12">

            {{-- Background Leaf Icon (Replicating the React 'Leaf' component) --}}
            <i class="fas fa-leaf absolute -right-16 -bottom-16 text-green-200 opacity-20 text-[350px]"></i>

            <div class="relative z-10">

                {{-- Header & Glowing Badge --}}
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-green-900 flex items-center gap-3 uppercase tracking-tight">
                            <i class="fas fa-bolt text-green-600"></i>
                            The Zero Carbon Project
                        </h2>
                        <p class="text-green-800 text-xs md:text-sm mt-1 font-semibold opacity-80">
                            Goal: 50% Intensity Reduction Ambition by 2024
                        </p>
                    </div>

                    {{-- 58% Reduction Badge with Active Glow --}}
                    <div class="bg-emerald-50 text-slate-900 px-8 py-3 rounded-full font-black text-xl md:text-2xl 
            relative inline-block border border-emerald-100/50
            shadow-[0_0_20px_rgba(52,211,153,0.5)] animate-glow-pulse">
                        58% REDUCED
                    </div>
                </div>

                {{-- Structured Data Cards --}}
                <div class="grid md:grid-cols-2 gap-8">

                    {{-- Base Year Card --}}
                    <div class="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/80 shadow-sm">
                        <h4 class="font-black text-gray-400 uppercase text-[10px] mb-6 tracking-[0.2em]">
                            Base Year (2019)
                        </h4>
                        <div class="space-y-4">
                            <div class="flex justify-between text-sm text-gray-600 font-medium">
                                <span>Scope 1 (tCO2e)</span>
                                <span class="font-mono text-gray-900">71.97</span>
                            </div>
                            <div class="flex justify-between text-sm text-gray-600 font-medium">
                                <span>Scope 2 (tCO2e)</span>
                                <span class="font-mono text-gray-900">268.74</span>
                            </div>
                            <div class="flex justify-between border-t border-gray-100 pt-5 font-bold text-2xl text-gray-900 tracking-tighter">
                                <span>Total Carbon</span>
                                <span>340.71</span>
                            </div>
                        </div>
                    </div>

                    {{-- Reporting Year Card (Highlighted) --}}
                    <div class="bg-white p-8 rounded-3xl border-2 border-green-500 shadow-xl shadow-green-100/50">
                        <h4 class="font-black text-green-600 uppercase text-[10px] mb-6 tracking-[0.2em]">
                            Reporting Year (2024)
                        </h4>
                        <div class="space-y-4">
                            <div class="flex justify-between text-sm font-medium">
                                <span class="text-gray-600">Scope 1 (tCO2e)</span>
                                <span class="font-mono font-bold text-green-600">59.35</span>
                            </div>
                            <div class="flex justify-between text-sm font-medium">
                                <span class="text-gray-600">Scope 2 (tCO2e)</span>
                                <span class="font-mono font-bold text-green-600">88.00</span>
                            </div>
                            <div class="flex justify-between border-t border-green-100 pt-5 font-bold text-3xl text-green-600 tracking-tighter">
                                <span>Total Carbon</span>
                                <span>147.35</span>
                            </div>
                        </div>
                    </div>

                </div>

                {{-- Footer Quote --}}
                <p class="text-center text-green-800 text-[13px] mt-10 font-bold italic max-w-2xl mx-auto leading-relaxed">
                    "We managed to achieve an intensity reduction of <span class="text-green-600 underline decoration-green-300 underline-offset-4">58%</span> (per unit of revenue) against our 2019 base year."
                </p>
            </div>
        </section>

        <style>
            @keyframes glow-pulse {

                0%,
                100% {
                    box-shadow: 0 0 15px rgba(52, 211, 153, 0.3);
                    transform: scale(1);
                }

                50% {
                    box-shadow: 0 0 30px rgba(52, 211, 153, 0.6);
                    transform: scale(1.02);
                }
            }

            .animate-glow-pulse {
                animation: glow-pulse 2s infinite ease-in-out;
            }
        </style>

        <section class="bg-slate-900 text-white p-10 md:p-16 rounded-[3rem] relative overflow-hidden shadow-2xl mt-12 border border-slate-800">

            {{-- Background Icon - Positioned to stay inside the rounded corner --}}
            <div class="absolute -left-20 -bottom-20 text-white/5 text-[400px] pointer-events-none">
                <i class="fa-solid fa-heart-pulse"></i>
            </div>

            <div class="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                <div class="space-y-6">
                    <div class="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-red-500/20">
                        <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]"></span>
                        Safety First Culture
                    </div>

                    <h2 class="text-3xl font-bold uppercase tracking-tight leading-tight">
                        Occupational Health <br> & <span class="text-blue-500">Safety Policy</span>
                    </h2>

                    <p class="text-gray-400 leading-relaxed text-lg border-l-4 border-blue-600 pl-6">
                        Macro Wiring Technologies Co. Inc. is committed to providing a
                        safe and healthy workplace for all employees, contractors, and
                        visitors.
                    </p>

                    <p class="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">
                        Effectivity Date: Feb. 01, 2026
                    </p>
                </div>

                @php
                $policies = [
                ["t" => "Safe Conditions", "d" => "Establish and maintain safe systems of work and appropriate controls to eliminate hazards."],
                ["t" => "Legal Fulfillment", "d" => "Comply with all applicable occupational health and safety laws and regulatory requirements."],
                ["t" => "Eliminate Hazards", "d" => "Apply the hierarchy of controls in identifying hazards and determining proactive measures."],
                ["t" => "Participation", "d" => "Ensure active consultation and participation of workers in OH&S decision-making."],
                ["t" => "Continuous Improvement", "d" => "Continually improve OH&S performance through monitoring, audits, and management reviews."],
                ["t" => "Resources", "d" => "Ensure workers are competent through training and provide adequate resources to support safety."]
                ];
                @endphp

                <div class="grid sm:grid-cols-2 gap-4">
                    @foreach($policies as $policy)
                    <div class="group bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.07] transition-all duration-300">
                        <p class="font-bold text-blue-400 text-[13px] mb-2 uppercase tracking-wide group-hover:translate-x-1 transition-transform">
                            {{ $policy['t'] }}
                        </p>
                        <p class="text-[11px] text-gray-400 leading-relaxed">
                            {{ $policy['d'] }}
                        </p>
                    </div>
                    @endforeach
                </div>

            </div>
        </section>




</section>