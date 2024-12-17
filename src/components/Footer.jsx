import React from "react";
import '../Styles/Footer.css';


function Footer() {
    return (
        
<footer className="footer">
    <div class="social-icons">
        <a href="#"><i class='bx bxl-gmail'></i></a>
        <a href="#"><i class='bx bxl-linkedin-square'></i></a>
        <a href="#"><i class='bx bxl-github'></i></a>
        <a href="#"><i class='bx bxl-instagram'></i></a>
   
    </div>

    <ul class="list">
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Proyecto</a></li>
        <li><a href="#">Certificados</a></li>
        <li><a href="#">Sobre Mi</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Privacy Policy</a></li>
    </ul>

    <p class="copyright">© 2024 Estrella Flores. Código, creatividad y derechos reservados.</p>

</footer>
    );
}

export default Footer;

