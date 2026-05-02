<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
<title>Home | Macro Wiring Technologies Co. Inc.</title>



    <!--BASIC SEO-->
    @section('title', 'Macro Portal - Home')
    @section('meta_description', 'Welcome to Macro Portal. Manage your business efficiently.')

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

<<<<<<< HEAD

=======
        /* ================= NAVBAR ================= */
>>>>>>> 2761380f8e95b1b55fb5f31b3b8e2b8659f10819
        nav {
            background: #001e30;
            height: 90px;
            width: 100%;
            font-family: "Montserrat", sans-serif;
            position: sticky;
            top: 0;
            z-index: 1001;
<<<<<<< HEAD
=======

            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
>>>>>>> 2761380f8e95b1b55fb5f31b3b8e2b8659f10819
        }

        label.logo {
            color: white;
            font-size: 24px;
            line-height: 90px;
            padding: 0 40px;
            font-weight: 800;
            cursor: pointer;
<<<<<<< HEAD
=======
            transition: color 0.3s;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 50%;
>>>>>>> 2761380f8e95b1b55fb5f31b3b8e2b8659f10819
        }

        /* ================= NAV LINKS ================= */
        nav ul {
<<<<<<< HEAD
            float: right;
            margin-right: 30px;
=======
            list-style: none;
>>>>>>> 2761380f8e95b1b55fb5f31b3b8e2b8659f10819
            display: flex;
            gap: 2rem;
            align-items: center;
        }

        .nav-link-animated {
            position: relative;
            color: white;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
<<<<<<< HEAD
            padding-bottom: 8px;
=======
            padding-bottom: 6px;
            transition: color 0.3s ease;
>>>>>>> 2761380f8e95b1b55fb5f31b3b8e2b8659f10819
        }

        .nav-link-animated:hover {
            color: #60a5fa;
        }

        .nav-link-animated::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #60a5fa;
            transform: scaleX(0);
<<<<<<< HEAD
            transition: transform 0.4s;
        }

        #check {
            display: none;
=======
            transition: transform 0.3s ease;
>>>>>>> 2761380f8e95b1b55fb5f31b3b8e2b8659f10819
        }

        .nav-link-animated:hover::after {
            transform: scaleX(1);
        }

<<<<<<< HEAD
        @keyframes backAndForth {
            0% {
                transform: scaleX(0.3);
                transform-origin: left;
            }

            50% {
                transform: scaleX(1);
            }

            100% {
                transform: scaleX(0.3);
                transform-origin: right;
            }
        }

=======
        /* ACTIVE LINK */
>>>>>>> 2761380f8e95b1b55fb5f31b3b8e2b8659f10819
        .active-link {
            color: #60a5fa !important;
        }

        .active-link::after {
            transform: scaleX(1);
<<<<<<< HEAD
            animation: backAndForth 2s infinite;
        }

        .checkbtn {
            display: none;
        }

/* MOBILE VIEW ADJUSTMENTS */
=======
            animation: underlineMove 2s infinite;
        }

        @keyframes underlineMove {
            0% {
                transform: scaleX(0.3);
                transform-origin: left;
            }

            50% {
                transform: scaleX(1);
            }

            100% {
                transform: scaleX(0.3);
                transform-origin: right;
            }
        }

        /* ================= BURGER ================= */
        #check {
            display: none;
        }

        .checkbtn {
            display: none;
            position: relative;
            width: 35px;
            height: 25px;
            cursor: pointer;
            z-index: 1100;
        }

        /* burger lines */
        .burger,
        .burger::before,
        .burger::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 3px;
            background: white;
            border-radius: 2px;
            transition: all 0.3s ease;
        }

        .burger {
            top: 50%;
            transform: translateY(-50%);
        }

        .burger::before {
            top: -10px;
        }

        .burger::after {
            top: 10px;
        }

        /* animation */
        #check:checked+.checkbtn .burger {
            background: transparent;
        }

        #check:checked+.checkbtn .burger::before {
            transform: rotate(45deg);
            top: 0;
        }

        #check:checked+.checkbtn .burger::after {
            transform: rotate(-45deg);
            top: 0;
        }

        /* ================= MOBILE ================= */
