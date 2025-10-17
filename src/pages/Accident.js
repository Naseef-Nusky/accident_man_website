import React from "react";
// eslint-disable-next-line
import { ClaimsProcess } from "../components/ClaimsProcess.js";
// eslint-disable-next-line
import { Services } from "../components/Services.js";
import roadAccidentImage from "../assets/Road Accident Scene.jpg";

export default function Accident() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <img
          src={roadAccidentImage}
          alt="Road accident scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Had a Road Accident?
          </h1>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">What to do if you've had a road accident?</h1>
            <p className="text-gray-600">Follow these steps to stay safe, collect the right information, and protect your claim.</p>
          </div>

          <ol className="list-decimal pl-6 space-y-4 text-gray-800">
            <li className="leading-relaxed">Stay calm</li>
            <li className="leading-relaxed">If the accident was your fault, do not admit liability if asked</li>
            <li className="leading-relaxed">
              Exchange the following details:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Names</li>
                <li>Address</li>
                <li>Phone numbers (try to obtain as many as possible, both landline and mobile numbers)</li>
                <li>Vehicle Make / Model / Colour / Registration Number</li>
              </ul>
            </li>
            <li className="leading-relaxed">
              Should the driver refuse to give you the above information, call the police immediately and give them the make, model and registration of the car
            </li>
            <li className="leading-relaxed">
              Make a note of the date and time of the accident, the exact location and how the accident happened. If possible, take pictures (mobile phone pictures are suitable) of both vehicles, road markings and signs.
            </li>
            <li className="leading-relaxed">
              Inform the police — normally the police do not attend Road Traffic Accidents unless injuries have resulted from the accident, however it is still worth reporting every accident
            </li>
          </ol>

          <div className="mt-8">
            <a href="tel:08432891570" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg">Need help now? Call 0843 289 1570</a>
          </div>
        </div>
      </section>
    </main>
  );
}


