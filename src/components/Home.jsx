import React from "react";

function Home() {
    return (
        <section className="home" id="home">
            <div className="home-img">
                <img src="img/estrella.png" alt="Estrella" />
            </div>
            <div className="home-content">
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
    );
}

export default Home;
