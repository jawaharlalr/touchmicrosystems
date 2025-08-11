import { Wrench, Monitor, Network, ShieldCheck, Clock, Headphones } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/herosection.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Your Trusted Electronics Service Partner
          </h1>
          <p className="text-lg text-gray-200 mt-4 max-w-2xl mx-auto">
            From repairs to installations, we provide fast, reliable, and affordable electronics services in Chennai.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Main Content with Home BG */}
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/images/home.jpg')" }}
      >
        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Why Choose Us?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="backdrop-blur-md bg-white/20 p-6 rounded-lg shadow-lg hover:bg-white/30 transition border border-white/20">
                <Wrench className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Expert Repairs</h3>
                <p className="text-gray-200">
                  Our skilled technicians handle everything from smartphones to home appliances with precision and care, using genuine parts for durability.
                </p>
              </div>

              <div className="backdrop-blur-md bg-white/20 p-6 rounded-lg shadow-lg hover:bg-white/30 transition border border-white/20">
                <Monitor className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Fast Device Setup</h3>
                <p className="text-gray-200">
                  Get your new devices up and running quickly with our hassle-free installation, configuration, and optimization services.
                </p>
              </div>

              <div className="backdrop-blur-md bg-white/20 p-6 rounded-lg shadow-lg hover:bg-white/30 transition border border-white/20">
                <Network className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Custom Tech Solutions</h3>
                <p className="text-gray-200">
                  We provide tailored hardware and software solutions to suit your business and personal needs, ensuring maximum efficiency.
                </p>
              </div>

              <div className="backdrop-blur-md bg-white/20 p-6 rounded-lg shadow-lg hover:bg-white/30 transition border border-white/20">
                <ShieldCheck className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Warranty Assurance</h3>
                <p className="text-gray-200">
                  All repairs come with a service warranty for peace of mind, so you can trust the quality of our work.
                </p>
              </div>

              <div className="backdrop-blur-md bg-white/20 p-6 rounded-lg shadow-lg hover:bg-white/30 transition border border-white/20">
                <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Same-Day Service</h3>
                <p className="text-gray-200">
                  We value your time. Many of our services are available with same-day completion for your convenience.
                </p>
              </div>

              <div className="backdrop-blur-md bg-white/20 p-6 rounded-lg shadow-lg hover:bg-white/30 transition border border-white/20">
                <Headphones className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-200">
                  Our customer service team is available around the clock to assist with any queries or emergencies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">
              Our Services
            </h2>
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-white">
              <li className="backdrop-blur-md bg-white/20 p-5 rounded-lg border border-white/20">
                Mobile & Laptop Repairs – Screen, battery, and software fixes.
              </li>
              <li className="backdrop-blur-md bg-white/20 p-5 rounded-lg border border-white/20">
                TV & Home Appliance Services – Installation and troubleshooting.
              </li>
              <li className="backdrop-blur-md bg-white/20 p-5 rounded-lg border border-white/20">
                Network & Wi-Fi Setup – Home and office connectivity solutions.
              </li>
              <li className="backdrop-blur-md bg-white/20 p-5 rounded-lg border border-white/20">
                Data Recovery – Restore lost files securely and efficiently.
              </li>
              <li className="backdrop-blur-md bg-white/20 p-5 rounded-lg border border-white/20">
                Custom PC Builds – Gaming, editing, and business-ready systems.
              </li>
              <li className="backdrop-blur-md bg-white/20 p-5 rounded-lg border border-white/20">
                AMC Plans – Affordable Annual Maintenance Contracts.
              </li>
            </ul>
          </div>
        </section>

        {/* Extra Info */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              Serving Chennai for Over 10 Years
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto mb-12">
              At TOUCH MICRO SYSTEMS SERVICES, we pride ourselves on delivering top-quality electronics services with unbeatable customer support. Our experienced team is dedicated to solving your tech problems quickly, efficiently, and at competitive prices.
            </p>
            <p className="text-gray-200 max-w-4xl mx-auto mb-12">
              Whether you’re an individual looking to repair your phone or a business in need of ongoing IT support, we are your go-to partner for all things electronics. We’ve built a strong reputation in Chennai by combining skilled workmanship, transparency, and a customer-first approach.
            </p>
            <a
              href="/about"
              className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition"
            >
              Learn More About Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
