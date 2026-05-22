import React from "react";

const iconPaths = {
  alarm: (
    <>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v5l3 2" />
      <path d="M5 3 2 6" />
      <path d="m19 3 3 3" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </>
  ),
  battery: (
    <>
      <rect x="3" y="7" width="16" height="10" rx="2" />
      <path d="M21 11v2" />
      <path d="m11 9-2 3h3l-2 3" />
    </>
  ),
  cable: (
    <>
      <path d="M7 7h10" />
      <path d="M7 17h10" />
      <path d="M7 7v10" />
      <path d="M17 7v10" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
    </>
  ),
  car: (
    <>
      <path d="M5 17h14" />
      <path d="M7 17v2" />
      <path d="M17 17v2" />
      <path d="m6 13 2-5h8l2 5" />
      <path d="M6 13h12v4H6z" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  chevron: <path d="m9 18 6-6-6-6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  key: (
    <>
      <circle cx="7.5" cy="14.5" r="3.5" />
      <path d="m10 12 9-9" />
      <path d="m15 6 3 3" />
      <path d="m17 4 3 3" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s7-4.5 7-11a7 7 0 0 0-14 0c0 6.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  message: (
    <>
      <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-5.2A8.5 8.5 0 1 1 21 11.5z" />
      <path d="M8 10h8" />
      <path d="M8 14h5" />
    </>
  ),
  navigation: (
    <>
      <path d="m12 2 8 20-8-4-8 4 8-20z" />
      <path d="M12 2v16" />
    </>
  ),
  phone: (
    <>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3 9.7 9.7 3 12l6.7 2.3L12 21l2.3-6.7L21 12l-6.7-2.3L12 3z" />
      <path d="M5 3v4" />
      <path d="M3 5h4" />
    </>
  ),
  speaker: (
    <>
      <path d="M4 9v6h4l5 4V5L8 9H4z" />
      <path d="M17 9.5a4 4 0 0 1 0 5" />
      <path d="M19.5 7a8 8 0 0 1 0 10" />
    </>
  ),
  truck: (
    <>
      <path d="M3 7h11v10H3z" />
      <path d="M14 10h4l3 3v4h-7z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-3-3 2.4-2.4z" />
    </>
  )
};

function Icon({ name, className = "h-5 w-5", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {iconPaths[name]}
    </svg>
  );
}

const business = {
  phoneDisplay: "078 519 6965",
  phoneHref: "tel:+27785196965",
  whatsappHref: "https://wa.me/27785196965",
  address: "9 Kruger St, Central, Krugersdorp, 1739",
  mapsQuery: "9%20Kruger%20St%2C%20Central%2C%20Krugersdorp%2C%201739",
  hours: "Mon - Sat: 08:00 - 17:30"
};

const services = [
  {
    title: "Car Sound & Custom Setups",
    description: "Amplifiers, speakers, custom boot builds, clean installs, and tuned audio upgrades.",
    icon: "speaker",
    accent: "from-cyan-400 to-blue-500"
  },
  {
    title: "Vehicle Security & Self-Tracking",
    description: "Alarms, anti-hijack systems, central locking, immobilisers, and tracking devices.",
    icon: "shield",
    accent: "from-blue-400 to-indigo-500"
  },
  {
    title: "Auto-Electrical & Re-Wiring",
    description: "Diagnostics, fault finding, loom repairs, custom wiring, and electrical restorations.",
    icon: "cable",
    accent: "from-sky-400 to-cyan-500"
  },
  {
    title: "On-Board Diagnosis & Key Coding",
    description: "Transponder keys, remote coding, error-code clearing, and electronic module checks.",
    icon: "key",
    accent: "from-cyan-300 to-teal-400"
  },
  {
    title: "Popped Airbag Replacement",
    description: "Safety system restoration, airbag replacement support, and warning-light resolution.",
    icon: "car",
    accent: "from-blue-300 to-cyan-500"
  },
  {
    title: "Roof Lining Restoration",
    description: "Sagging roof lining repairs, cabin fabric replacement, and interior finish refreshes.",
    icon: "sparkle",
    accent: "from-teal-300 to-cyan-500"
  },
  {
    title: "Transportation & Towing",
    description: "Scheduled vehicle transport and recovery support across Krugersdorp and the West Rand.",
    icon: "truck",
    accent: "from-cyan-400 to-sky-500"
  },
  {
    title: "Workshop Diagnostics",
    description: "Practical advice, inspection, and repair planning for complex vehicle electrical faults.",
    icon: "wrench",
    accent: "from-blue-400 to-cyan-400"
  }
];

const galleryCategories = [
  {
    title: "Sound & Audio",
    description: "Custom boot layouts, speaker upgrades, amplifier installations, and neat wiring finishes.",
    icon: "speaker"
  },
  {
    title: "Security & Electrical",
    description: "Alarm systems, tracking devices, key coding, diagnostics, and electrical repair work.",
    icon: "lock"
  },
  {
    title: "Interior Restoration",
    description: "Roof lining repairs, trim refreshes, cabin fabric replacement, and restoration results.",
    icon: "sparkle"
  }
];

function Header() {
  const links = [
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/40 bg-cyan-400/10 shadow-glow">
            <Icon name="battery" className="h-5 w-5 text-cyan-300" />
          </span>
          <span className="text-base font-black uppercase tracking-wide sm:text-lg">Sound Mapricado</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-cyan-300">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={business.phoneHref}
          className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 shadow-glow transition hover:bg-cyan-300"
        >
          <Icon name="phone" className="h-4 w-4" />
          Call Now
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-slate-950">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.20),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.70),rgba(2,6,23,1))]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

      <div className="mx-auto grid min-h-[calc(100vh-68px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            <Icon name="shield" className="h-4 w-4" />
            West Rand vehicle security, audio, electrical and restoration workshop
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-none text-white sm:text-6xl lg:text-7xl">
            Sound Mapricado
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            Premium Car Audio, Advanced Vehicle Security & Specialized Auto-Electrical Services in Krugersdorp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
            >
              View Services
              <Icon name="chevron" className="h-4 w-4" />
            </a>
            <a
              href={business.whatsappHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-400 px-6 py-3 text-sm font-black text-slate-950 shadow-glow transition hover:bg-cyan-300"
            >
              <Icon name="message" className="h-4 w-4" />
              Get a Quote via WhatsApp
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-slate-900 shadow-2xl">
            <div className="flex h-full flex-col justify-between bg-[linear-gradient(145deg,rgba(30,41,59,0.92),rgba(15,23,42,0.96)),repeating-linear-gradient(90deg,rgba(34,211,238,0.10)_0,rgba(34,211,238,0.10)_1px,transparent_1px,transparent_52px)] p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div className="rounded-md border border-cyan-300/30 bg-slate-950/70 px-3 py-2 text-xs font-bold uppercase text-cyan-200">
                  Precision Workshop
                </div>
                <Icon name="alarm" className="h-8 w-8 text-cyan-300" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {["Audio", "Security", "Diagnostics", "Restoration"].map((item) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-slate-950/60 p-4">
                    <Icon name="check" className="mb-3 h-5 w-5 text-cyan-300" />
                    <p className="text-sm font-bold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-slate-900 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Services</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">More than sound. Built for every essential vehicle system.</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            From clean audio installs to anti-hijack systems, key coding, wiring faults, safety repairs, and interior restoration, Sound Mapricado gives Krugersdorp drivers one workshop for the work that keeps vehicles usable, secure, and sharp.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            return (
              <article key={service.title} className="group rounded-lg border border-white/10 bg-slate-950/70 p-5 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-glow">
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${service.accent}`}>
                  <Icon name={service.icon} className="h-6 w-6 text-slate-950" />
                </div>
                <h3 className="text-lg font-black text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Portfolio</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Ready for real Facebook and WhatsApp job photos.</h2>
          </div>
          <p className="text-base leading-7 text-slate-300">
            The gallery is structured around the three service groups customers need to understand fast: audio, security and electrical, and interior restoration.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {galleryCategories.map((category, index) => {
            return (
              <article key={category.title} className="overflow-hidden rounded-lg border border-white/10 bg-slate-900">
                <div className="flex aspect-[4/3] items-center justify-center bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(30,41,59,0.92)),repeating-linear-gradient(45deg,rgba(148,163,184,0.10)_0,rgba(148,163,184,0.10)_1px,transparent_1px,transparent_18px)]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-300/30 bg-slate-950/80">
                    <Icon name={category.icon} className="h-9 w-9 text-cyan-300" />
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Gallery {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-xl font-black text-white">{category.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{category.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-slate-900 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Contact & Location</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Book diagnostics, installation, restoration, or towing support.</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Call or WhatsApp Sound Mapricado for vehicle audio, security, auto-electrical, key coding, and restoration services in Krugersdorp.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a href={business.phoneHref} className="rounded-lg border border-white/10 bg-slate-950/70 p-5 transition hover:border-cyan-300/50">
              <Icon name="phone" className="h-6 w-6 text-cyan-300" />
              <p className="mt-4 text-sm font-semibold text-slate-400">Phone</p>
              <p className="mt-1 font-black text-white">{business.phoneDisplay}</p>
            </a>
            <a href={business.whatsappHref} className="rounded-lg border border-cyan-300/30 bg-cyan-300/10 p-5 transition hover:bg-cyan-300/15">
              <Icon name="message" className="h-6 w-6 text-cyan-300" />
              <p className="mt-4 text-sm font-semibold text-slate-400">WhatsApp</p>
              <p className="mt-1 font-black text-white">Get a quote</p>
            </a>
            <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
              <Icon name="clock" className="h-6 w-6 text-cyan-300" />
              <p className="mt-4 text-sm font-semibold text-slate-400">Operational Hours</p>
              <p className="mt-1 font-black text-white">{business.hours}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
              <Icon name="map" className="h-6 w-6 text-cyan-300" />
              <p className="mt-4 text-sm font-semibold text-slate-400">Address</p>
              <p className="mt-1 font-black text-white">{business.address}</p>
            </div>
          </div>
        </div>

        <div className="min-h-[420px] overflow-hidden rounded-lg border border-white/10 bg-slate-950">
          <iframe
            title="Sound Mapricado location on Google Maps"
            src={`https://www.google.com/maps?q=${business.mapsQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[420px] w-full border-0 grayscale invert"
          />
          <div className="border-t border-white/10 bg-slate-950/95 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-400">Find Sound Mapricado</p>
                <p className="mt-1 font-black text-white">{business.address}</p>
              </div>
            <a
                href={`https://www.google.com/maps/search/?api=1&query=${business.mapsQuery}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-cyan-300/40 px-5 py-3 text-sm font-bold text-cyan-200 transition hover:bg-cyan-300/10"
            >
                Open in Maps
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-white">Sound Mapricado</p>
        <p>Proudly serving the West Rand since 2021.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 font-sans text-white">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
