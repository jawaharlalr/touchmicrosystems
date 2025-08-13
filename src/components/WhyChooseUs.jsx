import React from "react";
import { Wrench, Monitor, Network, ShieldCheck, Clock, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Wrench,
      title: "Expert Repairs",
      desc: "Our skilled technicians handle everything from Laptop, Desktop and other products with precision and care, using genuine parts for durability."
    },
    {
      icon: Monitor,
      title: "Fast Device Setup",
      desc: "Get your new devices up and running quickly with our hassle-free installation, configuration, and optimization services."
    },
    {
      icon: Network,
      title: "Custom Tech Solutions",
      desc: "We provide tailored hardware and software solutions to suit your business and personal needs, ensuring maximum efficiency."
    },
    {
      icon: ShieldCheck,
      title: "Warranty Assurance",
      desc: "All repairs come with a service warranty for peace of mind, so you can trust the quality of our work."
    },
    {
      icon: Clock,
      title: "Same-Day Service",
      desc: "We value your time. Many of our services are available with same-day completion for your convenience."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Our customer service team is available around the clock to assist with any queries or emergencies."
    }
  ];

  return (
    <section className="py-16 bg-[#111827]">
      <div className="px-6 mx-auto text-center max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold text-white">Why Choose Us?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <div
              key={idx}
              className="p-6 transition border rounded-lg shadow-lg backdrop-blur-md bg-white/20 hover:bg-white/30 border-white/20"
            >
              <Icon className="w-12 h-12 mx-auto mb-4 text-[#FF4C00]" />
              <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
              <p className="text-gray-200">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
