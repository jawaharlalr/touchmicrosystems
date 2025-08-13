import React from "react";

export default function HeroSection() {
  const brands = [
    { name: "LG", src: "/images/lg.png" },
    { name: "Dell", src: "/images/dell.png" },
    { name: "HP", src: "/images/hp.png" },
    { name: "Acer", src: "/images/acer.png" },
    { name: "Lenovo", src: "/images/lenovo.png" },
    { name: "Samsung", src: "/images/samsung.png", noBlur: true },
    { name: "Asus", src: "/images/asus.png", noBlur: true },
  ];

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-center bg-cover md:px-12"
      style={{ backgroundImage: "url('/images/herosection.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-full px-4 text-center text-white">
        {/* Heading */}
        <h1 className="mb-3 text-2xl font-bold leading-snug sm:text-3xl md:text-5xl lg:text-6xl drop-shadow-lg">
          Your Trusted Electronics Service Partner
        </h1>

        {/* Subtitle */}
        <p className="max-w-lg mx-auto mb-5 text-sm leading-relaxed text-gray-200 sm:text-base md:text-lg lg:text-xl">
          From repairs to installations, we provide fast, reliable, and
          affordable electronics services in Chennai.
        </p>

        {/* CTA Button */}
        <a
          href="#services"
          className="inline-block px-6 py-3 font-semibold text-white transition transform rounded-lg shadow-md hover:scale-105"
          style={{ backgroundColor: "#FF4C00" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#e04300")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#FF4C00")
          }
        >
          Get in Touch
        </a>

        {/* Brand Title */}
        <h2 className="mb-6 text-2xl font-semibold mt-14 sm:text-3xl">
          We Service All Leading Brands
        </h2>

        {/* Carousel */}
        <div className="relative overflow-hidden w-full sm:w-[90%] md:w-[700px] mx-auto">
          {/* Fade Edges */}
          <div className="absolute top-0 left-0 z-20 w-16 h-full pointer-events-none bg-gradient-to-r from-black/50 to-transparent"></div>
          <div className="absolute top-0 right-0 z-20 w-16 h-full pointer-events-none bg-gradient-to-l from-black/50 to-transparent"></div>

          {/* Scrolling Logos */}
          <div className="flex items-center gap-6 animate-scroll-slow">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0 w-24 h-24 p-4 transition-transform bg-white rounded-lg shadow-md hover:scale-110 sm:w-28 sm:h-28"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className={`w-full h-full object-contain ${
                    brand.noBlur ? "" : "blur-[0.3px]"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scrollSlow {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-slow {
          animation: scrollSlow 22s linear infinite;
        }
      `}</style>
    </section>
  );
}
