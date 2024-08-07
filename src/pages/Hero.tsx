/// <reference types="vite-plugin-svgr/client" />

import Nav from "~/components/particles/Navbar";
import Back from "~/assets/bakground.svg?react";
import HeroLogo from "~/components/atoms/HeroLogo";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import HeroParticles from "~/components/particles/Particles";
import { motionValue } from "framer-motion/dom";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  const offset = motionValue(1);
  const opacity = useTransform(() => offset.get() - scrollYProgress.get());

  return (
    <div
      id="hero"
      className="relative flex h-fit w-screen flex-col items-center justify-start overflow-hidden md:h-screen"
    >
      {/* Background */}
      <motion.div
        className="absolute flex h-screen w-screen scale-110 items-center justify-center overflow-hidden md:rotate-0"
        initial={{ y: 0, x: 0 }}
        animate={{
          y: [0, -13, 0, 12, 0],
          x: [0, 12, 0, -11, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Back className="rotate-90 scale-[1.8] md:rotate-0 md:scale-100" />
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
