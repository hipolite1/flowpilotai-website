export default function FlowPilotLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/logo2s.png"
              alt="FlowPilot AI Logo"
              className="w-14 h-14 rounded-full shadow-md"
            />
            <div>
              <h1 className="text-2xl font-bold">FlowPilot AI</h1>
              <p className="text-sm text-gray-500">Automate. Respond. Grow.</p>
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-gray-700 font-medium">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 px-6 text-white">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/banner.png')" }} />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/banner.png"
              alt="FlowPilot AI Banner"
              className="w-full rounded-3xl shadow-2xl border border-blue-900 mb-10"
            />

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              AI Automation That Helps Local Businesses Capture More Leads
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              FlowPilot AI helps businesses automate lead capture, instant SMS alerts,
              customer follow-ups, appointment reminders, and CRM workflows.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg transition"
              >
                Get Started
              </a>

              <a
                href="#services"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-2xl text-lg font-semibold transition"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-blue-800">
            <div className="space-y-5">
              <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
                <h3 className="font-bold text-lg">Lead Captured</h3>
                <p className="text-gray-600">New customer inquiry submitted online.</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <h3 className="font-bold text-lg">Instant SMS Alert</h3>
                <p className="text-gray-600">Business owner receives immediate notification.</p>
              </div>

              <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100">
                <h3 className="font-bold text-lg">Automated Follow-Up</h3>
                <p className="text-gray-600">Customer receives instant confirmation email and SMS.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">Services</h2>
            <p className="text-gray-600 text-lg">
              Automation systems built for service businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Lead Automation",
                text: "Capture leads instantly from forms, websites, and landing pages.",
              },
              {
                title: "SMS Notifications",
                text: "Receive instant SMS alerts whenever a new lead comes in.",
              },
              {
                title: "AI Follow-Ups",
                text: "Automatically respond to customers and nurture leads.",
              },
              {
                title: "Appointment Reminders",
                text: "Reduce no-shows using automated reminders and confirmations.",
              },
              {
                title: "CRM Integration",
                text: "Organize customer data into Google Sheets and CRM workflows.",
              },
              {
                title: "Custom Automation",
                text: "Tailored automations for your industry and business operations.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Industries We Help</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "HVAC",
              "Roofing",
              "Cleaning Services",
              "Plumbing",
              "Logistics",
              "Construction",
              "Trucking",
              "Contractors",
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bg-blue-50 py-6 rounded-2xl font-semibold text-lg"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg">
              Simple automation built for business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Customer submits a lead form",
              "Lead instantly enters your CRM",
              "You receive email and SMS alerts",
              "Customer receives automated follow-up",
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-md text-center"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                  {idx + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-gray-600 text-lg">
              Flexible automation packages for growing businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$297",
                features: [
                  "Lead Forms",
                  "Email Notifications",
                  "Google Sheets CRM",
                ],
              },
              {
                name: "Growth",
                price: "$697",
                features: [
                  "SMS Notifications",
                  "Automated Follow-Ups",
                  "Appointment Reminders",
                ],
              },
              {
                name: "Pro Automation",
                price: "$1500+",
                features: [
                  "AI Automation",
                  "Custom Workflows",
                  "Business Process Automation",
                ],
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
                <p className="text-5xl font-bold text-blue-600 mb-8">{plan.price}</p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray-700">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold transition">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 bg-blue-50">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">Get Your Business Automated</h2>
            <p className="text-gray-600 text-lg">
              Fill out the form below and FlowPilot AI will contact you.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Business Name"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <select className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select Service Needed</option>
              <option>SMS Campaigns</option>
              <option>Appointment Reminders</option>
              <option>Lead Follow-Up</option>
              <option>AI Chatbot</option>
            </select>

            <select className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select Business Type</option>
              <option>HVAC</option>
              <option>Roofing</option>
              <option>Cleaning Services</option>
              <option>Plumbing</option>
              <option>Logistics</option>
              <option>Construction</option>
            </select>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl text-lg font-bold shadow-lg transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <img
                src="/logo.png"
                alt="FlowPilot AI Logo"
                className="w-14 h-14 rounded-full"
              />
              <h3 className="text-2xl font-bold">FlowPilot AI</h3>
            </div>
            <p className="text-gray-400 mt-2">
              AI automation systems for modern businesses.
            </p>
          </div>

          <div className="text-gray-400 text-sm">
            © 2026 FlowPilot AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
