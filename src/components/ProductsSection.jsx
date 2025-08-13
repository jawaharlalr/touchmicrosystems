import React from "react";
import { Laptop, Monitor, Cpu, Printer, Camera, Server } from "lucide-react";

export default function ProductsSection() {
  const products = [
    { name: "Laptop", category: "Computers", icon: <Laptop size={48} /> },
    { name: "Desktop", category: "Computers", icon: <Cpu size={48} /> },
    { name: "Server", category: "Networking", icon: <Server size={48} /> },
    { name: "Printer", category: "Office Equipment", icon: <Printer size={48} /> },
    { name: "CCTV", category: "Security", icon: <Camera size={48} /> },
    { name: "Monitor", category: "Peripherals", icon: <Monitor size={48} /> },
  ];

  return (
    <section className="py-16 bg-[#111827]">
      <div className="max-w-6xl px-6 mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold" style={{ color: "#FF4C00" }}>
          Our Products
        </h2>
        <p className="max-w-3xl mx-auto mb-12 text-lg text-white">
          We provide a wide range of electronics products and services, including laptops, desktops, servers, printers, CCTV systems, and monitors.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 transition border rounded-lg shadow-lg backdrop-blur-md bg-white/20 hover:bg-white/30 border-white/20"
            >
              <div className="mb-4 text-[#FF4C00]">{product.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-white">{product.name}</h3>
              <span className="px-4 py-1 text-sm font-medium rounded-full bg-[#FF4C00] text-white">
                {product.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
