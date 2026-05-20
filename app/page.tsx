export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            FlowPilotAI
          </h1>

          <p className="text-2xl md:text-3xl text-blue-300 font-semibold mb-6">
            Lead Follow-Up & Customer Communication Automation
          </p>

          <p className="max-w-3xl mx-auto text-lg text-gray-200 mb-10 leading-relaxed">
            Helping contractors and small businesses automate customer
            communication, lead follow-up, appointment reminders,
            and missed-call responses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-2xl text-lg font-semibold transition">
              Free Consultation
            </button>

            <button className="border border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-2xl text-lg font-semibold transition">
              View Demo
            </button>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Services
            </h2>

            <p className="text-lg text-gray-600">
              Automation systems designed to help businesses respond faster and stay organized.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Lead Follow-Up Automation",
                desc: "Automatically respond to inquiries and improve customer response time.",
              },
              {
                title: "Missed Call Text-Back",
                desc: "Instantly text customers when calls are missed.",
              },
              {
                title: "SMS Reminder Systems",
                desc: "Automated reminders for appointments and follow-ups.",
              },
              {
                title: "Customer Communication",
                desc: "Automate customer responses across communication channels.",
              },
              {
                title: "Lead Tracking",
                desc: "Organize and track incoming customer inquiries.",
              },
              {
                title: "AI Chatbot Setup",
                desc: "Automated responses for common customer questions.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-md border border-gray-100"
              >
                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            How It Works
          </h2>

          <p className="text-lg text-gray-600 mb-14 max-w-3xl mx-auto">
            Simple automation systems that help contractors and small businesses
            improve customer communication and lead response.
          </p>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Customer Calls",
              "Automatic SMS Sent",
              "Lead Captured",
              "Follow-Up Organized",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-slate-900 text-white p-8 rounded-2xl"
              >
                <div className="text-blue-400 text-4xl font-bold mb-4">
                  {index + 1}
                </div>

                <p className="text-lg">
                  {step}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* DEMO SECTION */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            Demo Workflow
          </h2>

          <p className="text-lg text-gray-600 mb-10">
            Example of a contractor missed-call automation workflow.
          </p>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10">

            <div className="grid md:grid-cols-5 gap-4 text-center">

              {[
                "Missed Call",
                "SMS Sent",
                "Lead Captured",
                "Reminder Triggered",
                "Customer Follow-Up",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-blue-50 border border-blue-100 rounded-2xl p-6"
                >
                  <p className="font-semibold text-slate-900">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-600 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-6">
            Ready To Automate Your Business?
          </h2>

          <p className="text-xl text-blue-100 mb-10">
            Let’s simplify your customer communication and help your business respond faster.
          </p>

          <button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 rounded-2xl text-xl font-bold transition">
            Contact FlowPilotAI
          </button>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-gray-400 py-10 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h3 className="text-white text-2xl font-bold mb-2">
            FlowPilotAI
          </h3>

          <p className="mb-2">
            Lead Follow-Up & Customer Communication Automation
          </p>

          <p className="text-sm text-gray-500">
            Helping contractors respond faster and stay organized.
          </p>

        </div>
      </footer>

    </main>
  );
}