import {
  AlertCircle,
  ArrowRight,
  BookX,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  FileSearch,
  GitPullRequest,
  Layers,
  Shield,
  Unplug,
  Zap,
} from "lucide-react";

const PROBLEMS = [
  {
    icon: FileSearch,
    title: "Navigating Unfamiliar Repositories",
    description:
      "When joining a project or auditing an inherited service, developers spend days opening arbitrary files trying to infer the overall architecture from directory names and import statements.",
    tag: "High Cognitive Load",
  },
  {
    icon: Unplug,
    title: "Hidden & Circular Dependencies",
    description:
      "Modern codebases easily slip into subtle circular dependencies across modules. These cycles cause unexpected bundling bloat, tree-shaking failures, and tricky SSR initialization crashes.",
    tag: "Bundling & Runtime Fragility",
  },
  {
    icon: GitPullRequest,
    title: "Uncertain Blast Radius on Changes",
    description:
      "Changing an internal interface or shared utility often triggers unexpected regressions three layers away. Without an accurate dependency map, safe refactoring feels like guesswork.",
    tag: "Refactoring Fear",
  },
  {
    icon: BookX,
    title: "Decaying & Obsolete Documentation",
    description:
      "Architecture diagrams created in design tools or wikis fall out of sync with code within weeks. Static documentation cannot keep pace with continuous pull request merges.",
    tag: "Documentation Drift",
  },
  {
    icon: BrainCircuit,
    title: "Slow Developer Onboarding",
    description:
      "New hires require weeks to achieve confident productivity because architectural boundaries and conventions are rarely surfaced in an interactive, navigable format.",
    tag: "Onboarding Bottleneck",
  },
  {
    icon: Layers,
    title: "Invisible Architectural Drift",
    description:
      "Layer rules (such as 'UI components should never import database connectors') get broken by accidental imports, slowly degrading clean separation into entangled spaghetti code.",
    tag: "System Decay",
  },
];

const APPROACH_PILLARS = [
  {
    icon: Cpu,
    title: "AST-Driven Static Analysis",
    subtitle: "Deterministic truth directly from code",
    description:
      "Instead of relying on fuzzy heuristics or outdated wikis, we parse your project's Abstract Syntax Tree to construct a mathematically precise directed graph of files, imports, and calls.",
    badge: "Deterministic",
  },
  {
    icon: Zap,
    title: "Living Architectural Models",
    subtitle: "Always synced with repository reality",
    description:
      "Because the analysis is generated directly from source files, your architectural view stays true to the current git state — never out of date, never speculative.",
    badge: "Continuous",
  },
  {
    icon: Shield,
    title: "Local-First & Non-Intrusive",
    subtitle: "Zero code leaves your machine",
    description:
      "Our tools are designed to operate locally on your repository files. No mandatory cloud storage, no proprietary server dependencies, and no risk to proprietary source code.",
    badge: "Private",
  },
  {
    icon: CheckCircle2,
    title: "Actionable Visual Feedback",
    subtitle: "Designed for immediate engineering decisions",
    description:
      "Rather than overwhelming engineers with raw graph dumps, we isolate circular loops, identify module hotspots, and estimate the impact radius of targeted changes.",
    badge: "Ergonomic",
  },
];

