import { Button } from "./ui/button.js";
import { CheckCircle2, Phone, Clock, Shield, Award } from "lucide-react";
import heroImage from "../assets/hero.png";

export function Hero() {
  const benefits = [
    "No Excess to Pay",
    "Credit Hire",
    "No Up-Front Costs",
    "Quality Vehicle Repairs",
    "Similar Replacement Vehicle",
    "Taxi/PCO Accident Claims",
    "Motorcycle Accident Claim",
    "Legal Assistance"
  ];

  const stats = [
    { icon: Clock, value: "10hrs", label: "Replacement Vehicle Delivery" },
    { icon: Shield, value: "13+", label: "Years of Experience" },
    { icon: Award, value: "100%", label: "Quality Guaranteed" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Accident recovery and towing services"
          className="w-full h-full object-cover brightness-75"
        />
        {/* Darker overlays for improved text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        {/* Subtle blur to reduce background distraction */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      
      <div className="relative container mx-auto px-4 py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2 text-green-400 text-sm font-medium">
                <Shield className="w-4 h-4" />
                Trusted Since 2011
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Professional</span>
                <br />
                <span className="text-green-400">Accident Management</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Providing comprehensive car accident management services across the UK. 
                We assist clients involved in non-fault road traffic accidents with expert 
                support and fast recovery solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <Icon className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:08432891570">Call 0843 289 1570</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
                <a href="#contact">Request a Callback</a>
              </Button>
            </div>

            {/* 24/7 Service Notice */}
            <div className="bg-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
              <p className="text-sm text-gray-300">
                <span className="text-green-400 font-semibold">24 Hour Answering Service:</span> 
                <a href="tel:07591264731" className="text-green-400 hover:underline ml-2 font-medium">07591 264731</a>
              </p>
            </div>
          </div>

          {/* Right Content - Enhanced Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={heroImage}
                  alt="Professional accident management services"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h3 className="text-white font-semibold mb-2">Expert Recovery Team</h3>
                    <p className="text-gray-300 text-sm">Professional 24/7 vehicle recovery and repair services</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-green-600 text-white p-4 rounded-xl shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-2xl font-bold">13+</div>
                <div className="text-xs">Years Experience</div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-2xl font-bold">10hrs</div>
                <div className="text-xs">Delivery Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