>>>>>>> 2761380f8e95b1b55fb5f31b3b8e2b8659f10819
        @media (max-width: 1100px) {

            label.logo {
                font-size: 18px;
                max-width: 70%;
            }

            .checkbtn {
                display: block;
            }

            /* This section targets the full company name */
            label.logo {
                font-size: 18px; /* Smaller font for tablets/large phones */
                padding: 0 20px; /* Reduce side padding to give more room for text */
                white-space: nowrap; /* Forces text to stay on one line */
            }

            nav ul {
                position: fixed;
                top: 90px;
                left: -100%;
                width: 100%;
                height: 100vh;
                background: #0b1120;

                flex-direction: column;
                justify-content: flex-start;
                padding-top: 60px;
<<<<<<< HEAD
                transition: 0.4s;
=======
                text-align: center;

                transition: 0.3s ease;
            }

            nav ul li {
                margin: 15px 0;
            }

            .nav-link-animated {
                font-size: 20px;
            }

            .nav-link-animated::after {
                width: 60px;
                left: 50%;
                transform: translateX(-50%) scaleX(0);
>>>>>>> 2761380f8e95b1b55fb5f31b3b8e2b8659f10819
            }

            #check:checked~ul {
                left: 0;
            }
        }

<<<<<<< HEAD
        /* EXTRA SMALL PHONES (e.g., iPhone SE, small Androids) */
        @media (max-width: 450px) {
            label.logo {
                font-size: 14px; /* Even smaller font so the full name doesn't hit the burger icon */
                padding: 0 15px;
            }
            
            .checkbtn {
                right: 15px; /* Moves the burger slightly closer to the edge to save space */
            }
        }
=======
        /* ================= HERO ================= */
        .tech-header-container {
            position: relative;
            isolation: isolate;
            overflow: hidden;
            background-color: #020617;
        }

        .moving-glow {
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at center, rgba(30, 64, 175, 0.4), transparent 70%);
            animation: pulseGlow 8s ease-in-out infinite;
            z-index: -1;
        }

        @keyframes pulseGlow {

            0%,
            100% {
                opacity: 0.6;
                transform: scale(1);
            }

            50% {
                opacity: 1;
                transform: scale(1.1);
            }
        }

        /* ================= UTIL ================= */
>>>>>>> 2761380f8e95b1b55fb5f31b3b8e2b8659f10819
        [x-cloak] {
            display: none !important;
        }

<<<<<<< HEAD
=======
        .glass-button {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.4);
        }


