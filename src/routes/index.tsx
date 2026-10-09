import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { RepoLensIntro } from "@/components/repolens";
import { ProblemAndApproach } from "@/components/problem-approach";
import { Capabilities } from "@/components/capabilities";
import { ProductPreview } from "@/components/product-preview";
import { Workflow } from "@/components/workflow";
import { UseCases } from "@/components/use-cases";
import { About } from "@/components/about";
import { Roadmap } from "@/components/roadmap";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clever Panda | Smarter Tools for Better Software" },
      {
        name: "description",
        content:
          "CleverPanda builds practical developer tools that make complex software easier to understand, analyze, and improve. Introducing RepoLens: codebase architecture exploration, dependency analysis, and developer productivity.",
      },
      { property: "og:title", content: "Clever Panda | Smarter Tools for Better Software" },
      {
        property: "og:description",
        content:
          "Practical developer tools for understanding complex codebases. Starting with RepoLens: AST-driven architecture visualization and dependency analysis.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://claverpanda.dev/" },
      { property: "og:site_name", content: "Clever Panda" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Clever Panda | Smarter Tools for Better Software" },
      {
        name: "twitter:description",
        content:
          "Practical developer tools for understanding complex codebases. Starting with RepoLens: AST-driven architecture visualization and dependency analysis.",
      },
    ],
    links: [{ rel: "canonical", href: "https://claverpanda.dev/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-sf text-tx selection:bg-indigo-100 selection:text-indigo-900">
      <SiteHeader />
      <main>
        <Hero />
        <RepoLensIntro />
        <ProblemAndApproach />
        <Capabilities />
        <ProductPreview />
        <Workflow />
        <UseCases />
        <About />
        <Roadmap />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
