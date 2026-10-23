
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import {
  fadeLeft,
  fadeRight,
  fadeUp,
  staggerContainer,
} from "../Variants";

import { useState, type FormEvent } from "react";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "363b38e6-02d5-4bbe-ad4b-e683339e67e5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <motion.section
      id="contact"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
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
            CONTACT
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mt-2 dark:text-white"
          >
            Let's Work Together
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            Have a project in mind or looking for a Front-End Developer?
            Feel free to get in touch. I'd love to hear from you.
          </motion.p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <motion.div
            variants={fadeLeft}
          >
            <motion.h3
              variants={fadeLeft}
              className="text-2xl font-bold mb-6 dark:text-white"
            >
              Get In Touch
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="text-gray-600 dark:text-gray-400 leading-7 mb-8"
            >
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your team.
            </motion.p>

            {/* Contact Items */}
            <motion.div
              variants={staggerContainer}
              className="space-y-6"
            >

              {/* Email */}
              <motion.div
                variants={fadeLeft}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <div
                  className="
                    p-3 rounded-lg
                    bg-cyan-100 dark:bg-cyan-950
                    text-cyan-500
                  "
                >
                  <Mail size={22} />
                </div>

                <div>
                  <p className="font-semibold dark:text-white">
                    Email
                  </p>

                  <p className="text-gray-600 dark:text-gray-400">
                    yourname@gmail.com
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={fadeLeft}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <div
                  className="
                    p-3 rounded-lg
                    bg-cyan-100 dark:bg-cyan-950
                    text-cyan-500
                  "
                >
                  <Phone size={22} />
                </div>

                <div>
                  <p className="font-semibold dark:text-white">
                    Phone
                  </p>

                  <p className="text-gray-600 dark:text-gray-400">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                variants={fadeLeft}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <div
                  className="
                    p-3 rounded-lg
                    bg-cyan-100 dark:bg-cyan-950
                    text-cyan-500
                  "
                >
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="font-semibold dark:text-white">
                    Location
                  </p>

                  <p className="text-gray-600 dark:text-gray-400">
                    India
                  </p>
                </div>
              </motion.div>

            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              className="flex gap-4 mt-8"
            >

              {/* GitHub */}
              <motion.a
                href="https://github.com/duddulokeshkumar-cell"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.15,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="
                  p-3 rounded-full border
                  border-gray-300 dark:border-gray-700
                  hover:bg-cyan-500 hover:text-white
                  transition dark:text-white
                "
              >
                <FaGithub size={22} />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="#"
                whileHover={{
                  scale: 1.15,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="
                  p-3 rounded-full border
                  border-gray-300 dark:border-gray-700
                  hover:bg-cyan-500 hover:text-white
                  transition dark:text-white
                "
              >
                <FaLinkedin size={22} />
              </motion.a>

            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={onSubmit}
            variants={fadeRight}
            className="
              p-6 md:p-8 rounded-2xl
              bg-white dark:bg-gray-950
              border border-gray-200 dark:border-gray-400
              shadow-sm
            "
          >

            {/* Name + Email */}
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-5"
            >

              {/* Name */}
              <motion.div variants={fadeUp}>
                <label htmlFor="contact-name" className="block mb-2 font-medium dark:text-white">
                  Your Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  maxLength={100}
                  required
                  placeholder="Enter your name"
                  className="
                    w-full px-4 py-3 rounded-lg
                    border border-gray-300 dark:border-gray-700
                    bg-transparent outline-none
                    focus:border-cyan-500
                    dark:text-gray-100
                  "
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeUp}>
                <label htmlFor="contact-email" className="block mb-2 font-medium dark:text-white">
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  required
                  placeholder="Enter your email"
                  className="
                    w-full px-4 py-3 rounded-lg
                    border border-gray-300 dark:border-gray-700
                    bg-transparent outline-none
                    focus:border-cyan-500
                    dark:text-gray-100
                  "
                />
              </motion.div>

            </motion.div>

            {/* Subject */}
            <motion.div
              variants={fadeUp}
              className="mt-5"
            >
              <label htmlFor="contact-subject" className="block mb-2 font-medium dark:text-white">
                Subject
              </label>

              <input
                id="contact-subject"
                name="subject"
                type="text"
                maxLength={200}
                required
                placeholder="Enter subject"
                className="
                  w-full px-4 py-3 rounded-lg
                  border border-gray-300 dark:border-gray-700
                  bg-transparent outline-none
                  focus:border-cyan-500
                  dark:text-gray-100
                "
              />
            </motion.div>

            {/* Message */}
            <motion.div
              variants={fadeUp}
              className="mt-5"
            >
              <label htmlFor="contact-message" className="block mb-2 font-medium dark:text-white">
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                maxLength={5000}
                required
                placeholder="Write your message..."
                className="
                  w-full px-4 py-3 rounded-lg
                  border border-gray-300 dark:border-gray-700
                  bg-transparent outline-none
                  dark:text-gray-100
                  focus:border-cyan-500
                  resize-none
                "
              />
            </motion.div>

            <motion.button
              variants={fadeUp}
              type="submit"
              className="
                mt-6 w-full rounded-lg bg-cyan-500 px-4 py-3
                font-semibold text-white transition hover:bg-cyan-600
                 focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-cyan-500
              "
            >
              Send Message
            </motion.button>

            {result && (
              <p role="status" className="mt-4 text-center dark:text-gray-200">
                {result}
              </p>
            )}

          </motion.form>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
