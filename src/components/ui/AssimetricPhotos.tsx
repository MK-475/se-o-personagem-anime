import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const PhotoRow = ({
  images,
  direction = "left",
  speed = 50,
}: {
  images: string[];
  direction?: "left" | "right";
  speed?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [positions, setPositions] = useState<number[]>([]);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Inicializa a posição de cada imagem
  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setContainerWidth(width);
      const initialPositions = images.map((_, i) => i * 272);
      setPositions(initialPositions);
    }
  }, [images]);

  // Animação contínua com requestAnimationFrame
  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = timestamp;
      }
      const deltaTime = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      setPositions((prev) =>
        prev.map((pos) => {
          const distanceToMove = (speed / 1000) * deltaTime;
          let newPos = direction === "left" ? pos - distanceToMove : pos + distanceToMove;
          if (direction === "left" && newPos < -256) newPos += containerWidth + 256;
          if (direction === "right" && newPos > containerWidth) newPos -= containerWidth + 256;
          return newPos;
        })
      );
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [containerWidth, direction, speed]);

  return (
    <div ref={containerRef} className="relative w-full h-70 overflow-hidden">
      {images.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          initial={{ y: 50, opacity: 0, filter: "blur(8px)" }}
          alt={`Gallery image ${i}`}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          className="w-60 h-full object-cover rounded-lg shadow-md absolute top-0"
          style={{ left: positions[i] }}
          transition={{
            delay: i * 0.1,
            duration: 0.6,
            type: "spring",
          }}
          viewport={{ once: false, amount: 0.2 }}
        />
      ))}
    </div>
  );
};


export default function AssimetricPhotosGallery() {
  const imagesRow1 = [
    "/img-1.jpeg",
    "/img-2.jpeg",
    "/img-3.jpeg",
    "/img-4.jpeg",
    "/img-5.jpeg",
    "/img-6.jpeg",
    "/img-7.jpeg",
    "/img-8.jpeg",
  ];

  const imagesRow2 = [
    "/img-4.jpeg",
    "/img-5.jpeg",
    "/img-6.jpeg",
    "/img-7.jpeg",
    "/img-8.jpeg",
    "/img-9.jpeg",
    "/img-10.jpeg",
    "/img-11.jpeg",
  ];

  return (
    <div className=" py-12 overflow-hidden">
      <div className="mb-8">
        <PhotoRow images={imagesRow1} direction="right" speed={50} />
      </div>
      <div>
        <PhotoRow images={imagesRow2} direction="left" speed={50} />
      </div>
    </div>
  );
}