import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const PRIMARY_NAV_LINKS = [
  { href: "#top", label: "Overview" },
  { href: "#repolens", label: "RepoLens" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-st/80 bg-white/95 backdrop-blur-md transition-all">
      <div className="page-container flex items-center justify-between py-3">
        {/* Left: Clever Panda Logo + Wordmark */}
        <a
          href="#top"
          className="flex items-center gap-3 no-underline transition-opacity hover:opacity-90"
          aria-label="Clever Panda"
        >
          <img
            src="/CleverPanda%20Tech%20Logo%20copy%20no%20text.png"
            alt="Clever Panda logo"
            className="h-11 w-auto object-contain"
          />
          <img
            src="/CleverPanda%20Tech%20Logo%20only%20text.png"
            alt=""
            aria-hidden="true"
            className="h-6 w-auto object-contain"
          />
          <span className="sr-only">Clever Panda</span>
        </a>

        {/* Right: Clean, horizontally aligned 6-item navigation */}
        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-1.5">
            {PRIMARY_NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-1.5 text-[14.5px] font-medium text-tx-secondary no-underline transition-colors hover:bg-sf-secondary hover:text-tx focus-visible:outline-2 focus-visible:outline-indigo-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu trigger */}
        <button
          type="button"
          className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg text-tx transition-colors hover:bg-sf-secondary md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-st-secondary bg-white px-6 py-4 shadow-lg md:hidden"
        >
          <ul className="page-container flex flex-col gap-1 px-0">
            {PRIMARY_NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-2.5 text-[15px] font-medium text-tx-secondary no-underline transition-colors hover:bg-sf-secondary hover:text-tx"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
