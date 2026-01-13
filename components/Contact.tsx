export default function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let&apos;s talk
          </h2>
          <p className="text-neutral-400 text-lg mb-12">
            Have accounts you need sourced? Let&apos;s discuss how we can help.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="tel:+12403898641"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all"
            >
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">(240) 389-8641</span>
            </a>

            <a
              href="mailto:wbarakat94@gmail.com"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all"
            >
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">wbarakat94@gmail.com</span>
            </a>
          </div>

          <div className="max-w-md mx-auto">
            <form action="https://formspree.io/f/xpwzgvvk" method="POST" className="space-y-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-accent focus:outline-none transition-colors placeholder-neutral-600"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-accent focus:outline-none transition-colors placeholder-neutral-600"
              />
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Tell us about your needs..."
                className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-accent focus:outline-none transition-colors placeholder-neutral-600 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-black font-medium py-3 px-6 rounded-lg hover:bg-neutral-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
