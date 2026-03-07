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
class="bg-gray-50 min-h-screen relative"
>

{{-- HEADER --}}
<div class="tech-header-container text-white py-16 px-6 relative overflow-hidden bg-slate-900">
    <div class="relative z-10 max-w-7xl mx-auto text-center">

        <h1 class="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase"
        style="text-shadow:0 0 15px rgba(96,165,250,0.6)">
        About Us
        </h1>

        <div class="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full"></div>

        <p class="text-blue-100 max-w-3xl mx-auto text-base md:text-lg font-light leading-relaxed">
        Macro Wiring Technologies Co. Inc. – Providing World-Class Interconnect Solutions since 1998.
        </p>

    </div>
</div>


<div class="max-w-7xl mx-auto px-6 py-16 space-y-24">

{{-- LEADERSHIP --}}
<section class="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-gray-100">

<div class="flex flex-col md:flex-row items-center gap-12">

<div class="w-full md:w-1/3 flex justify-center">

<img
:src="leadership.image"
class="rounded-2xl w-full max-w-[300px] border-4 border-white shadow-lg"
>

</div>

<div class="w-full md:w-2/3 text-center md:text-left space-y-4">

<h2 class="text-4xl font-bold text-gray-900 uppercase"
x-text="leadership.name"></h2>

<p class="text-xl text-blue-600 font-bold uppercase tracking-tight"
x-text="leadership.role"></p>

<p class="text-gray-600 leading-relaxed italic text-lg"
x-text="leadership.quote"></p>

</div>

</div>

</section>


{{-- COMPANY PROFILE --}}
<section class="grid lg:grid-cols-2 gap-16 items-start">

    {{-- LEFT SIDE --}}
    <div class="space-y-6">

        <h2 class="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <i class="fas fa-industry text-blue-600"></i>
            Company Profile
        </h2>

        <div class="text-gray-600 space-y-4 leading-relaxed text-sm md:text-base">

            <p>
                Macro Wiring Technologies Co. Inc. is a reliable manufacturer of high-quality wire harnesses.
                We are committed to delivering superior products that meet customer requirements,
                stakeholder expectations, and regulatory obligations while promoting sustainability.
            </p>

            <p>
                Presently the company is capable of producing wire harnesses ranging
                from <strong>AWG #32 to 350 MCM</strong>. Our operations are machine-intensive,
                designed to meet the precision needs of global technology leaders.
            </p>

        </div>

        {{-- STAT CARD --}}
        <div class="flex flex-wrap gap-4 mt-8">

            <div class="bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">

                <i class="fas fa-users text-blue-600 text-xl"></i>

                <div>
                    <p class="text-2xl font-bold text-gray-900">450+</p>
                    <p class="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                        Skilled Workers
                    </p>
                </div>

            </div>

        </div>

    </div>


    {{-- RIGHT SIDE --}}
    <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">

        <h3 class="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
            <i class="fas fa-chart-bar text-blue-600"></i>
            Product Specializations
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-gray-600">

            <div class="space-y-1">
                <p class="font-bold text-blue-600 text-sm">Home Appliances</p>
                <p class="text-xs">Refrigerators, Freezers, AC units, Washing Machines</p>
            </div>

            <div class="space-y-1">
                <p class="font-bold text-blue-600 text-sm">Electronics</p>
                <p class="text-xs">Computers, TV, Karaoke, Monitors, AVRs</p>
            </div>

            <div class="space-y-1">
                <p class="font-bold text-blue-600 text-sm">Automotive</p>
                <p class="text-xs">Small harnesses & specialized wiring</p>
            </div>

            <div class="space-y-1">
                <p class="font-bold text-blue-600 text-sm">Power Supplies</p>
                <p class="text-xs">UPS & specialized assemblies</p>
            </div>

        </div>

    </div>

