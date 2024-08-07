import { motion } from "framer-motion";
import Logo from "~/assets/logo.svg?react";

export default function HeroLogo() {
  return (
    <motion.div
      className="mb-10 h-fit w-fit"
      initial={{ opacity: 0, scale: 0.9, filter: "blur(0px)", y: 0, x: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: [
          "blur(0px)",
          "blur(1px)",
          "blur(4px)",
          "blur(1px)",
          "blur(0px)",
        ],
        y: [0, -5, 0, 5, 0],
        x: [0, 2, 0, -2, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        opacity: { duration: 1.5, ease: "easeInOut" },
        scale: { duration: 1.5, ease: "easeOut" },
      }}
    >
      <Logo className="mb-20 h-[75rem] w-[75rem]" />
    </motion.div>
  );
}
