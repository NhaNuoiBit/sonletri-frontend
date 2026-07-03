import { useEffect, useState } from "react";

let currentHeight = typeof window !== "undefined" ? window.innerHeight : 0;
const listeners = new Set();
let rafId = null;

if (typeof window !== "undefined") {
  window.addEventListener("resize", () => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      currentHeight = window.innerHeight;
      listeners.forEach((fn) => fn(currentHeight));
      rafId = null;
    });
  });
}

export default function useViewportHeight() {
  const [height, setHeight] = useState(currentHeight);

  useEffect(() => {
    listeners.add(setHeight);
    return () => listeners.delete(setHeight);
  }, []);

  return height;
}
