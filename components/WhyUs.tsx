export default function WhyUs() {
  const stats = [
    { value: '10+', label: 'Years Combined Experience' },
    { value: 'DMV', label: 'Regional Focus' },
    { value: '100%', label: 'Commission-Based' },
  ]

  return (
    <section className="py-32 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              We only win when you win
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              No retainers. No monthly fees. We work on commission, which means
              our success is tied directly to yours. If we don&apos;t deliver accounts,
              you don&apos;t pay.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed">
              We bring analytical rigor to prospecting and relationship-driven
              deal-making to closing. It&apos;s a combination that works.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
