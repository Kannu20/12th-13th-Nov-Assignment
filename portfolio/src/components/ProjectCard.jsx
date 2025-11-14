import { Link } from "react-router-dom";

export default function ProjectCard({ project }){
  return (
    <article className="card">
      <img src={project.image} alt={project.title} />
      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.short}</p>
        <Link to={`/projects/${project.id}`} className="link">View</Link>
      </div>
    </article>
  );
}
