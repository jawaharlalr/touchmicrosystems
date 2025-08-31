import { MapPin, Phone, Mail, Clock, ArrowUp, Home } from "lucide-react";
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
      style={{ backgroundImage: "url('/images/herosection.webp')" }}
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
              2nd floor No 3, 4, Annai Sathya Nagar Main Rd, Exhilarating Nagar, B Block, Annai Sathya Nagar, Ramapuram, Chennai, Tamil Nadu 600089
            </p>

            {/* Phone */}
            <a href="tel:+919876543210" className="flex items-center no-underline">
              <Phone className="mr-3" style={{ color: "#FF4C00" }} />
              <span className="text-white transition-colors duration-200 hover:text-red-500">
                +91 9790741494
              </span>
            </a>

            {/* Email */}
            <a href="mailto:info@touchmicro.com" className="flex items-center no-underline">
              <Mail className="mr-3" style={{ color: "#FF4C00" }} />
              <span className="text-white transition-colors duration-200 hover:text-red-500">
                info@touchmicro.com
              </span>
            </a>

            {/* Working Hours */}
            <div className="flex items-start">
              <Clock className="flex-shrink-0 mt-1 mr-3" style={{ color: "#FF4C00" }} />
              <div>
                <p className="font-semibold">Working Hours</p>
                <p>Mon - Sat: 8:30 AM – 7:30 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Map + Button */}
          <div className="flex flex-col items-center w-full">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.251403570879!2d80.2729147!3d13.1278042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526533fe3d78e5%3A0x301c83fb5f2463ae!2sTOUCH%20MICRO%20SYSTEMS%20SERVICES!5e0!3m2!1sen!2sin!4v1723722000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>

            <a
              href="https://www.google.com/maps/place/TOUCH+MICRO+SYSTEMS+SERVICES/@13.1278042,80.2729147,202m/data=!3m3!1e3!4b1!5s0x3a526581d6062bad:0xfc02aa3c6f657252!4m6!3m5!1s0x3a526533fe3d78e5:0x301c83fb5f2463ae!8m2!3d13.1278029!4d80.2735584!16s%2Fg%2F11hkcdtn60?entry=ttu"
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
