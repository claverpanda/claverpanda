import {
  Code2,
  GraduationCap,
  Layers,
  ShieldCheck,
  Users2,
} from "lucide-react";

const AUDIENCES = [
  {
    icon: Code2,
    role: "Individual Software Developers",
    tagline: "Solo builders & freelance engineers",
    benefit:
      "Cut down the cognitive fatigue of switching between client repositories or diving into large unfamiliar codebases. Build an instant mental model of module flow without hours of manual tracing.",
    useCases: [
      "Rapidly trace imports when debugging regressions",
      "Safely decouple utility files before major refactoring",
      "Verify local project architecture before pushing commits",
    ],
  },
  {
    icon: Users2,
    role: "Engineering Teams & Tech Leads",
    tagline: "Teams managing growing production services",
    benefit:
      "Maintain strict architectural hygiene across growing teams. Prevent unintentional circular dependencies and boundary violations from silently slipping into pull requests.",
    useCases: [
      "Review pull-request blast radius before approving changes",
      "Enforce layer isolation (e.g. keep UI separate from persistence)",
      "Plan large-scale modular migrations and micro-frontend splits",
    ],
  },
  {
    icon: GraduationCap,
    role: "New Hires & Onboarding Engineers",
    tagline: "Developers joining existing production teams",
    benefit:
      "Dramatically reduce time-to-first-commit. Instead of relying on tribal knowledge or stale setup guides, new engineers can explore an interactive, living atlas of the codebase.",
    useCases: [
      "Locate the true entrypoints and core domain services",
      "Understand what components touch authentication and routing",
      "Gain confidence to modify code without fear of hidden side effects",
    ],
  },
  {
    icon: Layers,
    role: "Open-Source Contributors",
    tagline: "Developers making pull requests to public libraries",
    benefit:
      "Quickly comprehend the architecture of large open-source repositories (such as React, Vite, or Next.js ecosystems) before submitting PRs, ensuring contributions match repository conventions.",
    useCases: [
      "Identify the exact file responsible for a reported bug",
      "Check that new helper functions don't introduce circular cycles",
      "Demonstrate architectural compliance to maintainers",
    ],
  },
  {
    icon: ShieldCheck,
    role: "System Architects & Reviewers",
    tagline: "Engineers auditing software stability & debt",
    benefit:
      "Objectively measure codebase coupling, identify high-risk architectural hotspots, and establish quantifiable boundaries that protect system health over time.",
    useCases: [
      "Audit technical debt and coupling during quarterly reviews",
      "Identify single points of failure across internal shared modules",
      "Generate verifiable architecture decision documentation",
    ],
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="scroll-mt-20 py-16 md:py-20">
      <div className="page-container">
        {/* Section Header */}
        <div className="mb-12">
          <span className="section-badge">Audiences & Use Cases</span>
          <h2 className="section-title">Built for Everyone Who Touches Code</h2>
          <p className="section-desc">
            Understanding software architecture is a universal challenge across every stage of the
            engineering lifecycle. RepoLens delivers targeted clarity tailored to specific developer needs.
          </p>
        </div>

        {/* 5 Audience Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.role}
                className={`card card-hover flex flex-col justify-between p-6 transition-all ${
                  idx === 0 ? "lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                      <Icon size={20} strokeWidth={2} />
                    </span>
                    <span className="font-mono text-[11px] text-tx-tertiary">
                      Developer Role
                    </span>
                  </div>

                  <h3 className="font-display text-[19px] font-semibold text-tx">
                    {item.role}
                  </h3>
                  <p className="font-mono text-[12px] text-indigo-800 mt-0.5 mb-3">
                    {item.tagline}
                  </p>
                  <p className="text-[14px] leading-relaxed text-tx-secondary mb-4">
                    {item.benefit}
                  </p>
                </div>

                <div className="border-t border-st-secondary pt-3.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-tx-tertiary">
                    Typical Workflows:
                  </span>
                  <ul className="mt-2 space-y-1.5 text-[12.5px] text-tx-secondary">
                    {item.useCases.map((uc) => (
                      <li key={uc} className="flex items-start gap-1.5">
                        <span className="mt-1 h-1 w-1 rounded-full bg-indigo-500 shrink-0" />
                        <span>{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
