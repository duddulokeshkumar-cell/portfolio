
import { motion } from "framer-motion";
import { fadeLeft, fadeUp, staggerContainer } from "../Variants";

const About = () => {
  return (
    <motion.section
      id="about"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="py-20 px-6 dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto">

        {/* Small Heading */}
        <motion.p
          variants={fadeLeft}
          className="text-cyan-500 font-semibold mb-2"
        >
          ABOUT ME
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          variants={fadeLeft}
          className="text-4xl font-bold mb-6 dark:text-white"
        >
          Turning Ideas Into{" "}
          <span className="text-cyan-500">
            Interactive Experiences
          </span>
        </motion.h2>

        {/* First Paragraph */}
        <motion.p
          variants={fadeUp}
          className="text-gray-600 dark:text-gray-300 text-lg leading-8"
        >
          I'm a passionate Front-End Developer focused on building modern,
          responsive, and user-friendly web applications. I enjoy transforming
          ideas and designs into clean, interactive interfaces that provide a
          great user experience.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          variants={fadeUp}
          className="text-gray-600 dark:text-gray-300 text-lg leading-8 mt-4"
        >
          I work primarily with HTML, CSS, JavaScript, React.js, TypeScript,
          and Tailwind CSS. I'm always interested in learning new technologies
          and building real-world projects.
        </motion.p>

      </div>
    </motion.section>
  );
};

export default About;

