import { Link } from "react-router-dom";
export default function NotFound(){
  return (
    <div className="center-screen">
      <h2>404 — Page not found</h2>
      <p className="muted">We couldn't find that page.</p>
      <Link to="/" className="btn">Back to Login</Link>
    </div>
  );
}
