import Navbar from "./components/Navbar";
import "./index.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home, Projects, About, Contact } from "./pages/index.js";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
