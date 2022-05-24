import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Serices from "./components/ServicesAll/Services";
import AboutUs from "./components/AboutUs/AboutUs";
import ServicesAll from "./components/ServicesAll/ServicesAll";
import Projects from "./components/Projects/Projects";
import Develop from "./components/Develop/Develop";

function App() {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Serices />
        <AboutUs />
        <ServicesAll />
        <Projects />
        <Develop />
      </div>
    </BrowserRouter>
  );
}

export default App;
