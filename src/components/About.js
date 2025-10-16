import { CheckCircle2 } from "lucide-react";
import aboutImage from "../assets/65b02d69269a9cac8221361fd1ea85ab4a9447da.png";

export function About() {
  const services = [
    "Vehicle recovery and secure storage facilities",
    "Replacement hire vehicles (cars and vans)",
    "Assistance with vehicle damage and repair claims",
    "Nationwide network of trusted repair centres",
    "Qualified engineers and professional assessors",
    "Expert legal assistance and advice",
    "Professional, dedicated case management",
    "All services managed efficiently under one roof"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">About Accident Man</h2>
            <p className="text-gray-600 mb-6">
              With over a decade of experience, Accident Man has been proudly helping drivers across the UK get back on the road quickly and safely. Since 2011, we've built a trusted reputation for reliability, professionalism, and exceptional customer care in non-fault accident management.
            </p>
            <p className="text-gray-600 mb-6">
              We handle everything from start to finish — making the process simple, stress-free, and managed entirely under one roof. Our team of experts, engineers, assessors, and legal specialists ensure every case is handled with precision and care, keeping you fully informed every step of the way.
            </p>
            <p className="text-gray-600 mb-8">
              Thanks to our nationwide network of trusted repair centres — supported by qualified engineers, professional assessors, and experienced legal specialists — we're able to deliver the highest standard of service, restoring your vehicle to its full former glory quickly, safely, and efficiently.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Services Include:</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="Professional car inspection and repair services"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-lg hidden lg:block">
              <p className="text-4xl mb-1">13+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
