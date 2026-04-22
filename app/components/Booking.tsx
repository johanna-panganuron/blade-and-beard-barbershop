"use client";
import { useState } from "react";

const services = [
  "Signature Cut",
  "The Royal Shave",
  "Beard Architecture",
  "The Full Treatment",
  "Hair Color & Tone",
  "Scalp Ritual",
];

const barbers = ["No Preference", "Marco Reyes", "Luis Santos", "Carlo Bautista", "Dani Flores"];
const times = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-28 bg-charcoal relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div className="pt-4">
            <div className="flex items-center gap-4 mb-4">
              <span className="block w-12 h-px bg-gold" />
              <p className="text-gold font-condensed tracking-[0.4em] text-sm">RESERVATIONS</p>
            </div>
            <h2 className="font-display text-5xl text-cream leading-tight mb-6">
              Reserve your <br /><em className="text-gold">seat</em>
            </h2>
            <p className="text-cream/40 font-serif text-lg leading-relaxed mb-12">
              Walk-ins are always welcome, but booking ahead ensures you get your preferred barber and time slot.
            </p>

            <div className="space-y-8">
              {[
                { label: "Location", value: "Bernardo Nuñez St, Poblacion, Cordova, 6017 Cebu" },
                { label: "Hours", value: "Tue – Sun: 9AM – 7PM\nMonday: Closed" },
                { label: "Phone", value: "+63 949 128 0100" },
                { label: "Email", value: "hello@bladeandbeardph.com" },
              ].map((info) => (
                <div key={info.label} className="flex gap-6">
                  <p className="font-condensed text-gold tracking-widest text-xs w-20 shrink-0 pt-0.5">{info.label}</p>
                  <p className="text-cream/60 text-sm leading-relaxed whitespace-pre-line">{info.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-ink border border-cream/10 p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 border border-gold flex items-center justify-center mx-auto mb-6">
                  <span className="text-gold text-2xl">✓</span>
                </div>
                <h3 className="font-display text-2xl text-cream mb-3">Booking Confirmed</h3>
                <p className="text-cream/40 font-serif mb-6">
                  We'll send a confirmation to your email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="border border-gold/30 text-gold/60 font-condensed tracking-widest text-xs px-6 py-3 hover:border-gold hover:text-gold transition-all"
                >
                  BOOK ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-condensed text-cream tracking-widest text-lg mb-6">YOUR DETAILS</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cream/40 text-xs tracking-widest uppercase mb-2 font-condensed">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-charcoal border border-cream/10 text-cream text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-cream/20"
                      placeholder="Johanna"
                    />
                  </div>
                  <div>
                    <label className="block text-cream/40 text-xs tracking-widest uppercase mb-2 font-condensed">Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-charcoal border border-cream/10 text-cream text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-cream/20"
                      placeholder="Panganuron"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-cream/40 text-xs tracking-widest uppercase mb-2 font-condensed">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-charcoal border border-cream/10 text-cream text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-cream/20"
                    placeholder="+63 9XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-cream/40 text-xs tracking-widest uppercase mb-2 font-condensed">Service</label>
                  <select
                    required
                    className="w-full bg-charcoal border border-cream/10 text-cream text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                  >
                    <option value="">Select a service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cream/40 text-xs tracking-widest uppercase mb-2 font-condensed">Barber</label>
                    <select
                      className="w-full bg-charcoal border border-cream/10 text-cream text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                    >
                      {barbers.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-cream/40 text-xs tracking-widest uppercase mb-2 font-condensed">Time</label>
                    <select
                      required
                      className="w-full bg-charcoal border border-cream/10 text-cream text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                    >
                      <option value="">Select time</option>
                      {times.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-cream/40 text-xs tracking-widest uppercase mb-2 font-condensed">Date</label>
                  <input
                    type="date"
                    required
                    className="w-full bg-charcoal border border-cream/10 text-cream text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-ink font-condensed tracking-widest text-sm py-4 hover:bg-gold-light transition-colors duration-300 mt-2"
                >
                  CONFIRM RESERVATION
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
