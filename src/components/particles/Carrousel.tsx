import { useRef, useState } from "react";

import { motion, PanInfo, useMotionValue } from "framer-motion";

const imgs = [
  "/public/images/image1.png",
  "/public/images/image1.png",
  "/public/images/image1.png",
];

const SPRING_OPTIONS = {
  type: "spring",

  mass: 3,

  stiffness: 400,

  damping: 50,
};

/* 
  This is a simple image carousel that allows you to swipe through images.
  It uses framer-motion for animations and gestures.
  It also has a dot navigation to jump to a specific image.

  @param imgs: An array of images, ALL IMAGES MUST HAVE THE SAME WIDTH.

*/
export const SwipeCarousel: React.FC = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);

  const onDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const dragThreshold = containerWidth * 0.2;
      const draggedDistance = info.offset.x;
      const dragVelocity = info.velocity.x;

      if (
        (draggedDistance < -dragThreshold && imgIndex < imgs.length - 1) ||
        (dragVelocity < -500 && imgIndex < imgs.length - 1)
      ) {
        setImgIndex((pv) => pv + 1);
      } else if (
        (draggedDistance > dragThreshold && imgIndex > 0) ||
        (dragVelocity > 500 && imgIndex > 0)
      ) {
        setImgIndex((pv) => pv - 1);
      }
    }

    dragX.set(0);
  };

  return (
    <div className="relative mx-auto w-full max-w-screen-2xl py-8">
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center justify-start active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
};

interface ImagesProps {
  imgIndex: number;
}

const Images: React.FC<ImagesProps> = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => (
        <motion.div
          key={idx}
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{
            scale: imgIndex === idx ? 0.95 : 0.85,
          }}
          transition={SPRING_OPTIONS}
          className="aspect-video w-full shrink-0 rounded-xl bg-neutral-800 object-cover"
        />
      ))}
    </>
  );
};

const Dots = ({
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number;
  setImgIndex: (n: number) => void;
}) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};
