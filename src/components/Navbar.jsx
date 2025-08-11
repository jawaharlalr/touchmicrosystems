import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all ${
        scrolled ? "bg-gray-900 bg-opacity-80 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 relative">
        
        {/* Logo - Left Corner & Clickable */}
        <Link to="/" className="flex-shrink-0">
          <h1 className="text-xl font-bold text-yellow-400">
            TOUCH MICRO SYSTEMS
          </h1>
        </Link>

        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
          <Link to="/" className="text-white hover:text-yellow-400">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-yellow-400">
            About Us
          </Link>
          <Link to="/contact" className="text-white hover:text-yellow-400">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden ${
            scrolled ? "bg-gray-900 bg-opacity-80" : "bg-transparent"
          } px-4 pb-4 flex flex-col items-center space-y-2`}
        >
          <Link
            to="/"
            className="text-white hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
