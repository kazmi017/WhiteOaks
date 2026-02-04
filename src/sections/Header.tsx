import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Facebook, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about-us' },
    { 
      name: 'SERVICES', 
      path: '/services',
      dropdown: [
        'Gutter Cleaning & Repair',
        'Fascia & Soffit Cleaning',
        'Pressure Washing',
        'Roof Cleaning',
        'Soft Washing',
        'Conservatory Cleaning',
        'Solar Panel Cleaning',
        'Commercial Window Cleaning',
        'Residential Window Cleaning'
      ]
    },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full">
      {/* Top bar with contact info */}
      <div className="bg-white py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center mb-2 sm:mb-0">
            <div className="relative">
              <svg viewBox="0 0 280 80" className="h-16 w-auto">
                {/* Purple blob background */}
                <path 
                  d="M20 10 Q60 0 100 15 Q140 30 180 15 Q220 0 260 20 Q280 40 260 60 Q220 80 180 65 Q140 50 100 65 Q60 80 20 60 Q0 40 20 10" 
                  fill="#7c3aed"
                />
                {/* White circles decoration */}
                <circle cx="240" cy="25" r="8" fill="#a78bfa" opacity="0.6"/>
                <circle cx="255" cy="40" r="5" fill="#a78bfa" opacity="0.4"/>
                <circle cx="230" cy="45" r="4" fill="#a78bfa" opacity="0.5"/>
                {/* White Oaks Text */}
                <text x="40" y="50" fontSize="36" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">White Oaks</text>
                {/* Exterior Cleaning Services Text */}
                <text x="100" y="38" fontSize="11" fontWeight="600" fill="white" fontFamily="Arial, sans-serif">EXTERIOR CLEANING</text>
                <text x="100" y="52" fontSize="11" fontWeight="600" fill="white" fontFamily="Arial, sans-serif">SERVICES</text>
                {/* Sparkle decorations */}
                <text x="30" y="25" fontSize="14" fill="white" opacity="0.8">✨</text>
                <text x="85" y="28" fontSize="12" fill="white" opacity="0.8">✨</text>
              </svg>
            </div>
          </Link>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <a 
              href="tel:07946764629" 
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span className="hidden sm:inline">07946 764629</span>
            </a>
            
            <a 
              href="mailto:lsvexteriorservices@gmail.com" 
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <span className="hidden md:inline">lsvexteriorservices@gmail.com</span>
            </a>
            
            <a 
              href="https://www.facebook.com/whiteoaks-Window-Cleaning-100759624865223/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center hover:bg-purple-700 transition-colors"
            >
              <Facebook className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => item.dropdown && setServicesDropdownOpen(true)}
                  onMouseLeave={() => item.dropdown && setServicesDropdownOpen(false)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 py-4 text-sm font-medium transition-colors ${
                      isActive(item.path) 
                        ? 'text-purple-700 border-b-2 border-purple-700' 
                        : 'text-gray-700 hover:text-purple-700'
                    }`}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {/* Services Dropdown */}
                  {item.dropdown && servicesDropdownOpen && (
                    <div className="absolute top-full left-0 w-72 bg-white shadow-lg rounded-b-lg border border-gray-100 z-50 py-2">
                      {item.dropdown.map((service, index) => (
                        <Link
                          key={index}
                          to="/services"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          {service}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-purple-700 hover:bg-purple-50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`block py-3 px-4 text-sm font-medium rounded-md transition-colors ${
                      isActive(item.path) 
                        ? 'text-purple-700 bg-purple-50' 
                        : 'text-gray-700 hover:text-purple-700 hover:bg-purple-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((service, index) => (
                        <Link
                          key={index}
                          to="/services"
                          className="block py-2 px-4 text-sm text-gray-600 hover:text-purple-700 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
