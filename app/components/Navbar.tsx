"use client";

import { Menu, X } from "lucide-react";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Hide navbar on scroll down
    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Add backdrop blur when scrolled
    if (current > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Tentang", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Proyek", href: "#projects" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <motion.nav
        animate={{ y: hidden ? "-150%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-blue-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 inset-0 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full blur group-hover:blur-md transition-all" />
                <div className="h-12 w-12 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full">
                  {/* <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" /> */}
                  <Image
                    className="absolute left-1/2 top-1/2 -translate-1/2 "
                    src="/logoku.png"
                    width={35}
                    height={35}
                    alt="logo"
                  />
                </div>
              </div>
              <span className="text-xl md:text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Kholid.dev
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setActiveSection(item.href.substring(1))}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeSection === item.href.substring(1)
                      ? "bg-linear-to-r from-blue-400 to-cyan-400 text-white shadow-lg shadow-blue-500/50"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-400"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <motion.a
              href="https://api.whatsapp.com/send/?phone=6281384528791"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-400 to-cyan-400 text-white font-semibold rounded-full shadow-lg shadow-blue-500/50 hover:shadow-xl transition-all"
            >
              Kontak
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenMenu}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-blue-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-lg"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => {
                        setActiveSection(item.href.substring(1));
                        setIsOpen(false);
                      }}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                        activeSection === item.href.substring(1)
                          ? "bg-linear-to-r from-blue-400 to-cyan-400 text-white shadow-lg"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-400"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* CTA Button - Mobile */}
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                  href="https://api.whatsapp.com/send/?phone=6281384528791"
                  onClick={() => setIsOpen(false)}
                  className="block text-center px-4 py-3 mt-4 bg-linear-to-r from-blue-400 to-cyan-400 text-white font-semibold rounded-lg shadow-lg"
                >
                  {`Let's Talk`}
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from going under navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;
