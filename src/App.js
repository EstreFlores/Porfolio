import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Certificados from "./components/Certificados";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Perfil from "./components/Perfil";
import Estudios from "./components/Estudios";
import Skills from "./components/Skills";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobremi" element={<SobreMi />} />
                <Route path="/proyectos" element={<Proyectos />} />
                <Route path="/certificados" element={<Certificados />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/estudios" element={<Estudios />} />
                <Route path="/skills" element={<Skills />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
