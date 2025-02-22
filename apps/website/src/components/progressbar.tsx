import { useScroll, useSpring, motion, useTransform } from "motion/react";
import { useEffect, useState, useRef } from "react";

export default function ProgressBar() {
  const containerRef = useRef<HTMLElement | null>(null); // Create ref to hold the container element
  const [scrollRef, setScrollRef] = useState<HTMLElement | null>(null); // Manage ref dynamically

  useEffect(() => {
    // Dynamically assign the container
    const container = document.querySelector<HTMLElement>(".main-scroll");
    if (container) setScrollRef(container);
  }, []); // Run
  const { scrollYProgress } = useScroll({ container: scrollRef ? { current: scrollRef } : undefined })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const finalScaleX = useTransform(scaleX, [0, 1], [1, 0])
  const [isScrollable, setIsScrollable] = useState(false);
  useEffect(() => {
    const checkScroll = () => {
      const isScrollable = document.documentElement.scrollHeight > window.innerHeight;
      setIsScrollable(isScrollable);
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);
  return (
    <>
      {
        isScrollable &&
        <div className="w-screen h-1 bg-progressbar-gradient top-0 left-0 z-50 fixed">
          <motion.div className="w-full h-full bg-background origin-[100%]" style={{ scaleX: finalScaleX }} />
        </div>
      }
    </>
  );
}