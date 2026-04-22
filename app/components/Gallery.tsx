const galleryItems = [
  { label: "Taper Fade", size: "tall", img: "/gallery/TaperFade.png" },
  { label: "Scissor Cut", size: "wide", img: "/gallery/ScissorCut.png" },
  { label: "Beard Sculpt", size: "normal", img: "/gallery/BeardSculpt.png" },
  { label: "Hot Towel Shave", size: "normal", img: "/gallery/HotTowelShave.png" },
  { label: "Classic Pompadour", size: "tall", img: "/gallery/ClassicPompadour.png" },
  { label: "Scalp Treatment", size: "wide", img: "/gallery/ScalpTreatment.png" },
];

const patterns = [
  "repeating-linear-gradient(45deg, #C9A84C08 0px, #C9A84C08 2px, transparent 2px, transparent 12px)",
  "repeating-linear-gradient(-45deg, #C9A84C06 0px, #C9A84C06 2px, transparent 2px, transparent 16px)",
  "radial-gradient(circle at 30% 70%, #C9A84C08 0%, transparent 60%)",
  "repeating-linear-gradient(0deg, #C9A84C05 0px, #C9A84C05 1px, transparent 1px, transparent 20px)",
  "repeating-linear-gradient(90deg, #C9A84C06 0px, #C9A84C06 1px, transparent 1px, transparent 24px)",
  "radial-gradient(circle at 70% 30%, #C9A84C10 0%, transparent 50%)",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="block w-12 h-px bg-gold" />
          <p className="text-gold font-condensed tracking-[0.4em] text-sm">THE WORK</p>
        </div>
        <h2 className="font-display text-5xl text-cream mb-16 leading-tight">
          Cuts that <em className="text-gold">speak</em>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              className="group relative bg-smoke overflow-hidden cursor-pointer"
              style={{ aspectRatio: "3/4" }}
            >
              {/* Real image */}
              {item.img && (
                <img
                  src={item.img}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              {/* Fallback pattern (shown when no image) */}
              {!item.img && (
                <div
                  className="absolute inset-0"
                  style={{ background: patterns[i % patterns.length] }}
                />
              )}
              {/* Simulated image overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/80" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-all duration-300" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-condensed text-cream tracking-widest text-sm">{item.label}</p>
              </div>

              {/* Center icon */}
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 border border-gold/20 flex items-center justify-center">
                  <span className="font-condensed text-gold/20 text-xs">{String(i + 1).padStart(2, "0")}</span>
                </div>
              </div> */}
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-10">
          <p className="text-cream/30 font-serif text-sm italic">
            Add your own photos via the <code className="font-mono text-gold/60 text-xs">/public/gallery</code> folder
          </p>
        </div> */}
      </div>
    </section>
  );
}
