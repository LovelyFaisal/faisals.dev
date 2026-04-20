import Hero from "@/components/hero";
import Articles from "@/components/articles";
import Testimonials from "../components/testimonials";
import Skills from "./Skills";
import Projects from "./projects";
import Aboutme from "@/components/aboutMe";
import Education from "@/components/education";
import Contact from "@/components/contact";
export default function Home() {
  return (
    <div className="container">
      <Hero />
      {/* <Aboutme /> */}
      <Education />
      <Skills />
      <Articles />
      <Projects />
      <Contact />
    </div>
  );
}
