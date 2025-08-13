import React from "react";

export default function AccessoriesSection() {
  const laptopAccessories = [
    "Laptop RAM",
    "Hard Disk",
    "SATA SSD",
    "NVMe SSD",
    "Laptop Screen",
    "Laptop Battery",
    "Laptop Adaptor",
    "Laptop Power Cable",
    "Laptop Motherboard",
    "Laptop Panel",
    "Laptop Display Cable",
    "Laptop Keyboard"
  ];

  const desktopAccessories = [
    "Desktop Motherboard",
    "Desktop RAM",
    "Desktop Hard Disk",
    "Desktop SATA SSD",
    "Desktop Fan",
    "Desktop Processor",
    "Desktop SMPS",
    "Desktop Keyboard & Mouse",
    "Desktop Graphics Card",
    "Desktop Cabinet",
    "Gaming Cabinet",
    "Gaming Keyboard & Mouse"
  ];

  return (
    <section className="py-16 bg-[#111827]">
      <div className="max-w-6xl px-6 mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold" style={{ color: "#FF4C00" }}>
          Laptop & Desktop Accessories
        </h2>
        <p className="max-w-3xl mx-auto mb-12 text-lg text-white">
          We offer a wide range of laptop and desktop accessories for sale.
        </p>

        <h3 className="mb-4 text-xl font-semibold text-[#FF4C00]">Laptop Accessories</h3>
        <ul className="grid gap-4 mb-12 md:grid-cols-2 lg:grid-cols-3">
          {laptopAccessories.map((item, idx) => (
            <li
              key={idx}
              className="p-4 text-white transition border rounded-lg backdrop-blur-md bg-white/10 hover:bg-white/20"
            >
              {item}
            </li>
          ))}
        </ul>

        <h3 className="mb-4 text-xl font-semibold text-[#FF4C00]">Desktop Accessories</h3>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {desktopAccessories.map((item, idx) => (
            <li
              key={idx}
              className="p-4 text-white transition border rounded-lg backdrop-blur-md bg-white/10 hover:bg-white/20"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
