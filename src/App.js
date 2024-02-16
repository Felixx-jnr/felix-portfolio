import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App container">
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
    </div>

  );
}

export default App;
