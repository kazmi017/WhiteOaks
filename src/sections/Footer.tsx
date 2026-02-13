import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-100/50 my-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
              <img src="/images/logo/logo-full-transparent.png"   alt="White Oaks Logo" className="h-16 w-auto" />
          </Link>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row  flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a 
              href="tel:07946764629" 
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bgGreen1 flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span>07946 764629</span>
            </a>
            
            <a 
              href="mailto:whiteoaks@gmail.com" 
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bgGreen1 flex items-center justify-center">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <span>whiteoaks@gmail.com</span>
            </a>
            
            <a 
              href="https://www.facebook.com/White Oaks-Window-Cleaning-100759624865223/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bgGreen1 flex items-center justify-center hover:bg-purple-700 transition-colors"
            >
              <Facebook className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500">
            ©2025 by White Oaks Exterior Cleaning Services. Proudly created by Gemma Town Designs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