</section>



 
<section class="space-y-12">

    {{-- VISION --}}
    <div class="bg-blue-600 text-white p-12 rounded-3xl shadow-xl text-center relative overflow-hidden">

        <i class="fas fa-globe absolute -right-20 -top-20 text-white/10 text-[300px]"></i>

        <h2 class="text-2xl font-black uppercase tracking-[0.2em] mb-6">
            Our Vision
        </h2>

        <p class="text-blue-50 italic text-xl leading-relaxed max-w-5xl mx-auto">
            "To see the spawning of the Macro Wiring Technologies Co. Inc.
            logo on the assembly lines of tech companies and allied businesses
            in the export processing zones of the country, and catch the nod
            of approval of our customers as they make our wire harnesses and
            assemblies their own."
        </p>

        <p class="text-[10px] text-blue-200 mt-6 font-bold uppercase tracking-widest">
            Effectivity Date: July 14, 2015
        </p>

    </div>


    {{-- MISSION --}}
    <div class="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">

        <div class="flex items-center justify-center gap-4 mb-12">

            <i class="fas fa-bullseye text-blue-600 text-2xl"></i>

            <h2 class="text-3xl font-bold text-gray-900 uppercase">
                Our Mission
            </h2>

        </div>

        @php
        $missions = [
            [
                "label" => "Customer",
                "text" => "Macro Wiring Technologies Co. Inc. exist to fully support and completely satisfy the specified needs of its customers in the wiring harness and assemblies business."
            ],
            [
                "label" => "Employees",
                "text" => "The company appreciates hard work, dedication to service, and loyalty to the company of its employees; in return, the Company guarantees fair compensation, room to grow, training and a healthy work environment."
            ],
            [
                "label" => "Owners",
                "text" => "The company will pursue targeted growth to keep pace with the evolution of the industry, if not stay ahead."
            ],
            [
                "label" => "World",
                "text" => "The company is a proud contributor of wire harness components and assemblies to branded electronic products sold all over the world, and will seek allied sectors where it can extend further service."
            ],
            [
                "label" => "Environment",
                "text" => "Finally, the company subscribes to the worldwide movement for a green planet as a way of ensuring the health and safety of its employees, of their children, and their children's children"
            ]
        ];
        @endphp

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center items-start">

            @foreach($missions as $i => $m)

                <div class="space-y-3 {{ $i !== 0 ? 'md:border-l border-gray-100 md:pl-4' : '' }}">

                    <h4 class="font-black text-blue-600 uppercase text-[10px] tracking-widest">
                        {{ $m['label'] }}
                    </h4>

                    <p class="text-xs text-gray-600 leading-relaxed">
                        {{ $m['text'] }}
                    </p>

                </div>

            @endforeach

        </div>

        <p class="text-center text-[10px] text-gray-400 mt-10 font-bold uppercase tracking-widest">
            Effectivity Date: July 14, 2015
        </p>

    </div>

</section>

{{-- GROUP OF COMPANIES --}}
<section class="py-12 border-t border-gray-100">

<div class="text-center mb-12">

<h2 class="text-3xl font-bold text-gray-900 uppercase">
Macro Group of Companies
</h2>

</div>

<div class="flex flex-wrap justify-center items-center gap-12 opacity-60 hover:opacity-100">

<template x-for="logo in companies">

<img
:src="logo"
class="h-14 w-auto grayscale hover:grayscale-0 transition-all"
/>

</template>

</div>

</section>


{{-- SAP FLOW --}}
<section class="space-y-8">

<div class="text-center">
<h2 class="text-3xl font-bold text-gray-900 uppercase">
Operational Excellence
</h2>
</div>

<div class="bg-white p-8 rounded-[2.5rem] shadow-xl border">

<div class="grid lg:grid-cols-3 gap-12 items-center">

<div
class="lg:col-span-2 group overflow-hidden rounded-2xl cursor-zoom-in"
@click="isZoomed=true"
>

<img
src="{{ asset('images/process/sap-flow.jpg') }}"
class="w-full transition-transform duration-700 group-hover:scale-105"
>

</div>


<div class="space-y-6">

<h4 class="text-xl font-bold text-blue-600 border-b pb-2">
Digital Workflow
</h4>

<template x-for="step in workflow">

<div class="flex gap-4">

<div class="bg-blue-100 text-blue-600 p-2 rounded-lg">
⚙
</div>

<div>

<p class="font-bold text-gray-900 text-sm"
x-text="step.title"></p>

<p class="text-xs text-gray-500"
x-text="step.desc"></p>

</div>

</div>

</template>

</div>

</div>

</div>

</section>

<section class="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">

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

<!--carbon emmission-->

