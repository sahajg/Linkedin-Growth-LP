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
  BarChart3,
  Search,
  Calendar,
} from "lucide-react";

const metrics = [
  { value: "2x", label: "Inbound Leads", sub: "Directly attributed to content", icon: Target },
  { value: "400%", label: "Reach Surge", sub: "Organic impression growth", icon: Zap },
  { value: "851%", label: "Eng. Rate Surge", sub: "Deep audience interaction", icon: BarChart3 },
  { value: "$10.5K", label: "New Revenue", sub: "Directly from LinkedIn channel", icon: MessageSquare },
];

const challenges = [
  "Busy founder focus was entirely on agency delivery, leaving LinkedIn inconsistent and reactive",
  "Minimal organic reach (200-500 impressions/post) despite high-authority expertise",
  "Total lack of inbound lead flow or meaningful discovery conversations from the platform",
];

const steps = [
  {
    number: "01",
    title: "Messaging Alignment",
    icon: Target,
    body: "We conducted deep research to understand what SaaS founders actually cared about. We identified specific pain points: how to generate organic leads, scale SEO teams, and show real ROI. We then built messaging pillars that spoke directly to these challenges.",
    bullets: [
        "Deep-dive into SaaS founder pain points",
        "Mapped gaps in the current SEO content landscape",
        "Created pillars positioning founder as a 'Peer Advisor'"
    ],
  },
  {
    number: "02",
    title: "Competitor Analysis",
    icon: Search,
    body: "We analyzed competitors to identify what content resonated and where Justin could uniquely stand out. This ensured his posts didn't just blend in, but actually differentiated his agency's specific methodology and results.",
    bullets: [
        "Identified high-performing competitor hooks",
        "Found 'whitespace' for unique agency positioning",
        "Analyzed high-intent discussion formats"
    ],
  },
  {
    number: "03",
    title: "Framework Optimization",
    icon: BarChart2,
    body: "We restructured post formats to open with strong hooks that 'stopped the scroll'. Every post was designed to deliver clear, concise insights that positioned Justin as an authority while maintaining an authentic tone.",
    bullets: [
        "Hook-driven opening framework implementation",
        "Value-first insight delivery in every post",
        "Strategic CTA placement for conversions"
    ],
  },
  {
    number: "04",
    title: "Repurposing Engine",
    icon: Zap,
    body: "Justin already had a wealth of long-form videos and articles. We transformed these assets into shorter, impactful LinkedIn posts, extending the value of his thought leadership without adding to his personal workload.",
    bullets: [
        "White-paper to snackable-post conversion",
        "Webinar segments turned into video highlights",
        "Article key-points extracted for high-engagement threads"
    ],
  },
  {
    number: "05",
    title: "Calendar & Variety",
    icon: Calendar,
    body: "We built a 52-week rolling content mix that balanced educational insights, case studies, and personal stories. We tested different formats—text, carousels, and videos—to find what resonated most with his audience.",
    bullets: [
        "Systematic 52-week content mix development",
        "Format A/B testing (Visual vs. Text-only)",
        "Peak window identification for distribution"
    ],
  },
  {
    number: "06",
    title: "Paid Amplification",
    icon: TrendingUp,
    body: "To amplify reach, we layered in targeted LinkedIn Ads aimed at ideal client profiles. We retargeted those warm audiences with follow-up content, turning simple visibility into high-intent inbound conversations.",
    bullets: [
        "Strategic boosting of top 10% organic posts",
        "Audience retargeting with high-intent offers",
        "Lead-capture optimization within ad sets"
    ],
  },
];

const takeaways = [
  "Expertise without a data-driven system is a time-sink with minimal returns",
  "Real success isn't posting more; it's connecting with audience pain points",
  "Content variety keeps the audience engaged across different consumption habits",
  "Strategic paid amplification turns organic winners into revenue drivers",
];

