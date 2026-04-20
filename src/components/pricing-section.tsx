import { siteConfig, whatsappHref, phoneHref } from "@/data/site-config";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { SectionHeading } from "@/components/section-heading";

export function PricingSection() {
  const vehicleIcons: Record<string, string> = {
    "Sedan": "🚗",
    "SUV Ertiga": "🚙",
    "Innova Crysta": "🚐",
    "Innova Hycross Hybrid": "⚡",
  };

  return (
    <section
      id="pricing"
      className="section-pad"
      style={{ background: "var(--yellow-pale)" }}
      aria-label="Route pricing and fare chart"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          centered
          className="mb-12"
          kicker="Fare Info"
          title="Popular Route Fares"
          copy="Quick fare idea before you book."
        />

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
  );
}
