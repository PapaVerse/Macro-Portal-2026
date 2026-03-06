import { Link, useLocation } from 'react-router-dom';
import { Factory } from 'lucide-react';

export const Layout = ({ children }) => {
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/products', label: 'PRODUCTS' },
    { path: '/services', label: 'SERVICES' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3" data-testid="logo-link">
              <div className="w-10 h-10 bg-industrial-blue flex items-center justify-center">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-industrial-blue tracking-tight">
                MACRO WIRING
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`nav-${link.label.toLowerCase()}`}
                  className={`text-sm font-medium uppercase tracking-widest transition-colors ${
                    location.pathname === link.path
                      ? 'text-electric-blue'
                      : 'text-slate-600 hover:text-electric-blue'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-slate-600" data-testid="mobile-menu-btn">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 mt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-industrial-blue text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-electric-blue flex items-center justify-center">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <span className="font-heading font-bold text-xl tracking-tight">
                  MACRO WIRING
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                With 20+ years in the industry, we are your trusted partner for precision wire harness solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-heading text-lg font-bold mb-4 uppercase tracking-wider">CONTACT</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <p>Tel: (+63 46) 437-7204</p>
                <p>Tel: (+63 46) 477-2499</p>
                <p>Fax: (+63 46) 437-9272</p>
                <p>Email: sales@macrowiring.co</p>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="font-heading text-lg font-bold mb-4 uppercase tracking-wider">LOCATION</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Lot 3 Block 17 Phase 4<br />
                Cavite Economic Zone<br />
                Rosario, Cavite<br />
                Philippines 4106
              </p>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm text-slate-500">
            <p>© 2026 Macro Wiring Technologies Co. Inc. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;