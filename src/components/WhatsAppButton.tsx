import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const USERNAME = "skysree";

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyUsername = async () => {
    try {
      await navigator.clipboard.writeText(`@${USERNAME}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked; user can still read the username */
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="w-64 rounded-2xl bg-white p-4 shadow-xl"
          >
            <p className="text-sm font-semibold text-gray-900">
              Message us on WhatsApp
            </p>
            <p className="mt-1 text-xs text-gray-600">
              Open WhatsApp, tap New chat, and search this username:
            </p>
            <button
              onClick={copyUsername}
              className="mt-3 w-full rounded-lg bg-[#25D366] px-3 py-2 text-sm font-medium text-white"
            >
              {copied ? "Copied!" : `@${USERNAME} (tap to copy)`}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((o) => !o)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
        aria-label="Contact SkyDigiLens on WhatsApp"
      >
        {/* keep your existing <svg>...</svg> here unchanged */}
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;