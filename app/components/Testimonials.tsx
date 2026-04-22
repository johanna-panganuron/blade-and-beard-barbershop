const testimonials = [
  {
    name: "Andrei Lim",
    role: "Regular since 2020",
    text: "Best barbershop in Cordova, full stop. Marco knows exactly what I want before I even say it. The hot towel shave is an experience I look forward to every month.",
    rating: 5,
    photo: "/testimonials/andrei_lim.jpg",
  },
  {
    name: "Paolo Dizon",
    role: "Walk-in turned loyalist",
    text: "Walked in on a whim, came out a converted man. The attention to detail here is insane — they noticed my hairline asymmetry and corrected it without me even asking.",
    rating: 5,
    photo: "/testimonials/paolo.png",
  },
  {
    name: "Rafael Medina",
    role: "Client for 3 years",
    text: "I've tried barbershops across Mandaue City and Lapu-Lapu City. Nobody comes close to Blade & Beard's precision. My fade stays clean for two full weeks. That's craftsmanship.",
    rating: 5,
    photo: "/testimonials/rafael.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-ink relative overflow-hidden">
      {/* Background quote mark */}
      <div className="absolute left-0 top-0 font-serif text-[30vw] leading-none text-cream/[0.015] select-none pointer-events-none -translate-y-8">
        "
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="block w-12 h-px bg-gold" />
          <p className="text-gold font-condensed tracking-[0.4em] text-sm">TESTIMONIALS</p>
        </div>
        <h2 className="font-display text-5xl text-cream mb-16 leading-tight">
          What our clients <em className="text-gold">say</em>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`p-8 border transition-colors duration-300 hover:border-gold/30 ${i === 1
                  ? "border-gold/20 bg-gold/5"
                  : "border-cream/10 bg-charcoal"
                }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, si) => (
                  <span key={si} className="text-gold text-sm">★</span>
                ))}
              </div>

              <p className="font-serif text-lg text-cream/70 leading-relaxed mb-8 italic">
                "{t.text}"
              </p>

              <div className="border-t border-cream/10 pt-4 flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-9 h-9 rounded-full object-cover border border-gold/20"
                />
                <div>
                  <p className="font-display text-cream text-sm">{t.name}</p>
                  <p className="text-cream/30 text-xs tracking-wide">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
