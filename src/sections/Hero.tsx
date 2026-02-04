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
          White Oaks
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
