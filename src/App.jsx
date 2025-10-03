import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Introduction from "./pages/Introduction.jsx";
import Fonctionnement from "./pages/Fonctionnement.jsx";
import Exemple from "./pages/Exemple.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <main className="pt-20 px-4 max-w-5xl mx-auto">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/fonctionnement" element={<Fonctionnement />} />
            <Route path="/exemple" element={<Exemple />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;