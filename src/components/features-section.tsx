import { siteConfig } from "@/data/site-config";

export function FeaturesSection() {
  const trustHighlights = [
    { icon: "🕐", label: "On-Time Pickup", sub: "Always punctual" },
    { icon: "💰", label: "Fare on Call", sub: "No hidden charges" },
    { icon: "📱", label: "WhatsApp Booking", sub: "Reply in minutes" },
    { icon: "🛡️", label: "Safe & Comfortable", sub: "Clean, AC cars" },
  ];

  return (
    <>
      {/* Marquee Trust Bar */}
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

      {/* Trust Highlights Grid */}
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
    </>
  );
}
