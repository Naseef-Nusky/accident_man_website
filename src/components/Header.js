import { Menu, Phone, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [replacementVehiclesDropdownOpen, setReplacementVehiclesDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/">
              <img src="/logo.png" alt="Accident Man Logo" className="h-22 w-24" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors">About Us</Link>
            <Link to="/accident" className="text-gray-700 hover:text-green-600 transition-colors">Accident</Link>
            
            {/* Replacement Vehicles Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (dropdownTimeout) clearTimeout(dropdownTimeout);
                setReplacementVehiclesDropdownOpen(true);
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => {
                  setReplacementVehiclesDropdownOpen(false);
                }, 200);
                setDropdownTimeout(timeout);
              }}
            >
              <Link to="/replacement-vehicles" className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition-colors">
                Replacement Vehicles <ChevronDown className="w-4 h-4" />
              </Link>
              {replacementVehiclesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link to="/credit-hire" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Credit Hire
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/bodyshop-repairs" className="text-gray-700 hover:text-green-600 transition-colors">Bodyshop Repairs</Link>
            <Link to="/blogs" className="text-gray-700 hover:text-green-600 transition-colors">Blogs</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact Us</Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden xl:flex items-center gap-4">
            <a href="tel:08432891570" className="flex items-center gap-2 text-green-600">
              <Phone className="w-4 h-4" />
              <span>0843 289 1570</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="xl:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors">About Us</Link>
              <Link to="/accident" className="text-gray-700 hover:text-green-600 transition-colors">Accident</Link>
              
              {/* Mobile Replacement Vehicles Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition-colors w-full text-left"
                  onClick={() => setReplacementVehiclesDropdownOpen(!replacementVehiclesDropdownOpen)}
                >
                  Replacement Vehicles <ChevronDown className="w-4 h-4" />
                </button>
                {replacementVehiclesDropdownOpen && (
                  <div className="pl-4 py-2">
                    <Link to="/credit-hire" className="block text-gray-700 hover:text-green-600 transition-colors">
                      Credit Hire
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/bodyshop-repairs" className="text-gray-700 hover:text-green-600 transition-colors">Bodyshop Repairs</Link>
              <Link to="/blogs" className="text-gray-700 hover:text-green-600 transition-colors">Blogs</Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact Us</Link>
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
