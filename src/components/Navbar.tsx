import { useState } from "react";
import Theme from "./Theme";
import { MenuIcon, XIcon } from "lucide-react";
import {motion} from 'framer-motion'
import { fadeDown } from "../Variants";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <motion.nav
    variants={fadeDown}
      initial="hidden"
      animate="visible"
    
     className="sticky top-0 z-50 border-b border-gray-400
    ">
      {/* Navbar */}
      <div className="flex items-center justify-between p-3 bg-white dark:text-white dark:bg-black
      ">

        <h1 className="font-bold text-2xl">
          PORTFOLIO
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-center gap-6
        ">
          <a href="#home" className="hover:text-cyan-400">Home</a>
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
        </div>

        <div className="flex items-center gap-3">
          <Theme />

          {/* Connect */}
          <a href="#contact"><button className="border border-gray-600 rounded-full px-3 
          py-2 hidden md:block cursor-pointer hover:bg-gray-300
          hover:dark:bg-black hover:scale-110 hover:-translate-y-1 hover:shadow-2xl">
            Connect
          </button></a>

          {/* Mobile Menu Button */}
          <div className="md:hidden cursor-pointer">
            {!menu ? (
              <MenuIcon
                size={30}
                onClick={() => setMenu(true)}
              />
            ) : (
              <XIcon
                size={30}
                onClick={() => setMenu(false)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden absolute top-full right-0 w-full
                        bg-gray-900 text-white dark:bg-black
                        flex flex-col items-center gap-5 py-6
                        font-bold text-xl shadow-lg">
           <a href="#home" onClick={() => setMenu(false)}>
            Home
          </a>

           <a href="#about" onClick={() => setMenu(false)}>
            About
          </a>
          
          <a href="#projects" onClick={() => setMenu(false)}>
            Projects
          </a>

          <a href="#contact" onClick={() => setMenu(false)}>
            Contact
          </a>

          <a href="#skills" onClick={() => setMenu(false)}>
            Skills
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;