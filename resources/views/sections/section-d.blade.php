<section id="transformation" class="relative bg-white py-24 px-6 overflow-hidden">
    <div class="absolute top-0 right-0 w-1/3 h-full bg-blue-50 -z-10"></div>

    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div class="z-10">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                How We Transform Business
            </h2>

            <p class="text-gray-600 mb-6 leading-relaxed">
                We modernize operations through high-performance industrial
                electrical systems, strategic infrastructure planning, and scalable
                energy solutions built for long-term success.
            </p>

            <ul class="space-y-3 mb-8 text-gray-700 font-medium">
                <li class="flex items-center gap-2 text-blue-600">✔ <span class="text-gray-700">Increased operational efficiency</span></li>
                <li class="flex items-center gap-2 text-blue-600">✔ <span class="text-gray-700">Reliable industrial-grade systems</span></li>
                <li class="flex items-center gap-2 text-blue-600">✔ <span class="text-gray-700">Sustainable energy integration</span></li>
                <li class="flex items-center gap-2 text-blue-600">✔ <span class="text-gray-700">Long-term cost optimization</span></li>
            </ul>

            <a 
                href="https://drive.google.com/file/d/1m7t9BEXZWlw5-bRC0msuVJUDWF3UQ8GM/view?usp=sharing"
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300 shadow-lg active:scale-95"
            >
                Watch Full Video Here
            </a>
        </div>

        <div class="relative group">
            <div class="absolute -inset-4 bg-blue-100 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500"></div>

            <div class="relative overflow-hidden rounded-2xl shadow-2xl">
                <video
                    id="mwtcVideo"
                    class="w-full h-80 md:h-112 object-cover transition duration-500 group-hover:scale-105"
                    src="{{ asset('videos/MWTC.mp4') }}"
                    autoplay
                    loop
                    muted
                    playsinline
                >
                    Your browser does not support the video tag.
                </video>

                <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-6 gap-3">
                    <button 
                        onclick="togglePiP()"
                        class="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition border border-white/30"
                        title="Picture in Picture"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 8h10v7H7z"/></svg>
                    </button>
                    <button 
                        onclick="toggleFullScreen()"
                        class="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition border border-white/30"
                        title="Full Screen"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 3 6 6M9 21l-6-6M21 3v6h-6M3 21v-6h6"/></svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
    const video = document.getElementById('mwtcVideo');

    function toggleFullScreen() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    }

    async function togglePiP() {
        try {
            if (video !== document.pictureInPictureElement) {
                await video.requestPictureInPicture();
            } else {
                await document.exitPictureInPicture();
            }
        } catch (error) {
            console.error("PiP failed", error);
        }
    }
</script>