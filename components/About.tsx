export default function About() {
  const founders = [
    {
      initials: 'WB',
      name: 'Waleed Barakat',
      role: 'Co-Founder',
      description: '10 years in data science and analytics. Brings systematic prospecting and market analysis.',
    },
    {
      initials: 'SQ',
      name: 'Shabnam Qureshi',
      role: 'Co-Founder',
      description: '8+ years in business management and consulting. Handles relationships and deal negotiation.',
    },
  ]

  return (
    <section id="about" className="py-32 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Who we are
          </h2>
          <p className="text-neutral-400 text-lg">
            Two founders. Data meets deals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <span className="text-lg font-semibold text-accent">{founder.initials}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{founder.name}</h3>
                  <p className="text-sm text-neutral-500">{founder.role}</p>
                </div>
              </div>
              <p className="text-neutral-400 leading-relaxed">{founder.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
