import React from "react";

function Proyectos() {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                Mis <span>Proyectos</span>
            </h2>
            <div className="proyecto-container">
                {/* Reemplaza los proyectos con tu información */}
                <div className="proyecto">
                    <h3>Spotify Clone</h3>
                    <p>Este es un clon de Spotify creado para JA México...</p>
                    <div className="proyecto-btns">
                        <a href="#" className="btn-demo">Demo</a>
                        <a href="#" className="btn-codigo">Código</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Proyectos;
