import { NavLink } from "react-router-dom";

const active = ({ isActive }) => isActive ? "nav-item active" : "nav-item";

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="brand">MyDashboard</div>
      <nav className="nav">
        <NavLink to="/dashboard" className={active} end>Home</NavLink>
        <NavLink to="/dashboard/profile" className={active}>Profile</NavLink>
        <NavLink to="/dashboard/settings" className={active}>Settings</NavLink>
      </nav>
    </header>
  );
}
