import { SwipeCarousel } from '../components/particles/Carrousel';

export default function Experiences() {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden"
      id="experiencias"
    >
      <div className='flex justify-center items-center w-screen'><SwipeCarousel/></div>
    </div>
  );
}
