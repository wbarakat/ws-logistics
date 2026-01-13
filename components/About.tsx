export default function About() {
  return (
    <section id="about" className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium text-blue-400 mb-3">About</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Data meets relationships
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed mb-6">
              WS Logistics was founded on a simple idea: the best deals happen when the right
              people connect. We combine analytical prospecting with relationship-driven
              deal-making.
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed">
              Based in the DMV, we understand local markets while maintaining a network that
              spans industries. Whether you&apos;re a supplier looking for buyers or a buyer
              needing supply, we make the connection.
            </p>
          </div>

          {/* Team */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <span className="text-sm font-semibold text-white">WB</span>
                </div>
                <div>
                  <h3 className="font-semibold">Waleed Barakat</h3>
                  <p className="text-sm text-neutral-500">Co-Founder</p>
                </div>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                10 years in data science and analytics. Brings systematic market research
                and data-driven prospecting to identify high-value opportunities.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                  <span className="text-sm font-semibold text-white">SQ</span>
                </div>
                <div>
                  <h3 className="font-semibold">Shabnam Qureshi</h3>
                  <p className="text-sm text-neutral-500">Co-Founder</p>
                </div>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                8+ years in business management and consulting. Handles client relationships,
                deal negotiation, and strategic partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
