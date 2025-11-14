import { NavLink } from "react-router-dom";

const active = ({ isActive }) => isActive ? "nav-link active" : "nav-link";

export default function Navbar(){
  return (
    <nav className="navbar">
      <div className="brand">MY PORTFOLIO</div>
      <div className="nav-items">
        <NavLink to="/" className={active} end>Home</NavLink>
        <NavLink to="/projects" className={active}>Projects</NavLink>
        <NavLink to="/contact" className={active}>Contact</NavLink>
      </div>
    </nav>
  );
}
