import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Shield } from "lucide-react";
// import "..index.css";

function AnimatedCounter({ value, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(value / 100);

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [inView, value]);

  return <span>{count}{suffix}</span>;
}

const TrustSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
<section
  className="relative py-16 sm:py-20 lg:py-20 bg-white text-black overflow-hidden"
  ref={ref}
>
  {/* 🔵 Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0284C7]/5 via-transparent to-[#0284C7]/10" />

  {/* Top Divider */}
  <div className="absolute top-0 left-0 w-full h-px bg-black/10" />

  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* 🔥 Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className="text-center mb-12 sm:mb-16"
    >
      <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
        Aerial Expertise Across{" "}
        <span className="text-[#0284C7]">
          Telangana & Andhra Pradesh
        </span>
      </h2>

      <p className="text-black/60 text-sm sm:text-base lg:text-lg max-w-xl sm:max-w-2xl mx-auto">
        SkyDigiLens brings licensed pilots, a versatile DJI and FPV fleet, and carefully planned aerial services to Hyderabad, Warangal, Vijayawada, Nizamabad and surrounding regions.
      </p>
    </motion.div>

    {/* 📊 Counters */}
    
    
    
   






    {/* 🛡 Badge */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      className="flex justify-center mb-8 sm:mb-10 px-4"
    >
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-3 
        px-4 sm:px-6 py-2 sm:py-3 
        rounded-full border border-[#0284C7]/20 bg-[#0284C7]/5 
        backdrop-blur-md hover:scale-105 transition text-center"
      >
        <Shield className="w-4 h-4 text-[#0284C7]" />

        <span className="font-semibold text-black text-sm sm:text-base">
          DGCA-Licensed Pilots
        </span>

        <span className="text-black/50 text-xs sm:text-sm">
          • Flights subject to required approvals
        </span>
      </div>
    </motion.div>

    {/* ✅ Trust Line */}
    <p className="text-center text-black/50 text-xs sm:text-sm mb-10 sm:mb-12 px-4 leading-relaxed">
      ✔ Commercial · Infrastructure · Events <br className="sm:hidden"/>
      ✔ Survey · Inspection · Cinematic Production
    </p>

  </div>
</section>
  );
};

export default TrustSection;