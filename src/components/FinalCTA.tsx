import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, ShieldCheck } from "lucide-react";

const FinalCTA = () => (
  <section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-sky-500/15 blur-[100px]" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-sky-950/30 backdrop-blur-xl sm:p-10 lg:p-14"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
        <div>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
            <MapPin size={14} /> Hyderabad · Telangana · Andhra Pradesh
          </span>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Your next project deserves{" "}
            <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
              a better point of view.
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
            Tell us what you need captured and where. We’ll help scope the crew,
            equipment, deliverables and any applicable flight approvals.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} className="text-sky-300" /> Licensed pilots
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-sky-300" /> Regional coverage
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href="/contact-us"
            className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-950/30 transition hover:-translate-y-0.5 hover:bg-sky-400"
          >
            Plan a drone mission <ArrowRight size={18} />
          </a>
          <a
            href="mailto:skydigilens@gmail.com"
            className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 font-semibold text-white/80 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
          >
            <Mail size={17} /> Email the team
          </a>
        </div>
      </div>
    </motion.div>
  </section>
);

export default FinalCTA;
