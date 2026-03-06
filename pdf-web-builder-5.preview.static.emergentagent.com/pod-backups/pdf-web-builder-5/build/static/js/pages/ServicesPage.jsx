import { motion } from 'framer-motion';
import { Cog, Factory, ShieldCheck, Settings, Zap, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Factory,
      title: 'Custom Manufacturing',
      description: 'End-to-end wire harness manufacturing tailored to your specifications. From prototyping to mass production.',
      benefits: [
        'Rapid Prototyping',
        'Scalable Production',
        'Quality Assurance',
        'On-time Delivery',
      ],
    },
    {
      icon: Settings,
      title: 'Engineering Support',
      description: 'Expert engineering consultation to optimize your wire harness design for performance and manufacturability.',
      benefits: [
        'Design Optimization',
        'Material Selection',
        'Cost Reduction',
        'Technical Documentation',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Quality Testing',
      description: 'Comprehensive testing and validation to ensure your wire harnesses meet the highest quality standards.',
      benefits: [
        'Electrical Testing',
        'Environmental Testing',
        'Compliance Certification',
        'Performance Validation',
      ],
    },
    {
      icon: Zap,
      title: 'Assembly Services',
      description: 'Professional assembly and integration services for complex wire harness systems.',
      benefits: [
        'Sub-assembly Integration',
        'System Testing',
        'Packaging Solutions',
        'Logistics Support',
      ],
    },
  ];

  const process = [
    { step: '01', title: 'Consultation', description: 'Understanding your requirements and specifications' },
    { step: '02', title: 'Design', description: 'Engineering and prototyping your wire harness solution' },
    { step: '03', title: 'Manufacturing', description: 'Precision production with quality control' },
    { step: '04', title: 'Delivery', description: 'On-time delivery and ongoing support' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6524413/pexels-photo-6524413.jpeg"
            alt="Services"
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
            <p className="text-sm font-medium uppercase tracking-widest text-slate-300 mb-4">Our Services</p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight uppercase">
              COMPREHENSIVE SOLUTIONS
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase text-industrial-blue mb-4">
              TRANSFORM YOUR BUSINESS WITH OUR SERVICES
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Complete wire harness solutions from concept to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 border border-slate-200 p-8 hover:border-electric-blue transition-colors duration-300 group"
                data-testid={`service-card-${index}`}
              >
                <service.icon className="w-12 h-12 text-electric-blue mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-2xl font-bold uppercase text-industrial-blue mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-electric-blue flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-4">Our Process</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase text-industrial-blue">
              HOW WE WORK
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
                data-testid={`process-step-${index}`}
              >
                <div className="font-heading text-6xl font-bold text-electric-blue/20 mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl font-bold uppercase text-industrial-blue mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-industrial-blue text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <Cog className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4">
            LET'S START YOUR PROJECT
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Contact us today to discuss your wire harness requirements
          </p>
          <a
            href="/contact"
            data-testid="services-contact-btn"
            className="bg-white text-industrial-blue hover:bg-safety-orange hover:text-white rounded-sm px-8 py-4 uppercase tracking-widest font-bold transition-all duration-300 inline-block industrial-shadow"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;