import React from "react";
import { X, Check } from "lucide-react";

export function OldVsNew() {
    return (
        <section id="why-us" className="section-padding" style={{ width: "100%", backgroundColor: "#ffffff", borderTop: "1px solid #f3f4f6" }}>
            <div className="section-inner">
                <h2 style={{
                    fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 3.5vw, 48px)",
                    fontWeight: 900, color: "#000000", textAlign: "center",
                    letterSpacing: "-0.02em", marginBottom: "56px",
                }}>
                    Stop Leaving Money on the Table
                </h2>

                <div className="old-vs-new-grid">

                    {/* Before Davro */}
                    <div className="mobile-card-padding" style={{
                        backgroundColor: "rgba(239,68,68,0.06)",
                        border: "1px solid rgba(239,68,68,0.2)",
                        borderTop: "3px solid rgba(239,68,68,0.6)",
                        borderRadius: "20px", padding: "40px",
                        boxShadow: "0 10px 30px -10px rgba(220, 38, 38, 0.1)",
                    }}>
                        <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "24px", fontWeight: 800, color: "#000000ff", marginBottom: "28px", letterSpacing: "-0.01em" }}>
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
                                    <X style={{ width: "18px", height: "18px", color: "#ff0000ff", flexShrink: 0, marginTop: "2px" }} strokeWidth={3} />
                                    <span style={{ fontSize: "16px", color: "#000000ff", fontWeight: 600, lineHeight: 1.55 }}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* After Davro */}
                    <div className="mobile-card-padding" style={{
                        backgroundColor: "rgba(34,197,94,0.06)",
                        border: "1px solid rgba(34,197,94,0.2)",
                        borderTop: "3px solid rgba(34,197,94,0.6)",
                        borderRadius: "20px", padding: "40px",
                        position: "relative",
                        boxShadow: "0 10px 30px -10px rgba(34,197,94,0.15)",
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
                        <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "24px", fontWeight: 800, color: "#000000ff", marginBottom: "28px", letterSpacing: "-0.01em" }}>
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
                                    <Check style={{ width: "18px", height: "18px", color: "#00ff59ff", flexShrink: 0, marginTop: "2px" }} strokeWidth={3} />
                                    <span style={{ fontSize: "16px", color: "#000000ff", fontWeight: 600, lineHeight: 1.55 }}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
