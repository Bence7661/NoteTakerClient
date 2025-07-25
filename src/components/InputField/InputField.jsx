import { useRef, useState } from "react";
import "./InputField.css";

function InputField({id, label, type = "text", placeholder = "", required = false, pattern = null}) {
    const [value, setValue] = useState("");
    const [isValid, setIsValid] = useState(true); //So validation error is not shown initially.
    const inputRef = useRef(null);
    
    const validationErrorVisibility = isValid ? "hidden" : "visible";
    const labelId = `${id}label`;

    const onChange = (e) => {
        e.preventDefault();
        setValue(e.target.value);
        setIsValid(inputRef.current.checkValidity());
    }

    return (
        <div className="input-field-container">
            <span className="validation-error" style={{visibility:validationErrorVisibility}}>This field is required</span>
            <div className="input-field">
                <label id={labelId}>{label}</label>
                <input
                    className={isValid ? null : "invalid"}
                    ref={inputRef}
                    id={id} 
                    type={type} 
                    placeholder={placeholder}
                    aria-labelledby={labelId}
                    required={required}
                    pattern={pattern}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default InputField;