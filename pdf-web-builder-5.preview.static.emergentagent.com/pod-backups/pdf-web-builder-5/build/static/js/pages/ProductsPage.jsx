import { motion } from 'framer-motion';
import { Cable, Cpu, Car, Home, Zap } from 'lucide-react';

const ProductsPage = () => {
  const productCategories = [
    {
      icon: Car,
      title: 'Automotive Wire Harnesses',
      image: 'https://images.pexels.com/photos/29109612/pexels-photo-29109612.jpeg',
      description: 'High-performance wire harnesses designed for automotive applications. Built to withstand harsh conditions and deliver reliable performance.',
      features: ['OEM Quality Standards', 'High Temperature Resistance', 'Custom Configurations', 'ISO Certified'],
    },
    {
      icon: Cpu,
      title: 'Consumer Electronics',
      image: 'https://images.pexels.com/photos/18510415/pexels-photo-18510415.jpeg',
      description: 'Precision wire harness components for branded electronic products. Designed for optimal signal integrity and durability.',
      features: ['Miniature Design', 'EMI Shielding', 'RoHS Compliant', 'High Density Connections'],
    },
    {
      icon: Zap,
      title: 'Industrial Solutions',
      image: 'https://images.pexels.com/photos/31321047/pexels-photo-31321047.jpeg',
      description: 'Heavy-duty wire harnesses for industrial machinery and equipment. Built for maximum reliability in demanding environments.',
      features: ['Heavy Current Capacity', 'Vibration Resistant', 'Chemical Resistant', 'Extended Service Life'],
    },
    {
      icon: Home,
      title: 'Home Appliances',
      image: 'https://images.pexels.com/photos/6524413/pexels-photo-6524413.jpeg',
      description: 'Safe and reliable wiring solutions for home appliances. Engineered for efficiency and long-lasting performance.',
      features: ['Safety Certified', 'Energy Efficient', 'Easy Installation', 'Maintenance Free'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/31047142/pexels-photo-31047142.jpeg"
            alt="Products"
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
            <p className="text-sm font-medium uppercase tracking-widest text-slate-300 mb-4">Our Products</p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight uppercase">
              USING ROBUST PRODUCTS
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase text-industrial-blue mb-4">
              STRONG ELECTRICAL WIRE FOR YOUR NEEDS
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore our comprehensive range of wire harness solutions designed for various industries and applications
            </p>
          </div>

          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                data-testid={`product-category-${index}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-[400px] overflow-hidden group">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-6 left-6 bg-electric-blue p-4">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold uppercase text-industrial-blue mb-4">
                    {category.title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <div className="space-y-3">
                    <p className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-3">Key Features:</p>
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-electric-blue"></div>
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <Cable className="w-16 h-16 text-electric-blue mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase text-industrial-blue mb-4">
            NEED A CUSTOM SOLUTION?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            We specialize in creating custom wire harness solutions tailored to your specific requirements
          </p>
          <a
            href="/contact"
            data-testid="custom-solution-btn"
            className="bg-slate-900 text-white hover:bg-electric-blue rounded-sm px-8 py-4 uppercase tracking-widest font-bold transition-all duration-300 industrial-shadow inline-block"
          >
            Request A Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;