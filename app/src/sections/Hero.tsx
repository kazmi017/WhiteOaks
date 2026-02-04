import { Link } from 'react-router-dom';

const Hero = () => {
  const services = [
    'Gutter Cleaning',
    'Gutter Repairs',
    'Fascia & Soffit Cleaning',
    'Pressure Washing',
    'Roof Cleaning',
    'Soft Washing',
    'Conservatory Roof Cleaning',
    'Solar Panel Cleaning',
    'Commercial Window Cleaning',
    'Domestic Window Cleaning',
  ];

  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-16 text-center">
        {/* Logo in hero */}
        <div className="flex justify-center mb-8">
          <svg viewBox="0 0 320 100" className="h-24 w-auto">
            {/* Purple blob background */}
            <path 
              d="M30 15 Q70 5 110 20 Q150 35 190 20 Q230 5 270 25 Q290 45 270 65 Q230 85 190 70 Q150 55 110 70 Q70 85 30 65 Q10 45 30 15" 
              fill="#7c3aed"
            />
            {/* White circles decoration */}
            <circle cx="260" cy="30" r="10" fill="#a78bfa" opacity="0.6"/>
            <circle cx="280" cy="50" r="7" fill="#a78bfa" opacity="0.4"/>
            <circle cx="250" cy="55" r="5" fill="#a78bfa" opacity="0.5"/>
            <circle cx="290" cy="35" r="4" fill="#a78bfa" opacity="0.3"/>
            {/* LSV Text */}
            <text x="50" y="62" fontSize="42" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">LSV</text>
            {/* Exterior Cleaning Services Text */}
            <text x="120" y="48" fontSize="13" fontWeight="600" fill="white" fontFamily="Arial, sans-serif">EXTERIOR CLEANING</text>
            <text x="120" y="64" fontSize="13" fontWeight="600" fill="white" fontFamily="Arial, sans-serif">SERVICES</text>
            {/* Sparkle decorations */}
            <text x="40" y="32" fontSize="16" fill="white" opacity="0.8">✨</text>
            <text x="100" y="35" fontSize="14" fill="white" opacity="0.8">✨</text>
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 tracking-wide">
          EXTERIOR CLEANING SERVICES
        </h1>

        {/* Services List */}
        <ul className="space-y-2 mb-10">
          {services.map((service, index) => (
            <li 
              key={index} 
              className="text-white text-lg sm:text-xl font-medium tracking-wide"
            >
              {service}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="inline-block px-10 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          CALL NOW
        </Link>
      </div>
    </section>
  );
};

export default Hero;
