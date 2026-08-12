import React, { useEffect, useState } from "react";
import { CheckCircle2, XCircle, Info, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const typeConfig = {
  success: {
    icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
    border: "border-white/10",
  },
  error: {
    icon: <XCircle className="w-5 h-5 text-red-500" />,
    border: "border-red-500/20",
  },
  info: {
    icon: <Info className="w-5 h-5 text-blue-500" />,
    border: "border-white/10",
  },
};

const Message = ({ type = "info", text = "", duration = 4000 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (text) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), duration);
      return () => clearTimeout(timer);
    }
  }, [text, duration]);

  const config = typeConfig[type] || typeConfig.info;

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed top-20 right-0 sm:top-28 sm:right-10 z-[100] w-full sm:w-auto px-4 sm:px-0 pointer-events-none flex justify-center sm:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`flex items-center gap-4 px-5 py-4 bg-[#0a0a0a]/90 backdrop-blur-xl border ${config.border} shadow-[0_8px_30px_rgb(0,0,0,0.3)] pointer-events-auto min-w-[300px] relative pr-12`}
          >
            <div className="shrink-0">{config.icon}</div>
            <p className="font-medium text-sm text-zinc-200 tracking-wide flex-1">
              {text}
            </p>
            <button
              onClick={() => setShow(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Message;
