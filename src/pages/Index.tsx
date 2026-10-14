import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import LeadFormSection from "@/components/LeadFormSection";
import FaqSection from "@/components/FaqSection";
import FinalCTA from "@/components/FinalCTA";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import EquipmentSection from "@/components/EquipmentSection";
import PricingSection from "@/components/PricingSection";
import CommercialApprovalsSection from "@/components/CommercialApprovalsSection";
import MissionScrollSection from "@/components/MissionScrollSection";


const Index = () => {
  useEffect(() => {
    // Add Canonical Tag
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = window.location.origin + '/';
    document.head.appendChild(canonicalLink);

    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": window.location.origin + "/#business",
      name: "SkyDigiLens",
      description: "Hyderabad-based aerial drone services for residential construction progress monitoring, thermal and visual solar panel inspections, drone survey and mapping, real estate aerials, event cinematography and commercial flight planning across Telangana and Andhra Pradesh.",
      url: window.location.origin + "/",
      currenciesAccepted: "INR",
      image: [
        window.location.origin + "/skydigilens-logo.jpeg"
      ],
      logo: window.location.origin + "/skydigilens-logo.jpeg",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN"
      },
      areaServed: [
        { "@type": "City", name: "Hyderabad" },
        { "@type": "City", name: "Warangal" },
        { "@type": "City", name: "Vijayawada" },
        { "@type": "City", name: "Nizamabad" },
        { "@type": "State", name: "Telangana" },
        { "@type": "State", name: "Andhra Pradesh" }
      ],
      knowsAbout: [
        "Professional Drone Survey",
        "Solar Panel Drone Inspection",
        "Construction Progress Monitoring",
        "Wedding Drone Photography",
        "Live Drone Streaming",
        "Commercial Drone Flight Compliance",
        "Power Utility Inspection",
        "Aerial Event Cinematography"
      ],
    });
    document.head.appendChild(schemaScript);

    return () => {
      if (schemaScript.parentNode) {
        schemaScript.parentNode.removeChild(schemaScript);
      }
      // Clean up canonical link
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink?.parentNode) {
        canonicalLink.parentNode.removeChild(canonicalLink);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <MissionScrollSection />
      <ServicesSection />
      <CommercialApprovalsSection />
      <VideoShowcaseSection />

      <EquipmentSection />
      <PricingSection />

      <ProcessSection />
      {/* <ProjectsSection /> */}
      {/* <BeforeAfterSection /> */}
      <WhyChooseSection />
     
      <LeadFormSection />
      <FaqSection />
      <FinalCTA />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
