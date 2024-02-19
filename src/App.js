import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Skills from './components/Skills'
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App container">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>

    </div>

  );
}

export default App;
