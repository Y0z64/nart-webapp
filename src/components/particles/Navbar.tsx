import NavButton from "../atoms/NavButton";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle.";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll({  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    console.log(latest < 0.001 ? "true" : "false");
    setIsScrolled(latest < 0.001);
  });

  return (
    <motion.div
      layout
      className="left-0 top-0 mt-1 flex h-14 w-full items-center justify-between px-4"
      animate={{ y: isScrolled ? 0 : -100}}
    >
      {/* Left */}
      <div className="mr-2 flex w-fit items-center justify-center space-x-3">
        <NavButton text="PROJECTS" />
        <NavButton text="CONTACT" />
        <NavButton text="ABOUT US" />
        <ModeToggle />
      </div>
      {/* Right */}
      <div className="flex w-fit items-center justify-center space-x-4">
        <Button variant={"default"} className="rounded-full px-4 text-lg">
          Register
        </Button>
      </div>
    </motion.div>
  );
}
