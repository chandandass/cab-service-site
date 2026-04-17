import { phoneHref, siteConfig, whatsappHref } from "@/data/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[rgba(8,16,28,0.85)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f6b93b] to-[#f59e0b] text-lg font-black text-[#16120b] shadow-[0_18px_40px_rgba(245,158,11,0.24)]">
            AC
          </div>
          <div className="space-y-1">
            <p className="text-base font-black tracking-[0.08em] text-[#fff5d8] uppercase">
              {siteConfig.brand.name}
            </p>
            <p className="text-xs text-[#8c97a8]">{siteConfig.contact.mapsLabel}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 lg:flex">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-pill ${item.featured ? "nav-pill-featured" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={phoneHref} className="cta-secondary">
            Call {siteConfig.contact.phoneLabel}
          </a>
          <a href={whatsappHref} className="cta-primary" target="_blank" rel="noreferrer">
            {siteConfig.contact.whatsappLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
