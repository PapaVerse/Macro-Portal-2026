<script>
    // Logic remains exactly as you provided
    setTimeout(() => {
        let success = document.getElementById('successMessage');
        let error = document.getElementById('errorMessage');

        if (success) {
            success.style.opacity = '0';
            setTimeout(() => success.remove(), 500);
        }

        if (error) {
            error.style.opacity = '0';
            setTimeout(() => error.remove(), 500);
        }
    }, 3000);
</script>

<section class="bg-white pb-20">

    <div class="tech-header-container bg-slate-950 text-white py-16 px-6 relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
            <div class="motherboard-traces"></div>
            <div class="moving-glow"></div>
        </div>
        <div class="relative z-10 max-w-7xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">Contact Us</h1>
            <div class="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
            <p class="text-blue-100 max-w-xl mx-auto text-base md:text-lg font-light leading-relaxed">
                We welcome business inquiries, partnerships, and technical
                collaboration opportunities. Our team will respond promptly to your
                request.
            </p>
        </div>
    </div>
    {{-- UPDATED SUCCESS MESSAGE: Center positioned with green left-indicator and text --}}
    @if(session('success'))
    <div id="successMessage" class="relative -mt-10 flex justify-center z-[100] transition-all duration-500">
        <div class="bg-white border-t-8 border-t-green-500 border-x border-b border-green-100 shadow-[0_20px_50px_rgba(34,197,94,0.2)] rounded-2xl p-5 flex items-center gap-5 max-w-md w-full mx-6 overflow-hidden">

            {{-- Green Left Shape Indicator --}}
            <div class="absolute left-0 top-0 bottom-0 w-2 bg-green-500"></div>

            <div class="bg-green-500 h-12 w-12 shrink-0 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7" />
                </svg>
            </div>

            <div>
                <p class="text-base font-black text-green-600 uppercase tracking-tight">Submission Successful</p>
                <p class="text-[10px] text-green-500 font-bold uppercase tracking-widest opacity-80">Message Transmitted</p>
            </div>
        </div>
    </div>
    @endif

    <div class="max-w-6xl mx-auto px-6 mt-16">
        <div class="grid md:grid-cols-2 gap-12 lg:gap-20">

            {{-- LEFT SIDE --}}
            <div class="space-y-12">
                <div class="border-l-4 border-blue-600 pl-8">
                    <h3 class="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600 mb-6 flex items-center gap-3">
                        <span class="w-10 h-px bg-blue-600"></span> Communication
                    </h3>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        <div>
                            <p class="text-slate-900 font-black mb-4 uppercase text-[10px] tracking-widest opacity-50">Direct Lines</p>
                            <div class="space-y-4 text-slate-700 text-sm font-bold">
                                <a href="tel:+63464377204" class="flex items-center gap-3 hover:text-blue-600 transition-colors group">
                                    <span class="p-2 bg-slate-100 rounded-lg group-hover:bg-blue-50">📞</span> (+63 46) 437-7204
                                </a>
                                <a href="tel:+63464372443" class="flex items-center gap-3 hover:text-blue-600 transition-colors group">
                                    <span class="p-2 bg-slate-100 rounded-lg group-hover:bg-blue-50">📞</span> (+63 46) 437-2443
                                </a>
                                <a href="tel:+63464372499" class="flex items-center gap-3 hover:text-blue-600 transition-colors group">
                                    <span class="p-2 bg-slate-100 rounded-lg group-hover:bg-blue-50">📞</span> (+63 46) 437-2499
                                </a>
                                <a href="mailto:sales@macrowiring.co" class="flex items-center gap-3 hover:text-blue-600 transition-colors group">
                                    <span class="p-2 bg-slate-100 rounded-lg group-hover:bg-blue-50">✉️</span> sales@macrowiring.com
                                </a>
                            </div>
                        </div>

                        <div>
                            <p class="text-slate-900 font-black mb-4 uppercase text-[10px] tracking-widest opacity-50">Operations</p>
                            <div class="grid gap-2 text-slate-600 text-[11px] font-bold">
                                <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex justify-between"><span>AM Shift</span> <span class="text-blue-600">6:00 AM - 3:00 PM</span></div>
                                <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex justify-between"><span>Mid Shift</span> <span class="text-blue-600">7:00 AM - 4:00 PM</span></div>
                                <div class="bg-slate-900 text-white p-2.5 rounded-xl border border-slate-800 flex justify-between"><span>Night A</span> <span>6:00 PM - 3:00 AM</span></div>
                                <div class="bg-slate-900 text-white p-2.5 rounded-xl border border-slate-800 flex justify-between"><span>Night B</span> <span>7:00 PM - 4:00 AM</span></div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-10">
                        <button
                            onclick="handleQuotationClick()"
                            class="group inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:-translate-y-1">
                            Request a Quotation
                            <span class="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>
                </div>

                <div class="mt-20 border-l-4 border-slate-200 pl-8 group hover:border-blue-600 transition-colors">
                    <h3 class="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 mt-6 group-hover:text-blue-600 transition-colors">
                        HQ Location
                    </h3>
                    <p class="text-slate-600 leading-relaxed mb-6 font-medium">
                        7th St. Lot 11 Block 13 Phase 1 <br>
                        Cavite Economic Zone <br>
                        Rosario, Cavite, PH 4106
                    </p>
                    <div class="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 grayscale hover:grayscale-0 transition-all duration-1000">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.8859942691373!2d120.8655396758656!3d14.40604208204618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33962ce801673fb3%3A0x12d1e9c8a709652b!2sMacro%20Wiring%20Technologies%20Co.%20Inc.!5e0!3m2!1sen!2sph!4v1710000000000!5m2!1sen!2sph"
                            width="100%"
                            height="100%"
                            style="border:0;"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>

            {{-- RIGHT SIDE FORM --}}
            <div id="contact-form" class="bg-white border border-slate-100 p-8 lg:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] relative">



                <div class="mt-4">
                    <h3 class="text-3xl font-black text-slate-900 mb-2 tracking-tight">Inquiry Portal</h3>
                    <p class="text-slate-500 text-sm mb-10 font-medium tracking-tight">Complete the technical inquiry form below.</p>
                </div>

                <form action="{{ route('contacts.send') }}" method="POST" class="space-y-6">
                    @csrf
                    <div class="space-y-5">
                        <div class="group">
                            <label class="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1 group-focus-within:text-blue-600 transition-colors">Full Name</label>
                            <input type="text" name="full_name" required class="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all outline-none bg-slate-50/50 font-semibold text-slate-700" placeholder="e.g. John Doe Cameron">
                        </div>

                        <div class="group">
                            <label class="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1 group-focus-within:text-blue-600 transition-colors">Email Address</label>
                            <input type="email" name="email" required class="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all outline-none bg-slate-50/50 font-semibold text-slate-700" placeholder="macrowiring@gmail.com">
                        </div>

                        <div class="group">
                            <label class="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1 group-focus-within:text-blue-600 transition-colors">Subject</label>
                            <input id="subject" type="text" name="subject" required class="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all outline-none bg-slate-50/50 font-semibold text-slate-700">
                        </div>

                        <div class="group">
                            <label class="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1 group-focus-within:text-blue-600 transition-colors">Technical Message</label>
                            <textarea id="message" name="message" rows="5" required class="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all outline-none bg-slate-50/50 font-semibold text-slate-700 resize-none" placeholder="Please provide details..."></textarea>
                        </div>
                    </div>

                    <button type="submit" class="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] hover:bg-blue-600 transition-all shadow-xl shadow-slate-100 mt-4 active:scale-95">
                        Transmit Message
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>

<script>
    function handleQuotationClick() {
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        subject.value = "Request for Quotation";
        message.value = `Good day,

We would like to request a quotation for the following:

Product/Service:
Estimated Quantity:
Target Delivery Date:

Please advise on pricing, lead time, and terms.

Thank you.`;

        document.getElementById("contact-form").scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
</script>