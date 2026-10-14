import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import vd1 from "@/assets/vd1.mp4";
import vd0 from "@/assets/doc11.mp4";

import vd2 from "@/assets/vd2.mp4";
import vd3 from "@/assets/vd3.mp4";
import vd4 from "@/assets/va1.mp4";


const videos = [
    {
    src: vd0,
    title: "Aerial Drone Footage",
    location: "SkyDigiLens",
      category: "Aerial",
  },
  {
    src: vd1,
    title: " Drone Footage",
    location: "SkyDigiLens",
    category: "cinematic",
  },
  {
    src: vd2,
    title: "Wedding Drone Footage",
    location: "SkyDigiLens",
    category: "Wedding",
  },
  {
    src: vd3,
    title: "Aerial Drone Footage",
    location: "SkyDigiLens",
    category: "Aerial",
  },
    {
    src: vd4,
    title: "Drone Footage",
    location: "SkyDigiLens",
    category: "Aerial",
  },
];

const categories = ["All", "Wedding", "Cinematic", "Aerial"];

const VideoShowcaseSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVideos = selectedCategory === "All"
    ? videos
    : videos.filter(video => video.category === selectedCategory);

  const next = () => {
    const nextIdx = (activeIdx + 1) % filteredVideos.length;
    setActiveIdx(nextIdx);
  };

  const prev = () => {
    const prevIdx = (activeIdx - 1 + filteredVideos.length) % filteredVideos.length;
    setActiveIdx(prevIdx);
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-black overflow-hidden">

      {/* 🔵 Blue Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0284C7]/10 via-transparent to-[#0284C7]/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <span className="inline-block px-4 py-1.5 text-xs rounded-full border border-[#0284C7]/30 text-[#0284C7] bg-[#0284C7]/10 mb-4">
            Our Work in Motion
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Aerial Projects Across{" "}
            <span className="text-[#0284C7]">
              Telangana & Andhra Pradesh
            </span>
          </h2>

          <p className="text-white/60 text-sm sm:text-base">
            Aerial footage from construction, real estate, events, and inspection projects.
          </p>
        </motion.div>

        {/* 🎭 CATEGORY FILTERS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 sm:mb-10"
        >
          <div className="flex gap-2 sm:gap-3 p-1 bg-white/10 backdrop-blur-sm rounded-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setActiveIdx(0);
                }}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#0284C7] text-white shadow-lg"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 🎥 MAIN VIDEO */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-5 sm:mb-8 aspect-video shadow-xl">
          <AnimatePresence mode="wait">
            <motion.video
              key={filteredVideos[activeIdx].src}
              src={filteredVideos[activeIdx].src}
              title={filteredVideos[activeIdx].title}
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="h-full w-full object-cover"
            />
          </AnimatePresence>

          {/* 🎬 Overlay Info */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/30 to-transparent">

            <span className="text-[10px] sm:text-xs text-[#0284C7] uppercase tracking-wide">
              {filteredVideos[activeIdx].category}
            </span>

            <h3 className="text-white text-base sm:text-xl font-semibold">
              {filteredVideos[activeIdx].title}
            </h3>

            <p className="text-white/60 text-xs sm:text-sm">
              {filteredVideos[activeIdx].location}
            </p>

          </div>
        </div>

        {/* 🎞️ THUMBNAILS */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Prev */}
          <button
            onClick={prev}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
          >
            <ChevronLeft className="text-white" size={18} />
          </button>

          {/* Thumbnails */}
          <div className="flex gap-2 sm:gap-3 overflow-x-auto flex-1 no-scrollbar">

            {filteredVideos.map((v, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`relative flex-shrink-0 w-32 sm:w-44 lg:w-52 rounded-xl overflow-hidden transition-all duration-300 ${
                  i === activeIdx
                    ? "ring-2 ring-[#0284C7] scale-[1.05]"
                    : "opacity-50 hover:opacity-90 hover:scale-105"
                }`}
              >
                <video
                  src={v.src}
                  aria-label={v.title}
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full aspect-video object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <p className="absolute bottom-2 left-2 text-[9px] sm:text-[10px] text-white font-medium">
                  {v.title}
                </p>
              </button>
            ))}

          </div>

          {/* Next */}
          <button
            onClick={next}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
          >
            <ChevronRight className="text-white" size={18} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default VideoShowcaseSection;