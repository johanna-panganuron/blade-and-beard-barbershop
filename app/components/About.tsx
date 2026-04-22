export default function About() {
  return (
    <section id="about" className="py-28 bg-charcoal relative overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute right-0 top-0 font-condensed text-[20vw] leading-none text-cream/[0.015] select-none pointer-events-none">
        SINCE
      </div>
      <div className="absolute right-4 top-16 font-condensed text-[18vw] leading-none text-gold/[0.06] select-none pointer-events-none">
        2019
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Editorial image block */}
          <div className="relative">
            <div className="aspect-square max-w-md bg-smoke relative overflow-hidden">
              <img
                src="/about/interior.webp"
                alt="Blade & Beard Interior"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/20" />
              {/* Gold frame accent */}
              <div className="absolute top-4 left-4 w-16 h-16 border-t border-l border-gold/60" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b border-r border-gold/60" />
            </div>

            {/* Floating quote card */}
            <div className="absolute -bottom-6 -right-0 md:-right-8 bg-ink border border-gold/20 p-6 max-w-xs">
              <p className="font-serif text-lg italic text-cream/80 leading-relaxed mb-3">
                "A man who looks good feels good. A man who feels good conquers the world."
              </p>
              <p className="text-gold font-condensed tracking-widest text-xs">— MARCO REYES, FOUNDER</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="pt-8 md:pt-0">
            <div className="flex items-center gap-4 mb-4">
              <span className="block w-12 h-px bg-gold" />
              <p className="text-gold font-condensed tracking-[0.4em] text-sm">OUR STORY</p>
            </div>

            <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight mb-8">
              More than a cut.
              <br />
              <em className="text-gold">It's a ritual.</em>
            </h2>

            <div className="space-y-5 text-cream/50 font-serif text-lg leading-relaxed mb-10">
              <p>
                Blade & Beard was born from a simple belief: every man deserves to sit in a chair where skill, patience, and pride come together in a single scissor stroke.
              </p>
              <p>
                Since 2019, we've been the go-to grooming destination for Cordova's discerning gentlemen — blending old-school barbershop tradition with modern precision and care.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Master Barbers", value: "4" },
                { label: "Awards Won", value: "8" },
                { label: "Cups of Coffee Served", value: "∞" },
                { label: "Repeat Clients", value: "87%" },
              ].map((item) => (
                <div key={item.label} className="border-l border-gold/30 pl-4">
                  <p className="font-condensed text-3xl text-gold">{item.value}</p>
                  <p className="text-cream/40 text-xs tracking-widest uppercase mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
