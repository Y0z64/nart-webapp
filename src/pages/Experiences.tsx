import { SwipeCarousel } from '../components/particles/Carrousel';

export default function Experiences() {
  return (
    <div
      className="flex h-fit my-36 md:my-0 md:h-screen w-screen flex-col items-center justify-center overflow-hidden"
      id="experiencias"
    >
      <h1 className="font-bold tracking-widest text-[1.7rem] md:text-[3.8rem] md:-mb-6 xl:text-[4.5rem] 2xl:text-[5rem]">
        EXPERIENCIAS
      </h1>
      <SwipeCarousel />
    </div>
  );
}
