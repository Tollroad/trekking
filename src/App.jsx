import "./App.css";
import Shop1 from "./components/Shop1";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Donate from './components/Donate'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About/>} />
      <Route path="/Shop1" element={<Shop1/>} />
      <Route path="/Donate" element={<Donate/>} />
      <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
