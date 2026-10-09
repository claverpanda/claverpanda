import { ArrowUp, Mail } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-st bg-white pt-16 pb-12">
      <div className="page-container">
        <div className="grid gap-10 md:grid-cols-12 pb-12 border-b border-st-secondary">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/CleverPanda%20Tech%20Logo%20copy%20no%20text.png"
                alt="Clever Panda logo"
                className="h-7 w-auto object-contain"
              />
              <img
                src="/CleverPanda%20Tech%20Logo%20only%20text.png"
                alt="Clever Panda"
                className="h-5 w-auto object-contain"
              />
              <span className="sr-only">Clever Panda</span>
              <span className="rounded-full border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-[11px] font-semibold text-indigo-700">
                Startup
              </span>
            </div>

            <p className="text-[14px] leading-relaxed text-tx-secondary max-w-sm">
              CleverPanda builds practical developer tools that make complex software easier to
              understand, analyze, and improve. Initial product concept: <strong>RepoLens</strong>.
            </p>

            <div className="flex flex-col gap-1 text-[13px] text-tx-tertiary">
              <span>Domain: <strong className="text-tx font-mono">claverpanda.dev</strong></span>
              <span>Category: Software Development & IT Services</span>
            </div>
          </div>

          {/* Links: Product */}
          <div className="md:col-span-2 md:col-start-7">
            <p className="font-mono text-[11.5px] font-bold uppercase tracking-wider text-tx-tertiary mb-3.5">
              Product: RepoLens
            </p>
            <ul className="space-y-2 text-[14px]">
              <li>
                <a href="#repolens" className="text-tx-secondary hover:text-tx">
                  Overview
                </a>
              </li>
              <li>
                <a href="#capabilities" className="text-tx-secondary hover:text-tx">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#preview" className="text-tx-secondary hover:text-tx">
                  Interactive Demo
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-tx-secondary hover:text-tx">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-tx-secondary hover:text-tx">
                  Milestones
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Company & Solutions */}
          <div className="md:col-span-2">
            <p className="font-mono text-[11.5px] font-bold uppercase tracking-wider text-tx-tertiary mb-3.5">
              Company
            </p>
            <ul className="space-y-2 text-[14px]">
              <li>
                <a href="#about" className="text-tx-secondary hover:text-tx">
                  Mission & Vision
                </a>
              </li>
              <li>
                <a href="#problem-approach" className="text-tx-secondary hover:text-tx">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#use-cases" className="text-tx-secondary hover:text-tx">
                  Audiences & Roles
                </a>
              </li>
              <li>
                <a href="#top" className="text-tx-secondary hover:text-tx">
                  Back to Top
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Connect */}
          <div className="md:col-span-2">
            <p className="font-mono text-[11.5px] font-bold uppercase tracking-wider text-tx-tertiary mb-3.5">
              Connect
            </p>
            <ul className="space-y-2 text-[14px]">
              <li>
                <a
                  href="mailto:founder@claverpanda.dev"
                  className="inline-flex items-center gap-1.5 text-tx-secondary hover:text-tx font-mono text-[13px]"
                >
                  <Mail size={13} />
                  Email Founder
                </a>
              </li>
              <li>
                <a href="#contact" className="text-tx-secondary hover:text-tx">
                  Message Drafter
                </a>
              </li>
              <li>
                <a href="#contact" className="text-tx-secondary hover:text-tx">
                  Early Access Inquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-[13px] text-tx-tertiary">
          <p>
            © {currentYear} Clever Panda. All rights reserved. Registered domain: claverpanda.dev
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[12px]">
              Single-page static website · Frontend only
            </span>
            <a
              href="#top"
              className="inline-flex items-center gap-1 text-[12.5px] font-medium text-tx-secondary hover:text-tx"
            >
              Top <ArrowUp size={13} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
