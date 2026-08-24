import Hero from "@/components/hero";
import Articles from "@/components/articles";
import Testimonials from "@/components/testimonials";
import Skills from "./skills";
import Projects from "./projects";
import Aboutme from "@/components/about-me";
import Education from "@/components/education";
import Contact from "@/components/contact";
import Free from "./free";
import AnimatedItem from "@/components/animated-item";
import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      {/* <Aboutme /> */}
      {/* <Education /> */}

      <AnimatedItem delay={0.4}>
        <Newsletter />
      </AnimatedItem>
      <Skills />
      <Articles />
      <Free />
      <Projects />
      <Contact />
    </div>
  );
}
