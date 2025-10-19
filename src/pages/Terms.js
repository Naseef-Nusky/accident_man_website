import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card.js";
import { SEO } from "../components/SEO.js";

export function Terms() {
  return (
    <>
    <SEO
      title="Terms and Conditions | Accident Man"
      description="Read the terms and conditions governing the use of Accident Man services and website."
      canonical="/terms"
      keywords="terms and conditions, accident man terms"
    />
    <main className="pt-16 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
          </div>

          {/* Terms Content */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Terms of Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* Section 1: Liability */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Liability</h2>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>
                    We try to ensure the accuracy of all of the content. However, we do not accept any liability for the use made by you of the content. The content of this site should only be used for information purposes and you should not rely on it to make (or refrain from making) any decision or take (or refrain from taking) any action.
                  </p>
                  <p>
                    The site is for your personal use and is not to be used for any commercial purpose. As a result, Accident Man will not be responsible in any circumstances for your loss of profits. Accident Man will also not be responsible for any loss including wasted expenditure, corruption or destruction of data unless the loss results from something Accident Man has done wrong.
                  </p>
                  <p>
                    Accident Man is not liable for any damages or losses resulting from your inability to use this site. Accident Man cannot promise that the site will be uninterrupted or entirely error free. Because of the nature of the internet, the site is provided on an "as available" basis. Accident Man will not be responsible to you if we are unable to provide the site for any reason beyond our control.
                  </p>
                </div>
              </div>

              {/* Section 2: Data Protection */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Data Protection and Privacy</h2>
                <div className="text-gray-700 leading-relaxed">
                  <p>
                    Any details which you provide to us from which we can identify you are held and processed in accordance with our privacy policy.
                  </p>
                </div>
              </div>

              {/* Section 3: Changes to Terms */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Changes to the Terms</h2>
                <div className="text-gray-700 leading-relaxed">
                  <p>
                    Accident Man may change the site or these terms at any time. If you use the site after Accident Man has changed the terms you will be bound by the new terms.
                  </p>
                </div>
              </div>

              {/* Section 4: Governing Law */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Governing Law and Jurisdiction</h2>
                <div className="text-gray-700 leading-relaxed">
                  <p>
                    These terms and your use of this site are governed by and construed in accordance with the laws of England and Wales and any disputes will be decided only by the Courts of England and Wales.
                  </p>
                </div>
              </div>

              {/* Company Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-gray-700 space-y-2">
                  <p><strong>Registered Address:</strong></p>
                  <p>
                    10a Alderman's Hill<br />
                    Palmers Green<br />
                    London<br />
                    N11 4SP
                  </p>
                  <p className="mt-4">
                    <strong>Registered in England and Wales. No. 07622068</strong>
                  </p>
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
