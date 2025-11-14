import { useParams } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetails(){
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  if(!project) return <div>Project not found</div>;
  return (
    <article>
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
    </article>
  );
}
