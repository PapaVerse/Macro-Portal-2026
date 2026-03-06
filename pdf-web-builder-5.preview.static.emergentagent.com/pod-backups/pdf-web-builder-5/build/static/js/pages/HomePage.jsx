import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Factory, Cable, Zap, ShieldCheck, Globe, Users, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Factory,
      title: '20+ Years Experience',
      description: 'Decades of expertise in wire harness manufacturing',
    },
    {
      icon: Cable,
      title: 'Precision Engineering',
      description: 'High-quality components for branded electronics worldwide',
    },
    {
      icon: ShieldCheck,
      title: 'Certified Quality',
      description: 'CSR & Sustainability compliance standards',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Products sold all over the world',
    },
  ];

  const products = [
    {
      title: 'Automotive Wire Harnesses',
      image: 'https://images.pexels.com/photos/29109612/pexels-photo-29109612.jpeg',
      description: 'Reliable wiring solutions for automotive applications',
    },
    {
      title: 'Industrial Wire Systems',
      image: 'https://images.pexels.com/photos/31321047/pexels-photo-31321047.jpeg',
      description: 'Heavy-duty wire harnesses for industrial machinery',
    },
    {
      title: 'Consumer Electronics',
      image: 'https://images.pexels.com/photos/18510415/pexels-photo-18510415.jpeg',
      description: 'Precision components for electronic devices',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/33559401/pexels-photo-33559401.jpeg"
            alt="Manufacturing facility"
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
            <p className="text-sm font-medium uppercase tracking-widest text-slate-300 mb-6">Precision Wire Harness Solutions</p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight uppercase mb-6">
              MAKING OUR WIRE<br />HARNESSES YOUR OWN
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              With 20 years in the industry, we deliver trusted partner solutions for branded electronic products worldwide.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/products"
                data-testid="hero-products-btn"
                className="bg-slate-900 text-white hover:bg-electric-blue rounded-sm px-8 py-4 uppercase tracking-widest font-bold transition-all duration-300 industrial-shadow"
              >
                Our Products
              </Link>
              <Link
                to="/contact"
                data-testid="hero-contact-btn"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-industrial-blue rounded-sm px-8 py-4 uppercase tracking-widest font-bold transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-4">Why Choose Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight uppercase text-industrial-blue">
              THE BEST WIRING COMPANY<br />IN THE COUNTRY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-slate-200 p-8 hover:border-electric-blue transition-colors duration-300 group"
                data-testid={`feature-card-${index}`}
              >
                <feature.icon className="w-12 h-12 text-electric-blue mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-xl font-semibold uppercase mb-3 text-industrial-blue">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-4">Our Offerings</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight uppercase text-industrial-blue mb-4">
              FEATURED PRODUCTS
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Check out our hot products today - strong electrical wire solutions for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-slate-100 overflow-hidden group card-hover-lift"
                data-testid={`product-card-${index}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold uppercase mb-3 text-industrial-blue">
                    {product.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <Link
                    to="/products"
                    className="text-electric-blue font-medium uppercase tracking-wider text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
                    data-testid={`product-learn-more-${index}`}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              data-testid="view-all-products-btn"
              className="bg-slate-900 text-white hover:bg-electric-blue rounded-sm px-8 py-4 uppercase tracking-widest font-bold transition-all duration-300 industrial-shadow inline-block"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-industrial-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/31047142/pexels-photo-31047142.jpeg"
            alt="Factory"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight uppercase mb-6">
            READY TO TRANSFORM YOUR BUSINESS?
          </h2>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed">
            Let's discuss how our precision wire harness solutions can elevate your products
          </p>
          <Link
            to="/contact"
            data-testid="cta-contact-btn"
            className="bg-white text-industrial-blue hover:bg-safety-orange hover:text-white rounded-sm px-8 py-4 uppercase tracking-widest font-bold transition-all duration-300 inline-block industrial-shadow"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;