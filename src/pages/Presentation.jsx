import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronUp, ChevronDown } from "lucide-react";
import Slide01Cover from "../components/slides/Slide01Cover.jsx";
import Slide02Overview from "../components/slides/Slide02Overview.jsx";
import Slide03RevenueMix from "../components/slides/Slide03RevenueMix.jsx";
import Slide04Trend from "../components/slides/Slide04Trend.jsx";
import Slide05CostStructure from "../components/slides/Slide05CostStructure.jsx";
import Slide06Bottlenecks from "../components/slides/Slide06Bottlenecks.jsx";
import Slide07Actions from "../components/slides/Slide07Actions.jsx";
import Slide08ThankYou from "../components/slides/Slide08ThankYou.jsx";

const slides = [
  Slide01Cover,
  Slide02Overview,
  Slide03RevenueMix,
  Slide04Trend,
  Slide05CostStructure,
  Slide06Bottlenecks,
  Slide07Actions,
  Slide08ThankYou,
];

export default function Presentation() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const sections = container.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Array.from(sections).indexOf(entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { root: container, threshold: 0.6 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (i) => {
    const container = containerRef.current;
    const sections = container?.querySelectorAll("section");
    sections?.[i]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-screen bg-white">
      <Link
        to="/"
        className="fixed top-5 left-5 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur border border-brand-100 shadow-md text-brand-700 font-medium text-sm hover:bg-brand-50 transition"
      >
        <ArrowLeft size={16} />
        Trang chủ
      </Link>

      <div className="fixed top-1/2 right-5 -translate-y-1/2 z-50 flex flex-col gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Đến slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              active === i ? "bg-brand-600 scale-125" : "bg-brand-200 hover:bg-brand-400"
            }`}
          />
        ))}
      </div>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2">
        <button
          onClick={() => scrollToIndex(Math.max(0, active - 1))}
          className="w-10 h-10 rounded-full bg-white shadow-md border border-brand-100 flex items-center justify-center text-brand-700 hover:bg-brand-50 disabled:opacity-30"
          disabled={active === 0}
          aria-label="Slide trước"
        >
          <ChevronUp size={18} />
        </button>
        <button
          onClick={() => scrollToIndex(Math.min(slides.length - 1, active + 1))}
          className="w-10 h-10 rounded-full bg-white shadow-md border border-brand-100 flex items-center justify-center text-brand-700 hover:bg-brand-50 disabled:opacity-30"
          disabled={active === slides.length - 1}
          aria-label="Slide sau"
        >
          <ChevronDown size={18} />
        </button>
      </div>

      <div
        ref={containerRef}
        className="w-full h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
      >
        {slides.map((Slide, i) => (
          <Slide key={i} index={i + 1} total={slides.length} />
        ))}
      </div>
    </div>
  );
}
