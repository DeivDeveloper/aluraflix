import styles from './FormField.module.css';

function FormField(
    { type, maxlength, minlength, placeholder, label, value, required = false, onChange }
) {

    const modifiedPlaceholder = `${placeholder}`;

    const handleInput = (event) => {
        onChange(event.target.value);
    };

    return (
        <div className={styles.field}>
            <label>{label}</label>
            <input
                className={styles.fieldInput}
                type={type}
                minLength={minlength}
                maxLength={maxlength}
                value={value}
                onChange={handleInput}
                required={required}
                placeholder={modifiedPlaceholder}
            />
        </div>
    );
}

export default FormField;
