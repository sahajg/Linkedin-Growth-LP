import { TopBar } from "@/components/sales/TopBar";

import { Hero } from "@/components/sales/Hero";
import { WhyFunnel } from "@/components/sales/WhyFunnel";
import { WhatIsHighTicket } from "@/components/sales/WhatIsHighTicket";
import { Testimonials } from "@/components/sales/Testimonials";
import { CaseStudiesSection } from "@/components/sales/CaseStudiesSection";
import { OldVsNew } from "@/components/sales/OldVsNew";
import { HowWeWork } from "@/components/sales/HowWeWork";
import { OfferStack } from "@/components/sales/OfferStack";
import { Blogs } from "@/components/sales/Blogs";
import { FAQ } from "@/components/sales/FAQ";
import { Booking } from "@/components/sales/Booking";
import { Footer } from "@/components/sales/Footer";

export default function Home() {
  return (
    <>
      <main style={{ backgroundColor: "#0F1014", minHeight: "100vh" }}>
        <TopBar />
        <Hero />
        <WhyFunnel />
        <WhatIsHighTicket />
        <Testimonials />
        <CaseStudiesSection />
        <OldVsNew />
        <HowWeWork />
        <OfferStack />
        <Blogs />
        <FAQ />
        <Booking />
        <Footer />
      </main>
    </>
  );
}
