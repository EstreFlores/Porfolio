import React from "react";

function SobreMi() {
    return (
        <section className="sobremi" id="sobremi">
            <div className="sobremi-content">
                <div className="text-content">
                    <h2 className="heading">
                        Sobre <span>mí</span>
                    </h2>
                    <div className="buttons">
                        <a href="#" id="perfil-btn" className="btn">Perfil</a>
                        <a href="#" id="estudios-btn" className="btn">Estudios</a>
                        <a href="#" id="skills-btn" className="btn">Skills</a>
                    </div>
                    <div id="perfil-content">
                        <p>
                            Desarrolladora front-end apasionada por la programación...
                        </p>
                    </div>
                </div>
                <div className="sobremi-img">
                    <img src="img/estrella.png" alt="Estrella" />
                </div>
            </div>
        </section>
    );
}

export default SobreMi;
