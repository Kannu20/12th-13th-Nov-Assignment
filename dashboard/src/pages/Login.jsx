import { useNavigate } from "react-router-dom";

export default function Login(){
  const navigate = useNavigate();

  function handleLogin(e){
    e.preventDefault();
    // simulate auth then navigate
    navigate("/dashboard");
  }

  return (
    <div className="center-screen auth-card">
      <h2>Welcome back</h2>
      <form onSubmit={handleLogin} className="form">
        <input placeholder="Email" required />
        <input placeholder="Password" type="password" required />
        <button className="btn" type="submit">Login</button>
      </form>
      <p className="muted">Use the dashboard links after logging in.</p>
    </div>
  );
}