>>>>>>> 2761380f8e95b1b55fb5f31b3b8e2b8659f10819
        /* --- CONSENT & WELCOME ANIMATIONS --- */
        @keyframes welcomeText {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }

            20%,
            80% {
                opacity: 1;
                transform: translateY(0);
            }

            100% {
                opacity: 0;
                transform: translateY(-20px);
                filter: blur(10px);
            }
        }

        @keyframes textZoomPass {
            0% {
                opacity: 0;
                transform: scale(0.9);
                filter: blur(10px);
            }

            40% {
                opacity: 1;
                transform: scale(1);
                filter: blur(0px);
            }

            100% {
                opacity: 0;
                transform: scale(1.1);
                filter: blur(20px);
            }
        }

        @keyframes glowPulse {
            0% {
                opacity: 0;
                scale: 0.5;
            }

            50% {
                opacity: 1;
                scale: 1.2;
            }

            100% {
                opacity: 0;
                scale: 2;
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: scale(0.98);
            }

            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        .animate-welcome-text {
            animation: welcomeText 3.2s ease-in-out forwards;
        }

        .animate-text-zoom-pass {
            animation: textZoomPass 3.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-glow-pulse {
            animation: glowPulse 3.2s ease-out forwards;
        }

        .animate-fade-in {
            animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* --- UTILS --- */
        [x-cloak] {
            display: none !important;
        }

        .custom-scrollbar::-webkit-scrollbar {
            width: 5px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 10px;
        }

        .glass-button {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.4);
        }
        
        /*Burger*/
        /* BURGER CONTAINER */
        .checkbtn {
            display: none;
            position: absolute;
            right: 25px;
            top: 50%;
            transform: translateY(-50%);
            width: 35px;
            height: 25px;
            cursor: pointer;
            z-index: 1100;
        }

        /* BURGER LINES */
        .burger,
        .burger::before,
        .burger::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 3px;
            background: white;
            border-radius: 2px;
            transition: all 0.3s ease;
        }

        /* Middle line */
        .burger {
            top: 50%;
            transform: translateY(-50%);
        }

        /* Top line */
        .burger::before {
            top: -10px;
        }

        /* Bottom line */
        .burger::after {
            top: 10px;
        }

        /* SHOW ON MOBILE */
        @media (max-width: 1100px) {
            .checkbtn {
                display: block;
            }
        }

        /* ANIMATION WHEN CHECKED */
        #check:checked+.checkbtn .burger {
            background: transparent;
            /* hide middle line */
        }

        #check:checked+.checkbtn .burger::before {
            transform: rotate(45deg);
            top: 0;
        }

        #check:checked+.checkbtn .burger::after {
            transform: rotate(-45deg);
            top: 0;
        }
    </style>
</head>

