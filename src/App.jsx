import "./App.css";
import Aboutme from "./components/Aboutme";
import Contactme from "./components/Contactme";
import Expirence from "./components/Expirence";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Project from "./components/Projects";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Herosection />
        <Aboutme />
        <Expirence />
        <Project />
        <Contactme />
      </div>
    </>
  );
}

export default App;
