import { siteConfig } from "@/data/site-config";

export function SiteFooter() {
  return (
    <footer
      className="border-t pb-6"
      style={{ borderColor: "var(--border)", background: "#FAFAF8" }}
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p
              className="font-extrabold text-base"
              style={{
                fontFamily: "var(--font-sora), 'Sora', sans-serif",
                color: "#1A1714",
              }}
            >
              🚕 {siteConfig.brand.name}
            </p>
            <p className="text-xs mt-0.5" style={{ color: "#AAA49C" }}>
              {siteConfig.contact.address}
            </p>
          </div>
          <p className="text-xs" style={{ color: "#AAA49C" }}>
            Cab service in Panchkula, Chandigarh, Mohali · Airport taxi · Delhi routes
          </p>
        </div>
      </div>
    </footer>
  );
}
