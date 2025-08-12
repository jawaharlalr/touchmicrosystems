import { Wrench, Monitor, Network, ShieldCheck, Clock, Headphones } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center h-screen text-center bg-center bg-cover"
        style={{ backgroundImage: "url('/images/herosection.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 px-4">
          <h1 className="text-4xl font-bold text-white md:text-6xl drop-shadow-lg">
            Your Trusted Electronics Service Partner
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-200">
            From repairs to installations, we provide fast, reliable, and affordable electronics services in Chennai.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 mt-6 font-semibold text-gray-900 transition rounded-lg"
            style={{ backgroundColor: "#FF4C00" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e04300")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FF4C00")}
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Main Content with Home BG */}
      <div
        className="bg-center bg-cover"
        style={{ backgroundImage: "url('/images/home.jpg')" }}
      >
        {/* Why Choose Us */}
        <section className="py-16">
          <div className="px-6 mx-auto text-center max-w-7xl">
            <h2 className="mb-8 text-3xl font-bold text-white">
              Why Choose Us?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="p-6 transition border rounded-lg shadow-lg backdrop-blur-md bg-white/20 hover:bg-white/30 border-white/20">
                <Wrench className="w-12 h-12 mx-auto mb-4" style={{ color: "#FF4C00" }} />
                <h3 className="mb-2 text-xl font-semibold text-white">Expert Repairs</h3>
                <p className="text-gray-200">
                  Our skilled technicians handle everything from smartphones to home appliances with precision and care, using genuine parts for durability.
                </p>
              </div>

              <div className="p-6 transition border rounded-lg shadow-lg backdrop-blur-md bg-white/20 hover:bg-white/30 border-white/20">
                <Monitor className="w-12 h-12 mx-auto mb-4" style={{ color: "#FF4C00" }} />
                <h3 className="mb-2 text-xl font-semibold text-white">Fast Device Setup</h3>
                <p className="text-gray-200">
                  Get your new devices up and running quickly with our hassle-free installation, configuration, and optimization services.
                </p>
              </div>

              <div className="p-6 transition border rounded-lg shadow-lg backdrop-blur-md bg-white/20 hover:bg-white/30 border-white/20">
                <Network className="w-12 h-12 mx-auto mb-4" style={{ color: "#FF4C00" }} />
                <h3 className="mb-2 text-xl font-semibold text-white">Custom Tech Solutions</h3>
                <p className="text-gray-200">
                  We provide tailored hardware and software solutions to suit your business and personal needs, ensuring maximum efficiency.
                </p>
              </div>

              <div className="p-6 transition border rounded-lg shadow-lg backdrop-blur-md bg-white/20 hover:bg-white/30 border-white/20">
                <ShieldCheck className="w-12 h-12 mx-auto mb-4" style={{ color: "#FF4C00" }} />
                <h3 className="mb-2 text-xl font-semibold text-white">Warranty Assurance</h3>
                <p className="text-gray-200">
                  All repairs come with a service warranty for peace of mind, so you can trust the quality of our work.
                </p>
              </div>

              <div className="p-6 transition border rounded-lg shadow-lg backdrop-blur-md bg-white/20 hover:bg-white/30 border-white/20">
                <Clock className="w-12 h-12 mx-auto mb-4" style={{ color: "#FF4C00" }} />
                <h3 className="mb-2 text-xl font-semibold text-white">Same-Day Service</h3>
                <p className="text-gray-200">
                  We value your time. Many of our services are available with same-day completion for your convenience.
                </p>
              </div>

              <div className="p-6 transition border rounded-lg shadow-lg backdrop-blur-md bg-white/20 hover:bg-white/30 border-white/20">
                <Headphones className="w-12 h-12 mx-auto mb-4" style={{ color: "#FF4C00" }} />
                <h3 className="mb-2 text-xl font-semibold text-white">24/7 Support</h3>
                <p className="text-gray-200">
                  Our customer service team is available around the clock to assist with any queries or emergencies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white/10">
          <div className="px-6 mx-auto max-w-7xl">
            <h2
              className="mb-8 text-3xl font-bold text-center"
              style={{ color: "#FF4C00" }}
            >
              Our Services
            </h2>
            <ul className="grid gap-6 text-white md:grid-cols-2 lg:grid-cols-3">
              <li className="p-5 border rounded-lg backdrop-blur-md bg-white/20 border-white/20">
                Mobile & Laptop Repairs – Screen, battery, and software fixes.
              </li>
              <li className="p-5 border rounded-lg backdrop-blur-md bg-white/20 border-white/20">
                TV & Home Appliance Services – Installation and troubleshooting.
              </li>
              <li className="p-5 border rounded-lg backdrop-blur-md bg-white/20 border-white/20">
                Network & Wi-Fi Setup – Home and office connectivity solutions.
              </li>
              <li className="p-5 border rounded-lg backdrop-blur-md bg-white/20 border-white/20">
                Data Recovery – Restore lost files securely and efficiently.
              </li>
              <li className="p-5 border rounded-lg backdrop-blur-md bg-white/20 border-white/20">
                Custom PC Builds – Gaming, editing, and business-ready systems.
              </li>
              <li className="p-5 border rounded-lg backdrop-blur-md bg-white/20 border-white/20">
                AMC Plans – Affordable Annual Maintenance Contracts.
              </li>
            </ul>
          </div>
        </section>

        {/* Extra Info */}
        <section className="py-16">
          <div className="max-w-6xl px-6 mx-auto text-center">
            <h2
              className="mb-6 text-3xl font-bold"
              style={{ color: "#FF4C00" }}
            >
              Serving Chennai for Over 10 Years
            </h2>
            <p className="max-w-3xl mx-auto mb-12 text-lg text-white">
              At TOUCH MICRO SYSTEMS SERVICES, we pride ourselves on delivering top-quality electronics services with unbeatable customer support. Our experienced team is dedicated to solving your tech problems quickly, efficiently, and at competitive prices.
            </p>
            <p className="max-w-4xl mx-auto mb-12 text-gray-200">
              Whether you’re an individual looking to repair your phone or a business in need of ongoing IT support, we are your go-to partner for all things electronics. We’ve built a strong reputation in Chennai by combining skilled workmanship, transparency, and a customer-first approach.
            </p>
            <a
              href="/about"
              className="px-8 py-3 font-semibold text-gray-900 transition rounded-lg"
              style={{ backgroundColor: "#FF4C00" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e04300")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FF4C00")}
            >
              Learn More About Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
