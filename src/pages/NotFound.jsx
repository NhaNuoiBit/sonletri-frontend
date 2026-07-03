import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { meta } from "../data/report.js";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-display text-7xl md:text-8xl font-bold text-brand-100"
      >
        404
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-2 text-xl md:text-2xl font-semibold text-brand-900"
      >
        Không tìm thấy trang này
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-2 text-slate-500 max-w-sm"
      >
        Đường dẫn có thể đã bị đổi hoặc không còn tồn tại trong {meta.companyShort} Portal.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-600 text-white font-medium hover:bg-brand-700 active:scale-[0.98] transition-all"
        >
          <ArrowLeft size={16} />
          Về trang chủ
        </Link>
      </motion.div>
    </div>
  );
}
