import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import FeaturedProjects from "./components/FeaturedProjects";
import OtherProjects from "./components/OtherProjects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <FeaturedProjects />
        <OtherProjects />
        <Skills />
        <About />
      </main>
      <Contact />
    </div>
  );
}
