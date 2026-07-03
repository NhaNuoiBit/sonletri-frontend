import { motion } from "framer-motion";
import AnimatedNumber from "./AnimatedNumber.jsx";

export default function StatCard({ label, value, unit, sub, delay = 0, dark = false, decimals = 1 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`rounded-2xl p-6 shadow-lg border transition-shadow hover:shadow-xl ${
        dark
          ? "bg-white/10 border-white/20 backdrop-blur"
          : "bg-white border-brand-100"
      }`}
    >
      <p className={`text-sm font-medium ${dark ? "text-brand-100" : "text-brand-600"}`}>
        {label}
      </p>
      <p className={`mt-2 text-4xl font-bold ${dark ? "text-white" : "text-brand-900"}`}>
        <AnimatedNumber value={value} decimals={decimals} />
        <span className="text-lg font-semibold ml-1">{unit}</span>
      </p>
      {sub && (
        <p className={`mt-1 text-xs ${dark ? "text-white/70" : "text-slate-500"}`}>{sub}</p>
      )}
    </motion.div>
  );
}
