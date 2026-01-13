export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-transparent"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
            Account Brokerage
          </span>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          We find the accounts.
          <span className="block text-neutral-500">You close the deals.</span>
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          WS Logistics connects suppliers with buyers across industries.
          We handle the prospecting, you handle the business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg bg-white text-black hover:bg-neutral-200 transition-all"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg border border-neutral-700 text-white hover:bg-neutral-800 transition-all"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
