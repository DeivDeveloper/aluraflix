import styles from './Footer.module.css';
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import logo from './logo.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className={styles.footer}>
            <Link to="./" className={styles.logo}>
                <img src={logo} alt="LogoAluraFlix"/>
            </Link>
            <h2 className={styles.text}>Desarrollado por David Serna Restrepo</h2>
            <div className={styles.socialMedia}>
                <a href="https://github.com/DeivDeveloper" target="_blank" rel="noopener noreferrer" >
                    <IoLogoGithub className={styles.icon} alt="GitHub icon" />
                </a>
                <a href="https://www.linkedin.com/in/david-serna-restrepo-ingesis/" target="_blank" rel="noopener noreferrer" >
                    <IoLogoLinkedin className={styles.icon} alt="LinkedIn icon" />
                </a>
                <a href="https://www.instagram.com/deivserna/" target="_blank" rel="noopener noreferrer" >
                    <IoLogoInstagram className={styles.icon} alt="Instagram icon" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
