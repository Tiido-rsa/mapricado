import React from "react";

const iconClassNames = {
  alarm: "fa-solid fa-bell",
  arrow: "fa-solid fa-arrow-right",
  battery: "fa-solid fa-battery-full",
  cable: "fa-solid fa-plug",
  car: "fa-solid fa-car",
  check: "fa-solid fa-check",
  chevron: "fa-solid fa-chevron-right",
  clock: "fa-solid fa-clock",
  key: "fa-solid fa-key",
  lock: "fa-solid fa-lock",
  map: "fa-solid fa-map-location-dot",
  message: "fa-solid fa-comments",
  navigation: "fa-solid fa-compass",
  phone: "fa-solid fa-phone",
  shield: "fa-solid fa-shield-halved",
  sparkle: "fa-solid fa-star",
  speaker: "fa-solid fa-volume-high",
  truck: "fa-solid fa-truck",
  wrench: "fa-solid fa-wrench",
  facebook: "fa-brands fa-facebook-f",
  tiktok: "fa-brands fa-tiktok",
  instagram: "fa-brands fa-instagram"
};

function Icon({ name, className = "h-5 w-5", ...props }) {
  const iconClass = iconClassNames[name] || "";
  return <i className={`${iconClass} fa-fw ${className}`} aria-hidden="true" {...props} />;
}

const business = {
  phoneDisplay: "078 519 6965",
  phoneHref: "tel:+27785196965",
  whatsappHref: "https://wa.me/27785196965",
  address: "9 Kruger St, Central, Krugersdorp, 1739",
  mapsQuery: "9%20Kruger%20St%2C%20Central%2C%20Krugersdorp%2C%201739",
  hours: [
    { day: "Friday", time: "9 am-5 pm" },
    { day: "Saturday", time: "8:30 am-3 pm" },
    { day: "Sunday", time: "Closed" },
    { day: "Monday", time: "9 am-5 pm" },
    { day: "Tuesday", time: "9 am-5 pm" },
    { day: "Wednesday", time: "9 am-5 pm" },
    { day: "Thursday", time: "9 am-5 pm" }
  ],
  socials: [
    {
      name: "Facebook",
      href: "https://web.facebook.com/p/Sound-MaPricado-100076609646660/?_rdc=1&_rdr#",
      icon: "facebook"
    },
    { name: "TikTok", href: "https://www.tiktok.com/@soundmapricado", icon: "tiktok" },
    { name: "Instagram", href: "https://www.instagram.com/sound_mapricado/", icon: "instagram" }
  ]
};

