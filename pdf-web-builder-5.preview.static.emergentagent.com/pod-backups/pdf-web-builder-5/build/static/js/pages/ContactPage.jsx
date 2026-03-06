import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['(+63 46) 437-7204', '(+63 46) 477-2499'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['sales@macrowiring.co'],
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Lot 3 Block 17 Phase 4', 'Cavite Economic Zone', 'Rosario, Cavite, Philippines 4106'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6524413/pexels-photo-6524413.jpeg"
            alt="Contact"
            className="w-full h-full object-cover hero-image"
          />
          <div className="absolute inset-0 gradient-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-slate-300 mb-4">Contact Us</p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight uppercase">
              GET IN TOUCH
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-industrial-blue mb-6">
                SEND US A MESSAGE
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium uppercase tracking-wider text-slate-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    data-testid="contact-name-input"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium uppercase tracking-wider text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    data-testid="contact-email-input"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium uppercase tracking-wider text-slate-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      data-testid="contact-company-input"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium uppercase tracking-wider text-slate-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      data-testid="contact-phone-input"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:border-electric-blue transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium uppercase tracking-wider text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    data-testid="contact-message-input"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:border-electric-blue transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  data-testid="contact-submit-btn"
                  disabled={isSubmitting}
                  className="bg-slate-900 text-white hover:bg-electric-blue rounded-sm px-8 py-4 uppercase tracking-widest font-bold transition-all duration-300 industrial-shadow inline-flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-industrial-blue mb-6">
                CONTACT INFORMATION
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Have questions? We're here to help. Reach out through any of these channels.
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4" data-testid={`contact-info-${index}`}>
                    <div className="w-12 h-12 bg-electric-blue flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold uppercase text-industrial-blue mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map or Additional Info */}
              <div className="mt-12 bg-slate-50 p-8">
                <h3 className="font-heading text-xl font-bold uppercase text-industrial-blue mb-4">
                  BUSINESS HOURS
                </h3>
                <div className="space-y-2 text-slate-600">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 5:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">9:00 AM - 1:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-industrial-blue text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4">
            READY TO START A PROJECT?
          </h2>
          <p className="text-slate-300 text-lg">
            Let's discuss how we can help bring your wire harness requirements to life
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;