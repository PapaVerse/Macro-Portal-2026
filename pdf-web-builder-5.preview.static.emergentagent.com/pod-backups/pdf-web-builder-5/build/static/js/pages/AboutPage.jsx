import { motion } from 'framer-motion';
import { Award, Users, Globe, TrendingUp, ShieldCheck, Leaf } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: '20+', label: 'Years in Industry' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '50+', label: 'Countries Served' },
    { number: '100%', label: 'Quality Commitment' },
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Committed to delivering the highest quality wire harness solutions that meet international standards.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building long-term partnerships through exceptional service and reliable product delivery.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'Investing in technology and processes to stay ahead in wire harness manufacturing.',
    },
    {
      icon: ShieldCheck,
      title: 'Reliability',
      description: 'Proven track record of on-time delivery and consistent product performance.',
    },
  ];

  const certifications = [
    { name: 'ISO 9001', description: 'Quality Management' },
    { name: 'RoHS', description: 'Environmental Compliance' },
    { name: 'CSR', description: 'Corporate Social Responsibility' },
    { name: 'Sustainability', description: 'Environmental Standards' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/31047142/pexels-photo-31047142.jpeg"
            alt="About Us"
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
            <p className="text-sm font-medium uppercase tracking-widest text-slate-300 mb-4">About Us</p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight uppercase">
              EXCELLING IN THE FIELD
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-industrial-blue text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
                data-testid={`stat-${index}`}
              >
                <div className="font-heading text-5xl md:text-6xl font-bold text-electric-blue mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-300 uppercase tracking-wider text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              data-testid="mission-section"
            >
              <div className="bg-slate-50 p-8 h-full">
                <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-industrial-blue mb-6">
                  OUR MISSION
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  The Company is a proud contributor of wire harness components and assemblies to branded electronic products sold all over the world, and will seek allied sectors where it can extend further service.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  With 20 years of experience in the industry, we are committed to being the trusted partner behind numerous devices and systems that people use every day.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              data-testid="vision-section"
            >
              <div className="bg-electric-blue text-white p-8 h-full">
                <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-6">
                  OUR VISION
                </h2>
                <p className="text-slate-100 text-lg leading-relaxed mb-6">
                  To be the global leader in wire harness manufacturing, recognized for our commitment to quality, innovation, and sustainability.
                </p>
                <p className="text-slate-200 leading-relaxed">
                  We envision expanding our reach into allied sectors while maintaining our core values of precision, reliability, and customer satisfaction.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase text-industrial-blue">
              OUR CORE VALUES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 text-center"
                data-testid={`value-card-${index}`}
              >
                <value.icon className="w-12 h-12 text-electric-blue mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold uppercase text-industrial-blue mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Leaf className="w-8 h-8 text-electric-blue" />
              <p className="text-sm font-medium uppercase tracking-widest text-slate-500">CSR & Sustainability</p>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase text-industrial-blue">
              CERTIFICATIONS & COMPLIANCE
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 border-2 border-slate-200 p-6 text-center hover:border-electric-blue transition-colors"
                data-testid={`cert-${index}`}
              >
                <ShieldCheck className="w-12 h-12 text-electric-blue mx-auto mb-3" />
                <h3 className="font-heading text-xl font-bold text-industrial-blue mb-2">
                  {cert.name}
                </h3>
                <p className="text-slate-600 text-sm">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-industrial-blue text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <Globe className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4">
            JOIN OUR GROWING NETWORK
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Become a part of our global partnership network
          </p>
          <a
            href="/contact"
            data-testid="about-contact-btn"
            className="bg-white text-industrial-blue hover:bg-safety-orange hover:text-white rounded-sm px-8 py-4 uppercase tracking-widest font-bold transition-all duration-300 inline-block industrial-shadow"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;