"use client";
import { TrendingUp, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "Why Us", href: "/#why-us" },
    { label: "Case Studies", href: "/#case-studies" },
    { label: "Process", href: "/#process" },
    { label: "Blogs", href: "/#blogs" },
    { label: "FAQs", href: "/#faqs" },
];

export function TopBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
                height: "68px",
                backgroundColor: "rgba(5,10,23,0.95)",
                backdropFilter: "blur(16px)",
                borderBottom: "1px solid #1e2a42",
                display: "flex", alignItems: "center",
            }}>
                <div className="section-inner" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>

                    {/* Left: Logo */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
                        <div style={{ 
                            width: "36px", 
                            height: "36px", 
                            borderRadius: "10px", 
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(34, 197, 94, 0.1)",
                            border: "1px solid rgba(34, 197, 94, 0.2)"
                        }}>
                            <img 
                                src="/logo.png" 
                                alt="Davro Logo" 
                                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                            />
                        </div>
                        <span style={{ fontSize: "22px", fontWeight: 900, letterSpacing: "-0.04em", color: "#ffffff", fontFamily: "var(--font-heading)" }}>
                            Davro
                        </span>
                    </div>

                    {/* Centre: Nav links (Hidden on mobile) */}
                    <nav className="desktop-nav" style={{ 
                        display: "flex", alignItems: "center", gap: "2px", 
                        position: "absolute", left: "50%", transform: "translateX(-50%)" 
                    }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                style={{
                                    fontSize: "14px", fontWeight: 600,
                                    color: "rgba(255,255,255,0.55)",
                                    textDecoration: "none",
                                    padding: "6px 18px",
                                    borderRadius: "8px",
                                    transition: "all 0.15s ease",
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right: CTA + Hamburger */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <a href="#book-call" className="btn-cta header-cta" style={{
                            flexShrink: 0,
                            backgroundColor: "#22c55e", color: "#000000",
                            fontSize: "14px", fontWeight: 800,
                            fontFamily: "var(--font-heading)",
                            padding: "10px 22px", borderRadius: "8px", border: "none",
                            letterSpacing: "-0.01em", cursor: "pointer",
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            Book A Free Call
                        </a>
                        
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="mobile-toggle"
                            style={{
                                color: "#ffffff",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: "8px",
                                display: "none"
                            }}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div style={{
                    position: "fixed", top: "68px", left: 0, right: 0, bottom: 0,
                    backgroundColor: "rgba(5,10,23,0.98)", backdropFilter: "blur(20px)",
                    zIndex: 90, padding: "40px 24px", display: "flex", flexDirection: "column", gap: "8px"
                }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                fontSize: "24px", fontWeight: 700,
                                color: "#ffffff",
                                textDecoration: "none",
                                padding: "16px",
                                borderBottom: "1px solid rgba(255,255,255,0.05)"
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a 
                        href="#book-call" 
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                            marginTop: "20px",
                            padding: "20px",
                            backgroundColor: "#22c55e",
                            color: "#000000",
                            borderRadius: "12px",
                            textAlign: "center",
                            fontWeight: 900,
                            textDecoration: "none"
                        }}
                    >
                        Book A Free Call
                    </a>
                </div>
            )}
        </>
    );
}
