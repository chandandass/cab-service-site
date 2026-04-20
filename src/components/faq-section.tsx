import { siteConfig } from "@/data/site-config";
import { SectionHeading } from "@/components/section-heading";

export function FaqSection() {
  return (
    <section
      className="section-pad"
      aria-label="Frequently asked questions about cab service"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          centered
          className="mb-12"
          kicker="FAQ"
          title="Common Questions"
          copy="Quick answers to help you book with confidence."
        />

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
  );
}
