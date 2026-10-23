
import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
} from "../Variants";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto px-6 text-white w-full"
        >
          {/* Small Heading */}
          <motion.p
            variants={fadeUp}
            className="text-cyan-400 font-semibold mb-3"
          >
            FRONT-END DEVELOPER
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold"
          >
            Hi, I'm{" "}
            <span className="text-cyan-400">
              Lokesh
            </span>
          </motion.h1>

          {/* Sub Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-3xl font-semibold mt-4"
          >
            I Build Modern & Interactive Websites
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-gray-300 text-lg leading-8"
          >
            I create responsive and user-friendly web experiences.
            Passionate about React, JavaScript, TypeScript, and modern
            UI design. I transform ideas into clean, interactive, and
            scalable interfaces. Focused on performance, usability,
            and great user experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex gap-4 mt-8"
          >
            {/* Projects Button */}
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                duration: 0.2,
              }}
              className="px-6 py-3 bg-cyan-500 rounded-lg font-semibold hover:bg-cyan-600 cursor-pointer"
            >
              View Projects
            </motion.a>

            {/* Resume Button */}
            <a href="/resume/Lokesh-Resume.pdf"
            download="Lokesh-Resume.pdf">
              <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                duration: 0.2,
              }}
              className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-black cursor-pointer"
            >
              Download Resume
            </motion.button></a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

