<!DOCTYPE html>
<html lang="en" class="h-full">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login | Macro Wiring Technologies</title>
    <meta name="robots" content="noindex, nofollow">
    <link rel="icon" type="image/png" href="{{ asset('images/M.png') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>


    @vite(['resources/css/app.css', 'resources/js/app.js'])

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&family=Inter:wght@400;700;900&display=swap');

    body {
        background-color: #f8fafc;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        margin: 0;
        font-family: 'Inter', sans-serif;
    }

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
        /* Keeps the full name on one line */
        white-space: nowrap; 
        transition: all 0.3s ease;
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
        0% { transform: scaleX(0.3); transform-origin: left; }
        50% { transform: scaleX(1); }
        100% { transform: scaleX(0.3); transform-origin: right; }
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
    .burger, .burger::before, .burger::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        background: white;
        border-radius: 2px;
        transition: all 0.3s ease;
    }

    .burger { top: 50%; transform: translateY(-50%); }
    .burger::before { top: -10px; }
    .burger::after { top: 10px; }

    /* RESPONSIVE MEDIA QUERIES */
    @media (max-width: 1100px) {
        .checkbtn {
            display: block;
        }

        label.logo {
            font-size: 18px; /* Initial reduction for tablets/laptops */
            padding: 0 20px;
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
            float: none;
            margin-right: 0;
        }

        #check:checked~ul {
            left: 0;
        }
    }

    /* Adjustments for smaller phones */
    @media (max-width: 480px) {
        label.logo {
            font-size: 14px; /* Scaled down to fit between edge and burger icon */
            padding: 0 15px;
        }
        
        .checkbtn {
            right: 15px;
        }
    }

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

    [x-cloak] {
        display: none !important;
    }

    .login-container {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    }
</style>
</head>

<body x-data="{ currentPath: window.location.pathname }">

     <!-- NAVBAR -->
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

    <div class="login-container">
        <div x-data="{ 
            email: '{{ old('email') }}', 
            hasError: {{ $errors->any() ? 'true' : 'false' }},
            get isEmailValid() {
                if (this.email.length === 0) return true;
                return /^\S+@\S+\.\S+$/.test(this.email);
            }
        }"
            class="w-full max-w-md p-8 bg-white rounded-[3rem] shadow-2xl border border-slate-100 text-center relative overflow-hidden transition-all duration-500"
            :class="hasError ? 'ring-2 ring-red-500 shadow-[0_0_40px_rgba(239,68,68,0.2)] animate-shake' : ''">

            <div class="text-2xl font-black text-slate-900 mb-8 mt-4">Macro<span class="text-blue-600">Wiring</span></div>

            <form method="POST" action="{{ route('login') }}" class="text-left" @submit="!isEmailValid && $event.preventDefault()">
                @csrf

                {{-- Email Field with Real-time Validation --}}
                <div class="mb-4">
                    <label class="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 ml-1">Email Address</label>
                    <div class="relative">
                        <input
                            type="email"
                            name="email"
                            x-model="email"
                            required
                            class="w-full p-4 rounded-2xl border bg-slate-50 outline-none transition-all duration-300"
                            :class="!isEmailValid || (hasError && email.length > 0) ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:ring-2 focus:ring-blue-500/20'"
                            placeholder="name@company.com">

                        {{-- Status Icon Indicator --}}
                        <div class="absolute right-4 top-1/2 -translate-y-1/2 transition-opacity duration-300" x-show="email.length > 0">
                            <i :class="isEmailValid ? 'fas fa-check-circle text-green-500' : 'fas fa-times-circle text-red-500'"></i>
                        </div>
                    </div>

                    <p x-show="!isEmailValid" x-transition class="mt-2 text-[10px] text-red-600 font-bold uppercase tracking-tight flex items-center gap-1 ml-1">
                        <i class="fas fa-exclamation-triangle"></i> Invalid email format
                    </p>
                </div>

                {{-- Password Field --}}
                <div class="mb-6">
                    <label class="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 ml-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        required
                        @input="hasError = false"
                        class="w-full p-4 rounded-2xl border bg-slate-50 outline-none transition-all duration-300"
                        :class="hasError ? 'border-red-500 bg-red-50 focus:ring-red-500/20' : 'border-slate-200 focus:ring-2 focus:ring-blue-500/20'"
                        placeholder="••••••••">

                    {{-- Server-side Error Message (Wrong Password) --}}
                    @if ($errors->any())
                    <p x-show="hasError" x-transition class="mt-3 text-[11px] text-red-600 font-bold uppercase tracking-tight flex items-center justify-center gap-2 bg-red-100/50 py-2 rounded-lg">
                        <i class="fas fa-lock text-[10px]"></i> Invalid credentials
                    </p>
                    @endif
                </div>

                <button
                    type="submit"
                    :disabled="!isEmailValid"
                    class="w-full py-4 bg-slate-900 hover:bg-black text-white font-black uppercase text-xs tracking-[0.2em] rounded-2xl transition-all active:scale-95 shadow-lg shadow-slate-200 disabled:opacity-50">
                    LOG IN
                </button>
            </form>

            <p class="mt-8 text-[10px] text-slate-400 uppercase tracking-widest font-bold">Macro Admin Portal © 2026</p>
        </div>
    </div>

    <style>
        @keyframes shake {

            0%,
            100% {
                transform: translateX(0);
            }

            20% {
                transform: translateX(-10px);
            }

            40% {
                transform: translateX(10px);
            }

            60% {
                transform: translateX(-10px);
            }

            80% {
                transform: translateX(10px);
            }
        }

        .animate-shake {
            animation: shake 0.5s cubic-bezier(.36, .07, .19, .97) both;
        }
    </style>

    <main>
        @include('footer')
    </main>
</body>

</html>