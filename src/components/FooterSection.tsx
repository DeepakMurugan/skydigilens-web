import logoSky from "@/assets/logosky.png";


const FooterSection = () => {
  return (
    <footer
      className="relative overflow-hidden bg-slate-950 text-slate-300"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 15%, rgba(255,255,255,0.25) 0.5px, transparent 0.5px), radial-gradient(circle at 75% 10%, rgba(255,255,255,0.18) 0.4px, transparent 0.4px), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.12) 0.8px, transparent 0.8px), linear-gradient(180deg, #030817 0%, #071b3e 48%, #08172f 100%)",
        backgroundSize: "200% 200%",
      }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-16 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-5%] top-28 h-48 w-48 rounded-full bg-orange-400/10 blur-3xl" />
        <div className="absolute right-8 top-20 opacity-70 animate-[float_6s_ease-in-out_infinite]">
          {/* <img
            src={droneTech}
            alt="Floating drone"
            className="h-24 w-24 rounded-full border border-white/10 object-cover shadow-[0_0_40px_rgba(56,189,248,0.15)]"
            width={96}
            height={96}
          /> */}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-6">
            
            <div className="flex items-center">
              <a href="/" className="inline-flex" aria-label="SkyDigiLens home">
                <img
                 src={logoSky}
      alt="SkyDigiLens - Professional Drone Services"
      width={240}
      height={96}
      loading="lazy"
      decoding="async"
      className="block h-auto w-40 object-contain sm:w-48 md:w-56"
                
                
                
                />
              </a>
            </div>

            <p className="max-w-lg text-sm leading-relaxed text-slate-400">
              Professional aerial services for surveys, construction monitoring, solar inspections and cinematic productions across Telangana and Andhra Pradesh.
            </p>
            <a href="mailto:hello@skydigilens.in" className="text-sm text-slate-300 transition hover:text-sky-300">
              hello@skydigilens.in
            </a>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 mb-4">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a href="/services" className="hover:text-white transition">
                  All Services
                </a>
              </li>
              <li>
                <a href="/solar-panel-drone-inspection" className="hover:text-white transition">
                  Solar Inspection
                </a>
              </li>
              <li>
                <a href="/drone-construction-monitoring" className="hover:text-white transition">
                  Construction Monitoring
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-white transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a href="/live-streaming-drone-service" className="hover:text-white transition">
                  Live Streaming
                </a>
              </li>
              <li>
                <a href="/real-estate-drone-service" className="hover:text-white transition">
                  Real Estate Aerial
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition">
                  Full Service List
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 mb-4">
              Locations
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {["Hyderabad", "Warangal", "Vijayawada", "Nizamabad"].map((city) => (
                <li key={city}>
                  <a href="/services" className="hover:text-white transition">{city}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} SkyDigiLens. All rights reserved.</p>
            <p className="text-slate-500">Professional drone services. Flights subject to required approvals.</p>
          </div>
          <a
            href="https://dtechgrow.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website developed by DTech Grow"
            className="inline-flex w-fit max-w-full items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-center text-xs text-slate-400 transition hover:border-orange-400/50 hover:text-white sm:text-sm"
          >
            <span>Website developed by</span>
            <span className="font-semibold text-orange-300">DTech Grow</span>
            <span aria-hidden="true" className="text-orange-300">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;