<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name', 'Macro Wiring Technologies') }}</title>

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
            white-space: nowrap; 
            cursor: pointer; 
            transition: color 0.3s;
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

        /* --- CONSENT & WELCOME ANIMATIONS --- */
        @keyframes welcomeText { 0% { opacity: 0; transform: translateY(20px); } 20%, 80% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(-20px); filter: blur(10px); } }
        @keyframes textZoomPass { 0% { opacity: 0; transform: scale(0.9); filter: blur(10px); } 40% { opacity: 1; transform: scale(1); filter: blur(0px); } 100% { opacity: 0; transform: scale(1.1); filter: blur(20px); } }
        @keyframes glowPulse { 0% { opacity: 0; scale: 0.5; } 50% { opacity: 1; scale: 1.2; } 100% { opacity: 0; scale: 2; } }
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
        
        .animate-welcome-text { animation: welcomeText 3.2s ease-in-out forwards; }
        .animate-text-zoom-pass { animation: textZoomPass 3.2s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-glow-pulse { animation: glowPulse 3.2s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        /* --- UTILS --- */
        [x-cloak] { display: none !important; }
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .glass-button { background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.4); }
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
    class="bg-slate-50 font-sans antialiased text-slate-900"
>

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

    <nav>
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
        <label class="logo" onclick="window.location.href='{{ url('/') }}'">Macro Wiring</label>
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