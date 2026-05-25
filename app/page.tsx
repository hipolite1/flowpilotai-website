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
          <div className="flex items-center gap-4">

  <img
    src="/logo.png"
    alt="FlowPilot AI Logo"
    className="w-16 h-16 rounded-2xl shadow-lg"
  />

  <div>
    <h1 className="text-4xl font-bold text-slate-900">
      FlowPilot AI
    </h1>

    <p className="text-gray-500">
      Automate. Respond. Grow.
    </p>
  </div>

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

    {/* Left Content */}
    <div>

      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
        Turn Missed Calls and Website Visitors Into
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {" "}Paying Customers{" "}
        </span>
        Automatically
      </h1>

      <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
        FlowPilot AI automates lead capture, instant SMS alerts,
        customer follow-ups, appointment reminders, and AI-powered
        business workflows — so you never lose another lead.
      </p>

      <div className="flex flex-wrap gap-4 mb-8">

        <a
  href="https://calendly.com/lite0012/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 hover:shadow-cyan-500/30 shadow-2xl text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300"
>
  Book Free Consultation
</a>

        <a
          href="#services"
          className="border border-blue-500 text-blue-100 hover:bg-blue-900 hover:scale-105 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300"
        >
          View Services
        </a>

      </div>

      <div className="flex flex-wrap gap-6 text-blue-100 text-sm font-medium">

        <div className="flex items-center gap-2">
          <span className="text-cyan-400">✓</span>
          Instant SMS Alerts
        </div>

        <div className="flex items-center gap-2">
          <span className="text-cyan-400">✓</span>
          AI Follow-Ups
        </div>

        <div className="flex items-center gap-2">
          <span className="text-cyan-400">✓</span>
          24/7 Lead Capture
        </div>

        <div className="flex items-center gap-2">
          <span className="text-cyan-400">✓</span>
          CRM Automation
        </div>

      </div>

    </div>

    {/* Right Cards */}
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

      {/* Trust Section */}
<section className="py-16 px-6 bg-white border-b border-gray-100">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold mb-4">
        Built To Help Local Businesses Respond Faster
      </h2>

      <p className="text-gray-600 text-xl max-w-3xl mx-auto">
        FlowPilot AI automates lead capture, customer follow-ups,
        appointment reminders, and business workflows —
        so you never lose another lead.
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl shadow-lg border border-blue-100 hover:scale-105 transition duration-300">
        <h3 className="text-5xl font-bold text-blue-600 mb-3">
          24/7
        </h3>

        <p className="text-gray-700 font-medium">
          Automated Lead Capture
        </p>
      </div>

      <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-3xl shadow-lg border border-cyan-100 hover:scale-105 transition duration-300">
        <h3 className="text-5xl font-bold text-cyan-600 mb-3">
          Instant
        </h3>

        <p className="text-gray-700 font-medium">
          SMS Notifications
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl shadow-lg border border-purple-100 hover:scale-105 transition duration-300">
        <h3 className="text-5xl font-bold text-purple-600 mb-3">
          AI
        </h3>

        <p className="text-gray-700 font-medium">
          Automated Follow-Ups
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl shadow-lg border border-green-100 hover:scale-105 transition duration-300">
        <h3 className="text-5xl font-bold text-green-600 mb-3">
          CRM
        </h3>

        <p className="text-gray-700 font-medium">
          Workflow Automation
        </p>
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

          <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-[40px] shadow-2xl p-12 border border-blue-800 overflow-hidden">

  <div className="absolute top-0 right-0 bg-blue-600 text-white px-5 py-2 rounded-bl-2xl text-sm font-bold tracking-wide">
    MOST POPULAR
  </div>

  <h3 className="text-5xl font-bold mb-4">
    FlowPilot AI Starter System
  </h3>

  <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
    Perfect for local businesses that want faster lead response,
    automated customer follow-ups, and more booked customers.
  </p>

  <p className="text-7xl font-extrabold text-cyan-400 mb-4">
    $297
  </p>

  <p className="text-blue-200 mb-10 text-lg">
    One-Time Setup • No Monthly Contract
  </p>

  <div className="grid md:grid-cols-2 gap-5 text-left max-w-3xl mx-auto mb-12">

    <div className="bg-white/10 rounded-2xl p-5 border border-blue-800">
      ✓ Lead Capture Automation
    </div>

    <div className="bg-white/10 rounded-2xl p-5 border border-blue-800">
      ✓ Instant SMS Notifications
    </div>

    <div className="bg-white/10 rounded-2xl p-5 border border-blue-800">
      ✓ Automated Email Responses
    </div>

    <div className="bg-white/10 rounded-2xl p-5 border border-blue-800">
      ✓ Google Sheets CRM Integration
    </div>

    <div className="bg-white/10 rounded-2xl p-5 border border-blue-800">
      ✓ 24/7 Lead Capture
    </div>

    <div className="bg-white/10 rounded-2xl p-5 border border-blue-800">
      ✓ Twilio SMS Alerts
    </div>

  </div>

  <a
  href="https://calendly.com/lite0012/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 hover:shadow-cyan-500/30 shadow-2xl text-white px-12 py-5 rounded-2xl text-xl font-bold transition-all duration-300"
