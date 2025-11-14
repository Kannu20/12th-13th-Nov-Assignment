import { Link } from "react-router-dom";
import users from "../data/users";

export default function DashboardHome(){
  return (
    <section>
      <h1>Dashboard</h1>
      <p className="muted">Quick users list (click to view details)</p>

      <div className="user-grid">
        {users.map(u => (
          <div key={u.id} className="user-card">
            <div className="user-name">{u.name}</div>
            <div className="user-role">{u.role}</div>
            <Link to={`/user/${u.id}`} className="link">View profile</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
