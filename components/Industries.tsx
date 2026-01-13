export default function Industries() {
  const industries = [
    'Recycling & Waste',
    'Energy & Fuel',
    'Food Services',
    'Manufacturing',
    'Distribution',
    'Logistics',
  ]

  return (
    <section className="py-20 bg-black border-y border-neutral-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <p className="text-sm text-neutral-500 uppercase tracking-wider">
            Industries we serve
          </p>
          <div className="flex flex-wrap gap-3">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm text-neutral-400 rounded-full border border-neutral-800 bg-neutral-900/30"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
