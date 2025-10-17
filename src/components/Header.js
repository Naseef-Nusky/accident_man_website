import { Menu, Phone } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Accident Man Logo" className="h-22 w-24" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
            <a href="/about" className="text-gray-700 hover:text-green-600 transition-colors">About Us</a>
            <a href="/accident" className="text-gray-700 hover:text-green-600 transition-colors">Accident</a>
            <div className="relative group">
              <a href="/replacement-vehicles" className="text-gray-700 hover:text-green-600 transition-colors inline-flex items-center">Replacement Vehicles<span className="ml-1">▾</span></a>
              <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded-md shadow-lg min-w-[200px] py-2">
                <a href="/credit-hire" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600">Credit Hire</a>
              </div>
            </div>
            <a href="/blogs" className="text-gray-700 hover:text-green-600 transition-colors">Blogs</a>
            <a href="/bodyshop-repairs" className="text-gray-700 hover:text-green-600 transition-colors">Bodyshop Repairs</a>
            <a href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact Us</a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:08432891570" className="flex items-center gap-2 text-green-600">
              <Phone className="w-4 h-4" />
              <span>0843 289 1570</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="/" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
              <a href="/about" className="text-gray-700 hover:text-green-600 transition-colors">About Us</a>
              <a href="/accident" className="text-gray-700 hover:text-green-600 transition-colors">Accident</a>
              <a href="/replacement-vehicles" className="text-gray-700 hover:text-green-600 transition-colors">Replacement Vehicles</a>
              <a href="/credit-hire" className="text-gray-600 hover:text-green-600 transition-colors pl-4">Credit Hire</a>
              <a href="/blogs" className="text-gray-700 hover:text-green-600 transition-colors">Blogs</a>
              <a href="/bodyshop-repairs" className="text-gray-700 hover:text-green-600 transition-colors">Bodyshop Repairs</a>
              <a href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact Us</a>
              <a href="tel:08432891570" className="flex items-center gap-2 text-green-600">
                <Phone className="w-4 h-4" />
                <span>0843 289 1570</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
