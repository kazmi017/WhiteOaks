import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
  {
    title: 'PROPERTY MAINTENANCE',
    description: 'Comprehensive property upkeep, repairs, and preventative maintenance for homes and businesses.',
    link: '/services',
  },
  {
    title: 'EXTERIOR CLEANING',
    description: 'Professional exterior cleaning to restore appearance, protect surfaces, and extend lifespan.',
    link: '/services',
  },
  {
    title: 'LANDSCAPING',
    description: 'Complete landscaping solutions to enhance, transform, and maintain outdoor spaces.',
    link: '/services',
  },
  {
    title: 'HANDYMAN SERVICES',
    description: 'Reliable repairs, installations, and improvements carried out efficiently and professionally.',
    link: '/services',
  },
  {
    title: 'GARDEN MAINTENANCE',
    description: 'Regular garden care to keep lawns, plants, and outdoor areas neat and healthy.',
    link: '/services',
  },
  {
    title: 'PRESSURE WASHING',
    description: 'Deep cleaning of patios, driveways, paths, and hard surfaces for a fresh finish.',
    link: '/services',
  },
  {
    title: 'COMMERCIAL & DOMESTIC',
    description: 'Tailored services for homeowners, landlords, offices, and commercial premises.',
    link: '/services',
  },
];


  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">SERVICES</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            White Oaks Exterior Cleaning Services have several services available to help maintain the exterior of your property whether it be residential or commercial including bungalows, apartments, houses and conservatories to multi-storey office buildings and shops.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <h3 className="text-lg font-bold text-blue-700 mb-4 whitespace-pre-line">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-700 font-medium rounded-md hover:bgGreen1 hover:text-white transition-all duration-300 text-center"
                >
                  READ MORE
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
