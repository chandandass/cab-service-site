import Image from "next/image";
import { siteConfig, buildWhatsAppHref } from "@/data/site-config";
import { SectionHeading } from "@/components/section-heading";

export function ServicesSection() {
  const serviceHighlights = [
    { city: "Panchkula", icon: "📍", desc: "Local city rides, sector pickups & drops — our home base" },
    { city: "Chandigarh", icon: "🏙️", desc: "City travels, airport runs & Delhi transfers from the City Beautiful" },
    { city: "Mohali", icon: "🌆", desc: "IT park to airport, outstation & local taxi support" },
  ];

  return (
    <section
      id="services"
      className="section-pad"
      aria-label="Cab services offered"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          centered
          className="mb-12"
          kicker="Our Services"
          title="Taxi Services We Offer"
          copy="Airport pickups, Delhi route cabs, city travel — simple WhatsApp booking for all rides."
        />

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
            {serviceHighlights.map((area) => (
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
  );
}
