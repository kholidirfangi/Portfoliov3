"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Github,
  Twitter,
  Heart,
  ArrowUp,
  ExternalLink,
  FacebookIcon,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const footerInView = useInView(footerRef, { once: true, amount: 0.1 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Proyek", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Kontak", href: "#contact" },
  ];

  const services = [
    { name: "Website Development", href: "#services" },
    // { name: "E-Commerce Solutions", href: "#services" },
    { name: "Landing Page", href: "#services" },
    // { name: "UI/UX Design", href: "#services" },
    { name: "Website Optimization", href: "#services" },
    // { name: "Dashboard & Admin", href: "#services" },
  ];

  const socialMedia = [
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/kholid.irfangi",
      color: "hover:text-pink-500",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/kholid-irfangi-4394a71a6/",
      color: "hover:text-blue-600",
    },
    {
      name: "Github",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/kholidirfangi",
      color: "hover:text-gray-800",
    },
    {
      name: "Facebook",
      icon: <FacebookIcon className="w-5 h-5" />,
      url: "https://facebook.com/kholidns",
      color: "hover:text-sky-500",
    },
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+62 813-8452-8791",
      href: "https://api.whatsapp.com/send/?phone=6281384528791",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      text: "kholidirfangi394@gmail.com",
      href: "mailto:kholidirfangi394@gmail.com",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "Kebumen, Indonesia",
      href: "#",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20 pb-8 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                Kholid.dev
              </h3>
              <p className="text-gray-400 text-sm">
                Frontend Developer & UI/UX Enthusiast
              </p>
            </div>

            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Membangun website modern dengan teknologi terkini. Dedikasi penuh
              untuk setiap project yang dikerjakan.
            </p>

            {/* Social Media */}
            <div className="flex gap-3">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={footerInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className={`p-3 bg-white/5 rounded-lg text-gray-400 ${social.color} transition-all hover:bg-white/10`}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">Link Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300" />
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">Layanan</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300" />
                  <Link href="">{service.name}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">Hubungi</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors text-sm group"
                >
                  <span className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-400/10 transition-colors">
                    {info.icon}
                  </span>
                  <span className="mt-1.5">{info.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-400 to-cyan-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Mulai Proyek Baru
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={footerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-8 pb-8"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-bold mb-3">Subscribe to Newsletter</h4>
            <p className="text-gray-400 text-sm mb-6">
              Get the latest updates, articles, and resources delivered to your
              inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address..."
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 focus:outline-none text-white placeholder-gray-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-linear-to-r from-blue-400 to-cyan-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div> */}

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={footerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <p className="text-gray-400 text-sm text-center md:text-left flex items-center gap-2">
            <span>© {currentYear} Kholid.dev. All rights reserved.</span>
            <span className="hidden md:inline">Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span className="hidden md:inline">in Kebumen</span>
          </p>

          {/* <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href=""
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href=""
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href=""
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Sitemap
            </Link>
          </div> */}
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={footerInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-4 bg-linear-to-r from-blue-400 to-cyan-400 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
