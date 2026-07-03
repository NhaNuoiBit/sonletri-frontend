import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import SlideShell from "../ui/SlideShell.jsx";
import { bottlenecks } from "../../data/report.js";
import photo from "../../assets/photos/airport-lounge-1.jpg";

export default function Slide06Bottlenecks({ index, total }) {
  return (
    <SlideShell dark index={index} total={total} bgImage={photo}>
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold flex items-center gap-3"
      >
        <motion.span
          animate={{ rotate: [0, -8, 8, -8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 2 }}
        >
          <AlertTriangle className="text-amber-300" size={36} />
        </motion.span>
        Điểm nghẽn cần lưu ý
      </motion.h2>
      <p className="mt-2 text-brand-200">Các rủi ro và bottleneck phát hiện từ số liệu 5 tháng</p>

      <div className="mt-8 grid md:grid-cols-2 gap-5">
        {bottlenecks.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 24, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03, y: -4, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.4)" }}
            style={{ transformPerspective: 800 }}
            className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur p-5 cursor-default"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-full bg-amber-400/90 text-brand-950 font-bold text-sm flex items-center justify-center flex-shrink-0">
                {i + 1}
              </span>
              <h3 className="font-semibold text-white">{b.title}</h3>
            </div>
            <p className="text-sm text-brand-100 leading-relaxed">{b.detail}</p>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
