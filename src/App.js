import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Header from "./routes/Header";
import Home from "./routes/Home";
import Nopage from "./routes/Nopage";
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Nopage />} />
                <Route path="/movie/:id" element={<Detail />} />
            </Routes>
        </Router>
    );
}

export default App;
