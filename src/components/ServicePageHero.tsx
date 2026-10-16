import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import heroVideo from "@/assets/doc11.mp4";

interface ServicePageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  primaryLabel: string;
}

const ServicePageHero = ({
  eyebrow,
  title,
  description,
  primaryLabel,
}: ServicePageHeroProps) => (
  <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-slate-950 pt-20 text-white">
    <video
      className="absolute inset-0 -z-20 h-full w-full object-cover"
      src={heroVideo}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/30" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />
    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_45%,_rgba(14,165,233,0.25),_transparent_45%)]" />
    <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

    <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.65fr] lg:px-8 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200/20 bg-white/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-100 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-300" />
          {eyebrow}
        </span>
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
          {description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-950/30 transition hover:-translate-y-0.5 hover:bg-sky-400"
          >
            {primaryLabel} <ArrowRight size={18} />
          </a>
          <a
            href="#service-details"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.05] px-6 py-3 font-semibold text-white/85 backdrop-blur transition hover:border-white/40 hover:bg-white/10"
          >
            Explore capabilities <ArrowDown size={17} />
          </a>
        </div>
        <div className="mt-8 flex items-center gap-2 text-sm text-white/55">
          <MapPin size={15} className="text-sky-300" />
          Hyderabad · Telangana · Andhra Pradesh
        </div>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="hidden rounded-3xl border border-white/10 bg-slate-950/40 p-6 shadow-2xl backdrop-blur-xl lg:block"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
          SkyDigiLens · Field ready
        </p>
        <div className="my-6 h-px bg-white/10" />
        <div className="space-y-5">
          <div>
            <p className="text-sm font-semibold text-white">Licensed pilots</p>
            <p className="mt-1 text-sm leading-6 text-white/55">
              Professional crews matched to your mission and site conditions.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Purpose-selected equipment</p>
            <p className="mt-1 text-sm leading-6 text-white/55">
              DJI, custom FPV and ground camera options for the required view.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Airspace-aware planning</p>
            <p className="mt-1 text-sm leading-6 text-white/55">
              Applicable permissions and NOCs reviewed before a commercial flight.
            </p>
          </div>
        </div>
      </motion.aside>
    </div>
  </section>
);

export default ServicePageHero;
