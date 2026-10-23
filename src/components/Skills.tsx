
import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
} from "../Variants";

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      description: "Semantic and accessible web structure",
    },
    {
      name: "CSS3",
      description: "Responsive layouts and modern styling",
    },
    {
      name: "JavaScript",
      description: "Interactive and dynamic web applications",
    },
    {
      name: "React.js",
      description: "Reusable and component-based UI development",
    },
    {
      name: "TypeScript",
      description: "Type-safe and scalable application development",
    },
    {
      name: "Tailwind CSS",
      description: "Modern and responsive UI design",
    },
    {
      name: "Git & GitHub",
      description: "Version control and collaborative development",
    },
    {
      name: "REST APIs",
      description: "API integration and data handling",
    },
  ];

  return (
    <motion.section
      id="skills"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="py-20 px-6 bg-gray-50 dark:bg-gray-950"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          className="text-center mb-12"
        >
          <motion.p
            variants={fadeUp}
            className="text-cyan-500 font-semibold"
          >
            MY SKILLS
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mt-2 dark:text-white"
          >
            Technologies I Work With
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            I use modern frontend technologies to build responsive,
            interactive, and user-friendly web applications.
          </motion.p>
        </motion.div>

        {/* Skills */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={fadeUp}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="
                p-6 rounded-2xl
                border border-gray-400
                dark:border-gray-800
                bg-white dark:bg-gray-900
                dark:text-white
                cursor-pointer
              "
            >
              <motion.h3
                variants={fadeUp}
                className="text-xl font-bold"
              >
                {skill.name}
              </motion.h3>

              <motion.p
                variants={fadeUp}
                className="text-gray-600 dark:text-gray-400 mt-3"
              >
                {skill.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Skills;

