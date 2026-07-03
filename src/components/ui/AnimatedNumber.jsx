import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedNumber({ value, decimals = 1, className = "" }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 24, stiffness: 60 });
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (v) => {
      if (ref.current) ref.current.textContent = v.toFixed(decimals);
    });
  }, [springValue, decimals]);

  return <span ref={ref} className={className}>0</span>;
}
