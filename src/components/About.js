import { CheckCircle2 } from "lucide-react";
import aboutImage from "../assets/65b02d69269a9cac8221361fd1ea85ab4a9447da.png";

export function About() {
  const features = [
    "Vehicle recovery and storage facilities",
    "Replacement hire vehicles (cars, vans and motorcycles)",
    "Trusted panel of solicitors for Personal Injury Claims",
    "Personal Compensation assistance",
    "Professional and dedicated case management",
    "Everything handled under one roof"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">About Accident Man</h2>
            <p className="text-gray-600 mb-6">
              Accident Man has been providing car accident management services across the country 
              since 2011. We have been assisting clients who have been involved in non-fault road 
              traffic accidents that were caused by third party vehicles.
            </p>
            <p className="text-gray-600 mb-8">
              At Accident Man we completely understand that after an accident there can be many issues, 
              but needn't worry as we can help you in every aspect, including car or van hire. This is 
              great because you can have peace of mind knowing that everything is being dealt with under 
              one roof and that your case is in professional/dedicated hands.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
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
              <p className="text-4xl mb-1">10+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
