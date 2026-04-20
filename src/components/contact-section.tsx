import { siteConfig, whatsappHref, phoneHref } from "@/data/site-config";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function ContactSection() {
  return (
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
  );
}
