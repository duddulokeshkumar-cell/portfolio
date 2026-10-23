import About from "./About"
import Contact from "./Contact"
import Education from "./Education"
import Footer from "./Footer"
import Hero from "./Hero"
import Projects from "./Projects"
import Skills from "./Skills"


const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Education/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home