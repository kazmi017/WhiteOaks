import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <svg viewBox="0 0 280 80" className="h-14 w-auto">
              {/* Purple blob background */}
              <path 
                d="M20 10 Q60 0 100 15 Q140 30 180 15 Q220 0 260 20 Q280 40 260 60 Q220 80 180 65 Q140 50 100 65 Q60 80 20 60 Q0 40 20 10" 
                fill="#7c3aed"
              />
              {/* White circles decoration */}
              <circle cx="240" cy="25" r="8" fill="#a78bfa" opacity="0.6"/>
              <circle cx="255" cy="40" r="5" fill="#a78bfa" opacity="0.4"/>
              <circle cx="230" cy="45" r="4" fill="#a78bfa" opacity="0.5"/>
              {/* LSV Text */}
              <text x="40" y="50" fontSize="36" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">LSV</text>
              {/* Exterior Cleaning Services Text */}
              <text x="100" y="38" fontSize="11" fontWeight="600" fill="white" fontFamily="Arial, sans-serif">EXTERIOR CLEANING</text>
              <text x="100" y="52" fontSize="11" fontWeight="600" fill="white" fontFamily="Arial, sans-serif">SERVICES</text>
              {/* Sparkle decorations */}
              <text x="30" y="25" fontSize="14" fill="white" opacity="0.8">✨</text>
              <text x="85" y="28" fontSize="12" fill="white" opacity="0.8">✨</text>
            </svg>
          </Link>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a 
              href="tel:07946764629" 
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span>07946 764629</span>
            </a>
            
            <a 
              href="mailto:lsvexteriorservices@gmail.com" 
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <span>lsvexteriorservices@gmail.com</span>
            </a>
            
            <a 
              href="https://www.facebook.com/LSV-Window-Cleaning-100759624865223/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center hover:bg-purple-700 transition-colors"
            >
              <Facebook className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500">
            ©2025 by LSV Exterior Cleaning Services. Proudly created by Gemma Town Designs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
