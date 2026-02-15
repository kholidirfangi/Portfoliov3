"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedRoleProps {
  roles?: string[];
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
  stayDuration = 3000,
  className = "",
}: AnimatedRoleProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, stayDuration);

    return () => clearInterval(timer);
  }, [roles.length, stayDuration]);

  return (
    <div className={`xl:min-h-[100] flex items-center justify-start mb-3 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentRoleIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
          className="text-2xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
        >
          {roles[currentRoleIndex]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}