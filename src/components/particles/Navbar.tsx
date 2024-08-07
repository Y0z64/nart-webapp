import NavButton from "../atoms/NavButton";
import { ModeToggle } from "../mode-toggle.";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(true);
  const { scrollYProgress } = useScroll({});

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsScrolled(latest < 0.001);
  });

  return (
    <>
      <motion.div
        layout
        className="left-0 top-0 z-50 mt-1 flex h-fit w-full items-center justify-between px-4 md:h-14"
        animate={{ y: isScrolled ? 9 : -80 }}
      >
        {/* Left */}
        <div className="-ml-2 mr-2 flex w-fit flex-col items-start justify-center space-y-2 md:ml-0 md:flex-row md:justify-center md:space-x-3 md:space-y-0">
          <NavButton text="NOSOTROS" link="#nosotros" />
          <NavButton text="EXPERIENCIAS" link="#experiencias" />
          <NavButton
            text="CONTACTO"
            link="https://forms.gle/8G3bKFHf7aY8M8j97"
          />
          <ModeToggle />
        </div>
        {/* Right */}
        <div className="hidden w-fit items-center justify-center space-x-4 md:flex">
          <NavButton
            text="REGISTRATE"
            link="https://forms.gle/8G3bKFHf7aY8M8j97"
          />
        </div>
      </motion.div>
    </>
  );
}