>
  Book Free Consultation
</a>
  <p className="text-blue-200 text-sm mt-8">
    Built for local businesses that want faster lead response and more conversions.
  </p>

</div>
        </div>
      </section>

      {/* CTA Section */}
<section className="py-24 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">

  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
      Ready To Automate Your Business And Capture More Leads?
    </h2>

    <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-10">
      FlowPilot AI helps local businesses automate lead capture,
      instant SMS notifications, customer follow-ups,
      appointment reminders, and business workflows —
      so you never miss another opportunity.
    </p>

    <div className="flex flex-wrap justify-center gap-5 mb-10">

      <div className="bg-white/10 px-6 py-4 rounded-2xl border border-blue-800">
        ✓ Instant SMS Alerts
      </div>

      <div className="bg-white/10 px-6 py-4 rounded-2xl border border-blue-800">
        ✓ AI Customer Follow-Ups
      </div>

      <div className="bg-white/10 px-6 py-4 rounded-2xl border border-blue-800">
        ✓ 24/7 Lead Capture
      </div>

    </div>

    <a
      href="#contact"
      className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 hover:shadow-cyan-500/30 shadow-2xl text-white px-12 py-5 rounded-2xl text-xl font-bold transition-all duration-300"
    >
      Get Started Today
    </a>

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
      {/* Footer */}
<footer className="bg-slate-950 text-white py-14 px-6 border-t border-blue-900">

  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

    {/* Brand */}
    <div>
      <h2 className="text-3xl font-bold mb-3">
        FlowPilot AI
      </h2>

      <p className="text-blue-200 leading-relaxed">
        AI automation solutions designed to help local businesses
        capture more leads, automate follow-ups,
        and respond faster.
      </p>
    </div>

  {/* Quick Links */}
<div>
  <h3 className="text-xl font-semibold mb-4">
    Quick Links
  </h3>

  <div className="flex flex-col gap-3 text-blue-200">

    <a href="#services" className="hover:text-cyan-400 transition">
      Services
    </a>

    <a href="#pricing" className="hover:text-cyan-400 transition">
      Pricing
    </a>

    <a href="#contact" className="hover:text-cyan-400 transition">
      Contact
    </a>

    <a
      href="/privacy-policy"
      className="hover:text-cyan-400 transition"
    >
      Privacy Policy
    </a>

    <a
      href="/terms-of-service"
      className="hover:text-cyan-400 transition"
    >
      Terms of Service
    </a>

  </div>
</div>

{/* Contact */}
<div>
  <h3 className="text-xl font-semibold mb-4">
    Contact
  </h3>

  <div className="space-y-3 text-blue-200">

    <p>
      info@flowpilotai.com
    </p>

    <p>
      AI-Powered Business Automation
    </p>

    <p>
      Built For Local Businesses
    </p>

  </div>
</div>

</div>

<div className="border-t border-blue-900 mt-12 pt-6 text-center text-blue-300 text-sm">
  © 2026 FlowPilot AI. All rights reserved.
</div>

</footer>

</div>
);
}