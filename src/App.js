import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Skills from './components/Skills'
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown"




function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}

      <div className="con">
        {/* <Home/>
        <About/>
        <Skills/>
        <Contact/> */}
        <Dropdown/>
        
        
        
      </div>

      {/* <Footer/> */}

    </div>

  );
}

export default App;
