import { MapPin, Phone, Mail, ArrowUp, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Contact() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="relative min-h-screen bg-center bg-cover"
      style={{ backgroundImage: "url('/images/herosection.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Page Content */}
      <div className="relative max-w-6xl px-6 pt-32 pb-16 mx-auto text-white">
        {/* Home Button */}
        <Link
          to="/"
          className="absolute flex items-center gap-2 px-3 py-2 font-semibold text-black transition rounded-lg shadow-lg top-20 right-6"
          style={{ backgroundColor: "#FF4C00" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e04300")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FF4C00")}
        >
          <Home size={18} />
          Home
        </Link>

        <h2 className="mb-6 text-3xl font-bold text-center">Contact Us</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <p className="flex items-start">
              <MapPin
                className="flex-shrink-0 mt-1 mr-3"
                style={{ color: "#FF4C00" }}
              />
              2nd floor No 3, 4, Annai Sathya Nagar Main Rd, Chennai, Tamil Nadu 600089
            </p>

            <a
              href="tel:+919876543210"
              className="flex items-center text-white no-underline"
            >
              <Phone className="mr-3" style={{ color: "#FF4C00" }} /> +91 98765 43210
            </a>

            <a
              href="mailto:info@touchmicro.com"
              className="flex items-center text-white no-underline"
            >
              <Mail className="mr-3" style={{ color: "#FF4C00" }} /> info@touchmicro.com
            </a>
          </div>

          {/* Map + Button */}
          <div className="flex flex-col items-center w-full">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4799408724936!2d80.21835587480556!3d13.033034487286632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d564e7647b%3A0x540bf0b4f790e6a3!2sAnnai%20Sathya%20Nagar%20Main%20Rd%2C%20Chennai%2C%20Tamil%20Nadu%20600089!5e0!3m2!1sen!2sin!4v1691763081945!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Annai+Sathya+Nagar+Main+Rd,+Chennai,+Tamil+Nadu+600089"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 mt-5 font-semibold text-gray-900 transition rounded-lg"
              style={{ backgroundColor: "#FF4C00" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e04300")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FF4C00")}
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed p-3 text-black transition rounded-full shadow-lg bottom-6 right-6"
          style={{ backgroundColor: "#FF4C00" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e04300")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FF4C00")}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
