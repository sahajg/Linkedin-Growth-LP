import React from "react";

export function FinalCTA() {
    return (
        <section className="section-padding" style={{ width: "100%", backgroundColor: "#080d1b", textAlign: "center", position: "relative", overflow: "hidden", borderTop: "1px solid #1e2a42" }}>
            <div style={{
                position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
                width: "800px", height: "300px",
                background: "radial-gradient(circle at center, rgba(34,197,94,0.05) 0%, transparent 70%)",
                filter: "blur(60px)", pointerEvents: "none",
            }} />

            <div className="section-inner">
                <h2 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(32px, 5vw, 62px)",
                    fontWeight: 900,
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    color: "#ffffff",
                    maxWidth: "900px",
                    margin: "0 auto 24px",
                }}>
                    Your Next 8 to 15 Client Meetings Are Not Coming From Another Cold Outreach Campaign
                </h2>

                <p style={{ fontSize: "1.2rem", fontWeight: 500, color: "rgba(255,255,255,0.65)", maxWidth: "700px", margin: "0 auto 48px", lineHeight: 1.65 }}>
                    One call. No commitment. We will show you exactly how we would build your LinkedIn and Twitter distribution funnel so you can decide if it is worth pursuing.
                </p>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                    <a href="#book-call" className="btn-cta" style={{
                        backgroundColor: "#22c55e", color: "#000000",
                        fontSize: "22px", fontWeight: 900,
                        fontFamily: "var(--font-heading)",
                        padding: "24px 72px", borderRadius: "14px", border: "none",
                        boxShadow: "0 20px 40px -10px rgba(34,197,94,0.4)",
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
