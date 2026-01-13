export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Meet the Team Behind WS Logistics
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              WS Logistics was founded to bring a smarter approach to UCO brokerage.
              We combine data-driven decision making with hands-on business expertise
              to deliver logistics that actually work.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Based in the DMV, we understand the local market and are committed to
              building lasting partnerships with restaurants and recyclers alike.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
            >
              Get in touch
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="space-y-6">
            {/* Waleed */}
            <div className="bg-gray-50 rounded-xl p-6 flex items-start space-x-4">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">WB</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Waleed Barakat</h3>
                <p className="text-primary-600 font-medium mb-2">Co-Founder</p>
                <p className="text-gray-600">
                  10 years of experience in data science and analytics. Waleed brings
                  analytical rigor to route optimization, pricing strategies, and
                  operational efficiency.
                </p>
              </div>
            </div>

            {/* Shabnam */}
            <div className="bg-gray-50 rounded-xl p-6 flex items-start space-x-4">
              <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">SQ</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Shabnam Qureshi</h3>
                <p className="text-secondary-600 font-medium mb-2">Co-Founder</p>
                <p className="text-gray-600">
                  8+ years in business management and consulting. Shabnam ensures
                  every client relationship is handled with professionalism and
                  strategic insight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
