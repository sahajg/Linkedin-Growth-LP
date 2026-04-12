"use client";
import Link from "next/link";
import { TopBar } from "@/components/sales/TopBar";
import { Footer } from "@/components/sales/Footer";
import { ArrowRight, TrendingUp, Users, MessageSquare, Target, Zap, BarChart3 } from "lucide-react";

const caseStudies = [
  {
    slug: "87k-to-725k-linkedin-followers",
    category: "B2B Founder / Personal Brand",
    name: "Anonymous Founder",
    headline: "From 87,000 to 725,000 LinkedIn Followers in 17 Months",
    description:
      "A B2B founder with a stagnant audience implemented a structured content engine and grew their LinkedIn following 8.3x while driving a 500% increase in inbound pipeline DMs.",
    metrics: [
      { icon: TrendingUp, value: "8.3x", label: "Follower Growth" },
      { icon: Users, value: "725K", label: "Total Followers" },
      { icon: MessageSquare, value: "+500%", label: "Inbound DMs" },
    ],
    tags: ["LinkedIn", "Personal Brand", "Inbound Pipeline"],
    available: true,
  },
  {
    slug: "qualified-demo-engine-saas",
    category: "B2B SaaS / HealthTech",
    name: "SaaS Founder",
    headline: "Turning LinkedIn Into a Qualified Demo Engine for a SaaS Company",
    description:
      "A HealthTech SaaS company with just 1,000 followers transformed their presence into a lead-gen machine, generating 8-10 qualified demos monthly.",
    metrics: [
      { icon: Zap, value: "8-10", label: "Demos / Mo" },
      { icon: TrendingUp, value: "10x", label: "Follower Growth" },
      { icon: MessageSquare, value: "5x", label: "Engagement" },
    ],
    tags: ["SaaS", "Lead Generation", "Video Content"],
    available: true,
  },
  {
    slug: "doubling-inbound-leads-seo-agency",
    category: "B2B Agency / SEO",
    name: "Justin Berg (RockTheRankings)",
    headline: "Doubling Inbound LinkedIn Leads for a B2B SaaS SEO Agency",
    description:
      "How RockTheRankings used a data-driven content system to surge engagement by 851% and sign new projects valued at $10.5K+.",
    metrics: [
      { icon: Target, value: "2x", label: "Inbound Leads" },
      { icon: BarChart3, value: "400%", label: "Impressions" },
      { icon: Zap, value: "851%", label: "Eng. Rate Surge" },
    ],
    tags: ["Agency", "SEO", "Pipeline Building"],
    available: true,
  },
  {
    slug: "10x-follower-growth-tech-leader",
    category: "Tech Thought Leader",
    name: "Technology Executive",
    headline: "10x Increase in Followers & 7x Increase in Engagement",
    description:
      "Scaling from 20,000 to 213,000 followers in 16 months by shifting from ad-hoc posts to an insight-rich, story-driven content system.",
    metrics: [
      { icon: Users, value: "213K", label: "Total Followers" },
      { icon: TrendingUp, value: "10x", label: "Growth" },
      { icon: MessageSquare, value: "30-40", label: "Leads / Mo" },
    ],
    tags: ["Thought Leadership", "Tech", "Content Strategy"],
    available: true,
  },
  {
    slug: "10x-impressions-legal-saas",
    category: "Legal SaaS",
    name: "Legally.io",
    headline: "10x Impressions and Signed $10K in New Business on LinkedIn",
    description:
      "Repurposing a library of dense legal white papers into snackable, actionable LinkedIn content to win high-ticket contracts.",
    metrics: [
      { icon: BarChart3, value: "10x", label: "Impressions" },
      { icon: Zap, value: "$10.5K", label: "Direct ROI" },
      { icon: Target, value: "5/wk", label: "Post Cadence" },
    ],
    tags: ["LegalTech", "Repurposing", "B2B SaaS"],
    available: true,
  },
  {
    slug: "technical-expertise-inbound-opportunities",
    category: "Consulting / Energy",
    name: "Hassan Alrezeq (Queed SA)",
    headline: "Turning Technical Expertise into 4 Inbound Opportunities on LinkedIn",
    description:
      "Simplifying complex sustainability jargon into relatable, actionable insights sparked 4 high-value inbound opportunities in 12 weeks.",
    metrics: [
      { icon: Target, value: "4", label: "Opportunities" },
      { icon: TrendingUp, value: "3x", label: "Impressions" },
      { icon: Zap, value: "221%", label: "Eng. Increase" },
    ],
    tags: ["Consulting", "Sustainability", "Niche B2B"],
    available: true,
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
        <TopBar />

        {/* Hero Header */}
        <section style={{ 
          paddingTop: "160px", 
          paddingBottom: "80px", 
          backgroundColor: "#f8fafc",
          borderBottom: "1px solid #e2e8f0" 
        }}>
          <div className="section-inner">
            <div style={{ maxWidth: "720px" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                backgroundColor: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)",
                borderRadius: "100px", padding: "6px 16px", marginBottom: "24px"
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#16a34a", display: "inline-block" }} />
                <span style={{ fontSize: "13px", fontWeight: 800, color: "#16a34a", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                  Real Results
                </span>
              </div>

              <h1 style={{
                fontFamily: "var(--font-heading)", fontSize: "clamp(40px, 7vw, 76px)",
                fontWeight: 900, color: "#0f172a", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "24px"
              }}>
                Client <span style={{ color: "#16a34a" }}>Case Studies</span>
              </h1>
              <p style={{ fontSize: "clamp(17px, 2vw, 20px)", color: "#475569", lineHeight: 1.6, maxWidth: "600px" }}>
                Every result below is from a B2B founder who stopped waiting for referrals and built a content engine that fills their pipeline on autopilot.
              </p>
            </div>
          </div>
        </section>

        {/* Case Study Grid */}
        <section style={{ padding: "100px 0 140px" }}>
          <div className="section-inner">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "40px" }}>
              {caseStudies.map((cs) => (
                <div
                  key={cs.slug}
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "28px",
                    padding: "48px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "28px",
                    opacity: cs.available ? 1 : 0.6,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                  }}
                  className={cs.available ? "case-study-card" : ""}
                >
                  {/* Category */}
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{
                      backgroundColor: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.15)",
                      borderRadius: "8px", padding: "5px 14px",
                      fontSize: "11px", fontWeight: 800, color: "#16a34a", letterSpacing: "0.06em", textTransform: "uppercase"
                    }}>
                      {cs.category}
                    </span>
                    {!cs.available && (
                      <span style={{ fontSize: "11px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Coming Soon
                      </span>
                    )}
                  </div>

                  {/* Headline */}
                  <h2 style={{
                    fontFamily: "var(--font-heading)", fontSize: "26px",
                    fontWeight: 900, color: "#0f172a", lineHeight: 1.15, letterSpacing: "-0.02em"
                  }}>
                    {cs.headline}
                  </h2>

                  {/* Description */}
                  <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.6 }}>
                    {cs.description}
                  </p>

                  {/* Metrics */}
                  {cs.metrics.length > 0 && (
                    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", padding: "24px 0", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
                      {cs.metrics.map((m, i) => (
                        <div key={i} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                          <span style={{ fontFamily: "var(--font-heading)", fontSize: "28px", fontWeight: 900, color: "#16a34a", letterSpacing: "-0.02em" }}>
                            {m.value}
                          </span>
                          <span style={{ fontSize: "12px", color: "#64748b", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  {cs.available ? (
                    <Link href={`/case-studies/${cs.slug}`} style={{
                      marginTop: "auto",
                      display: "inline-flex", alignItems: "center", gap: "8px",
                      color: "#16a34a", fontWeight: 900, fontSize: "15px",
                      textDecoration: "none", transition: "all 0.2s ease"
                    }}>
                      Read Full Case Study <ArrowRight size={18} />
                    </Link>
                  ) : (
                    <span style={{ marginTop: "auto", fontSize: "14px", color: "#94a3b8", fontWeight: 600 }}>
                      Publishing soon
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        
        <style jsx global>{`
          .case-study-card:hover {
            transform: translateY(-8px);
            border-color: #16a34a !important;
            box-shadow: 0 20px 40px -12px rgba(15, 23, 42, 0.08) !important;
          }
          .case-study-card:hover a {
            gap: 12px !important;
          }
        `}</style>
      </main>
    </>
  );
}
