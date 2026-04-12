"use client";
import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Hank Bockus",
    title: "President at Bockus Consulting",
    logo: "/testimonials/logo-bockus.png",
    photo: "/testimonials/photo-hank.png",
    quote: "After working unsuccessfully with other business development agencies, Davro flipped my LinkedIn strategy on its head. Their unique approach to LinkedIn has been beyond effective for building a pipeline of qualified leads."
  },
  {
    name: "Jason Downie",
    title: "CEO, US at Making Science",
    logo: "/testimonials/logo-makingscience.png",
    photo: "/testimonials/photo-jason.png",
    quote: "Davro has been great to work with. The team is very competent and professional, but most importantly, they've driven real revenue results in a short amount of time. Already more than paying their freight."
  },
  {
    name: "Jonathan Adly",
    title: "Founder & CEO at TJM Labs",
    logo: "/testimonials/logo-tjmlabs.avif",
    photo: "/testimonials/photo-jonathan.png",
    quote: "I already knew LinkedIn worked, I just needed professionals to run it consistently. Everything with Davro felt like a green flag. They're extremely organized, and the process just works."
  },
  {
    name: "Joya Dass",
    title: "Founder at Women's Leadership Lab",
    logo: "/testimonials/logo-wll.png",
    photo: "/testimonials/photo-joya.png",
    quote: "Over the past 30 days, I've sold out 4 of my events with leads directly attributed to Davro via LinkedIn. I have even had to expand the number of spots at some events to make space for new leads coming in!"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding" style={{ width: "100%", backgroundColor: "#ffffff", borderTop: "1px solid #f1f5f9", position: "relative", overflow: "hidden" }}>
      {/* Background patterns */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent 0%, #e2e8f0 50%, transparent 100%)" }} />
      
      <div className="section-inner">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ display: "inline-block", backgroundColor: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "100px", padding: "6px 14px", marginBottom: "20px" }}>
            <span style={{ fontSize: "12px", fontWeight: 800, color: "#16a34a", letterSpacing: "0.05em", textTransform: "uppercase" }}>Testimonials</span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 900,
            color: "#0f172a",
            letterSpacing: "-0.03em",
            marginBottom: "16px",
            lineHeight: 1.1
          }}>
            What Our Clients Are <span style={{ color: "#16a34a" }}>Saying</span>
          </h2>
          <p style={{ fontSize: "18px", color: "#64748b", fontWeight: 500, maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
            Real impact across industries, from B2B consulting to high-growth SaaS.
          </p>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", 
          gap: "24px",
          width: "100%"
        }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "24px",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "all 0.3s ease",
              position: "relative",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02), 0 2px 4px -2px rgba(0,0,0,0.02)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0,0,0,0.05), 0 8px 10px -6px rgba(0,0,0,0.03)";
              e.currentTarget.style.borderColor = "#16a34a33";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0,0,0,0.02), 0 2px 4px -2px rgba(0,0,0,0.02)";
              e.currentTarget.style.borderColor = "#e2e8f0";
            }}
            >
              <div>
                <div style={{ marginBottom: "32px", height: "40px", position: "relative" }}>
                  <img 
                    src={t.logo} 
                    alt="Company Logo" 
                    style={{ height: "100%", width: "auto", objectFit: "contain" }}
                  />
                </div>
                <p style={{
                  fontSize: "17px",
                  color: "#334155",
                  lineHeight: 1.7,
                  fontWeight: 500,
                  marginBottom: "32px",
                  fontStyle: "italic"
                }}>
                  "{t.quote}"
                </p>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ 
                  width: "56px", 
                  height: "56px", 
                  borderRadius: "50%", 
                  overflow: "hidden",
                  border: "2px solid #f1f5f9"
                }}>
                  <img 
                    src={t.photo} 
                    alt={t.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#0f172a", margin: 0 }}>{t.name}</h4>
                  <p style={{ fontSize: "13px", fontWeight: 600, color: "#64748b", margin: 0 }}>{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
