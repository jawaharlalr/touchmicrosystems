import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import HeroSection from "../components/sections/HeroSection";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ServicesSection from "../components/sections/ServicesSection";
import ExtraInfo from "../components/sections/ExtraInfo";
import ProductsSection from "../components/sections/ProductsSection";
import AccessoriesSection from "../components/sections/AccessoriesSection";
import SecondHandProducts from "../components/sections/SecondHandProducts";
import Gallery from "../components/sections/gallery";

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative">
      {/* Hero Section - no background image here */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* All other sections with background image */}
      <div
        className="bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/home.jpg')",
        }}
      >

        {/* Services Section */}
        <div id="services">
          <Gallery />
        </div>

        
        {/* Services Section */}
        <div id="services">
          <ServicesSection />
        </div>

        {/* Products Section */}
        <div id="products">
          <ProductsSection />
        </div>

        {/* Second Hand Products Section */}
        <div id="secondhand">
          <SecondHandProducts />
        </div>

        {/* Accessories Section */}
        <div id="accessories">
          <AccessoriesSection />
        </div>

        {/* Why Choose Us */}
        <div id="whychooseus">
          <WhyChooseUs />
        </div>

        {/* Extra Info */}
        <ExtraInfo />
      </div>

      {/* Scroll To Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#FF4C00] text-white shadow-lg hover:bg-[#e04300] transition-all duration-300 animate-bounce"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
