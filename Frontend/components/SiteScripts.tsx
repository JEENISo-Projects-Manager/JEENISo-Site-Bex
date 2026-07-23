"use client";

import { useEffect } from "react";

export default function SiteScripts() {
  useEffect(() => {
    const burger = document.querySelector<HTMLButtonElement>(".burger-menu");
    const mobileNav = document.getElementById("mobile-nav");
    const overlay = document.querySelector<HTMLElement>(".mobile-overlay");
    const burgerIcon = document.querySelector<SVGElement>(".burger-icon");
    const closeIcon = document.querySelector<SVGElement>(".close-icon");

    function closeMobileMenu() {
      burger?.setAttribute("aria-expanded", "false");
      mobileNav?.classList.remove("is-open");
      mobileNav?.setAttribute("aria-hidden", "true");
      overlay?.classList.remove("is-open");
      if (burgerIcon) burgerIcon.style.display = "";
      if (closeIcon) closeIcon.style.display = "none";
    }

    function toggleMobileMenu() {
      const isOpen = mobileNav?.classList.toggle("is-open");
      burger?.setAttribute("aria-expanded", String(!!isOpen));
      mobileNav?.setAttribute("aria-hidden", String(!isOpen));
      overlay?.classList.toggle("is-open", !!isOpen);
      if (burgerIcon) burgerIcon.style.display = isOpen ? "none" : "";
      if (closeIcon) closeIcon.style.display = isOpen ? "" : "none";
    }

    burger?.addEventListener("click", toggleMobileMenu);
    overlay?.addEventListener("click", closeMobileMenu);

    const mobileDropdownToggle = document.querySelector<HTMLButtonElement>(".mobile-dropdown-toggle");
    const mobileDropdownContent = document.getElementById("mobile-expertises");
    function toggleMobileDropdown() {
      const isOpen = mobileDropdownContent?.classList.toggle("is-open");
      mobileDropdownToggle?.setAttribute("aria-expanded", String(!!isOpen));
    }
    mobileDropdownToggle?.addEventListener("click", toggleMobileDropdown);

    const rdvButton = document.querySelector<HTMLButtonElement>(".nav-cta-dropdown");
    const rdvPanel = document.querySelector<HTMLElement>(".rdv-dropdown-panel");
    function toggleRdv(e: MouseEvent) {
      e.stopPropagation();
      const isOpen = rdvPanel?.classList.toggle("is-open");
      rdvButton?.setAttribute("aria-expanded", String(!!isOpen));
    }
    function closeRdvOnOutsideClick(e: MouseEvent) {
      if (rdvPanel && !rdvPanel.contains(e.target as Node) && e.target !== rdvButton) {
        rdvPanel.classList.remove("is-open");
        rdvButton?.setAttribute("aria-expanded", "false");
      }
    }
    rdvButton?.addEventListener("click", toggleRdv);
    document.addEventListener("click", closeRdvOnOutsideClick);

    const counters = document.querySelectorAll<HTMLElement>(".stat-counter");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          if (el.dataset.animated === "true") return;
          el.dataset.animated = "true";
          const target = parseInt(el.dataset.target || "0", 10);
          const suffix = el.dataset.suffix || "";
          const duration = 1400;
          const start = performance.now();
          function tick(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          observer.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((c) => observer.observe(c));

    return () => {
      burger?.removeEventListener("click", toggleMobileMenu);
      overlay?.removeEventListener("click", closeMobileMenu);
      mobileDropdownToggle?.removeEventListener("click", toggleMobileDropdown);
      rdvButton?.removeEventListener("click", toggleRdv);
      document.removeEventListener("click", closeRdvOnOutsideClick);
      observer.disconnect();
    };
  }, []);

  return null;
}