export function ProblemAndApproach() {
  return (
    <section id="problem-approach" className="scroll-mt-20 bg-sf-secondary/40 py-16 md:py-20">
      <div className="page-container">
        {/* Part 1: The Problem */}
        <div className="mb-12">
          <span className="section-badge">Engineering Challenges</span>
          <h2 className="section-title">The Real Problems Developers Face</h2>
          <p className="section-desc">
            Modern software engineering has great tools for writing, formatting, and deploying code.
            Yet understanding how large software systems actually fit together remains one of the most
            time-consuming parts of the job.
          </p>
        </div>

        {/* 6 Problem Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className="card card-hover flex flex-col justify-between p-6 transition-all"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100/80 text-orange-800">
                      <Icon size={19} />
                    </span>
                    <span className="font-mono text-[11px] font-medium text-tx-tertiary">
                      {problem.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-[18px] font-semibold text-tx mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-tx-secondary">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Part 2: Our Approach Divider */}
        <div className="my-16 flex items-center justify-center">
          <div className="h-px w-full max-w-xs bg-st" />
          <span className="px-4 font-mono text-[12px] uppercase tracking-wider text-tx-tertiary">
            CleverPanda Philosophy
          </span>
          <div className="h-px w-full max-w-xs bg-st" />
        </div>

        {/* Part 2: Our Approach Header */}
        <div className="mb-12">
          <span className="section-badge">Our Approach</span>
          <h2 className="section-title">How Practical Tooling Restores Clarity</h2>
          <p className="section-desc">
            We believe software tools should be lightweight, transparent, and focused on making complex
            technical systems understandable. Our approach centers on deterministic computation over
            hand-waving.
          </p>
        </div>

        {/* 4 Approach Pillars Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {APPROACH_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="card card-hover flex flex-col justify-between p-7"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                      <Icon size={20} />
                    </span>
                    <span className="badge badge-indigo text-[11px] font-mono">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-[20px] font-semibold text-tx">
                    {pillar.title}
                  </h3>
                  <p className="font-mono text-[12.5px] text-indigo-800 mt-1 mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-[14.5px] leading-relaxed text-tx-secondary">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table / Summary */}
        <div className="mt-10 card overflow-hidden border-st">
          <div className="border-b border-st-secondary bg-sf px-6 py-4">
            <h4 className="font-display text-[17px] font-semibold text-tx">
              At a Glance: Traditional Code Navigation vs. CleverPanda Approach
            </h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[14px]">
              <thead className="border-b border-st-secondary bg-sf-secondary/50 font-mono text-[12px] text-tx-tertiary uppercase">
                <tr>
                  <th className="py-3 px-6">Dimension</th>
                  <th className="py-3 px-6">Traditional Development Workflow</th>
                  <th className="py-3 px-6 text-indigo-900">CleverPanda / RepoLens Paradigm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-st-secondary">
                <tr className="hover:bg-sf-secondary/20">
                  <td className="py-3.5 px-6 font-semibold text-tx">Understanding Architecture</td>
                  <td className="py-3.5 px-6 text-tx-secondary">Manual grep, file-by-file mental tracing</td>
                  <td className="py-3.5 px-6 font-medium text-indigo-950">
                    Calculated AST dependency graphs & interactive topology
                  </td>
                </tr>
                <tr className="hover:bg-sf-secondary/20">
                  <td className="py-3.5 px-6 font-semibold text-tx">Circular Dependencies</td>
                  <td className="py-3.5 px-6 text-tx-secondary">Discovered only when builds fail or SSR breaks</td>
                  <td className="py-3.5 px-6 font-medium text-indigo-950">
                    Proactive cycle detection with loop visualization
                  </td>
                </tr>
                <tr className="hover:bg-sf-secondary/20">
                  <td className="py-3.5 px-6 font-semibold text-tx">Refactoring Safety</td>
                  <td className="py-3.5 px-6 text-tx-secondary">Hope unit tests catch indirect downstream breakages</td>
                  <td className="py-3.5 px-6 font-medium text-indigo-950">
                    Upstream blast-radius calculation before committing edits
                  </td>
                </tr>
                <tr className="hover:bg-sf-secondary/20">
                  <td className="py-3.5 px-6 font-semibold text-tx">Documentation Freshness</td>
                  <td className="py-3.5 px-6 text-tx-secondary">Wiki pages that quickly grow obsolete and forgotten</td>
                  <td className="py-3.5 px-6 font-medium text-indigo-950">
                    Live source-derived architectural views tied to git commits
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
