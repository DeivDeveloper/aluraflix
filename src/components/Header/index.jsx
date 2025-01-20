import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './logo.png';
import { Button } from '../Button';

function Header() {

    return (
        <header className={styles.header}>
            <>
                <Link to="./">
                    <img className={styles.logo} src={logo} alt="LogoAluraFlix" />
                </Link>

                <nav className={styles.menu}>
                    <Button condition="true" url="./" >
                        HOME
                    </Button>
                    <Button condition="true" url="./añadir_video" >
                        NUEVO VIDEO
                    </Button>
                </nav>
            </>
        </header>
    );
}

export default Header;
