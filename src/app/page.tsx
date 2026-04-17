import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { phoneHref, siteConfig, whatsappHref } from "@/data/site-config";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: siteConfig.brand.name,
    description: siteConfig.seo.description,
    areaServed: ["Panchkula", "Chandigarh", "Mohali", "Delhi"],
    telephone: siteConfig.contact.phoneNumber,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: "Panchkula",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SiteHeader />

      <section id="home" className="road-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 md:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8">
          <div className="space-y-8">
            <span className="section-kicker">{siteConfig.brand.eyebrow}</span>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[#f7f3e7] sm:text-6xl lg:text-7xl">
                {siteConfig.brand.heroTitle}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[#c7cfdb] sm:text-xl">
                {siteConfig.brand.heroDescription} The page is optimized for Panchkula,
                Chandigarh, Mohali, airport taxi service, Delhi route booking and near
                me cab service discovery.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={whatsappHref} className="cta-primary" target="_blank" rel="noreferrer">
                Book Now on WhatsApp
              </a>
              <a href={phoneHref} className="cta-secondary">
                Call for Instant Fare
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {siteConfig.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="soft-panel rounded-2xl px-4 py-4 text-sm font-semibold text-[#f7f3e7]"
                >
                  {highlight}
                </div>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label} className="glass-card rounded-3xl p-5">
                  <p className="text-3xl font-black text-[#fff5d8]">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[#9aa5b5]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card route-glow rounded-[2rem] p-5 sm:p-6 lg:p-7">
            <div className="rounded-[1.6rem] border border-white/10 bg-[#07101a]/80 p-6">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f6b93b]">
                    Popular Route Pricing
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-[#f7f3e7]">
                    Transparent fares customers can see instantly
                  </h2>
                </div>
                <span className="rounded-full border border-[#2ec4b6]/30 bg-[#2ec4b6]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#d5fffb]">
                  Easy Booking Flow
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {siteConfig.routeFares.map((route) => (
                  <div
                    key={`${route.route}-${route.vehicle}`}
                    className="soft-panel rounded-3xl px-5 py-5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="space-y-2">
                        <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#8c97a8]">
                          {route.route}
                        </p>
                        <h3 className="text-xl font-black text-[#f7f3e7]">
                          {route.vehicle}
                        </h3>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-black text-[#fff5d8]">{route.priceLabel}</p>
                        {route.note ? (
                          <p className="mt-1 text-sm text-[#c7cfdb]">{route.note}</p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-[#f6b93b]/20 bg-[#f6b93b]/10 px-5 py-4 text-sm leading-7 text-[#fdf6de]">
                Pricing is intentionally placed high on the page so users can compare
                quickly and contact on WhatsApp without hunting for basic fare details.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            kicker="About The Site"
            title="Built to attract local cab customers, not just look good."
            copy="This homepage balances modern visuals with city-level SEO content, route pricing visibility and strong call-to-action placement so visitors can book faster from mobile search."
          />

          <div className="glass-card rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {siteConfig.advantages.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-[#c7cfdb]"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="section-divider my-7" />
            <p className="text-base leading-8 text-[#f7f3e7]">
              Address focus for local SEO: <span className="font-bold">{siteConfig.contact.address}</span>
            </p>
            <p className="mt-3 text-base leading-8 text-[#9aa5b5]">
              This helps the page connect with intent like taxi service near me,
              Panchkula cab service, Chandigarh airport taxi service and Delhi route
              booking searches.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <SectionHeading
            kicker="Services"
            title="Sections aligned to how people actually search for cabs."
            copy="The service layout covers airport taxi, outstation rides and local travel so the homepage stays relevant for both direct bookings and search discovery across nearby city intents."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {siteConfig.services.map((service) => (
              <article key={service.title} className="glass-card rounded-[2rem] p-7">
                <div className="mb-5 inline-flex rounded-full border border-[#f6b93b]/20 bg-[#f6b93b]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#fff5d8]">
                  {service.title}
                </div>
                <p className="text-base leading-8 text-[#c7cfdb]">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            kicker="Pricing"
            title="Dedicated fare section in the navigation, exactly as requested."
            copy="Users can jump straight from the top menu to route pricing. This helps reduce friction for visitors comparing Delhi and Chandigarh route fares before calling or sending a message."
          />

          <div className="glass-card rounded-[2rem] p-6 sm:p-8">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
              <div className="grid grid-cols-[1.2fr_0.8fr_0.7fr] gap-4 bg-white/5 px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#8c97a8]">
                <span>Route</span>
                <span>Vehicle</span>
                <span className="text-right">Fare</span>
              </div>
              {siteConfig.routeFares.map((route) => (
                <div
                  key={`${route.route}-${route.vehicle}-table`}
                  className="grid grid-cols-[1.2fr_0.8fr_0.7fr] gap-4 border-t border-white/10 px-5 py-5 text-sm sm:text-base"
                >
                  <div className="text-[#f7f3e7]">
                    <p className="font-bold">{route.route}</p>
                    {route.note ? (
                      <p className="mt-1 text-xs text-[#8c97a8]">{route.note}</p>
                    ) : null}
                  </div>
                  <div className="text-[#c7cfdb]">{route.vehicle}</div>
                  <div className="text-right font-black text-[#fff5d8]">{route.priceLabel}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={phoneHref} className="cta-secondary">
                Call to Confirm Fare
              </a>
              <a href={whatsappHref} className="cta-primary" target="_blank" rel="noreferrer">
                Get Fare on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="service-areas" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <SectionHeading
            kicker="Service Areas"
            title="Strong local city targeting for Panchkula, Chandigarh and Mohali."
            copy="This section strengthens local relevance for city-wise searches and helps the website speak clearly to users searching for a taxi service near them."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {siteConfig.serviceAreas.map((area) => (
              <article key={area.name} className="glass-card rounded-[2rem] p-7">
                <h3 className="text-2xl font-black text-[#fff5d8]">{area.name}</h3>
                <p className="mt-4 text-base leading-8 text-[#c7cfdb]">{area.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="glass-card rounded-[2rem] p-7 sm:p-8">
            <SectionHeading
              kicker="Booking Steps"
              title="Simple, low-friction inquiry flow"
              copy="The page encourages fast action by making the booking path easy to understand even for first-time visitors."
            />
            <ol className="mt-8 grid gap-4">
              {siteConfig.bookingSteps.map((step, index) => (
                <li
                  key={step}
                  className="rounded-3xl border border-white/10 bg-white/5 px-5 py-5 text-base leading-7 text-[#c7cfdb]"
                >
                  <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f6b93b] font-black text-[#16120b]">
                    {index + 1}
                  </span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="glass-card rounded-[2rem] p-7 sm:p-8">
            <SectionHeading
              kicker="Why It Converts"
              title="Built for trust signals and direct action"
              copy={siteConfig.brand.trustLine}
            />
            <ul className="list-check mt-8 list-none p-0">
              {siteConfig.advantages.map((item) => (
                <li key={`trust-${item}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="glass-card rounded-[2.2rem] p-7 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              kicker="Near Me SEO"
              title="Content written to support local cab service near me discovery."
              copy="The homepage naturally blends place names, route terms and service intent so it can compete for local taxi searches without reading like spam."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {siteConfig.seo.keywords.map((keyword) => (
                <div
                  key={keyword}
                  className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-[#f7f3e7]"
                >
                  {keyword}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <SectionHeading
            kicker="FAQ"
            title="Helpful answers that also support SEO depth"
            copy="Frequently asked questions give the site additional keyword coverage and make the page more useful to high-intent visitors."
          />

          <div className="grid gap-5">
            {siteConfig.faqs.map((faq) => (
              <article key={faq.question} className="glass-card rounded-[2rem] p-6 sm:p-7">
                <h3 className="text-xl font-black text-[#f7f3e7]">{faq.question}</h3>
                <p className="mt-3 max-w-4xl text-base leading-8 text-[#c7cfdb]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="glass-card rounded-[2.5rem] p-7 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <span className="section-kicker">Contact</span>
              <h2 className="max-w-3xl text-4xl font-black tracking-tight text-[#f7f3e7] sm:text-5xl">
                Make inquiry fast with a call button and WhatsApp deep link.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-[#c7cfdb]">
                Replace the placeholder number in the config and the full site will be
                ready for real inquiries. Address visibility also helps with local
                trust and search relevance.
              </p>
            </div>

            <div className="soft-panel rounded-[2rem] p-6 sm:p-7">
              <div className="space-y-5">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#8c97a8]">
                    Location
                  </p>
                  <p className="mt-2 text-xl font-black text-[#fff5d8]">
                    {siteConfig.contact.address}
                  </p>
                </div>
                <div className="section-divider" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#8c97a8]">
                    Call
                  </p>
                  <a href={phoneHref} className="mt-2 block text-xl font-black text-[#f7f3e7]">
                    {siteConfig.contact.phoneLabel}
                  </a>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#8c97a8]">
                    Quick Action
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <a href={phoneHref} className="cta-secondary">
                      Call Now
                    </a>
                    <a
                      href={whatsappHref}
                      className="cta-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp Booking
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 pb-28 pt-10 md:pb-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-[#8c97a8] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            {siteConfig.brand.name} | {siteConfig.contact.address}
          </p>
          <p>
            Optimized for Panchkula, Chandigarh, Mohali, airport taxi service and
            Delhi route bookings.
          </p>
        </div>
      </footer>

      <MobileCtaBar />
    </main>
  );
}
