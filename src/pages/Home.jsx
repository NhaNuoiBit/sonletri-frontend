import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Building2, TrendingUp } from "lucide-react";
import { meta } from "../data/report.js";
import heroPhoto from "../assets/photos/airport-terminal-1.jpg";
import lounge from "../assets/photos/business-lounge-1.jpg";
import hall from "../assets/photos/airport-hall-1.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold">
            A
          </div>
          <span className="font-semibold text-brand-900">{meta.companyShort} Portal</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm text-slate-500">
          <span>Báo cáo</span>
          <span>Dự án</span>
          <span>Về tôi</span>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold tracking-wide uppercase mb-4"
            >
              Portfolio &middot; Báo cáo doanh nghiệp
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-brand-900 leading-tight"
            >
              Báo cáo Kết quả Kinh doanh
              <br />
              <span className="text-brand-500">5 tháng đầu năm 2026</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-slate-500 text-lg max-w-md"
            >
              {meta.company} — phân tích số liệu tài chính, cơ cấu doanh thu, chi phí và các
              khuyến nghị hành động cho kỳ {meta.period}.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex gap-4"
            >
              <Link
                to="/presentation"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-600 text-white font-semibold shadow-lg shadow-brand-200 hover:bg-brand-700 transition"
              >
                Mở bài thuyết trình
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
          >
            <img src={heroPhoto} alt="Nhà ga quốc tế Đà Nẵng" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" />
          </motion.div>
        </section>

        <section className="pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              { img: lounge, title: "Dịch vụ phòng CIP", desc: "43.7% tổng doanh thu 5 tháng" },
              { img: hall, title: "Mặt bằng kinh doanh", desc: "53.3% tổng doanh thu 5 tháng" },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl overflow-hidden shadow-lg h-56 group"
              >
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-bold text-lg">{c.title}</p>
                  <p className="text-sm text-brand-100">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="grid md:grid-cols-3 gap-6 pb-24">
          {[
            {
              icon: TrendingUp,
              title: "158.7 tỷ đồng",
              desc: "Tổng doanh thu 5 tháng, đạt 40.5% kế hoạch năm 2026",
            },
            {
              icon: BarChart3,
              title: "97%",
              desc: "Doanh thu tập trung ở 2 mảng CIP và mặt bằng kinh doanh",
            },
            {
              icon: Building2,
              title: "62.0 tỷ đồng",
              desc: "Lợi nhuận sau thuế, biên lợi nhuận 39.1%",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-brand-100 p-6 shadow-sm hover:shadow-lg transition"
            >
              <card.icon className="text-brand-600 mb-3" size={28} />
              <p className="text-2xl font-bold text-brand-900">{card.title}</p>
              <p className="mt-1 text-sm text-slate-500">{card.desc}</p>
            </motion.div>
          ))}
        </section>
      </main>

      <footer className="border-t border-brand-100 py-8 text-center text-sm text-slate-400">
        © 2026 {meta.company}
      </footer>
    </div>
  );
}
