import "./App.css";
import Header from "./components/Header";
import Project1 from "./components/project1/Project1.js";
import Project2 from "./components/project2/Project2.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Project1 />} />
          <Route path="/Project1" element={<Project1 />} />
          <Route path="/Project2" element={<Project2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
