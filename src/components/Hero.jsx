import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-name">
          Hi, I’m <span>Preethi V</span>
        </h1>

        <h3 className="hero-role">Gesix GeoAI Intern</h3>

        <p className="hero-summary">
          MCA student with strong foundations in full-stack web development and
          beginner-level machine learning. I enjoy building clean, deployable
          applications and solving real-world problems using technology.
        </p>
      </div>
    </section>
  );
};

export default Hero;
