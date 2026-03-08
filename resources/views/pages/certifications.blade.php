<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Certifications | Macro Wiring Technologies</title>
<link rel="icon" type="image/png" href="{{ asset('images/M.png') }}">
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

                /* --- NAVIGATION BAR (Synced with Login) --- */
/* --- UPDATED NAVIGATION BAR --- */
nav { 
    background: #001e30; 
    height: 90px; 
    width: 100%; 
    font-family: "Montserrat", sans-serif; 
    position: sticky; 
    top: 0; 
    z-index: 1001;
    /* FLEXBOX FIX: Ensures logo and menu stay on opposite sides */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

label.logo { 
    color: white; 
    font-size: 24px; 
    font-weight: 800; 
    cursor: pointer; 
    transition: color 0.3s;
    /* TRUNCATION FIX: Prevents text from overlapping menu */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 50%; /* Limits logo to half the screen width */
    line-height: 90px;
}

/* --- MOBILE RESPONSIVE FIX --- */
@media (max-width: 1100px) {
    label.logo {
        font-size: 18px; /* Smaller font for mobile */
        max-width: 70%;  /* Gives more room to the hamburger icon */
    }
    .checkbtn { 
        display: block; 
        margin-right: 0; /* Adjusted for flexbox */
        order: 2; /* Ensures it stays on the right */
    }
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

        /* --- ANIMATED LINKS --- */
        .nav-link-animated {
            position: relative;
            color: white;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
            transition: color 0.3s ease;
            cursor: pointer;
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

        /* --- ACTIVE STATE --- */
        @keyframes backAndForth {
            0% { transform: scaleX(0.3); transform-origin: center left; }
            50% { transform: scaleX(1); transform-origin: center; }
            100% { transform: scaleX(0.3); transform-origin: center right; }
        }
        .active-link { color: #60a5fa !important; }
        .active-link::after { transform: scaleX(1); animation: backAndForth 2s ease-in-out infinite; }

        /* --- MOBILE MENU --- */
        .checkbtn { font-size: 30px; color: white; float: right; line-height: 90px; margin-right: 40px; cursor: pointer; display: none; }
        #check { display: none; }

        @media (max-width: 1100px) {
            .checkbtn { display: block; }
            nav ul { 
                position: fixed; width: 100%; height: 100vh; background: #0b1120; 
                top: 90px; left: -100%; flex-direction: column; padding-top: 60px; transition: all .4s; 
                justify-content: start; text-align: center;
            }
            nav ul li { display: block; width: 100%; margin: 15px 0; line-height: normal; }
            .nav-link-animated { font-size: 20px; display: inline-block; }
            .nav-link-animated::after { width: 60px; left: 50%; margin-left: -30px; }
            #check:checked ~ ul { left: 0; }
        }

        /* Tech Header Visuals */
        .tech-header-container { position: relative; isolation: isolate; overflow: hidden; background-color: #020617; }
        .moving-glow {
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 50% 50%, rgba(30, 64, 175, 0.4) 0%, rgba(15, 23, 42, 0.2) 50%, transparent 100%);
            animation: pulse-glow 8s ease-in-out infinite;
            z-index: -1;
        }
        @keyframes pulse-glow { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.1); } }
        [x-cloak] { display: none !important; }
  
               /* --- UTILS --- */
        [x-cloak] { display: none !important; }
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .glass-button { background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.4); }
    
  
  </style>
</head>

<body x-data="{ 
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

    <nav>
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
<label class="logo" onclick="window.location.href='{{ url('/') }}'">
    {{ \App\Models\User::find(1)->name ?? 'Macro Wiring' }}
</label>
        <ul>
            <li><a href="{{ url('/') }}" class="nav-link-animated" :class="currentPath === '/' ? 'active-link' : ''">Home</a></li>
            <li><a href="{{ url('/products') }}" class="nav-link-animated" :class="currentPath.includes('products') ? 'active-link' : ''">Products</a></li>
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

    <main>
        @include('pages.section.certification-section')
        @include('footer') 
    </main>
    <button @click="window.scrollTo({ top: 0, behavior: 'smooth' })"
        class="fixed z-[999] p-4 rounded-full transition-all duration-500 hover:bg-blue-600 hover:text-white glass-button"
        :class="{ 'bottom-32 right-8': isAtBottom, 'bottom-8 right-8': !isAtBottom, 'opacity-100 scale-100': showScrollTop, 'opacity-0 scale-50 pointer-events-none': !showScrollTop }">
        <i class="fas fa-chevron-up"></i>
    </button>
</body>
</html>