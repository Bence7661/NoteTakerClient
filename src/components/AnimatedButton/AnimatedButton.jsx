import {useRef} from "react"
import "./AnimatedButton.css";

function AnimatedButton({buttonText = "Button"}) {
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
      <button className="animatedbtn" ref={buttonRef} onMouseDown={playAnimation}>
          <span>{buttonText}</span>
      </button>
    </div>
  );
}

export default AnimatedButton;