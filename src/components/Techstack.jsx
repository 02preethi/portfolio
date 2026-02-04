import { proficient, familiar } from "../data/skills";

const Techstack = () => {
  return (
    <section>
      <div className="container">
        <h2>Tech Stack</h2>

        <p style={{ marginBottom: "20px" }}>
          Technologies I work with, categorized by proficiency.
        </p>

        <h3>Proficient</h3>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            marginBottom: "40px"
          }}
        >
          {proficient.map((skill) => (
            <div className="card" key={skill}>
              {skill}
            </div>
          ))}
        </div>

        <h3>Familiar</h3>
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}
        >
          {familiar.map((skill) => (
            <div className="card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Techstack;
