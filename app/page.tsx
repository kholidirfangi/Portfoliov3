import Hero from "./components/Hero";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Blog />
      <Contact />
      {/* decoration */}
      <div className="w-[250] h-[250] bg-radial from-cyan-100 to-blue-200 rounded-full fixed blur-3xl -top-20 -left-10 -z-10" />

      <div className="w-[300] h-[300] bg-radial from-red-50 to-orange-100 rounded-full fixed top-20 left-80 blur-3xl -z-10" />

      <div className="w-[250] h-[250] bg-radial from-blue-200 to-red-200 rounded-full fixed bottom-10 left-20 blur-3xl -z-10" />
    </main>
  );
}
