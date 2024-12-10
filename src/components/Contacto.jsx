import React from "react";

function Contacto() {
    return (
        <section className="contacto" id="contacto">
            <h2 className="heading">
                Contacto de <span>Estrella</span>
            </h2>
            <form action="https://formsubmit.co/estrellaflores550@gmail.com" method="POST">
                <div className="input-box">
                    <input type="text" name="nombre" placeholder="Nombre completo" required />
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <textarea name="mensaje" cols="30" rows="10" placeholder="Tu mensaje" required></textarea>
                <input type="submit" value="Enviar Mensaje" className="btn" />
            </form>
        </section>
    );
}

export default Contacto;
