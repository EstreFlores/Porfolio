import React from "react";
import "../Styles/Contacto.css";
import '../Styles/Footer.css'; 

function Contacto() {
    return (
        <>
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
        </>
    );
}

export default Contacto;
