"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Sparkles,
  Code2,
  Palette,
  Zap,
  Filter,
  Github,
} from "lucide-react";

const Projects = () => {
  const headerRef = useRef(null);
  const filterRef = useRef(null);
  const projectsRef = useRef(null);
  const ctaRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const filterInView = useInView(filterRef, { once: true, amount: 0.3 });
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    { name: "All", icon: <Sparkles className="w-4 h-4" /> },
    { name: "Website", icon: <Code2 className="w-4 h-4" /> },
    { name: "E-Commerce", icon: <Zap className="w-4 h-4" /> },
    { name: "Landing Page", icon: <Palette className="w-4 h-4" /> },
  ];

  const projects = [
    {
      title: "Modern E-Commerce Platform",
      category: "E-Commerce",
      description:
        "Platform e-commerce lengkap dengan payment gateway, admin dashboard, dan real-time inventory management",
      image: "/projects/ecommerce.jpg", // Ganti dengan path image Anda
      tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: {
        duration: "4 Minggu",
        client: "Retail Store",
        year: "2024",
      },
    },
    {
      title: "SaaS Landing Page",
      category: "Landing Page",
      description:
        "Landing page modern untuk produk SaaS dengan animasi smooth dan conversion-focused design",
      image: "/projects/saas.jpg",
      tags: ["React", "Tailwind", "Framer Motion"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: {
        duration: "1 Minggu",
        client: "Tech Startup",
        year: "2024",
      },
    },
    {
      title: "Corporate Website",
      category: "Website",
      description:
        "Website perusahaan dengan CMS, blog system, dan contact form terintegrasi",
      image: "/projects/corporate.jpg",
      tags: ["Next.js", "Sanity CMS", "SEO"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: {
        duration: "3 Minggu",
        client: "Consulting Firm",
        year: "2024",
      },
    },
    {
      title: "Restaurant Menu App",
      category: "Website",
      description:
        "Aplikasi menu digital dengan QR code ordering dan real-time kitchen display",
      image: "/projects/restaurant.jpg",
      tags: ["React", "Firebase", "QR Code"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: {
        duration: "2 Minggu",
        client: "Local Restaurant",
        year: "2024",
      },
    },
    {
      title: "Fitness Tracker Dashboard",
      category: "Website",
      description:
        "Dashboard untuk tracking workout, nutrition, dan progress dengan data visualization",
      image: "/projects/fitness.jpg",
      tags: ["Next.js", "Chart.js", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: {
        duration: "3 Minggu",
        client: "Personal Project",
        year: "2024",
      },
    },
    {
      title: "Event Ticketing Platform",
      category: "E-Commerce",
      description:
        "Platform penjualan tiket event dengan seat selection dan e-ticket generation",
      image: "/projects/ticketing.jpg",
      tags: ["Next.js", "Stripe", "PDF Generation"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: {
        duration: "5 Minggu",
        client: "Event Organizer",
        year: "2024",
      },
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={headerInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-semibold">Portfolio Saya</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Project yang Telah{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Dikerjakan
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Berikut beberapa project yang telah saya kerjakan dengan dedikasi
            penuh untuk menghasilkan kualitas terbaik
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          ref={filterRef}
          initial={{ opacity: 0, y: 20 }}
          animate={filterInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={filterInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                activeFilter === category.name
                  ? "bg-linear-to-r from-blue-400 to-cyan-400 text-white shadow-lg shadow-blue-500/50"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.icon}
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={projectsRef}
          initial={{ opacity: 0 }}
          animate={projectsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-linear-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full shadow-lg">
                  ⭐ FEATURED
                </div>
              )}

              {/* Image Container */}
              <div className="relative h-64 bg-linear-to-br from-blue-50 to-cyan-50 overflow-hidden">
                {/* Placeholder linear jika belum ada image */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center">
                  <Code2 className="w-20 h-20 text-blue-400/30" />
                </div>

                {/* Uncomment jika sudah ada image */}
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                /> */}

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.demoUrl}
                      className="p-3 bg-white rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      className="p-3 bg-white rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition-colors"
                      title="Source Code"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="text-sm font-semibold text-slate-800">
                      {project.stats.duration}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Client</p>
                    <p className="text-sm font-semibold text-slate-800 truncate">
                      {project.stats.client}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Year</p>
                    <p className="text-sm font-semibold text-slate-800">
                      {project.stats.year}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-400 mb-2">
              Tidak Ada Project
            </h3>
            <p className="text-gray-500">
              Coba pilih kategori lain untuk melihat project
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center bg-linear-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Tertarik dengan Apa yang Anda Lihat?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Mari wujudkan project Anda berikutnya dengan kualitas yang sama atau
            bahkan lebih baik!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://api.whatsapp.com/send/?phone=6281384528791"
              className="px-8 py-4 bg-linear-to-r from-blue-400 to-cyan-400 text-white font-bold rounded-full shadow-lg shadow-blue-500/50 hover:shadow-xl transition-all"
            >
              Mulai Project Anda
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-bold rounded-full hover:bg-blue-500/10 transition-all"
            >
              Lihat Layanan Saya
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;