export default function Footer() {
  return (
    <footer className="bg-ink border-t border-cream/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
            <img
  src="/logo.png"
  alt="Blade & Beard Logo"
  className="h-8 w-auto"
/>
              <div>
                <p className="font-condensed text-cream tracking-[0.2em] text-base leading-none">BLADE & BEARD</p>
                <p className="text-gold text-[9px] tracking-[0.35em] uppercase">Barbershop</p>
              </div>
            </div>
            <p className="text-cream/30 text-sm font-serif leading-relaxed">
              Precision grooming for the modern gentleman. Est. 2019.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-condensed text-cream tracking-widest text-xs mb-4">NAVIGATE</p>
            <ul className="space-y-2">
              {["Services", "About", "Gallery", "Team", "Booking"].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-cream/40 text-sm hover:text-gold transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <p className="font-condensed text-cream tracking-widest text-xs mb-4">HOURS</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-cream/40">Tue – Fri</span>
                <span className="text-cream/60">9AM – 7PM</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-cream/40">Sat – Sun</span>
                <span className="text-cream/60">8AM – 8PM</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-cream/40">Monday</span>
                <span className="text-gold/60">Closed</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="font-condensed text-cream tracking-widest text-xs mb-4">FOLLOW</p>
            <div className="space-y-2">
              {["Instagram", "Facebook", "TikTok"].map(social => (
                <a
                  key={social}
                  href="#"
                  className="block text-cream/40 text-sm hover:text-gold transition-colors duration-300"
                >
                  @bladeandbeardph
                  <span className="text-cream/20 ml-2">← {social}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cream/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/20 text-xs tracking-widest">
            © 2026 BLADE & BEARD BARBERSHOP. ALL RIGHTS RESERVED.
          </p>
          <p className="text-cream/10 text-xs">
            <a 
              href="https://johanna-panganuron.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors duration-300"
            >
             Developed by Johanna B. Panganuron
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}