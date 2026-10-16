import { motion } from "framer-motion";

import matice4e from "@/assets/eq5.jpeg";
import mavic4pro from "@/assets/d2.jpeg";
import mavic3pro from "@/assets/eq2.jpeg";
import air3 from "@/assets/eq4.png";
import remote from "@/assets/eq3.jpeg";
import air2s from "@/assets/eq1.jpeg";

const equipment = [
  {
    img: matice4e,
    title: "DJI Matrice 4E",
    desc: "Enterprise drone platform selected for suitable aerial survey, inspection and mapping missions.",
  },
  {
    img: mavic4pro,
    title: "DJI Mavic 4 Pro",
    desc: "Professional camera drone used for detailed aerial photography and cinematic property imagery.",
  },
  {
    img: air3,
    title: "DJI Air 3S",
    desc: "A flexible dual-camera drone platform for cinematic aerial footage and event coverage.",
  },
  {
    img: remote,
    title: "DJI Avata 360",
    desc: "FPV drone platform for creative aerial sequences when the location and flight plan allow.",
  },
  {
    img: air2s,
    title: "Custom FPV with GoPros",
    desc: "Custom FPV drones with GoPro cameras for agile cinematic sequences, subject to safe operating conditions.",
  },
  {
    img: mavic3pro,
    title: "Sony FX3A Camera",
    desc: "Professional ground-camera coverage to complement aerial cinematography and event production.",
  },
];

const EquipmentSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-black overflow-hidden">

      {/* 🔵 Blue Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0284C7]/10 via-transparent to-[#0284C7]/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 text-xs rounded-full border border-[#0284C7]/30 text-[#0284C7] bg-[#0284C7]/10 mb-4">
            SkyDigiLens drone fleet
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4">
            Professional Aerial{" "}
            <span className="text-[#0284C7]">Drone Equipment</span>
          </h2>

          <p className="text-white/60 text-sm sm:text-base">
            DJI Matrice 4E, DJI Mavic 4 Pro, DJI Air 3S, DJI Avata 360, custom FPV drones with GoPros, and Sony FX3A ground camera coverage.
          </p>
        </motion.div>

        {/* 🚀 Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {equipment.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#0284C7]/40 transition duration-500"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={`${item.title} used for SkyDigiLens drone services`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[180px] sm:h-[200px] lg:h-[220px] object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">

                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#0284C7] transition">
                  {item.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-[#0284C7]/10 via-transparent to-transparent transition duration-500" />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default EquipmentSection;