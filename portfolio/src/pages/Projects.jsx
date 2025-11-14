import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Projects(){
  return (
    <section>
      <h2>Recent Projects</h2>
      <div className="grid">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}
