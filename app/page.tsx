import { TopBar } from "@/components/sales/TopBar";

import { Hero } from "@/components/sales/Hero";
import { WhatIsHighTicket } from "@/components/sales/WhatIsHighTicket";
import { CaseStudyGallery } from "@/components/sales/CaseStudyGallery";
import { OldVsNew } from "@/components/sales/OldVsNew";
import { OfferStack } from "@/components/sales/OfferStack";
import { HowWeWork } from "@/components/sales/HowWeWork";
import { FAQ } from "@/components/sales/FAQ";
import { Booking } from "@/components/sales/Booking";
import { FinalCTA } from "@/components/sales/FinalCTA";
import { Footer } from "@/components/sales/Footer";

export default function Home() {
  return (
    <>
      <main style={{ backgroundColor: "#050a17", minHeight: "100vh" }}>
        <TopBar />
        <Hero />
        <WhatIsHighTicket />
        <CaseStudyGallery />
        <OldVsNew />
        <HowWeWork />
        <OfferStack />
        <FAQ />
        <FinalCTA />
        <Booking />
        <Footer />
      </main>
    </>
  );
}
