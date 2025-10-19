import React from "react";
import { SEO } from "../components/SEO.js";
import promoImage from "../assets/Auto Repair Business Promo.jpg";

export default function BodyshopRepairs() {
  return (
    <>
      <SEO
        title="Bodyshop Repairs | Professional vehicle repair"
        description="Professional bodyshop repairs using genuine parts and expert technicians. Quality assured repairs across the UK."
        canonical="/bodyshop-repairs"
        keywords="bodyshop repairs, vehicle repair UK, accident repair, genuine parts"
      />
      <main>
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <img
          src={promoImage.replace('.jpg','.webp')}
          alt="Auto repair business promo"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">Bodyshop Repairs</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <p className="text-gray-700 leading-relaxed mb-6">
              It is your decision who repairs your vehicle, regardless of your insurance company’s advice. We are confident that your preference would be to have your vehicle repaired by a specialist repair center like us. From roadside recovery, right through the process to getting you back on the road, our team of personnel will take care of everything at our state-of-the-art body shop center.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The auto repair center is run by a team of professionally trained technicians. Using specialist equipment and the very latest technology, ensuring a first class, speedy repair service with the minimum fuss and inconvenience. We offer repairs and paint resprays on all cars, including prestige and classic cars, as well as motorbikes and light commercial vehicles.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">We offer:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Fast track vehicle repairs</li>
                  <li>Alloy Wheel Refurbishment and Repairs</li>
                  <li>Scratch, Scuff and Dent Removals</li>
                  <li>Full or partial paint resprays</li>
                  <li>Smart repairs</li>
                  <li>Fleet vehicle specialists</li>
                  <li>Valeting</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Why use us?</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Local convenience</li>
                  <li>Same-day service option</li>
                  <li>Free collection and delivery</li>
                  <li>Courtesy cars available</li>
                  <li>Free estimates at home or business</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <a href="tel:08432891570" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg">
                Book a repair: 0843 289 1570
              </a>
            </div>
          </div>

          <aside className="lg:col-span-1 space-y-4">
            <div className="rounded-xl border overflow-hidden">
              <img src={promoImage.replace('.jpg','.webp')} alt="Workshop" loading="lazy" decoding="async" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-xl border p-4 bg-gray-50">
              <h4 className="font-semibold text-gray-900 mb-2">Quality Assured</h4>
              <p className="text-sm text-gray-700">Every repair we carry out is carefully inspected by our qualified engineers to ensure top-quality results and complete safety. We use only genuine parts and manufacturer-matched paint, restoring your vehicle to its original standard and appearance.</p>
            </div>
          </aside>
        </div>
      </section>

      {/* ClaimsProcess removed on this page to hide the "Start Your Claim Today" CTA */}
      </main>
    </>
  );
}


