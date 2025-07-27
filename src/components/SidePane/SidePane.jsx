import "./SidePane.css";
import { useEffect, useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import StorageKeys from "../../StorageKeys.js"

function SidePane() {
    const [open, setOpen] = useState(() => {
        const stored = localStorage.getItem(StorageKeys.SidePaneState);
        return stored !== null ? JSON.parse(stored) : true;
    });

    useEffect(() => {
        localStorage.setItem(StorageKeys.SidePaneState, JSON.stringify(open));
    }, [open]);

  return (
    <div className="side-pane-wrapper">
        <div className={open ? "side-pane open" : "side-pane"}>
        </div>
        <button 
            onClick={() => setOpen(!open)}
            className="side-pane-toggle"
        >
            {open ? <SlArrowLeft/> : <SlArrowRight/>}
        </button>
    </div>
  );
}

export default SidePane;