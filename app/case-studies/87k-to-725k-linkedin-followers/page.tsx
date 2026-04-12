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
  Calendar,
  Target,
  Zap,
  BarChart2,
} from "lucide-react";

const metrics = [
  { value: "8.3x", label: "Follower Growth", sub: "87K → 725K in 17 months", icon: TrendingUp },
  { value: "+500%", label: "Inbound DMs", sub: "Qualified pipeline opportunities", icon: MessageSquare },
  { value: "50–70", label: "Posts / Month", sub: "High-volume content engine", icon: Zap },
  { value: "3.8%", label: "Avg. Eng. Rate", sub: "Held despite 6x volume increase", icon: BarChart2 },
];

const challenges = [
  "Content lacked a consistent point of view. It read like a curated news feed, not a founder's expert voice",
  "Post frequency was too low (8–12 posts/month) to maintain algorithm visibility or audience momentum",
  "No engagement loop, as content was published and left alone, with no systematic effort to extend reach",
];

const steps = [
  {
    number: "01",
    title: "Audience Mapping & Messaging",
    icon: Users,
    body: "Before writing a single word, we audited who the founder was already reaching versus who they actually needed to reach. We identified the top three buyer personas, mapped their language patterns, and built a messaging framework anchored in the problems those buyers voiced publicly on LinkedIn.",
    bullets: [
      "Identified top 3 ICP personas by analysing competitor comment sections",
      "Built a problem-language library matching how buyers describe their own pain",
      "Anchored the content thesis to a single, defensible market position",
    ],
  },
  {
    number: "02",
    title: "Thought Leadership Framework",
    icon: Target,
    body: "We established a content thesis: a clear, opinionated point of view on how B2B growth actually works, and used it as the spine for all content. Every post either expanded the thesis, proved it with data, or challenged a common misconception.",
    bullets: [
      "Defined one north-star thesis that all content orbited around",
      "Created a 4-pillar content mix: insight posts, case breakdowns, contrarian takes, and founder transparency",
      "Removed all generic educational content that could have been published by anyone",
    ],
  },
  {
    number: "03",
    title: "Video + Repurposing",
    icon: Zap,
    body: "The founder began recording short-form video content repurposed into written posts, carousels, and Twitter threads. One weekly recording session generated 5+ distinct pieces across formats. Video adds trust, while written posts drive distribution. Together, they compound.",
    bullets: [
      "One video session per week yielded 5–7 derivative content assets",
      "Written versions published 12–24 hours after video for cross-format reinforcement",
      "Carousel posts from video transcripts drove 2.3x higher impressions than standalone text",
    ],
  },
  {
    number: "04",
    title: "Content Cadence & Rhythm",
    icon: Calendar,
    body: "Volume is a lever most founders underestimate. The average LinkedIn creator posts 4 times per month. This founder moved to 50–70 posts per month across formats. The algorithm rewards consistency, but more importantly, the audience began to expect content.",
    bullets: [
      "Hit 50–70 posts/month cadence within 8 weeks of engagement",
      "6-week rolling content calendar removed daily decision-making",
      "Engagement rate held above 3.8% on average despite high volume",
    ],
  },
  {
    number: "05",
    title: "Engagement Loops",
    icon: MessageSquare,
    body: "Posting is only half the equation. We built structured engagement loops where the founder spent 25–30 minutes per day commenting on posts from buyers, industry peers, and adjacent category leaders. Strategic commenting extends reach to audiences the algorithm hasn't delivered content to yet.",
    bullets: [
      "25–30 min daily engagement sprint targeting 10–15 high-engagement threads",
      "Comments were substantive; they added context, challenged assumptions, and shared data",
      "Profile visits from commenting converted at 8% to follow vs. 2.1% industry average",
    ],
  },
  {
    number: "06",
    title: "Post Amplification",
    icon: TrendingUp,
    body: "The top-performing 20% of posts were identified each week and systematically amplified by being shared to Groups, cross-posted to Twitter/X, and used in DM conversations. Posts with strong early engagement were boosted with a comment cluster to signal relevance to the algorithm.",
    bullets: [
      "Top posts shared into 3–5 targeted LinkedIn Groups within 2 hours of publishing",
      "Twitter/X cross-publishing extended reach to a secondary audience of 40,000+",
      "Comment-cluster protocol increased average reach by 58% on flagged posts",
    ],
  },
  {
    number: "07",
    title: "Continuous Optimisation",
    icon: BarChart2,
    body: "Every month, we reviewed a performance dashboard covering impressions by post type, follower growth rate, comment-to-impression ratio, and DM-to-post attribution. Underperforming formats were cut. Overperforming formats were doubled.",
    bullets: [
      "Monthly data review across 8 core performance metrics",
      "Content format allocation adjusted every 4 weeks based on engagement signals",
      "Posts below the engagement floor were archived and the format redesigned",
    ],
  },
];

