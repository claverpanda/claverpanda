import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  FileSearch,
  FolderGit2,
  GitGraph,
  Layers,
  Lightbulb,
  ShieldAlert,
} from "lucide-react";

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Point to Repository",
    tagline: "Local directory selection or git repository link",
    description:
      "RepoLens points at your project directory without requiring intrusive build tool plugins, cloud accounts, or complex YAML configuration files.",
    visualType: "code",
    visualContent: `# Run via npx or point locally in-browser
npx @cleverpanda/repolens-inspect ./my-project

→ Ingestion started: scanning 142 files in ./src
→ Language detected: TypeScript / React 19`,
  },
  {
    step: "02",
    title: "Parse AST & Extract Imports",
    tagline: "Deterministic static analysis across all files",
    description:
      "Our static analyzer parses every module into an Abstract Syntax Tree (AST), tracking ES6 imports, dynamic imports, require statements, and barrel exports into a unified symbol table.",
    visualType: "code",
    visualContent: `[AST Parser] Resolving module dependencies...
✓ src/app.tsx           → 3 outgoing imports
✓ src/api/client.ts     → 2 outgoing imports
✓ src/api/queries.ts    → 2 outgoing imports
✓ src/lib/utils.ts      → 1 outgoing import`,
  },
  {
    step: "03",
    title: "Construct Directed Acyclic Graph (DAG)",
    tagline: "Mathematical topological mapping of the system",
    description:
      "The parsed imports are assembled into a directed graph structure. Modules become vertices and import calls become directional edges, establishing clear hierarchical tiers.",
    visualType: "code",
    visualContent: `[Graph Engine] Building dependency matrix...
→ Vertices (Modules): 58
→ Edges (Import links): 142
→ Topological Sort: Depth-first hierarchy generated
→ Density: 0.043 (Healthy modular boundaries)`,
  },
  {
    step: "04",
    title: "Detect Cycles & Architectural Anomalies",
    tagline: "Tarjan algorithm cycle isolation & boundary checks",
    description:
      "Graph analysis algorithms evaluate the structure against architectural best practices: circular dependencies are flagged with precise loops, and unauthorized layer crossings are surfaced.",
    visualType: "code",
    visualContent: `[Integrity Check] 1 circular cycle isolated:
  api/queries.ts (L42: import formatQueryString from lib/utils)
  ▲
  ▼
  lib/utils.ts   (L7:  import type DefaultQueryOptions from api/queries)
⚠ Warning: Layer boundary leakage between API & Lib`,
  },
  {
    step: "05",
    title: "Guide Engineering & Refactoring",
    tagline: "Actionable clarity for PRs, onboarding, and refactoring",
    description:
      "Engineers explore the graph visually or generate living documentation reports to safely plan refactors, calculate change blast radius, and onboard teammates in hours instead of weeks.",
    visualType: "code",
    visualContent: `[Summary Report]
✓ Refactoring path: Extract shared types to src/types/query.ts
✓ Calculated Blast Radius: 4 files impacted
✓ Architecture Score: 92/100 (Clean modularity maintained)`,
  },
];

export function Workflow() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = WORKFLOW_STEPS[activeStepIndex]!;

  return (
    <section id="how-it-works" className="scroll-mt-20 bg-sf-secondary/50 py-16 md:py-20">
      <div className="page-container">
        {/* Section Header */}
        <div className="mb-12">
          <span className="section-badge">Illustrative Workflow</span>
          <h2 className="section-title">How RepoLens Works</h2>
          <p className="section-desc">
            An illustrative walkthrough of the proposed 5-step analysis pipeline — from raw
            repository source files to an actionable, living architectural model.
          </p>
        </div>

        {/* Step Selector Pills */}
        <div className="mb-8 flex flex-wrap gap-2">
          {WORKFLOW_STEPS.map((step, idx) => (
            <button
              key={step.step}
              type="button"
              onClick={() => setActiveStepIndex(idx)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-[13.5px] font-medium transition-all ${
                activeStepIndex === idx
                  ? "bg-white text-tx shadow-sm border border-indigo-300 ring-1 ring-indigo-400"
                  : "bg-sf text-tx-secondary hover:bg-white hover:text-tx border border-st"
              }`}
            >
              <span className="font-mono text-[11px] font-bold text-indigo-700">
                {step.step}
              </span>
              <span>{step.title}</span>
            </button>
          ))}
        </div>

        {/* Step Detail Card */}
        <div className="card overflow-hidden grid lg:grid-cols-12 bg-white border-st">
          {/* Left: Step Explanations */}
          <div className="lg:col-span-6 p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 font-mono text-[13px] font-bold text-indigo-700">
                  {currentStep.step}
                </span>
                <span className="font-mono text-[12px] uppercase tracking-wider text-tx-tertiary">
                  Analysis Pipeline Phase
                </span>
              </div>

              <h3 className="font-display text-[24px] font-semibold text-tx mb-2">
                {currentStep.title}
              </h3>
              <p className="font-mono text-[13px] text-indigo-800 mb-4">
                {currentStep.tagline}
              </p>
              <p className="text-[15px] leading-[1.7] text-tx-secondary">
                {currentStep.description}
              </p>
            </div>

            {/* Stepper Navigation */}
            <div className="mt-8 pt-6 border-t border-st-secondary flex items-center justify-between">
              <button
                type="button"
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((i) => Math.max(0, i - 1))}
                className="text-[13px] font-medium text-tx-secondary hover:text-tx disabled:opacity-40"
              >
                ← Previous Step
              </button>
              <span className="font-mono text-[12px] text-tx-tertiary">
                Step {activeStepIndex + 1} of {WORKFLOW_STEPS.length}
              </span>
              <button
                type="button"
                disabled={activeStepIndex === WORKFLOW_STEPS.length - 1}
                onClick={() => setActiveStepIndex((i) => Math.min(WORKFLOW_STEPS.length - 1, i + 1))}
                className="text-[13px] font-medium text-indigo-700 hover:text-indigo-900 font-semibold disabled:opacity-40"
              >
                Next Step →
              </button>
            </div>
          </div>

          {/* Right: Code Console Visual */}
          <div className="lg:col-span-6 bg-code-bg p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-st-secondary">
            <div>
              <div className="flex items-center justify-between border-b border-slate-700 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                  <span className="font-mono text-[11.5px] text-slate-400 ml-2">
                    repolens-pipeline-output
                  </span>
                </div>
                <span className="font-mono text-[11px] text-indigo-300">
                  Phase {currentStep.step}
                </span>
              </div>

              <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed text-[#f1f5f9]">
                <code>{currentStep.visualContent}</code>
              </pre>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800 text-[12px] text-slate-400">
              Conceptual pipeline simulation. In production, this runs in-memory without mutating files.
            </div>
          </div>
        </div>

        {/* 5-Step Horizontal Summary Card Strip */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={step.step}
              onClick={() => setActiveStepIndex(idx)}
              className={`cursor-pointer rounded-xl p-4 border transition-all ${
                activeStepIndex === idx
                  ? "bg-white border-indigo-400 shadow-sm"
                  : "bg-sf/70 border-st-secondary hover:bg-white"
              }`}
            >
              <span className="font-mono text-[11px] font-bold text-indigo-600">
                STEP {step.step}
              </span>
              <p className="font-display text-[15px] font-semibold text-tx mt-1 truncate">
                {step.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
