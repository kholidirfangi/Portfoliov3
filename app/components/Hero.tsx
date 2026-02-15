"use client";
import Image from "next/image";
import AnimatedRole from "./AnimateRole";
import { motion } from "motion/react";

const About = () => {
  return (
    <section
      id="home"
      className="flex flex-col px-5 xl:flex-row xl:pt-44 xl:pb-32 xl:px-20 gap-10"
    >
      {/* left side */}
      <div className="w-full xl:w-1/2 mt-10 xl:mt-0">
        <div className="bg-linear-to-br from-blue-300 to-cyan-400 text-white px-3 rounded-r-full w-32 text-center mb-3">{`Hi, I'm Kholid`}</div>
        <AnimatedRole />
        <div className="text-slate-600 xl:text-lg">
          <p>{`Saya seorang pengembang web yang berfokus pada pengembangan antarmuka yang modern, responsive, dan performa yang bagus untuk memaksimalkan bisnis Anda.`}</p>
        </div>
        <div className="mt-10 flex flex-col md:flex-row gap-5 text-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://api.whatsapp.com/send/?phone=6281384528791"
            className="w-full md:w-auto bg-linear-to-r from-blue-400 to-cyan-400 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-500 cursor-pointer duration-300 "
          >
            Hubungi Saya
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="w-full md:w-auto text-white bg-linear-to-r from-black to-slate-800 font-semibold px-8 py-4 rounded-full hover:opacity-80 cursor-pointer"
          >
            Lihat Portfolio
          </motion.a>
        </div>
      </div>

      {/* right side */}
      <div className="w-full xl:w-1/2 flex justify-center items-center">
        <Image
          src="/saitama1.png"
          width={350}
          height={350}
          alt="avatar"
          className="md:ml-20"
        />
      </div>
    </section>
  );
};

export default About;
