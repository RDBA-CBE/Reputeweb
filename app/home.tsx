import HeroBanner from "@/components/HeroBanner";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import WhyReputeSection from "@/components/WhyReputeSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import IndustriesSection from "@/components/IndustriesSection";
import BusinessPerspectiveSection from "@/components/BusinessPerspectiveSection";
import ClientsSection from "@/components/ClientsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#fff] ">
      <HeroBanner />
      <StatsSection />
      <AboutSection />
      <WhatWeDoSection />
      <WhyReputeSection />
      <SelectedWorkSection />
      <IndustriesSection />
      <BusinessPerspectiveSection />
      <ClientsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
