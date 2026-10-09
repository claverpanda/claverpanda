import {
  Boxes,
  Code2,
  Compass,
  Cpu,
  Layers,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { BrandMark } from "@/components/brand-mark";

const CORE_PILLARS = [
  {
    icon: Boxes,
    title: "A Software Company, Not a Single Feature",
    description:
      "RepoLens is CleverPanda's flagship initial product concept, but our vision is broader. We are building an independent software company creating developer tools, intelligent utilities, and cloud developer software.",
  },
  {
    icon: Code2,
    title: "Rooted in Developer Ergonomics",
    description:
      "We build software that respects how technical people actually work. Our tools prioritize local execution, low latency, non-destructive inspection, and deterministic outputs.",
  },
  {
    icon: Compass,
    title: "Grounded Engineering Philosophy",
    description:
      "No exaggerated claims or speculative marketing. We solve tangible engineering pain points — code navigation, architectural debt, dependency coupling — with verifiable computer science fundamentals.",
  },
];

const FUTURE_HORIZONS = [
  {
    icon: Terminal,
    title: "Developer Utilities & CLI Tools",
    detail: "Fast, single-purpose CLI utilities for repository auditing and linting.",
  },
  {
    icon: Cpu,
    title: "Intelligent Software Solutions",
    detail: "AST-grounded AI tools that reason over exact codebase structures without hallucinations.",
  },
  {
    icon: Layers,
    title: "Cloud & Team Collaboration Services",
    detail: "Lightweight architectural dashboards for engineering teams and open-source projects.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-sf-secondary/50 py-16 md:py-20">
      <div className="page-container">
        {/* Section Header */}
        <div className="mb-12">
          <span className="section-badge">Company & Vision</span>
          <h2 className="section-title">Clever Panda Builds Software Products</h2>
          <p className="section-desc">
            CleverPanda is an emerging, independent software product startup. We build practical
            tools that make complex software systems easier to understand, build, and maintain.
          </p>
        </div>

        {/* Mission Statement Hero Box */}
        <div className="card relative overflow-hidden p-8 md:p-12 mb-12 border-st bg-white">
          <div className="hero-glow" aria-hidden="true" style={{ top: "10%" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <BrandMark size={28} />
              <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-indigo-700">
                Our Core Mission
              </span>
            </div>

            <blockquote className="font-display text-[clamp(24px,3.5vw,36px)] font-semibold leading-tight text-tx">
              “Making software easier to understand, one useful tool at a time.”
            </blockquote>

            <p className="mt-5 text-[15.5px] leading-relaxed text-tx-secondary">
              As software systems expand, the mental overhead required to maintain them grows
              exponentially. CleverPanda was founded on the belief that engineers shouldn&apos;t have
              to spend decades reverse-engineering their own codebases. We build software that restores
              clarity, shortens comprehension loops, and allows teams to ship with architectural confidence.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-[13px] text-tx-tertiary">
              <span className="font-mono text-tx font-semibold">cleverpanda.dev</span>
              <span>·</span>
              <span>Software Development & IT Services</span>
              <span>·</span>
              <span>Bootstrapped & Independent</span>
            </div>
          </div>
        </div>

        {/* 3 Core Strategic Pillars */}
        <div className="grid gap-6 md:grid-cols-3">
          {CORE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="card card-hover flex flex-col justify-between p-6">
                <div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-800 mb-4">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <h3 className="font-display text-[19px] font-semibold text-tx mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-tx-secondary">
                    {pillar.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Future Product Horizons / Startup Growth */}
        <div className="mt-12 rounded-2xl border border-st bg-sf p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-indigo-700">
                Extensible Platform Vision
              </span>
              <h3 className="font-display text-[20px] font-semibold text-tx mt-1">
                Room to Grow: Future CleverPanda Software Directions
              </h3>
            </div>
            <span className="badge badge-indigo text-[11.5px]">
              Multi-Product Roadmap
            </span>
          </div>

          <p className="text-[14.5px] leading-relaxed text-tx-secondary mb-6 max-w-4xl">
            While RepoLens is our dedicated first effort, the CleverPanda brand is built to house a
            cohesive suite of practical developer tools, utilities, and intelligent engineering services
            over time.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {FUTURE_HORIZONS.map((horizon) => {
              const Icon = horizon.icon;
              return (
                <div key={horizon.title} className="rounded-xl border border-st-secondary bg-white p-4">
                  <div className="flex items-center gap-2 mb-2 text-indigo-700">
                    <Icon size={16} />
                    <h4 className="font-display text-[15.5px] font-semibold text-tx">
                      {horizon.title}
                    </h4>
                  </div>
                  <p className="text-[13px] leading-relaxed text-tx-secondary">
                    {horizon.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
