"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ink">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Large decorative number */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-condensed text-[28vw] leading-none text-cream/[0.02] select-none pointer-events-none pr-4">
        01
      </div>

      {/* Gold vertical accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-gold to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-gold font-condensed tracking-[0.4em] text-sm mb-8 animate-fadeUp delay-1">
              EST. 2019 · CORDOVA, CEBU, PHILIPPINES
            </p>

            <h1 className="font-display text-cream leading-[1.05] mb-6">
              <span className="block text-6xl md:text-7xl lg:text-8xl animate-fadeUp delay-2">
                The Art
              </span>
              <span className="block text-6xl md:text-7xl lg:text-8xl italic text-gold animate-fadeUp delay-3">
                of the
              </span>
              <span className="block text-6xl md:text-7xl lg:text-8xl animate-fadeUp delay-4">
                Perfect Cut
              </span>
            </h1>

            <p className="text-cream/50 font-serif text-xl leading-relaxed max-w-md mb-10 animate-fadeUp delay-5">
              Precision grooming for the modern gentleman. Where tradition meets craft, and every visit is a ritual.
            </p>

            <div className="flex flex-wrap items-center gap-4 animate-fadeUp delay-5">
              <a
                href="#booking"
                className="bg-gold text-ink font-condensed tracking-widest text-sm px-8 py-4 hover:bg-gold-light transition-colors duration-300"
              >
                BOOK YOUR SEAT
              </a>
              <a
                href="#services"
                className="border border-cream/20 text-cream/70 font-condensed tracking-widest text-sm px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300"
              >
                OUR SERVICES
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14 animate-fadeUp delay-5">
              {[
                { num: "6+", label: "Years of craft" },
                { num: "2K+", label: "Happy clients" },
                { num: "4", label: "Expert barbers" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-condensed text-3xl text-gold tracking-wide">{stat.num}</p>
                  <p className="text-cream/40 text-xs tracking-widest uppercase mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden md:block">
            {/* Main image placeholder styled as editorial photo frame */}
            <div className="relative aspect-[3/4] max-w-sm ml-auto">
              <div className="absolute inset-0 border border-gold/20" />
              <div className="absolute inset-2 border border-gold/10" />

              {/* Simulated barbershop image with CSS art */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/hero/barbershop-bg.png"
                  alt="Blade & Beard Barbershop"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-ink/30" />
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold" />

              {/* Floating label */}
              <div className="absolute -bottom-5 -left-6 bg-gold px-5 py-3">
                <p className="font-condensed text-ink text-sm tracking-widest">WALK-INS WELCOME</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <p className="text-cream/30 text-[10px] tracking-[0.3em] uppercase">Scroll</p>
        <div className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
