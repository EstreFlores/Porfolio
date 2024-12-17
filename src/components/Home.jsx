import React from "react";
import { Link } from "react-router-dom"; // Importar Link para la navegación
import estrella from '../assets/img/estrella.png';


import CertificadoMUDI from '../assets/img-certi/CERTIFICADO MUDI.png';
import CertificadoUGO from '../assets/img-certi/CERTIFICADO UGO.png';
import CertificadoJuniorAchievement from '../assets/img-certi/CertificadoJuniorAchievement.png';
import CertificadoTerminoMD from '../assets/img-certi/Termino MD.png';

// Importación de estilos globales
import '../Styles/Footer.css';
import '../Styles/SobreMi.css';
import '../Styles/Navbar.css';
import '../Styles/Proyectos.css';
import '../Styles/Header.css';
import '../Styles/Certificados.css';
import '../Styles/Contacto.css';
import '../Styles/Home.css';

// Importación de componentes
import Header from './Header';

function Home() {
    return (
        <div className="home">
            {/* Encabezado del sitio */}
            <Header />

            {/* Sección principal */}
            <section className="home-content" id="home">
                <div className="home-img">
                    <img src={estrella} alt="Estrella" />
                </div>
                <div className="content">
                    <h1>
                        Hola, me llamo <span>Estrella</span>
                    </h1>
                    <h3 className="text-animation">
                        Yo soy <span></span>
                    </h3>
                    <div className="social-icons">
                        <a href="https://mail.google.com"><i className="bx bxl-gmail"></i></a>
                        <a href="#"><i className="bx bxl-linkedin-square"></i></a>
                        <a href="#"><i className="bx bxl-github"></i></a>
                        <a href="#"><i className="bx bxl-instagram"></i></a>
                    </div>
                    <div className="btn-container">
                        <a href="#" className="btn">Contrátame</a>
                        <a href="#" className="btn">Descargar CV</a>
                    </div>
                </div>
            </section>

            {/* Sección sobre mí */}
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

            <section class="proyectos" id="proyectos">
                <h2 class="heading">Mis <span>Proyectos</span></h2>
                <div class="proyecto-container">
                    <div class="proyecto proyecto-spotify">
                        <div class="proyecto-info">
                            <h3>Spotify clone</h3>
                            <p class="background-image">Este es un clon de Spotify creado como parte de un proyecto para JA México, en Mujer Digital.</p>
                            <div class="proyecto-btns">
                                <a href="https://spotify-clone-ef.netlify.app/" class="btn-demo" target="_blank">
                                    <i class='bx bxs-right-top-arrow-circle'></i> Demo
                                </a>
                                <a href="https://github.com/EstreFlores/spotify-clone" class="btn-codigo" target="_blank">
                                    <i class='bx bxl-github'></i> Código
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="proyecto proyecto-estilos">
                        <div class="proyecto-info">
                            <h3>El Mundo de perro</h3>
                            <p class="background-image">Un sitio web agradable de perros, se usaron los diferentes tipos de selectores.</p>
                            <div class="proyecto-btns">
                                <a href="https://mis-estilos.netlify.app" class="btn-demo">
                                    <i class='bx bxs-right-top-arrow-circle'></i> Demo
                                </a>
                                <a href="https://github.com/EstreFlores/Hojas-de-Estilo.git" class="btn-codigo">
                                    <i class='bx bxl-github'></i> Código
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="proyecto proyecto-reffindr">
                        <div class="proyecto-info">
                            <h3>Reffindr</h3>
                            <p class="background-image">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor eros vel ante tristique...</p>
                            <div class="proyecto-btns">
                                <a href="#" class="btn-demo">
                                    <i class='bx bxs-right-top-arrow-circle'></i> Demo
                                </a>
                                <a href="#" class="btn-codigo">
                                    <i class='bx bxl-github'></i> Código
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="proyecto proyecto-gifs">
                        <div class="proyecto-info">
                            <h3>Buscador de Gifs.</h3>
                            <p class="background-image">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor eros vel ante tristique...</p>
                            <div class="proyecto-btns">
                                <a href="https://buscadorgifss.netlify.app" class="btn-demo">
                                    <i class='bx bxs-play-circle'></i> Demo
                                </a>
                                <a href="https://github.com/EstreFlores/Portafolio-V2.git" class="btn-codigo">
                                    <i class='bx bxl-github'></i> Código
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="proyecto proyecto-otro4">
                        <div class="proyecto-info">
                            <h3>Proyecto 5</h3>
                            <p class="background-image">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor eros vel ante tristique...</p>
                            <div class="proyecto-btns">
                                <a href="#" class="btn-demo">
                                    <i class='bx bxs-right-top-arrow-circle'></i> Demo
                                </a>
                                <a href="#" class="btn-codigo">
                                    <i class='bx bxl-github'></i> Código
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="proyecto proyecto-otro5">
                        <div class="proyecto-info">
                            <h3>Proyecto 6</h3>
                            <p class="background-image">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor eros vel ante tristique...</p>
                            <div class="proyecto-btns">
                                <a href="#" class="btn-demo">
                                    <i class='bx bxs-right-top-arrow-circle'></i> Demo
                                </a>
                                <a href="#" class="btn-codigo">
                                    <i class='bx bxl-github'></i> Código
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="certificados-container">
                <h2 className="certi">Certificados de <span>Estrella</span></h2>
                <section className="certificados-carousel" id="certificados">
                    <div className="slider">
                        <img src={CertificadoMUDI} alt="Certificado MUDI" />
                        <img src={CertificadoUGO} alt="Certificado UGO!" />
                        <img src={CertificadoJuniorAchievement} alt="Certificado Junior Achievement" />
                        <img src={CertificadoTerminoMD} alt="Certificado Término MD" />
                    </div>
                </section>
            </div>

            <section className="contacto" id="contacto">
                <h2 className="heading">Contacto de <span>Estrella</span></h2>

                <form action="https://formsubmit.co/estrellaflores550@gmail.com" method="POST">
                    <div className="input-box">
                        <input type="text" name="nombre" placeholder="Nombre completo" required />
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="input-box">
                        <input type="tel" name="telefono" placeholder="Número telefónico" required />
                        <input type="text" name="asunto" placeholder="Asunto" required />
                    </div>
                    <textarea name="mensaje" cols="30" rows="10" placeholder="Tu mensaje" required></textarea>
                    <input type="submit" value="Enviar Mensaje" className="btn" />

                    {/* Quitando captcha y regresando a mi web */}
                    <input type="hidden" name="_next" value="http://localhost:3000/agradecimiento" />
                    <input type="hidden" name="_captcha" value="false" />
                </form>
            </section>



        </div>
    );
}

export default Home;
