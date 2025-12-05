import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-hero-bg dark:bg-hero-bg-dark opacity-100 z-0"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(#4a5568 1px, transparent 1px), linear-gradient(to right, #4a5568 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, transparent, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black, transparent)",
        }}
      />
    </div>
  );
};

export default GridBackground;
