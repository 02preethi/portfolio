import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section>
      <div className="container">
        <h2>Projects</h2>

        <p style={{ marginBottom: "30px" }}>
          Selected academic and applied projects demonstrating problem-solving
          and deployment readiness.
        </p>

        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
        >
          {projects.map((project) => (
            <div className="card" key={project.title}>
              <h3>{project.title}</h3>
              <p style={{ margin: "15px 0" }}>
                {project.description}
              </p>
              <a href={project.github} target="_blank" rel="noreferrer">
                View GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
