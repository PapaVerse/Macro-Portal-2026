<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login | Macro Wiring Technologies</title>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    
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

        /* --- NAVBAR STYLING (Matched to Main) --- */
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

        /* --- ACTIVE STATE (BACK & FORTH) --- */
        @keyframes backAndForth {
            0% { transform: scaleX(0.3); transform-origin: center left; }
            50% { transform: scaleX(1); transform-origin: center; }
            100% { transform: scaleX(0.3); transform-origin: center right; }
        }

        .active-link { color: #60a5fa !important; }
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
        #check { display: none; }

        @media (max-width: 1100px) {
            .checkbtn { display: block; }
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
            nav ul li { display: block; width: 100%; margin: 15px 0; line-height: normal; }
            .nav-link-animated { font-size: 20px; display: inline-block; }
            
            /* Center the line for mobile menu items */
            .nav-link-animated::after {
                width: 60px;
                left: 50%;
                margin-left: -30px;
            }
            
            #check:checked ~ ul { left: 0; }
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
        <label class="logo" onclick="window.location.href='{{ url('/') }}'">Macro Wiring</label>
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
        <div class="w-full max-w-md p-8 bg-white rounded-3xl shadow-2xl border border-slate-100 text-center">
            <div class="text-2xl font-black text-slate-900 mb-8">Macro<span class="text-blue-600">Wiring</span></div>
            
            <form method="POST" action="{{ route('login') }}" class="text-left">
                @csrf
                <div class="mb-4">
                    <label class="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input type="email" name="email" required class="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" placeholder="name@company.com">
                </div>
                <div class="mb-6">
                    <label class="block text-sm font-bold text-slate-700 mb-2">Password</label>
                    <input type="password" name="password" required class="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" placeholder="••••••••">
                </div>
                <button type="submit" class="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-100">
                    LOG IN
                </button>
            </form>
            
            <p class="mt-8 text-[10px] text-slate-400 uppercase tracking-widest font-bold">Macro Admin Portal © 2026</p>
        </div>
    </div>

</body>
</html>