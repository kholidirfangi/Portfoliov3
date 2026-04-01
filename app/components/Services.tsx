"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Smartphone,
  Sparkles,
  ArrowRight,
  Check,
  Building2,
  Briefcase,
  Globe,
  Server,
  Shield,
  Zap,
  HeadphonesIcon,
  RefreshCw,
  Star,
} from "lucide-react";

const Services = () => {
  const headerRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.1 });
  const processInView = useInView(processRef, { once: true, amount: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Landing Page",
      subtitle: "Cocok untuk promosi & campaign",
      price: "Rp 999.000",
      priceNote: "sekali bayar",
      renewal: "Perpanjangan Rp 500rb/tahun",
      description:
        "Halaman landing yang convert tinggi untuk produk, layanan, atau event Anda",
      features: [
        "1 halaman responsif (mobile-friendly)",
        "Design eye-catching & modern",
        "Integrasi WhatsApp button",
        "Integrasi Google Maps",
        "Gratis domain .com 1 tahun",
        "Gratis hosting 1 tahun",
        "SSL certificate (HTTPS)",
        "Optimasi kecepatan loading",
        "Revisi hingga 3x",
        "Garansi bug fix 30 hari",
      ],
      popular: true,
      badge: "TERLARIS",
      badgeColor: "from-blue-400 to-cyan-400",
      whatsapp:
        "https://api.whatsapp.com/send/?phone=6281384528791&text=Halo%2C+saya+tertarik+dengan+layanan+*Landing+Page*+seharga+Rp+999.000.+Boleh+saya+konsultasi+lebih+lanjut%3F",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Company Profile",
      subtitle: "Untuk bisnis & perusahaan",
      price: "Rp 2.999.000",
      priceNote: "sekali bayar",
      renewal: "Perpanjangan Rp 750rb/tahun",
      description:
        "Website profesional multi-halaman untuk tingkatkan kepercayaan klien Anda",
      features: [
        "5–8 halaman lengkap",
        "Desain profesional & elegan",
        "Profil perusahaan & tim",
        "Halaman produk & layanan",
        "Blog / artikel (opsional)",
        "Form kontak & Google Maps",
        "Gratis domain .com 1 tahun",
        "Gratis hosting 1 tahun",
        "SSL certificate (HTTPS)",
        "Basic SEO on-page",
        "Integrasi WhatsApp button",
        "Revisi hingga 5x",
        "Garansi bug fix 60 hari",
        "Panduan pengelolaan website",
      ],
      popular: false,
      badge: "RECOMMENDED",
      badgeColor: "from-violet-500 to-purple-500",
      whatsapp:
        "https://api.whatsapp.com/send/?phone=6281384528791&text=Halo%2C+saya+tertarik+dengan+layanan+*Website+Company+Profile*+seharga+Rp+2.999.000.+Boleh+saya+konsultasi+lebih+lanjut%3F",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Portfolio",
      subtitle: "Untuk freelancer & kreatif",
      price: "Rp 1.799.000",
      priceNote: "sekali bayar",
      renewal: "Perpanjangan Rp 600rb/tahun",
      description:
        "Tampilkan karya terbaik Anda dengan website portfolio yang memukau klien",
      features: [
        "4–6 halaman interaktif",
        "Galeri proyek dengan filter",
        "Animasi & transisi halus",
        "About me & skill section",
        "Testimoni & pengalaman",
        "Contact form & social media",
        "Gratis domain .com 1 tahun",
        "Gratis hosting 1 tahun",
        "SSL certificate (HTTPS)",
        "Optimasi untuk mobile",
        "Revisi hingga 4x",
        "Garansi bug fix 30 hari",
      ],
      popular: false,
      badge: null,
      badgeColor: "",
      whatsapp:
        "https://api.whatsapp.com/send/?phone=6281384528791&text=Halo%2C+saya+tertarik+dengan+layanan+*Website+Portfolio*+seharga+Rp+1.799.000.+Boleh+saya+konsultasi+lebih+lanjut%3F",
    },
  ];

  const included = [
    {
      icon: <Globe className="w-5 h-5" />,
      label: "Domain .com 1 Tahun",
      desc: "Gratis tanpa syarat",
    },
    {
      icon: <Server className="w-5 h-5" />,
      label: "Hosting 1 Tahun",
      desc: "Server cepat & stabil",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      label: "SSL Certificate",
      desc: "Keamanan HTTPS penuh",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      label: "Fast Loading",
      desc: "Optimasi performa",
    },
    {
      icon: <HeadphonesIcon className="w-5 h-5" />,
      label: "Support Teknis",
      desc: "Via WhatsApp & email",
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      label: "Garansi Revisi",
      desc: "Sampai Anda puas",
    },
  ];

  const techStack = [
    { name: "Next.js", color: "from-gray-900 to-gray-700" },
    { name: "React", color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", color: "from-blue-600 to-blue-400" },
    { name: "Tailwind CSS", color: "from-cyan-500 to-blue-500" },
    { name: "Framer Motion", color: "from-purple-500 to-pink-500" },
    { name: "Node.js", color: "from-green-600 to-green-400" },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Konsultasi & Deal",
      description: "Diskusi kebutuhan, kirim brief, setuju harga & timeline",
      duration: "30–60 menit",
    },
    {
      number: "02",
      title: "Pengerjaan",
      description: "Desain & development dengan update berkala via WhatsApp",
      duration: "3-14 hari",
    },
    {
      number: "03",
      title: "Pengerjaan",
      description: "Finalisasi, revisi, lalu website Anda live!",
      duration: "1–4 minggu",
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-semibold">Layanan & Harga</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Apa yang Bisa{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Saya Bantu?
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Harga transparan, fitur lengkap. Semua paket sudah termasuk domain &
            hosting gratis 1 tahun — tanpa biaya tersembunyi!
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={headerInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`px-4 py-2 rounded-full bg-linear-to-r ${tech.color} text-white text-sm font-semibold shadow-lg`}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Already Included Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10 bg-linear-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-6 md:p-8"
        >
          <p className="text-center text-sm font-bold text-blue-400 uppercase tracking-widest mb-6">
            🎁 Sudah Termasuk di Semua Paket
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {included.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-2"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center text-blue-400">
                  {item.icon}
                </div>
                <p className="text-sm font-bold text-slate-700">{item.label}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services / Pricing Grid */}
        <motion.div
          ref={servicesRef}
          initial={{ opacity: 0, y: 20 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group flex flex-col ${
                service.popular
                  ? "border-2 border-blue-400 ring-4 ring-blue-100"
                  : "border border-gray-100"
              }`}
            >
              {service.badge && (
                <div
                  className={`absolute -top-3 right-6 px-3 py-1 bg-linear-to-r ${service.badgeColor} text-white text-xs font-bold rounded-full shadow-md`}
                >
                  {service.badge}
                </div>
              )}

              <div className="mb-5">
                <div className="inline-flex p-4 bg-linear-to-br from-blue-400/10 to-cyan-400/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-1 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-xs font-semibold text-cyan-500 uppercase tracking-wider mb-3">
                {service.subtitle}
              </p>
              <p className="text-gray-500 text-sm mb-5">
                {service.description}
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <span className="text-4xl font-black text-slate-800">
                  {service.price}
                </span>
                <p className="text-xs text-gray-400 mt-1">
                  {service.priceNote} · {service.renewal}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={service.whatsapp}
                target="_blank"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 px-4 font-bold rounded-xl flex items-center justify-center gap-2 transition-all text-sm ${
                  service.popular
                    ? "bg-linear-to-r from-blue-400 to-cyan-400 text-white shadow-lg shadow-blue-400/30 hover:shadow-blue-400/50"
                    : "bg-slate-100 text-slate-700 hover:bg-linear-to-r hover:from-blue-400 hover:to-cyan-400 hover:text-white"
                }`}
              >
                <Star className="w-4 h-4" />
                Mulai Project Ini
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Add-on note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={servicesInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm text-gray-400 mb-16"
        >
          💡 Butuh fitur tambahan seperti CMS, e-commerce, atau custom API?
          Hubungi saya untuk penawaran khusus.
        </motion.p>

        {/* Process Timeline */}
        <motion.div
          ref={processRef}
          initial={{ opacity: 0, y: 20 }}
          animate={processInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Proses Kerja yang{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Terstruktur
            </span>
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Dari konsultasi hingga peluncuran, setiap tahap dirancang untuk
            hasil maksimal
          </p>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 transform -translate-y-1/2 opacity-20" />
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 items-stretch">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={processInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative h-full"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group h-full">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-linear-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                    <div className="mt-6">
                      <h4 className="text-lg font-bold text-slate-800 mb-2 text-center">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600 text-center mb-3">
                        {step.description}
                      </p>
                      <div className="inline-block w-full text-center">
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-linear-to-r from-blue-400 to-cyan-400 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Punya Project dalam Pikiran?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Mari diskusikan bagaimana saya bisa membantu mewujudkan visi digital
            Anda. <strong>Konsultasi pertama gratis!</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://api.whatsapp.com/send/?phone=6281384528791"
              className="px-8 py-4 bg-white text-blue-400 font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Hubungi Sekarang
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all"
            >
              Lihat Portfolio
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
