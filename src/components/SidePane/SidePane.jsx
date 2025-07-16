import { useEffect, useState } from "react";
import "./SidePane.css";

function SidePane() {
    const [open, setOpen] = useState(() => {
        const stored = localStorage.getItem("sidePaneOpen");
        return stored !== null ? JSON.parse(stored) : true;
    });

    useEffect(() => {
        localStorage.setItem("sidePaneOpen", JSON.stringify(open));
    }, [open]);

  return (
    <div className="side-pane-wrapper">
        <div className={open ? "side-pane open" : "side-pane"}>
        </div>
        <button 
            onClick={() => setOpen(!open)}
            className="side-pane-toggle"
        >
            {open ? "<" : ">"}
        </button>
    </div>
  );
}

export default SidePane;