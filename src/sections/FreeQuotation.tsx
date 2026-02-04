import { Link } from 'react-router-dom';

const FreeQuotation = () => {
  return (
    <section className="py-16 bg-purple-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Title */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block">
              <svg viewBox="0 0 320 100" className="h-24 w-auto">
                {/* Purple blob background */}
                <path 
                  d="M20 15 Q70 5 120 20 Q170 35 220 20 Q270 5 300 25 Q320 50 300 75 Q270 95 220 80 Q170 65 120 80 Q70 95 20 75 Q0 50 20 15" 
                  fill="#7c3aed"
                />
                {/* Decorative circles */}
                <circle cx="280" cy="25" r="10" fill="#a78bfa" opacity="0.6"/>
                <circle cx="300" cy="45" r="6" fill="#a78bfa" opacity="0.4"/>
                <circle cx="270" cy="50" r="5" fill="#a78bfa" opacity="0.5"/>
                <circle cx="290" cy="60" r="4" fill="#a78bfa" opacity="0.3"/>
                {/* Title Text */}
                <text x="45" y="48" fontSize="28" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">FREE</text>
                <text x="45" y="72" fontSize="28" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">QUOTATION</text>
              </svg>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left">
            <p className="text-gray-700 leading-relaxed mb-8">
              If you are interested in any of the services we offer, please call, or email us for a FREE no-obligation quote. Alternatively, fill out our contact form located on the contact page.
            </p>

            {/* Contact Us Button */}
            <Link
              to="/contact"
              className="inline-block px-8 py-2 border-2 border-purple-600 text-purple-700 font-medium rounded-md hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeQuotation;
