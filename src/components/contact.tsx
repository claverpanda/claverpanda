import { useState } from "react";
import {
  Check,
  Copy,
  ExternalLink,
  Mail,
  MessageSquare,
  Send,
  Sparkles,
} from "lucide-react";

export const CONTACT_EMAIL = "founder@claverpanda.dev";
export const COMPANY_DOMAIN = "claverpanda.dev";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [inquiryType, setInquiryType] = useState("Early Access Testing");
  const [message, setMessage] = useState("");
  const [draftCopied, setDraftCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`[CleverPanda Inquiry] ${inquiryType} - ${name || "Developer"}`);
    const body = encodeURIComponent(
      `Hi CleverPanda team,\n\nName / Handle: ${name || "Not specified"}\nInterest: ${inquiryType}\n\nMessage:\n${message || "I'd like to learn more about RepoLens and CleverPanda."}\n\nSent from claverpanda.dev`
    );
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleCopyDraft = () => {
    const draft = `To: ${CONTACT_EMAIL}\nSubject: [CleverPanda Inquiry] ${inquiryType} - ${name || "Developer"}\n\nName: ${name}\nInterest: ${inquiryType}\nMessage:\n${message}`;
    navigator.clipboard.writeText(draft);
    setDraftCopied(true);
    setTimeout(() => setDraftCopied(false), 2400);
  };

  return (
    <section id="contact" className="scroll-mt-20 py-16 md:py-20">
      <div className="page-container">
        {/* Section Header */}
        <div className="mb-12">
          <span className="section-badge">Connect & Collaborate</span>
          <h2 className="section-title">Get in Touch with CleverPanda</h2>
          <p className="section-desc">
            We actively welcome feedback from developers, engineering leaders, and potential
            collaborators interested in codebase architecture and our product roadmap.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Column: Direct Contact & Information */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="card p-7 sm:p-8 flex flex-col gap-6">
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-indigo-700">
                  Direct Founder Channel
                </span>
                <h3 className="font-display text-[22px] font-semibold text-tx mt-1">
                  Talk to the Founder
                </h3>
                <p className="text-[14px] text-tx-secondary mt-2 leading-relaxed">
                  Questions about RepoLens, request early prototype access, or share the architectural
                  bottlenecks your engineering team faces every day.
                </p>
              </div>

              {/* Email badge & 1-click copy */}
              <div className="rounded-xl border border-st bg-sf-secondary p-4 flex flex-col gap-3">
                <span className="font-mono text-[11px] text-tx-tertiary uppercase">Primary Email:</span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-mono text-[14.5px] font-medium text-tx hover:text-indigo-700 truncate"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="btn-pill text-[12px] py-1 px-3 min-h-8 shrink-0 flex items-center gap-1.5"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check size={13} className="text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-3 text-[13.5px] text-tx-secondary">
                <div className="flex items-start gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                  <span>
                    <strong>Early Access:</strong> Request testing access for the local AST analyzer.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                  <span>
                    <strong>Architecture Consult:</strong> Share repository topology challenges.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                  <span>
                    <strong>Startup Growth:</strong> Connect on developer tooling opportunities.
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-st-secondary flex items-center justify-between text-[12px] text-tx-tertiary">
                <span>Official Domain</span>
                <span className="font-mono font-medium text-tx">{COMPANY_DOMAIN}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Transparent Frontend Message Composer */}
          <div className="lg:col-span-7">
            <div className="card p-7 sm:p-8 bg-white">
              <div className="flex items-center justify-between border-b border-st-secondary pb-4 mb-6">
                <div>
                  <h3 className="font-display text-[20px] font-semibold text-tx">
                    Draft a Message
                  </h3>
                  <p className="text-[13px] text-tx-tertiary mt-0.5">
                    Prepares a structured note to send directly via your email client
                  </p>
                </div>
                <span className="badge badge-indigo text-[11px]">
                  Frontend Only
                </span>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = getMailtoUrl();
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="contact-name" className="block text-[13px] font-medium text-tx mb-1">
                    Your Name or GitHub Handle
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Chen (@alexc)"
                    className="w-full rounded-xl border border-st bg-sf px-4 py-2.5 text-[14px] text-tx focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>

                <div>
                  <label htmlFor="contact-category" className="block text-[13px] font-medium text-tx mb-1">
                    Topic / Interest
                  </label>
                  <select
                    id="contact-category"
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full rounded-xl border border-st bg-sf px-4 py-2.5 text-[14px] text-tx focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  >
                    <option value="Early Access Testing">Early Access Testing for RepoLens</option>
                    <option value="Product Feedback">Product Architecture Feedback</option>
                    <option value="Startup Collaboration">Startup Collaboration / Inquiries</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[13px] font-medium text-tx mb-1">
                    Your Message / Thoughts
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about the size of your codebase, languages used, or architectural challenges you'd like RepoLens to help solve..."
                    className="w-full rounded-xl border border-st bg-sf px-4 py-2.5 text-[14px] text-tx focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                  />
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={getMailtoUrl()}
                    className="btn-primary"
                  >
                    <Send size={15} />
                    Open in Mail Client
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyDraft}
                    className="btn-secondary"
                  >
                    {draftCopied ? (
                      <>
                        <Check size={15} className="text-emerald-600" />
                        <span>Draft Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={15} />
                        <span>Copy Draft to Clipboard</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[12px] text-tx-tertiary pt-2">
                  <strong>Zero Data Collection:</strong> This form creates a formatted email on your
                  device and doesn&apos;t post data to any remote database or third party.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
