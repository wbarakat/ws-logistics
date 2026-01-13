export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'Account Sourcing',
      description: 'We identify, research, and qualify potential accounts in your target market. No cold calling required on your end.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: 'Deal Negotiation',
      description: 'We facilitate introductions and negotiate terms between suppliers and buyers. Fair deals that work for everyone.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Market Expansion',
      description: 'Enter new verticals or territories without building a sales team. We bring the network and relationships.',
    },
  ]

  return (
    <section id="services" className="relative py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-20">
          <p className="text-sm font-medium text-blue-400 mb-3">Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            How we help you grow
          </h2>
          <p className="text-lg text-neutral-400">
            We handle the hard part of business development so you can focus on what you do best.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
