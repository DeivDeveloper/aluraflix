import styles from './DropdownList.module.css';

function DropdownList({ label, onChange, value, required = false, items, placeholder }) {
    return (
        <div className={styles.dropdownList}>
            <label>{label}</label>
            <select className={styles.inputField}
                placeholder={placeholder} 
                onChange={event => onChange(event.target.value)} 
                required={required} 
                value={value}>
                    <option className={styles.options} value="">Escoja una categoría</option> 
                {items.map(item => {
                    return <option className={styles.options} key={item}>{item}</option>
                })}
            </select>
        </div>
    );
}

export default DropdownList;
