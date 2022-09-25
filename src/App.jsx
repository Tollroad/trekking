import "./App.css";
import Shop1 from "./components/Shop1";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Donate from './components/Donate'
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      {/* <HashRouter> */}

      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/About" element={<About/>} />
      <Route exact path="/Shop1" element={<Shop1/>} />
      <Route exact path="/Donate" element={<Donate/>} />
      <Route exact path="/Contact" element={<Contact/>} />
      </Routes>
      {/* </HashRouter> */}
    </>
  );
}

export default App;
