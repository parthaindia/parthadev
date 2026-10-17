import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Instructor from "./components/Instructor";
import Curriculum from "./components/Curriculum";
import Why from "./components/Why";
import Projects from "./components/Projects";
import Roadmap from "./components/Roadmap";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Instructor />
        <Curriculum />
        <Why />
        <Projects />
        <Roadmap />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
