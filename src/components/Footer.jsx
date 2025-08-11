import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="px-4 py-10 mt-auto text-gray-300 bg-gray-900">
      <div className="grid grid-cols-1 gap-10 mx-auto max-w-7xl sm:grid-cols-2 md:grid-cols-3 text-sm sm:text-base">

        {/* Company Info */}
        <div>
          <h4 className="mb-3 text-lg font-bold text-yellow-400">
            TOUCH MICRO SYSTEMS SERVICES
          </h4>
          <p className="text-gray-400">
            Reliable and affordable electronics repair, hardware servicing, software installation, and custom solutions.
          </p>
          <p className="mt-4 text-gray-500 text-sm">
            © {new Date().getFullYear()} TOUCH MICRO SYSTEMS. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-3 text-lg font-bold text-yellow-400">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="inline-block transition-transform duration-200 text-gray-400 hover:text-yellow-400 hover:scale-105"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="inline-block transition-transform duration-200 text-gray-400 hover:text-yellow-400 hover:scale-105"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="inline-block transition-transform duration-200 text-gray-400 hover:text-yellow-400 hover:scale-105"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="mb-3 text-lg font-bold text-yellow-400">Contact</h4>

          <div className="flex items-start gap-2 mb-3">
            <Mail className="mt-1 text-yellow-400" size={18} />
            <a
              href="mailto:info@touchmicro.com"
              className="transition text-gray-400 hover:text-yellow-400 no-underline"
            >
              info@touchmicro.com
            </a>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <Phone className="text-yellow-400" size={18} />
            <a
              href="tel:+919876543210"
              className="transition text-gray-400 hover:text-yellow-400 no-underline"
            >
              +91 98765 43210
            </a>
          </div>

          <div className="flex items-start gap-2 text-gray-400">
            <MapPin className="mt-1 text-yellow-400" size={18} />
            <span>
              2nd floor No 3, 4, Annai Sathya Nagar Main Rd,<br />
              Chennai, Tamil Nadu 600089
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
