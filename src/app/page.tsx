import Image from "next/image";

import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { absoluteUrl, buildWhatsAppHref, phoneHref, siteConfig, whatsappHref } from "@/data/site-config";

/* ─── Schema.org Structured Data ─────────────────────────────────────────── */
function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: siteConfig.brand.name,
    description: siteConfig.seo.description,
    image: absoluteUrl(siteConfig.seo.ogImage),
    areaServed: [
      { "@type": "City", name: "Panchkula" },
      { "@type": "City", name: "Chandigarh" },
      { "@type": "City", name: "Mohali" },
      { "@type": "City", name: "Delhi" },
    ],
    telephone: siteConfig.contact.phoneNumber,
    url: siteConfig.siteUrl,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: "Panchkula",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "30.6942",
      longitude: "76.8606",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    hasMap: `https://maps.google.com/?q=Sector+20+Panchkula+Near+Suncity`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const vehicleIcons: Record<string, string> = {
    "Sedan": "🚗",
    "SUV Ertiga": "🚙",
    "Innova Crysta": "🚐",
    "Innova Hycross Hybrid": "⚡",
  };

  const trustHighlights = [
    { icon: "🕐", label: "On-Time Pickup", sub: "Always punctual" },
    { icon: "💰", label: "Fare on Call", sub: "No hidden charges" },
    { icon: "📱", label: "WhatsApp Booking", sub: "Reply in minutes" },
    { icon: "🛡️", label: "Safe & Comfortable", sub: "Clean, AC cars" },
  ];

  const serviceAreas = [
    { city: "Panchkula", icon: "📍", desc: "Local city rides, sector pickups & drops — our home base" },
    { city: "Chandigarh", icon: "🏙️", desc: "City travels, airport runs & Delhi transfers from the City Beautiful" },
    { city: "Mohali", icon: "🌆", desc: "IT park to airport, outstation & local taxi support" },
  ];

  return (
    <main id="home" className="page-shell pt-[72px] sm:pt-[112px]">
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      <SiteHeader />

      {/* ══════════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{
          minHeight: "auto",
          background: "linear-gradient(135deg, #FFFBEC 0%, #FFF8E0 50%, #FFF3C0 100%)",
        }}
        aria-label="Hero – Trusted cab service in Panchkula and Chandigarh"
      >
        {/* Soft background blobs */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div
            className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, #FFD84D 0%, transparent 70%)" }}
          />
          <div
            className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #FFB800 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-7 sm:py-12 lg:pt-20 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-4 items-center">

            {/* ── LEFT: Copy + CTAs ── */}
            <div className="space-y-4 sm:space-y-5 max-w-xl max-sm:text-center max-sm:mx-auto">

              {/* Status pills */}
              <div className="hero-animate hero-delay-1 hidden sm:flex flex-wrap items-center gap-2 max-sm:justify-center">
                <span
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{
                    background: "rgba(255,184,0,0.15)",
                    border: "1.5px solid rgba(255,184,0,0.40)",
                    color: "#7A4E00",
                  }}
                >
                  📍 Sector 20, Panchkula
                </span>
                <span
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{
                    background: "rgba(31,138,85,0.10)",
                    border: "1.5px solid rgba(31,138,85,0.28)",
                    color: "#1F8A55",
                  }}
                >
                  🟢 Available 24/7
                </span>
              </div>

              {/* Headline */}
              <div className="hero-animate hero-delay-2">
                <p
                  className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] mb-3"
                  style={{ color: "#9A6700" }}
                >
                  Panchkula · Chandigarh · Mohali · Delhi Routes
                </p>
                <h1
                  className="display-xl leading-[1.06]"
                  style={{ fontFamily: "var(--font-sora), 'Sora', sans-serif" }}
                >
                  Local, Airport &{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #FFB800 0%, #D48A00 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Outstation Cab
                  </span>
                  <br />in Panchkula
                </h1>
                <p
                  className="mt-4 text-base sm:text-lg leading-relaxed max-sm:mx-auto max-sm:max-w-[32ch]"
                  style={{ color: "#4A4740" }}
                >
                  Call or WhatsApp for quick fare and on-time pickup.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="hero-animate hero-delay-3 hidden sm:flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href={whatsappHref}
                  className="cta-whatsapp w-full sm:w-auto !text-base !py-[1rem] !px-7"
                  target="_blank"
                  rel="noreferrer noopener"
                  id="hero-whatsapp-btn"
                >
                  <WhatsAppIcon />
                  WhatsApp to Book
                </a>
                <a
                  href={phoneHref}
                  className="cta-primary w-full sm:w-auto !text-base !py-[1rem] !px-7"
                  id="hero-call-btn"
                >
                  <span aria-hidden="true">📞</span>
                  {siteConfig.contact.phoneLabel}
                </a>
              </div>

              {/* Quick trust strip */}
              <div className="hero-animate hero-delay-4 hidden sm:flex flex-wrap gap-2">
                {[
                  { icon: "🕐", label: "On-Time" },
                  { icon: "💰", label: "Fare Confirmed" },
                  { icon: "🛡️", label: "Safe & Clean" },
                  { icon: "⚡", label: "Fast Reply" },
                ].map((b) => (
                  <span
                    key={b.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold"
                    style={{
                      background: "rgba(255,255,255,0.85)",
                      border: "1.5px solid rgba(26,23,20,0.10)",
                      color: "#4A4740",
                    }}
                  >
                    {b.icon} {b.label}
                  </span>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Car image + Fare card ── */}
            <div className="hero-animate hero-delay-3 relative flex justify-center lg:justify-end max-sm:-mt-1">
              {/* Car image — shifted slightly right on desktop */}
              <div
                className="relative w-full max-w-[560px] max-sm:max-w-[430px] lg:translate-x-8 xl:translate-x-14"
                style={{ aspectRatio: "4/3" }}
              >
                <div className="relative w-full h-full rounded-[28px] sm:rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hero-cab-light.png"
                    alt="Abhi Cab Service – white sedan taxi ready for pickup"
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-[80%_65%]"
                  />
                  {/* Subtle vignette on left edge for blending */}
                  <div
                    className="absolute inset-y-0 left-0 w-24"
                    style={{
                      background: "linear-gradient(to right, rgba(255,251,236,0.85) 0%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Fare card — overlaid bottom-left */}
                <div
                  className="relative mt-4 mx-auto w-[90%] max-w-[300px] rounded-2xl overflow-hidden shadow-xl sm:w-[92%] sm:max-w-[320px] sm:absolute sm:-bottom-4 sm:-left-4 lg:-left-10 z-20"
                  style={{
                    background: "rgba(255,255,255,0.97)",
                    border: "1.5px solid rgba(255,184,0,0.30)",
                    minWidth: "0",
                  }}
                >
                  {/* header band */}
                  <div
                    className="px-4 py-2.5 flex items-center justify-between"
                    style={{ background: "linear-gradient(135deg, #FFB800 0%, #E6A000 100%)" }}
                  >
                    <span
                      className="text-xs font-extrabold uppercase tracking-wider text-[#1A1200]"
                      style={{ fontFamily: "var(--font-sora), 'Sora', sans-serif" }}
                    >
                      🔖 Popular Routes
                    </span>
                    <span className="text-xs font-bold text-[#1A1200]/70">From</span>
                  </div>

                  {/* fare rows */}
                  <div className="px-3 pt-3 pb-2 sm:p-3 space-y-2">
                    {siteConfig.routeFares.slice(0, 2).map((r, index) => (
                      <div
                        key={`${r.route}-${r.vehicle}`}
                        className={`items-center justify-between gap-2 ${index > 0 ? "hidden sm:flex" : "flex"}`}
                      >
                        <div className="min-w-0">
                          <p
                            className="text-[0.75rem] font-bold leading-tight truncate"
                            style={{ color: "#1A1714", fontFamily: "var(--font-sora), 'Sora', sans-serif" }}
                          >
                            {r.route}
                          </p>
                          <p className="text-[0.65rem]" style={{ color: "#9A9490" }}>
                            {r.vehicle}
                          </p>
                        </div>
                        <span
                          className="flex-shrink-0 text-[0.75rem] font-extrabold px-2 py-0.5 rounded-md"
                          style={{ background: "#FFB800", color: "#1A1200" }}
                        >
                          {r.priceLabel}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA link */}
                  <a
                    href="#pricing"
                    className="flex items-center justify-center gap-1.5 text-[0.7rem] sm:text-xs font-bold py-1.5 sm:py-2.5 w-full transition-colors"
                    style={{
                      background: "#FFF5D6",
                      color: "#7A4E00",
                    }}
                  >
                    <span className="sm:hidden">Show all</span>
                    <span className="hidden sm:inline">See all fares</span>
                  </a>
                </div>

                {/* Small "available now" bubble — top-right of car */}
                <div
                  className="hidden sm:flex absolute top-3 right-3 lg:top-4 lg:right-4 lg:-right-4 z-20 items-center gap-1.5 px-2.5 py-1.5 lg:px-3 lg:py-2 rounded-xl shadow-lg"
                  style={{
                    background: "rgba(255,255,255,0.97)",
                    border: "1.5px solid rgba(31,138,85,0.25)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                  <span className="text-xs font-bold" style={{ color: "#1F8A55" }}>
                    Available Now
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          MARQUEE TRUST BAR
      ══════════════════════════════════════════════════════════════ */}
      <div
        className="overflow-hidden border-y py-3"
        style={{ borderColor: "rgba(255,184,0,0.22)", background: "#FFF8E8" }}
        aria-hidden="true"
      >
        <div className="marquee-track">
          {[...Array(2)].fill(null).map((_, ri) =>
            [
              "✓ Panchkula to Delhi — Rs. 3700 Sedan",
              "✓ Chandigarh Airport Taxi Available",
              "✓ Innova Crysta — Rs. 6700",
              "✓ Delhi to Chandigarh — Rs. 3500",
              "✓ Book on WhatsApp Instantly",
              "✓ Safe, Clean, On-Time Cars",
              "✓ Sector 20 Panchkula | Near Suncity",
            ].map((item) => (
              <span
                key={`${ri}-${item}`}
                className="px-8 text-sm font-semibold whitespace-nowrap"
                style={{ color: "#7A4E00" }}
              >
                {item}
              </span>
            ))
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          TRUST HIGHLIGHTS GRID
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
        aria-label="Why choose Abhi Cab Service"
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {trustHighlights.map((item) => (
            <div
              key={item.label}
              className="card-warm flex flex-col items-center text-center p-6 gap-3 rounded-2xl"
            >
              <span className="text-3xl" aria-hidden="true">{item.icon}</span>
              <div>
                <p
                  className="font-bold text-[0.92rem]"
                  style={{
                    fontFamily: "var(--font-sora), 'Sora', sans-serif",
                    color: "#1A1714",
                  }}
                >
                  {item.label}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#7A7570" }}>
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ABOUT SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="about"
        className="section-pad"
        style={{ background: "var(--gray-50)" }}
        aria-label="About Abhi Cab Service"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5">
              <span className="section-kicker">About Us</span>
              <h2
                className="section-title"
                style={{ fontFamily: "var(--font-sora), 'Sora', sans-serif" }}
              >
                Personal Cab Service Based in Sector 20, Panchkula
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#4A4740" }}>
                Abhi Cab Service is a personal, dedicated taxi provider operating from{" "}
                <strong>Sector 20, Panchkula, near Suncity</strong>. We specialise in
                local city rides, Chandigarh airport taxi service, and popular outstation
                routes like Panchkula to Delhi and Delhi to Chandigarh.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#4A4740" }}>
                Unlike app-based aggregators, we offer a <em>personal</em> service
                experience — you speak directly to the driver, confirm your fare upfront,
                and get a clean, comfortable car on time. No surge pricing. No surprises.
              </p>
              <ul className="list-check list-none p-0 mt-5">
                {siteConfig.advantages.slice(0, 4).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Right: image collage */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card overflow-hidden rounded-2xl col-span-2 aspect-video relative">
                <Image
                  src="/images/outstation-cab.png"
                  alt="Outstation cab for Panchkula to Delhi route booking"
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="card overflow-hidden rounded-2xl aspect-[4/3] relative">
                <Image
                  src="/images/airport-cab.png"
                  alt="Chandigarh airport taxi pickup service"
                  fill
                  sizes="(min-width: 1024px) 18vw, 50vw"
                  className="object-cover object-center"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-3"
                  style={{ background: "linear-gradient(to top, rgba(26,23,20,0.78) 0%, transparent)" }}
                >
                  <p className="text-xs font-bold text-white">✈ Airport Pickups</p>
                </div>
              </div>
              <div
                className="card-warm rounded-2xl p-4 flex flex-col justify-center"
                style={{ minHeight: "120px" }}
              >
                <p
                  className="text-[0.65rem] font-bold uppercase tracking-[0.12em] mb-1"
                  style={{ color: "#9A6700" }}
                >
                  Based At
                </p>
                <p
                  className="font-extrabold text-base leading-tight"
                  style={{ fontFamily: "var(--font-sora), 'Sora', sans-serif", color: "#1A1714" }}
                >
                  Sector 20 Panchkula
                </p>
                <p className="text-sm mt-1" style={{ color: "#7A7570" }}>
                  Near Suncity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SERVICES SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="services"
        className="section-pad"
        aria-label="Cab services offered"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="section-kicker">Our Services</span>
            <h2
              className="section-title"
              style={{ fontFamily: "var(--font-sora), 'Sora', sans-serif" }}
            >
              Taxi Services We Offer
            </h2>
            <p className="text-base text-[#7A7570] max-w-xl mx-auto">
              Airport pickups, Delhi route cabs, city travel — simple WhatsApp booking for all rides.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {siteConfig.services.map((service) => (
              <article
                key={service.title}
                className="card overflow-hidden rounded-2xl group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 28vw, 100vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold"
                    style={{
                      background: "rgba(255,184,0,0.90)",
                      color: "#1A1200",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {service.badge}
                  </div>
                </div>
                <div className="p-5">
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{
                      fontFamily: "var(--font-sora), 'Sora', sans-serif",
                      color: "#1A1714",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#7A7570" }}>
                    {service.description}
                  </p>
                  <a
                    href={buildWhatsAppHref(service.whatsappMessage)}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="cta-primary mt-5 inline-flex items-center justify-center gap-2 !px-5 !py-3 text-sm"
                    style={{ boxShadow: "0 12px 24px rgba(255,184,0,0.22)" }}
                  >
                    Book this ride <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
          {/* Service areas integrated into services */}
          <div className="mt-20 border-t border-[rgba(26,23,20,0.08)] pt-16">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <span className="section-kicker">Service Coverage</span>
              <h3
                className="mt-4 text-2xl font-extrabold sm:text-3xl"
                style={{ fontFamily: "var(--font-sora), 'Sora', sans-serif", color: "#1A1714" }}
              >
                Fast Pickup Support Across Tricity & Nearby Routes
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#7A7570] sm:text-[0.95rem]">
                From local sector pickups to airport runs and outstation travel, we stay available
                for quick cab support across the areas people book most often.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {serviceAreas.map((area) => (
                <div
                  key={area.city}
                  className="card-warm group p-6 text-center space-y-3 rounded-2xl"
                  style={{
                    background: "linear-gradient(180deg, #FFFDF6 0%, #FFF7E6 100%)",
                    border: "1.5px solid rgba(255,184,0,0.18)",
                  }}
                >
                  <div
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-3xl transition-transform duration-300 group-hover:-translate-y-1"
                    style={{
                      background: "rgba(255,184,0,0.14)",
                      border: "1px solid rgba(255,184,0,0.22)",
                    }}
                  >
                    <span aria-hidden="true">{area.icon}</span>
                  </div>
                  <div className="space-y-1.5">
                    <p
                      className="font-bold text-[1.02rem]"
                      style={{ color: "#1A1714", fontFamily: "var(--font-sora), 'Sora', sans-serif" }}
                    >
                      {area.city}
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: "#9A6700" }}>
                      Quick Cab Support
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#6F6A63" }}>{area.desc}</p>
                </div>
              ))}
            </div>

            {/* Keyword chips for SEO */}
            <div className="mt-12 flex flex-wrap justify-center gap-2.5">
              {siteConfig.seo.keywords.slice(0, 8).map((kw) => (
                <span key={kw} className="area-chip" style={{ background: "#FFFDF8" }}>
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PRICING SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="pricing"
        className="section-pad"
        style={{ background: "var(--yellow-pale)" }}
        aria-label="Route pricing and fare chart"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="section-kicker">Fare Info</span>
            <h2
              className="section-title"
              style={{ fontFamily: "var(--font-sora), 'Sora', sans-serif" }}
            >
              Popular Route Fares
            </h2>
            <p className="text-base text-[#7A7570] max-w-lg mx-auto">
              Quick fare idea before you book.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {siteConfig.routeFares.map((route) => (
              <div
                key={`${route.route}-${route.vehicle}`}
                className="price-card"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className="vehicle-icon-pill flex-shrink-0" aria-hidden="true">
                    {vehicleIcons[route.vehicle] ?? "🚗"}
                  </span>
                  <div className="min-w-0">
                    <p
                      className="font-bold text-[0.95rem] truncate"
                      style={{
                        fontFamily: "var(--font-sora), 'Sora', sans-serif",
                        color: "#1A1714",
                      }}
                    >
                      {route.route}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <span className="vehicle-pill">{route.vehicle}</span>
                      {route.note ? (
                        <span className="text-xs" style={{ color: "#7A7570" }}>
                          {route.note}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className="price-tag-yellow">
                    {route.priceLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappHref}
              className="cta-whatsapp"
              target="_blank"
              rel="noreferrer noopener"
              id="pricing-whatsapp-btn"
            >
              <WhatsAppIcon /> Ask Fare on WhatsApp
            </a>
            <a href={phoneHref} className="cta-secondary" id="pricing-call-btn" style={{ background: 'white' }}>
              <span aria-hidden="true">📞</span> Call to Confirm
            </a>
          </div>

          <p className="text-center text-xs mt-5" style={{ color: "#AAA49C" }}>
            * Fares are indicative. Confirm via WhatsApp or call before booking.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BOOKING STEPS + WHY US
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="section-pad"
        style={{ background: "var(--gray-50)" }}
        aria-label="How to book a cab"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Booking Steps */}
            <div
              className="card rounded-2xl p-7 sm:p-8"
              style={{ border: "1.5px solid var(--border)" }}
            >
              <span className="section-kicker mb-5 inline-flex">3 Steps to Book</span>
              <h2
                className="section-title mb-6"
                style={{ fontFamily: "var(--font-sora), 'Sora', sans-serif" }}
              >
                Book Your Cab in Minutes
              </h2>
              <ol className="space-y-4">
                {siteConfig.bookingSteps.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-start gap-4 p-4 rounded-xl"
                    style={{ background: "var(--gray-50)" }}
                  >
                    <span className="step-number flex-shrink-0">{i + 1}</span>
                    <p className="text-[0.95rem] leading-relaxed pt-0.5" style={{ color: "#4A4740" }}>
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={whatsappHref}
                  className="cta-whatsapp"
                  target="_blank"
                  rel="noreferrer noopener"
                  id="steps-whatsapp-btn"
                >
                  <WhatsAppIcon /> WhatsApp Booking
                </a>
                <a href={phoneHref} className="cta-secondary" id="steps-call-btn">
                  <span aria-hidden="true">📞</span> Call Now
                </a>
              </div>
            </div>

            {/* Why Choose Us */}
            <div
              className="card-warm rounded-2xl p-7 sm:p-8"
              style={{ border: "1.5px solid rgba(255,184,0,0.22)" }}
            >
              <span className="section-kicker mb-5 inline-flex">Why Choose Us</span>
              <h2
                className="section-title mb-6"
                style={{ fontFamily: "var(--font-sora), 'Sora', sans-serif" }}
              >
                Personal Service You Can Trust
              </h2>
              <ul className="list-check list-none p-0">
                {siteConfig.advantages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FAQ SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="section-pad"
        aria-label="Frequently asked questions about cab service"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="section-kicker">FAQ</span>
            <h2
              className="section-title"
              style={{ fontFamily: "var(--font-sora), 'Sora', sans-serif" }}
            >
              Common Questions
            </h2>
            <p className="text-base text-[#7A7570] max-w-lg mx-auto">
              Quick answers to help you book with confidence.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {siteConfig.faqs.map((faq) => (
              <article
                key={faq.question}
                className="card rounded-2xl p-6"
                itemScope
                itemType="https://schema.org/Question"
              >
                <h3
                  className="font-bold text-[1rem] mb-2"
                  style={{
                    fontFamily: "var(--font-sora), 'Sora', sans-serif",
                    color: "#1A1714",
                  }}
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#7A7570" }}
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <span itemProp="text">{faq.answer}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CONTACT / CTA SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="contact"
        className="section-pad"
        style={{ background: "var(--yellow-pale)" }}
        aria-label="Contact and booking"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #FFB800 0%, #E6A000 60%, #D4920A 100%)",
              boxShadow: "0 24px 60px rgba(255,184,0,0.32)",
            }}
          >
            <div className="p-8 sm:p-12 grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-5">
                <h2
                  className="text-3xl sm:text-4xl font-extrabold text-[#1A1200] leading-tight"
                  style={{ fontFamily: "var(--font-sora), 'Sora', sans-serif" }}
                >
                  Ready to Book Your Cab?
                </h2>
                <p className="text-base leading-relaxed text-[#3A2A00]">
                  Call us or send a WhatsApp message for instant fare confirmation and same-day booking.
                  Available for Panchkula, Chandigarh, Mohali, airport pickups and Delhi routes.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={whatsappHref}
                    className="order-2 sm:order-1 cta-whatsapp !px-6 !py-3 text-[0.95rem]"
                    target="_blank"
                    rel="noreferrer noopener"
                    id="contact-whatsapp-btn"
                  >
                    <WhatsAppIcon /> WhatsApp Now
                  </a>
                  <a
                    href={phoneHref}
                    className="order-1 sm:order-2 inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[0.95rem] transition-all"
                    style={{
                      background: "rgba(255,255,255,0.92)",
                      color: "#1A1200",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    }}
                    id="contact-call-btn"
                  >
                    <span aria-hidden="true" className="pulse-dot">📞</span>
                    {siteConfig.contact.phoneLabel}
                  </a>
                </div>
              </div>

              <div
                className="rounded-2xl p-6 space-y-4"
                style={{
                  background: "rgba(255,255,255,0.22)",
                  border: "1.5px solid rgba(255,255,255,0.40)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div>
                  <p
                    className="text-[0.65rem] font-bold uppercase tracking-[0.14em] mb-1"
                    style={{ color: "rgba(26,18,0,0.60)" }}
                  >
                    Our Location
                  </p>
                  <p className="font-extrabold text-lg text-[#1A1200]">
                    {siteConfig.contact.address}
                  </p>
                </div>
                <div className="h-px" style={{ background: "rgba(26,18,0,0.15)" }} />
                <div>
                  <p
                    className="text-[0.65rem] font-bold uppercase tracking-[0.14em] mb-1"
                    style={{ color: "rgba(26,18,0,0.60)" }}
                  >
                    Phone / WhatsApp
                  </p>
                  <a
                    href={phoneHref}
                    className="font-extrabold text-lg text-[#1A1200] hover:underline"
                  >
                    {siteConfig.contact.phoneLabel}
                  </a>
                </div>
                <div className="h-px" style={{ background: "rgba(26,18,0,0.15)" }} />
                <div>
                  <p
                    className="text-[0.65rem] font-bold uppercase tracking-[0.14em] mb-1"
                    style={{ color: "rgba(26,18,0,0.60)" }}
                  >
                    Coverage
                  </p>
                  <p className="font-semibold text-[0.92rem] text-[#1A1200]">
                    Panchkula · Chandigarh · Mohali · Delhi Routes · Airport
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════════════ */}
      <footer
        className="border-t pb-6"
        style={{ borderColor: "var(--border)", background: "#FAFAF8" }}
        role="contentinfo"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p
                className="font-extrabold text-base"
                style={{
                  fontFamily: "var(--font-sora), 'Sora', sans-serif",
                  color: "#1A1714",
                }}
              >
                🚕 {siteConfig.brand.name}
              </p>
              <p className="text-xs mt-0.5" style={{ color: "#AAA49C" }}>
                {siteConfig.contact.address}
              </p>
            </div>
            <p className="text-xs" style={{ color: "#AAA49C" }}>
              Cab service in Panchkula, Chandigarh, Mohali · Airport taxi · Delhi routes
            </p>
          </div>
        </div>
      </footer>

      <MobileCtaBar />
    </main>
  );
}
