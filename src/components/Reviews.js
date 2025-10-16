import { Card, CardContent } from "./ui/card.js";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const reviews = [
    {
      name: "Sarah Johnson",
      location: "London",
      rating: 5,
      text: "Absolutely fantastic service! After my accident, Accident Man had me back on the road within 10 hours with a beautiful replacement car. The whole process was seamless and stress-free.",
      service: "Vehicle Replacement"
    },
    {
      name: "Michael Chen",
      location: "Manchester",
      rating: 5,
      text: "Professional team from start to finish. My car was repaired to perfection using only branded parts. The communication throughout was excellent - I always knew what was happening.",
      service: "Quality Repair"
    },
    {
      name: "Emma Williams",
      location: "Birmingham",
      rating: 5,
      text: "As a taxi driver, I was worried about losing income after my accident. Accident Man provided me with a suitable replacement vehicle immediately. They really understand professional drivers' needs.",
      service: "PCO/Taxi Service"
    },
    {
      name: "David Thompson",
      location: "Leeds",
      rating: 5,
      text: "The recovery service was incredibly fast - they were at the scene within an hour. Everything was handled professionally and I didn't have to pay a penny upfront. Highly recommended!",
      service: "Recovery Service"
    },
    {
      name: "Lisa Patel",
      location: "Bristol",
      rating: 5,
      text: "After 13 years in business, Accident Man really knows what they're doing. The repair quality was outstanding and the customer service was exceptional. Will definitely use again if needed.",
      service: "Complete Service"
    },
    {
      name: "James Wilson",
      location: "Glasgow",
      rating: 5,
      text: "From the moment I called, I felt confident I was in good hands. The team explained everything clearly and kept me updated throughout. My car looks better than before the accident!",
      service: "Full Management"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(reviews.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(reviews.length / 4)) % Math.ceil(reviews.length / 4));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(reviews.length / 4));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            Trusted by Thousands
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Don't Take Our Word For It
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Check out our Trustpilot reviews and see what our customers say about our 
            professional accident management services.
          </p>
        </div>


        {/* Reviews Slider */}
        <div className="relative mb-12">
          {/* Slider Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 25}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full lg:w-1/4 md:w-1/2 flex-shrink-0 px-3">
                  <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm h-full">
                    <CardContent className="p-6 text-center h-full flex flex-col">
                      {/* Quote Icon */}
                      <div className="flex justify-center mb-4">
                        <Quote className="w-8 h-8 text-green-500 opacity-30" />
                      </div>

                      {/* Stars */}
                      <div className="flex justify-center gap-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-sm text-gray-700 mb-6 leading-relaxed flex-grow">
                        "{review.text}"
                      </p>

                      {/* Service Badge */}
                      <div className="inline-block bg-green-100 text-green-600 text-xs font-medium px-3 py-1 rounded-full mb-4">
                        {review.service}
                      </div>

                      {/* Reviewer Info */}
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {review.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                          <div className="text-gray-500 text-xs">{review.location}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-600 hover:text-green-600 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-600 hover:text-green-600 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(reviews.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-green-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Simplified CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold mb-6 text-gray-900 drop-shadow-lg">
              Ready to Experience Our Service?
            </h3>
            <p className="text-xl mb-12 text-gray-900 font-semibold drop-shadow-lg">
              Join thousands of satisfied customers who trust Accident Man for their 
              accident management needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:07591264731"
                className="bg-white text-green-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Claim - Call Now
              </a>
              <a 
                href="#contact"
                className="bg-green-500 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Let's Talk - Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
