import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, ChevronDown, ArrowUpRight, Plane } from "lucide-react";
import logoSky from "@/assets/logosky.png";



// 1. IMPORT BOTH IMAGES HERE 👇
const locationLinks = [
  { label: "Hyderabad", href: "/services", desc: "Commercial operations & approvals" },
  { label: "Warangal", href: "/services", desc: "Survey, construction & events" },
  { label: "Vijayawada", href: "/services", desc: "Aerial services across the city" },
  { label: "Nizamabad", href: "/services", desc: "Survey, inspection & production" },
];

const serviceLinks = [
  {
    label: "Solar Inspection",
    href: "/solar-panel-drone-inspection",
    desc: "Thermal & visual solar inspections",
  },
  {
    label: "Construction Monitoring",
    href: "/drone-construction-monitoring",
    desc: "Aerial progress tracking",
  },
  {
    label: "Live Streaming",
    href: "/live-streaming-drone-service",
    desc: "Live aerial event coverage",
  },
  {
    label: "Real Estate Aerial",
    href: "/real-estate-drone-service",
    desc: "Property photography & video",
  },
  {
    label: "Professional Drone Survey",
    href: "/services#mapping",
    desc: "Survey and mapping services",
  },
  {
    label: "Wedding & Event Photography",
    href: "/services#event-photography",
    desc: "Aerial event cinematography",
  },
  // {
  //   label: "Power Utility Inspection",
  //   href: "/services#power-utility-inspection",
  //   desc: "Pole and line visual inspections",
  // },
  {
    label: "Luxury & FPV Drone Service",
    href: "/services#promotional",
    desc: "Custom FPV and creative aerials",
  },
  {
    label: "Commercial Drone Approvals",
    href: "/services#commercial-drone-approvals",
    desc: "Digital Sky & NOC support",
  },
  {
    label: "Full Service List",
    href: "/services",
    desc: "Explore all SkyDigiLens services",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  /* Scroll Detect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Outside Click */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLocationsOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* LOGO */}
          <a href="/" className="flex shrink-0 items-center" aria-label="SkyDigiLens home">
            <img
           src={logoSky}
      alt="SkyDigiLens - Professional Drone Services"
      width={240}
      height={96}
      loading="lazy"
      decoding="async"
      // className="block h-auto w-40 object-contain sm:w-48 md:w-56"
                
              className="h-10 w-[120px] object-contain sm:h-12 sm:w-[150px] lg:h-14 lg:w-[190px]"
            />
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide leading-none transition-colors duration-300 ${
                  scrolled
                    ? "text-black hover:text-[#0284C7]"
                    : "text-white hover:text-[#00A3FF]"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              ref={servicesDropdownRef}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className={`flex items-center gap-2 text-sm font-semibold tracking-wide transition-colors duration-300 ${
                  scrolled
                    ? "text-black hover:text-[#0284C7]"
                    : "text-white hover:text-[#00A3FF]"
                }`}
              >
                <Plane size={16} className="text-[#0284C7]" />
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 pt-3">
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="max-h-[70vh] overflow-y-auto overscroll-contain rounded-2xl border border-white/10 bg-slate-950/95 p-2 text-white shadow-2xl shadow-slate-950/30 backdrop-blur-xl"
                    >
                    <div className="mb-1 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-sky-300/80">
                      Aerial services
                    </div>
                    <div className="grid gap-1">
                      {serviceLinks.map((service) => (
                        <a
                          key={service.label}
                          href={service.href}
                          onClick={() => setServicesOpen(false)}
                          className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 transition hover:bg-sky-400/10"
                        >
                          <span>
                            <span className="block text-sm font-semibold text-white group-hover:text-sky-200">
                              {service.label}
                            </span>
                            <span className="mt-0.5 block text-xs text-white/50">
                              {service.desc}
                            </span>
                          </span>
                          <ArrowUpRight
                            size={15}
                            className="shrink-0 text-white/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-300"
                          />
                        </a>
                      ))}
                    </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* LOCATIONS DROPDOWN */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button
                onClick={() => setLocationsOpen(!locationsOpen)}
                onMouseEnter={() => setLocationsOpen(true)}
                className={`flex items-center gap-2 text-sm font-semibold tracking-wide transition-colors duration-300 ${
                  scrolled
                    ? "text-black hover:text-[#0284C7]"
                    : "text-white hover:text-[#00A3FF]"
                }`}
              >
                <MapPin size={16} className="text-[#0284C7]" />
                Locations We Cover
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    locationsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {locationsOpen && (
                  <div className="absolute left-0 top-full z-50 w-80 pt-3">
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="overflow-hidden rounded-2xl border border-border/50 bg-background/95 shadow-xl backdrop-blur-xl"
                    >
                    <div className="p-1">
                      {locationLinks.map((location, index) => (
                        <motion.a
                          key={location.label}
                          href={location.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#0284C7]/10 transition-colors duration-200 group"
                        >
                          <div className="w-8 h-8 bg-[#0284C7]/20 rounded-lg flex items-center justify-center">
                            <MapPin size={14} className="text-[#0284C7]" />
                          </div>
                          <div>
                            <div className="font-semibold text-[14px] group-hover:text-[#0284C7]">
                              {location.label}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {location.desc}
                            </div>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            <a href="/contact-us" className="btn-primary text-sm py-2.5 px-5">
              Request a Quote
            </a>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden ${scrolled ? "text-black" : "text-white"}`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain bg-background/98 backdrop-blur-xl border-b border-border lg:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-foreground/70 hover:text-foreground font-semibold text-sm leading-tight py-2"
                >
                  {link.label}
                </a>
              ))}

              <div className="border-t border-border/50 pt-4">
                <button
                  type="button"
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex w-full items-center justify-between py-2 text-sm font-semibold text-foreground/80"
                >
                  <span className="flex items-center gap-2">
                    <Plane size={16} className="text-[#0284C7]" />
                    Services
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 space-y-1 overflow-hidden pl-6"
                    >
                      {serviceLinks.map((service) => (
                        <a
                          key={service.label}
                          href={service.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg py-2 text-sm text-foreground/70 transition hover:text-[#0284C7]"
                        >
                          {service.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* MOBILE LOCATIONS */}
              <div className="border-t border-border/50 pt-4">
                <button
                  onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                  className="flex items-center justify-between w-full text-foreground/70 font-semibold text-sm"
                >
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#0284C7]" />
                    Locations
                  </div>

                  <span aria-hidden="true">{mobileLocationsOpen ? "−" : "+"}</span>
                </button>

                <AnimatePresence>
                  {mobileLocationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 space-y-2 pl-6"
                    >
                      {locationLinks.map((location) => (
                        <a
                          key={location.label}
                          href={location.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-sm text-foreground/70 hover:text-[#0284C7]"
                        >
                          {location.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="/contact-us"
                onClick={() => setMobileOpen(false)}
                className="btn-primary block text-center text-sm py-2.5"
              >
                Get Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;