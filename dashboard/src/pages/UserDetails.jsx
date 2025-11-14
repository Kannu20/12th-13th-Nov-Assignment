import { useParams, useNavigate } from "react-router-dom";
import users from "../data/users";

export default function UserDetails(){
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find(u => u.id === id);

  if(!user){
    return <div className="notfound"><h2>User not found</h2></div>;
  }

  return (
    <article className="user-details card">
      <button className="btn ghost" onClick={() => navigate(-1)}>← Go Back</button>

      <div className="profile-top">
        <img src={user.avatar} alt={user.name} className="avatar"/>
        <div>
          <h2>{user.name}</h2>
          <p className="muted">{user.email} • {user.role}</p>
        </div>
      </div>

      <section>
        <h3>About</h3>
        <p>{user.bio}</p>
      </section>
    </article>
  );
}
