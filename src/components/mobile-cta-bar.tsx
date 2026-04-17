import { phoneHref, whatsappHref } from "@/data/site-config";

export function MobileCtaBar() {
  return (
    <div className="sticky-mobile-cta md:hidden">
      <div className="glass-card grid grid-cols-2 gap-3 rounded-[1.8rem] p-3">
        <a href={phoneHref} className="cta-secondary text-sm">
          Call Now
        </a>
        <a href={whatsappHref} className="cta-primary text-sm" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </div>
  );
}
