import { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Cpu,
  FileCode,
  FolderTree,
  GitBranch,
  Layers,
  Network,
  RotateCcw,
  Search,
  ShieldAlert,
  Sparkles,
  Terminal,
} from "lucide-react";

// Interactive Graph Nodes & Edges
interface NodeData {
  id: string;
  x: number;
  y: number;
  label: string;
  category: "entry" | "api" | "ui" | "lib" | "data";
  imports: string[];
  importedBy: string[];
  lines: number;
  hasCycle?: boolean;
}

const NODES: NodeData[] = [
  {
    id: "app",
    x: 340,
    y: 38,
    label: "src/app.tsx",
    category: "entry",
    imports: ["api/client.ts", "components/Nav.tsx", "hooks/useAuth.ts"],
    importedBy: [],
    lines: 112,
  },
  {
    id: "api",
    x: 120,
    y: 130,
    label: "api/client.ts",
    category: "api",
    imports: ["api/queries.ts", "lib/utils.ts"],
    importedBy: ["src/app.tsx"],
    lines: 84,
  },
  {
    id: "nav",
    x: 340,
    y: 130,
    label: "components/Nav.tsx",
    category: "ui",
    imports: ["hooks/useAuth.ts", "lib/utils.ts"],
    importedBy: ["src/app.tsx"],
    lines: 145,
  },
  {
    id: "auth",
    x: 560,
    y: 130,
    label: "hooks/useAuth.ts",
    category: "lib",
    imports: ["api/client.ts"],
    importedBy: ["src/app.tsx", "components/Nav.tsx"],
    lines: 96,
  },
  {
    id: "queries",
    x: 120,
    y: 236,
    label: "api/queries.ts",
    category: "api",
    imports: ["lib/utils.ts", "db/schema.ts"],
    importedBy: ["api/client.ts", "lib/utils.ts"],
    lines: 240,
    hasCycle: true,
  },
  {
    id: "utils",
    x: 340,
    y: 236,
    label: "lib/utils.ts",
    category: "lib",
    imports: ["api/queries.ts"],
    importedBy: ["api/client.ts", "components/Nav.tsx", "api/queries.ts"],
    lines: 180,
    hasCycle: true,
  },
  {
    id: "schema",
    x: 560,
    y: 236,
    label: "db/schema.ts",
    category: "data",
    imports: [],
    importedBy: ["api/queries.ts"],
    lines: 310,
  },
];

const EDGES = [
  { from: "app", to: "api", isCycle: false },
  { from: "app", to: "nav", isCycle: false },
  { from: "app", to: "auth", isCycle: false },
  { from: "api", to: "queries", isCycle: false },
  { from: "nav", to: "auth", isCycle: false },
  { from: "nav", to: "utils", isCycle: false },
  { from: "queries", to: "schema", isCycle: false },
  { from: "queries", to: "utils", isCycle: true },
  { from: "utils", to: "queries", isCycle: true },
];

// Blast radius simulation targets
const BLAST_TARGETS = [
  {
    id: "lib/utils.ts",
    label: "lib/utils.ts (Shared Utility)",
    severity: "High",
    affectedCount: 5,
    affectedFiles: ["api/queries.ts", "api/client.ts", "components/Nav.tsx", "src/app.tsx"],
    summary:
      "Modifying this module impacts 71% of top-level application flows due to direct import from both API and UI layers.",
  },
  {
    id: "db/schema.ts",
    label: "db/schema.ts (Core Database Schema)",
    severity: "Critical",
    affectedCount: 6,
    affectedFiles: ["api/queries.ts", "api/client.ts", "src/app.tsx"],
    summary:
      "Foundational data contract. Schema type changes cascade transitively through query executors into all consumer views.",
  },
  {
    id: "components/Nav.tsx",
    label: "components/Nav.tsx (Leaf UI Component)",
    severity: "Low",
    affectedCount: 1,
    affectedFiles: ["src/app.tsx"],
    summary:
      "Isolated UI layer node. Changes have zero downstream dependents outside the top-level route renderer.",
  },
];

