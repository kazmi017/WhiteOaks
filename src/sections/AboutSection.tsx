import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Title and Content */}
          <div>
            {/* Section Title with Bubble */}
            <div className="relative inline-block mb-8">
              <svg viewBox="0 0 280 80" className="h-20 w-auto">
                {/* Purple blob background */}
                <path 
                  d="M20 10 Q60 0 100 15 Q140 30 180 15 Q220 0 260 20 Q280 40 260 60 Q220 80 180 65 Q140 50 100 65 Q60 80 20 60 Q0 40 20 10" 
                  fill="#7c3aed"
                />
                {/* Decorative circles */}
                <circle cx="250" cy="20" r="8" fill="#a78bfa" opacity="0.6"/>
                <circle cx="265" cy="35" r="5" fill="#a78bfa" opacity="0.4"/>
                <circle cx="240" cy="40" r="4" fill="#a78bfa" opacity="0.5"/>
                <circle cx="255" cy="50" r="3" fill="#a78bfa" opacity="0.3"/>
                {/* Title Text */}
                <text x="50" y="50" fontSize="28" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">ABOUT US</text>
              </svg>
            </div>

            {/* Content */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We are a well established cleaning company based in West Yorkshire.
              </p>
              <p>
                With over 25 years experience within the cleaning industry.
              </p>
              <p>
                We provide a total exterior cleaning service including roof cleaning, gutter clearing, facia & soffit cleaning, upvc frame cleaning, conservatory roof cleaning, pressure washing & rubbish removal.
              </p>
              <p>
                We also provide professional window cleaning within Yorkshire using the eco friendly hot Water Fed Pole System which leave your windows crystal clear every time.
              </p>
              <p>
                Please call for a free no obligation quotation.
              </p>
            </div>

            {/* Read More Button */}
            <Link
              to="/about-us"
              className="inline-block mt-8 px-8 py-2 border-2 border-purple-600 text-purple-700 font-medium rounded-md hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              READ MORE
            </Link>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/about-image.jpg" 
                alt="White Oaks Exterior Cleaning Services - Roof and gutter cleaning"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
