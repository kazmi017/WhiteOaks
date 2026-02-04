import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'GUTTER CLEANING & REPAIRS',
      description: 'We take care in removing debris and buildup to prevent water damage and improve drainage. Inspecting, diagnosing, and fixing gutter issues to ensure proper water drainage and prevent damage to homes and buildings.',
      link: '/services',
    },
    {
      title: 'FASCIA & SOFFIT CLEANING',
      description: 'We have the technology to clean those hard to reach areas including fascias and soffits. We also clean alternative plastics.',
      link: '/services',
    },
    {
      title: 'PRESSURE WASHING',
      description: 'Pressure washing is an additional service alongside window cleaning. If you are looking to brighten up those stubborn paved or concrete areas then we can help.',
      link: '/services',
    },
    {
      title: 'ROOF CLEANING',
      description: "Restoring and maintaining the cleanliness of roofs, by removing moss, algae, dirt, and other buildup that can damage shingles and reduce a roof's lifespan.",
      link: '/services',
    },
    {
      title: 'SOFT WASHING',
      description: 'A gentler approach using specialised solutions for delicate surfaces like roofs, siding, and fences.',
      link: '/services',
    },
    {
      title: 'CONSERVATORY CLEANING',
      description: 'We cater for all sized conservatories and outbuildings. We clean all the external windows and plastics.',
      link: '/services',
    },
    {
      title: 'SOLAR PANEL CLEANING',
      description: 'Ensuring solar panels are free from dirt, dust, and debris that can reduce their energy output. Using the right techniques and equipment, carefully removing buildup without damaging delicate surfaces.',
      link: '/services',
    },
    {
      title: 'COMMERCIAL WINDOW CLEANING',
      description: 'Professional window cleaning services for commercial properties, offices, shops, and multi-storey buildings.',
      link: '/services',
    },
    {
      title: 'RESIDENTIAL WINDOW CLEANING',
      description: 'Domestic window cleaning using the eco friendly hot Water Fed Pole System which leaves your windows crystal clear every time.',
      link: '/services',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-purple-700 mb-4">SERVICES</h1>
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
                <h3 className="text-lg font-bold text-purple-700 mb-4 whitespace-pre-line">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-block px-6 py-2 border-2 border-purple-600 text-purple-700 font-medium rounded-md hover:bg-purple-600 hover:text-white transition-all duration-300 text-center"
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
