import { Phone, Mail } from 'lucide-react';

const AboutUs = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-purple-700 mb-4">ABOUT US</h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              White Oaks Exterior Cleaning Services are a well established company based in West Yorkshire. With over 25 years experience within the cleaning industry.
            </p>
            
            <p>
              We specialise in professional cleaning for residential and commercial properties, ensuring that exterior surfaces remain spotless and well-maintained:
            </p>

            <div className="space-y-4 my-8">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-700 mb-2">Gutter Cleaning</h3>
                <p className="text-gray-600">Removing debris and buildup to prevent water damage and improve drainage.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-700 mb-2">Gutter repairs</h3>
                <p className="text-gray-600">Inspecting, diagnosing, and fixing gutter issues to ensure proper water drainage and prevent damage to homes and buildings.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-700 mb-2">Fascia and Soffit cleaning</h3>
                <p className="text-gray-600">Maintaining the exterior elements of a building's roofline to keep it looking clean, professional, and free from dirt, grime, and mold buildup.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-700 mb-2">Pressure Washing</h3>
                <p className="text-gray-600">Cleaning driveways, sidewalks, patios, and other hard surfaces to remove dirt, grime, and stains.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-700 mb-2">Roof cleaning</h3>
                <p className="text-gray-600">Restoring and maintaining the cleanliness of roofs, ensuring they look great and last longer. Removing moss, algae, dirt, and other buildup that can damage shingles and reduce a roof's lifespan. Using professional cleaning techniques, I help homeowners and businesses protect their investment while improving the overall appearance of their property. It's a detail-oriented job that requires care, expertise, and a commitment to delivering top-quality results.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-700 mb-2">Soft Washing</h3>
                <p className="text-gray-600">A gentler approach using specialised solutions for delicate surfaces like roofs, siding, and fences.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-700 mb-2">Conservatory roof cleaning</h3>
                <p className="text-gray-600">A specialised service that helps maintain the clarity, cleanliness, and longevity of conservatory roofs.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-700 mb-2">Solar panel cleaning</h3>
                <p className="text-gray-600">Ensuring solar panels are free from dirt, dust, and debris that can reduce their energy output. Using the right techniques and equipment, carefully removing buildup without damaging delicate surfaces, helping customers get the most from their solar power systems.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-700 mb-2">Window Cleaning</h3>
                <p className="text-gray-600">Washing exterior windows for a streak-free finish.</p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-purple-100 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-purple-700 mb-6">CONTACT US</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="tel:07946764629" 
                className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-purple-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                07946 764629
              </a>
              
              <a 
                href="mailto:whiteoaks@gmail.com" 
                className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-purple-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                whiteoaks@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
