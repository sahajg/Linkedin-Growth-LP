import React from "react";

const brands = ["NIKE", "AMAZON", "SPOTIFY", "APPLE", "NETFLIX", "SAMSUNG", "GOOGLE", "ADOBE"];

const results = [
    {
        title: "Fitness Creator: 180k Followers",
        metric: "$14,200",
        description: "Closed 3 brand deals within the first 28 days of the partnership.",
    },
    {
        title: "Lifestyle Blogger: 92k Followers",
        metric: "4 Deals",
        description: "Went from zero brand deal income to consistent monthly partnerships.",
    },
    {
        title: "Tech Reviewer: 220k Followers",
        metric: "2.1×",
        description: "Negotiated more than double their previous rate on every deal after joining.",
    },
];

export function SocialProof() {
    return (
        <section style={{ width: "100%", backgroundColor: "#080d1b", paddingTop: "100px", paddingBottom: "100px", overflow: "hidden", borderTop: "1px solid #1e2a42" }}>
            <div className="section-inner">


                {/* Results heading */}
                <h2 style={{
                    fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 3.5vw, 44px)",
                    fontWeight: 900, color: "#ffffff", textAlign: "center",
                    letterSpacing: "-0.02em", marginBottom: "48px",
                }}>
                    Real Results
                </h2>

                {/* 3-column grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
                    {results.map((r, i) => (
                        <div key={i} style={{
                            backgroundColor: "#0e1629",
                            border: "1px solid #1e2a42",
                            borderRadius: "20px",
                            padding: "36px",
                            display: "flex", flexDirection: "column", gap: "12px",
                            transition: "border-color 0.2s",
                            boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                        }}>
                            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", color: "#6b7fa0", textTransform: "uppercase" }}>{r.title}</p>
                            <p style={{ fontSize: "52px", fontWeight: 900, lineHeight: 1, color: "#22c55e", fontFamily: "var(--font-heading)" }}>{r.metric}</p>
                            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.88)", lineHeight: 1.6, fontWeight: 500 }}>{r.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
