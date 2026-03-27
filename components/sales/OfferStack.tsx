import React from "react";

const deliverables = [
    {
        title: "Deep market and customer research tailored to your niche",
        description: "We study your buyers, your competitors, and what content is already working in your space. Every strategy decision is backed by research, not assumptions. This is what separates content that generates meetings from content that generates crickets.",
    },
    {
        title: "A full content strategy built around your offer and your buyer",
        description: "We map out exactly what to post, when to post it, and how every piece connects to getting you client meetings. No random posting. Every piece of content has a job to do in your pipeline.",
    },
    {
        title: "Ghostwritten LinkedIn and Twitter posts published on your behalf",
        description: "Properly researched, strategically structured, human quality content written in your voice. Not AI slop, not generic templates. Posts designed to attract the exact type of buyer you want to work with.",
    },
    {
        title: "Lead magnet creation that captures high intent prospects",
        description: "We build guides, frameworks, and tools that your ideal client actually wants. These assets pull prospects into your pipeline and start conversations with people who are already considering hiring someone like you.",
    },
    {
        title: "Full LinkedIn and Twitter profile optimization",
        description: "Your profile is the first thing a potential client sees. We optimize every element, from your headline to your featured section, so that when the right person lands on your profile they immediately understand why they should talk to you.",
    },
    {
        title: "End to end distribution and engagement management",
        description: "We handle posting schedules, comment engagement, and strategic networking so your content reaches the right people consistently. You never have to think about when or how to post.",
    },
    {
        title: "Performance tracking tied directly to client meetings",
        description: "We track the metrics that matter: leads generated, conversations started, and meetings booked. Not vanity numbers. You get clear visibility into what's working and what revenue your content is driving.",
    },
    {
        title: "Monthly strategy review and optimization",
        description: "Every month we review what content drove results, which lead magnets are converting, and where we need to adjust. The strategy evolves with your market so your pipeline keeps getting stronger over time.",
    },
];

export function OfferStack() {
    return (
        <section id="results" className="section-padding" style={{ width: "100%", backgroundColor: "#080d1b", borderTop: "1px solid #1e2a42" }}>
            <div className="section-inner" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                <h2 style={{
                    fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 3.5vw, 52px)",
                    fontWeight: 900, color: "#ffffff", textAlign: "center",
                    letterSpacing: "-0.02em", marginBottom: "16px", maxWidth: "800px",
                }}>
                    Here&apos;s What You Get
                </h2>
                <p style={{ fontSize: "17px", color: "#6b7fa0", fontWeight: 500, textAlign: "center", marginBottom: "64px", maxWidth: "600px" }}>
                    A complete LinkedIn and Twitter distribution system built, managed, and optimized entirely on your behalf to generate qualified client meetings.
                </p>

                {/* Deliverables list */}
                <div style={{ width: "100%", maxWidth: "860px", display: "flex", flexDirection: "column", gap: "0" }}>
                    {deliverables.map((item, idx) => (
                        <div key={idx} style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "28px",
                            padding: "36px 0",
                            borderBottom: idx < deliverables.length - 1 ? "1px solid #1a2035" : "none",
                        }}>
                            {/* Index number */}
                            <div style={{
                                flexShrink: 0,
                                width: "44px", height: "44px",
                                borderRadius: "12px",
                                backgroundColor: "rgba(34,197,94,0.1)",
                                border: "1px solid rgba(34,197,94,0.25)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontFamily: "var(--font-heading)",
                                fontSize: "15px", fontWeight: 900,
                                color: "#22c55e",
                            }}>
                                {String(idx + 1).padStart(2, "0")}
                            </div>

                            {/* Text */}
                            <div style={{ flex: 1 }}>
                                <p style={{
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "20px", fontWeight: 800,
                                    color: "#ffffff",
                                    marginBottom: "10px",
                                    lineHeight: 1.3,
                                    letterSpacing: "-0.01em",
                                }}>
                                    {item.title}
                                </p>
                                <p style={{
                                    fontSize: "16px", fontWeight: 500,
                                    color: "rgba(255,255,255,0.82)", lineHeight: 1.75,
                                    margin: 0,
                                }}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Offer highlight + CTA */}
                <div className="mobile-card-padding" style={{
                    marginTop: "64px",
                    backgroundColor: "rgba(34,197,94,0.06)",
                    border: "1px solid rgba(34,197,94,0.22)",
                    borderRadius: "20px",
                    padding: "32px 40px",
                    textAlign: "center",
                    maxWidth: "700px",
                    width: "100%",
                    marginBottom: "40px",
                }}>
                    <p style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "22px", fontWeight: 800,
                        color: "#4ade80", margin: 0,
                        letterSpacing: "-0.01em",
                    }}>
                        Everything done for you. You just show up to the meetings.
                    </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
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
