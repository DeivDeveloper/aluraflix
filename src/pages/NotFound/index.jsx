import styles from './NotFound.module.css'
import { FaExclamationTriangle } from "react-icons/fa";

function NotFound() {
    return (
        <section className={styles.container}>
            <FaExclamationTriangle className={styles.icon} />
            <h2>Oops! <br /> The content you are looking for was not found!</h2>
        </section>
    )
}

export default NotFound
