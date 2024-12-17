import React from "react";
import { Link } from "react-router-dom"; // Importar Link para la navegación
import estrella from "../assets/img/estrella.png"; 
import '../Styles/SobreMi.css'; 
import '../Styles/Footer.css'; 
import '../Styles/Home.css'; 

function SobreMi() {
    return (
        <section className="sobremi" id="sobremi">
            <div className="sobremi-content">
                <div className="text-content">
                    <h2 className="heading">Sobre <span>mí</span></h2>
                    <div className="buttons">
                        <Link to="/perfil" id="perfil-btn" className="btn">Perfil</Link>
                        <Link to="/estudios" id="estudios-btn" className="btn">Estudios</Link>
                        <Link to="/skills" id="skills-btn" className="btn">Skills</Link>
                    </div>
                    <div id="perfil-content">
                        <p>
                            Desarrolladora front-end apasionada por la programación y la resolución de
                            problemas tecnológicos. Poseo experiencia en el desarrollo de proyectos
                            académicos y ahora busco ampliar mi experiencia en un entorno profesional
                            para fortalecer mis habilidades y contribuir al desarrollo de soluciones
                            innovadoras. Soy una persona con mentalidad de crecimiento y mejora
                            continua. Tengo gran capacidad de aprendizaje y adaptación, y estoy
                            dispuesta a asumir nuevos retos. Me motiva trabajar en equipo y colaborar
                            con otros profesionales para alcanzar objetivos comunes.
                        </p>
                    </div>
                </div>
                <div className="sobremi-img">
                    <img src={estrella} alt="Estrella" />
                </div>
            </div>
        </section>
    );
}

export default SobreMi;
