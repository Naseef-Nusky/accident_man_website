import React from "react";
import { SEO } from "../components/SEO.js";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card.js";

export function Complaints() {
  return (
    <>
    <SEO
      title="Complaints Procedure | Accident Man"
      description="Accident Man's complaints procedure: how to complain, information we need, and our response process."
      canonical="/complaints"
      keywords="complaints procedure, accident man complaints"
    />
    <main className="pt-16 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Complaints Procedure</h1>
          </div>

          {/* Complaints Content */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Complaints Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* Introduction */}
              <div>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>
                    Accident Man Limited is committed to providing a high standard of customer service to everyone at all times. 
                    Any complaints are taken seriously, and in the event that you have a complaint about the service or advice 
                    you have received from us, then we want you to let us know so that we can remedy the matter:
                  </p>
                </div>
              </div>

              {/* How to Complain */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">How to Complain</h2>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>You can complain:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>In Writing</li>
                    <li>By Email</li>
                    <li>By Telephone</li>
                    <li>In Person</li>
                  </ul>
                </div>
              </div>

              {/* Information We Need */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Information We Need</h2>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>To assist us when dealing with your complaint please ensure that you are able to tell us:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Our reference number if appropriate</li>
                    <li>The nature of the complaint</li>
                    <li>Who you have been dealing with</li>
                    <li>How you would like your complaint settled</li>
                  </ul>
                </div>
              </div>

              {/* Our Process */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Process</h2>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>On receiving a complaint we will, within 48 hours:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Inform you who will be handling your complaint. We will also send you, if you require, a copy of our Internal Complaints Handling Procedure</li>
                    <li>Carry out a thorough investigation into your complaint and seek to resolve it as soon as possible, in any event within 28 days</li>
                    <li>In default of being able to resolve your complaint, provide you with details of who to contact if you are still not satisfied</li>
                  </ul>
                </div>
              </div>


            </CardContent>
          </Card>
        </div>
      </div>
    </main>
    </>
  );
}
