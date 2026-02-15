"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Smartphone,
  Palette,
  Zap,
  ShoppingCart,
  BarChart3,
  Sparkles,
  ArrowRight,
  Check,
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
      icon: <Code2 className="w-8 h-8" />,
      title: "Website Development",
      description:
        "Website modern dengan teknologi terkini: Next.js, React, TypeScript",
      features: [
        "Responsive di semua perangkat",
        "SEO-optimized",
        "Loading cepat & performa tinggi",
        "Code clean & maintainable",
      ],
      popular: true,
    },
    // {
    //   icon: <ShoppingCart className="w-8 h-8" />,
    //   title: "E-Commerce Solutions",
    //   description:
    //     "Toko online lengkap dengan sistem pembayaran dan manajemen produk",
    //   features: [
    //     "Integrasi payment gateway",
    //     "Admin dashboard",
    //     "Tracking order real-time",
    //     "Mobile-friendly checkout",
    //   ],
    //   popular: false,
    // },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Landing Page",
      description:
        "Halaman landing yang convert untuk produk, layanan, atau event Anda",
      features: [
        "Design eye-catching",
        "Fast loading speed",
        "Call-to-action optimization",
        "Analytics integration",
      ],
      popular: false,
    },
    // {
    //   icon: <Palette className="w-8 h-8" />,
    //   title: "UI/UX Design",
    //   description: "Desain antarmuka yang intuitif dan user-friendly",
    //   features: [
    //     "Wireframe & prototype",
    //     "User flow optimization",
    //     "Modern aesthetic",
    //     "Accessibility standard",
    //   ],
    //   popular: false,
    // },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Website Optimization",
      description: "Tingkatkan performa website existing Anda",
      features: [
        "Speed optimization",
        "SEO improvement",
        "Bug fixing",
        "Security enhancement",
      ],
      popular: false,
    },
    // {
    //   icon: <BarChart3 className="w-8 h-8" />,
    //   title: "Dashboard & Admin Panel",
    //   description: "Panel admin untuk kelola data dan konten dengan mudah",
    //   features: [
    //     "Data visualization",
    //     "CRUD operations",
    //     "User management",
    //     "Real-time updates",
    //   ],
    //   popular: false,
    // },
  ];

  const techStack = [
    { name: "Next.js 14", color: "from-gray-900 to-gray-700" },
    { name: "React", color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", color: "from-blue-600 to-blue-400" },
    { name: "Tailwind CSS", color: "from-cyan-500 to-blue-500" },
    { name: "Framer Motion", color: "from-purple-500 to-pink-500" },
    { name: "Node.js", color: "from-green-600 to-green-400" },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Konsultasi",
      description: "Diskusi kebutuhan dan ekspektasi Anda",
      duration: "30-60 menit",
    },
    {
      number: "02",
      title: "Proposal",
      description: "Timeline, budget, dan scope of work detail",
      duration: "1-2 hari",
    },
    {
      number: "03",
      title: "Development",
      description: "Coding dengan update progress rutin",
      duration: "1-4 minggu",
    },
    {
      number: "04",
      title: "Testing",
      description: "Quality assurance & bug fixing",
      duration: "2-5 hari",
    },
    {
      number: "05",
      title: "Launch",
      description: "Deploy & training penggunaan",
      duration: "1-2 hari",
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
            <span className="text-blue-400 font-semibold">
              Layanan Saya
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Apa yang Bisa{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Saya Bantu?
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Dari landing page sederhana hingga e-commerce kompleks, saya siap
            wujudkan visi digital Anda dengan teknologi terkini
          </p>

          {/* Tech Stack Pills */}
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

        {/* Services Grid */}
        <motion.div
          ref={servicesRef}
          initial={{ opacity: 0, y: 20 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group ${
                service.popular ? "border-2 border-blue-400" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 right-6 px-3 py-1 bg-linear-to-r from-blue-400 to-cyan-400 text-white text-xs font-bold rounded-full">
                  POPULER
                </div>
              )}

              <div className="mb-6">
                <div className="inline-flex p-4 bg-linear-to-br from-blue-400/10 to-cyan-400/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-4 bg-linear-to-r from-blue-400 to-cyan-400 text-white font-semibold rounded-xl flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all"
              >
                Mulai Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          ref={processRef}
          initial={{ opacity: 0, y: 20 }}
          animate={processInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Proses Kerja yang{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Terstruktur
            </span>
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Dari konsultasi hingga peluncuran, setiap tahap dirancang untuk hasil maksimal
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 transform -translate-y-1/2 opacity-20" />

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={processInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
                    {/* Number Badge */}
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
            Anda. Konsultasi pertama gratis!
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