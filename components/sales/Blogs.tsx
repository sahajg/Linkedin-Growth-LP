"use client";
import React, { useState } from "react";
import { ArrowRight, Twitter, Linkedin, Check, ChevronLeft, ChevronRight } from "lucide-react";

const caseStudies = [
    {
        category: "B2B SaaS",
        name: "Adam Robinson (RB2B)",
        title: "RB2B: The LinkedIn Distribution Engine",
        metrics: [{ type: "linkedin", label: "LinkedIn: ~150k+" }],
        content: (
            <>
                <p>When it was time to launch, he had no ad budget allocated, no sales team, and no outbound motion. What he had was a LinkedIn audience of B2B buyers he had built over two years by posting consistently.</p>
                <p style={{ borderLeft: "4px solid #22c55e", paddingLeft: "16px", color: "#ffffff", fontWeight: 700, margin: "12px 0" }}>
                    By the time RB2B launched, the content had already been pre-selling it for months.
                </p>
                <p>The result was immediate. Over 3,000 people signed up in the first month, pulled entirely from his LinkedIn audience. No paid acquisition. No cold outreach. <span style={{ color: "#22c55e", fontWeight: 800 }}>RB2B crossed $1M ARR in 16 weeks. Within 12 months it hit $5M ARR.</span></p>
            </>
        ),
        glow: "$5M"
    },
    {
        category: "B2B Consulting",
        name: "Justin Welsh",
        title: "The $10M Diversification-Free System",
        metrics: [
            { type: "linkedin", label: "LinkedIn: ~520k" },
            { type: "twitter", label: "Twitter/X: ~570k" }
        ],
        content: (
            <>
                <p>He posted consistently. He did not diversify into other platforms. He did not run ads. He did not do cold outreach.</p>
                <p style={{ borderLeft: "4px solid #22c55e", paddingLeft: "16px", color: "#ffffff", fontWeight: 700, margin: "12px 0" }}>
                    Within 12 weeks, his pipeline was full enough to see a clear path to $350K for the year.
                </p>
                <p>He closed $534K in year one every client inbound. <span style={{ color: "#22c55e", fontWeight: 800 }}>The same system scaled to over $10M in total revenue over the following five years, at roughly 89% profit margin.</span></p>
            </>
        ),
        glow: "89%"
    },
    {
        category: "HR / Recruiting",
        name: "Executive Search Firm",
        title: "From 'Commodity Vendor' to Market Intelligence",
        metrics: [],
        content: (
            <>
                <p>This is a mid-sized executive search firm that was facing a specific problem: they had become a commodity. Clients treated them as interchangeable with every other recruiter on the platform.</p>
                <p style={{ borderLeft: "4px solid #22c55e", paddingLeft: "16px", color: "#ffffff", fontWeight: 700, margin: "12px 0" }}>
                    They shifted their approach entirely. Instead of pitching, they started publishing content on LinkedIn.
                </p>
                <p>The content changed how the firm was perceived. <span style={{ color: "#22c55e", fontWeight: 800 }}>The result was a 200% increase in inbound inquiries</span> from hiring managers who came to them after consuming the content, not from any outbound effort.</p>
            </>
        ),
        glow: "200%"
    },
    {
        category: "Strategy Consulting",
        name: "Gaetano DiNardi",
        title: "The High-Ticket Strategy Advisory Funnel",
        metrics: [
            { type: "linkedin", label: "LinkedIn: ~50k" },
            { type: "twitter", label: "Twitter/X: ~7k" }
        ],
        content: (
            <>
                <p>Gaetano DiNardi runs a B2B growth advisory practice, working with mid-market and enterprise SaaS companies on demand generation and revenue strategy.</p>
                <p style={{ borderLeft: "4px solid #22c55e", paddingLeft: "16px", color: "#ffffff", fontWeight: 700, margin: "12px 0" }}>
                    He built his entire client pipeline through LinkedIn. Two posts a week. No SEO investment. No outbound. No paid ads.
                </p>
                <p>Every client in his pipeline came from LinkedIn. <span style={{ color: "#22c55e", fontWeight: 800 }}>The content positioned him as a credible, opinionated voice</span> in B2B revenue strategy.</p>
            </>
        ),
        glow: "100%"
    },
    {
        category: "B2B Consultancy",
        name: "April Dunford",
        title: "Establishing Authority Through Positioning",
        metrics: [{ type: "linkedin", label: "LinkedIn: ~70k" }],
        content: (
            <>
                <p>April Dunford runs Ambient Strategy (Consulting) a positioning consultancy company that works with saas companies. April built authority in positioning strategy by publishing detailed frameworks and breakdowns of product messaging failures. Instead of promoting services directly, she educated founders on how positioning errors destroyed growth. As awareness increased, inbound demand followed Companies approached her, already convinced of the need.</p>
                <div style={{ backgroundColor: "rgba(34, 197, 94, 0.04)", border: "1px solid rgba(34, 197, 94, 0.15)", borderRadius: "16px", padding: "20px", marginTop: "12px" }}>
                    <h4 style={{ color: "#22c55e", fontSize: "14px", fontWeight: 800, marginBottom: "12px", textTransform: "uppercase" }}>Result</h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                        {[
                            "Consulting pipeline driven primarily through inbound demand",
                            "High-ticket positioning engagements sourced directly from content visibility",
                            "Prospects arrived pre-educated, reducing the need for heavy persuasion during sales conversations",
                            "Established strong authority within the B2B SaaS ecosystem as a recognized expert in positioning strategy"
                        ].map((r, i) => (
                            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#ffffff", fontWeight: 600, fontSize: "14px" }}>
                                <Check size={14} color="#22c55e" strokeWidth={3} /> {r}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        ),
        glow: "100%"
    }
];

export function Blogs() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const next = () => setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) next();
        if (isRightSwipe) prev();
    };

    return (
        <section id="blogs" className="section-padding" style={{ width: "100%", backgroundColor: "#0F1014", borderTop: "1px solid #1f2026" }}>
            <div className="section-inner">
                <div className="blogs-heading-gap" style={{ textAlign: "center", marginBottom: "64px" }}>
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 6vw, 56px)", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                        <span style={{ color: "#22c55e" }}>Blogs</span>
                    </h2>
                </div>
            </div>

            <div
                style={{ position: "relative", width: "100%", overflow: "hidden" }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {/* Carousel Container */}
                <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

                    {/* Desktop Navigation Arrows */}
                    <button className="mobile-nav-hide" onClick={prev} style={{
                        position: "absolute", left: "40px", zIndex: 10,
                        width: "56px", height: "56px", borderRadius: "50%",
                        backgroundColor: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.1)", color: "#ffffff",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        cursor: "pointer", transition: "all 0.2s"
                    }} onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(34, 197, 94, 0.2)")}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)")}>
                        <ChevronLeft size={24} />
                    </button>

                    <button className="mobile-nav-hide" onClick={next} style={{
                        position: "absolute", right: "40px", zIndex: 10,
                        width: "56px", height: "56px", borderRadius: "50%",
                        backgroundColor: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.1)", color: "#ffffff",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        cursor: "pointer", transition: "all 0.2s"
                    }} onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(34, 197, 94, 0.2)")}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)")}>
                        <ChevronRight size={24} />
                    </button>

                    {/* Slides Wrapper */}
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        transition: "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
                        transform: `translateX(calc(50% - ( (var(--card-width) + var(--card-gap)) / 2 + (${activeIndex} * (var(--card-width) + var(--card-gap))) )))`,
                        width: "fit-content",
                    }}>
                        {caseStudies.map((study, idx) => {
                            const isActive = idx === activeIndex;
                            return (
                                <div key={idx} style={{
                                    width: "var(--card-width)",
                                    margin: "0 calc(var(--card-gap) / 2)",
                                    transition: "all 0.8s ease",
                                    opacity: isActive ? 1 : 0.2,
                                    transform: isActive ? "scale(1)" : "scale(0.85)",
                                    filter: isActive ? "none" : "blur(2px)",
                                    flexShrink: 0
                                }}>
                                    <div className="case-study-card case-study-card-inner" style={{
                                        width: "100%",
                                        background: "linear-gradient(135deg, rgba(15, 16, 20, 0.95) 0%, rgba(26, 27, 33, 0.95) 100%)",
                                        border: isActive ? "1px solid rgba(34, 197, 94, 0.5)" : "1px solid rgba(255,255,255,0.05)",
                                        borderRadius: "32px",
                                        boxShadow: isActive ? "0 40px 100px -20px rgba(34, 197, 94, 0.2)" : "none",
                                        minHeight: "550px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        position: "relative",
                                    }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                                            <div style={{ backgroundColor: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.25)", padding: "4px 12px", borderRadius: "6px" }}>
                                                <span style={{ fontSize: "11px", fontWeight: 800, color: "#22c55e", letterSpacing: "0.05em", textTransform: "uppercase" }}>{study.category}</span>
                                            </div>
                                            <span style={{ fontSize: "14px", fontWeight: 700, color: "#22c55e" }}>{study.name}</span>
                                        </div>

                                        <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 900, color: "#ffffff", marginBottom: "16px", lineHeight: 1.2 }}>{study.title}</h3>

                                        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "32px" }}>
                                            {study.metrics.map((m, i) => (
                                                <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                    {m.type === "linkedin"
                                                        ? <Linkedin size={16} color="#22c55e" fill="#22c55e" />
                                                        : <Twitter size={16} color="#22c55e" fill="#22c55e" />
                                                    }
                                                    <span style={{ fontSize: "16px", fontWeight: 700, color: "#22c55e" }}>{m.label}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, fontWeight: 500 }}>
                                            {study.content}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile Navigation Buttons */}
                <div className="blogs-mobile-nav" style={{ display: "none", justifyContent: "center", gap: "16px", marginTop: "24px" }}>
                    <button onClick={prev} style={{
                        width: "48px", height: "48px", borderRadius: "50%",
                        backgroundColor: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.15)", color: "#ffffff",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        cursor: "pointer"
                    }}>
                        <ChevronLeft size={20} />
                    </button>
                    <button onClick={next} style={{
                        width: "48px", height: "48px", borderRadius: "50%",
                        backgroundColor: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.15)", color: "#ffffff",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        cursor: "pointer"
                    }}>
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "40px" }}>
                    {caseStudies.map((_, i) => (
                        <div key={i} onClick={() => setActiveIndex(i)} style={{
                            width: i === activeIndex ? "24px" : "8px",
                            height: "8px",
                            borderRadius: "4px",
                            backgroundColor: i === activeIndex ? "#22c55e" : "rgba(255,255,255,0.2)",
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                        }} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div style={{ textAlign: "center", marginTop: "80px" }}>
                    <a href="#book-call" className="btn-cta" style={{
                        display: "inline-flex",
                        backgroundColor: "#22c55e",
                        color: "#000000",
                        fontSize: "18px",
                        fontWeight: 800,
                        fontFamily: "var(--font-heading)",
                        padding: "16px 48px",
                        borderRadius: "12px",
                        textDecoration: "none",
                        boxShadow: "0 20px 40px -10px rgba(34, 197, 94, 0.3)"
                    }}>
                        Book A Free Call
                    </a>
                </div>
            </div>

            {/* Mobile-specific styles */}
            <style>{`
                @media (max-width: 1024px) {
                    .blogs-mobile-nav {
                        display: flex !important;
                    }
                }
            `}</style>
        </section>
    );
}
