import React, { useEffect, useRef, useState } from "react";

const business = {
  name: "Sound MaPricado (Pty) Ltd",
  registration: "2023/267550/07",
  phoneDisplay: "078 519 6965",
  phoneHref: "tel:+27785196965",
  whatsappHref: "https://wa.me/27785196965",
  email: "soundmapricado@gmail.com",
  emailHref: "mailto:soundmapricado@gmail.com",
  address: "9 Kruger Street, Krugersdorp CBD, 1739",
  mapsQuery: "9%20Kruger%20Street%2C%20Krugersdorp%20CBD%2C%201739",
  hours: "Mon - Fri: 9:00 - 17:00 | Sat: 8:30 - 15:00",
};

const publicBase = import.meta.env.BASE_URL;

const images = {
  // Hero image
  teamHero: `${publicBase}assets/images/team/hero.jpeg`,
  workshop: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80",
  audio: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=80",
  electrical: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=900&q=80",
  interior: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
  
  // Logo images
  logo: `${publicBase}assets/images/logo/logo1.png`,
  logoName: `${publicBase}assets/images/logo/logo2_name.png`,
  logoFull: `${publicBase}assets/images/logo/logo3.png`,
  
  // Individual team member images
  ayanda: `${publicBase}assets/images/team/ayanda.jpeg`,
  noma: `${publicBase}assets/images/team/noma.jpeg`,
  nomalungelo: `${publicBase}assets/images/team/nomalungelo.jpeg`,
  tshegofatso: `${publicBase}assets/images/team/tshegofatso.jpeg`,
  thandeka: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=600&q=80",
  mandla: `${publicBase}assets/images/team/mandla.jpeg`,

};

