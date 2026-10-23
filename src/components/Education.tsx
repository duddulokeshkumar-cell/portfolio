
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeRight,
  staggerContainer,
} from "../Variants";

const Education = () => {
  return (
    <motion.section
      id="education"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="py-20 px-6 bg-gray-50 dark:bg-gray-950"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          className="text-center mb-12"
        >
          <motion.p
            variants={fadeUp}
            className="text-cyan-500 font-semibold"
          >
            EDUCATION
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mt-2 dark:text-white"
          >
            My Education
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 dark:text-gray-400 mt-4"
          >
            My academic journey and technical foundation.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-cyan-500 ml-4 md:ml-10">

          {/* Timeline Item */}
          <motion.div
            variants={fadeRight}
            className="relative pl-8 md:pl-10"
          >

            {/* Timeline Dot */}
            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="
                absolute -left-[9px] top-2
                w-4 h-4
                rounded-full
                bg-cyan-500
                border-4 border-gray-50
                dark:border-gray-950
              "
            />

            {/* Education Card */}
            <motion.div
              variants={fadeRight}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="
                p-6 md:p-8
                rounded-2xl
                bg-white dark:bg-gray-900
                border border-gray-200 dark:border-gray-800
                shadow-sm hover:shadow-lg
                dark:text-white
              "
            >
              {/* Year */}
              <motion.span
                variants={fadeUp}
                className="text-cyan-500 font-semibold"
              >
                2023 - 2026
              </motion.span>

              {/* Degree */}
              <motion.h3
                variants={fadeUp}
                className="text-2xl font-bold mt-2"
              >
                Bachelor of Technology (B.Tech)
              </motion.h3>

              {/* Branch */}
              <motion.h4
                variants={fadeUp}
                className="text-lg font-semibold mt-2 text-gray-700 dark:text-gray-300"
              >
                Computer Science & Engineering
              </motion.h4>

              {/* College */}
              <motion.p
                variants={fadeUp}
                className="mt-2 text-gray-600 dark:text-gray-300"
              >
                Raghu Engineering College
              </motion.p>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="mt-4 text-gray-600 dark:text-gray-400 leading-7"
              >
                Developed a strong foundation in programming, web development,
                data structures, databases, and software development.
                Focused on building practical projects and improving
                front-end development skills.
              </motion.p>

              {/* Skills */}
              <motion.div
                variants={staggerContainer}
                className="flex flex-wrap gap-2 mt-5"
              >
                {[
                  "Computer Science",
                  "Web Development",
                  "Programming",
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    variants={fadeUp}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="
                      px-3 py-1
                      rounded-full
                      text-sm
                      bg-cyan-100 text-cyan-700
                      dark:bg-cyan-950 dark:text-cyan-300
                    "
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

            </motion.div>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
};

export default Education
