import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Agradecimiento.module.css'; 
import '../Styles/Header.css'; 



function Header() {
    return (
        <header className="header">
            <a href="#home" className="logo">
                Estrella <span>Flores</span>
            </a>
            <i className="bx bx-menu" id="menu-icon"></i>
            <nav className="navbar">
                <Link to="/" className="active">Home</Link>
                <Link to="/sobremi">Sobre mí</Link>
                <Link to="/proyectos">Proyectos</Link>
                <Link to="/certificados">Certificados</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>
            <div className="theme-toggle" id="theme-toggle">
                <i className="bx bx-sun" id="theme-icon"></i>
            </div>
        </header>
    );
}

export default Header;