const services = [
  {
    title: "Car Sound & Custom Setups",
    description: "Amplifiers, speakers, custom boot builds, clean installs, and tuned audio upgrades.",
    icon: "speaker",
    accent: "from-blue-400 to-sky-500"
  },
  {
    title: "Vehicle Security & Self-Tracking",
    description: "Alarms, anti-hijack systems, central locking, immobilisers, and tracking devices.",
    icon: "shield",
    accent: "from-slate-500 to-blue-500"
  },
  {
    title: "Auto-Electrical & Re-Wiring",
    description: "Diagnostics, fault finding, loom repairs, custom wiring, and electrical restorations.",
    icon: "cable",
    accent: "from-blue-400 to-sky-500"
  },
  {
    title: "On-Board Diagnosis & Key Coding",
    description: "Transponder keys, remote coding, error-code clearing, and electronic module checks.",
    icon: "key",
    accent: "from-sky-400 to-blue-400"
  },
  {
    title: "Popped Airbag Replacement",
    description: "Safety system restoration, airbag replacement support, and warning-light resolution.",
    icon: "car",
    accent: "from-blue-300 to-sky-500"
  },
  {
    title: "Roof Lining Restoration",
    description: "Sagging roof lining repairs, cabin fabric replacement, and interior finish refreshes.",
    icon: "sparkle",
    accent: "from-sky-400 to-blue-400"
  },
  {
    title: "Transportation & Towing",
    description: "Scheduled vehicle transport and recovery support across Krugersdorp and the West Rand.",
    icon: "truck",
    accent: "from-blue-400 to-sky-500"
  },
  {
    title: "Workshop Diagnostics",
    description: "Practical advice, inspection, and repair planning for complex vehicle electrical faults.",
    icon: "wrench",
    accent: "from-slate-500 to-blue-400"
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
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-300/40 bg-blue-400/10 shadow-glow">
            <Icon name="battery" className="h-5 w-5 text-blue-300" />
          </span>
          <span className="text-base font-black uppercase tracking-wide sm:text-lg">Sound Mapricado</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-blue-300">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={business.phoneHref}
          className="inline-flex items-center gap-2 rounded-md bg-blue-400 px-4 py-2 text-sm font-bold text-slate-950 shadow-glow transition hover:bg-blue-500"
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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.20),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.70),rgba(2,6,23,1))]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent" />

      <div className="mx-auto grid min-h-[calc(100vh-68px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-300/10 px-4 py-2 text-sm font-semibold text-blue-200">
            <Icon name="shield" className="h-4 w-4 text-blue-200" />
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
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:border-blue-300/60 hover:bg-blue-300/10"
            >
              View Services
              <Icon name="chevron" className="h-4 w-4" />
            </a>
            <a
              href={business.whatsappHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-400 px-6 py-3 text-sm font-black text-slate-950 shadow-glow transition hover:bg-blue-500"
            >
              <Icon name="message" className="h-4 w-4 text-slate-950" />
              Get a Quote via WhatsApp
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-slate-900 shadow-2xl">
            <div className="flex h-full flex-col justify-between bg-[linear-gradient(145deg,rgba(30,41,59,0.92),rgba(15,23,42,0.96)),repeating-linear-gradient(90deg,rgba(96,165,250,0.10)_0,rgba(96,165,250,0.10)_1px,transparent_1px,transparent_52px)] p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div className="rounded-md border border-blue-300/30 bg-slate-950/70 px-3 py-2 text-xs font-bold uppercase text-blue-200">
                  Precision Workshop
                </div>
                <Icon name="alarm" className="h-8 w-8 text-blue-300" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {["Audio", "Security", "Diagnostics", "Restoration"].map((item) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-slate-950/60 p-4">
                    <Icon name="check" className="mb-3 h-5 w-5 text-blue-300" />
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
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-300">Services</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">More than sound. Built for every essential vehicle system.</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            From clean audio installs to anti-hijack systems, key coding, wiring faults, safety repairs, and interior restoration, Sound Mapricado gives Krugersdorp drivers one workshop for the work that keeps vehicles usable, secure, and sharp.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            return (
              <article key={service.title} className="group rounded-lg border border-white/10 bg-slate-950/70 p-5 transition hover:-translate-y-1 hover:border-blue-300/50 hover:shadow-glow">
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
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-300">Portfolio</p>
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
                <div className="flex aspect-[4/3] items-center justify-center bg-[linear-gradient(135deg,rgba(251,146,60,0.12),rgba(30,41,59,0.92)),repeating-linear-gradient(45deg,rgba(248,113,113,0.10)_0,rgba(248,113,113,0.10)_1px,transparent_1px,transparent_18px)]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-blue-300/30 bg-slate-950/80">
                    <Icon name={category.icon} className="h-9 w-9 text-blue-300" />
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
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-300">Contact & Location</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Book diagnostics, installation, restoration, or towing support.</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Call or WhatsApp Sound Mapricado for vehicle audio, security, auto-electrical, key coding, and restoration services in Krugersdorp.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a href={business.phoneHref} className="rounded-lg border border-white/10 bg-slate-950/70 p-5 transition hover:border-blue-300/50">
              <Icon name="phone" className="h-6 w-6 text-blue-300" />
              <p className="mt-4 text-sm font-semibold text-slate-400">Phone</p>
              <p className="mt-1 font-black text-white">{business.phoneDisplay}</p>
            </a>
            <a href={business.whatsappHref} className="rounded-lg border border-blue-300/30 bg-blue-300/10 p-5 transition hover:bg-blue-300/15">
              <Icon name="message" className="h-6 w-6 text-blue-300" />
              <p className="mt-4 text-sm font-semibold text-slate-400">WhatsApp</p>
              <p className="mt-1 font-black text-white">Get a quote</p>
            </a>
            <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
              <Icon name="clock" className="h-6 w-6 text-blue-300" />
              <p className="mt-4 text-sm font-semibold text-slate-400">Operational Hours</p>
              <div className="mt-3 space-y-1 text-sm leading-6 text-slate-300">
                {business.hours.map((entry) => (
                  <div key={entry.day} className="flex items-center justify-between">
                    <span>{entry.day}</span>
                    <span className="font-black text-white">{entry.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
              <Icon name="map" className="h-6 w-6 text-blue-300" />
              <p className="mt-4 text-sm font-semibold text-slate-400">Address</p>
              <p className="mt-1 font-black text-white">{business.address}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Socials</p>
              <div className="mt-4 space-y-2 text-sm leading-6">
                {business.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 font-black text-white transition hover:text-blue-300"
                  >
                    <Icon name={social.icon} className="h-4 w-4 text-blue-300" />
                    {social.name}
                  </a>
                ))}
              </div>
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
                className="inline-flex items-center justify-center gap-2 rounded-md border border-blue-300/40 px-5 py-3 text-sm font-bold text-blue-200 transition hover:bg-blue-300/10"
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
