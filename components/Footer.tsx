export default function Footer() {
  return (
    <footer className="py-8 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xl font-semibold">WS Logistics</div>
          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-sm text-neutral-600">
            &copy; {new Date().getFullYear()} WS Logistics
          </div>
        </div>
      </div>
    </footer>
  )
}
