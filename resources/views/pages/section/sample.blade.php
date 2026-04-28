
<script>
setTimeout(() => {
    let success = document.getElementById('successMessage');
    let error = document.getElementById('errorMessage');

    if(success){
        success.style.opacity = '0';
        setTimeout(() => success.remove(), 500);
    }

    if(error){
        error.style.opacity = '0';
        setTimeout(() => error.remove(), 500);
    }
}, 3000);
</script>
<section class="bg-white py-24 px-6 relative">



   {{-- SUCCESS MESSAGE --}}
@if(session('success'))
<div id="successMessage" class="fixed top-24 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md transition-opacity duration-500">
    <div class="bg-white border border-green-100 shadow rounded-2xl p-4 flex items-center gap-4">
        <div class="bg-green-500 p-2 rounded-full text-white">✓</div>
        <div>
            <p class="text-sm font-bold text-slate-900">Submission Successful</p>
            <p class="text-xs text-slate-500">Your message has been sent to our team.</p>
        </div>
    </div>
</div>
@endif

{{-- ERROR MESSAGE --}}
@if($errors->any())
<div id="errorMessage" class="fixed top-24 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md transition-opacity duration-500">
    <div class="bg-white border border-red-100 shadow rounded-2xl p-4">
        <p class="text-sm font-bold text-red-600 mb-2">Submission Failed</p>
        <ul class="text-xs text-gray-500">
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
</div>
@endif


    <div class="max-w-6xl mx-auto">

        <div class="grid md:grid-cols-2 gap-16">

            {{-- LEFT SIDE --}}
            <div class="space-y-12">

                <div class="border-l-4 border-blue-600 pl-6">

                    <h3 class="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">
                        Contact
                    </h3>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">

                        <div>
                            <p class="text-gray-800 font-semibold mb-3 uppercase text-xs tracking-wider">
                                Inquiries
                            </p>

                            <div class="space-y-3 text-gray-600 text-sm">
                                <a href="tel:+63464377204" class="flex items-center gap-3 hover:text-blue-600">
                                    (+63 46) 437-7204
                                </a>

                                <a href="tel:+63464772499" class="flex items-center gap-3 hover:text-blue-600">
                                    (+63 46) 477-2499
                                </a>

                                <a href="mailto:sales@macrowiring.co" class="flex items-center gap-3 hover:text-blue-600">
                                    sales@macrowiring.co
                                </a>
                            </div>
                        </div>


                        <div>
                            <p class="text-gray-800 font-semibold mb-3 uppercase text-xs tracking-wider">
                                Availability Hours
                            </p>

                            <div class="grid gap-2 text-gray-600 text-sm">
                                <div class="bg-slate-50 p-2 rounded border">6:00 AM - 3:00 PM</div>
                                <div class="bg-slate-50 p-2 rounded border">7:00 AM - 4:00 PM</div>
                                <div class="bg-slate-50 p-2 rounded border">6:00 PM - 3:00 AM</div>
                                <div class="bg-slate-50 p-2 rounded border">7:00 PM - 4:00 AM</div>
                            </div>
                        </div>

                    </div>

                    <div class="mt-8">
                        <button
                        onclick="handleQuotationClick()"
                        class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition shadow-md">
                        Request a Quotation
                        </button>
                    </div>

                </div>


                {{-- LOCATION --}}
                <div class="border-l-4 border-blue-600 pl-6">

                    <h3 class="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">
                        Location
                    </h3>

                    <p class="text-gray-600 leading-relaxed mb-6">
                        Lot 3 Block 17 Phase 4 <br>
                        Cavite Economic Zone <br>
                        Rosario, Cavite <br>
                        Philippines 4106
                    </p>

                   <iframe
src="https://maps.google.com/maps?q=Cavite%20Economic%20Zone%20Rosario%20Cavite&t=&z=15&ie=UTF8&iwloc=&output=embed"
width="100%"
height="200"
class="w-full"
loading="lazy">
</iframe>

                </div>

            </div>


            {{-- RIGHT SIDE FORM --}}
            <div id="contact-form" class="bg-gray-50 border border-gray-200 p-10 rounded-2xl shadow-sm">

                <h3 class="text-2xl font-bold text-gray-900 mb-8">
                    Submit an Inquiry
                </h3>

                <form action="{{ route('contacts.send') }}" method="POST" class="space-y-6">
                    @csrf

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                        </label>

                        <input
                        type="text"
                        name="full_name"
                        required
                        class="w-full px-4 py-3 rounded-lg border border-gray-300">
                    </div>


                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>

                        <input
                        type="email"
                        name="email"
                        required
                        class="w-full px-4 py-3 rounded-lg border border-gray-300">
                    </div>


                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Subject
                        </label>

                        <input
                        id="subject"
                        type="text"
                        name="subject"
                        required
                        class="w-full px-4 py-3 rounded-lg border border-gray-300">
                    </div>


                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Message
                        </label>

                        <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        class="w-full px-4 py-3 rounded-lg border border-gray-300"></textarea>
                    </div>


                    <button
                    type="submit"
                    class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                    Send Message
                    </button>

                </form>

            </div>

        </div>

    </div>

</section>


<script>

function handleQuotationClick(){

const subject = document.getElementById("subject");
const message = document.getElementById("message");

subject.value = "Request for Quotation";

message.value =
`Good day,

We would like to request a quotation for the following:

Product/Service:
Estimated Quantity:
Target Delivery Date:

Please advise on pricing, lead time, and terms.

Thank you.`;

document.getElementById("contact-form").scrollIntoView({
behavior:'smooth'
});

}

</script>