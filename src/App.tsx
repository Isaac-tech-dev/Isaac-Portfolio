import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className={`gap-[20px]`}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact/>
    </div>
  );
}

export default App;
