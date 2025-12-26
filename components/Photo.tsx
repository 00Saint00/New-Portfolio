"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      {/* image */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.5, ease: "easeIn" },
        }}
      >
        <motion.div
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute rounded-full overflow-hidden"
          style={{ clipPath: "circle(50%)" }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.5, duration: 0.5, ease: "easeInOut" },
          }}
        >
          <Image
            src="/assets/about.png"
            alt="photo"
            priority
            quality={100}
            fill
            className="object-contain scale-x-[-1]"
          />
          {/* Gradient fade at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-bg-primary to-transparent pointer-events-none z-10" />
        </motion.div>
      </motion.div>

      {/* circle */}
      <motion.svg
        className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, strokeDasharray: "24 10 0 0" }}
          animate={{
            opacity: 1,
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
