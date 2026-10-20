import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    // number split + base64 so it isn't plain text in the bundle
    const number = atob("OTE5NzA0") + atob("NTgxMzM5"); // 919704 + 581339
    const text = encodeURIComponent(
      "Hi, I'm interested in SkyDigiLens drone services."
    );
    window.open(
      `https://wa.me/${number}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <motion.button
      type="button"
      onClick={openWhatsApp}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
      aria-label="Chat with SkyDigiLens on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden="true">
        {/* keep your existing <path ... /> here */}
      </svg>
    </motion.button>
  );
};

export default WhatsAppButton;