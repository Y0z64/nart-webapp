import { SwipeCarousel } from '../components/particles/Carrousel';

export default function Experiences() {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden"
      id="experiencias"
    >
      <div className='flex justify-start items-start w-full h-full'><SwipeCarousel/></div>
    </div>
  );
}
