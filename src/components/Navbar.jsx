import React from "react";

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="navbar">
      <button onClick={() => onNavigate("perfil")} id="perfil-btn">Perfil</button>
      <button onClick={() => onNavigate("estudios")} id="estudios-btn">Estudios</button>
      <button onClick={() => onNavigate("skills")} id="skills-btn">Skills</button>
      <button onClick={() => onNavigate("certificados")} id="certificados-btn">Certificados</button>
    </nav>
  );
};

export default Navbar;
