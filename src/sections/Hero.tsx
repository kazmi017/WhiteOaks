import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Hero = () => {
  const services = [
    {
      title: "Property Maintenance",
      items: ["Extensions", "Plastering", "Roofing", "Stone & Brick Work"],
    },
    {
      title: "Landscaping & Garden Maintenance",
      items: [
        "Fresh Turf Installation",
        "Patios & Driveways",
        "Block Paving",
        "Fencing & Decking",
      ],
    },
    {
      title: "Exterior Cleaning",
      items: ["Pressure Washing", "Roof Cleaning & Gutter Cleaning"],
    },
  ];

  return (
    <section className="relative w-full min-h-[600px]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* FULL WIDTH FLEX CENTERING LAYER */}
      <div className="relative z-10 w-full min-h-[600px] flex justify-center">
        {/* TRUE CENTER BOX */}
        <div className=" max-w-[900px] text-left py-16 px-4 sm:px-6 lg:px-8">
          {services.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-white text-lg font-bold mb-2">
                {section.title}
              </h3>

              <ul className="space-y-1">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-white text-sm flex items-start gap-2"
                  >
                    <Check className="w-3.5 h-3.5 text-green-400 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex justify-center sm:justify-start mt-6">
            <Link
              to="/contact"
              className="inline-block px-6 py-2 bgGreen1 text-white font-medium rounded-md hover:bg-purple-700 transition-all"
            >
              CALL NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
