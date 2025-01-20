import styles from './Textarea.module.css'

function Textarea(
    { type, minlength, maxlength, placeholder, label, value, required = false, onChange }
) {

    const modifiedPlaceholder = `${placeholder}`

    const onTyped = (event) => {
        onChange(event.target.value)
    }

    return (
        <div className={styles.textarea} >
            <label>{label}</label>
            <textarea className={styles.inputField}
                type={type}
                minLength={minlength}
                maxLength={maxlength}
                value={value}
                onChange={onTyped}
                required={required}
                placeholder={modifiedPlaceholder} />
        </div>
    )
}

export default Textarea
