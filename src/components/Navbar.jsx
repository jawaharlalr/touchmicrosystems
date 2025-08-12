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
        scrolled ? "bg-[#1E1E1E] bg-opacity-80 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="relative flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        
        {/* Logo - Left Corner & Clickable */}
        <Link to="/" className="flex-shrink-0">
          <h1 className="text-xl font-bold" style={{ color: "#FF4C00" }}>
            TOUCH MICRO SYSTEMS
          </h1>
        </Link>

        {/* Desktop Menu - Centered */}
        <div className="absolute hidden space-x-8 transform -translate-x-1/2 md:flex left-1/2">
          <Link
            to="/"
            className="hover:text-[#FF4C00]"
            style={{ color: "#F0F0F0" }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-[#FF4C00]"
            style={{ color: "#F0F0F0" }}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#FF4C00]"
            style={{ color: "#F0F0F0" }}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          style={{ color: "#F0F0F0" }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden ${
            scrolled ? "bg-[#1E1E1E] bg-opacity-80" : "bg-transparent"
          } px-4 pb-4 flex flex-col items-center space-y-2`}
        >
          <Link
            to="/"
            className="hover:text-[#FF4C00]"
            style={{ color: "#F0F0F0" }}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-[#FF4C00]"
            style={{ color: "#F0F0F0" }}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#FF4C00]"
            style={{ color: "#F0F0F0" }}
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
