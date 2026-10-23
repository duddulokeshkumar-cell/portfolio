
import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
} from "../Variants";

const Projects = () => {
const projects = [
  {
    title: "Real Estate Website",
    description:
      "A modern and responsive real estate platform where users can explore properties, view details, and find suitable properties through an intuitive interface.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    live: "https://6a1daf7f05e7d00081b96968--zingy-bienenstitch-1fa819.netlify.app/",
    github: "https://github.com/duddulokeshkumar-cell/real-estate",
  },
  {
    title: "Hotel Booking Website",
    description:
      "A responsive hotel booking interface designed to help users explore hotels, check available rooms, and make bookings through a clean and user-friendly experience.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    live: "https://6abf460f3c6096664d88a010--stupendous-sorbet-f26ca2.netlify.app/",
    github: "https://github.com/duddulokeshkumar-cell/hotel-booking",
  },
  {
    title: "Grocery App",
    description:
      "This app is used to buy groceries through online with the help of grocery app.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800",
    technologies: ["React", "TypeScript", "REST API"],
    live: "https://agent-6a546e218400b91724fd--rococo-pothos-c1e673.netlify.app",
    github: "https://github.com/duddulokeshkumar-cell/react-grocery-app",
  },
  {
    title: "Youtube-Clone",
    description:
      "A responsive youtube-clone app to watch videos through online with the help of website.",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800",
    technologies: ["React", "TypeScript", "REST API"],
    live: "https://6adb6fbdf5b9f0b0e39e7824--mellifluous-donut-9d844f.netlify.app/",
    github: "https://github.com/duddulokeshkumar-cell/react-yt",
  },
];



  return (
    <motion.section
      id="projects"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      className="py-20 px-6 bg-white dark:bg-gray-900"
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
            MY WORK
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mt-2 dark:text-white"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            A selection of projects I've built using modern frontend
            technologies, focusing on responsive design, clean UI,
            and great user experiences.
          </motion.p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              whileHover={{
                y: -10,
                scale: 1.01,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="
                group overflow-hidden rounded-2xl
                border border-gray-500 dark:border-gray-400
                bg-gray-50 dark:bg-gray-900
                dark:text-white
              "
            >
              {/* Project Image */}
              <motion.div
                className="overflow-hidden"
                whileHover="hover"
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  variants={{
                    hover: {
                      scale: 1.08,
                    },
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="w-full h-56 object-cover"
                />
              </motion.div>

              {/* Content */}
              <div className="p-6">

                {/* Title */}
                <motion.h3
                  variants={fadeUp}
                  className="text-2xl font-bold"
                >
                  {project.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  variants={fadeUp}
                  className="text-gray-600 dark:text-gray-400 mt-3 leading-7"
                >
                  {project.description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  variants={staggerContainer}
                  className="flex flex-wrap gap-2 mt-5"
                >
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      variants={fadeUp}
                      whileHover={{
                        scale: 1.08,
                      }}
                      className="
                        px-3 py-1 text-sm rounded-full
                        bg-cyan-100 text-cyan-700
                        dark:bg-cyan-950 dark:text-cyan-300
                      "
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Buttons */}
                <motion.div
                  variants={fadeUp}
                  className="flex gap-4 mt-6"
                >
                  {/* Live Demo */}
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      px-5 py-2 rounded-lg
                      bg-cyan-500 text-white
                      hover:bg-cyan-600
                      transition
                    "
                  >
                    Live Demo
                  </motion.a>

                  {/* GitHub */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      px-5 py-2 rounded-lg
                      border border-gray-400
                      hover:bg-gray-200
                      dark:hover:bg-gray-800
                      transition
                    "
                  >
                    GitHub
                  </motion.a>
                </motion.div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Projects;
