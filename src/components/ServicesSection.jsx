import React from "react";

export default function ServicesSection() {
  const services = [
    "Laptop Chip Level Service",
    "Desktop Chip Level Service",
    "Printer Service",
    "CCTV Service",
    "Data Recovery",
    "Laptop Upgrade",
    "Desktop Upgrade"
  ];

  return (
    <section className="py-16 bg-[#111827]">
      <div className="px-6 mx-auto text-center max-w-7xl">
        <h2
          className="mb-8 text-3xl font-bold"
          style={{ color: "#FF4C00" }}
        >
          Our Services
        </h2>
        <ul className="grid gap-6 text-white md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <li
              key={idx}
              className="p-5 text-center transition border rounded-lg shadow-lg backdrop-blur-md bg-white/20 hover:bg-white/30 border-white/20"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
