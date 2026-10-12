import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import eventImg from "@/assets/services/a2.jpg";
import liveImg from "@/assets/services/aa3.jpg";
import realestateImg from "@/assets/services/aa1.jpg";
import promoImg from "@/assets/services/p1.jpg";
import inspectionImg from "@/assets/services/i2.jpg";
import surveyImg from "@/assets/services/r1.jpg";
import constructionImg from "@/assets/project-construction.jpg";
import solarImg from "@/assets/project-industrial.jpg";

const services = [
  {
    title: "Aerial Event & Wedding Photography",
    desc: "Aerial wedding photography and cinematic event video in Hyderabad, planned around your venue, shot list and applicable flight permissions.",
    img: eventImg,
    link: "/services#event-photography",
    id: "event-photography",
  },
  {
    title: "Live Drone Streaming",
    desc: "Add a live aerial perspective to suitable events and productions across Hyderabad, with the broadcast workflow scoped to your venue and connectivity.",
    img: liveImg,
    link: "/live-streaming-drone-service",
    id: "live-streaming",
  },
  {
    title: "Real Estate Drone Photography",
    desc: "Showcase residential towers, plots and commercial properties with professional aerial photos and video across Telangana and Andhra Pradesh.",
    img: realestateImg,
    link: "/real-estate-drone-service",
    id: "real-estate",
  },
  {
    title: "FPV & Aerial Cinematography",
    desc: "Create distinctive FPV and cinematic aerial footage for luxury events, Telugu folk-song productions and brand films in Hyderabad.",
    img: promoImg,
    link: "/services#promotional",
    id: "promotional",
  },
  {
    title: "Solar Panel Drone Inspection",
    desc: "Thermal and visual aerial inspections for solar installations across Telangana and Andhra Pradesh, scoped to your assets and inspection objectives.",
    img: inspectionImg,
    link: "/solar-panel-drone-inspection",
    id: "inspection",
  },
  {
    title: "Drone Survey & Mapping",
    desc: "Plan aerial survey and mapping capture for land, construction and infrastructure projects in Hyderabad and the surrounding region.",
    img: surveyImg,
    link: "/services#mapping",
    id: "mapping",
  },
  {
    title: "Construction Progress Monitoring",
    desc: "Document residential tower construction with repeatable aerial progress captures aligned to your site schedule and project milestones.",
    img: constructionImg,
    link: "/drone-construction-monitoring",
    id: "construction-monitoring",
  },
  {
    title: "Power Utility Pole & Line Inspection",
    desc: "Aerial visual inspections of utility poles and lines to help teams document assets and identify visible issues.",
    img: solarImg,
    link: "/services#power-utility-inspection",
    id: "power-utility-inspection",
  },
  {
    title: "Commercial Drone Approvals",
    desc: "Flight planning and documentation support for Digital Sky permissions and required NOCs in Hyderabad.",
    img: surveyImg,
    link: "/contact-us",
    id: "commercial-drone-approvals",
  },
  {
    title: "Wedding Photography & Luxury Drone Services",
    desc: "Coordinate aerial photography for weddings, luxury celebrations and Telugu events, subject to venue conditions and required approvals.",
    img: eventImg,
    link: "/services#event-photography",
    id: "luxury-drone-services",
  },
];

// ✅ Premium Service Card
interface Service {
  title: string;
  desc: string;
  img: string;
  link: string;
  id: string;
}

const ServiceCard = ({ service, index }: { service: Service; index: number }) => (
  <Link to={service.link} className="group relative rounded-3xl overflow-hidden cursor-pointer block">
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full cursor-pointer overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-950 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-950/15"
    >
      {/* IMAGE */}
      <div className="relative h-[280px] overflow-hidden sm:h-[320px]">
        <img
          src={service.img}
          alt={`${service.title} by SkyDigiLens`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-slate-950/10 transition duration-300 group-hover:bg-slate-950/0" />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent" />

        {/* CONTENT */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-sky-200 sm:text-xl">
            {service.title}
          </h3>

          <p className="mb-5 text-sm leading-relaxed text-white/70">
            {service.desc}
          </p>

          <span className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition-all group-hover:gap-3">
            Explore our service <ArrowRight size={16} />
          </span>
        </div>
      </div>

      {/* BORDER GLOW */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/15 transition duration-300 group-hover:ring-sky-300/70" />
    </motion.div>
  </Link>
);

// ✅ Main Section
const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Professional Drone Services",
            "name": "SkyDigiLens Aerial Drone Services",
            "description": "Hyderabad drone services for construction progress monitoring, thermal and visual solar panel inspection, aerial survey, real estate photography, live streaming, weddings, events and flight-planning support across Telangana and Andhra Pradesh.",
            "provider": {
              "@id": `${window.location.origin}/#business`
            },
            "areaServed": [
              { "@type": "City", "name": "Hyderabad" },
              { "@type": "City", "name": "Warangal" },
              { "@type": "City", "name": "Vijayawada" },
              { "@type": "City", "name": "Nizamabad" },
              { "@type": "State", "name": "Telangana" },
              { "@type": "State", "name": "Andhra Pradesh" }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Drone Service Packages",
              "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Wedding Drone Photography"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "HD Live Drone Streaming"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Real Estate Aerial Shoot"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Drone Land Survey & Mapping"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Power Utility Pole and Line Inspection"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Construction Progress Monitoring"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Solar Panel Drone Inspection"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Commercial Drone Approvals"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "FPV Aerial Cinematography"}}
              ]
            }
          })
        }}
      />

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(14,165,233,0.11),_transparent_45%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔥 HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-700 shadow-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-500" />
            Drone capabilities
          </span>

          <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
           One crew. Multiple perspectives.{" "}
            <span className="text-sky-600">
            Across Hyderabad, Telangana & Andhra Pradesh
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            From professional surveys and utility inspections to weddings and live broadcasts, one experienced aerial team for projects across Hyderabad, Warangal, Vijayawada, Nizamabad and beyond.
          </p>
        </motion.div>

        {/* 🏢 SERVICES GRID */}
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>




       



      </div>
    </section>
  );
};

export default ServicesSection;