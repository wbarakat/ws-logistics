export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950 to-black"></div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-medium text-neutral-300">Now accepting new clients</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
              Account brokerage
            </span>
            <br />
            <span className="text-neutral-500">for growing businesses</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed">
            We source qualified accounts and broker deals across industries.
            You focus on operations—we handle the pipeline.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-full bg-white text-black hover:bg-neutral-100 transition-all"
            >
              Start a conversation
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-neutral-300 hover:text-white transition-colors"
            >
              How it works
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-neutral-700 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-neutral-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
