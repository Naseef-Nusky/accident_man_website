import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card.js";

export function PrivacyPolicy() {
  return (
    <main className="pt-16 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          </div>

          {/* Privacy Policy Content */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Privacy Policy (UK Compliant)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Introduction */}
              <div>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>
                    Accident Man ("we", "us", "our") is committed to protecting your privacy and handling your personal data in a safe and responsible way. This Privacy Policy explains how we collect, use, store, and share your information and your rights under UK data protection law.
                  </p>
                </div>
              </div>

              {/* Section 1: Data Controller */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Data Controller</h2>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>The data controller responsible for your personal information is:</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p><strong>Accident Man Limited</strong></p>
                    <p>Registered Office: CPS & Co, 10a Aldermans Hill, Palmers Green, London, N13 4PJ</p>
                    <p>Email: <a href="mailto:claim@accidentman.co.uk" className="text-green-600 hover:underline">claim@accidentman.co.uk</a></p>
                    <p>Phone: <a href="tel:07591264731" className="text-green-600 hover:underline">07591 264731</a></p>
                  </div>
                </div>
              </div>

              {/* Section 2: Information We Collect */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>We may collect the following personal information from you:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name, email address, phone number, and other contact details when you submit inquiries or request services.</li>
                    <li>Information collected via cookies about your usage of our website (e.g., pages visited, device information).</li>
                  </ul>
                  <p><strong>Cookies:</strong> Cookies help us improve our website and provide you with a better browsing experience. You can control cookie settings through your browser preferences.</p>
                </div>
              </div>


            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
