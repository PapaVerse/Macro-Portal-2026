<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Macro Wiring Technologies | Precision Wire Harness Solutions</title>
    <script src="https://cdn.tailwindcss.com"></script>
    
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: #ffffff;
        }

        .hero-container {
            position: relative;
            width: 100%;
            height: 100vh;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* --- LOGO MEDIA QUERIES --- */
        .mwtci-logo-custom {
            width: 224px;
            height: auto;
        }

        @media (max-width: 768px) {
            .mwtci-logo-custom {
                width: 180px;
            }
        }

        @media (max-width: 480px) {
            .mwtci-logo-custom {
                width: 160px !important;
            }
        }
        /* -------------------------- */

        .video-background {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            object-fit: cover;
            z-index: -2;
        }

        .video-overlay {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(7, 22, 57, 0.75); 
            z-index: -1;
        }

        @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
        }

        .marquee-container {
            width: 100%;
            padding: 30px 0;
            overflow: hidden;
            display: flex;
            background-color: #ffffff;
            border-top: 1px solid #f1f5f9;
        }

        .marquee-track {
            display: flex;
            flex-shrink: 0;
            gap: 130px; 
            padding-right: 70px; 
            animation: scroll 35s linear infinite;
        }

        .marquee-item {
            height: 50px; 
            width: auto;
            filter: grayscale(100%);
            opacity: 0.4;
            transition: all 0.3s ease;
        }

        .marquee-item:hover {
            filter: grayscale(0%);
            opacity: 1;
            transform: scale(1.1);
        }

        @media (max-width: 768px) {
            .marquee-item { height: 42px; }
            .marquee-track { gap: 85px; padding-right: 35px; }
        }
    </style>
</head>
<body class="antialiased">

    <div class="hero-container">
        <video autoplay muted loop playsinline class="video-background">
            <source src="{{ asset('videos/MWTC.mp4') }}" type="video/mp4">
        </video>
        <div class="video-overlay"></div>

        <div class="relative z-10 text-center px-6 -mt-32">
            <img src="{{ asset('images/mwtci_logo.png') }}" class="mwtci-logo-custom mx-auto mb-8 drop-shadow-lg" />
            
            <div class="max-w-4xl mx-auto -mt-10">
                <p class="text-blue-400 text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-4">
                    Precision Wire Harness Solutions
                </p>
                <h1 class="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                    Making Our Wire Harnesses <br class="hidden md:block" /> 
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Your Own</span>
                </h1>
                <p class="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-10 opacity-90">
                    With over 20 years in the industry, we deliver trusted partner solutions for branded electronic products worldwide.
                </p>
                
                <div class="flex flex-col sm:flex-row gap-6 justify-center items-center w-full sm:w-auto">
                    <a href="{{ url('/products') }}" 
                       class="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] text-center w-full sm:w-auto">
                        View Our Products
                    </a>

                    <a href="{{ url('/contact') }}" 
                       class="border-2 border-white/30 hover:border-white/100 text-white backdrop-blur-sm px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 text-center w-full sm:w-auto">
                        Get In Touch Now
                    </a>
                </div>
            </div>
        </div>
    </div>

    <section class="py-12 bg-white">
        <div class="text-center mb-8">
            <h2 class="text-[10px] md:text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">
                Certifications and Awards
            </h2>
        </div>

        <div class="marquee-container">
            <div class="marquee-track" id="marquee-content">
                <img src="{{ asset('images/marquee/marqueeImage.png') }}" class="marquee-item" alt="Logo">
                <img src="{{ asset('images/marquee/marqueeImage1.png') }}" class="marquee-item" alt="Logo">
                <img src="{{ asset('images/marquee/marqueeImage2.png') }}" class="marquee-item" alt="Logo">
                <img src="{{ asset('images/marquee/marqueeImage3.png') }}" class="marquee-item" alt="Logo">
                <img src="{{ asset('images/marquee/marqueeImage4.png') }}" class="marquee-item" alt="Logo">
                <img src="{{ asset('images/marquee/marqueeImage5.png') }}" class="marquee-item" alt="Logo">
                <img src="{{ asset('images/marquee/marqueeImage6.png') }}" class="marquee-item" alt="Logo">
                <img src="{{ asset('images/marquee/marqueeImage7.png') }}" class="marquee-item" alt="Logo">
            </div>
        </div>
    </section>

    <script>
        const track = document.getElementById('marquee-content');
        const clone = track.cloneNode(true);
        track.parentElement.appendChild(clone);
    </script>

</body>
</html>