<body
    x-data="{ 
        showScrollTop: false, 
        isAtBottom: false,
        isVisible: false,
        isWelcoming: false,
        hasAgreedMain: false,
        currentPath: window.location.pathname,

        init() {
            if (!localStorage.getItem('macro_cookies_accepted')) {
                this.isVisible = true;
                document.body.style.overflow = 'hidden';
            }
        },
        handleAccept() {
            if (!this.hasAgreedMain) return;
            this.isWelcoming = true;
            setTimeout(() => {
                localStorage.setItem('macro_cookies_accepted', 'true');
                this.isVisible = false;
                this.isWelcoming = false;
                document.body.style.overflow = 'auto';
            }, 3200);
        },
        handleScroll() {
            this.showScrollTop = window.scrollY > 400;
            this.isAtBottom = (window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 150);
        }
    }"
    @scroll.window="handleScroll"
    class="bg-slate-50 font-sans antialiased text-slate-900">

    <div x-show="isVisible" x-cloak class="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/95 backdrop-blur-2xl p-4">

        <div x-show="!isWelcoming" class="bg-white w-full max-w-2xl rounded-[3.5rem] shadow-2xl overflow-hidden flex flex-col border border-white/20 animate-fade-in">
            <div class="p-10 pb-6 flex flex-col items-center text-center">
                <div class="bg-blue-600 text-white p-5 rounded-2xl mb-6 shadow-xl shadow-blue-200">
                    <i class="fas fa-lock text-3xl"></i>
                </div>
                <h2 class="text-3xl font-black text-gray-900 mb-2 tracking-tight">Legal Compliance</h2>
                <p class="text-[14px] text-gray-500 leading-relaxed max-w-lg">
                    In compliance with the <b>Philippine Data Privacy Act of 2012 (RA 10173)</b>, Macro Wiring Technologies Co. Inc. ensures all personal data is handled securely.
                </p>
            </div>

            <div class="mx-10 p-8 bg-slate-50 rounded-[2.5rem] border border-gray-100 space-y-8 max-h-[30vh] overflow-y-auto custom-scrollbar shadow-inner">
                <section class="space-y-4">
                    <div class="flex items-center gap-3 text-emerald-600">
                        <i class="fas fa-user-shield"></i>
                        <h3 class="text-[12px] font-black uppercase tracking-widest">Privacy Policy</h3>
                    </div>
                    <div class="text-[14px] text-gray-600 space-y-4">
                        <p>We collect personal information (Name, Email, Enquiry Details) <b>only</b> when voluntarily submitted via our Contact Us form. This data is used exclusively to respond to your specific business inquiries and is processed in line with our <b>ISO 9001:2015</b> quality procedures.</p>
                        <p><b>Information Security:</b> We do not provide public user accounts. Your information is stored in secured internal systems protected against unauthorized access. We do not sell or share details with third-party marketers.</p>
                        <p><b>Your Privacy Rights:</b> You have the right to request access to the information you submitted, ask for its correction, or request that we permanently delete your inquiry data from our records.</p>
                    </div>
                </section>

                <div class="h-px bg-gray-200 w-full"></div>

                <section class="space-y-4">
                    <div class="flex items-center gap-3 text-blue-600">
                        <i class="fas fa-balance-scale"></i>
                        <h3 class="text-[12px] font-black uppercase tracking-widest">Terms & Conditions</h3>
                    </div>
                    <div class="space-y-4 text-[14px] text-gray-600">
                        <p class="italic text-gray-400">Access to and use of this website is subject to the laws of the Republic of the Philippines.</p>
                        <div class="flex gap-3">
                            <i class="fas fa-chevron-right text-blue-500 mt-1"></i>
                            <p><b>Philippine Scope:</b> Information concerning products or services is applicable only in the Philippines.</p>
                        </div>
                        <div class="flex gap-3">
                            <i class="fas fa-chevron-right text-blue-500 mt-1"></i>
                            <p><b>Intellectual Property:</b> Distribution, modification, or reproduction of content (text, images, videos, source code) is prohibited without written permission.</p>
                        </div>
                        <div class="flex gap-3">
                            <i class="fas fa-chevron-right text-blue-500 mt-1"></i>
                            <p><b>Liability Disclaimer:</b> Browsing is at the user's risk. We assume no liability for errors or omissions in site contents.</p>
                        </div>
                        <div class="flex gap-3">
                            <i class="fas fa-chevron-right text-blue-500 mt-1"></i>
                            <p><b>Communications:</b> Inquiries transmitted to this site are treated as non-confidential for business processing purposes.</p>
                        </div>
                        <div class="flex gap-3">
                            <i class="fas fa-chevron-right text-blue-500 mt-1"></i>
                            <p><b>Third-Party Links:</b> We are not responsible for the content of any off-site pages or linked websites.</p>
                        </div>
                    </div>
                </section>
            </div>

            <div class="p-10 pt-8 space-y-6">
                <label class="flex items-start gap-4 cursor-pointer group">
                    <input type="checkbox" class="hidden" x-model="hasAgreedMain">
                    <div class="mt-0.5 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all"
                        :class="hasAgreedMain ? 'bg-blue-600 border-blue-600' : 'border-gray-300'">
                        <i x-show="hasAgreedMain" class="fas fa-check text-white text-[10px]"></i>
                    </div>
                    <span class="text-[13px] font-bold text-gray-700 uppercase tracking-tight group-hover:text-blue-600">
                        I have reviewed and agree to the Privacy Policy and Terms of Service
                    </span>
                </label>

                <button @click="handleAccept" :disabled="!hasAgreedMain"
                    class="w-full font-black py-5 rounded-2xl transition-all uppercase tracking-widest text-sm shadow-2xl active:scale-95"
                    :class="hasAgreedMain ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200' : 'bg-gray-200 text-gray-400 cursor-not-allowed'">
                    I Accept and Enter Site
                </button>
            </div>
        </div>

        <div x-show="isWelcoming" class="flex flex-col items-center justify-center text-center">
            <p class="text-blue-400 text-2xl font-light uppercase tracking-[0.6em] mb-4 animate-welcome-text">Welcome to</p>
            <div class="relative">
                <h1 class="text-white text-5xl md:text-7xl font-black tracking-tighter leading-none animate-text-zoom-pass">
                    MACRO WIRING <br /> <span class="text-blue-500">TECHNOLOGIES</span> <br />
                    <span class="text-3xl md:text-4xl font-light tracking-[0.3em] text-gray-400">COMPANY INC.</span>
                </h1>
                <div class="absolute inset-0 bg-blue-600/10 blur-[120px] rounded-full animate-glow-pulse -z-10"></div>
            </div>
        </div>
    </div>

