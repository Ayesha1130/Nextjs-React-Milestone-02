import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Footer from "@/components/Footer";



export default function Home(){
  return(
    <div>
      
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
     
    </div>
  )
}