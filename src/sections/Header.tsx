import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Facebook, Menu, X, ChevronDown } from 'lucide-react';
import {WaveBackground} from '../components/WaveBackground';
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about-us' },
    { 
      name: 'OUR SERVICES', 
      path: '/services',
      dropdown: [
  'Property Maintenance',
  'Exterior Cleaning',
  'Landscaping',
  'Handyman Services',
  'Garden Maintenance',
  'Pressure Washing',
  'Commercial & Domestic',
]

    },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full relative">
      {/* Wave Background - positioned behind content */}
      <WaveBackground />

      {/* Top bar with contact info - relative to sit above waves */}
      <div className="relative z-10 py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center mb-2 sm:mb-0">
            <div className="relative">
              <img src="/images/logo/logo-full-transparent.png" alt="White Oaks Logo" className="h-24 w-auto" />
            </div>
          </Link>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <a 
              href="tel:07424455268" 
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bgGreen1 flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span className="hidden sm:inline">07424 455268</span>
            </a>
            
            <a 
              href="mailto:whiteoak@email.com" 
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bgGreen1 flex items-center justify-center">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <span className="hidden md:inline">whiteoak@email.com</span>
            </a>
            
            <a 
              href="https://www.facebook.com/whiteoaks-Window-Cleaning-100759624865223/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bgGreen1 flex items-center justify-center hover:bg-purple-700 transition-colors"
            >
              <Facebook className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation bar - relative to sit above waves */}
      <nav className="relative z-10 bg-white/90 backdrop-blur-sm border-t border-gray-100">
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
                        ? 'text-blue-700 border-b-2 border-blue-700' 
                        : 'text-gray-700 hover:text-blue-700'
                    }`}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {/* Services Dropdown */}
                  {item.dropdown && servicesDropdownOpen && (
                    <div className="absolute top-full left-0 w-72 bg-white/95 backdrop-blur-sm shadow-lg rounded-b-lg border border-gray-100 z-50 py-2">
                      {item.dropdown.map((service, index) => (
                        <Link
                          key={index}
                          to="/services"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-blue-700 transition-colors"
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
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-purple-50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 relative z-50">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`block py-3 px-4 text-sm font-medium rounded-md transition-colors ${
                      isActive(item.path) 
                        ? 'text-blue-700 bg-purple-50' 
                        : 'text-gray-700 hover:text-blue-700 hover:bg-purple-50'
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
                          className="block py-2 px-4 text-sm text-gray-600 hover:text-blue-700 transition-colors"
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