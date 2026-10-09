import { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Boxes,
  Code2,
  FileCode,
  FolderTree,
  GitBranch,
  Network,
  Sparkles,
} from "lucide-react";

const REPO_TREE_MOCK = [
  {
    name: "src/",
    type: "folder",
    modules: "58 files",
    depth: 0,
    children: [
      { name: "api/client.ts", type: "file", imports: 4, dependents: 12, flag: false },
      { name: "api/queries.ts", type: "file", imports: 8, dependents: 6, flag: true },
      { name: "components/Layout.tsx", type: "file", imports: 6, dependents: 18, flag: false },
      { name: "components/Navigation.tsx", type: "file", imports: 5, dependents: 4, flag: false },
      { name: "hooks/useAuth.ts", type: "file", imports: 3, dependents: 14, flag: false },
      { name: "lib/utils.ts", type: "file", imports: 5, dependents: 22, flag: true },
      { name: "db/schema.ts", type: "file", imports: 1, dependents: 19, flag: false },
    ],
  },
];

export function RepoLensIntro() {
  const [selectedFile, setSelectedFile] = useState(REPO_TREE_MOCK[0]!.children[1]!);

  return (
    <section id="repolens" className="scroll-mt-20 py-16 md:py-20">
      <div className="page-container">
        {/* Section Header */}
        <div className="mb-12">
          <span className="section-badge">First Product Concept</span>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="section-title">RepoLens</h2>
            <span className="badge badge-yellow">
              <span className="badge-dot" aria-hidden="true" />
              In Active Development
            </span>
            <span className="badge badge-indigo">
              <span className="badge-dot" aria-hidden="true" />
              Initial Startup Product
            </span>
          </div>
          <p className="section-desc">
            A developer tool designed to eliminate the cognitive strain of understanding complex
            software. RepoLens parses repository hierarchies into an intelligible architectural model
            — showing how components interact, where dependencies cross boundaries, and where
            structural debt is quietly accumulating.
          </p>
        </div>

        {/* 2-Column Core Architecture Showcase */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left: The Engineering Challenge */}
          <div className="flex flex-col gap-6 lg:col-span-6">
            <div className="card card-hover flex flex-col gap-4 p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                  <Boxes size={20} />
                </span>
                <div>
                  <h3 className="font-display text-[21px] font-semibold text-tx">
                    The Problem: Mental Mapping is Expensive
                  </h3>
                  <p className="text-[13px] text-tx-tertiary">
                    Why developers spend up to 60% of their time reading, not writing
                  </p>
                </div>
              </div>

              <p className="text-[14.5px] leading-[1.7] text-tx-secondary">
                Joining a new team, reviewing a 40-file pull request, or auditing an unfamiliar legacy
                service all share an identical bottleneck: before touching a line of code, you must
                manually reconstruct the architecture in your head.
              </p>

              <p className="text-[14.5px] leading-[1.7] text-tx-secondary">
                In real-world codebases, the true architecture rarely matches the high-level diagrams in
                confluence. It lives in import paths, hidden side effects, and indirect call chains
                scattered across hundreds of files. Building that mental atlas through endless <code className="rounded bg-sf-secondary px-1.5 py-0.5 font-mono text-[13px]">grep</code> and file switching is tedious and error-prone.
              </p>

              <div className="rounded-xl border border-st-2 bg-sf-secondary/70 p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={18} className="mt-0.5 shrink-0 text-orange-600" />
                  <p className="text-[13px] leading-relaxed text-tx-secondary">
                    <strong>Architectural rot is silent:</strong> A developer adds an innocent helper import,
                    inadvertently creating a circular dependency loop or coupling domain logic directly to
                    database drivers. Without tooling to surface this instantly, systems degrade over time.
                  </p>
                </div>
              </div>
            </div>

            {/* What RepoLens Solves */}
            <div className="card card-hover flex flex-col gap-4 p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                  <Network size={20} />
                </span>
                <div>
                  <h3 className="font-display text-[21px] font-semibold text-tx">
                    The Solution: Computed Repository Clarity
                  </h3>
                  <p className="text-[13px] text-tx-tertiary">
                    Deterministic static analysis + living visual topography
                  </p>
                </div>
              </div>

              <p className="text-[14.5px] leading-[1.7] text-tx-secondary">
                RepoLens parses the Abstract Syntax Tree (AST) of your project to generate a living,
                queryable architectural graph. Rather than asking developers to guess what relies on what,
                RepoLens computes exact dependencies, imports, and downstream blast radiuses.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-lg border border-st bg-sf p-3">
                  <p className="font-mono text-[11px] font-semibold text-tx-tertiary uppercase">Focus Area</p>
                  <p className="mt-1 font-semibold text-tx text-[14px]">Dependency Graph</p>
                  <p className="text-[12px] text-tx-secondary mt-0.5">Bi-directional imports & calls</p>
                </div>
                <div className="rounded-lg border border-st bg-sf p-3">
                  <p className="font-mono text-[11px] font-semibold text-tx-tertiary uppercase">Integrity</p>
                  <p className="mt-1 font-semibold text-tx text-[14px]">Cycle Detection</p>
                  <p className="text-[12px] text-tx-secondary mt-0.5">Automated Tarjan loop alerts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Codebase Structure Explorer Preview */}
          <div className="flex flex-col lg:col-span-6">
            <div className="card overflow-hidden h-full flex flex-col">
              {/* Explorer Header */}
              <div className="flex items-center justify-between border-b border-st-secondary bg-sf px-5 py-4">
                <div className="flex items-center gap-2">
                  <FolderTree size={16} className="text-indigo-600" />
                  <span className="text-[14.5px] font-semibold text-tx">
                    Structural Inspector Preview
                  </span>
                </div>
                <span className="badge badge-yellow text-[11px]">Prototype Concept</span>
              </div>

              {/* Inspector Content */}
              <div className="flex-1 bg-code-bg p-5 text-[#e2e8f0]">
                <div className="mb-3 flex items-center justify-between text-[12px] text-slate-400">
                  <span className="font-mono">Select a module to inspect coupling:</span>
                  <span className="font-mono text-[11px]">AST Node Analysis</span>
                </div>

                {/* File List */}
                <div className="space-y-1.5 font-mono text-[13px]">
                  {REPO_TREE_MOCK[0]!.children.map((file) => {
                    const isSelected = selectedFile.name === file.name;
                    return (
                      <button
                        key={file.name}
                        type="button"
                        onClick={() => setSelectedFile(file)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
                          isSelected
                            ? "bg-slate-800 text-white border border-indigo-400/40"
                            : "hover:bg-slate-850 text-slate-300"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <FileCode
                            size={14}
                            className={
                              file.flag
                                ? "text-orange-400"
                                : isSelected
                                ? "text-indigo-400"
                                : "text-slate-400"
                            }
                          />
                          <span>{file.name}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px]">
                          {file.flag && (
                            <span className="rounded bg-orange-950/80 px-1.5 py-0.5 text-orange-300 border border-orange-800/60 font-sans">
                              Cycle Warning
                            </span>
                          )}
                          <span className="text-slate-400">
                            {file.dependents} importers
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Node Details Box */}
                <div className="mt-5 rounded-xl border border-slate-700 bg-slate-900/90 p-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                    <span className="font-mono text-[12px] font-semibold text-indigo-300">
                      Target: {selectedFile.name}
                    </span>
                    <span className="text-[11px] text-slate-400">Module Inspection</span>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3 text-[12px]">
                    <div className="rounded bg-slate-800/80 p-2.5">
                      <p className="text-slate-400">Direct Imports</p>
                      <p className="mt-1 font-mono text-base font-bold text-slate-100">
                        {selectedFile.imports} packages / files
                      </p>
                    </div>
                    <div className="rounded bg-slate-800/80 p-2.5">
                      <p className="text-slate-400">Upstream Dependents</p>
                      <p className="mt-1 font-mono text-base font-bold text-slate-100">
                        {selectedFile.dependents} files depend on this
                      </p>
                    </div>
                  </div>

                  {selectedFile.flag ? (
                    <div className="mt-3 rounded-lg border border-orange-500/30 bg-orange-950/30 p-2.5 text-[12px] text-orange-200">
                      <p className="font-semibold flex items-center gap-1.5">
                        <AlertTriangle size={13} className="text-orange-400" />
                        Circular Import Detected:
                      </p>
                      <p className="mt-1 text-slate-300">
                        <code className="text-orange-300">{selectedFile.name}</code> references{" "}
                        <code className="text-orange-300">
                          {selectedFile.name === "api/queries.ts" ? "lib/utils.ts" : "api/queries.ts"}
                        </code>{" "}
                        which imports back into it. Recommended action: extract shared types to a common interface module.
                      </p>
                    </div>
                  ) : (
                    <div className="mt-3 rounded-lg border border-emerald-500/30 bg-emerald-950/20 p-2.5 text-[12px] text-emerald-200">
                      <p className="font-semibold text-emerald-300">✓ Clean Boundary</p>
                      <p className="mt-1 text-slate-300">
                        No circular references detected. Strict top-down architectural hierarchy respected.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Note */}
              <div className="border-t border-st-secondary bg-sf px-5 py-3 text-[12.5px] text-tx-tertiary">
                Click any module in the tree above to preview how RepoLens calculates dependency coupling.
              </div>
            </div>
          </div>
        </div>

        {/* 4 Architectural Focus Pillars */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card p-5 flex flex-col gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
              <FolderTree size={18} />
            </span>
            <h4 className="font-display text-[17px] font-semibold text-tx">
              Hierarchical Exploration
            </h4>
            <p className="text-[13.5px] leading-relaxed text-tx-secondary">
              Traverse folders and modules with structural clarity instead of flat alphabetical file lists.
            </p>
          </div>

          <div className="card p-5 flex flex-col gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-700">
              <GitBranch size={18} />
            </span>
            <h4 className="font-display text-[17px] font-semibold text-tx">
              Bi-Directional Traces
            </h4>
            <p className="text-[13.5px] leading-relaxed text-tx-secondary">
              Instantly discover both what a file relies on and every upstream consumer that would break if it changes.
            </p>
          </div>

          <div className="card p-5 flex flex-col gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-50 text-yellow-800">
              <AlertTriangle size={18} />
            </span>
            <h4 className="font-display text-[17px] font-semibold text-tx">
              Cycle Isolation
            </h4>
            <p className="text-[13.5px] leading-relaxed text-tx-secondary">
              Identify tangled loops across distant directories that cause subtle initialization and bundling bugs.
            </p>
          </div>

          <div className="card p-5 flex flex-col gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-700">
              <Sparkles size={18} />
            </span>
            <h4 className="font-display text-[17px] font-semibold text-tx">
              Assisted Understanding
            </h4>
            <p className="text-[13.5px] leading-relaxed text-tx-secondary">
              Planned graph-grounded questions so developers can query system design directly in natural language.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
