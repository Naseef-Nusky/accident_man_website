import React from "react";

export default function CreditHire() {
  return (
    <main>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Credit Hire</h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our Credit Hire service ensures that people who were involved in road traffic accidents
            (where they were not at fault) can remain mobile while their own vehicle is being repaired
            without the need to pay for hire charges in advance.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            In simple terms, we hire a replacement vehicle to the consumer while we organise and
            manage the repairs to their vehicle on their behalf. When the hire vehicle is returned to us,
            we pass the bill for our charges to the insurance company of the third party.
          </p>

          <div className="mt-8">
            <a href="tel:08432891570" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg">
              Need a replacement vehicle now? Call 0843 289 1570
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


