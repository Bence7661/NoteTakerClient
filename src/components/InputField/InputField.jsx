import "./InputField.css";

function InputField({label, type = "text", placeholder = ""}) {
    return (
        <div>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} />
        </div>
    )
}

export default InputField;