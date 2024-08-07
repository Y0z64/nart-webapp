/// <reference types="vite-plugin-svgr/client" />
/// <reference types="../../types/svg-rules.d.ts" />

import Nav from "~/components/particles/Navbar";
import Back from "~/assets/bakground.svg?react";
import HeroLogo from "../atoms/HeroLogo";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import HeroParticles from "../particles/Particles";
import { motionValue } from "framer-motion/dom";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  const offset = motionValue(1);
  const opacity = useTransform(() => offset.get() - scrollYProgress.get());

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

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
          y: [0, -11, 0, 11, 0],
          x: [0, 12, 0, -13, 0],
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
      {/* Particles */}
      <motion.div
        style={{ opacity: opacity }}
        className="pointer-events-none absolute -z-50"
      >
        <HeroParticles />
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
