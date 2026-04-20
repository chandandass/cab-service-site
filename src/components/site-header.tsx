"use client";

import { useEffect, useState } from "react";

import { phoneHref, siteConfig, whatsappHref } from "@/data/site-config";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

const navigationItems = siteConfig.navigation.map((item) => ({
  ...item,
  sectionId: item.href.replace("#", ""),
}));

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.sectionId))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.65],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    closeMenu();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#EDE9E0] shadow-[0_4px_20px_rgba(26,23,20,0.06)]"
          : "bg-white border-b border-[#EDE9E0]"
      }`}
    >
      <div className="bg-[#FFB800] text-[#1A1200] text-xs font-semibold text-center py-1.5 px-4 tracking-wide hidden sm:block">
        Sector 20, Panchkula · Serving Chandigarh, Mohali &amp; Delhi Routes · Call or WhatsApp for Instant Fare
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2.5 px-4 py-3 sm:gap-3 sm:px-6 sm:py-3 lg:px-8">
        <a
          href="#home"
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-3 min-w-0 flex-1 lg:flex-none"
          aria-label="Abhi Cab Service - Home"
        >
          <div
            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl text-[#1A1200] font-extrabold text-[1.05rem] leading-none sm:text-[1.15rem] shadow-[0_4px_14px_rgba(255,184,0,0.32)] select-none flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #FFB800 0%, #E6A000 100%)" }}
            aria-hidden="true"
          >
            🚕
          </div>
          <div className="leading-tight min-w-0">
            <p
              className="font-extrabold text-[0.98rem] sm:text-[1.05rem] tracking-tight text-[#1A1714] truncate"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {siteConfig.brand.name}
            </p>
            <p className="block translate-y-[1px] text-[0.62rem] min-[380px]:text-[0.68rem] sm:translate-y-0 sm:text-[0.7rem] font-semibold text-[#7A7570] tracking-wide truncate">
              Quick Fare · On-Time Pickup
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleNavClick(item.sectionId)}
              aria-current={activeSection === item.sectionId ? "page" : undefined}
              className={`nav-pill ${activeSection === item.sectionId ? "nav-pill-active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex flex-shrink-0">
          <a
            href={whatsappHref}
            className="cta-whatsapp text-[0.88rem] !py-[0.65rem] !px-[1.2rem]"
            target="_blank"
            rel="noreferrer noopener"
            id="header-whatsapp-btn"
          >
            <WhatsAppIcon />
            WhatsApp Now
          </a>
        </div>

        <div className="lg:hidden flex items-center z-[60]">
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="flex justify-center items-center relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-[#EDE9E0] bg-white cursor-pointer touch-manipulation"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-panel"
          >
            <span
              className={`absolute block w-5 h-0.5 bg-[#1A1714] transition-all duration-300 ${
                isMenuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute block w-5 h-0.5 bg-[#1A1714] transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block w-5 h-0.5 bg-[#1A1714] transition-all duration-300 ${
                isMenuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>

        </div>
      </div>

      {isMenuOpen ? (
        <div
          id="mobile-nav-panel"
          className="lg:hidden border-t border-[#EDE9E0] bg-white animate-in fade-in slide-in-from-top-4"
          style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FFFBF1 100%)" }}
        >
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.sectionId)}
                  aria-current={activeSection === item.sectionId ? "page" : undefined}
                  className={`rounded-xl border px-4 py-3 text-[0.95rem] font-semibold transition-colors ${
                    activeSection === item.sectionId
                      ? "border-[rgba(255,184,0,0.30)] bg-[rgba(255,184,0,0.16)] text-[#7A4E00] shadow-[0_6px_16px_rgba(255,184,0,0.10)]"
                      : "border-transparent text-[#3F3A35] hover:bg-[#FFF7E1] hover:text-[#1A1714]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-3 flex flex-col gap-2 border-t border-[#F1EEE7] pt-3">
              <a
                href={phoneHref}
                onClick={closeMenu}
                className="cta-secondary text-center w-full !justify-center !py-[0.8rem] !rounded-xl !text-[0.9rem]"
              >
                <span aria-hidden="true">Call</span> {siteConfig.contact.phoneLabel}
              </a>
              <a
                href={whatsappHref}
                onClick={closeMenu}
                className="cta-whatsapp text-center w-full !justify-center !py-[0.8rem] !rounded-xl !text-[0.9rem]"
                target="_blank"
                rel="noreferrer noopener"
              >
                <WhatsAppIcon /> WhatsApp Booking
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
