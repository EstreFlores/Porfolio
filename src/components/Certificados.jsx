import React from "react";
import CertificadoMUDI from '../assets/img-certi/CERTIFICADO MUDI.png';
import CertificadoUGO from '../assets/img-certi/CERTIFICADO UGO.png';
import CertificadoJuniorAchievement from '../assets/img-certi/CertificadoJuniorAchievement.png';
import CertificadoTerminoMD from '../assets/img-certi/Termino MD.png';

import '../Styles/Certificados.css';

function Certificados() {
    return (
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
    );
}

export default Certificados;
