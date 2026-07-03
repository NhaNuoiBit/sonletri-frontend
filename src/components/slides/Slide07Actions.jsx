import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";
import SlideShell from "../ui/SlideShell.jsx";
import { actions } from "../../data/report.js";
import photo from "../../assets/photos/airport-plane-1.jpg";

export default function Slide07Actions({ index, total }) {
  const [done, setDone] = useState(() => new Set());

  const toggle = (i) =>
    setDone((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  const progress = (done.size / actions.length) * 100;

  return (
    <SlideShell index={index} total={total}>
      <div className="grid lg:grid-cols-5 gap-10 flex-1">
        <div className="lg:col-span-3">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-brand-900"
          >
            Đề xuất hành động
          </motion.h2>
          <p className="mt-2 text-slate-500">Bấm vào từng mục để đánh dấu đã triển khai</p>

          <div className="mt-4 h-2 w-full bg-brand-50 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-brand-600"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <div className="mt-6 space-y-3">
            {actions.map((a, i) => {
              const isDone = done.has(i);
              return (
                <motion.button
                  key={a}
                  onClick={() => toggle(i)}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-start gap-4 rounded-xl border p-5 text-left transition-colors ${
                    isDone
                      ? "border-green-200 bg-green-50"
                      : "border-brand-100 bg-brand-50/50"
                  }`}
                >
                  {isDone ? (
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={24} />
                  ) : (
                    <Circle className="text-brand-300 flex-shrink-0 mt-0.5" size={24} />
                  )}
                  <p className={`leading-relaxed ${isDone ? "text-green-800 line-through" : "text-slate-700"}`}>
                    {a}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-xl group"
        >
          <img
            src={photo}
            alt="Máy bay cất cánh"
            className="w-full h-full object-cover min-h-64 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-900/10 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <p className="text-2xl font-bold">{done.size}/{actions.length}</p>
            <p className="text-sm text-brand-100">Hành động đã đánh dấu triển khai</p>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
