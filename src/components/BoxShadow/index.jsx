import styles from './BoxShadow.module.css';

function BoxShadow({ category }) {
    
    return (

        <div className={styles.boxShadow} style={{ color: category }}></div>
    );
}

export default BoxShadow;
