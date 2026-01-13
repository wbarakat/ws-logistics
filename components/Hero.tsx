export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-secondary-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-6xl mx-auto px-4 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Your Trusted UCO
            <span className="block text-primary-300">Logistics Partner</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
            Connecting restaurants with recyclers across the DMV.
            Reliable pickups, competitive rates, and service you can count on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-primary-700 hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get a Quote
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
