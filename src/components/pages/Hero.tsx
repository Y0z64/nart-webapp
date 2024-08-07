/// <reference types="vite-plugin-svgr/client" />
/// <reference types="../../types/svg-rules.d.ts" />

import Nav from "~/components/particles/Navbar";
import Back from "~/assets/bakground.svg?react";
import HeroLogo from '../atoms/HeroLogo';

export default function Hero() {
  return (
    <div id="hero" className="relative flex flex-col items-center justify-start overflow-hidden">
      {/* Background */}
      <div className="absolute flex h-screen w-screen scale-110 items-center justify-center overflow-hidden">
        <Back />
      </div>
      {/* Content */}
      <div className="relative flex h-screen w-screen flex-col items-center justify-start">
        <Nav />
        <div className="flex h-full w-full flex-col items-center justify-center">
          <HeroLogo/>
        </div>
      </div>
    </div>
  );
}
