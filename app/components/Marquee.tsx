export default function Marquee() {
  const items = [
    "Classic Cuts", "Hot Towel Shave", "Beard Sculpting", "Hair Coloring",
    "Fade & Taper", "Scalp Treatment", "Kids Cuts", "Premium Grooming",
  ];

  return (
    <div className="bg-gold py-3 overflow-hidden relative">
      <div className="flex gap-0 animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="font-condensed text-ink tracking-widest text-sm px-6 flex items-center gap-6">
            {item}
            <span className="w-1 h-1 rounded-full bg-ink/40 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}
