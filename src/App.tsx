import "./App.css";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import { MagicalDivider } from "./components/MagicalDivider";
import Navbar from "./components/Navbar";
import ProjectsCarousel from "./components/ProjectsCarousel";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <MagicalDivider />
      <AboutMe />
      <MagicalDivider />
      <Experience />
      <MagicalDivider />
      <ProjectsCarousel />
      <MagicalDivider />
      <Skills />
      <MagicalDivider />
      <Footer />
    </>
  );
}

export default App;
