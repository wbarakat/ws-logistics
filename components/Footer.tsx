export default function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-neutral-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} WS Logistics. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <a href="#services" className="hover:text-neutral-300 transition-colors">Services</a>
            <a href="#about" className="hover:text-neutral-300 transition-colors">About</a>
            <a href="#contact" className="hover:text-neutral-300 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
