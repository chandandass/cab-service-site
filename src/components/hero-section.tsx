import Image from "next/image";
import { siteConfig, whatsappHref, phoneHref } from "@/data/site-config";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function HeroSection() {
  return (
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
  );
}
