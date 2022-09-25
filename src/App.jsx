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
      <Route path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Shop1" component={Shop1} />
      <Route path="/Donate" component={Donate} />
      <Route path="/Contact" component={Contact} />
      </Routes>
    </>
  );
}

export default App;
