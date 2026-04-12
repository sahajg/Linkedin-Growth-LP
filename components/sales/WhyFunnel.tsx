import React from "react";

export function WhyFunnel() {
    return (
        <section id="why-us" className="section-padding" style={{ width: "100%", backgroundColor: "#ffffff", borderTop: "1px solid #f3f4f6" }}>
            <div className="section-inner high-ticket-grid">

                {/* Left Column: Heading & Intro */}
                <div>
                    <h2 style={{
                        fontFamily: "var(--font-heading)", fontSize: "clamp(30px, 3.5vw, 48px)",
                        fontWeight: 900, color: "#000000", letterSpacing: "-0.02em",
                        lineHeight: 1.15, marginBottom: "24px",
                    }}>
                        The New Opportunity
                    </h2>

                    <div style={{ display: "flex", flexDirection: "column", gap: "20px", fontSize: "17px", color: "#4b5563", lineHeight: 1.7, fontWeight: 500 }}>
                        <p>Every founder is trying to crack distribution. They&apos;re debating whether to start a podcast, wondering if doing the latest viral trend on TikTok is worth the effort.</p>
                        <p>Meanwhile, LinkedIn is sitting right there wildly underutilized and practically begging founders to use it. Eventually, this channel will be saturated like everything else. But for now, for the willing founder, we believe there are customers to be had.</p>
                    </div>

                    <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
                        <a href="#book-call" className="btn-cta" style={{
                            backgroundColor: "#22c55e", color: "#000000",
                            fontSize: "18px", fontWeight: 800,
                            fontFamily: "var(--font-heading)",
                            padding: "18px 48px", borderRadius: "12px", border: "none",
                            boxShadow: "0 15px 30px -10px rgba(34,197,94,0.35)",
                            textDecoration: "none"
                        }}>
                            Book A Free Call
                        </a>
                    </div>
                </div>

                {/* Right Column: The Points & Closing (More compact) */}
                <div className="mobile-card-padding" style={{
                    backgroundColor: "#f9fafb",
                    border: "1px solid #f3f4f6",
                    borderRadius: "24px",
                    padding: "32px",
                }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                        {/* Point 1 */}
                        <div style={{ display: "flex", gap: "16px" }}>
                            <div style={{ flexShrink: 0, width: "28px", height: "28px", borderRadius: "50%", backgroundColor: "#e2e8f0", color: "#000000", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "14px" }}>1</div>
                            <p style={{ margin: 0, fontSize: "16px", color: "#1f2937", lineHeight: 1.6, fontWeight: 500 }}>
                                <strong style={{ color: "#000000" }}>The audience is already there, pre qualified.</strong> Every other social media fight is a slugfest between political takes, culture war brainrot, an algorithm that changes weekly, while you’re earnestly posting about your latest feature. In contrast, LinkedIn’s feed is overwhelmingly professional. The people scrolling it are decision makers, investors, hiring managers, and operators looking for &ldquo;work&rdquo; content. If you’re selling to businesses or raising money, your buyers are literally browsing between meetings.
                            </p>
                        </div>

                        {/* Point 2 */}
                        <div style={{ display: "flex", gap: "16px" }}>
                            <div style={{ flexShrink: 0, width: "28px", height: "28px", borderRadius: "50%", backgroundColor: "#e2e8f0", color: "#000000", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "14px" }}>2</div>
                            <p style={{ margin: 0, fontSize: "16px", color: "#1f2937", lineHeight: 1.6, fontWeight: 500 }}>
                                <strong style={{ color: "#000000" }}>The algorithm is generous.</strong> LinkedIn’s distribution is still in growth mode. A post from a 7,000 follower account can get 850 likes and 184 comments that&apos;s what happened when Salar Shahini of Sweatpals announced his team’s $12M raise. That&apos;s a 12%+ engagement rate! The platform actively rewards original posts, especially from personal accounts (not company pages).
                            </p>
                        </div>

                        {/* Closing Highlight */}
                        <div style={{
                            marginTop: "8px", padding: "20px", backgroundColor: "#000000", borderRadius: "16px",
                            textAlign: "center"
                        }}>
                            <p style={{ color: "#22c55e", fontWeight: 900, fontSize: "18px", margin: "0 0 8px 0", letterSpacing: "-0.01em" }}>Stop Posting. Start Converting.</p>
                            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", lineHeight: 1.5, margin: 0 }}>
                                I help founders build a LinkedIn + Twitter Distribution Funnel that generates actual revenue. We handle strategy, research, and architecture you just handle the calls.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
