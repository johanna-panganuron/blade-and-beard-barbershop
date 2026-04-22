const team = [
  {
    name: "Marco Reyes",
    role: "Head Barber & Founder",
    specialty: "Classic Cuts & Razor Work",
    years: "12 yrs",
    initial: "MR",
    photo: "/team/MarcoReyes.webp",
  },
  {
    name: "Luis Santos",
    role: "Senior Barber",
    specialty: "Fades & Modern Styles",
    years: "8 yrs",
    initial: "LS",
    photo: "/team/LuisSantos.webp",
  },
  {
    name: "Dani Flores",
    role: "Barber & Stylist",
    specialty: "Beard Sculpting & Kids",
    years: "7 yrs",
    initial: "DF",
    photo: "/team/DaniFlores.webp",
  },
  {
    name: "Carlo Bautista",
    role: "Color Specialist",
    specialty: "Hair Color & Treatments",
    years: "4 yrs",
    initial: "CB",
    photo: "/team/CarloBautista.webp",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-28 bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="block w-12 h-px bg-gold" />
          <p className="text-gold font-condensed tracking-[0.4em] text-sm">THE CRAFTSMEN</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <h2 className="font-display text-5xl text-cream leading-tight">
            Meet your <em className="text-gold">barbers</em>
          </h2>
          <p className="text-cream/40 font-serif text-lg max-w-xs">
            Every barber is a specialist. No generalists in this shop.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="group">
              {/* Photo */}
              <div className="aspect-[3/4] bg-charcoal relative overflow-hidden mb-5">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <div className="w-20 h-20 rounded-full border border-gold/40 flex items-center justify-center bg-smoke">
                      <span className="font-condensed text-gold text-lg tracking-widest">{member.initial}</span>
                    </div>
                    <p className="text-cream/20 text-xs tracking-widest font-condensed">PHOTO</p>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </div>

              <div>
                <h3 className="font-display text-lg text-cream group-hover:text-gold transition-colors duration-300 mb-1">
                  {member.name}
                </h3>
                <p className="text-gold text-xs font-condensed tracking-widest mb-1">{member.role}</p>
                <p className="text-cream/40 text-xs mb-3">{member.specialty}</p>
                <div className="flex items-center gap-2">
                  <span className="block w-6 h-px bg-gold/40" />
                  <span className="text-cream/30 text-xs tracking-widest font-condensed">{member.years} experience</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
