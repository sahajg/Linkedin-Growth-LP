import React from "react";

export function Hero() {
    return (
        <section id="home" className="hero-section" style={{ width: "100%", backgroundColor: "#0F1014", position: "relative", overflow: "hidden" }}>
            {/* Primary green radial glow - top center */}
            <div style={{
                position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                width: "900px", height: "500px",
                background: "radial-gradient(circle at center, rgba(34,197,94,0.15) 0%, transparent 70%)",
                filter: "blur(60px)", pointerEvents: "none",
            }} />
            {/* Secondary blue accent glow - bottom right */}
            <div style={{
                position: "absolute", bottom: "-100px", right: "-100px",
                width: "600px", height: "400px",
                background: "radial-gradient(circle at center, rgba(59,130,246,0.07) 0%, transparent 70%)",
                filter: "blur(80px)", pointerEvents: "none",
            }} />

            <div className="section-inner hero-content-gap" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

                {/* Eyebrow label */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(234,179,8,0.1)", border: "1px solid rgba(234,179,8,0.3)", borderRadius: "999px", padding: "6px 16px" }}>
                    <div style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#facc15" }} />
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "#facc15", letterSpacing: "0.12em" }}>
                        For B2B Founders/CEOs
                    </span>
                </div>

                {/* H1: main claim */}
                <h1 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(32px, 4.8vw, 48px)",
                    fontWeight: 900,
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    color: "#ffffff",
                    maxWidth: "1000px",
                    margin: 0,
                }}>
                    We Help B2B Founders Build a <span style={{ color: "#22c55e" }}>Done-For-You</span> Linkedin + Twitter Distribution Funnel That Gets You <span style={{ color: "#22c55e" }}>8-15 Qualified Inbound Client Meetings</span> Every Month Without Relying On Referrals Or Paid Ads.
                </h1>

                {/* Sub-headline */}
                <p style={{
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,0.75)",
                    maxWidth: "560px",
                    margin: 0,
                }}>
                    Not templates. Not AI generated posts. Proper customer research, lead magnets, and a content strategy built specifically around your buyers and your offer.
                </p>

                {/* CTA */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", paddingTop: "40px" }}>
                    <a href="#book-call" className="btn-cta" style={{
                        backgroundColor: "#22c55e",
                        color: "#000000",
                        fontSize: "20px",
                        fontWeight: 800,
                        fontFamily: "var(--font-heading)",
                        padding: "20px 56px",
                        borderRadius: "12px",
                        border: "none",
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

                {/* Final Cropped Image (VSL Replacement) */}
                <div style={{ 
                    width: "100%", 
                    maxWidth: "1160px", 
                    margin: "48px 0 0 0", // Reduced bottom margin to stay close to footer if needed
                    borderRadius: "32px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    overflow: "hidden",
                    boxShadow: "0 60px 120px -20px rgba(0,0,0,0.85), 0 0 0 1px rgba(34,197,94,0.05)",
                    backgroundColor: "#ffffff", // Whiteboard background
                    position: "relative"
                }}>
                    <div className="hero-image-container" style={{ padding: "80px 60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img 
                          src="/linkedin-vsl.png" 
                          alt="LinkedIn Inbound Client Acquisition Funnel" 
                          style={{ 
                              width: "100%", 
                              height: "auto", 
                              display: "block",
                              maxWidth: "1000px", // Maintain relative size
                              filter: "contrast(1.02)", // Subtle pop
                          }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
