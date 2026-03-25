import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-name">
          Hi, I’m <span>Preethi V</span>
        </h1>

        <h3 className="hero-role">Full-Stack Developer | MCA Student</h3>

       <p className="hero-summary">
  MCA student with a strong interest in full-stack web development and AI-based
  applications. I enjoy building clean, responsive web applications and solving
  real-world problems through technology.
</p>
<a href="/resume.pdf" target="_blank" className="btn">
  View Resume
</a>
<div style={{ marginTop: "20px" }}>
  <a href="#projects" className="btn">View Projects</a>
</div>
      </div>
    </section>
  );
};

export default Hero;
