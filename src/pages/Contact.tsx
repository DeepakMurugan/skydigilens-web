import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import LeadFormSection from "@/components/LeadFormSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-drone.jpg";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact SkyDigiLens | Drone Services Hyderabad";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Contact SkyDigiLens to request a quote for drone surveys, solar panel inspections, residential construction monitoring, event photography or commercial flight-planning support in Hyderabad and across Telangana and Andhra Pradesh.",
    );
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    let ownsCanonical = false;
    const previousCanonicalHref = canonical?.href;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
      ownsCanonical = true;
    }
    canonical.href = `${window.location.origin}/contact-us`;
    return () => {
      if (ownsCanonical) canonical?.remove();
      else if (canonical && previousCanonicalHref) canonical.href = previousCanonicalHref;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative flex min-h-[68vh] items-center overflow-hidden bg-slate-950 pt-24 text-white">
          <img
            src={heroImage}
            alt="Drone mission preparation"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-slate-950/65 to-slate-950" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-300/10 px-4 py-2 text-sm text-sky-100">
              <MapPin size={15} /> Serving Telangana & Andhra Pradesh
            </span>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Let’s plan your next{" "}
              <span className="text-sky-300">drone mission.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Tell us the location, purpose and preferred date. We’ll help scope
              the crew, equipment and any applicable flight permissions.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400"
            >
              Start an enquiry <ArrowRight size={18} />
            </a>
          </motion.div>
        </section>
        <section className="relative z-10 mx-auto -mt-8 grid max-w-5xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          <a
            href="mailto:skydigilens@gmail.com"
            className="glass-card flex items-center gap-4 p-5 transition hover:-translate-y-1"
          >
            <Mail className="shrink-0 text-primary" />
            <span>
              <span className="block font-semibold text-foreground">Email</span>
              <span className="text-sm text-muted-foreground">skydigilens@gmail.com</span>
            </span>
          </a>
          <div className="glass-card flex items-center gap-4 p-5">
            <MapPin className="shrink-0 text-primary" />
            <span>
              <span className="block font-semibold text-foreground">Coverage</span>
              <span className="text-sm text-muted-foreground">Hyderabad, Telangana & Andhra Pradesh</span>
            </span>
          </div>
          <div className="glass-card flex items-center gap-4 p-5">
            <ShieldCheck className="shrink-0 text-primary" />
            <span>
              <span className="block font-semibold text-foreground">Commercial flights</span>
              <span className="text-sm text-muted-foreground">Requirements checked before operation</span>
            </span>
          </div>
        </section>
        <LeadFormSection />
      </main>
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
