import { render, screen, fireEvent, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteHeader, PRIMARY_NAV_LINKS } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { RepoLensIntro } from "@/components/repolens";
import { ProblemAndApproach } from "@/components/problem-approach";
import { Capabilities } from "@/components/capabilities";
import { ProductPreview } from "@/components/product-preview";
import { Workflow } from "@/components/workflow";
import { UseCases } from "@/components/use-cases";
import { About } from "@/components/about";
import { Roadmap } from "@/components/roadmap";
import { Contact, CONTACT_EMAIL, COMPANY_DOMAIN } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

describe("CleverPanda Startup Website Components", () => {
  it("renders SiteHeader with clean 6 primary navigation links, logo, and no redundant CTA button", () => {
    render(<SiteHeader />);

    // Check logo image exists
    expect(screen.getByAltText("Clever Panda logo")).toBeInTheDocument();

    // Check primary navigation exists
    const nav = screen.getByRole("navigation", { name: "Primary navigation" });
    expect(nav).toBeInTheDocument();

    // Verify all 6 primary navigation links are present
    const expectedLinks = ["Overview", "RepoLens", "Capabilities", "How It Works", "About", "Contact"];
    expectedLinks.forEach((label) => {
      expect(within(nav).getByText(label)).toBeInTheDocument();
    });

    // Verify consolidated links are not in main nav
    expect(within(nav).queryByText("Approach")).not.toBeInTheDocument();
    expect(within(nav).queryByText("Interactive Demo")).not.toBeInTheDocument();
    expect(within(nav).queryByText("Use Cases")).not.toBeInTheDocument();
    expect(within(nav).queryByText("Roadmap")).not.toBeInTheDocument();

    // Verify "Explore RepoLens" button is removed from header
    expect(screen.queryByRole("link", { name: /explore repolens/i })).not.toBeInTheDocument();
  });

  it("renders Hero with brand positioning and calls to action", () => {
    render(<Hero />);
    expect(
      screen.getByText("CLEVER PANDA · Developer Tools & Software Products")
    ).toBeInTheDocument();
    expect(screen.getByText("Smarter Tools for Better Software")).toBeInTheDocument();
    expect(screen.getByText("Explore RepoLens")).toBeInTheDocument();
    expect(screen.getByText("Discover Our Vision")).toBeInTheDocument();
    expect(screen.getByText("Interactive Graph Preview →")).toBeInTheDocument();
  });

  it("renders RepoLensIntro with active development status and interactive file explorer", () => {
    render(<RepoLensIntro />);
    expect(screen.getByText("RepoLens")).toBeInTheDocument();
    expect(screen.getByText("In Active Development")).toBeInTheDocument();
    expect(screen.getByText("Structural Inspector Preview")).toBeInTheDocument();
  });

  it("renders ProblemAndApproach contrasting pain points with AST analysis", () => {
    render(<ProblemAndApproach />);
    expect(screen.getByText("The Real Problems Developers Face")).toBeInTheDocument();
    expect(screen.getByText("How Practical Tooling Restores Clarity")).toBeInTheDocument();
  });

  it("renders Capabilities with 6 distinct engineering pillars", () => {
    render(<Capabilities />);
    expect(screen.getByText("Engineered for Codebase Clarity")).toBeInTheDocument();
    expect(screen.getByText("Architecture Visualization")).toBeInTheDocument();
    expect(screen.getByText("Circular Dependency Detection")).toBeInTheDocument();
    expect(screen.getByText("Blast Radius & Impact Estimation")).toBeInTheDocument();
  });

  it("renders ProductPreview with interactive tabs and node inspection", () => {
    render(<ProductPreview />);
    expect(screen.getByText("Seeing Software Architecture as a Graph")).toBeInTheDocument();
    expect(screen.getByText("1. Dependency Graph & Cycles")).toBeInTheDocument();
    expect(screen.getByText("2. Blast Radius Simulator")).toBeInTheDocument();

    // Switch to blast radius tab
    const blastTabBtn = screen.getByText("2. Blast Radius Simulator");
    fireEvent.click(blastTabBtn);
    expect(screen.getByText("Refactoring Blast Radius Estimation")).toBeInTheDocument();
  });

  it("renders Workflow with 5 steps", () => {
    render(<Workflow />);
    expect(screen.getByText("How RepoLens Works")).toBeInTheDocument();
    expect(screen.getAllByText("Point to Repository").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Detect Cycles & Architectural Anomalies").length).toBeGreaterThan(0);
  });

  it("renders UseCases for various developer roles", () => {
    render(<UseCases />);
    expect(screen.getByText("Built for Everyone Who Touches Code")).toBeInTheDocument();
    expect(screen.getByText("Individual Software Developers")).toBeInTheDocument();
    expect(screen.getByText("Engineering Teams & Tech Leads")).toBeInTheDocument();
  });

  it("renders About with company mission and startup vision", () => {
    render(<About />);
    expect(
      screen.getByText("“Making software easier to understand, one useful tool at a time.”")
    ).toBeInTheDocument();
    expect(screen.getByText("Room to Grow: Future CleverPanda Software Directions")).toBeInTheDocument();
  });

  it("renders Roadmap with phased milestones", () => {
    render(<Roadmap />);
    expect(screen.getByText("Product Roadmap")).toBeInTheDocument();
    expect(screen.getByText("Core AST Engine & Topological Graph")).toBeInTheDocument();
  });

  it("renders Contact with official founder email and domain constants", () => {
    render(<Contact />);
    expect(CONTACT_EMAIL).toBe("founder@claverpanda.dev");
    expect(COMPANY_DOMAIN).toBe("claverpanda.dev");
    expect(screen.getByText("Get in Touch with CleverPanda")).toBeInTheDocument();
    expect(screen.getAllByText("founder@claverpanda.dev").length).toBeGreaterThan(0);
  });

  it("renders SiteFooter with dynamic year and complete navigation", () => {
    render(<SiteFooter />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
    expect(screen.getAllByText(/claverpanda\.dev/).length).toBeGreaterThan(0);
  });
});
