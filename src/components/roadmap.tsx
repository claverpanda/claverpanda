import {
  Boxes,
  CheckCircle2,
  Clock,
  Compass,
  GitBranch,
  Layers,
  Milestone,
  Sparkles,
  Terminal,
} from "lucide-react";

interface MilestonePhase {
  phase: string;
  badge: string;
  badgeColor: "green" | "yellow" | "indigo";
  title: string;
  objective: string;
  deliverables: { name: string; status: "Complete" | "In Progress" | "Planned" }[];
}

const PHASES: MilestonePhase[] = [
  {
    phase: "Phase 1: Foundation & Static Exploration",
    badge: "Active Focus",
    badgeColor: "yellow",
    title: "Core AST Engine & Topological Graph",
    objective:
      "Establish the deterministic parser engine for JavaScript/TypeScript projects, validating import hierarchies and isolating circular cycles.",
    deliverables: [
      { name: "Brand design system & interactive web platform", status: "Complete" },
      { name: "Abstract Syntax Tree (AST) import resolver", status: "In Progress" },
      { name: "Tarjan algorithm circular loop detector", status: "In Progress" },
      { name: "Interactive in-browser graph visualization workbench", status: "In Progress" },
    ],
  },
  {
    phase: "Phase 2: Architectural Intelligence",
    badge: "Next Milestone",
    badgeColor: "indigo",
    title: "Boundary Rules & Impact Simulation",
    objective:
      "Advance beyond passive graph viewing by enabling engineers to define structural boundaries and calculate the ripple effect of proposed changes.",
    deliverables: [
      { name: "Blast radius & transitive dependency impact calculator", status: "Planned" },
      { name: "Custom layer boundary rules (e.g., prevent UI importing DB)", status: "Planned" },
      { name: "Codebase coupling metrics & hotspot indicators", status: "Planned" },
      { name: "Exportable living architecture summaries (Markdown/SVG)", status: "Planned" },
    ],
  },
  {
    phase: "Phase 3: Ecosystem & Workflow Integrations",
    badge: "Future Vision",
    badgeColor: "indigo",
    title: "Toolchain Hooks & Assisted Understanding",
    objective:
      "Integrate RepoLens into developers' existing daily loops — git commits, pull request checks, and code editors.",
    deliverables: [
      { name: "RepoLens CLI for git pre-commit & CI pipelines", status: "Planned" },
      { name: "GitHub Actions PR bot for architectural boundary checks", status: "Planned" },
      { name: "VS Code extension for real-time import navigation", status: "Planned" },
      { name: "Graph-grounded natural language architecture assistant", status: "Planned" },
    ],
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="scroll-mt-20 py-16 md:py-20">
      <div className="page-container">
        {/* Section Header */}
        <div className="mb-12">
          <span className="section-badge">Forward Momentum</span>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="section-title">Product Roadmap</h2>
            <span className="badge badge-indigo">
              <span className="badge-dot" aria-hidden="true" />
              Proposed Milestones
            </span>
          </div>
          <p className="section-desc">
            Our deliberate, engineering-first roadmap for RepoLens. We focus on deterministic
            foundations before adding higher-level integrations.
          </p>
        </div>

        {/* 3 Milestone Phase Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {PHASES.map((phase, idx) => (
            <div
              key={phase.phase}
              className="card card-hover flex flex-col justify-between p-6 sm:p-7 relative overflow-hidden"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-tx-tertiary">
                    Phase 0{idx + 1}
                  </span>
                  <span className={`badge badge-${phase.badgeColor} text-[11.5px]`}>
                    <span className="badge-dot" />
                    {phase.badge}
                  </span>
                </div>

                <h3 className="font-display text-[20px] font-semibold text-tx mb-2">
                  {phase.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-tx-secondary mb-6">
                  {phase.objective}
                </p>

                {/* Deliverables Checklist */}
                <div className="border-t border-st-secondary pt-4">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-tx-tertiary">
                    Key Objectives:
                  </span>
                  <ul className="mt-3 space-y-2.5">
                    {phase.deliverables.map((item) => (
                      <li key={item.name} className="flex items-start gap-2.5 text-[13px]">
                        {item.status === "Complete" ? (
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-emerald-600"
                          />
                        ) : item.status === "In Progress" ? (
                          <Clock
                            size={16}
                            className="mt-0.5 shrink-0 text-orange-600"
                          />
                        ) : (
                          <div className="mt-1 h-3.5 w-3.5 rounded-full border border-st shrink-0" />
                        )}
                        <div className="flex-1">
                          <span
                            className={
                              item.status === "Complete"
                                ? "text-tx font-medium"
                                : item.status === "In Progress"
                                ? "text-tx font-medium"
                                : "text-tx-secondary"
                            }
                          >
                            {item.name}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Status Note Footer */}
              <div className="mt-8 border-t border-st-secondary pt-3 text-[11.5px] text-tx-tertiary font-mono">
                {idx === 0
                  ? "Active development iteration"
                  : idx === 1
                  ? "Targeted next cycle"
                  : "Long-term architecture direction"}
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap Integrity Note */}
        <div className="mt-8 rounded-xl border border-st bg-sf-secondary/40 p-4 text-center">
          <p className="text-[12.5px] text-tx-tertiary">
            <strong>Engineering Grounding:</strong> Milestones reflect technical priorities, not
            binding contractual deadlines. We ship each layer once deterministic reliability is proven.
          </p>
        </div>
      </div>
    </section>
  );
}
