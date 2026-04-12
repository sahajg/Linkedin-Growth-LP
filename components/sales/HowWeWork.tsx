import React from "react";

const steps = [
    {
        number: "01",
        title: "Business and Market Audit",
        description: "We start by understanding your business inside out. Your offer, your ideal client, your competitive landscape, and what has and hasn't worked for you before. Nothing gets written until we know exactly who we're targeting and why they buy.",
    },
    {
        number: "02",
        title: "Ideal Customer and Niche Research",
        description: "We go deep on your buyers. What problems keep them up at night, what content they actually engage with, what language they use, and where they spend time online. This research is the foundation of every piece of content we create.",
    },
    {
        number: "03",
        title: "Content Strategy and Lead Magnet Creation",
        description: "We build a full content strategy designed to attract your exact buyer and move them toward a conversation. We also create lead magnets like guides, frameworks, and tools that capture high intent prospects and pull them into your pipeline.",
    },
    {
        number: "04",
        title: "Ghostwriting and Profile Management",
        description: "We write every post, optimize your profile, and manage your presence across LinkedIn and Twitter. This is not AI generated content. It is properly researched, strategically structured writing built around your specific offer and buyer.",
    },
    {
        number: "05",
        title: "Distribution and Optimization",
        description: "We handle posting schedules, engagement strategy, and audience growth tactics. Every week we analyze what's working and refine the approach so your content consistently reaches the people who are most likely to become clients.",
    },
    {
        number: "06",
        title: "Pipeline Review and Scaling",
        description: "We track every lead, every conversation, and every meeting that comes from your content. Monthly reviews cover what's driving results, what needs to change, and how we scale what's working to get you more qualified meetings.",
    },
];

export function HowWeWork() {
    return (
        <section id="process" className="section-padding" style={{ width: "100%", backgroundColor: "#0F1014", borderTop: "1px solid #1f2026" }}>
            <div className="section-inner">

                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "72px" }}>
                    <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em", color: "#22c55e", marginBottom: "14px", textTransform: "uppercase" }}>
                        The Process
                    </p>
                    <h2 style={{
                        fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 3.5vw, 48px)",
                        fontWeight: 900, color: "#ffffff",
                        letterSpacing: "-0.02em", marginBottom: "16px", lineHeight: 1.15,
                    }}>
                        How We Work
                    </h2>
                    <p style={{ fontSize: "18px", fontWeight: 500, color: "#ffffffff", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>
                        From research to qualified meetings in 6 steps. You stay focused on your business while we build the pipeline.
                    </p>
                </div>

                {/* Steps: 2-column grid */}
                <div className="process-grid" style={{
                    backgroundColor: "#1f2026",
                    borderRadius: "24px",
                    border: "1px solid #24252C",
                }}>
                    {steps.map((step, idx) => (
                        <div key={idx} className="mobile-card-padding" style={{
                            backgroundColor: "#16171D",
                            padding: "40px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                            position: "relative",
                            transition: "background-color 0.2s ease",
                        }}>
                            {/* Step number */}
                            <span style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "13px", fontWeight: 900,
                                color: "#22c55e",
                                letterSpacing: "0.12em",
                            }}>
                                {step.number}:
                            </span>
                            {/* Title */}
                            <h3 style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "20px", fontWeight: 800,
                                color: "#ffffff",
                                letterSpacing: "-0.01em",
                                lineHeight: 1.3,
                                margin: 0,
                            }}>
                                {step.title}
                            </h3>
                            {/* Description */}
                            <p style={{
                                fontSize: "15px", fontWeight: 500,
                                color: "rgba(255,255,255,0.82)", lineHeight: 1.75, margin: 0,
                            }}>
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", marginTop: "56px" }}>
                    <a href="#book-call" className="btn-cta" style={{
                        backgroundColor: "#22c55e", color: "#000000",
                        fontSize: "20px", fontWeight: 800,
                        fontFamily: "var(--font-heading)",
                        padding: "22px 64px", borderRadius: "14px", border: "none",
                        boxShadow: "0 20px 40px -10px rgba(34,197,94,0.35)",
                        letterSpacing: "-0.01em",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        Book A Free Call
                    </a>
                </div>

            </div>
        </section>
    );
}
