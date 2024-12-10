import React from "react";
import { Link } from 'react-router-dom'; // Importar Link
import styles from "../Styles/Agradecimiento.module.css";

const Agradecimiento = () => {
    return (
        <div className={styles.body}>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.logo}>Estrella Iveth</div>
                <nav className={styles.navbar}>
                    {/* Usar Link en lugar de <a> para navegación interna */}
                    <Link to="/" className={styles.link}>Inicio</Link>
                    <Link to="/#proyectos" className={styles.link}>Proyectos</Link>
                    <Link to="/#sobremi" className={styles.link}>Sobre mí</Link>
                </nav>
            </header>

            <div className={styles.spacer}></div>

            {/* Sección de agradecimiento */}
            <section className={styles.thankYou}>
                <div className={styles.thankYouContent}>
                    <h1>¡Gracias por comunicarte conmigo!</h1>
                    <p>Te respondo lo más pronto posible.</p>
                    <div className={styles.btnContainer}>
                        {/* Usar Link en lugar de <a> para navegación interna */}
                        <Link to="/" className={styles.btn}>Volver al Inicio</Link>
                        <Link to="/#proyectos" className={styles.btn}>Ver Proyectos</Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>&copy; 2024 Estrella Iveth Flores Lucas. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Agradecimiento;
