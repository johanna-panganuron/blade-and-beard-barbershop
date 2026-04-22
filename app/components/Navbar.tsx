"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "About", "Gallery", "Team", "Booking"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-ink/95 backdrop-blur-md border-b border-gold/10" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Blade & Beard Logo"
            className="h-8 w-auto"
          />
          <div>
            <p className="font-condensed text-cream tracking-[0.2em] text-lg leading-none">BLADE & BEARD</p>
            <p className="text-gold text-[9px] tracking-[0.35em] uppercase font-light">Barbershop</p>
          </div>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-cream/60 hover:text-gold text-sm tracking-widest uppercase transition-colors duration-300 font-light"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#booking"
          className="hidden md:block border border-gold text-gold font-condensed tracking-widest text-sm px-6 py-2.5 hover:bg-gold hover:text-ink transition-all duration-300"
        >
          BOOK NOW
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-charcoal border-t border-gold/10 px-6 py-6">
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-cream/70 hover:text-gold text-sm tracking-widest uppercase transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#booking"
            className="mt-6 block border border-gold text-gold font-condensed tracking-widest text-sm px-6 py-3 text-center hover:bg-gold hover:text-ink transition-all duration-300"
          >
            BOOK NOW
          </a>
        </div>
      )}
    </nav>
  );
}
