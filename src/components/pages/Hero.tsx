/// <reference types="vite-plugin-svgr/client" />
import Nav from "~/components/particles/Navbar";
import Back from "../../../public/images/bakground.svg?react";

export default function Hero() {
  return (
    <div className="relative flex flex-col justify-start items-center overflow-hidden">
      <div className="absolute flex h-screen w-screen scale-110 items-center justify-center overflow-hidden">
        <Back />
      </div>
      <div className="relative flex h-screen w-screen flex-col items-center justify-start">
        <Nav />
      </div>
    </div>
  );
}
