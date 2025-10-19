import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.js";
import { Car, Wrench, Truck, Shield, Clock, Award } from "lucide-react";
import replacementVehiclesImg from "../assets/Replacement Vehicles.webp";
import qualityRepairImg from "../assets/Quality Repair.webp";
import storageRecoveryImg from "../assets/Storage & Recovery.webp";
import nationalNetworkImg from "../assets/National Repair Network.webp";
import repairRecoveryImg from "../assets/Repair & Recovery.webp";
import strongBodyshopImg from "../assets/Strong Bodyshop Network.webp";

export function Services() {
  const services = [
    {
      icon: Car,
      title: "Replacement Vehicles",
      description: "We understand that when your vehicle is undrivable or in for repairs, you need alternative transport. Life moves fast, and being without a vehicle can hold you back. That’s why at Accident Man, we provide replacement vehicles — including cars, vans, and motorcycles — within around 10 hours, often sooner.",
      color: "text-blue-600",
      image: replacementVehiclesImg,
      highlight: "10 Hours Delivery"
    },
    {
      icon: Wrench,
      title: "Quality Repair",
      description: "We repair your car professionally. We use branded parts only. Our dedicated staff will ensure that your vehicle is returned to you in pre-incident condition.",
      color: "text-green-600",
      image: qualityRepairImg,
      highlight: "Branded Parts Only"
    },
    {
      icon: Truck,
      title: "Storage & Recovery",
      description: "Accidents can happen anytime, anywhere — and often leave vehicles in a non-drivable condition. That’s where we come in. Our experienced recovery team is available whenever you need assistance, ensuring your vehicle is collected quickly and safely.  Once recovered, your car, van, or motorcycle is stored in our secure, fully monitored premises, giving you complete peace of mind while repairs or claims are being arranged.  Whether it’s day or night, you can count on Accident Man for fast, reliable recovery and safe vehicle storage.",
      color: "text-orange-600",
      image: storageRecoveryImg,
      highlight: "24/7 Service"
    },
    {
      icon: Shield,
      title: "National Repair Network",
      description: "We are able to provide expert vehicle repair services to customers who have had an incident through our carefully selected network of approved body shops.",
      color: "text-purple-600",
      image: nationalNetworkImg,
      highlight: "UK Wide Coverage"
    },
    {
      icon: Clock,
      title: "Repair & Recovery",
      description: "We will recover your car fast and repair it in the shortest time possible. We will never compromise on the standards of the parts used and the repair quality. Each car will be checked by independent engineers and a report will be submitted to insurers.",
      color: "text-red-600",
      image: repairRecoveryImg,
      highlight: "Fast Recovery"
    },
    {
      icon: Award,
      title: "Strong Bodyshop Network",
      description: "Strategically located across the UK, Getting you back in business fast without ever compromising on the quality of your repair.",
      color: "text-indigo-600",
      image: strongBodyshopImg,
      highlight: "Quality Guaranteed"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Accident Man we completely understand that after an accident there can be many issues. 
            We can help you in every aspect, with everything being dealt with under one roof.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center ${service.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium inline-block">
                      {service.highlight}
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
