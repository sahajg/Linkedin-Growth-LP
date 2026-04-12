"use client";

import React from "react";
import Script from "next/script";

export function Booking() {
    return (
        <section
            id="book-call"
            className="section-padding"
            style={{
                width: "100%",
                backgroundColor: "#0F1014",
                borderTop: "1px solid #1f2026",
            }}
        >
            <div className="section-inner">
                {/* Section Header */}
                <div style={{ textAlign: "center", marginBottom: "56px" }}>
                    <h2
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "clamp(30px, 3.5vw, 48px)",
                            fontWeight: 900,
                            color: "#ffffff",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.2,
                            marginBottom: "16px",
                        }}
                    >
                        Ready to Build Your <span style={{ color: "#22c55e" }}>LinkedIn Engine?</span>
                    </h2>
                    <p
                        style={{
                            fontSize: "17px",
                            color: "rgba(255,255,255,0.6)",
                            fontWeight: 500,
                            maxWidth: "600px",
                            margin: "0 auto",
                            lineHeight: 1.6,
                        }}
                    >
                        Book a 15-minute strategy call below to see if we can help you scale your agency through organic distribution.
                    </p>
                </div>

                {/* Calendly Inline Widget */}
                <div
                    style={{
                        backgroundColor: "#16171D",
                        borderRadius: "24px",
                        overflow: "hidden",
                        border: "1px solid #1f2026",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.3)"
                    }}
                >
                    <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/bookurl/linkedin-growth?hide_gdpr_banner=1"
                        style={{ minWidth: "320px", height: "700px" }}
                    />
                    <Script
                        src="https://assets.calendly.com/assets/external/widget.js"
                        strategy="lazyOnload"
                        onLoad={() => {
                            console.log("Calendly Script Loaded");
                        }}
                    />
                </div>
            </div>
        </section>
    );
}