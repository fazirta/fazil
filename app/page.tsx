"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#0F0715] max-w-screen-xl mx-auto h-screen">
      <div className="flex justify-between items-center py-24">
        <div className="max-w-2xl">
          <h2 className="flex text-4xl font-semibold">
            Hi,
            <motion.span
              animate={{ rotate: [10, -10] }}
              transition={{
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.5,
              }}
            >
              👋
            </motion.span>
            I am Fazil
          </h2>
          <h1 className="text-7xl font-bold bg-gradient-to-r from-[#8852F7] to-white inline-block text-transparent bg-clip-text py-4">
            Software Engineer
          </h1>
          <p className="text-gray-300 text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            velit possimus, suscipit iure nulla ab incidunt Iure ut ad eveniet
            nemo recusandae reiciendis numquam maxime.
          </p>
        </div>
        <div className="rounded-3xl bg-[#4D2E91] p-0.5 rotate-2 hover:rotate-0 transition-transform duration-300 cursor-pointer">
          <Image
            src="/images/photo.jpg"
            alt="Fazil Tirtana"
            width={320}
            height={400}
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
