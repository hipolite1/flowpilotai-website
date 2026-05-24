"use client";

export default function FlowPilotLandingPage() {
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      business: formData.get("business"),
      service: formData.get("service"),
      industry: formData.get("industry"),
    };

    try {
      const response = await fetch(
        "https://hook.us2.make.com/x3d63hx9wdcb603ta4cnyt2kz3sgctlv",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert("Request submitted successfully!");
        form.reset();
      } else {
        alert("Submission failed.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-4xl font-bold">FlowPilot AI</h1>
            <p className="text-gray-500 text-sm">
              Automate. Respond. Grow.
            </p>
          </div>

          <div className="hidden md:flex gap-10 text-lg font-medium">
            <a href="#services" className="hover:text-blue-600 transition">
              Services
            </a>

            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>

            <a href="#pricing" className="hover:text-blue-600 transition">
              Pricing
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 px-6 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              AI Automation That Helps Local Businesses Capture More Leads
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              FlowPilot AI helps businesses automate lead capture,
              instant SMS alerts, customer follow-ups,
              appointment reminders, and CRM workflows.
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
                className="border border-blue-500 text-blue-100 hover:bg-blue-900 px-8 py-4 rounded-2xl text-lg font-semibold transition"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-blue-800">
            <div className="space-y-5">

              <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-black">
                <h3 className="font-bold text-lg">Lead Captured</h3>
                <p className="text-gray-600">
                  New customer inquiry submitted online.
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-black">
                <h3 className="font-bold text-lg">Instant SMS Alert</h3>
                <p className="text-gray-600">
                  Business owner receives immediate notification.
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100 text-black">
                <h3 className="font-bold text-lg">
                  Automated Follow-Up
                </h3>

                <p className="text-gray-600">
                  Customer receives instant confirmation email and SMS.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Automation Services
            </h2>

            <p className="text-gray-600 text-xl">
              Built for local businesses ready to grow faster.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-8 rounded-3xl shadow-xl border">
              <h3 className="text-2xl font-bold mb-4">
                Lead Follow-Up Automation
              </h3>

              <p className="text-gray-600">
                Automatically respond to leads instantly by SMS and email.
              </p>
            </div>

            <div className="p-8 rounded-3xl shadow-xl border">
              <h3 className="text-2xl font-bold mb-4">
                Appointment Reminder System
              </h3>

              <p className="text-gray-600">
                Reduce no-shows with automated reminders.
              </p>
            </div>

            <div className="p-8 rounded-3xl shadow-xl border">
              <h3 className="text-2xl font-bold mb-4">
                CRM Workflow Automation
              </h3>

              <p className="text-gray-600">
                Organize leads, customers, and tasks automatically.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-4">
            Simple Pricing
          </h2>

          <p className="text-gray-600 text-xl mb-12">
            Affordable automation solutions for local businesses.
          </p>

          <div className="bg-white rounded-3xl shadow-2xl p-12 border">
            <h3 className="text-4xl font-bold mb-4">
              Starter Automation Package
            </h3>

            <p className="text-6xl font-bold text-blue-600 mb-6">
              $297
            </p>

            <ul className="space-y-4 text-lg text-gray-700 mb-10">
              <li>✔ Lead Capture Automation</li>
              <li>✔ SMS Notifications</li>
              <li>✔ Email Follow-Ups</li>
              <li>✔ CRM Integration</li>
            </ul>

            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition"
            >
              Get Started
            </a>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-blue-50">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">
              Get Your Business Automated
            </h2>

            <p className="text-gray-600 text-lg">
              Fill out the form below and FlowPilot AI will contact you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="business"
                placeholder="Business Name"
                required
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            <select
              name="service"
              required
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a Service</option>

              <option value="Lead Follow-Up Automation">
                Lead Follow-Up Automation
              </option>

              <option value="Missed Call Text-Back">
                Missed Call Text-Back
              </option>

              <option value="Appointment Reminder System">
                Appointment Reminder System
              </option>

              <option value="AI Customer Communication">
                AI Customer Communication
              </option>

              <option value="Google Review Request Automation">
                Google Review Request Automation
              </option>

              <option value="CRM Workflow Automation">
                CRM Workflow Automation
              </option>

              <option value="Custom Automation Setup">
                Custom Automation Setup
              </option>
            </select>

            <select
              name="industry"
              required
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Business Type</option>

              <option value="HVAC">HVAC</option>
              <option value="Roofing">Roofing</option>
              <option value="Cleaning Services">
                Cleaning Services
              </option>
              <option value="Plumbing">Plumbing</option>
              <option value="Logistics">Logistics</option>
              <option value="Construction">Construction</option>
              <option value="Trucking">Trucking</option>
              <option value="Contractors">Contractors</option>
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

    </div>
  );
}