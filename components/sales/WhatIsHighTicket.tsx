import React from "react";
import { Check } from "lucide-react";

const benefits = [
    "You're surviving on referrals and word of mouth but have zero control over when the next client shows up",
    "You have no predictable client pipeline and every month feels like starting from scratch",
    "You've tried posting on LinkedIn a few times but got no engagement, no leads, and gave up",
    "You don't have the time or expertise to figure out a content strategy that actually brings in clients",
    "You want qualified client meetings, not followers and likes that do nothing for your revenue",
    "You're tired of cold outreach that burns hours and goes nowhere while competitors seem to attract clients effortlessly",
];

export function WhatIsHighTicket() {
    return (
        <section className="section-padding" style={{ width: "100%", backgroundColor: "#050a17", borderTop: "1px solid #1e2a42" }}>
            <div className="section-inner high-ticket-grid">

                {/* Left Column */}
                <div>
                    <h2 style={{
                        fontFamily: "var(--font-heading)", fontSize: "clamp(30px, 3.5vw, 48px)",
                        fontWeight: 900, color: "#ffffff", letterSpacing: "-0.02em",
                        lineHeight: 1.2, marginBottom: "16px",
                    }}>
                        This is for you if
                    </h2>
                    {/* Qualification badge */}
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(234,179,8,0.1)", border: "1px solid rgba(234,179,8,0.3)", borderRadius: "999px", padding: "6px 16px", marginBottom: "28px" }}>
                        <div style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#facc15" }} />
                        <span style={{ fontSize: "12px", fontWeight: 700, color: "#facc15", letterSpacing: "0.12em" }}>
                            Sound familiar? Keep reading.
                        </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "18px", fontSize: "17px", color: "rgba(255,255,255,0.88)", lineHeight: 1.7, fontWeight: 500 }}>
                        <p>You&apos;re a B2B saas/agency founder whose growth depends entirely on who happens to refer you this month. You have no system for generating clients on demand.</p>
                        <p>You don&apos;t need another marketing tactic that sounds good on paper. You need a repeatable pipeline that puts qualified buyers in front of you every single month.</p>
                    </div>
                </div>

                {/* Right Column: Checklist Card */}
                <div className="mobile-card-padding" style={{
                    backgroundColor: "#0e1629",
                    border: "1px solid #1e2a42",
                    borderRadius: "24px",
                    padding: "40px",
                    boxShadow: "0 32px 64px -16px rgba(0,0,0,0.6), 0 0 0 1px rgba(34,197,94,0.04)",
                }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "22px", fontWeight: 800, color: "#ffffff", marginBottom: "28px", letterSpacing: "-0.01em" }}>
                        If Any of This Hits Home
                    </h3>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "18px", listStyle: "none", padding: 0, margin: 0 }}>
                        {benefits.map((benefit, index) => (
                            <li key={index} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                                <div style={{ backgroundColor: "rgba(34,197,94,0.12)", padding: "5px", borderRadius: "8px", flexShrink: 0, marginTop: "2px" }}>
                                    <Check style={{ width: "15px", height: "15px", color: "#22c55e" }} strokeWidth={3} />
                                </div>
                                <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.88)", fontWeight: 600, lineHeight: 1.5 }}>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}
