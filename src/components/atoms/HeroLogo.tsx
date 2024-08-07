import { motion } from "framer-motion";
import Logo from "~/assets/logo.svg?react";

export default function HeroLogo() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="mt-8 h-fit w-fit"
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
          y: [0, -11, 0, 10, 0],
          x: [0, 6, 0, -7, 0],
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
        <Logo className="mb-20 w-[22rem] md:h-[37rem] md:w-[45rem] xl:w-[55rem] 2xl:w-[75rem]" />
      </motion.div>
    </div>
  );
}
