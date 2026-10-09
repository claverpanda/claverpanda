import { useState } from "react";
import { ArrowRight, Compass, ShieldCheck, Sparkles, Terminal } from "lucide-react";

export function Hero() {
  const [activeView, setActiveView] = useState<"dag" | "cycles">("dag");

  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-16 text-center md:pt-18 md:pb-20">
      <div className="hero-glow" aria-hidden="true" />

      <div className="page-container relative z-10 flex flex-col items-center">
        {/* Brand Icon */}
        <div className="mb-5 flex items-center justify-center">
          <img
            src="/CleverPanda%20Tech%20Logo%20copy%20no%20text.png"
            alt="Clever Panda"
            className="h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(79,70,229,0.25)]"
          />
        </div>

        {/* Eyebrow */}
        <div className="mb-5 flex flex-col items-center gap-2">
          <div className="hero-divider" aria-hidden="true" />
          <p className="font-mono text-[12.5px] font-semibold tracking-[0.08em] uppercase text-indigo-900">
            CLEVER PANDA · Developer Tools &amp; Software Products
          </p>
          <div className="hero-divider" aria-hidden="true" />
        </div>

        {/* Main Headline */}
        <h1 className="mb-5 max-w-[860px] font-display text-[clamp(36px,5.2vw,62px)] font-semibold leading-[1.08] tracking-[-0.025em] text-tx">
          Smarter Tools for Better Software
        </h1>

        {/* Supporting Message */}
        <p className="mb-8 max-w-[720px] text-[clamp(16px,1.9vw,19px)] leading-[1.65] text-tx-secondary">
          CleverPanda builds practical developer tools that make complex software easier to
          understand, analyze, and improve. We&apos;re starting with <strong>RepoLens</strong>, an
          architectural exploration platform designed to help engineers visualize repository
          dependencies, isolate structural complexity, and navigate unfamiliar codebases with confidence.
        </p>

        {/* Action Buttons */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3.5">
          <a href="#repolens" className="btn-primary">
            Explore RepoLens
            <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
          </a>
          <a href="#about" className="btn-secondary">
            <Compass size={16} strokeWidth={2.2} aria-hidden="true" />
            Discover Our Vision
          </a>
          <a
            href="#preview"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-[13.5px] font-medium text-tx-secondary hover:text-indigo-700 transition-colors"
          >
            <Terminal size={14} className="text-indigo-600" aria-hidden="true" />
            Interactive Graph Preview →
          </a>
        </div>

        {/* Key Product Assurance Chips */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3 text-[13px] text-tx-tertiary">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-st bg-sf-secondary px-3 py-1 font-medium text-tx-secondary">
            <ShieldCheck size={14} className="text-green-600" />
            Local-first analysis concept
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-st bg-sf-secondary px-3 py-1 font-medium text-tx-secondary">
            <Sparkles size={14} className="text-indigo-600" />
            AST-driven dependency graph
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-st bg-sf-secondary px-3 py-1 font-medium text-tx-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            Zero cloud code exposure
          </span>
        </div>

        {/* Technical Hero Visual Component */}
        <div className="w-full max-w-[1080px] text-left">
          <div className="card overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
            {/* Window Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-st-secondary bg-sf px-5 py-3.5">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-3 w-3 rounded-full bg-sf-quaternary" />
                  <span className="h-3 w-3 rounded-full bg-sf-quaternary" />
                  <span className="h-3 w-3 rounded-full bg-sf-quaternary" />
                </div>
                <span className="font-mono text-[12px] font-medium text-tx-secondary">
                  repolens · project-matrix · ast-graph
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="inline-flex rounded-full border border-st bg-sf-secondary p-0.5 text-[12px]">
                  <button
                    type="button"
                    onClick={() => setActiveView("dag")}
                    className={`rounded-full px-3 py-1 font-medium transition-all ${
                      activeView === "dag" ? "bg-white text-tx shadow-sm" : "text-tx-tertiary hover:text-tx"
                    }`}
                  >
                    Clean Hierarchy
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveView("cycles")}
                    className={`rounded-full px-3 py-1 font-medium transition-all ${
                      activeView === "cycles" ? "bg-white text-orange-800 shadow-sm" : "text-tx-tertiary hover:text-tx"
                    }`}
                  >
                    Flag Cycles (1)
                  </button>
                </div>
                <span className="badge badge-yellow hidden sm:inline-flex">
                  <span className="badge-dot" />
                  Active Prototype
                </span>
              </div>
            </div>

            {/* Visual Canvas */}
            <div className="relative bg-[linear-gradient(to_bottom,var(--sf)_0%,var(--indigo-50)_130%)] p-6 sm:p-8">
              <div className="grid gap-6 md:grid-cols-12">
                {/* SVG Visual Model */}
                <div className="md:col-span-8">
                  <div className="rounded-xl border border-st bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                    <div className="mb-3 flex items-center justify-between text-[12px]">
                      <span className="font-mono font-medium text-tx-secondary">
                        DAG Topological View: {activeView === "dag" ? "Standard Ingestion" : "Cycle Isolation Mode"}
                      </span>
                      <span className="text-tx-tertiary">Interactive Preview</span>
                    </div>

                    <svg
                      viewBox="0 0 540 220"
                      className="h-auto w-full"
                      role="img"
                      aria-label="Codebase dependency architecture diagram with entrypoints, business logic, and database layer."
                    >
                      {/* Connections */}
                      <path
                        d="M 120 40 L 260 40"
                        stroke="var(--indigo-200)"
                        strokeWidth="1.8"
                        strokeDasharray="3 3"
                        fill="none"
                      />
                      <path
                        d="M 260 40 L 400 40"
                        stroke="var(--indigo-200)"
                        strokeWidth="1.8"
                        fill="none"
                      />
                      <path
                        d="M 260 40 L 260 120"
                        stroke="var(--indigo-200)"
                        strokeWidth="1.8"
                        fill="none"
                      />
                      <path
                        d="M 260 120 L 120 120"
                        stroke="var(--indigo-200)"
                        strokeWidth="1.8"
                        fill="none"
                      />
                      <path
                        d="M 260 120 L 400 120"
                        stroke={activeView === "cycles" ? "var(--orange-500)" : "var(--indigo-200)"}
                        strokeWidth={activeView === "cycles" ? "2.4" : "1.8"}
                        strokeDasharray={activeView === "cycles" ? "4 3" : undefined}
                        fill="none"
                      />
                      {activeView === "cycles" && (
                        <path
                          d="M 400 135 C 330 175, 330 175, 260 135"
                          stroke="var(--orange-500)"
                          strokeWidth="2.4"
                          strokeDasharray="4 3"
                          fill="none"
                        />
                      )}
                      <path
                        d="M 260 120 L 260 185"
                        stroke="var(--indigo-200)"
                        strokeWidth="1.8"
                        fill="none"
                      />

                      {/* Nodes */}
                      {/* Entrypoint */}
                      <g transform="translate(60, 22)">
                        <rect width="110" height="34" rx="8" fill="var(--indigo-50)" stroke="var(--indigo-400)" strokeWidth="1.5" />
                        <text x="55" y="21" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--indigo-900)" fontWeight="600">
                          src/main.ts
                        </text>
                      </g>

                      {/* Router */}
                      <g transform="translate(210, 22)">
                        <rect width="105" height="34" rx="8" fill="white" stroke="var(--st)" strokeWidth="1.5" />
                        <text x="52" y="21" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--tx)">
                          router/index.ts
                        </text>
                      </g>

                      {/* Auth */}
                      <g transform="translate(360, 22)">
                        <rect width="105" height="34" rx="8" fill="white" stroke="var(--st)" strokeWidth="1.5" />
                        <text x="52" y="21" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--tx)">
                          auth/guard.ts
                        </text>
                      </g>

                      {/* UI Layer */}
                      <g transform="translate(60, 102)">
                        <rect width="110" height="34" rx="8" fill="white" stroke="var(--st)" strokeWidth="1.5" />
                        <text x="55" y="21" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--tx)">
                          components/
                        </text>
                      </g>

                      {/* Services / Queries */}
                      <g transform="translate(210, 102)">
                        <rect
                          width="105"
                          height="34"
                          rx="8"
                          fill={activeView === "cycles" ? "var(--orange-50)" : "white"}
                          stroke={activeView === "cycles" ? "var(--orange-500)" : "var(--st)"}
                          strokeWidth="1.5"
                        />
                        <text
                          x="52"
                          y="21"
                          textAnchor="middle"
                          fontFamily="var(--font-mono)"
                          fontSize="11"
                          fill={activeView === "cycles" ? "var(--orange-800)" : "var(--tx)"}
                          fontWeight={activeView === "cycles" ? "600" : "normal"}
                        >
                          api/queries.ts
                        </text>
                      </g>

                      {/* Utilities */}
                      <g transform="translate(360, 102)">
                        <rect
                          width="105"
                          height="34"
                          rx="8"
                          fill={activeView === "cycles" ? "var(--orange-50)" : "white"}
                          stroke={activeView === "cycles" ? "var(--orange-500)" : "var(--st)"}
                          strokeWidth="1.5"
                        />
                        <text
                          x="52"
                          y="21"
                          textAnchor="middle"
                          fontFamily="var(--font-mono)"
                          fontSize="11"
                          fill={activeView === "cycles" ? "var(--orange-800)" : "var(--tx)"}
                          fontWeight={activeView === "cycles" ? "600" : "normal"}
                        >
                          lib/utils.ts
                        </text>
                      </g>

                      {/* DB layer */}
                      <g transform="translate(210, 172)">
                        <rect width="105" height="34" rx="8" fill="white" stroke="var(--st)" strokeWidth="1.5" />
                        <text x="52" y="21" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--tx)">
                          db/schema.ts
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Live Analysis Highlights */}
                <div className="flex flex-col justify-between gap-3 md:col-span-4">
                  <div className="rounded-xl border border-st bg-white/90 p-4 shadow-sm backdrop-blur-sm">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-tx-tertiary">
                      Live Graph Telemetry
                    </p>
                    <div className="mt-3 flex flex-col gap-2.5">
                      <div className="flex items-center justify-between text-[13px]">
                        <span className="text-tx-secondary">Resolved Modules</span>
                        <span className="font-mono font-semibold text-tx">58</span>
                      </div>
                      <div className="flex items-center justify-between text-[13px]">
                        <span className="text-tx-secondary">Import Relationships</span>
                        <span className="font-mono font-semibold text-tx">142</span>
                      </div>
                      <div className="flex items-center justify-between text-[13px]">
                        <span className="text-tx-secondary">Cyclic Loops</span>
                        <span
                          className={`font-mono font-semibold ${
                            activeView === "cycles" ? "text-orange-600" : "text-tx"
                          }`}
                        >
                          {activeView === "cycles" ? "1 detected" : "Hidden"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[13px]">
                        <span className="text-tx-secondary">Max Dependency Depth</span>
                        <span className="font-mono font-semibold text-tx">4 layers</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-st bg-sf-secondary/80 p-3.5 text-[12px] text-tx-secondary">
                    <p className="font-medium text-tx">
                      {activeView === "cycles"
                        ? "⚠️ Alert: queries.ts and utils.ts reference each other directly, coupling the data access and utility layers."
                        : "✓ Top-down hierarchy parsed cleanly from root entrypoints to foundational schema types."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-st-secondary bg-sf px-5 py-3">
              <span className="text-[12.5px] text-tx-tertiary">
                Conceptual preview representing the RepoLens static analysis graph model.
              </span>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-1 text-[13px] font-medium text-indigo-700 hover:text-indigo-900"
              >
                Learn how it works
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
