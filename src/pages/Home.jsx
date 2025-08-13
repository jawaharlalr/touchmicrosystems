import React from "react";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ServicesSection from "../components/ServicesSection";
import ExtraInfo from "../components/ExtraInfo";
import ProductsSection from "../components/ProductsSection";
import AccessoriesSection from "../components/AccessoriesSection";

export default function Home() {
  return (
    <div>
      
      <div className="bg-center bg-cover">
      <HeroSection />
        <ProductsSection />
        <AccessoriesSection />
        <WhyChooseUs />
        <ServicesSection />
        <ExtraInfo />
      </div>
    </div>
  );
}

