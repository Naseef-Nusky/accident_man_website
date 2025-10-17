import { Button } from "./ui/button.js";
import { Input } from "./ui/input.js";
import { Label } from "./ui/label.js";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.js";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you! We will contact you shortly.");
    setFormData({ name: "", mobile: "", email: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div>
            <h2 className="mb-4">Request a Callback</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and one of our team members will be in contact shortly.
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>We're here to help 24/7</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number *</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="Enter your mobile number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Your e-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 mb-1">Head Office</p>
                    <p className="text-gray-600">
                      7a Queens Parade Mansions<br />
                      Brownlow Road, Bounds Green<br />
                      London N11 2DN
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 mb-1">Phone Numbers</p>
                    <p className="text-gray-600">
                      Main: <a href="tel:08432891570" className="text-green-600 hover:underline">0843 289 1570</a><br />
                      24/7: <a href="tel:07591264731" className="text-green-600 hover:underline">07591 264731</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 mb-1">Email</p>
                    <p className="text-gray-600">
                      <a href="mailto:claim@accidentman.co.uk" className="text-green-600 hover:underline">
                        claim@accidentman.co.uk
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="mb-3">Company Information</h4>
              <p className="text-sm text-gray-600">
                Registered in England and Wales<br />
                Company Number: 07622068<br />
                <br />
                Registered Office:<br />
                ACCIDENT MAN LIMITED / CPS & CO<br />
                10a Aldermans Hill, Palmers Green<br />
                England N13 4PJ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
