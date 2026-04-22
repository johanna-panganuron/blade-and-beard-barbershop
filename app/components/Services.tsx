const services = [
  {
    number: "01",
    name: "Signature Cut",
    description: "Our master barbers craft a cut tailored to your face shape, hair texture, and lifestyle. Includes wash, cut, and style.",
    price: "₱380",
    duration: "45 min",
  },
  {
    number: "02",
    name: "The Royal Shave",
    description: "Full hot-towel straight razor shave with pre-shave oil, premium lather, and post-shave balm. Pure ritual.",
    price: "₱320",
    duration: "40 min",
  },
  {
    number: "03",
    name: "Beard Architecture",
    description: "Precise shaping, sculpting, and conditioning of your beard. Lines carved with surgical precision.",
    price: "₱280",
    duration: "30 min",
  },
  {
    number: "04",
    name: "The Full Treatment",
    description: "Cut + shave + beard sculpt. The complete gentleman's package. Walk in. Transform. Walk out.",
    price: "₱880",
    duration: "90 min",
    featured: true,
  },
  {
    number: "05",
    name: "Hair Color & Tone",
    description: "From natural enhancements to bold statements. Grey blending, highlights, or full color — done right.",
    price: "₱650+",
    duration: "60 min",
  },
  {
    number: "06",
    name: "Scalp Ritual",
    description: "Deep cleanse, exfoliation, and nourishing treatment for a healthier scalp. The foundation of great hair.",
    price: "₱420",
    duration: "50 min",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-ink relative">
      {/* Section label */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="block w-12 h-px bg-gold" />
          <p className="text-gold font-condensed tracking-[0.4em] text-sm">OUR SERVICES</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-display text-5xl md:text-6xl text-cream leading-tight max-w-xl">
            Craft services for <br />
            <em className="text-gold">the discerning man</em>
          </h2>
          <p className="text-cream/40 font-serif text-lg max-w-xs">
            Every service is a deliberate act of grooming craft.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
          {services.map((service) => (
            <div
              key={service.number}
              className={`relative p-8 transition-all duration-300 group cursor-pointer ${
                service.featured
                  ? "bg-gold/10 hover:bg-gold/15"
                  : "bg-charcoal hover:bg-smoke"
              }`}
            >
              {service.featured && (
                <div className="absolute top-4 right-4 bg-gold text-ink font-condensed text-[10px] tracking-widest px-3 py-1">
                  POPULAR
                </div>
              )}
              <p className="font-condensed text-gold/30 text-4xl mb-4 group-hover:text-gold/50 transition-colors duration-300">
                {service.number}
              </p>
              <h3 className="font-display text-xl text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                {service.name}
              </h3>
              <p className="text-cream/40 text-sm leading-relaxed mb-6 font-serif">
                {service.description}
              </p>
              <div className="flex items-center justify-between border-t border-cream/10 pt-4">
                <span className="font-condensed text-gold text-xl tracking-wide">{service.price}</span>
                <span className="text-cream/30 text-xs tracking-widest uppercase">{service.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
