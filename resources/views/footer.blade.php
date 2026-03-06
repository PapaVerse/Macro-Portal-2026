<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>

<footer x-data="{ modalOpen: false, modalType: '', hasAgreed: false }" class="bg-gray-900 text-gray-300 py-16 px-6 relative">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div class="space-y-4">
            <h2 class="text-2xl font-bold text-white mb-4 tracking-tight">MACRO WIRING</h2>
            <p class="text-gray-400 leading-relaxed">
                With over 20 years of excellence, we are a leading Tier-1 partner 
                for precision wire harness and power cord solutions.
            </p>
        </div>

        <div>
            <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                CONTACT
            </h3>
            <ul class="space-y-3 text-gray-400 text-sm">
                <li>
                    <span class="block text-gray-500 text-xs uppercase font-bold">Inquiries</span>
                    <a href="tel:+63464377204" class="hover:text-blue-400 transition">(+63 46) 437-7204</a>
                </li>
                <li>
                    <span class="block text-gray-500 text-xs uppercase font-bold mt-2">Email</span>
                    <a href="mailto:sales@macrowiring.co" class="hover:text-blue-400 transition flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        sales@macrowiring.co
                    </a>
                </li>
            </ul>
        </div>

        <div>
            <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-500"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                LOCATION
            </h3>
            <p class="text-gray-400 leading-relaxed text-sm">
                Lot 3 Block 17 Phase 4<br />
                Cavite Economic Zone<br />
                Rosario, Cavite, PH 4106
            </p>
            <a href="https://www.waze.com/live-map/directions/ph/calabarzon/rosario/macro-wiring-technologies-co.-inc.?to=place.ChIJsz9nAegsljMRK2UJp8jp0RI" 
               target="_blank" 
               class="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2 px-4 rounded-full transition-all">
                GET DIRECTIONS (WAZE)
            </a>
        </div>

        <div class="h-48 lg:h-full min-h-[150px] rounded-2xl overflow-hidden border border-gray-800 grayscale hover:grayscale-0 transition-all duration-500">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3865.4654574944114!2d120.902279!3d14.342617!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339796e801673f33%3A0x12d1e9c8a709652b!2sMacro%20Wiring%20Technologies%20Co.%20Inc.!5e0!3m2!1sen!2sph!4v1710000000000" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>

    <div class="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs text-center">
        <p>© 2026 Macro Wiring Technologies Co. Inc. All Rights Reserved.</p>
        <div class="flex gap-6">
            <button @click="modalOpen = true; modalType = 'privacy'; hasAgreed = false" class="hover:text-white transition uppercase font-bold tracking-tighter">Privacy Policy</button>
            <button @click="modalOpen = true; modalType = 'terms'; hasAgreed = false" class="hover:text-white transition uppercase font-bold tracking-tighter">Terms of Service</button>
        </div>
    </div>

    <template x-teleport="body">
        <div x-show="modalOpen" 
             class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
             style="display: none;"
             x-transition:enter="transition ease-out duration-300"
             x-transition:enter-start="opacity-0 scale-95"
             x-transition:enter-end="opacity-100 scale-100">
            
            <div @click.away="modalOpen = false" class="bg-white w-full max-w-xl max-h-[75vh] rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl mt-5">
                <div class="p-10 pb-6 flex items-start gap-5">
                    <div class="p-4 rounded-2xl" :class="modalType === 'privacy' ? 'bg-green-50' : 'bg-blue-50'">
                        <template x-if="modalType === 'privacy'">
                            <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                        </template>
                        <template x-if="modalType === 'terms'">
                            <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>
                        </template>
                    </div>
                    <div>
                        <h2 class="text-3xl font-black text-slate-900" x-text="modalType === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'"></h2>
                        <p class="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-1">Legal Acknowledgment Required</p>
                    </div>
                </div>
                
                <div class="px-10 overflow-y-auto text-[15px] text-slate-600 space-y-8 pb-10 leading-relaxed">
                    <template x-if="modalType === 'privacy'">
                        <div class="space-y-6">
                            <p>In compliance with the <strong>Philippine Data Privacy Act of 2012 (RA 10173)</strong>, Macro Wiring Technologies Co. Inc. ensures all personal data submitted through our contact channels is handled securely.</p>
                            
                            <div>
                                <h4 class="font-bold text-slate-900 mb-1">Data Collection & Use</h4>
                                <p>We collect personal information (Name, Email, Contact Number) <strong>only</strong> when voluntarily submitted via our Contact Us form. This data is used exclusively to respond to your specific business inquiries and is processed in line with our <strong>ISO 9001:2015</strong> quality procedures.</p>
                            </div>

                            <div>
                                <h4 class="font-bold text-slate-900 mb-1">Information Security</h4>
                                <p>We do not provide public user accounts or portals. Your information is stored in secured internal systems protected against unauthorized access. We do not sell or share your contact details with third-party marketers.</p>
                            </div>
                            
                            <h4 class="font-bold text-slate-900">Your Privacy Rights</h4>
                        </div>
                    </template>

                    <template x-if="modalType === 'terms'">
                        <div class="space-y-6">
                            <p class="italic">Access to and use of this website is subject to the following terms and conditions and all applicable laws of the Republic of the Philippines.</p>
                            
                            <div class="flex gap-4">
                                <svg class="w-5 h-5 text-blue-500 shrink-0 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                <div>
                                    <h4 class="font-bold text-slate-900 mb-1">Philippine Scope</h4>
                                    <p>The information concerning products or services is applicable only in the Philippines.</p>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <svg class="w-5 h-5 text-blue-500 shrink-0 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                <div>
                                    <h4 class="font-bold text-slate-900 mb-1">Intellectual Property</h4>
                                    <p>Distribution, modification, or reproduction of content (text, images, source code) is prohibited without written permission from the owner.</p>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <svg class="w-5 h-5 text-blue-500 shrink-0 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                <div>
                                    <h4 class="font-bold text-slate-900 mb-1">Liability Disclaimer</h4>
                                    <p>Browsing is at the user's risk. We assume no liability for errors or omissions in site contents.</p>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>

                <div class="p-10 pt-0">
                    <label class="flex items-center gap-4 cursor-pointer group mb-6">
                        <div class="relative">
                            <input type="checkbox" x-model="hasAgreed" class="peer appearance-none w-7 h-7 border-2 border-slate-200 rounded-xl checked:bg-blue-600 checked:border-blue-600 transition-all">
                            <svg class="absolute inset-0 w-7 h-7 text-white opacity-0 peer-checked:opacity-100 p-1.5 transition-opacity" fill="none" stroke="currentColor" stroke-width="4" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                        </div>
                        <span class="text-xs font-black text-slate-800 uppercase tracking-tighter select-none">
                            I have read and agree to the <span x-text="modalType === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'"></span>
                        </span>
                    </label>
                    <button :disabled="!hasAgreed" @click="modalOpen = false" 
                            class="w-full py-5 rounded-2xl font-black uppercase tracking-[0.1em] transition-all text-sm shadow-xl shadow-blue-100"
                            :class="hasAgreed ? 'bg-slate-900 text-white hover:bg-black' : 'bg-slate-100 text-slate-300 cursor-not-allowed'">
                        I Understand & Accept
                    </button>
                </div>
            </div>
        </div>
    </template>
</footer>