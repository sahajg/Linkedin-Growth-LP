"use client";
import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import { TopBar } from "@/components/sales/TopBar";
import { Footer } from "@/components/sales/Footer";
import {
  ArrowLeft,
  TrendingUp,
  MessageSquare,
  Users,
  CheckCircle2,
  ChevronRight,
  Zap,
  BarChart2,
  Target,
  FileText,
  Search,
  Calendar,
} from "lucide-react";

const metrics = [
  { value: "213K", label: "Total Followers", sub: "Starting from 20,000 baseline", icon: Users },
  { value: "10x", label: "Follower Growth", sub: "Compounding growth in 16 months", icon: TrendingUp },
  { value: "30-40", label: "Monthly Leads", sub: "High-authority inbound inquiries", icon: Zap },
  { value: "7x", label: "Engagement Lift", sub: "Interaction surge across all formats", icon: MessageSquare },
];

const challenges = [
  "Account growth had completely plateaued at 20,000 followers with minimal discovery reach",
  "Content strategy was reactive and lacked a cohesive narrative, causing posts to blend into the feed",
  "The client needed to move from being 'niche' to a recognized 'industry voice of authority' for decision-makers",
];

const steps = [
  {
    number: "01",
    title: "Messaging Framework",
    icon: Target,
    body: "We started by identifying the exact personas who would benefit most from the client's insights: decision-makers and tech executives. We built messaging pillars that positioned the client as a trusted voice, speaking directly to audience pain points rather than generic trends.",
    bullets: [
        "Executive persona identification",
        "Pain-point mapping for tech leaders",
        "Authority-led messaging pillar development"
    ],
  },
  {
    number: "02",
    title: "Competitor Benchmarking",
    icon: Search,
    body: "We studied top voices in the tech space to see what was resonating and—more importantly—where the 'whitespace' opportunities were. This allowed the client to stand out by offering unique insights that weren't being discussed by peers.",
    bullets: [
        "White-space opportunity identification",
        "Competitor format benchmarking",
        "Niche-authority trend analysis"
    ],
  },
  {
    number: "03",
    title: "Optimization Framework",
    icon: FileText,
    body: "We overhauled the client's post structure. Instead of long, unformatted blocks of text, we crafted scroll-stopping hooks and used mobile-first formatting to maximize readability and retention across the LinkedIn app.",
    bullets: [
        "Hook-driven opening frameworks",
        "Mobile-first scannable post architecture",
        "Narrative-led insight delivery style"
    ],
  },
  {
    number: "04",
    title: "Content Systemization",
    icon: Calendar,
    body: "We designed a repeatable posting rhythm that blended educational frameworks, forward-looking thought leadership, and high-authority case studies. This ensured a steady stream of value without burn-out.",
    bullets: [
        "Monthly rolling content schedule development",
        "Tiered content mix (Value vs Authority)",
        "Systematic authority-led case study integration"
    ],
  },
  {
    number: "05",
    title: "Format Testing",
    icon: BarChart2,
    body: "We didn't guess what would work; we tested it. We ran experiments across text, carousels, and short-form video. When a format drove higher follower conversion or reach, we doubled down on it for future weeks.",
    bullets: [
        "A/B testing of visual vs text assets",
        "Follower conversion rate monitoring",
        "Dynamic content-mix adjustments"
    ],
  },
  {
    number: "06",
    title: "Engagement Loops",
    icon: MessageSquare,
    body: "We developed conversation-driven CTAs designed specifically to spark comments. We also engaged proactively both in the client's comments and with industry peers to amplify visibility within high-intent segments.",
    bullets: [
        "Strategic manual engagement protocols",
        "Conversational CTA implementation",
        "Peer-network visibility amplification"
    ],
  },
];

const takeaways = [
  "Scaling requires more than just high volume — it requires a strategic narrative",
  "Authority is built by occupying the 'whitespace' competitors ignore",
  "Consistency and data-driven iteration are the only paths to 10x growth",
  "Interactive CTAs turn passive readers into high-intent inbound leads",
];

export default function CaseStudyTechLeaderGrowthPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <>
      <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
        <TopBar />

        {/* ── HERO ── */}
        <section style={{ position: "relative", overflow: "hidden", paddingTop: "96px", backgroundColor: "#0F1014" }}>
          <div style={{
            position: "absolute", top: "-100px", left: "50%", transform: "translateX(-50%)",
            width: "900px", height: "600px",
            background: "radial-gradient(ellipse at center, rgba(34,197,94,0.15) 0%, transparent 65%)",
            filter: "blur(60px)", pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", top: "40%", right: "-200px",
            width: "500px", height: "500px",
            background: "radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)",
            filter: "blur(80px)", pointerEvents: "none",
          }} />

          <div className="section-inner" style={{ position: "relative", zIndex: 1, padding: "40px 24px 80px" }}>

            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "40px" }}>
              <Link href="/case-studies" style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                color: "rgba(255,255,255,0.6)", fontSize: "13px", fontWeight: 600,
                textDecoration: "none",
              }}>
                <ArrowLeft size={14} /> Case Studies
              </Link>
              <ChevronRight size={13} color="rgba(255,255,255,0.3)" />
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>Tech Leader 10x Growth</span>
            </div>

            {/* Badge */}
              <span style={{
                backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "100px", padding: "5px 16px",
                fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em", textTransform: "uppercase"
              }}>
                B2B Tech Leader
              </span>
              <span style={{
                backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "100px", padding: "5px 16px",
                fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em", textTransform: "uppercase"
              }}>
                Follower Growth
              </span>
              <span style={{
                backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "100px", padding: "5px 16px",
                fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em", textTransform: "uppercase"
              }}>
                16 Months
              </span>

            {/* Headline */}
            <h1 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(40px, 7vw, 88px)",
              fontWeight: 900, color: "#ffffff",
              letterSpacing: "-0.05em", lineHeight: 0.95,
              marginBottom: "32px", maxWidth: "900px"
            }}>
              10x Growth. <span style={{ color: "#22c55e" }}>213,000</span> Followers.
              <br />
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65em", letterSpacing: "-0.03em" }}>
                B2B Tech Authority System.
              </span>
            </h1>

            <p style={{
              fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,1)",
              lineHeight: 1.7, maxWidth: "560px", marginBottom: "56px"
            }}>
                How a B2B tech leader scaled from 20,000 to over 213,000 followers in under 16 months using a fully-managed, data-driven content engine.
            </p>

            {/* Metrics Row */}
            <div className="cs-hero-metrics" style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1px",
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "20px",
              overflow: "hidden",
              maxWidth: "900px",
            }}>
              {metrics.map((m, i) => (
                <div key={i} style={{
                  backgroundColor: "#13141a",
                  padding: "32px 28px",
                  display: "flex", flexDirection: "column", gap: "6px",
                }}>
                  <div style={{
                    width: "32px", height: "32px", borderRadius: "8px",
                    backgroundColor: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "10px"
                  }}>
                    <m.icon size={15} color="#22c55e" />
                  </div>
                  <span style={{
                    fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 3.5vw, 42px)",
                    fontWeight: 900, color: "#22c55e", letterSpacing: "-0.04em", lineHeight: 1
                  }}>
                    {m.value}
                  </span>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>{m.label}</span>
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>{m.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BODY ── */}
        <div style={{ borderTop: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
          <div className="section-inner" style={{ padding: "0 24px" }}>
            <div className="cs-body-grid" style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "80px", alignItems: "start" }}>

              {/* Sidebar */}
              <div className="cs-sidebar" style={{ position: "sticky", top: "90px", padding: "64px 0" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                  <div style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "24px" }}>
                    <p style={{ fontSize: "10px", fontWeight: 800, color: "#16a34a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Client Overview</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                      {[
                        { label: "Role", value: "B2B Tech Leader" },
                        { label: "Starting", value: "20,000 Followers" },
                        { label: "Result", value: "213,000 Followers" },
                        { label: "Leads", value: "30-40 Monthly" },
                      ].map((item, i) => (
                        <div key={i}>
                          <div style={{ fontSize: "10px", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>{item.label}</div>
                          <div style={{ fontSize: "14px", fontWeight: 600, color: "#0f172a" }}>{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p style={{ fontSize: "10px", fontWeight: 800, color: "#64748b", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>The Strategy</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      {steps.map((s, i) => (
                        <a key={i} href={`#step-${s.number}`} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", borderRadius: "8px", textDecoration: "none", backgroundColor: "transparent", transition: "all 0.15s ease" }}>
                          <span style={{ fontSize: "11px", fontWeight: 800, color: "#15803d", minWidth: "22px" }}>{s.number}</span>
                          <span style={{ fontSize: "12px", fontWeight: 600, color: "#475569", lineHeight: 1.3 }}>{s.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  <a href="/#book-call" style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#16a34a", color: "#ffffff", fontFamily: "var(--font-heading)", fontSize: "13px", fontWeight: 900, padding: "14px 20px", borderRadius: "10px", textDecoration: "none", boxShadow: "0 8px 24px -6px rgba(22,163,74,0.35)" }}>Book A Free Call</a>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "64px 0" }}>
                <div style={{ marginBottom: "72px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                    <div style={{ width: "32px", height: "2px", backgroundColor: "#22c55e" }} />
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "#16a34a", letterSpacing: "0.12em", textTransform: "uppercase" }}>The Situation</span>
                  </div>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: "20px" }}>Plateaued at Twenty Thousand</h2>
                  <p style={{ fontSize: "17px", color: "#334155", lineHeight: 1.85 }}>
                    The client was already a respected leader in their space, but their growth on LinkedIn had plateaued at 20,000 followers. Their content was ad-hoc and lacked a defined narrative, which meant it often blended into the feed without driving meaningful engagement or inbound opportunities. They needed to transform their presence from &quot;well-known in a niche&quot; to an &quot;industry voice of authority&quot;.
                  </p>
                </div>

                <div style={{ marginBottom: "72px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                    <div style={{ width: "32px", height: "2px", backgroundColor: "#22c55e" }} />
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "#16a34a", letterSpacing: "0.12em", textTransform: "uppercase" }}>The Challenge</span>
                  </div>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: "20px" }}>Breaking the Growth-Ceiling</h2>
                  <p style={{ fontSize: "17px", color: "#334155", lineHeight: 1.85, marginBottom: "28px" }}>
                    We identified three core barriers preventing the client from reaching a broad, high-intent audience:
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {challenges.map((c, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px", backgroundColor: "#fafafa", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "18px 20px" }}>
                        <div style={{ width: "24px", height: "24px", borderRadius: "50%", flexShrink: 0, backgroundColor: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span style={{ fontSize: "11px", fontWeight: 900, color: "#ef4444" }}>✕</span>
                        </div>
                        <span style={{ fontSize: "15px", color: "#1e293b", lineHeight: 1.6 }}>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: "72px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                    <div style={{ width: "32px", height: "2px", backgroundColor: "#22c55e" }} />
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "#16a34a", letterSpacing: "0.12em", textTransform: "uppercase" }}>The Solution</span>
                  </div>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: "12px" }}>The Authority Compounding System</h2>
                  <p style={{ fontSize: "17px", color: "#475569", lineHeight: 1.7, marginBottom: "48px" }}>We engineered a system built around industry positioning and data-driven content iteration.</p>

                  <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
                    <div style={{ position: "absolute", left: "23px", top: "40px", bottom: "40px", width: "1px", backgroundColor: "#e2e8f0", zIndex: 0 }} />
                    {steps.map((step, i) => (
                      <div key={i} id={`step-${step.number}`} style={{ display: "flex", gap: "28px", position: "relative", cursor: "pointer" }} onClick={() => setActiveStep(activeStep === i ? null : i)}>
                        <div style={{ flexShrink: 0, zIndex: 1 }}>
                          <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: activeStep === i ? "#22c55e" : "#ffffff", border: activeStep === i ? "2px solid #22c55e" : "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s ease" }}>
                            <span style={{ fontFamily: "var(--font-heading)", fontSize: "13px", fontWeight: 900, color: activeStep === i ? "#ffffff" : "#16a34a" }}>{step.number}</span>
                          </div>
                        </div>
                        <div style={{ flex: 1, paddingBottom: "48px" }}>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "48px", gap: "16px" }}>
                            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "20px", fontWeight: 900, color: "#0f172a", margin: 0 }}>{step.title}</h3>
                            <ChevronRight size={18} color={activeStep === i ? "#16a34a" : "#94a3b8"} style={{ transform: activeStep === i ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }} />
                          </div>
                          {activeStep === i && (
                            <div style={{ marginTop: "20px", backgroundColor: "rgba(34,197,94,0.03)", border: "1px solid rgba(34,197,94,0.15)", borderRadius: "16px", padding: "28px", animation: "fadeIn 0.25s ease" }}>
                              <p style={{ fontSize: "15px", color: "#1e293b", lineHeight: 1.8, marginBottom: "20px" }}>{step.body}</p>
                              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                {step.bullets.map((bullet, j) => (
                                  <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                                    <CheckCircle2 size={15} color="#22c55e" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: "2px" }} />
                                    <span style={{ fontSize: "14px", color: "#334155", lineHeight: 1.6 }}>{bullet}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: "72px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                    <div style={{ width: "32px", height: "2px", backgroundColor: "#22c55e" }} />
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "#16a34a", letterSpacing: "0.12em", textTransform: "uppercase" }}>Results</span>
                  </div>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: "12px" }}>Compounding Follower Value</h2>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    {[
                      { before: "20,000", after: "213,000", label: "Total Followers", detail: "10x growth in 16 months", highlight: true },
                      { before: "Baseline", after: "30-40", label: "Monthly Leads", detail: "High-intent inbound flow", highlight: true },
                      { before: "Sporadic", after: "7x lift", label: "Engagement", detail: "Interaction surge globally", highlight: false },
                      { before: "Ad-hoc", after: "Systematic", label: "Posting Flow", detail: "Defined narrative frameworks", highlight: false },
                    ].map((r, i) => (
                      <div key={i} style={{ backgroundColor: r.highlight ? "rgba(34,197,94,0.05)" : "#f8fafc", border: r.highlight ? "1px solid rgba(34,197,94,0.25)" : "1px solid #e2e8f0", borderRadius: "16px", padding: "24px" }}>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px" }}>
                          <span style={{ fontSize: "13px", color: "#64748b", textDecoration: "line-through", paddingTop: "6px" }}>{r.before}</span>
                          <span style={{ fontSize: "11px", color: "#94a3b8", paddingTop: "8px" }}>→</span>
                          <span style={{ fontFamily: "var(--font-heading)", fontSize: "38px", fontWeight: 900, color: r.highlight ? "#16a34a" : "#0f172a", letterSpacing: "-0.04em", lineHeight: 1 }}>{r.after}</span>
                        </div>
                        <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginBottom: "4px" }}>{r.label}</div>
                        <div style={{ fontSize: "12px", color: "#475569" }}>{r.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: "72px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                    <div style={{ width: "32px", height: "2px", backgroundColor: "#22c55e" }} />
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "#16a34a", letterSpacing: "0.12em", textTransform: "uppercase" }}>Takeaway</span>
                  </div>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: "20px" }}>Narratives Scale</h2>
                  <p style={{ fontSize: "17px", color: "#334155", lineHeight: 1.85, marginBottom: "32px" }}>Scaling requires more than just high volume—it requires a strategic narrative. What produced these results was:</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {takeaways.map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px 20px" }}>
                        <div style={{ width: "28px", height: "28px", borderRadius: "50%", backgroundColor: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span style={{ fontFamily: "var(--font-heading)", fontSize: "12px", fontWeight: 900, color: "#16a34a" }}>{String(i + 1).padStart(2, "0")}</span>
                        </div>
                        <span style={{ fontSize: "15px", color: "#1e293b", lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: "linear-gradient(135deg, rgba(34,197,94,0.07) 0%, rgba(248,250,252,0) 70%)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "24px", padding: "56px 48px", backgroundColor: "#f8fafc" }}>
                  <div style={{ maxWidth: "480px" }}>
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "40px", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "16px" }}>Maximize your <span style={{ color: "#16a34a" }}>scale</span>.</h2>
                    <p style={{ fontSize: "16px", color: "#334155", lineHeight: 1.65, marginBottom: "32px" }}>We build the distribution engines that allow founders to occupy their market's headspace at scale.</p>
                    <a href="/#book-call" className="btn-cta" style={{ display: "inline-flex", alignItems: "center", gap: "10px", backgroundColor: "#16a34a", color: "#ffffff", fontSize: "15px", fontWeight: 800, fontFamily: "var(--font-heading)", padding: "14px 32px", borderRadius: "10px", textDecoration: "none", boxShadow: "0 12px 36px -8px rgba(22,163,74,0.35)" }}>Book A Free Strategy Call <ChevronRight size={16} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 1024px) { .cs-body-grid { grid-template-columns: 1fr !important; } .cs-sidebar { display: none !important; } }
        @media (max-width: 768px) { .cs-hero-metrics { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </>
  );
}
