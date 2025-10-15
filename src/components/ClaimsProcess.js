import { Button } from "./ui/button.js";
import { Phone, FileText, Car, Wrench, CheckCircle } from "lucide-react";
import consultationImage from "../assets/d4bba25bed618552f8c90f02f66cf00130aecd73.png";

export function ClaimsProcess() {
  const steps = [
    {
      icon: Phone,
      title: "Contact Us",
      description: "Call our 24/7 helpline or request a callback. We'll gather the details of your accident."
    },
    {
      icon: FileText,
      title: "Claim Assessment",
      description: "Our experts assess your claim and explain your entitlements with no obligation."
    },
    {
      icon: Car,
      title: "Replacement Vehicle",
      description: "Receive a similar replacement vehicle within 10 hours to keep you mobile."
    },
    {
      icon: Wrench,
      title: "Vehicle Repairs",
      description: "Your car is repaired to pre-accident condition using only branded parts."
    },
    {
      icon: CheckCircle,
      title: "Case Closed",
      description: "Independent inspection confirms quality. Your repaired vehicle is returned to you."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">How Our Claims Process Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've streamlined the accident claims process to make it as simple and stress-free as possible. 
            Here's what you can expect when you work with Accident Man.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2">
                      <span className="text-green-600 mr-2">Step {index + 1}:</span>
                      {step.title}
                    </h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={consultationImage}
                alt="Professional claims consultation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6 bg-green-50 p-6 rounded-lg">
              <h4 className="mb-3 text-green-900">Dedicated Support Throughout</h4>
              <p className="text-gray-700 mb-4">
                From the moment you contact us to the day you get your repaired vehicle back, 
                you'll have a dedicated case handler ensuring everything runs smoothly.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                <a href="tel:08432891570">Start Your Claim Today</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
