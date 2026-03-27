import React from "react";
import { X, Check } from "lucide-react";

export function OldVsNew() {
    return (
        <section id="why-us" className="section-padding" style={{ width: "100%", backgroundColor: "#080d1b", borderTop: "1px solid #1e2a42" }}>
            <div className="section-inner">
                <h2 style={{
                    fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 3.5vw, 48px)",
                    fontWeight: 900, color: "#ffffff", textAlign: "center",
                    letterSpacing: "-0.02em", marginBottom: "56px",
                }}>
                    Stop Leaving Money on the Table
                </h2>

                <div className="old-vs-new-grid">

                    {/* Before Davro */}
                    <div className="mobile-card-padding" style={{
                        backgroundColor: "rgba(127,29,29,0.2)",
                        border: "1px solid rgba(239,68,68,0.25)",
                        borderTop: "3px solid rgba(239,68,68,0.6)",
                        borderRadius: "20px", padding: "40px",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                    }}>
                        <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "24px", fontWeight: 800, color: "#f87171", marginBottom: "28px", letterSpacing: "-0.01em" }}>
                            Before Davro
                        </h3>
                        <ul style={{ display: "flex", flexDirection: "column", gap: "18px", listStyle: "none", padding: 0, margin: 0 }}>
                            {[
                                "100% dependent on referrals with zero control over when the next client appears",
                                "Revenue swings wildly from month to month because there's no predictable pipeline",
                                "Cold outreach burning hours every week with almost nothing to show for it",
                                "LinkedIn posts that get a handful of likes from colleagues but zero client conversations",
                                "Watching competitors build authority and attract inbound leads while you stay invisible",
                            ].map((item, idx) => (
                                <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                                    <X style={{ width: "18px", height: "18px", color: "#f87171", flexShrink: 0, marginTop: "2px" }} strokeWidth={3} />
                                    <span style={{ fontSize: "16px", color: "rgba(254,202,202,0.85)", fontWeight: 500, lineHeight: 1.55 }}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* After Davro */}
                    <div className="mobile-card-padding" style={{
                        backgroundColor: "rgba(6,78,59,0.2)",
                        border: "1px solid rgba(34,197,94,0.3)",
                        borderTop: "3px solid rgba(34,197,94,0.6)",
                        borderRadius: "20px", padding: "40px",
                        position: "relative",
                        boxShadow: "0 0 50px -10px rgba(34,197,94,0.12), 0 4px 24px rgba(0,0,0,0.3)",
                    }}>
                        <div style={{
                            position: "absolute", top: 0, right: 0,
                            backgroundColor: "#22c55e",
                            color: "#000000", fontSize: "12px", fontWeight: 900,
                            padding: "6px 20px", borderBottomLeftRadius: "14px",
                            fontFamily: "var(--font-heading)", letterSpacing: "0.08em",
                        }}>
                            Recommended
                        </div>
                        <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "24px", fontWeight: 800, color: "#4ade80", marginBottom: "28px", letterSpacing: "-0.01em" }}>
                            After Davro
                        </h3>
                        <ul style={{ display: "flex", flexDirection: "column", gap: "18px", listStyle: "none", padding: 0, margin: 0 }}>
                            {[
                                "8 to 15 qualified inbound client meetings landing on your calendar every single month",
                                "Content that attracts exactly the right buyers because it's built around their specific problems",
                                "A lead magnet pulling in high intent prospects who are already considering hiring someone like you",
                                "Growing authority in your niche so prospects trust you before the first conversation even starts",
                                "A client pipeline that runs without you having to chase, pitch, or cold message anyone",
                            ].map((item, idx) => (
                                <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                                    <Check style={{ width: "18px", height: "18px", color: "#4ade80", flexShrink: 0, marginTop: "2px" }} strokeWidth={3} />
                                    <span style={{ fontSize: "16px", color: "#ffffff", fontWeight: 600, lineHeight: 1.55 }}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
