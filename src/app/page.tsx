import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
    </main>
  );
}
