import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaArrowUpRightFromSquare } from "react-icons/fa6";
import profile from "./assets/profile.png";

const projects = [
  {
    number: "01",
    title: "ChatSphere",
    type: "REAL-TIME FULL-STACK APPLICATION",
    description:
      "A real-time chat platform with authentication, persistent messaging, online presence, typing indicators and modern WhatsApp-style interactions.",
    tech: "React · Node.js · Express · MongoDB · Socket.IO",
    link: "https://github.com/saquibahmed0882/chatsphere",
  },
  {
    number: "02",
    title: "House Price Prediction",
    type: "MACHINE LEARNING",
    description:
      "Machine learning application that predicts house prices using the King County House Sales dataset and Random Forest Regression.",
    tech: "Python · Pandas · NumPy · Scikit-learn · Streamlit",
    link: "#",
  },
  {
    number: "03",
    title: "AI Medical Copilot",
    type: "ARTIFICIAL INTELLIGENCE",
    description:
      "An AI-focused project designed around intelligent assistance, structured medical information and practical software workflows.",
    tech: "Python · Machine Learning · AI · Full Stack",
    link: "#",
  },
];

function App() {
  return (
    <div className="site">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="brand">
          Saquib Ahmed<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="/Saquib-Ahmed-CV.pdf" download className="nav-resume">
          Resume <FaArrowUpRightFromSquare />
        </a>
      </header>

      {/* HERO */}
      <main id="home">
        <section className="hero section">

          <div className="hero-meta">
            <span className="dot"></span>
            B.TECH AI/ML · SOFTWARE · MACHINE LEARNING
            <span className="hero-location">INDIA · IST · 2027</span>
          </div>

          <div className="hero-grid">

            <div className="hero-copy">

              <div className="eyebrow">
                <span className="dot"></span>
                ABOUT ME
              </div>

              <h1>
                hey, I'm <em>Saquib Ahmed</em><span className="orange">.</span>
              </h1>

              <div className="intro-lines">
                <p>
                  B.Tech Artificial Intelligence & Machine Learning student
                  building intelligent and scalable software.
                </p>
                <p>
                  Experienced in AI/ML, full-stack development and
                  data-driven applications.
                </p>
                <p>
                  Passionate about turning real-world problems into useful
                  technology.
                </p>
              </div>

              <div className="mission">
                <div className="mission-title">
                  ◎ &nbsp; MY MISSION
                </div>

                <p>
                  Building AI-powered software that is practical, intelligent
                  and easy to use — from machine learning solutions to
                  scalable full-stack platforms.
                </p>

                <em>“Keep learning, keep building.”</em>
              </div>

              <div className="scroll">
                <FaArrowDown />
                SCROLL FOR THE BEST
              </div>

              <div className="socials">
                <a href="https://github.com/saquibahmed0882" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/saquib-ahmed-ab21023a9" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
                <a href="mailto:saquibahmed0882@gmail.com">
                  <FaEnvelope />
                </a>
              </div>

            </div>

            <div className="hero-photo-wrap">
              <div className="photo-card">
                <img src={profile} alt="Saquib Ahmed" />
                <span>INDIA · IST</span>
              </div>
            </div>

          </div>

          <div className="stats">
            <div>
              <small>EDUCATION</small>
              <strong>B.Tech AI/ML</strong>
            </div>

            <div>
              <small>PROJECTS</small>
              <strong>2+ Major Projects</strong>
            </div>

            <div>
              <small>SPECIALIZATION</small>
              <strong>AI · ML · Software</strong>
            </div>

            <div>
              <small>GRADUATION</small>
              <strong>2027</strong>
            </div>
          </div>

        </section>

        {/* ABOUT */}
        <section id="about" className="content-section section">
          <div className="section-label">01 · ABOUT</div>

          <div className="two-column">
            <h2>
              Building technology
              <br />
              <em>with purpose.</em>
            </h2>

            <div className="section-text">
              <p>
                I'm Saquib Ahmed, a B.Tech Artificial Intelligence &
                Machine Learning student focused on building useful software
                and intelligent applications.
              </p>

              <p>
                My work combines machine learning, Python, full-stack
                development and modern web technologies to turn ideas into
                working products.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="content-section section">
          <div className="section-label">02 · SKILLS</div>

          <div className="skills-grid">
            <div className="skill-card">
              <small>PROGRAMMING</small>
              <h3>Python · C++ · Java · SQL</h3>
              <p>Problem solving, data processing and software development.</p>
            </div>

            <div className="skill-card">
              <small>AI & MACHINE LEARNING</small>
              <h3>Machine Learning · TensorFlow · OpenCV</h3>
              <p>Building predictive and intelligent applications.</p>
            </div>

            <div className="skill-card">
              <small>FULL STACK</small>
              <h3>React · Node · Express · MongoDB</h3>
              <p>Responsive interfaces and scalable backend systems.</p>
            </div>

            <div className="skill-card">
              <small>TOOLS</small>
              <h3>Git · GitHub · Docker · Linux</h3>
              <p>Development, deployment and modern engineering workflows.</p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="content-section section">
          <div className="section-label">03 · EXPERIENCE</div>

          <div className="experience-item">
            <div>
              <small>2026</small>
              <h3>Banaras Locomotive Works</h3>
              <p>Industrial Internship · EDP Department · Varanasi</p>
            </div>

            <p>
              Exposure to EDP operations, planning and industrial technology
              workflows at BLW.
            </p>
          </div>

          <div className="experience-item">
            <div>
              <small>2026</small>
              <h3>Olinp Technology Pvt. Limited</h3>
              <p>Data Analyst & Machine Learning Intern</p>
            </div>

            <p>
              Worked with data analysis and machine learning concepts to solve
              practical technology problems.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="content-section section">
          <div className="section-label">04 · SELECTED PROJECTS</div>

          <div className="projects">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <div className="project-number">{project.number}</div>

                <div className="project-main">
                  <small>{project.type}</small>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span>{project.tech}</span>
                </div>

                <a href={project.link} target="_blank" rel="noreferrer">
                  <FaArrowUpRightFromSquare />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="content-section section">
          <div className="section-label">05 · EDUCATION</div>

          <div className="education">
            <div>
              <small>2023 — 2027</small>
              <h2>B.Tech — Artificial Intelligence & Machine Learning</h2>
              <p>Birla Institute of Technology, Mesra</p>
            </div>

            <strong>AI / ML</strong>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact section">
          <div className="section-label">06 · CONTACT</div>

          <h2>
            Let's build something
            <br />
            <em>useful together.</em>
          </h2>

          <a className="email" href="mailto:saquibahmed0882@gmail.com">
            saquibahmed0882@gmail.com
            <FaArrowUpRightFromSquare />
          </a>

          <div className="contact-socials">
            <a href="https://github.com/saquibahmed0882" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/saquib-ahmed-ab21023a9" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>SAQU<span>I</span>B AHMED</span>
        <span>© 2026 · BUILT WITH PURPOSE</span>
      </footer>

    </div>
  );
}

export default App;