// Q&A Sample Prompts
const QA_PROMPTS = [
  {
    q: "Why is there a circular dependency between queries.ts and utils.ts?",
    a: "AST analysis reveals that `api/queries.ts` imports `formatQueryString()` from `lib/utils.ts` (line 42), while `lib/utils.ts` imports `DefaultQueryOptions` type from `api/queries.ts` (line 7). \n\nRecommended fix: Move the shared type definition to a dedicated `src/types/query.ts` module to break the cycle.",
  },
  {
    q: "What modules directly access the database schema?",
    a: "`db/schema.ts` is only directly referenced by `api/queries.ts`. The UI components and hooks do not bypass the API layer, respecting the intended 3-tier boundary.",
  },
  {
    q: "Which module has the highest blast radius in this project?",
    a: "`lib/utils.ts` and `db/schema.ts`. Both lie on critical transitive paths. A breaking signature change in `lib/utils.ts` will trigger typecheck failures across 4 upstream files.",
  },
];

export function ProductPreview() {
  const [activeTab, setActiveTab] = useState<"graph" | "blast" | "qa">("graph");
  const [selectedNode, setSelectedNode] = useState<NodeData>(NODES[4]!); // queries.ts
  const [filterMode, setFilterMode] = useState<"all" | "cycles">("all");
  const [selectedBlast, setSelectedBlast] = useState(BLAST_TARGETS[0]!);
  const [selectedQAIndex, setSelectedQAIndex] = useState(0);

  // Helper to draw edge paths
  const getNode = (id: string) => NODES.find((n) => n.id === id);

  return (
    <section id="preview" className="scroll-mt-20 py-16 md:py-20">
      <div className="page-container">
        {/* Section Header */}
        <div className="mb-10">
          <span className="section-badge">Interactive Concept Workbench</span>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="section-title">Seeing Software Architecture as a Graph</h2>
            <span className="badge badge-orange">
              <span className="badge-dot" aria-hidden="true" />
              Interactive Prototype
            </span>
          </div>
          <p className="section-desc">
            Experience how RepoLens transforms dense codebases into navigable intelligence.
            Interact with the dependency graph, simulate refactoring blast radius, or preview
            graph-grounded architectural inquiries.
          </p>
        </div>

        {/* Tab Selector Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-st pb-4">
          <div className="inline-flex rounded-xl border border-st bg-sf-secondary p-1">
            <button
              type="button"
              onClick={() => setActiveTab("graph")}
              className={`tab-pill ${activeTab === "graph" ? "tab-pill-active" : ""}`}
            >
              <Network size={16} />
              1. Dependency Graph & Cycles
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("blast")}
              className={`tab-pill ${activeTab === "blast" ? "tab-pill-active" : ""}`}
            >
              <ShieldAlert size={16} />
              2. Blast Radius Simulator
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("qa")}
              className={`tab-pill ${activeTab === "qa" ? "tab-pill-active" : ""}`}
            >
              <Sparkles size={16} />
              3. Graph-Grounded Q&A (Vision)
            </button>
          </div>

          <span className="text-[12.5px] font-mono text-tx-tertiary">
            Demo Project: <code>acme-platform (v1.4)</code>
          </span>
        </div>

        {/* Main Workbench Frame */}
        <div className="card overflow-hidden shadow-md">
          {/* Window Chrome */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-st-secondary bg-sf px-5 py-3.5">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-sf-quaternary" />
                <span className="h-3 w-3 rounded-full bg-sf-quaternary" />
                <span className="h-3 w-3 rounded-full bg-sf-quaternary" />
              </div>
              <span className="font-mono text-[12.5px] font-medium text-tx-secondary">
                repolens · {activeTab === "graph" ? "graph-view" : activeTab === "blast" ? "blast-radius-analyzer" : "architectural-qa"}
              </span>
            </div>

            {activeTab === "graph" && (
              <div className="flex items-center gap-2">
                <span className="text-[12px] text-tx-tertiary hidden sm:inline">Filter:</span>
                <button
                  type="button"
                  onClick={() => setFilterMode("all")}
                  className={`rounded-full px-2.5 py-1 text-[12px] font-medium transition-colors ${
                    filterMode === "all" ? "bg-white shadow-xs text-tx font-semibold" : "text-tx-secondary hover:text-tx"
                  }`}
                >
                  All Edges ({EDGES.length})
                </button>
                <button
                  type="button"
                  onClick={() => setFilterMode("cycles")}
                  className={`rounded-full px-2.5 py-1 text-[12px] font-medium transition-colors ${
                    filterMode === "cycles" ? "bg-orange-100 text-orange-800 font-semibold" : "text-tx-secondary hover:text-tx"
                  }`}
                >
                  Isolate Cycles (2)
                </button>
              </div>
            )}
          </div>

          {/* TAB 1: DEPENDENCY GRAPH */}
          {activeTab === "graph" && (
            <div className="grid lg:grid-cols-12 bg-sf">
              {/* Left SVG Graph Canvas */}
              <div className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-st-secondary p-4 sm:p-6 bg-[linear-gradient(to_bottom,var(--sf)_0%,var(--indigo-50)_140%)]">
                <div className="mb-2 flex items-center justify-between text-[12px] text-tx-tertiary">
                  <span className="font-mono">Click a node to inspect coupling</span>
                  <div className="flex items-center gap-3 font-mono text-[11px]">
                    <span className="flex items-center gap-1">
                      <span className="h-2 w-4 bg-indigo-300 rounded" /> Import
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="h-0 w-4 border-t-2 border-dashed border-orange-500" /> Circular Loop
                    </span>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <svg
                    viewBox="0 0 700 320"
                    className="mx-auto block h-auto w-full min-w-[620px]"
                    role="img"
                    aria-label="Interactive dependency graph of sample codebase"
                  >
                    {/* Render Edges */}
                    {EDGES.map((edge, i) => {
                      const source = getNode(edge.from);
                      const target = getNode(edge.to);
                      if (!source || !target) return null;

                      if (filterMode === "cycles" && !edge.isCycle) return null;

                      // Calculate curved lines
                      const sx = source.x + 55;
                      const sy = source.y + 18;
                      const tx = target.x + 55;
                      const ty = target.y + 18;

                      let d = `M ${sx} ${sy} C ${sx} ${(sy + ty) / 2}, ${tx} ${(sy + ty) / 2}, ${tx} ${ty}`;
                      if (edge.isCycle) {
                        const offset = edge.from === "queries" ? 22 : -22;
                        d = `M ${sx} ${sy + (edge.from === "queries" ? 12 : -12)} Q ${(sx + tx) / 2} ${(sy + ty) / 2 + offset} ${tx} ${ty + (edge.to === "queries" ? 12 : -12)}`;
                      }

                      return (
                        <path
                          key={i}
                          d={d}
                          fill="none"
                          stroke={edge.isCycle ? "var(--orange-500)" : "var(--indigo-200)"}
                          strokeWidth={edge.isCycle ? 2.4 : 1.6}
                          strokeDasharray={edge.isCycle ? "5 4" : undefined}
                          className="transition-all"
                        />
                      );
                    })}

                    {/* Render Nodes */}
                    {NODES.map((node) => {
                      const isSelected = selectedNode.id === node.id;
                      const isCycleHighlighted = node.hasCycle;

                      return (
                        <g
                          key={node.id}
                          transform={`translate(${node.x}, ${node.y})`}
                          onClick={() => setSelectedNode(node)}
                          className="cursor-pointer transition-transform hover:scale-105"
                        >
                          <rect
                            width="116"
                            height="38"
                            rx="10"
                            fill="var(--white)"
                            stroke={
                              isSelected
                                ? "var(--indigo-600)"
                                : isCycleHighlighted && filterMode === "cycles"
                                ? "var(--orange-500)"
                                : "var(--st)"
                            }
                            strokeWidth={isSelected ? 2.5 : isCycleHighlighted ? 2 : 1.2}
                            filter={isSelected ? "drop-shadow(0 4px 6px rgba(0,0,0,0.08))" : undefined}
                          />
                          <text
                            x="58"
                            y="23"
                            textAnchor="middle"
                            fontFamily="var(--font-mono)"
                            fontSize="11.5"
                            fontWeight={isSelected ? "600" : "500"}
                            fill={
                              isSelected
                                ? "var(--indigo-900)"
                                : isCycleHighlighted && filterMode === "cycles"
                                ? "var(--orange-800)"
                                : "var(--tx)"
                            }
                          >
                            {node.label}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>

              {/* Right: Inspector Sidebar */}
              <div className="lg:col-span-4 p-5 sm:p-6 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between border-b border-st-secondary pb-3">
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-tx-tertiary">
                        Selected AST Node
                      </span>
                      <h4 className="font-mono text-[16px] font-bold text-tx mt-0.5">
                        {selectedNode.label}
                      </h4>
                    </div>
                    <span className="badge badge-indigo text-[11px]">
                      {selectedNode.category}
                    </span>
                  </div>

                  {/* Node Metrics */}
                  <div className="my-4 grid grid-cols-2 gap-2 text-[12px]">
                    <div className="rounded-lg bg-sf-secondary p-2.5">
                      <span className="text-tx-tertiary">Direct Imports</span>
                      <p className="font-mono text-[15px] font-bold text-tx mt-0.5">
                        {selectedNode.imports.length}
                      </p>
                    </div>
                    <div className="rounded-lg bg-sf-secondary p-2.5">
                      <span className="text-tx-tertiary">Dependents (Callers)</span>
                      <p className="font-mono text-[15px] font-bold text-tx mt-0.5">
                        {selectedNode.importedBy.length}
                      </p>
                    </div>
                  </div>

                  {/* Imports List */}
                  <div className="space-y-3 text-[13px]">
                    <div>
                      <span className="font-mono text-[11.5px] font-semibold text-tx-tertiary uppercase">
                        Depends Upon ({selectedNode.imports.length}):
                      </span>
                      <ul className="mt-1 space-y-1 font-mono text-[12px]">
                        {selectedNode.imports.length > 0 ? (
                          selectedNode.imports.map((imp) => (
                            <li
                              key={imp}
                              className="flex items-center gap-1.5 text-tx-secondary rounded bg-sf px-2 py-1 border border-st-secondary"
                            >
                              <ArrowRight size={12} className="text-indigo-500" />
                              {imp}
                            </li>
                          ))
                        ) : (
                          <li className="text-tx-tertiary italic">Root leaf module (0 imports)</li>
                        )}
                      </ul>
                    </div>

                    <div>
                      <span className="font-mono text-[11.5px] font-semibold text-tx-tertiary uppercase">
                        Imported By ({selectedNode.importedBy.length}):
                      </span>
                      <ul className="mt-1 space-y-1 font-mono text-[12px]">
                        {selectedNode.importedBy.length > 0 ? (
                          selectedNode.importedBy.map((imp) => (
                            <li
                              key={imp}
                              className="flex items-center gap-1.5 text-tx-secondary rounded bg-sf px-2 py-1 border border-st-secondary"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                              {imp}
                            </li>
                          ))
                        ) : (
                          <li className="text-tx-tertiary italic">Top-level root entrypoint</li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Cycle Warning Banner if node is cyclic */}
                  {selectedNode.hasCycle && (
                    <div className="mt-4 rounded-xl border border-orange-200 bg-orange-50/80 p-3 text-[12.5px] text-orange-900">
                      <div className="flex items-center gap-1.5 font-semibold text-orange-800">
                        <AlertTriangle size={15} />
                        Circular Import Alert
                      </div>
                      <p className="mt-1 text-[12px] leading-relaxed text-orange-800/90">
                        <code>{selectedNode.label}</code> forms a 2-node cycle with{" "}
                        <code>
                          {selectedNode.id === "queries" ? "lib/utils.ts" : "api/queries.ts"}
                        </code>. This tightly couples the API logic to generic utility helpers.
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-st-secondary text-[12px] text-tx-tertiary">
                  Lines of Code: <span className="font-mono font-medium text-tx">{selectedNode.lines} SLOC</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: BLAST RADIUS SIMULATOR */}
          {activeTab === "blast" && (
            <div className="p-6 md:p-8 bg-sf">
              <div className="max-w-3xl mx-auto space-y-6">
                <div>
                  <h3 className="font-display text-[20px] font-semibold text-tx">
                    Refactoring Blast Radius Estimation
                  </h3>
                  <p className="text-[14px] text-tx-secondary mt-1">
                    Select a module to simulate the impact of breaking signature changes or refactoring.
                  </p>
                </div>

                {/* Target Selector */}
                <div className="grid sm:grid-cols-3 gap-3">
                  {BLAST_TARGETS.map((target) => (
                    <button
                      key={target.id}
                      type="button"
                      onClick={() => setSelectedBlast(target)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedBlast.id === target.id
                          ? "border-indigo-500 bg-white shadow-sm ring-1 ring-indigo-500"
                          : "border-st bg-sf-secondary hover:bg-white"
                      }`}
                    >
                      <span className="font-mono text-[11px] text-tx-tertiary">Target Module</span>
                      <p className="font-mono text-[12.5px] font-semibold text-tx mt-1 truncate">
                        {target.id}
                      </p>
                      <span
                        className={`inline-block mt-2 text-[10.5px] font-semibold uppercase px-2 py-0.5 rounded-full ${
                          target.severity === "Critical"
                            ? "bg-red-100 text-red-800"
                            : target.severity === "High"
                            ? "bg-orange-100 text-orange-800"
                            : "bg-emerald-100 text-emerald-800"
                        }`}
                      >
                        {target.severity} Risk
                      </span>
                    </button>
                  ))}
                </div>

                {/* Simulation Result Box */}
                <div className="card p-6 border-st bg-white">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-st-secondary pb-4">
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-tx-tertiary">
                        Simulated Target
                      </span>
                      <h4 className="font-mono text-[17px] font-bold text-tx">
                        {selectedBlast.label}
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-[12px] text-tx-tertiary">Direct + Transitive Impact</span>
                      <p className="font-mono text-[20px] font-bold text-indigo-700">
                        {selectedBlast.affectedCount} Modules Affected
                      </p>
                    </div>
                  </div>

                  <p className="text-[14px] text-tx-secondary my-4 leading-relaxed">
                    {selectedBlast.summary}
                  </p>

                  <div className="rounded-xl border border-st bg-sf-secondary p-4">
                    <span className="font-mono text-[11.5px] font-semibold text-tx-tertiary uppercase">
                      Downstream Ripple Path:
                    </span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedBlast.affectedFiles.map((file) => (
                        <span
                          key={file}
                          className="inline-flex items-center gap-1.5 rounded-md border border-st bg-white px-2.5 py-1 font-mono text-[12px] text-tx"
                        >
                          <ChevronRight size={13} className="text-indigo-500" />
                          {file}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: GRAPH-GROUNDED ARCHITECTURAL Q&A */}
          {activeTab === "qa" && (
            <div className="p-6 md:p-8 bg-sf">
              <div className="max-w-3xl mx-auto space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles size={18} className="text-indigo-600" />
                    <h3 className="font-display text-[20px] font-semibold text-tx">
                      AST Graph-Grounded Architectural Q&A
                    </h3>
                  </div>
                  <p className="text-[14px] text-tx-secondary mt-1">
                    Concept preview of natural-language architectural inquiries grounded in the AST
                    knowledge graph rather than hallucinated text guessing.
                  </p>
                </div>

                {/* Sample Prompt Selector */}
                <div className="space-y-2">
                  <span className="font-mono text-[12px] text-tx-tertiary uppercase">
                    Select a sample architectural question:
                  </span>
                  <div className="flex flex-col gap-2">
                    {QA_PROMPTS.map((prompt, index) => (
                      <button
                        key={prompt.q}
                        type="button"
                        onClick={() => setSelectedQAIndex(index)}
                        className={`text-left p-3 rounded-xl border text-[13.5px] transition-all ${
                          selectedQAIndex === index
                            ? "border-indigo-500 bg-white font-medium text-tx shadow-xs"
                            : "border-st bg-sf-secondary text-tx-secondary hover:bg-white"
                        }`}
                      >
                        {prompt.q}
                      </button>
                    ))}
                  </div>
                </div>

                {/* AI Grounded Response Preview */}
                <div className="card p-6 border-st bg-white">
                  <div className="flex items-center justify-between border-b border-st-secondary pb-3">
                    <div className="flex items-center gap-2 text-indigo-700 font-medium text-[13px]">
                      <Sparkles size={15} />
                      RepoLens AST Engine Response
                    </div>
                    <span className="badge badge-green text-[11px]">
                      Verified by AST Graph
                    </span>
                  </div>

                  <div className="mt-4 font-mono text-[13.5px] leading-relaxed text-tx-secondary whitespace-pre-line bg-sf p-4 rounded-xl border border-st-secondary">
                    {QA_PROMPTS[selectedQAIndex]!.a}
                  </div>

                  <div className="mt-4 flex items-center justify-between text-[12px] text-tx-tertiary border-t border-st-secondary pt-3">
                    <span>Grounded in deterministic graph edges</span>
                    <span className="font-mono">Zero hallucination guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Workbench Footer */}
          <div className="border-t border-st-secondary bg-sf px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 text-[13px] text-tx-tertiary">
            <span>
              All previews execute entirely on the client without sending source files to any remote server.
            </span>
            <a href="#how-it-works" className="inline-flex items-center gap-1 font-medium text-indigo-700 hover:text-indigo-900">
              Inspect analysis workflow
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
