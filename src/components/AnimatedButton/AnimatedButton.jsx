import "./AnimatedButton.css";
import {useRef} from "react"

function AnimatedButton({buttonText = "Button", type = "button", onClick = null}) {
  const buttonRef = useRef(null);

  const playAnimation = () => {
    const btn = buttonRef.current;
    if (!btn) return;

    btn.classList.add('pressed');

    setTimeout(() => {
      btn.classList.remove('pressed');
    }, 250);
  };

  return (
    <div className="animatedbtn-wrapper">
      <button 
      className="animatedbtn"
      type={type}
      ref={buttonRef} 
      onMouseDown={playAnimation}
      onClick={onClick}>
        <span>{buttonText}</span>
      </button>
    </div>
  );
}

export default AnimatedButton;