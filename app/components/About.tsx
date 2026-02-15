"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  Clock,
  DollarSign,
  MessageCircle,
  CheckCircle,
  Lightbulb,
  Shield,
  Headphones,
} from "lucide-react";

const About = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const stepsRef = useRef(null);
  const guaranteeRef = useRef(null);

  const headerInView = useInView(headerRef, {once: true, amount: 0.3});
  const cardsInView = useInView(cardsRef, {once: true, amount: 0.1});
  const stepsInView = useInView(stepsRef, {once: true, amount: 0.1});
  const guaranteeView = useInView(guaranteeRef, {once: true, amount: 0.1});

  const nilaiUtama = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Perspektif Segar",
      description:
        "Pendekatan modern dengan teknologi terbaru tanpa batasan kode lama",
      benefit: "Website Anda pakai teknologi paling update",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Perhatian Penuh",
      description:
        "Fokus maksimal pada proyek Anda karena hanya menangani beberapa klien",
      benefit: "Waktu respons cepat & perhatian detail maksimal",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Harga Kompetitif",
      description: "Harga yang masuk akal untuk kualitas kerja profesional",
      benefit: "Nilai terbaik untuk investasi Anda",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Komunikasi Jelas",
      description: "Update kemajuan rutin dan terbuka untuk masukan Anda",
      benefit: "Tidak ada kejutan, semua transparan",
    },
  ];

  const jaminan = [
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Garansi uang kembali jika tidak puas",
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      text: "30 hari dukungan gratis setelah peluncuran",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Revisi tanpa batas sampai Anda puas",
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      text: "Konsultasi & sesi strategi gratis",
    },
  ];

  const tahapanKerja = [
    {
      step: "01",
      title: "Diskusi Awal",
      description:
        "Kita bahas tujuan, target audiens, dan visi Anda untuk website",
    },
    {
      step: "02",
      title: "Perencanaan & Desain",
      description:
        "Saya buat kerangka dan mockup desain untuk persetujuan Anda",
    },
    {
      step: "03",
      title: "Pengembangan",
      description: "Coding dengan update kemajuan rutin dan sesi demo",
    },
    {
      step: "04",
      title: "Peluncuran & Dukungan",
      description:
        "Deploy website Anda dan berikan pelatihan + 30 hari dukungan",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Judul */}
        <motion.div
        ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={headerInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full"
          >
            <span className="text-blue-400 font-semibold">
              🚀 Baru di Freelance, Bukan di Pengembangan Web
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Kenapa Memilih{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Saya?
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mungkin saya bukan developer dengan puluhan tahun pengalaman, tapi
            saya punya sesuatu yang lebih berharga:{" "}
            <span className="text-blue-400 font-semibold">
              semangat untuk membuktikan diri
            </span>{" "}
            dan
            <span className="text-blue-400 font-semibold">
              {" "}
              dedikasi maksimal
            </span>{" "}
            untuk setiap klien.
          </p>
        </motion.div>

        {/* Grid Nilai Utama */}
        <motion.div
        ref={cardsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-20"
        >
          {nilaiUtama.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={cardsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white backdrop-blur-sm rounded-2xl p-6 transition-all group shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                  {prop.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-400 transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{prop.description}</p>
                  <div className="inline-block px-3 py-1 bg-blue-500/10 rounded-full">
                    <span className="text-sm text-blue-400">
                      ✓ {prop.benefit}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cara Kerja Saya */}
        <motion.div
        ref={stepsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={stepsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-slate-950 mb-12 text-center">
            Cara Kerja Saya
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tahapanKerja.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="relative"
              >
                <div className="bg-white backdrop-blur-sm rounded-2xl p-6 transition-all h-full shadow-lg">
                  <div className="text-6xl font-bold text-blue-500/20 mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>

                {/* Garis penghubung (kecuali item terakhir) */}
                {index < tahapanKerja.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-linear-to-r from-blue-500 to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Jaminan */}
        <motion.div
        ref={guaranteeRef}
          initial={{ opacity: 0, y: 20 }}
          animate={guaranteeView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-linear-to-r from-blue-400/10 to-cyan-400/10 rounded-xl p-8 md:p-12 border border-blue-500/20 mb-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-950 mb-4">
              Jaminan Saya untuk Anda
            </h3>
            <p className="text-gray-800">
              Karena sedang membangun reputasi, saya memberikan lebih dari yang
              diharapkan
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {jaminan.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={guaranteeView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="flex items-center gap-3 group"
              >
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                  {guarantee.icon}
                </div>
                <span className="text-gray-600 group-hover:text-slate-800 transition-colors">
                  {guarantee.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mari Bicara Jujur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={guaranteeView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span>💬</span> Mari Bicara Jujur
            </h3>

            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed text-gray-600">
                <strong className="text-slate-800">
                  Ya, saya masih baru di dunia freelancing.
                </strong>{" "}
                Saya tidak akan mengklaim punya banyak klien atau 10 tahun
                pengalaman.
              </p>

              <p className="leading-relaxed text-gray-600">
                Tapi inilah yang saya <em className="text-blue-400">jamin</em>:
              </p>

              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    <strong className="text-slate-800">100% dedikasi</strong> -
                    Proyek Anda adalah prioritas utama saya
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    <strong className="text-slate-800">Teknologi modern</strong>{" "}
                    - Next.js, TypeScript, Tailwind - tanpa kode lama
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    <strong className="text-slate-800">
                      Revisi tanpa batas
                    </strong>{" "}
                    - Saya kerjakan sampai Anda 100% puas
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    <strong className="text-slate-800">Harga kompetitif</strong>{" "}
                    - Nilai terbaik karena saya masih membangun portofolio
                  </span>
                </li>
              </ul>

              <p className="leading-relaxed pt-4 border-t border-slate-700 text-gray-600">
                <strong className="text-blue-400">Intinya:</strong> Anda
                mendapat kualitas kerja profesional dengan harga yang masuk
                akal, dari developer yang akan memperlakukan proyek Anda seperti
                proyek sendiri.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Ajakan Bertindak */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={guaranteeView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-12 text-center"
        >
          <p className="text-xl text-gray-800 mb-6">
            Siap memberi kesempatan pada talenta segar?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full font-semibold text-white shadow-lg shadow-blue-500/50"
              href="https://api.whatsapp.com/send/?phone=6281384528791"
            >
              Mari Bicara Tentang Proyek Anda
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-blue-400 rounded-full font-semibold text-blue-400 hover:bg-blue-500/10"
              href="#projects"
            >
              Lihat Karya Saya
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
