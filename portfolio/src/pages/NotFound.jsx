import { Link } from "react-router-dom";
export default function NotFound(){
  return (
    <div className="notfound">
      <h2>404 — Page Not Found</h2>
      <p>Looks like the page you requested doesn't exist.</p>
      <Link to="/" className="btn">Go home</Link>
    </div>
  );
}
