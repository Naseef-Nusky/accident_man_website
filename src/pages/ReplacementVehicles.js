import React from "react";
import ford from "../assets/ford.png";
import v145 from "../assets/145-v.png";
import n155 from "../assets/155.png";
import bmw from "../assets/145-2.png";
import hyundai from "../assets/Hyundai.png";
import mercedes from "../assets/Mercedes-Benz-Logo.png";
import tesla from "../assets/Tesla_logo.png";
import volkswagen from "../assets/volkswagen_logo.png";

export default function ReplacementVehicles() {
  return (
    <main>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Replacement Vehicles</h1>
          <p className="text-gray-700 mb-6">
            With a wide variety of vehicles available, a replacement will be delivered with the minimum of fuss.
            Listed below is a shortlist of replacement vehicles. All vehicles are covered by fully comprehensive
            insurance and are less than three years old.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[ 
              { name: "Ford", img: ford },
              { name: "145-v", img: v145 },
              { name: "155", img: n155 },
              { name: "BMW Range", img: bmw },
              { name: "145", img: bmw },
              { name: "Hyundai", img: hyundai },
              { name: "Mercedes-Benz", img: mercedes },
              { name: "Tesla", img: tesla },
              { name: "Volkswagen", img: volkswagen },
            ].map((brand, i) => (
              <div key={i} className="rounded-xl border p-6 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition">
                <img src={brand.img} alt={brand.name} className="max-h-20 md:max-h-24 object-contain" />
              </div>
            ))}
          </div>

          <p className="text-gray-700 mt-8">
            Also available is a large range of commercial vehicles and mini buses. Grade A class vehicle is supplied on all
            non-fault road traffic accidents.
          </p>

          {/* Credit Hire dropdown inside Replacement Vehicles */}
          <div className="mt-8">
            <details className="group rounded-xl border bg-gray-50 p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="text-lg font-semibold text-gray-900">Credit Hire</span>
                <span className="ml-4 text-gray-500 transition-transform group-open:rotate-180">▾</span>
              </summary>
              <div className="mt-3 text-gray-700 leading-relaxed">
                Our Credit Hire service keeps you mobile after a non-fault accident with no upfront
                hire costs. We supply a like-for-like replacement while we manage your repair. When the
                vehicle is returned, we recover costs from the at-fault insurer.
              </div>
              <div className="mt-4">
                <a href="/credit-hire" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-lg">
                  Learn more about Credit Hire
                </a>
              </div>
            </details>
          </div>

          <div className="mt-6">
            <a href="tel:08432891570" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg">
              24 Hour claims helpline: 0843 289 1570
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


