"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
    {
        question: "How is this different from AI content tools or ChatGPT?",
        answer: "AI tools generate generic content from generic prompts. We start with deep research into your market, your buyers, and your competitors before writing a single word. Every piece of content is strategically structured to attract a specific type of buyer and move them toward a conversation. AI tools give you volume. We give you a pipeline.",
    },
    {
        question: "What kind of results can I expect and when?",
        answer: "Most clients start seeing engagement and inbound interest within the first 30 days. Qualified meetings typically start coming in between weeks 4 and 8 as the content compounds and the lead magnet starts capturing prospects. By month 3 you should have a repeatable flow of 8 to 15 qualified meetings per month. This is a compounding system, not an overnight hack.",
    },
    {
        question: "Do you understand my specific industry?",
        answer: "That is exactly why we start with a deep business and market audit. We don't use a one size fits all playbook. We research your niche, your competitors, your buyers, and the content that is already performing in your space. Whether you run a software dev shop, a recruitment agency, or a CAD services firm, we build a strategy around your specific market.",
    },
    {
        question: "I've tried LinkedIn before and it didn't work. Why would this be different?",
        answer: "Most founders post randomly with no strategy, no research, and no system for converting attention into meetings. That is content for content's sake. We build a distribution funnel. That means every post has a purpose, there's a lead magnet capturing intent, and there's a system in place to turn engagement into booked calls. Structure is the difference between posting and pipeline building.",
    },
    {
        question: "How long before I see client meetings coming in?",
        answer: "Most clients see their first qualified inbound meetings within 4 to 8 weeks of launch. The timeline depends on your niche, how active your current audience is, and how compelling your offer is. We optimize aggressively in the first month so the pipeline builds fast and compounds from there.",
    },
    {
        question: "What makes your content different from generic ghostwriting?",
        answer: "Generic ghostwriting services hand you recycled frameworks and AI generated filler. We do proper customer research, study what's working in your specific niche, and write content that speaks directly to your buyer's pain points. Every post is designed to attract the right person and move them closer to hiring you. That is the difference between content that gets likes from other marketers and content that gets you client meetings.",
    },
    {
        question: "Is there a long term contract or lock in?",
        answer: "No. We work on a monthly retainer because we believe the results should be the reason you stay, not a contract clause. If we are not generating qualified meetings for you, you should leave. We keep clients by delivering, not by locking them in.",
    },
    {
        question: "How do you measure success?",
        answer: "We measure what matters: leads captured, conversations started, and qualified meetings booked. Not impressions, not follower count, not engagement rate. We track every lead back to the content that generated it so you know exactly what is driving revenue and what we need to scale.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section id="faqs" className="section-padding" style={{ width: "100%", backgroundColor: "#ffffff", borderTop: "1px solid #f3f4f6" }}>
            <div className="section-inner faq-grid">

                {/* Left: Heading */}
                <div className="faq-sidebar">
                    <h2 style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "clamp(36px, 4vw, 56px)",
                        fontWeight: 900,
                        color: "#0f172a",
                        lineHeight: 1.1,
                        letterSpacing: "-0.03em",
                        margin: 0,
                    }}>
                        Frequently<br />Asked<br />Questions
                    </h2>
                    <div style={{ width: "48px", height: "3.5px", backgroundColor: "#16a34a", borderRadius: "100px", marginTop: "24px" }} />
                </div>

                {/* Right: Accordion */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                style={{
                                    borderRadius: "16px",
                                    border: `1px solid ${isOpen ? "rgba(34,197,94,0.3)" : "#e2e8f0"}`,
                                    marginBottom: "12px",
                                    backgroundColor: isOpen ? "rgba(34,197,94,0.04)" : "#f8fafc",
                                    overflow: "hidden",
                                    transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                                }}
                            >
                                {/* Question row */}
                                <button
                                    onClick={() => toggle(idx)}
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "24px 32px",
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        gap: "16px",
                                    }}
                                >
                                    <span style={{
                                        fontSize: "17px",
                                        fontWeight: 700,
                                        color: isOpen ? "#16a34a" : "#0f172a",
                                        lineHeight: 1.4,
                                        flex: 1,
                                    }}>
                                        {faq.question}
                                    </span>
                                    <div style={{
                                        width: "28px", height: "28px", 
                                        borderRadius: "50%",
                                        backgroundColor: isOpen ? "rgba(34,197,94,0.1)" : "rgba(100,116,139,0.05)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        transition: "all 0.25s ease"
                                    }}>
                                        <ChevronRight
                                            style={{
                                                width: "18px", height: "18px",
                                                color: isOpen ? "#16a34a" : "#64748b",
                                                transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                                                transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                                            }}
                                        />
                                    </div>
                                </button>

                                {/* Answer: shown when open */}
                                <div style={{ 
                                    maxHeight: isOpen ? "500px" : "0",
                                    opacity: isOpen ? 1 : 0,
                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                    overflow: "hidden"
                                }}>
                                    <div className="mobile-card-padding" style={{ padding: "0 32px 28px 32px" }}>
                                        <p style={{
                                            fontSize: "15.5px",
                                            fontWeight: 500,
                                            color: "#475569",
                                            lineHeight: 1.75,
                                            margin: 0,
                                        }}>
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
