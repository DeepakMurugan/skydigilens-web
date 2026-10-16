import { motion } from "framer-motion";
import teamPhoto from "@/assets/hero-drone.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 sm:py-18 lg:py-18 bg-white overflow-hidden">
      
      {/* Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0284C7]/5 via-transparent to-[#0284C7]/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔥 Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <span className="inline-block px-4 py-1.5 text-xs sm:text-sm rounded-full border border-[#0284C7]/30 text-[#0284C7] bg-[#0284C7]/5 mb-6">
              Hyderabad Drone Services · Telangana & Andhra Pradesh
            </span>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 leading-tight text-black">
              Drone Services in{" "}
              <span className="text-[#0284C7]">
                Hyderabad, Telangana & Andhra Pradesh
              </span>
            </h2>

            {/* Paragraphs */}
            <p className="text-base sm:text-lg mb-5 text-black">
              SkyDigiLens provides professional drone services for builders, solar asset teams, property marketers and event producers across Telangana and Andhra Pradesh.
            </p>

            <p className="text-black text-base sm:text-lg leading-relaxed mb-5">
              Our services include residential tower construction progress monitoring, thermal and visual solar panel inspections, drone survey, real estate aerial photography, weddings, Telugu folk-song productions and live drone streaming.
            </p>

            <p className="text-black text-base sm:text-lg leading-relaxed mb-8">
              DGCA-licensed and certified pilots support event operations. Every project starts with a clear brief, site review and flight plan; where permissions or NOCs are required, we help coordinate the process before a flight.
            </p>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0284C7]/5 border border-[#0284C7]/10">
                <div className="text-xl sm:text-2xl font-bold text-[#0284C7] mb-1">2018</div>
                <div className="text-xs sm:text-sm text-black/60">Founded in India</div>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0284C7]/5 border border-[#0284C7]/10">
                <div className="text-xl sm:text-2xl font-bold text-[#0284C7] mb-1">500+</div>
                <div className="text-xs sm:text-sm text-black/60">Drone Projects Delivered</div>
              </div>
            </div> */}

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={teamPhoto}
                alt="SkyDigiLens drone prepared for an aerial service mission in Hyderabad"
                className="w-full h-auto object-cover"
              />
            </div>



          </motion.div>

        </div>

        {/* 🔥 VALUES SECTION */}
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Drone survey & mapping",
              desc: "Aerial survey and mapping capture planned for land, construction and infrastructure project requirements.",
            },
            {
              title: "DGCA-licensed  pilots",
              desc: "Certified pilots and pre-flight planning for events, with operations subject to site conditions and required approvals.",
            },
            {
              title: "Aerial & ground production",
              desc: "DJI aircraft, custom FPV drones with GoPros, and Sony FX3A ground camera coverage for varied productions.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-[#0284C7]/5 border border-[#0284C7]/10 hover:bg-[#0284C7]/10 transition duration-300"
            >
              <div className="text-4xl sm:text-5xl font-bold text-[#0284C7]/10 absolute top-4 right-6">
                0{i + 1}
              </div>

              <h3 className="font-semibold text-base sm:text-lg mb-3 text-black">
                {item.title}
              </h3>

              <p className="text-sm text-black/60 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;