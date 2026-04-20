import { phoneHref, whatsappHref } from "@/data/site-config";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function MobileCtaBar() {
  return (
    <div className="sticky-mobile-cta md:hidden" role="complementary" aria-label="Quick booking actions">
      <div
        className="flex flex-col items-center gap-2 rounded-full border px-2 py-2"
        style={{
          background: "rgba(255,255,255,0.68)",
          borderColor: "rgba(237,233,224,0.75)",
          boxShadow: "0 12px 30px rgba(26,23,20,0.10)",
          backdropFilter: "blur(10px)",
        }}
      >
        <a
          href={phoneHref}
          id="mobile-cta-call"
          aria-label="Call now"
          className="flex h-11 w-11 items-center justify-center rounded-full border text-[#1A1714] transition-all duration-200"
          style={{
            background: "rgba(255,255,255,0.78)",
            borderColor: "rgba(237,233,224,0.85)",
            boxShadow: "0 8px 20px rgba(26,23,20,0.06)",
          }}
        >
          <span aria-hidden="true" className="text-[1.05rem] leading-none">📞</span>
        </a>
        <a
          href={whatsappHref}
          id="mobile-cta-whatsapp"
          aria-label="Chat on WhatsApp"
          className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-all duration-200"
          style={{
            background: "linear-gradient(135deg, rgba(37,211,102,0.88) 0%, rgba(20,138,67,0.88) 100%)",
            boxShadow: "0 10px 24px rgba(20,138,67,0.18)",
          }}
          target="_blank"
          rel="noreferrer noopener"
        >
          <WhatsAppIcon className="h-5 w-5 text-white" />
        </a>
      </div>
    </div>
  );
}
