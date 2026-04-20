import { siteConfig, whatsappHref, phoneHref } from "@/data/site-config";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function BookingStepsSection() {
  return (
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
  );
}
