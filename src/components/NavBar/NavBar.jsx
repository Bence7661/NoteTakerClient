import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <NavLink to="/Home" className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}>Home</NavLink>
        <NavLink to="/Notes" className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}>Notes</NavLink>
        <NavLink to="/Register" className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}>Register</NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;