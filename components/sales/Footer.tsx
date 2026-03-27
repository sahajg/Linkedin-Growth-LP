import React from "react";

export function Footer() {
    return (
        <footer style={{ width: "100%", backgroundColor: "#050a17", borderTop: "1px solid #1e2a42", padding: "48px 0" }}>
            <div className="section-inner" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "20px", fontWeight: 900, letterSpacing: "-0.04em", color: "#ffffff" }}>
                    DAVRO
                </span>
                <p style={{ fontSize: "14px", color: "#64748B", fontWeight: 500, margin: 0 }}>
                    &copy; {new Date().getFullYear()} DAVRO AI. All rights reserved.
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
