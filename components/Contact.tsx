export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-blue-400 mb-3">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Let&apos;s talk about your needs
            </h2>
            <p className="text-lg text-neutral-400">
              Ready to explore new accounts? Reach out and we&apos;ll discuss how we can help.
            </p>
          </div>

          {/* Contact options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+12403898641"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-neutral-900/50 border border-neutral-800/50 hover:border-neutral-700 transition-all"
            >
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-neutral-300">(240) 389-8641</span>
            </a>
            <a
              href="mailto:wbarakat94@gmail.com"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-neutral-900/50 border border-neutral-800/50 hover:border-neutral-700 transition-all"
            >
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-neutral-300">wbarakat94@gmail.com</span>
            </a>
          </div>

          {/* Form */}
          <form action="https://formspree.io/f/xpwzgvvk" method="POST" className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="w-full px-4 py-3 rounded-xl bg-neutral-900/50 border border-neutral-800/50 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all placeholder-neutral-600 text-sm"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-neutral-900/50 border border-neutral-800/50 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all placeholder-neutral-600 text-sm"
              />
            </div>
            <input
              type="text"
              name="company"
              placeholder="Company (optional)"
              className="w-full px-4 py-3 rounded-xl bg-neutral-900/50 border border-neutral-800/50 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all placeholder-neutral-600 text-sm"
            />
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Tell us about your business and what you're looking for..."
              className="w-full px-4 py-3 rounded-xl bg-neutral-900/50 border border-neutral-800/50 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all placeholder-neutral-600 text-sm resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-100 transition-colors"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
