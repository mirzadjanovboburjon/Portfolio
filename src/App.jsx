import Navbar from "./components/Navbar";
import Hamburger from "./components/Hamburger";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="main">
      <Navbar />
      <Hamburger />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
