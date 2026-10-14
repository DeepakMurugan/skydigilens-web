import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import heroVideo from "@/assets/doc11.mp4";
import heroPoster from "@/assets/hero-drone.jpg";
import type { ReactNode } from "react";

interface HeroSectionProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  video?: string;
}

const HeroSection = ({ title, subtitle, video = heroVideo }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPoster}
          aria-hidden="true"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-950/10" />

        {/* Smooth gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/1 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-4 sm:px-6 lg:px-8 pt-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 text-white border border-white px-4 py-1 rounded-full text-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] animate-pulse" />
            DGCA-licensed pilots · Hyderabad · Telangana · Andhra Pradesh
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          {title || <>Aerial drone services for{" "}
          <span className="text-[#0284C7]">
            projects that move you forward.
          </span></>}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white text-base sm:text-lg max-w-2xl mx-auto mb-10"
        >
          {subtitle || <>Construction progress monitoring, thermal and visual solar inspections, drone surveys, real estate aerials and cinematic event coverage. Based in Hyderabad, serving projects across Telangana and Andhra Pradesh with flight planning shaped around each site and applicable approvals.</>}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <a
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0284C7] px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Plan Your Mission
            <ArrowRight size={18} />
          </a>

          <a
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/50 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10"
          >
            <Compass size={18} />
            Explore drone services
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;