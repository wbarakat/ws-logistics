export default function WhyUs() {
  const features = [
    {
      title: 'Commission-based',
      description: 'No retainers, no monthly fees. We only get paid when you close deals.',
      highlight: '100%',
    },
    {
      title: 'Data-driven',
      description: 'Systematic prospecting backed by analytics. We find the right accounts, not just any accounts.',
      highlight: 'Targeted',
    },
    {
      title: 'Relationship-focused',
      description: 'Real introductions, real conversations. Not spam, not automation.',
      highlight: 'Personal',
    },
  ]

  return (
    <section className="py-32 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-sm font-medium text-blue-400 mb-3">Why work with us</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Aligned incentives, better outcomes
          </h2>
          <p className="text-lg text-neutral-400">
            Our success is tied directly to yours. If we don&apos;t deliver, you don&apos;t pay.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-4">
                {feature.highlight}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
