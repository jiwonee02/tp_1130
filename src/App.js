import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Aboutme from "./routes/Aboutme";
import Project from "./routes/Project";
import Contact from "./routes/Contact";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/aboutme" element={<Aboutme />}></Route>
                <Route path="/project" element={<Project />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
