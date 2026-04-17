import React from "react";

export function Footer() {
    return (
        <footer style={{ width: "100%", backgroundColor: "#0F1014", borderTop: "1px solid #1f2026", padding: "48px 0" }}>
            <div className="section-inner" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <img src="/logo.png" alt="Davro" style={{ width: "24px", height: "24px", objectFit: "contain" }} />
                    <span style={{ fontFamily: "var(--font-heading)", fontSize: "20px", fontWeight: 900, letterSpacing: "-0.04em", color: "#ffffff" }}>
                        Davro
                    </span>
                </div>
                <p style={{ fontSize: "14px", color: "#64748B", fontWeight: 500, margin: 0 }}>
                    &copy; {new Date().getFullYear()} Davro. All rights reserved.
                </p>
                <div style={{ display: "flex", gap: "32px", fontSize: "13px", color: "#64748B", fontWeight: 600, flexWrap: "wrap", justifyContent: "center" }}>
                    <span style={{ cursor: "pointer" }}>Privacy Policy</span>
                    <span style={{ cursor: "pointer" }}>Terms of Service</span>
                    <span style={{ cursor: "pointer" }}>Disclaimer</span>
                </div>
            </div>
        </footer>
    );
}
