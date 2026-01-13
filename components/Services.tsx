export default function Services() {
  const services = [
    {
      title: 'Account Sourcing',
      description: 'We identify and qualify potential accounts in your target market. No cold calling on your end.',
    },
    {
      title: 'Deal Brokerage',
      description: 'We negotiate terms between suppliers and buyers, ensuring both sides get value.',
    },
    {
      title: 'Market Expansion',
      description: 'Enter new markets without building a sales team. We bring the connections.',
    },
  ]

  return (
    <section id="services" className="py-32 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What we do
          </h2>
          <p className="text-neutral-400 text-lg">
            Simple. We connect the right people and make deals happen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all"
            >
              <div className="text-5xl font-bold text-neutral-800 group-hover:text-accent/20 transition-colors mb-6">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
