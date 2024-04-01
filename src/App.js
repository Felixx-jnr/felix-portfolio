import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
