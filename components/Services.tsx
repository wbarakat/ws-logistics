export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Services for Every Side of the Supply Chain
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you generate UCO or process it, we make logistics simple.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* For Restaurants */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
            <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For Restaurants</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Reliable Pickups</strong> — Never worry about missed collections</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Competitive Rates</strong> — Get the best value for your UCO</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Flexible Scheduling</strong> — Pickups on your timeline</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Clean Equipment</strong> — Professional containers provided</span>
              </li>
            </ul>
          </div>

          {/* For Recyclers */}
          <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-8 border border-secondary-200">
            <div className="w-14 h-14 bg-secondary-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For Recyclers</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-secondary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Consistent Supply</strong> — Steady stream of quality UCO</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-secondary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Quality Accounts</strong> — Vetted restaurant partners</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-secondary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Simplified Sourcing</strong> — We handle the legwork</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-secondary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Scalable Volume</strong> — Grow your supply as needed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
