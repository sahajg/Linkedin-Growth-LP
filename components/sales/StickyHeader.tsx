"use client";
import React, { useState, useEffect } from "react";
import { TrendingUp } from "lucide-react";

export function StickyHeader() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 80);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
            transition: "opacity 0.3s ease, transform 0.3s ease",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(-100%)",
            pointerEvents: visible ? "auto" : "none",
        }}>
            <div style={{
                backgroundColor: "rgba(0,0,0,0.9)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid #262626",
            }}>
                <div className="section-inner" style={{ height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <TrendingUp style={{ width: "20px", height: "20px", color: "#22c55e" }} strokeWidth={2.5} />
                        <span style={{ fontSize: "20px", fontWeight: 900, letterSpacing: "-0.04em", color: "#ffffff", fontFamily: "var(--font-heading)" }}>
                            DAVRO
                        </span>
                    </div>
                    <a href="#book-call" className="btn-cta" style={{
                        backgroundColor: "#22c55e", color: "#000000",
                        fontSize: "14px", fontWeight: 800,
                        fontFamily: "var(--font-heading)",
                        padding: "10px 24px", borderRadius: "8px", border: "none",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        Book a Free Call
                    </a>
                </div>
            </div>
        </div>
    );
}
