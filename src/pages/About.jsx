import { Wrench, Monitor, Cpu, ArrowUp, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function About() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll-to-top button
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
      className="relative bg-cover bg-center bg-fixed min-h-screen"
      style={{ backgroundImage: "url('/images/herosection.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Page Content */}
      <div className="relative max-w-6xl mx-auto text-center text-white pt-32 px-6 pb-16">
        {/* Home Button */}
        <Link
          to="/"
          className="absolute top-20 right-6 bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-2 rounded-lg flex items-center gap-2 font-semibold shadow-lg transition"
        >
          <Home size={18} />
          Home
        </Link>

        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto mb-12">
          For over a decade,{" "}
          <span className="font-semibold">TOUCH MICRO SYSTEMS SERVICES</span>{" "}
          has been a trusted name in electronics repair, setup, and custom tech
          solutions in Chennai. Our experienced team combines expertise with
          genuine customer care.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:bg-opacity-20 transition duration-300">
            <Wrench className="mx-auto text-yellow-400" size={48} />
            <h3 className="font-semibold text-lg mt-6 mb-2">Expert Repairs</h3>
            <p className="text-gray-200 text-sm">
              From smartphones to industrial electronics, we handle repairs with
              precision tools and quality components.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:bg-opacity-20 transition duration-300">
            <Monitor className="mx-auto text-yellow-400" size={48} />
            <h3 className="font-semibold text-lg mt-6 mb-2">Device Setup</h3>
            <p className="text-gray-200 text-sm">
              We set up and optimize smart TVs, networks, and automation
              systems for peak performance.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:bg-opacity-20 transition duration-300">
            <Cpu className="mx-auto text-yellow-400" size={48} />
            <h3 className="font-semibold text-lg mt-6 mb-2">Tech Solutions</h3>
            <p className="text-gray-200 text-sm">
              Need custom software, upgrades, or integrated systems? We deliver
              tailored solutions for your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-full shadow-lg transition"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
