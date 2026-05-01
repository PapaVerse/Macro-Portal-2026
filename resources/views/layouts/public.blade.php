<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- SEO -->
    <title>@yield('title', 'Macro Wiring Technologies')</title>
    <meta name="description" content="@yield('meta_description', 'Macro Wiring Technologies official website')">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />

    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

    <!-- Alpine -->
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>

    <!-- Vite / Tailwind -->
    @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @else
    <script src="https://cdn.tailwindcss.com"></script>
    @endif

    <!-- Styles -->
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
        }

        nav ul {
            float: right;
            margin-right: 30px;
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
            padding-bottom: 8px;
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
            transition: transform 0.4s;
        }

        #check {
            display: none;
        }

        .nav-link-animated:hover::after {
            transform: scaleX(1);
        }

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

        .active-link {
            color: #60a5fa !important;
        }

        .active-link::after {
            transform: scaleX(1);
            animation: backAndForth 2s infinite;
        }

        .checkbtn {
            display: none;
        }

        @media (max-width: 1100px) {
            .checkbtn {
                display: block;
            }

            nav ul {
                position: fixed;
                width: 100%;
                height: 100vh;
                background: #0b1120;
                top: 90px;
                left: -100%;
                flex-direction: column;
                padding-top: 60px;
                transition: 0.4s;
            }

            #check:checked~ul {
                left: 0;
            }
        }

        [x-cloak] {
            display: none !important;
        }

        .glass-button {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.4);
        }


        /* HERO HEADER EFFECT */
        .tech-header-container {
            position: relative;
            isolation: isolate;
            overflow: hidden;
            background-color: #020617;
        }

        .moving-glow {
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 50% 50%, rgba(30, 64, 175, 0.4) 0%, rgba(15, 23, 42, 0.2) 50%, transparent 100%);
            animation: pulse-glow 8s ease-in-out infinite;
            z-index: -1;
        }

        @keyframes pulse-glow {

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

        /* SCROLL BUTTON (optional if you want same behavior) */
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
        currentPath: window.location.pathname,
        handleScroll() {
            this.showScrollTop = window.scrollY > 400;
            this.isAtBottom = (window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 150);
        }
    }"
    @scroll.window="handleScroll"
    class="bg-slate-50 font-sans antialiased text-slate-900">

    <!-- NAVBAR -->
    <nav>
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
            <span class="burger"></span>
        </label>

        <label class="logo" onclick="window.location.href='{{ url('/') }}'">
            Macro Wiring
        </label>

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

    <!-- CONTENT -->
    <main>
        @yield('content')
    </main>

    <!-- FOOTER -->
    @include('footer')

    <!-- SCROLL BUTTON -->
    <button @click="window.scrollTo({ top: 0, behavior: 'smooth' })"
        class="fixed z-[999] p-4 rounded-full transition-all duration-500 hover:bg-blue-600 hover:text-white glass-button"
        :class="{ 
            'bottom-32 right-8': isAtBottom, 
            'bottom-8 right-8': !isAtBottom, 
            'opacity-100 scale-100': showScrollTop, 
            'opacity-0 scale-50 pointer-events-none': !showScrollTop 
        }">
        <i class="fas fa-chevron-up"></i>
    </button>

</body>

</html>