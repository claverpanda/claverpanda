import {
  BookOpen,
  Boxes,
  Compass,
  FileCode2,
  GitFork,
  Network,
  RefreshCw,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

interface CapabilityItem {
  icon: typeof Network;
  title: string;
  tagline: string;
  description: string;
  status: "In Active Development" | "Prototype" | "Planned" | "Vision Concept";
  badgeVariant: "yellow" | "orange" | "indigo" | "green";
  highlights: string[];
}

const CAPABILITIES: CapabilityItem[] = [
  {
    icon: Network,
    title: "Architecture Visualization",
    tagline: "Interactive map of modules, packages, and layers",
    description:
      "Transform flat directory lists into an interactive topographical view. Visualizes the shape of your system so you can comprehend module hierarchies and architectural tiers at a glance.",
    status: "In Active Development",
    badgeVariant: "yellow",
    highlights: ["Zoomable DAG view", "Layer grouping", "Folder clustering"],
  },
  {
    icon: GitFork,
    title: "Bi-Directional Dependency Tracing",
    tagline: "Inspect imports and dependents in both directions",
    description:
      "Select any file or module to view everything it imports, and more critically, everything that imports it. Trace dependencies through multiple levels of indirection effortlessly.",
    status: "In Active Development",
    badgeVariant: "yellow",
    highlights: ["Incoming & outgoing edges", "Transitive dependency path", "External vs internal modules"],
  },
  {
    icon: RefreshCw,
    title: "Circular Dependency Detection",
    tagline: "Isolate hidden cycle loops before they cause runtime bugs",
    description:
      "Automated detection of circular import loops (A imports B imports C imports A) that quietly couple distant systems together, slow down bundlers, and trigger subtle SSR initialization crashes.",
    status: "Prototype",
    badgeVariant: "orange",
    highlights: ["Cycle path visualization", "Severity rating", "Decoupling suggestions"],
  },
  {
    icon: ShieldAlert,
    title: "Blast Radius & Impact Estimation",
    tagline: "Know what will break before you make changes",
    description:
      "Simulate code changes before refactoring. RepoLens calculates the transitive blast radius of modifying a shared utility or database interface, ranking files by architectural risk.",
    status: "Planned",
    badgeVariant: "indigo",
    highlights: ["Change ripple simulation", "Risk score per file", "Safe refactor planning"],
  },
  {
    icon: BookOpen,
    title: "Living Documentation Assistant",
    tagline: "Source-derived architecture documentation that never rots",
    description:
      "Export auto-updating architectural summaries directly from the codebase. Keep READMEs, module boundaries, and architectural decision records (ADRs) aligned with actual git commits.",
    status: "Planned",
    badgeVariant: "indigo",
    highlights: ["Markdown & Mermaid exports", "Boundary verification", "Commit-level sync"],
  },
  {
    icon: Sparkles,
    title: "Graph-Grounded Architecture Q&A",
    tagline: "Natural language inquiries backed by deterministic AST data",
    description:
      "Ask precise architectural questions in natural language. Because answers are grounded in the verified AST graph rather than unguided text predictions, answers remain accurate and code-accurate.",
    status: "Vision Concept",
    badgeVariant: "green",
    highlights: ["AST-grounded context", "Zero hallucinated imports", "Targeted query engine"],
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-20 py-16 md:py-20">
      <div className="page-container">
        {/* Section Header */}
        <div className="mb-12">
          <span className="section-badge">Product Capabilities</span>
          <h2 className="section-title">Engineered for Codebase Clarity</h2>
          <p className="section-desc">
            RepoLens is being built modularly to solve core architectural challenges. Below is our
            current capability matrix, clearly distinguishing active work from planned milestones.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <article
                key={cap.title}
                className="card card-hover flex flex-col justify-between p-6 transition-all"
              >
                <div>
                  {/* Top Bar with Icon and Status Badge */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                      <Icon size={20} strokeWidth={2} />
                    </span>
                    <span className={`badge badge-${cap.badgeVariant} text-[11.5px]`}>
                      <span className="badge-dot" aria-hidden="true" />
                      {cap.status}
                    </span>
                  </div>

                  <h3 className="font-display text-[19px] font-semibold text-tx">
                    {cap.title}
                  </h3>
                  <p className="font-mono text-[12px] text-tx-tertiary mt-0.5 mb-2.5">
                    {cap.tagline}
                  </p>
                  <p className="text-[14px] leading-relaxed text-tx-secondary">
                    {cap.description}
                  </p>
                </div>

                {/* Highlights tags */}
                <div className="mt-5 border-t border-st-secondary pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {cap.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-sf-secondary px-2 py-0.5 font-mono text-[11px] text-tx-secondary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Status Transparency Note */}
        <div className="mt-8 rounded-xl border border-st bg-sf-secondary/60 p-4 text-center">
          <p className="text-[13px] text-tx-secondary">
            <strong>Transparency Notice:</strong> CleverPanda adheres to strict engineering honesty.
            Features labeled <em>In Active Development</em> or <em>Prototype</em> represent working code
            in our engine; items marked <em>Planned</em> or <em>Vision Concept</em> reflect our documented product roadmap.
          </p>
        </div>
      </div>
    </section>
  );
}