<section class="bg-green-50 p-10 md:p-16 rounded-[3rem] border border-green-100 relative overflow-hidden">

    {{-- Background Leaf Icon --}}
    <i class="fas fa-leaf absolute -right-16 -bottom-16 text-green-200 opacity-20 text-[350px]"></i>

    <div class="relative z-10">

        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">

            <div>
                <h2 class="text-3xl font-bold text-green-900 flex items-center gap-3">
                    <i class="fas fa-bolt text-green-600"></i>
                    The Zero Carbon Project
                </h2>

                <p class="text-green-800 text-sm mt-2 font-medium">
                    Goal: 50% Intensity Reduction Ambition by 2024
                </p>
            </div>

            <div class="bg-green-600 text-white px-10 py-4 rounded-2xl font-black text-2xl shadow-xl shadow-green-200 animate-pulse">
                58% REDUCED
            </div>

        </div>


        <div class="grid md:grid-cols-2 gap-10">

            {{-- Base Year --}}
            <div class="bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-white">

                <h4 class="font-black text-gray-400 uppercase text-xs mb-6 tracking-[0.2em]">
                    Base Year (2019)
                </h4>

                <div class="space-y-4">

                    <div class="flex justify-between text-sm">
                        <span>Scope 1 (tCO2e)</span>
                        <span class="font-mono">71.97</span>
                    </div>

                    <div class="flex justify-between text-sm">
                        <span>Scope 2 (tCO2e)</span>
                        <span class="font-mono">268.74</span>
                    </div>

                    <div class="flex justify-between border-t border-gray-100 pt-6 font-bold text-2xl text-gray-900">
                        <span>Total Carbon</span>
                        <span>340.71</span>
                    </div>

                </div>

            </div>


            {{-- Reporting Year --}}
            <div class="bg-white p-8 rounded-3xl border-2 border-green-500 shadow-2xl shadow-green-100">

                <h4 class="font-black text-green-600 uppercase text-xs mb-6 tracking-[0.2em]">
                    Reporting Year (2024)
                </h4>

                <div class="space-y-4">

                    <div class="flex justify-between text-sm">
                        <span>Scope 1 (tCO2e)</span>
                        <span class="font-mono font-bold text-green-600">
                            59.35
                        </span>
                    </div>

                    <div class="flex justify-between text-sm">
                        <span>Scope 2 (tCO2e)</span>
                        <span class="font-mono font-bold text-green-600">
                            88.00
                        </span>
                    </div>

                    <div class="flex justify-between border-t border-green-100 pt-6 font-bold text-3xl text-green-600">
                        <span>Total Carbon</span>
                        <span>147.35</span>
                    </div>

                </div>

            </div>

        </div>


        <p class="text-center text-green-800 text-sm mt-12 font-bold italic max-w-2xl mx-auto">
            "We managed to achieve an intensity reduction of 58% (per unit of revenue)
            against our 2019 base year."
        </p>

    </div>

</section>

<!--oCCUPATION HEALTH-->
<section class="bg-slate-900 text-white p-10 md:p-16 rounded-[3rem] relative overflow-hidden shadow-2xl">

    {{-- Background Icon --}}
    <div class="absolute -left-20 -bottom-20 text-white/5 text-[400px]">
        <i class="fa-solid fa-heart-pulse"></i>
    </div>

    <div class="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

        <div>
            <div class="bg-red-500/10 text-red-400 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest w-fit mb-6 border border-red-500/20">
                Safety First Culture
            </div>

            <h2 class="text-3xl font-bold mb-6 uppercase tracking-tight">
                Occupational Health & Safety Policy
            </h2>

            <p class="text-gray-400 leading-relaxed mb-8 text-lg">
                Macro Wiring Technologies Co. Inc. is committed to providing a
                safe and healthy workplace for all employees, contractors, and
                visitors within our manufacturing facilities.
            </p>

            <p class="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                Effectivity Date: Feb. 01, 2026
            </p>
        </div>

        @php
            $policies = [
                [
                    "t" => "Safe Conditions",
                    "d" => "Establish, implement, and maintain safe systems of work, safe facilities, and appropriate controls to eliminate hazard and reduce OH&S risks."
                ],
                [
                    "t" => "Legal Fulfillment",
                    "d" => "Comply with all applicable occupational health and safety laws, regulations, and other subscribed requirements relevant to our operations."
                ],
                [
                    "t" => "Eliminate Hazards",
                    "d" => "Apply the hierarchy of controls in identifying hazards, assessing risk, and determining effective preventive and proactive measures."
                ],
                [
                    "t" => "Participation",
                    "d" => "Ensure active consultation and participation of workers and their representatives in OH&S decision-making, hazard identification, and improvement initiatives."
                ],
                [
                    "t" => "Continuous Improvement",
                    "d" => "Continually improve OH&S performance and the effectiveness of the OH&S Management System through objectives, monitoring, audits and management review."
                ],
                [
                    "t" => "Resources",
                    "d" => "Ensure workers are competent through appropriate training, awareness, and access to information, and provide adequate resources to support this policy."
                ]
            ];
        @endphp

        <div class="grid sm:grid-cols-2 gap-4">
            @foreach($policies as $policy)
                <div class="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors">
                    <p class="font-bold text-blue-400 text-sm mb-2">
                        {{ $policy['t'] }}
                    </p>
                    <p class="text-[11px] text-gray-400 leading-tight">
                        {{ $policy['d'] }}
                    </p>
                </div>
            @endforeach
        </div>

    </div>
</section>


{{-- SCROLL TO TOP --}}
<button
@click="window.scrollTo({top:0,behavior:'smooth'})"
class="fixed z-50 p-4 bg-white/20 backdrop-blur-md text-gray-800 rounded-full shadow-xl border border-white/40 transition-all duration-500"
:class="[
isAtBottom ? 'bottom-24 right-8':'bottom-8 right-8',
showScrollTop ? 'opacity-100 scale-100':'opacity-0 scale-50 translate-y-10 pointer-events-none'
]"
>
↑
</button>

</section>
