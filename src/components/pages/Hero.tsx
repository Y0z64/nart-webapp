/// <reference types="vite-plugin-svgr/client" />
/// <reference types="../../types/svg-rules.d.ts" />

import Nav from "~/components/particles/Navbar";
import Back from "~/assets/bakground.svg?react";
import HeroLogo from '../atoms/HeroLogo';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      id="hero"
      className="relative flex flex-col items-center justify-start overflow-hidden"
    >
      {/* Background */}
      <motion.div
        className="absolute flex h-screen w-screen scale-110 items-center justify-center overflow-hidden"
        initial={{ y: 0, x: 0 }}
        animate={{
          y: [0, -7, 0, 7, 0],
          x: [0, 3, 0, -3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Back />
      </motion.div>
      {/* Content */}
      <div className="relative flex h-screen w-screen flex-col items-center justify-start">
        <Nav />
        <div className="flex h-full w-full flex-col items-center justify-center">
          <HeroLogo />
        </div>
      </div>
    </div>
  );
}
