import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Skills from './components/Skills'
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar/>

      <div className="container">
        <Home/>
        <About/>
        <Skills/>
        <Contact/>
        
      </div>

      <Footer/>

    </div>

  );
}

export default App;
