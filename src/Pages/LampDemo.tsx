"use client";
import { motion } from "framer-motion";
import { LampContainer } from "../utils/lamp";

export function LampDemo() {
  return (
    <div className="relative">
      <div className=" absolute text-text bottom-0 w-full z-10 ">footer</div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <p className="text-wrap text-text">AeroTalk </p>

          <p className="text-xl mt-5 font-bold ">Real Time Chat Application</p>
        </motion.h1>
      </LampContainer>
    </div>
  );
}
