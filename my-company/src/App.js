import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} ></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/services' element={<Services />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
