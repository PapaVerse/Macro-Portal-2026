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
            max-width: 50%;
            /* Limits logo to half the screen width */
            line-height: 90px;
        }

        /* --- MOBILE RESPONSIVE FIX --- */
        @media (max-width: 1100px) {
            label.logo {
                font-size: 18px;
                /* Smaller font for mobile */
                max-width: 70%;
                /* Gives more room to the hamburger icon */
            }

            .checkbtn {
                display: block;
                margin-right: 0;
                /* Adjusted for flexbox */
                order: 2;
                /* Ensures it stays on the right */
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
            transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
        }

        .nav-link-animated:hover::after {
            transform: scaleX(1);
        }

        /* --- ACTIVE STATE (BACK & FORTH) --- */
        @keyframes backAndForth {
            0% {
                transform: scaleX(0.3);
                transform-origin: center left;
            }

            50% {
                transform: scaleX(1);
                transform-origin: center;
            }

            100% {
                transform: scaleX(0.3);
                transform-origin: center right;
            }
        }

        .active-link {
            color: #60a5fa !important;
        }

        .active-link::after {
            transform: scaleX(1);
            animation: backAndForth 2s ease-in-out infinite;
        }

        /* --- MOBILE MENU --- */
        .checkbtn {
            font-size: 30px;
            color: white;
            float: right;
            line-height: 90px;
            margin-right: 40px;
            cursor: pointer;
            display: none;
        }

        #check {
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
                justify-content: start;
                text-align: center;
                transition: all .4s;
                padding-top: 60px;
            }

            nav ul li {
                display: block;
                width: 100%;
                margin: 15px 0;
                line-height: normal;
            }

            .nav-link-animated {
                font-size: 20px;
                display: inline-block;
            }

            /* Center the line for mobile menu items */
            .nav-link-animated::after {
                width: 60px;
                left: 50%;
                margin-left: -30px;
            }

            #check:checked~ul {
                left: 0;
            }
        }

        /* Login Layout */
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

    <nav>
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
        <label class="logo" onclick="window.location.href='{{ url('/') }}'">
            {{ \App\Models\User::find(1)->name ?? 'Macro Wiring' }}
        </label>
        <ul>
            <li><a href="{{ url('/') }}" class="nav-link-animated">Home</a></li>
            <li><a href="/products" class="nav-link-animated">Products</a></li>
            <li><a href="/certifications" class="nav-link-animated">Certifications</a></li>
            <li><a href="/about-us" class="nav-link-animated">About Us</a></li>
            <li><a href="/contact" class="nav-link-animated">Contact Us</a></li>
            <li>
                <a href="{{ route('login') }}" class="nav-link-animated" :class="currentPath.includes('login') ? 'active-link' : ''">
                    Admin
                </a>
            </li>
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