const takeaways = [
  "A clear, ownable point of view that made every post recognisably from this founder",
  "Volume that kept the founder visible when competitors went silent",
  "An engagement loop that extended reach beyond the existing audience",
  "A repurposing system that extracted maximum value from every piece of original content",
  "A data review cycle that eliminated what was not working and doubled what was",
];

export default function CaseStudy1Page() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <>
      <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
        <TopBar />

        {/* ── HERO ── */}
        <section style={{ position: "relative", overflow: "hidden", paddingTop: "96px", backgroundColor: "#0F1014" }}>
          {/* Ambient glows (stronger on dark bg) */}
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
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>87K to 725K</span>
            </div>

            {/* Badge */}
            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "28px", flexWrap: "wrap" }}>
              <span style={{
                backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "100px", padding: "5px 16px",
                fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em", textTransform: "uppercase"
              }}>
                B2B Personal Brand
              </span>
              <span style={{
                backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "100px", padding: "5px 16px",
                fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em", textTransform: "uppercase"
              }}>
                LinkedIn Growth
              </span>
              <span style={{
                backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "100px", padding: "5px 16px",
                fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em", textTransform: "uppercase"
              }}>
                17 Months
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(40px, 7vw, 88px)",
              fontWeight: 900, color: "#ffffff",
              letterSpacing: "-0.05em", lineHeight: 0.95,
              marginBottom: "32px", maxWidth: "900px"
            }}>
              87,000 → <span style={{
                color: "#22c55e",
                textShadow: "none"
              }}>725,000</span>
              <br />
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65em", letterSpacing: "-0.03em" }}>
                LinkedIn Followers. 17 Months.
              </span>
            </h1>

            <p style={{
              fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,1)",
              lineHeight: 1.7, maxWidth: "560px", marginBottom: "56px"
            }}>
              How a B2B founder rebuilt their content engine from the ground up, achieved 8.3x follower growth, and turned LinkedIn into their primary inbound pipeline, without paid ads or cold outreach.
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

        {/* ── BODY: Two-column layout ── */}
        <div style={{ borderTop: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
          <div className="section-inner" style={{ padding: "0 24px" }}>
            <div className="cs-body-grid" style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "80px", alignItems: "start" }}>

              {/* ── LEFT SIDEBAR (Sticky) ── */}
              <div className="cs-sidebar" style={{ position: "sticky", top: "90px", padding: "64px 0" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

                  {/* Client Overview Card */}
                  <div style={{
                    backgroundColor: "#f8fafc", border: "1px solid #e2e8f0",
                    borderRadius: "16px", padding: "24px",
                  }}>
                    <p style={{ fontSize: "10px", fontWeight: 800, color: "#16a34a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
                      Client Overview
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                      {[
                        { label: "Industry", value: "B2B Consulting" },
                        { label: "Starting", value: "87,000 Followers" },
                        { label: "Result", value: "725,000 Followers" },
                        { label: "Timeline", value: "17 Months" },
                      ].map((item, i) => (
                        <div key={i}>
                          <div style={{ fontSize: "10px", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>{item.label}</div>
                          <div style={{ fontSize: "14px", fontWeight: 600, color: "#0f172a" }}>{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Steps Nav */}
                  <div>
                    <p style={{ fontSize: "10px", fontWeight: 800, color: "#64748b", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
                      The System
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      {steps.map((s, i) => (
                        <a
                          key={i}
                          href={`#step-${s.number}`}
                          style={{
                            display: "flex", alignItems: "center", gap: "10px",
                            padding: "8px 12px", borderRadius: "8px",
                            textDecoration: "none",
                            backgroundColor: "transparent",
                            transition: "all 0.15s ease",
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(0,0,0,0.04)";
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                          }}
                        >
                          <span style={{ fontSize: "11px", fontWeight: 800, color: "#15803d", minWidth: "22px" }}>{s.number}</span>
                          <span style={{ fontSize: "12px", fontWeight: 600, color: "#475569", lineHeight: 1.3 }}>{s.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a href="/#book-call" style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    backgroundColor: "#16a34a", color: "#ffffff",
                    fontFamily: "var(--font-heading)",
                    fontSize: "13px", fontWeight: 900, padding: "14px 20px",
                    borderRadius: "10px", textDecoration: "none",
                    boxShadow: "0 8px 24px -6px rgba(22,163,74,0.35)",
                    transition: "all 0.2s ease",
                  }}>
                    Book A Free Call
                  </a>
                </div>
              </div>

              {/* ── RIGHT: Main Content ── */}
              <div style={{ padding: "64px 0" }}>

                {/* THE SITUATION */}
                <div style={{ marginBottom: "72px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                    <div style={{ width: "32px", height: "2px", backgroundColor: "#22c55e" }} />
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "#16a34a", letterSpacing: "0.12em", textTransform: "uppercase" }}>The Situation</span>
                  </div>
                  <h2 style={{
                    fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 3vw, 36px)",
                    fontWeight: 900, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: "20px"
                  }}>
                    A Founder With an Audience That Wasn&apos;t Working
                  </h2>
                  <p style={{ fontSize: "17px", color: "#334155", lineHeight: 1.85 }}>
                    A B2B founder with an established but plateau-stuck LinkedIn presence at 87,000 followers. The audience had been built organically over several years, but growth had stalled. Post-engagement had flattened, inbound enquiries from content were inconsistent, and the content itself lacked a clear strategic direction. The founder had the credibility and the experience. They just needed a system that could translate both into compounding distribution.
                  </p>
                </div>

                {/* THE CHALLENGE */}
                <div style={{ marginBottom: "72px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                    <div style={{ width: "32px", height: "2px", backgroundColor: "#22c55e" }} />
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "#16a34a", letterSpacing: "0.12em", textTransform: "uppercase" }}>The Challenge</span>
                  </div>
                  <h2 style={{
                    fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 3vw, 36px)",
                    fontWeight: 900, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: "20px"
                  }}>
                    Posting Without a Framework
                  </h2>
                  <p style={{ fontSize: "17px", color: "#334155", lineHeight: 1.85, marginBottom: "28px" }}>
                    The founder was posting regularly but without a framework. Content was reactive, driven by what felt interesting that day, rather than strategic. Three specific problems were identified in the initial audit:
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {challenges.map((c, i) => (
                      <div key={i} style={{
                        display: "flex", alignItems: "flex-start", gap: "16px",
                        backgroundColor: "#fafafa", border: "1px solid #e2e8f0",
                        borderRadius: "12px", padding: "18px 20px"
                      }}>
                        <div style={{
                          width: "24px", height: "24px", borderRadius: "50%", flexShrink: 0,
                          backgroundColor: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)",
                          display: "flex", alignItems: "center", justifyContent: "center"
                        }}>
                          <span style={{ fontSize: "11px", fontWeight: 900, color: "#ef4444" }}>✕</span>
                        </div>
                        <span style={{ fontSize: "15px", color: "#1e293b", lineHeight: 1.6 }}>{c}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{
                    marginTop: "24px",
                    backgroundColor: "rgba(239,68,68,0.03)", border: "1px solid rgba(239,68,68,0.12)",
                    borderRadius: "12px", padding: "18px 20px"
                  }}>
                    <p style={{ fontSize: "15px", color: "#334155", lineHeight: 1.65, margin: 0 }}>
                      The result was an audience large enough to matter, but not activated. Followers existed. Pipeline did not flow from them.
                    </p>
                  </div>
                </div>

                {/* THE SOLUTION: Timeline Steps */}
                <div style={{ marginBottom: "72px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                    <div style={{ width: "32px", height: "2px", backgroundColor: "#22c55e" }} />
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "#16a34a", letterSpacing: "0.12em", textTransform: "uppercase" }}>The Solution</span>
                  </div>
                  <h2 style={{
                    fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 3vw, 36px)",
                    fontWeight: 900, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: "12px"
                  }}>
                    A 7-Step Growth System
                  </h2>
                  <p style={{ fontSize: "17px", color: "#475569", lineHeight: 1.7, marginBottom: "48px" }}>
                    Each step compounded on the previous one over 17 months.
                  </p>

                  {/* Timeline */}
                  <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
                    {/* Vertical connecting line */}
                    <div style={{
                      position: "absolute", left: "23px", top: "40px", bottom: "40px",
                      width: "1px", backgroundColor: "#e2e8f0", zIndex: 0,
                    }} />

                    {steps.map((step, i) => (
                      <div
                        key={i}
                        id={`step-${step.number}`}
                        style={{
                          display: "flex", gap: "28px", position: "relative",
                          marginBottom: i < steps.length - 1 ? "0" : "0",
                          cursor: "pointer"
                        }}
                        onClick={() => setActiveStep(activeStep === i ? null : i)}
                      >
                        {/* Step number bubble */}
                        <div style={{ flexShrink: 0, zIndex: 1 }}>
                          <div style={{
                            width: "48px", height: "48px", borderRadius: "50%",
                            backgroundColor: activeStep === i ? "#22c55e" : "#ffffff",
                            border: activeStep === i ? "2px solid #22c55e" : "1px solid #e2e8f0",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            transition: "all 0.3s ease",
                            boxShadow: activeStep === i ? "0 0 20px rgba(34,197,94,0.25)" : "0 1px 4px rgba(0,0,0,0.06)"
                          }}>
                            <span style={{
                              fontFamily: "var(--font-heading)", fontSize: "13px", fontWeight: 900,
                              color: activeStep === i ? "#ffffff" : "#16a34a",
                              letterSpacing: "-0.02em"
                            }}>
                              {step.number}
                            </span>
                          </div>
                        </div>

                        {/* Step content */}
                        <div style={{
                          flex: 1, paddingBottom: "48px",
                        }}>
                          {/* Header row */}
                          <div style={{
                            display: "flex", alignItems: "center", justifyContent: "space-between",
                            minHeight: "48px", gap: "16px"
                          }}>
                            <h3 style={{
                              fontFamily: "var(--font-heading)",
                              fontSize: "clamp(16px, 2vw, 20px)",
                              fontWeight: 900, color: "#0f172a",
                              letterSpacing: "-0.02em", margin: 0,
                            }}>
                              {step.title}
                            </h3>
                            <ChevronRight
                              size={18}
                              color={activeStep === i ? "#16a34a" : "#94a3b8"}
                              style={{
                                transform: activeStep === i ? "rotate(90deg)" : "rotate(0deg)",
                                transition: "transform 0.3s ease",
                                flexShrink: 0,
                              }}
                            />
                          </div>

                          {/* Expanded body */}
                          {activeStep === i && (
                            <div style={{
                              marginTop: "20px",
                              backgroundColor: "rgba(34,197,94,0.03)", border: "1px solid rgba(34,197,94,0.15)",
                              borderRadius: "16px", padding: "28px",
                              animation: "fadeIn 0.25s ease"
                            }}>
                              <p style={{ fontSize: "15px", color: "#1e293b", lineHeight: 1.8, marginBottom: "20px" }}>
                                {step.body}
                              </p>
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

                {/* THE RESULTS */}
                <div style={{ marginBottom: "72px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                    <div style={{ width: "32px", height: "2px", backgroundColor: "#22c55e" }} />
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "#16a34a", letterSpacing: "0.12em", textTransform: "uppercase" }}>Results</span>
                  </div>
                  <h2 style={{
                    fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 3vw, 36px)",
                    fontWeight: 900, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: "12px"
                  }}>
                    17 Months of Compounding Growth
                  </h2>
                  <p style={{ fontSize: "17px", color: "#475569", lineHeight: 1.7, marginBottom: "40px" }}>
                    Every metric moved. And each one fed the next.
                  </p>

                  {/* Big number callouts */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "40px" }}>
                    {[
                      { before: "87,000", after: "725,000", label: "Followers", detail: "8.3x in 17 months", highlight: true },
                      { before: "8–12", after: "50–70", label: "Posts / Month", detail: "6x output increase", highlight: false },
                      { before: "Baseline", after: "+500%", label: "Inbound DMs", detail: "Qualified pipeline", highlight: true },
                      { before: "~1.2%", after: "3.8%", label: "Avg. Engagement Rate", detail: "Held at high volume", highlight: false },
                    ].map((r, i) => (
                      <div key={i} style={{
                        backgroundColor: r.highlight ? "rgba(34,197,94,0.05)" : "#f8fafc",
                        border: r.highlight ? "1px solid rgba(34,197,94,0.25)" : "1px solid #e2e8f0",
                        borderRadius: "16px", padding: "24px",
                      }}>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px" }}>
                          <span style={{ fontSize: "13px", color: "#64748b", textDecoration: "line-through", paddingTop: "6px" }}>{r.before}</span>
                          <span style={{ fontSize: "11px", color: "#94a3b8", paddingTop: "8px" }}>→</span>
                          <span style={{
                            fontFamily: "var(--font-heading)", fontSize: "clamp(24px, 3.5vw, 38px)",
                            fontWeight: 900, color: r.highlight ? "#16a34a" : "#0f172a",
                            letterSpacing: "-0.04em", lineHeight: 1
                          }}>{r.after}</span>
                        </div>
                        <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginBottom: "4px" }}>{r.label}</div>
                        <div style={{ fontSize: "12px", color: "#475569" }}>{r.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* THE TAKEAWAY */}
                <div style={{ marginBottom: "72px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                    <div style={{ width: "32px", height: "2px", backgroundColor: "#22c55e" }} />
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "#16a34a", letterSpacing: "0.12em", textTransform: "uppercase" }}>Takeaway</span>
                  </div>
                  <h2 style={{
                    fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 3vw, 36px)",
                    fontWeight: 900, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: "20px"
                  }}>
                    This Was Never About Going Viral
                  </h2>
                  <p style={{ fontSize: "17px", color: "#334155", lineHeight: 1.85, marginBottom: "32px" }}>
                    Not one post in the 17-month period generated a viral moment as typically defined. The growth was systematic, not accidental. What produced 8.3x follower growth was:
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {takeaways.map((item, i) => (
                      <div key={i} style={{
                        display: "flex", alignItems: "center", gap: "16px",
                        backgroundColor: "#f8fafc", border: "1px solid #e2e8f0",
                        borderRadius: "12px", padding: "16px 20px",
                      }}>
                        <div style={{
                          width: "28px", height: "28px", borderRadius: "50%", flexShrink: 0,
                          backgroundColor: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)",
                          display: "flex", alignItems: "center", justifyContent: "center"
                        }}>
                          <span style={{ fontFamily: "var(--font-heading)", fontSize: "12px", fontWeight: 900, color: "#16a34a" }}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <span style={{ fontSize: "15px", color: "#1e293b", lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    marginTop: "32px",
                    borderLeft: "3px solid #22c55e",
                    paddingLeft: "24px",
                  }}>
                    <p style={{ fontSize: "18px", color: "#0f172a", fontWeight: 600, lineHeight: 1.7, margin: 0 }}>
                      The result was not just audience growth. It was a founder who became the default trusted voice in their category, resulting in an audience that began sending them inbound pipeline without being asked.
                    </p>
                  </div>
                </div>

                {/* BOTTOM CTA */}
                <div style={{
                  background: "linear-gradient(135deg, rgba(34,197,94,0.07) 0%, rgba(248,250,252,0) 70%)",
                  border: "1px solid rgba(34,197,94,0.2)",
                  borderRadius: "24px", padding: "56px 48px",
                  backgroundColor: "#f8fafc",
                }}>
                  <div style={{ maxWidth: "480px" }}>
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: "8px",
                      backgroundColor: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)",
                      borderRadius: "100px", padding: "5px 14px", marginBottom: "20px"
                    }}>
                      <span style={{ fontSize: "11px", fontWeight: 800, color: "#16a34a", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                        Want the same system?
                      </span>
                    </div>
                    <h2 style={{
                      fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 4vw, 40px)",
                      fontWeight: 900, color: "#0f172a", letterSpacing: "-0.03em",
                      lineHeight: 1.1, marginBottom: "16px"
                    }}>
                      Turn LinkedIn into a{" "}
                      <span style={{ color: "#16a34a" }}>revenue machine</span>
                    </h2>
                    <p style={{ fontSize: "16px", color: "#334155", lineHeight: 1.65, marginBottom: "32px" }}>
                      We install the same distribution system for B2B founders. Book a free strategy call to see if you qualify.
                    </p>
                    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                      <a href="/#book-call" className="btn-cta" style={{
                        display: "inline-flex", alignItems: "center", gap: "10px",
                        backgroundColor: "#16a34a", color: "#ffffff",
                        fontSize: "15px", fontWeight: 800,
                        fontFamily: "var(--font-heading)",
                        padding: "14px 32px", borderRadius: "10px",
                        textDecoration: "none",
                        boxShadow: "0 12px 36px -8px rgba(22,163,74,0.35)"
                      }}>
                        Book A Free Strategy Call <ChevronRight size={16} />
                      </a>
                      <Link href="/case-studies" style={{
                        display: "inline-flex", alignItems: "center", gap: "8px",
                        color: "#475569", fontSize: "14px", fontWeight: 600,
                        textDecoration: "none", padding: "14px 0"
                      }}>
                        <ArrowLeft size={14} /> See all case studies
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1024px) {
          .cs-body-grid {
            grid-template-columns: 1fr !important;
          }
          .cs-sidebar {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .cs-hero-metrics {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </>
  );
}
