import "./Button.css";

function Button({buttonText = "Button"}) {
  return (
    <button>
        <span>{buttonText}</span>
    </button>
  );
}

export default Button;