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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-graphite"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
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
