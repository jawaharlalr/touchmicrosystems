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

  // Scroll to a specific section
  const scrollToSection = (id) => {
    if (id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsOpen(false);
  };

  // Scroll to top only
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all ${
        scrolled ? "bg-[#1E1E1E] bg-opacity-90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="relative flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <Link
          to="/"
          className="flex-shrink-0 text-xl font-bold text-[#FF4C00] hover:opacity-80 transition-opacity"
          onClick={scrollToTop}
        >
          TOUCH MICRO SYSTEMS
        </Link>

        {/* Desktop Menu */}
        <div className="absolute hidden space-x-8 transform -translate-x-1/2 md:flex left-1/2">
          <button
            onClick={() => scrollToSection("services")}
            className="text-[#F0F0F0] hover:text-[#FF4C00] transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="text-[#F0F0F0] hover:text-[#FF4C00] transition-colors"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection("accessories")}
            className="text-[#F0F0F0] hover:text-[#FF4C00] transition-colors"
          >
            Accessories
          </button>
          <Link
            to="/about-us"
            className="text-[#F0F0F0] hover:text-[#FF4C00] transition-colors"
            onClick={scrollToTop}
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            className="text-[#F0F0F0] hover:text-[#FF4C00] transition-colors"
            onClick={scrollToTop}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#F0F0F0]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1E1E1E] px-4 pb-4 flex flex-col items-center space-y-2 shadow-lg">
          <button
            onClick={() => scrollToSection("services")}
            className="w-full text-center text-[#F0F0F0] hover:text-[#FF4C00] py-2 transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="w-full text-center text-[#F0F0F0] hover:text-[#FF4C00] py-2 transition-colors"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection("accessories")}
            className="w-full text-center text-[#F0F0F0] hover:text-[#FF4C00] py-2 transition-colors"
          >
            Accessories
          </button>
          <Link
            to="/about-us"
            className="w-full text-center text-[#F0F0F0] hover:text-[#FF4C00] py-2 transition-colors"
            onClick={scrollToTop}
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            className="w-full text-center text-[#F0F0F0] hover:text-[#FF4C00] py-2 transition-colors"
            onClick={scrollToTop}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
