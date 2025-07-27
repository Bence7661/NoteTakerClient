import "./InputField.css";

function InputField({id, label, type = "text", placeholder = null, value = null, error = null, onChange = null, onBlur = null}) {
    const isValid = error == null;
    const validationErrorVisibility = isValid ? "hidden" : "visible";
    const labelId = `${id}label`;

    return (
        <div className="input-field-container">
            <span className="validation-error" style={{visibility:validationErrorVisibility}}>{error ?? "error"}</span>
            <div className="input-field">
                <label id={labelId}>{label}</label>
                <input
                    className={isValid ? null : "invalid"}
                    id={id}
                    name={id}
                    type={type} 
                    placeholder={placeholder}
                    aria-labelledby={labelId}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </div>
        </div>
    )
}

export default InputField;