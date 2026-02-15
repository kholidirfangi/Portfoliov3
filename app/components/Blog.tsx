"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Sparkles,
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  Code,
  Lightbulb,
  Rocket,
  Search,
} from "lucide-react";

const Blog = () => {
  const headerRef = useRef(null);
  const featuredRef = useRef(null);
  const postsRef = useRef(null);
  const categoriesRef = useRef(null);
  const ctaRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const featuredInView = useInView(featuredRef, { once: true, amount: 0.2 });
  const postsInView = useInView(postsRef, { once: true, amount: 0.1 });
  const categoriesInView = useInView(categoriesRef, {
    once: true,
    amount: 0.3,
  });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { name: "All", count: 12, color: "from-blue-400 to-cyan-400" },
    { name: "Web Development", count: 5, color: "from-purple-400 to-pink-400" },
    { name: "UI/UX Design", count: 3, color: "from-green-400 to-emerald-400" },
    { name: "Tips & Tricks", count: 4, color: "from-orange-400 to-red-400" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Cara Optimasi Performance Website Next.js 14",
      excerpt:
        "Pelajari teknik-teknik terbaru untuk meningkatkan kecepatan loading website Next.js Anda hingga 10x lebih cepat",
      category: "Web Development",
      author: {
        name: "Kholid",
        avatar: "/avatar.jpg",
      },
      date: "15 Feb 2026",
      readTime: "8 min read",
      image: "/blog/nextjs-optimization.jpg",
      tags: ["Next.js", "Performance", "SEO"],
      featured: true,
      views: "2.3K",
    },
    {
      id: 2,
      title: "10 Prinsip UI/UX yang Harus Diketahui Developer",
      excerpt:
        "Desain yang baik bukan hanya tentang estetika, tapi juga tentang pengalaman pengguna yang seamless",
      category: "UI/UX Design",
      author: {
        name: "Kholid",
        avatar: "/avatar.jpg",
      },
      date: "12 Feb 2026",
      readTime: "6 min read",
      image: "/blog/uiux-principles.jpg",
      tags: ["Design", "UX", "UI"],
      featured: false,
      views: "1.8K",
    },
    {
      id: 3,
      title: "TypeScript Best Practices untuk Project Besar",
      excerpt:
        "Tips dan trik menggunakan TypeScript untuk menjaga code quality di project skala enterprise",
      category: "Web Development",
      author: {
        name: "Kholid",
        avatar: "/avatar.jpg",
      },
      date: "10 Feb 2026",
      readTime: "10 min read",
      image: "/blog/typescript-best.jpg",
      tags: ["TypeScript", "Best Practices", "Code Quality"],
      featured: false,
      views: "3.1K",
    },
    {
      id: 4,
      title: "Tailwind CSS: Utility-First Framework yang Powerful",
      excerpt:
        "Mengapa Tailwind CSS menjadi pilihan utama developer modern dan bagaimana cara memaksimalkannya",
      category: "Tips & Tricks",
      author: {
        name: "Kholid",
        avatar: "/avatar.jpg",
      },
      date: "8 Feb 2026",
      readTime: "5 min read",
      image: "/blog/tailwind-css.jpg",
      tags: ["Tailwind", "CSS", "Frontend"],
      featured: true,
      views: "2.7K",
    },
    {
      id: 5,
      title: "Membuat Animasi Smooth dengan Framer Motion",
      excerpt:
        "Tutorial lengkap menggunakan Framer Motion untuk animasi React yang buttery smooth",
      category: "Web Development",
      author: {
        name: "Kholid",
        avatar: "/avatar.jpg",
      },
      date: "5 Feb 2026",
      readTime: "7 min read",
      image: "/blog/framer-motion.jpg",
      tags: ["Animation", "Framer Motion", "React"],
      featured: false,
      views: "1.5K",
    },
    {
      id: 6,
      title: "5 Tools Wajib untuk Frontend Developer 2026",
      excerpt:
        "Daftar tools yang akan meningkatkan produktivitas dan kualitas kode Anda di tahun 2026",
      category: "Tips & Tricks",
      author: {
        name: "Kholid",
        avatar: "/avatar.jpg",
      },
      date: "2 Feb 2026",
      readTime: "4 min read",
      image: "/blog/dev-tools.jpg",
      tags: ["Tools", "Productivity", "Frontend"],
      featured: false,
      views: "2.1K",
    },
  ];

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const featuredPosts = blogPosts.filter((post) => post.featured);
  // const recentPosts = blogPosts.slice(0, 3);

  return (
    <section
      id="blog"
      className="py-20 px-4"
    >
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
            <span className="text-blue-400 font-semibold">Blog & Insights</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Berbagi{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Pengetahuan
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Tips, tutorial, dan insight seputar web development, UI/UX design,
            dan teknologi terkini
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari artikel..."
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-colors"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Categories */}
        <motion.div
          ref={categoriesRef}
          initial={{ opacity: 0, y: 20 }}
          animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={categoriesInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.name)}
              className={`p-6 rounded-2xl transition-all ${
                activeCategory === category.name
                  ? `bg-linear-to-r ${category.color} text-white shadow-lg`
                  : "bg-white text-gray-600 hover:shadow-lg"
              }`}
            >
              <div className="text-2xl font-bold mb-1">{category.count}</div>
              <div className="text-sm font-semibold">{category.name}</div>
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Posts */}
        {activeCategory === "All" && featuredPosts.length > 0 && (
          <motion.div
            ref={featuredRef}
            initial={{ opacity: 0, y: 20 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-slate-800">
                Featured Articles
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={featuredInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  {/* Image */}
                  <div className="relative h-64 bg-linear-to-br from-blue-100 to-cyan-100 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center">
                      <Code className="w-20 h-20 text-blue-400/30" />
                    </div>

                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-linear-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full">
                      ⭐ FEATURED
                    </div>

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-400 text-xs font-semibold rounded-full">
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="text-blue-400 font-semibold">
                        {post.views} views
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-50 text-blue-400 text-xs rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all"
                    >
                      Baca Selengkapnya
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Posts Grid */}
        <motion.div
          ref={postsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={postsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-bold text-slate-800">
              {activeCategory === "All" ? "All Articles" : activeCategory}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={postsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Image */}
                <div className="relative h-48 bg-linear-to-br from-blue-50 to-cyan-50 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center">
                    <Rocket className="w-16 h-16 text-blue-400/30" />
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm text-blue-400 text-xs font-semibold rounded-full">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-blue-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          {filteredPosts.length > 6 && (
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-linear-to-r from-blue-400 to-cyan-400 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Load More Articles
              </motion.button>
            </div>
          )}
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-linear-to-r from-blue-400 to-cyan-400 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Jangan Lewatkan Update Terbaru!
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Subscribe untuk mendapatkan artikel terbaru, tips, dan insight
              langsung ke inbox Anda
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Email Anda..."
                className="flex-1 max-w-md px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-400 font-bold rounded-full hover:bg-gray-100 transition-all"
              >
                Subscribe
              </motion.button>
            </div>

            <p className="text-sm mt-4 opacity-75">
              No spam, unsubscribe kapan saja ✌️
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
