import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      name: 'GUTTER CLEANING\n& REPAIRS',
      icon: (
        <svg viewBox="0 0 80 60" className="w-16 h-12">
          {/* Gutter icon */}
          <path d="M10 20 L70 20 L70 35 L10 35 Z" fill="none" stroke="#7c3aed" strokeWidth="3"/>
          <path d="M15 35 L15 50" fill="none" stroke="#7c3aed" strokeWidth="3"/>
          <path d="M65 35 L65 50" fill="none" stroke="#7c3aed" strokeWidth="3"/>
          <path d="M5 20 L75 20" fill="none" stroke="#7c3aed" strokeWidth="2"/>
          {/* Downpipe */}
          <rect x="35" y="35" width="10" height="20" fill="none" stroke="#7c3aed" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      name: 'FASCIA & SOFFIT\nCLEANING',
      icon: (
        <svg viewBox="0 0 80 60" className="w-16 h-12">
          {/* Fascia/Soffit icon */}
          <path d="M10 15 L70 15 L70 30 L10 30 Z" fill="none" stroke="#7c3aed" strokeWidth="3"/>
          <path d="M10 30 L70 30" fill="none" stroke="#7c3aed" strokeWidth="2"/>
          <path d="M15 30 L15 45" fill="none" stroke="#7c3aed" strokeWidth="2"/>
          <path d="M65 30 L65 45" fill="none" stroke="#7c3aed" strokeWidth="2"/>
          {/* Decorative lines */}
          <line x1="20" y1="20" x2="60" y2="20" stroke="#a78bfa" strokeWidth="1"/>
          <line x1="20" y1="25" x2="60" y2="25" stroke="#a78bfa" strokeWidth="1"/>
        </svg>
      ),
    },
    {
      name: 'PRESSURE\nWASHING',
      icon: (
        <svg viewBox="0 0 80 60" className="w-16 h-12">
          {/* Pressure washer icon */}
          <circle cx="25" cy="30" r="12" fill="none" stroke="#7c3aed" strokeWidth="3"/>
          <path d="M35 30 L55 25" fill="none" stroke="#7c3aed" strokeWidth="3"/>
          <path d="M55 25 L65 20" fill="none" stroke="#7c3aed" strokeWidth="3"/>
          {/* Spray lines */}
          <line x1="65" y1="20" x2="75" y2="15" stroke="#a78bfa" strokeWidth="2"/>
          <line x1="68" y1="22" x2="78" y2="20" stroke="#a78bfa" strokeWidth="2"/>
          <line x1="65" y1="24" x2="75" y2="28" stroke="#a78bfa" strokeWidth="2"/>
          {/* Handle */}
          <path d="M30 38 L35 50" fill="none" stroke="#7c3aed" strokeWidth="3"/>
        </svg>
      ),
    },
    {
      name: 'ROOF\nCLEANING',
      icon: (
        <svg viewBox="0 0 80 60" className="w-16 h-12">
          {/* Roof icon */}
          <path d="M10 40 L40 15 L70 40" fill="none" stroke="#7c3aed" strokeWidth="3"/>
          <path d="M15 38 L15 50 L65 50 L65 38" fill="none" stroke="#7c3aed" strokeWidth="2"/>
          {/* Roof tiles */}
          <line x1="25" y1="28" x2="25" y2="35" stroke="#a78bfa" strokeWidth="1"/>
          <line x1="35" y1="22" x2="35" y2="32" stroke="#a78bfa" strokeWidth="1"/>
          <line x1="45" y1="22" x2="45" y2="32" stroke="#a78bfa" strokeWidth="1"/>
          <line x1="55" y1="28" x2="55" y2="35" stroke="#a78bfa" strokeWidth="1"/>
        </svg>
      ),
    },
    {
      name: 'SOFT\nWASHING',
      icon: (
        <svg viewBox="0 0 80 60" className="w-16 h-12">
          {/* Soft washing - spray wand */}
          <path d="M15 45 L35 25" fill="none" stroke="#7c3aed" strokeWidth="3"/>
          <path d="M35 25 L50 15" fill="none" stroke="#7c3aed" strokeWidth="3"/>
          {/* Spray pattern */}
          <line x1="50" y1="15" x2="65" y2="10" stroke="#a78bfa" strokeWidth="2"/>
          <line x1="52" y1="17" x2="68" y2="16" stroke="#a78bfa" strokeWidth="2"/>
          <line x1="50" y1="19" x2="65" y2="24" stroke="#a78bfa" strokeWidth="2"/>
          <line x1="48" y1="18" x2="62" y2="20" stroke="#a78bfa" strokeWidth="2"/>
          {/* Bubbles */}
          <circle cx="60" cy="12" r="3" fill="none" stroke="#a78bfa" strokeWidth="1"/>
          <circle cx="68" cy="18" r="2" fill="none" stroke="#a78bfa" strokeWidth="1"/>
          <circle cx="62" cy="22" r="2.5" fill="none" stroke="#a78bfa" strokeWidth="1"/>
        </svg>
      ),
    },
    {
      name: 'CONSERVATORY\nROOF CLEANING',
      icon: (
        <svg viewBox="0 0 80 60" className="w-16 h-12">
          {/* Conservatory icon */}
          <path d="M15 45 L15 30 L25 20 L55 20 L65 30 L65 45 Z" fill="none" stroke="#7c3aed" strokeWidth="2"/>
          <path d="M25 20 L25 45" fill="none" stroke="#7c3aed" strokeWidth="2"/>
          <path d="M40 20 L40 45" fill="none" stroke="#7c3aed" strokeWidth="2"/>
          <path d="M55 20 L55 45" fill="none" stroke="#7c3aed" strokeWidth="2"/>
          {/* Roof panels */}
          <line x1="20" y1="25" x2="30" y2="25" stroke="#a78bfa" strokeWidth="1"/>
          <line x1="35" y1="25" x2="45" y2="25" stroke="#a78bfa" strokeWidth="1"/>
          <line x1="50" y1="25" x2="60" y2="25" stroke="#a78bfa" strokeWidth="1"/>
          {/* Door */}
          <rect x="32" y="32" width="16" height="13" fill="none" stroke="#7c3aed" strokeWidth="1.5"/>
        </svg>
      ),
    },
    {
      name: 'SOLAR PANEL\nCLEANING',
      icon: (
        <svg viewBox="0 0 80 60" className="w-16 h-12">
          {/* Solar panel icon */}
          <rect x="15" y="25" width="40" height="25" fill="none" stroke="#7c3aed" strokeWidth="2"/>
          {/* Panel grid */}
          <line x1="28" y1="25" x2="28" y2="50" stroke="#7c3aed" strokeWidth="1.5"/>
          <line x1="42" y1="25" x2="42" y2="50" stroke="#7c3aed" strokeWidth="1.5"/>
          <line x1="15" y1="33" x2="55" y2="33" stroke="#7c3aed" strokeWidth="1.5"/>
          <line x1="15" y1="42" x2="55" y2="42" stroke="#7c3aed" strokeWidth="1.5"/>
          {/* Stand */}
          <path d="M35 50 L30 58" fill="none" stroke="#7c3aed" strokeWidth="2"/>
          <path d="M40 50 L45 58" fill="none" stroke="#7c3aed" strokeWidth="2"/>
          {/* Sun */}
          <circle cx="62" cy="18" r="6" fill="none" stroke="#a78bfa" strokeWidth="2"/>
          <line x1="62" y1="8" x2="62" y2="11" stroke="#a78bfa" strokeWidth="1.5"/>
          <line x1="62" y1="25" x2="62" y2="28" stroke="#a78bfa" strokeWidth="1.5"/>
          <line x1="52" y1="18" x2="55" y2="18" stroke="#a78bfa" strokeWidth="1.5"/>
          <line x1="69" y1="18" x2="72" y2="18" stroke="#a78bfa" strokeWidth="1.5"/>
        </svg>
      ),
    },
    {
      name: 'COMMERCIAL\nWINDOW CLEANING',
      icon: (
        <svg viewBox="0 0 80 60" className="w-16 h-12">
          {/* Commercial building icon */}
          <rect x="15" y="15" width="40" height="45" fill="none" stroke="#7c3aed" strokeWidth="2"/>
          {/* Windows grid */}
          <rect x="20" y="20" width="8" height="8" fill="none" stroke="#7c3aed" strokeWidth="1.5"/>
          <rect x="31" y="20" width="8" height="8" fill="none" stroke="#7c3aed" strokeWidth="1.5"/>
          <rect x="42" y="20" width="8" height="8" fill="none" stroke="#7c3aed" strokeWidth="1.5"/>
          <rect x="20" y="31" width="8" height="8" fill="none" stroke="#7c3aed" strokeWidth="1.5"/>
          <rect x="31" y="31" width="8" height="8" fill="none" stroke="#7c3aed" strokeWidth="1.5"/>
          <rect x="42" y="31" width="8" height="8" fill="none" stroke="#7c3aed" strokeWidth="1.5"/>
          <rect x="20" y="42" width="8" height="8" fill="none" stroke="#7c3aed" strokeWidth="1.5"/>
          <rect x="31" y="42" width="8" height="8" fill="none" stroke="#7c3aed" strokeWidth="1.5"/>
          <rect x="42" y="42" width="8" height="8" fill="none" stroke="#7c3aed" strokeWidth="1.5"/>
          {/* Door */}
          <rect x="28" y="52" width="14" height="8" fill="none" stroke="#7c3aed" strokeWidth="1.5"/>
        </svg>
      ),
    },
    {
      name: 'RESIDENTIAL\nWINDOW CLEANING',
      icon: (
        <svg viewBox="0 0 80 60" className="w-16 h-12">
          {/* House icon */}
          <path d="M15 30 L40 10 L65 30" fill="none" stroke="#7c3aed" strokeWidth="2.5"/>
          <path d="M18 28 L18 55 L62 55 L62 28" fill="none" stroke="#7c3aed" strokeWidth="2"/>
          {/* Windows */}
          <rect x="25" y="35" width="12" height="10" fill="none" stroke="#7c3aed" strokeWidth="1.5"/>
          <line x1="31" y1="35" x2="31" y2="45" stroke="#7c3aed" strokeWidth="1"/>
          <line x1="25" y1="40" x2="37" y2="40" stroke="#7c3aed" strokeWidth="1"/>
          <rect x="43" y="35" width="12" height="10" fill="none" stroke="#7c3aed" strokeWidth="1.5"/>
          <line x1="49" y1="35" x2="49" y2="45" stroke="#7c3aed" strokeWidth="1"/>
          <line x1="43" y1="40" x2="55" y2="40" stroke="#7c3aed" strokeWidth="1"/>
          {/* Door */}
          <rect x="33" y="45" width="14" height="10" fill="none" stroke="#7c3aed" strokeWidth="1.5"/>
          <circle cx="44" cy="50" r="1" fill="#7c3aed"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-purple-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Section Title */}
          <div>
            <div className="relative inline-block">
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
                <text x="50" y="50" fontSize="28" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">SERVICES</text>
              </svg>
            </div>
          </div>

          {/* Description */}
          <div className="flex items-center">
            <p className="text-gray-700 leading-relaxed">
              White Oaks Exterior Cleaning Services have several services available to help maintain the exterior of your property whether it be residential or commercial including bungalows, apartments, houses and conservatories to multi-storey office buildings and shops.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 mb-10">
          {services.map((service, index) => (
            <Link
              key={index}
              to="/services"
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-sm font-semibold text-purple-700 whitespace-pre-line leading-tight">
                {service.name}
              </h3>
            </Link>
          ))}
        </div>

        {/* Read More Button */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-block px-8 py-2 border-2 border-purple-600 text-purple-700 font-medium rounded-md hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
