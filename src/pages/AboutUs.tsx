import { Phone, Mail } from 'lucide-react';

const AboutUs = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">ABOUT US</h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
  <p>
    White Oaks Property Services is a trusted West Yorkshire based company delivering high-quality property maintenance and exterior cleaning solutions for both residential and commercial clients.
  </p>
  
  <p>
    We provide reliable, professional services designed to enhance, protect, and maintain your property all year round:
  </p>

  <div className="space-y-4 my-8">
    <div className="bg-purple-50 p-4 rounded-lg">
      <h3 className="font-semibold text-blue-700 mb-2">Property Maintenance</h3>
      <p className="text-gray-600">Comprehensive property upkeep, repairs, and preventative maintenance.</p>
    </div>

    <div className="bg-purple-50 p-4 rounded-lg">
      <h3 className="font-semibold text-blue-700 mb-2">Exterior Cleaning</h3>
      <p className="text-gray-600">Professional exterior cleaning to restore appearance and protect surfaces.</p>
    </div>

    <div className="bg-purple-50 p-4 rounded-lg">
      <h3 className="font-semibold text-blue-700 mb-2">Landscaping</h3>
      <p className="text-gray-600">Complete landscaping solutions to transform and maintain outdoor spaces.</p>
    </div>

    <div className="bg-purple-50 p-4 rounded-lg">
      <h3 className="font-semibold text-blue-700 mb-2">Handyman Services</h3>
      <p className="text-gray-600">Efficient, reliable solutions for repairs, installations, and improvements.</p>
    </div>

    <div className="bg-purple-50 p-4 rounded-lg">
      <h3 className="font-semibold text-blue-700 mb-2">Garden Maintenance</h3>
      <p className="text-gray-600">Ongoing garden care to keep your outdoor areas neat and healthy.</p>
    </div>

    <div className="bg-purple-50 p-4 rounded-lg">
      <h3 className="font-semibold text-blue-700 mb-2">Pressure Washing</h3>
      <p className="text-gray-600">Deep cleaning of driveways, patios, paths, and hard surfaces.</p>
    </div>

    <div className="bg-purple-50 p-4 rounded-lg">
      <h3 className="font-semibold text-blue-700 mb-2">Commercial & Domestic</h3>
      <p className="text-gray-600">Flexible services tailored to businesses, landlords, and homeowners.</p>
    </div>
  </div>
</div>


          {/* Contact CTA */}
          <div className="mt-12 text-center bg-purple-100 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">CONTACT US</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="tel:07424455268" 
                className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-blue-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bgGreen1 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                07424 455268
              </a>
              
              <a 
                href="mailto:whiteoak@email.com" 
                className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-blue-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bgGreen1 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                whiteoak@email.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
