import { Card, CardContent } from "./ui/card.js";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reviewsPerSlide, setReviewsPerSlide] = useState(1);
  
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Fantastic service from start to finish! After my accident, Accident Man handled everything so quickly and professionally. I had a courtesy car delivered the same day, and they kept me updated throughout the whole process. Highly recommend!"
    },
    {
      name: "James R.",
      rating: 5,
      text: "Couldn't be happier with the service. My van was collected right after the accident, and I was provided with a replacement within hours. The team made the whole experience completely stress-free — really impressive support."
    },
    {
      name: "Emma L.",
      rating: 5,
      text: "Brilliant experience! The team at Accident Man were so helpful and reassuring after my accident. They arranged everything quickly and had me back on the road with a replacement car in no time. Excellent service from a company that truly cares."
    },
    {
      name: "Mark T.",
      rating: 5,
      text: "Excellent service from start to finish! After my motorbike accident, Accident Man arranged recovery straight away and provided a replacement bike faster than I expected. The team made everything easy and stress-free — couldn't ask for better support."
    },
    {
      name: "Lucy H.",
      rating: 5,
      text: "Accident Man was incredible! They were so knowledgeable and guided me through every step of the process. I felt completely supported and confident that my vehicle was in expert hands."
    },
    {
      name: "Daniel K.",
      rating: 5,
      text: "Outstanding service! From the moment I called Accident Man, everything was handled quickly and professionally. My PCO vehicle was replaced the same day, and the whole process was smooth and stress-free. Highly recommended!"
    }
  ];

  // Update reviews per slide based on screen size
  useEffect(() => {
    const updateReviewsPerSlide = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setReviewsPerSlide(4);
      } else if (window.innerWidth >= 768) { // md breakpoint
        setReviewsPerSlide(2);
      } else {
        setReviewsPerSlide(1);
      }
    };

    updateReviewsPerSlide();
    window.addEventListener('resize', updateReviewsPerSlide);
    return () => window.removeEventListener('resize', updateReviewsPerSlide);
  }, []);

  const totalSlides = Math.ceil(reviews.length / reviewsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            Trusted by Thousands
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Chosen by Countless Satisfied Customers
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            See how our professional accident management services make a real difference.
          </p>
        </div>


        {/* Reviews Slider */}
        <div className="relative mb-12">
          {/* Slider Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / reviewsPerSlide)}%)` }}
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

                      {/* Reviewer Info */}
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {review.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
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
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-600 hover:text-green-600 rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-600 hover:text-green-600 rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
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
        <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 drop-shadow-lg">
              Experience Our Service Today
            </h3>
            <p className="text-lg md:text-xl mb-8 md:mb-12 text-gray-900 font-semibold drop-shadow-lg px-4">
              Let Accident Man take care of your accident management while you stay worry-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
              <a 
                href="tel:08432891570"
                className="bg-white text-green-600 px-6 md:px-10 py-4 md:py-5 rounded-xl font-bold text-lg md:text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Claim - Call Now
              </a>
              <a 
                href="#contact"
                className="bg-green-500 text-white px-6 md:px-10 py-4 md:py-5 rounded-xl font-bold text-lg md:text-xl hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
