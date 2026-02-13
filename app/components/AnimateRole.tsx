"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedRoleProps {
  roles?: string[];
  delayPerWord?: number;
  stayDuration?: number;
  className?: string;
}

export default function AnimatedRole({
  roles = [
    "Frontend Developer",
    "React Specialist",
    "Next.js Developer",
    "UI/UX Enthusiast",
  ],
  
  delayPerWord = 0.15, // Dalam detik untuk Framer Motion
  stayDuration = 2500,
  className = "",
}: AnimatedRoleProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const currentRole = roles[currentRoleIndex];
  const words = currentRole.split(" ");

  useEffect(() => {
    // words.length memastikan semua kata sudah muncul sebelum ganti role
    const totalAnimationTime = words.length * delayPerWord * 1000;
    

    const timer = setTimeout(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, totalAnimationTime + stayDuration);

    return () => clearTimeout(timer);
  }, [
    currentRoleIndex,
    delayPerWord,
    stayDuration,
    roles.length,
  ]);

  return (
    <div className={`min-h-[100] flex items-center justify-start ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentRoleIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap gap-2 items-center justify-center"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                delay: index * delayPerWord,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="text-3xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