<<<<<<< HEAD
<nav>
    <input type="checkbox" id="check">
    
    <!-- Burger Icon -->
    <label for="check" class="checkbtn">
        <span class="burger"></span>
    </label>

    <!-- Logo with Responsive Text -->
    <label class="logo" onclick="window.location.href='{{ url('/') }}'">
        <span class="full-text">Macro Wiring Technologies Co. Inc.</span>
    </label>

    <!-- Navigation Links -->
    <ul>
        <li><a href="{{ url('/') }}" class="nav-link-animated" :class="currentPath === '/' ? 'active-link' : ''">Home</a></li>
        <li><a href="{{ url('/products') }}" class="nav-link-animated" :class="currentPath.includes('products') ? 'active-link' : ''">Products</a></li>
        <li><a href="{{ url('/certifications') }}" class="nav-link-animated" :class="currentPath.includes('certifications') ? 'active-link' : ''">Certifications</a></li>
        <li><a href="{{ url('/about-us') }}" class="nav-link-animated" :class="currentPath.includes('about-us') ? 'active-link' : ''">About Us</a></li>
        <li><a href="{{ url('/contact') }}" class="nav-link-animated" :class="currentPath.includes('contact') ? 'active-link' : ''">Contact Us</a></li>

        @guest
            <li><a href="{{ route('login') }}" class="nav-link-animated">Admin</a></li>
        @endguest

        @auth
            <li><a href="{{ route('dashboard') }}" class="nav-link-animated">Dashboard</a></li>
        @endauth
    </ul>
</nav>
=======
    <nav>
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
            <span class="burger"></span>
        </label>
        <label class="logo" onclick="window.location.href='{{ url('/') }}'">
            Macro Wiring Technologies Co. Inc.
        </label>
        <ul>
            <li><a href="{{ url('/') }}" class="nav-link-animated" :class="currentPath === '/' ? 'active-link' : ''">Home</a></li>

            <li>
                <a href="{{ route('products') }}"
                    class="nav-link-animated"
                    :class="currentPath.includes('products') ? 'active-link' : ''">
                    Products
                </a>
            </li>
            <li><a href="{{ url('/certifications') }}" class="nav-link-animated" :class="currentPath.includes('certifications') ? 'active-link' : ''">Certifications</a></li>
            <li><a href="{{ url('/about-us') }}" class="nav-link-animated" :class="currentPath.includes('about-us') ? 'active-link' : ''">About Us</a></li>
            <li><a href="{{ url('/contact') }}" class="nav-link-animated" :class="currentPath.includes('contact') ? 'active-link' : ''">Contact Us</a></li>
            <li>
                <a href="{{ route('login') }}" class="nav-link-animated" :class="currentPath.includes('login') ? 'active-link' : ''">
                    Admin
                </a>
            </li>
        </ul>
    </nav>
>>>>>>> 2761380f8e95b1b55fb5f31b3b8e2b8659f10819

    <main>
        @include('sections.section-a')
        @include('sections.section-b')
        @include('sections.section-c')
        @include('sections.section-d')
        @include('.footer')
    </main>

    <button @click="window.scrollTo({ top: 0, behavior: 'smooth' })"
        class="fixed z-[999] p-4 rounded-full transition-all duration-500 hover:bg-blue-600 hover:text-white glass-button"
        :class="{ 'bottom-32 right-8': isAtBottom, 'bottom-8 right-8': !isAtBottom, 'opacity-100 scale-100': showScrollTop, 'opacity-0 scale-50 pointer-events-none': !showScrollTop }">
        <i class="fas fa-chevron-up"></i>
    </button>

</body>

</html>