const iconPaths = {
  audio: (
    <>
      <path d="M4 9v6h4l5 4V5L8 9H4z" />
      <path d="M17 9.5a4 4 0 0 1 0 5" />
      <path d="M19.5 7a8 8 0 0 1 0 10" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
  wire: (
    <>
      <path d="M7 7h10" />
      <path d="M7 17h10" />
      <path d="M7 7v10" />
      <path d="M17 7v10" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
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
  car: (
    <>
      <path d="M5 17h14" />
      <path d="m6 13 2-5h8l2 5" />
      <path d="M6 13h12v4H6z" />
      <circle cx="8" cy="17" r="2" />
      <circle cx="16" cy="17" r="2" />
    </>
  ),
  graphic: (
    <>
      <path d="M4 20h16" />
      <path d="M6 16 16 6l2 2L8 18H6v-2z" />
      <path d="m14 8 2 2" />
    </>
  ),
  tint: (
    <>
      <path d="M4 5h16v14H4z" />
      <path d="M8 5v14" />
      <path d="M16 5v14" />
      <path d="M4 10h16" />
    </>
  ),
  charge: (
    <>
      <path d="M7 2v8" />
      <path d="M11 2v8" />
      <path d="M9 10v3a4 4 0 0 0 4 4h1" />
      <path d="m17 13-2 4h3l-2 5" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  ),
  message: (
    <>
      <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-5.2A8.5 8.5 0 1 1 21 11.5z" />
      <path d="M8 10h8" />
      <path d="M8 14h5" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s7-4.5 7-11a7 7 0 0 0-14 0c0 6.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </>
  ),
};

const services = [
  {
    title: "Car Sound & Entertainment Systems",
    description:
      "Custom speaker upgrades, component systems, subwoofer enclosures, amplifier installs, processors, touchscreen head units, reverse cameras and full audio builds.",
    icon: "audio",
    items: ["Speaker upgrades", "Amplifiers", "Subwoofers", "Reverse cameras"],
  },
  {
    title: "Car Security & Anti-Theft Systems",
    description:
      "Alarm systems, immobilisers, anti-hijack systems, GPS tracking units, central locking and remote kits.",
    icon: "shield",
    items: ["Alarms", "Immobilisers", "Anti-hijack", "Tracking"],
  },
  {
    title: "Auto Electrical Services",
    description:
      "Electrical diagnostics, fault finding, wiring repairs, battery and alternator upgrades, starter motor work, window mechanisms and switch repairs.",
    icon: "wire",
    items: ["Diagnostics", "Wiring", "Batteries", "Alternators"],
  },
  {
    title: "Vehicle Wraps & Branding",
    description:
      "Full colour-change wraps, paint protection film, taxi association livery, commercial fleet branding, decals, striping and regulatory markings.",
    icon: "car",
    items: ["Full wraps", "Fleet branding", "Taxi livery", "Decals"],
  },
  {
    title: "Graphic Services",
    description:
      "Logo design, brand concepts, wrap design, print-ready artwork, signage layouts and brand identity support for taxi associations and SMEs.",
    icon: "graphic",
    items: ["Logos", "Artwork", "Signage", "Brand identity"],
  },
  {
    title: "Window Tinting & Detailing",
    description:
      "Smash-and-grab safety film, legal compliance tinting, UV and heat-rejection films, detailing and comfort upgrades.",
    icon: "tint",
    items: ["Smash & grab", "UV film", "Heat rejection", "Detailing"],
  },
  {
    title: "EV Charging & System Upgrades",
    description:
      "EV charging solutions, system upgrades, maintenance, repairs and custom design consultation for modern vehicle needs.",
    icon: "charge",
    items: ["EV charging", "Consultation", "Maintenance", "Repairs"],
  },
  {
    title: "Custom Vehicle Upholstery",
    description:
      "Tailored interior restoration and customization for taxis, commercial fleets, and private clients. High-durability reupholstery for seats, door panels, and roof linings.",
    icon: "key", // Or map to an appropriate interior path icon
    items: ["Seat Reupholstery", "Panel Trimming", "Roof Linings", "Fleet Interiors"],
  },
];

const values = [
  "Customer satisfaction",
  "Innovation",
  "Quality",
  "Integrity",
  "Teamwork",
];

const markets = [
  {
    name: "Taxi Associations",
    share: "45%",
    text: "Durable sound, security, tinting, upholstery, livery and fast turnaround to reduce vehicle downtime.",
  },
  {
    name: "Dealerships & Fleet Managers",
    share: "35%",
    text: "Consistent fitment, standardised branding, consolidated support and scalable aftermarket installations.",
  },
  {
    name: "Private Vehicle Owners",
    share: "20%",
    text: "Premium sound builds, wraps, upholstery, tracking, anti-hijack systems and expert electrical support.",
  },
];

const team = [
  {
    name: "Ayanda Zulu",
    role: "Owner, CEO & Lead Sound Engineer",
    text: "Leads the vision, growth and partnerships while personally designing and tuning audio systems for taxis, fleets and private vehicles.",
    image: images.ayanda,
  },
  {
    name: "Nomalungelo Matsele",
    role: "Manager / Operations Lead",
    text: "Runs day-to-day workshop operations, customer service, scheduling and community-focused initiatives.",
    image: images.noma,
  },
  {
    name: "Tshegofatso Malematsa",
    role: "Technician / Upholstery Specialist",
    text: "Supports technical and interior work with attention to durable, professional finishes for daily-use vehicles.",
    image: images.tshegofatso,
  },
  {
    name: "Mandla Ndebele",
    role: "Carpenter",
    text: "Supports custom fabrication work for boot builds, enclosures and workshop fitment projects.",
    image: images.mandla,
  },
  // {
  //   name: "Thandeka Malematsa",
  //   role: "Director & Head of CSR",
  //   image: images.thandeka,
  //   text: "Runs Sound MaPricado's day-to-day operations and community initiatives. She delivers fast, high-quality automotive services while leading skills training and local CSI projects.",
  // },
  // {
  //   name: "Tshegofatso Malematsa",
  //   role: "Upholstery Technician",
  //   image: images.tshegofatso,
  //   text: "Specializes in custom vehicle upholstery for taxi, fleet, and private clients. Reupholsters seats, panels, and roofs with structural precision and daily durability.",
  // },
  // {
  //   name: "Nomalungelo Matsele",
  //   role: "Part-time General Worker",
  //   image: images.nomalungelo,
  //   text: "Supports all workshop teams with general tasks, installations, vehicle preparation, and site maintenance to guarantee smooth workflows and fast project completion.",
  // }
];

const milestones = [
  {
    year: "2024",
    title: "Mobile operations launched",
    text: "Started working on-site at customer locations, building a reputation for quality work and customer service.",
  },
  {
    year: "2025",
    title: "Shared workshop expansion",
    text: "Moved into a small shared workshop space to centralise operations and serve a growing customer base.",
  },
  {
    year: "2026",
    title: "Dedicated workshop facility",
    text: "The move into a dedicated workshop increases capacity and strengthens the company as a one-stop automotive solution.",
  },
];

const shortcutLinks = [
  { href: "#about", label: "About", icon: "shield" },
  { href: "#services", label: "Services", icon: "wire" },
  { href: "#markets", label: "Markets", icon: "car" },
  { href: "#contact", label: "Contact", icon: "phone" },
];

const gallery = [
  { title: "Sound & Audio", image: images.audio },
  { title: "Electrical & Security", image: images.electrical },
  { title: "Wraps, Tint & Interior", image: images.interior },
];

function Icon({ name, className = "h-5 w-5" }) {
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
    >
      {iconPaths[name]}
    </svg>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 px-4 py-4 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 text-slate-900 sm:px-8">
        <a
          href="#home"
          className="text-lg font-black uppercase tracking-[0.18em] text-slate-900"
        >
          Sound<span className="text-blue-700">MaPricado</span>
        </a>
        <div className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.28em] text-slate-700 md:flex">
          <a href="#about" className="transition hover:text-blue-700">
            About
          </a>
          <a href="#services" className="transition hover:text-blue-700">
            Services
          </a>
          {/* <a href="#markets" className="transition hover:text-blue-700">
            Markets
          </a> */}
          <a href="#team" className="transition hover:text-blue-700">
            Team
          </a>
          <a href="#contact" className="transition hover:text-blue-700">
            Contact
          </a>
        </div>
        <a
          href={business.phoneHref}
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-blue-700"
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
    <section id="home" className="bg-slate-50 px-0 pb-14 pt-8 sm:pb-16 lg:pb-20">
      <div className="mx-auto w-full overflow-hidden bg-white shadow-[0_22px_65px_-35px_rgba(15,23,42,0.15)]">
        <div className="grid gap-0 lg:grid-cols-[1.4fr_0.7fr]">
          <Reveal className="relative min-h-[520px] overflow-hidden lg:min-h-[680px]">
            <img
              src={images.teamHero}
              alt="Premium vehicle in workshop lighting"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 left-0 px-6 pb-12 sm:px-10 lg:px-14">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-blue-300">
                One-stop automotive workshop
              </p>
              <h1 className="mt-3 text-5xl font-black uppercase leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                Sound
                <span className="block text-blue-300">MaPricado</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                Integrated vehicle customisation, car audio, security,
                auto-electrical, wraps, tinting and graphic services from one
                workshop.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-blue-700"
                >
                  View Services
                </a>
                <a
                  href={business.whatsappHref}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-black uppercase tracking-[0.16em] text-slate-900 transition hover:border-blue-700 hover:text-blue-700"
                >
                  WhatsApp Quote
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="hidden flex-col gap-6 px-6 py-10 sm:px-10 lg:flex lg:px-12" delay={80}>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-700">
                Krugersdorp Central
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-slate-950">
                Premium Automotive Services
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                A single workshop for audio, security, wraps, tinting and trusted vehicle upgrades.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-blue-700">
                  Service Focus
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  End-to-end audio, security and branding solutions for taxis, fleets and private vehicles.
                </p>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-blue-700">
                  Open Hours
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {business.hours}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ShortcutBar() {
  return (
    <section className="bg-white px-4 py-10">
      <Reveal className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
        {shortcutLinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group rounded-[28px] border border-slate-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-blue-700 hover:bg-blue-50"
          >
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-white transition group-hover:bg-blue-700">
              <Icon name={item.icon} className="h-7 w-7" />
            </span>
            <span className="mt-4 block text-xs font-black uppercase tracking-[0.18em] text-slate-900">
              {item.label}
            </span>
          </a>
        ))}
      </Reveal>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-slate-50 px-4 py-16 sm:py-20">
      <Reveal className="mx-auto max-w-6xl rounded-[32px] border border-slate-200 bg-white px-6 py-12 shadow-sm sm:px-12">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-700">
          Company Overview
        </p>
        <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-slate-950 sm:text-5xl">
          More Than Sound
        </h2>
        <div className="mt-4 h-1 w-20 rounded-full bg-blue-700" />
        <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
          Sound MaPricado is an automotive aftermarket specialist providing
          high-quality car audio, electrical systems, security, vehicle
          customisation and branding services. By bringing multiple services
          under one roof, the workshop helps customers avoid the delays and
          costs of using several suppliers.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-left">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
              Industry
            </p>
            <h3 className="mt-3 text-2xl font-black uppercase text-slate-950">
              Automotive Aftermarket
            </h3>
            <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
              Sound MaPricado supports aftermarket customisation, vehicle
              security, audio fitment and wrap services.
            </p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-left">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
              Approach
            </p>
            <h3 className="mt-3 text-2xl font-black uppercase text-slate-950">
              One Workshop
            </h3>
            <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
              Customers choose a single point of contact for audio, security,
              electrical, branding and interior upgrades.
            </p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-left">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
              Value
            </p>
            <h3 className="mt-3 text-2xl font-black uppercase text-slate-950">
              Efficient Service Delivery
            </h3>
            <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
              The workshop helps fleets, taxi operators and private owners
              deliver dependable upgrades with a consistent finish.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="bg-white px-4 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_0.85fr]">
        <Reveal className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-blue-700">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-slate-950 sm:text-5xl">
            Smart solutions for every vehicle.
          </h2>
          <div className="mt-7 space-y-6 text-slate-700">
            <p className="text-base leading-8">
              Sound MaPricado helps customers build safer, smarter and
              better-connected vehicles with expert audio tuning, security
              systems, electrical diagnostics and custom branding.
            </p>
            <p className="text-base leading-8">
              Our workshop combines technical know-how with fast response times
              so projects move from concept to completion without delays.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-700">
                  Mission
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Deliver automotive solutions that protect, upgrade and impress
                  with clarity and reliability.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-700">
                  Vision
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Be the first choice for taxi, fleet and private owners needing
                  premium car customisation and service excellence.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="rounded-[32px] border border-slate-200 bg-blue-700 p-8 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-blue-200">
            Core Values
          </p>
          <h3 className="mt-3 text-3xl font-black uppercase tracking-tight text-white">
            Built on trust and performance.
          </h3>
          <div className="mt-8 space-y-3">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-3xl bg-slate-900/10 px-4 py-4 text-sm font-semibold tracking-[0.02em] text-white"
              >
                {value}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-slate-50 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-700">
            Our Services
          </p>
          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-slate-950 sm:text-5xl">
            Everything for audio, security and wrap work.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            We deliver professional aftermarket solutions for private vehicles,
            taxis and fleets. Our focus is durability, clean fitment and
            consistent service.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <article className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-700 text-white">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-black uppercase tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
                <div className="mt-6 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                  {item.items.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-700" />
                      {feature}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Markets() {
  return (
    <section id="markets" className="bg-white px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-700">
            Markets
          </p>
          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-slate-950 sm:text-5xl">
            Taxi, fleet, dealership and private owner markets.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Our workshop is built to support high-volume taxi and fleet work
            while still offering premium service for private vehicles and
            specialist builds.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {markets.map((market, index) => (
            <Reveal key={market.name} delay={index * 80}>
              <article className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-700">
                  {market.name}
                </p>
                <p className="mt-5 text-4xl font-black text-slate-950">
                  {market.share}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {market.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="bg-slate-50 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-700">
            Portfolio
          </p>
          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-slate-950 sm:text-6xl">
            Job Categories
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {gallery.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <article className="space-y-4 text-center">
                <div className="mx-auto aspect-square max-w-[280px] overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">
                  <img
                    src={item.image}
                    alt={`${item.title} portfolio placeholder`}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="mx-auto max-w-[260px] rounded-[24px] bg-white px-5 py-4 text-sm font-black uppercase tracking-[0.16em] text-slate-950 shadow-sm">
                  {item.title}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamAndMilestones() {
  return (
    <section id="team" className="bg-white px-4 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-700">
              Team
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-none text-slate-950 sm:text-6xl">
              People Behind The Work
            </h2>
          </Reveal>
          
          <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {team.map((person, index) => (
              <Reveal key={person.name} delay={index * 80}>
                {/* Outermost card shell configured to contrast nicely with image transparent transitions */}
                <article className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 shadow-sm transition hover:shadow-md">
                  
                  {/* Photo container implementing a absolute overlay gradient which fades dynamically at the bottom */}
                  <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                    <img
                      src={person.image}
                      alt={`Portrait of ${person.name}, ${person.role}`}
                      className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
                    />
                    {/* The masking layer creating the precise fading transition effect at the bottom boundary */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
                  </div>

                  {/* Operational Details rendering neatly below the faded imagery portion */}
                  <div className="p-6 pt-2">
                    <h3 className="text-xl font-black uppercase text-slate-950">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-blue-700">
                      {person.role}
                    </p>
                    <p className="mt-4 text-sm font-medium leading-6 text-slate-600">
                      {person.text}
                    </p>
                  </div>

                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          delay={120}
          className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm lg:self-start"
        >
          <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-700">
            Milestones
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase text-slate-950">
            Growth Path
          </h2>
          <div className="mt-7 space-y-6">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="rounded-3xl border-l-4 border-blue-700 bg-white p-5 shadow-sm"
              >
                <p className="text-3xl font-black text-slate-950">
                  {milestone.year}
                </p>
                <h3 className="mt-1 font-black uppercase text-slate-950">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
                  {milestone.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-slate-50 px-4 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-700">
            Book With Us
          </p>
          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-slate-950 sm:text-5xl">
            Contact Sound MaPricado
          </h2>
          <div className="mt-8 grid gap-4">
            <a
              href={business.phoneHref}
              className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-5 text-sm font-black uppercase tracking-[0.14em] text-slate-900 transition hover:border-blue-700 hover:text-blue-700"
            >
              <Icon name="phone" className="h-6 w-6" />
              {business.phoneDisplay}
            </a>
            <a
              href={business.whatsappHref}
              className="flex items-center gap-4 rounded-3xl bg-slate-900 px-5 py-5 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-blue-700"
            >
              <Icon name="message" className="h-6 w-6" />
              Get a Quote via WhatsApp
            </a>
            <a
              href={business.emailHref}
              className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-5 text-sm font-black uppercase tracking-[0.14em] text-slate-900 transition hover:border-blue-700 hover:text-blue-700"
            >
              {business.email}
            </a>
            <div className="rounded-3xl border border-slate-200 bg-blue-50 p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
                Address
              </p>
              <p className="mt-2 font-black text-slate-950">
                {business.address}
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-700">
                {business.hours}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={120}
          className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm"
        >
          <iframe
            title="Sound MaPricado location on Google Maps"
            src={`https://maps.google.com/maps?q=${business.mapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[460px] w-full border-0"
          />
          <a
            href={`https://maps.google.com/maps?q=${business.mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border-t border-slate-200 bg-slate-900 px-6 py-5 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-blue-700"
          >
            Open In Maps
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

// function Contact() {
//   return (
//     <section id="contact" className="bg-slate-50 px-4 py-16 sm:py-20">
//       <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
//         <Reveal className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
//           <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-700">
//             Book With Us
//           </p>
//           <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-slate-950 sm:text-5xl">
//             Contact Sound MaPricado
//           </h2>
//           <div className="mt-8 grid gap-4">
//             <a
//               href={business.phoneHref}
//               className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-5 text-sm font-black uppercase tracking-[0.14em] text-slate-900 transition hover:border-blue-700 hover:text-blue-700"
//             >
//               <Icon name="phone" className="h-6 w-6" />
//               {business.phoneDisplay}
//             </a>
//             <a
//               href={business.whatsappHref}
//               className="flex items-center gap-4 rounded-3xl bg-slate-900 px-5 py-5 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-blue-700"
//             >
//               <Icon name="message" className="h-6 w-6" />
//               Get a Quote via WhatsApp
//             </a>
//             <a
//               href={business.emailHref}
//               className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-5 text-sm font-black uppercase tracking-[0.14em] text-slate-900 transition hover:border-blue-700 hover:text-blue-700"
//             >
//               {business.email}
//             </a>
//             <div className="rounded-3xl border border-slate-200 bg-blue-50 p-5">
//               <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
//                 Address
//               </p>
//               <p className="mt-2 font-black text-slate-950">
//                 {business.address}
//               </p>
//               <p className="mt-3 text-sm font-semibold text-slate-700">
//                 {business.hours}
//               </p>
//             </div>
//           </div>
//         </Reveal>

//         <Reveal
//           delay={120}
//           className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm"
//         >
//           <iframe
//             title="Sound MaPricado location on Google Maps"
//             src={`https://maps.google.com/maps?q=${business.mapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             className="h-[460px] w-full border-0"
//           />
//           <a
//             href={`https://www.google.com/maps/search/?api=1&query=${business.mapsQuery}`}
//             className="flex items-center justify-center gap-3 border-t border-slate-200 bg-slate-900 px-6 py-5 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-blue-700"
//           >
//             Open In Maps
//             <Icon name="arrow" className="h-4 w-4" />
//           </a>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

function Footer() {
  return (
    <footer className="bg-slate-100 px-4 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-slate-200 pt-6 text-sm font-semibold text-slate-700 sm:flex-row sm:items-center sm:justify-between">
        <p>{business.name}</p>
        <p>
          Registered {business.registration} | One-stop automotive customisation
          workshop.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />
      <Hero />
      <ShortcutBar />
      <About />
      <MissionVision />
      <Services />
      {/* <Markets /> */}
      {/* <Gallery /> */}
      <TeamAndMilestones />
      <Contact />
      <Footer />
    </main>
  );
}
