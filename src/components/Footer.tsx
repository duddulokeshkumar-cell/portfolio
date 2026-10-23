
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import {
  fadeUp,
  staggerContainer,
} from "../Variants";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 dark:bg-black text-white"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo / Name */}
          <motion.div
            variants={fadeUp}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl font-bold">
              Lokesh
            </h2>

            <p className="text-gray-400 mt-2">
              Front-End Developer
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.a
              variants={fadeUp}
              href="#home"
              whileHover={{ y: -2 }}
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              Home
            </motion.a>

            <motion.a
              variants={fadeUp}
              href="#about"
              whileHover={{ y: -2 }}
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              About
            </motion.a>

            <motion.a
              variants={fadeUp}
              href="#skills"
              whileHover={{ y: -2 }}
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              Skills
            </motion.a>

            <motion.a
              variants={fadeUp}
              href="#projects"
              whileHover={{ y: -2 }}
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              Projects
            </motion.a>

            <motion.a
              variants={fadeUp}
              href="#contact"
              whileHover={{ y: -2 }}
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              Contact
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeUp}
            className="flex gap-4"
          >
            <motion.a
              href="https://github.com/duddulokeshkumar-cell"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.12,
                y: -4,
              }}
              whileTap={{
                scale: 0.9,
              }}
              transition={{ duration: 0.2 }}
              className="p-3 rounded-full border border-gray-700
                         hover:bg-cyan-500 hover:border-cyan-500
                         transition"
            >
              <FaGithub size={20} />
            </motion.a>

            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.12,
                y: -4,
              }}
              whileTap={{
                scale: 0.9,
              }}
              transition={{ duration: 0.2 }}
              className="p-3 rounded-full border border-gray-700
                         hover:bg-cyan-500 hover:border-cyan-500
                         transition"
            >
              <FaLinkedin size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          className="border-t border-gray-700 my-8"
        />

        {/* Bottom Section */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col md:flex-row
                     items-center justify-between gap-3"
        >
          <p className="text-gray-400 text-sm">
            © 2026 Lokesh. All rights reserved.
          </p>

          <p className="text-gray-400 text-sm">
            Built with React & Tailwind CSS
          </p>
        </motion.div>

      </div>
    </motion.footer>
  );
};

export default Footer
