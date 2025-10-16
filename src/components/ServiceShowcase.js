import repairImage from "../assets/fef5340bd861eb4bca68058f01dd01e767c60fd7.png";
import { Button } from "./ui/button.js";

export function ServiceShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={repairImage}
                alt="Expert team repairing luxury vehicle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="mb-6">Expert Professional Repairs</h2>
            <p className="text-gray-600 mb-6">
              Our skilled technicians use state-of-the-art equipment and genuine branded parts 
              to restore your vehicle to its pre-accident condition. Every repair is carefully 
              inspected by independent engineers to ensure the highest quality standards.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you drive a luxury vehicle, mainstream car, or commercial vehicle, our 
              nationwide network of approved bodyshops is equipped to handle all types of repairs 
              with precision and care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-3xl text-green-600 mb-2">10hrs</p>
                <p className="text-sm text-gray-700">Average replacement vehicle delivery time</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-3xl text-green-600 mb-2">100%</p>
                <p className="text-sm text-gray-700">Quality guaranteed repairs with branded parts</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-600 hover:bg-green-700">
                <a href="tel:07591264731">Get Started</a>
              </Button>
              <Button variant="outline">
                <a href="#contact">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
