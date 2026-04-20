import Image from "next/image";
import { siteConfig } from "@/data/site-config";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{ background: "var(--gray-50)" }}
      aria-label="About Abhi Cab Service"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <span className="section-kicker">About Us</span>
            <h2
              className="section-title"
              style={{ fontFamily: "var(--font-sora), 'Sora', sans-serif" }}
            >
              Personal Cab Service Based in Sector 20, Panchkula
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#4A4740" }}>
              Abhi Cab Service is a personal, dedicated taxi provider operating from{" "}
              <strong>Sector 20, Panchkula, near Suncity</strong>. We specialise in
              local city rides, Chandigarh airport taxi service, and popular outstation
              routes like Panchkula to Delhi and Delhi to Chandigarh.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#4A4740" }}>
              Unlike app-based aggregators, we offer a <em>personal</em> service
              experience — you speak directly to the driver, confirm your fare upfront,
              and get a clean, comfortable car on time. No surge pricing. No surprises.
            </p>
            <ul className="list-check list-none p-0 mt-5">
              {siteConfig.advantages.slice(0, 4).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Right: image collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card overflow-hidden rounded-2xl col-span-2 aspect-video relative">
              <Image
                src="/images/outstation-cab.png"
                alt="Outstation cab for Panchkula to Delhi route booking"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="card overflow-hidden rounded-2xl aspect-[4/3] relative">
              <Image
                src="/images/airport-cab.png"
                alt="Chandigarh airport taxi pickup service"
                fill
                sizes="(min-width: 1024px) 18vw, 50vw"
                className="object-cover object-center"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-3"
                style={{ background: "linear-gradient(to top, rgba(26,23,20,0.78) 0%, transparent)" }}
              >
                <p className="text-xs font-bold text-white">✈ Airport Pickups</p>
              </div>
            </div>
            <div
              className="card-warm rounded-2xl p-4 flex flex-col justify-center"
              style={{ minHeight: "120px" }}
            >
              <p
                className="text-[0.65rem] font-bold uppercase tracking-[0.12em] mb-1"
                style={{ color: "#9A6700" }}
              >
                Based At
              </p>
              <p
                className="font-extrabold text-base leading-tight"
                style={{ fontFamily: "var(--font-sora), 'Sora', sans-serif", color: "#1A1714" }}
              >
                Sector 20 Panchkula
              </p>
              <p className="text-sm mt-1" style={{ color: "#7A7570" }}>
                Near Suncity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