export default function CaseStudySEOAgencyLeadsPage() {
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
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>SEO Agency Growth</span>
            </div>

            {/* Badge */}
              <span style={{
                backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "100px", padding: "5px 16px",
                fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em", textTransform: "uppercase"
              }}>
                B2B SaaS SEO
              </span>
              <span style={{
                backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "100px", padding: "5px 16px",
                fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em", textTransform: "uppercase"
              }}>
                Lead Generation
              </span>
              <span style={{
                backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "100px", padding: "5px 16px",
                fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em", textTransform: "uppercase"
              }}>
                Results-First
              </span>

            {/* Headline */}
            <h1 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(40px, 7vw, 88px)",
              fontWeight: 900, color: "#ffffff",
              letterSpacing: "-0.05em", lineHeight: 0.95,
              marginBottom: "32px", maxWidth: "900px"
            }}>
              Doubling <span style={{ color: "#22c55e" }}>Inbound Leads</span>.
              <br />
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65em", letterSpacing: "-0.03em" }}>
                851% Engagement Surge. Pure Organic.
              </span>
            </h1>

            <p style={{
              fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,1)",
              lineHeight: 1.7, maxWidth: "560px", marginBottom: "56px"
            }}>
                How RockTheRankings implemented a system that turned their generic LinkedIn presence into a high-impact, revenue-driving lead generation channel.
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
                        { label: "Agency", value: "RockTheRankings" },
                        { label: "Founder", value: "Justin Berg" },
                        { label: "Result", value: "2x Inbound Leads" },
                        { label: "Engagement", value: "+851% Surge" },
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
                  <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: "20px" }}>A Founder Without a Voice</h2>
                  <p style={{ fontSize: "17px", color: "#334155", lineHeight: 1.85 }}>
                    As a busy founder, Justin Berg was focused on leading his agency and delivering results for clients. His own LinkedIn presence was inconsistent and lacked a clear strategy. Posts were getting minimal engagement (200-500 impressions), and there was no inbound lead flow. He knew LinkedIn was a priority, but he didn't have the bandwidth to figure it out alone.
                  </p>
                </div>

                <div style={{ marginBottom: "72px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                    <div style={{ width: "32px", height: "2px", backgroundColor: "#22c55e" }} />
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "#16a34a", letterSpacing: "0.12em", textTransform: "uppercase" }}>The Challenge</span>
                  </div>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: "20px" }}>Turning Reach into Revenue</h2>
                  <p style={{ fontSize: "17px", color: "#334155", lineHeight: 1.85, marginBottom: "28px" }}>
                    We needed to take Justin's deep industry knowledge and package it for high-conversion consumption. We identified three primary gaps:
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
                  <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: "12px" }}>The Lead Generation Engine</h2>
                  <p style={{ fontSize: "17px", color: "#475569", lineHeight: 1.7, marginBottom: "48px" }}>We built a real LinkedIn system that translated expertise into conversations and revenue.</p>

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
                  <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: "12px" }}>Systematic Growth & ROI</h2>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    {[
                      { before: "Sporadic", after: "2x Leads", label: "Inbound Flow", detail: "Direct attribution surge", highlight: true },
                      { before: "Baseline", after: "+851%", label: "Eng. Rate", detail: "Deep audience interaction", highlight: true },
                      { before: "200-500", after: "400%", label: "Impressions", detail: "A/B tested reach growth", highlight: false },
                      { before: "Manual", after: "Systematic", label: "Operations", detail: "52-week rolling mix", highlight: false },
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
                  <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: "20px" }}>Connecting Deeply</h2>
                  <p style={{ fontSize: "17px", color: "#334155", lineHeight: 1.85, marginBottom: "32px" }}>The secret isn't posting more; it's connecting with audience pain points. What produced these results was:</p>
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
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "40px", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "16px" }}>Drive real <span style={{ color: "#16a34a" }}>revenue</span>.</h2>
                    <p style={{ fontSize: "16px", color: "#334155", lineHeight: 1.65, marginBottom: "32px" }}>We build the systems that founders need to turn LinkedIn visibility into a predictable discovery engine.</p>
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
