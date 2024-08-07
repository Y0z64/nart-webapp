import { SwipeCarousel } from '../components/particles/Carrousel';

export default function Experiences() {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden"
      id="experiencias"
    >
      <h1 className="text-[5rem] font-bold tracking-widest">EXPERIENCIAS</h1>
      <SwipeCarousel />
    </div>
  );
}
