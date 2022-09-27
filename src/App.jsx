import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Shop1 from "./components/Shop1";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Donate from './components/Donate'
import { HashRouter } from "react-router-dom";
import AOS from 'aos';
import { useEffect } from "react";
import "aos/dist/aos.css";
// import { HashRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }
  , []);
  return (
    <>
      {/* <Navbar /> */}
      <HashRouter>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/About" element={<About/>} />
      <Route exact path="/Shop1" element={<Shop1/>} />
      <Route exact path="/Donate" element={<Donate/>} />
      <Route exact path="/Contact" element={<Contact/>} />
      </Routes>
      </HashRouter>
    </>
  );
}

export default App;
