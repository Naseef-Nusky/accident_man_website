import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Complaints Procedure", href: "#complaints" },
    { name: "Terms & Conditions", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Contact Us", href: "#contact" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white mb-4">About Accident Man</h3>
            <p className="text-sm mb-4">
              Accident Man comes to the rescue of those motorists who have found themselves at the 
              wrong end of an accident to regain their mobility through our dedicated fleet of luxury, 
              prestige, mainstream and commercial vehicles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm hover:text-green-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                <p>
                  7a Queens Parade Mansions<br />
                  Brownlow Road, Bounds Green<br />
                  London N11 2DN
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:08432891570" className="hover:text-green-400">0843 289 1570</a><br />
                  <a href="tel:07588010693" className="hover:text-green-400">0758 801 0693</a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                <a href="mailto:claim@accidentman.co.uk" className="hover:text-green-400">
                  claim@accidentman.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>
            © Accidentman Limited 2011-2024. Registered in England and Wales with company number 07622068.
          </p>
          <p className="mt-2">
            Registered Office: ACCIDENT MAN LIMITED / CPS & CO, 10a Aldermans Hill, Palmers Green, England N13 4PJ
          </p>
        </div>
      </div>
    </footer>
  );
}
