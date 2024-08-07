import NavButton from '../atoms/NavButton';
import { ModeToggle } from "../mode-toggle.";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(true);
  const { scrollYProgress } = useScroll({  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsScrolled(latest < 0.001);
  });

  return (
    <motion.div
      layout
      className="left-0 top-0 z-50 mt-1 flex h-14 w-full items-center justify-between px-4"
      animate={{ y: isScrolled ? 9 : -80 }}
    >
      {/* Left */}
      <div className="mr-2 flex w-fit items-center justify-center space-x-3">
        <NavButton text="NOSOTROS" link="#nosotros" />
        <NavButton text="EXPERIENCIAS" />
        <NavButton text="CONTACTO" />
        <ModeToggle />
      </div>
      {/* Right */}
      <div className="flex w-fit items-center justify-center space-x-4">
        <NavButton text="REGISTRATE" />
      </div>
    </motion.div>
  );
}
