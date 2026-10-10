import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-heading">Projects</h2>
      <div className="projects">
        {projects.map((p) => (
          <article key={p.name} className="card project">
            <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" />
            <div className="project-body">
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <p className="stack">{p.stack}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
