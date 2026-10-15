import { useState, useEffect } from "react";
import "./App.css";
import resumePdf from "./assets/Resume - Vishal Python Full Stack.pdf";
import vk from "./assets/vk.png";
import ss from "./assets/ss.png";

/* =========================
   DATA (resume ke hisaab se)
   Yahan se content badlo, neeche JSX ko chhedne ki zarurat nahi
========================= */

// Student Management System ke links yahan daalo (khali ho to button nahi dikhega)
const PROJECT_LINKS = {
  studentManagement: {
    github: "", // e.g. "https://github.com/vishal-k72/student-management-system"
    live: "", // e.g. "https://your-live-link.com"
  },
};

const SKILL_GROUPS = [
  {
    title: "Languages",
    items: [
      { icon: "python", name: "Python 3" },
      { badge: "SQL", name: "SQL" },
      { icon: "html5", name: "HTML" },
      { icon: "css3", name: "CSS" },
      { icon: "javascript", name: "JavaScript" },
    ],
  },
  {
    title: "Frameworks & Libs",
    items: [
      { icon: "flask", name: "Flask", light: true },
      { icon: "fastapi", name: "FastAPI" },
      { icon: "django", name: "Django (basic)", variant: "plain", light: true },
      { icon: "pandas", name: "Pandas", light: true },
      { icon: "numpy", name: "NumPy" },
      { icon: "matplotlib", name: "Matplotlib", light: true },
      { badge: "REQ", name: "Requests" },
      { badge: "BS4", name: "BeautifulSoup" },
    ],
  },
  {
    title: "Database",
    items: [
      { icon: "mysql", name: "MySQL" },
      { icon: "postgresql", name: "PostgreSQL" },
      { icon: "sqlite", name: "SQLite" },
      { icon: "mongodb", name: "MongoDB (basic)" },
      { icon: "sqlalchemy", name: "SQLAlchemy ORM" },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { icon: "git", name: "Git" },
      { icon: "github", name: "GitHub", light: true },
      { icon: "vscode", name: "VS Code" },
      { icon: "pycharm", name: "PyCharm" },
      { icon: "postman", name: "Postman" },
      { badge: "pip", name: "venv / pip" },
    ],
  },
];

const CORE_CONCEPTS = [
  "REST APIs",
  "OOP",
  "Data Structures & Algorithms",
  "Web Scraping",
  "Automation",
  "MVC Architecture",
];

const PROJECTS = [
  {
    number: "01",
    title: "Myntra / Amazon Clone",
    description:
      "Myntra and Amazon e-commerce website clones with an active cart — add and remove items dynamically.",
    tech: "HTML · CSS · JavaScript",
  },
  {
    number: "02",
    title: "Student Management System",
    description:
      "Backend system for managing student records with secure JWT authentication, CRUD operations and a PostgreSQL database.",
    tech: "Python · FastAPI · PostgreSQL · JWT Auth",
    github: PROJECT_LINKS.studentManagement.github,
    live: PROJECT_LINKS.studentManagement.live,
  },
  {
    number: "03",
    title: "E-Commerce Full Stack Website",
    description:
      "Full stack e-commerce website that fetches data through APIs and performs CRUD operations with REST APIs.",
    tech: "React · Flask · PostgreSQL",
  },
  {
    number: "04",
    title: "Resume Analyser with Integrated AI",
    description:
      "Upload a resume and get AI-generated suggestions to improve it.",
    tech: "HTML · CSS · JS · FastAPI · OpenAI",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  // Scroll-to-top button ke liye
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          Vishal<span className="logoo">.</span>
        </a>

        <button className="dropdown-box" onClick={() => setMenuOpen(!menuOpen)}>
          Menu <span className={`arrow ${menuOpen ? "rotate" : ""}`}>▼</span>
        </button>

        <nav className={menuOpen ? "nav-open" : ""}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      {/* HOME */}
      <section id="home" className="hero">
        <div className="hero-text">
          <p className="small-text">HELLO, I'M</p>

          <h1>Vishal Kardam</h1>

          <h2>Python Backend Developer</h2>

          <p>
            I build reliable backend applications using Python, FastAPI, Flask,
            REST APIs and SQL databases like PostgreSQL, MySQL and Supabase.
          </p>

          <span className="status-badge">● Open to entry-level opportunities</span>

          <div className="buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>

            <a href="#contact" className="btn">
              Hire Me
            </a>

            {/* Resume Section */}
            <a href={resumePdf} download="Vishal_Kardam_Resume.pdf" className="btn">
              Download Resume
            </a>
          </div>
        </div>

        <div className="avatar">
          <img src={vk} height={100} alt="Vishal Kardam" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <p className="section-label">01 — ABOUT</p>

        <h2>About Me</h2>

        <div className="about-content">
          <p>
            Aspiring Python Backend Developer with intermediate knowledge of
            Python and foundational experience in FastAPI, Flask, REST APIs,
            SQL, MySQL and Supabase. Familiar with CRUD operations, database
            integration, Pydantic, SQLAlchemy/ORM concepts and authentication
            fundamentals.
          </p>

          <p>
            I developed a Student Management System for managing student
            records, and I'm seeking an entry-level Python Backend Developer
            position to apply my programming skills and contribute to
            developing reliable backend applications.
          </p>

          <div className="objective-box">
            <h3>Career Objective</h3>
            <p>
              To start my career as a Python Backend Developer in a
              growth-oriented organization where I can contribute to backend
              application development, strengthen my technical skills, and
              build scalable and reliable software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <p className="section-label">02 — SKILLS</p>

        <h2>Technologies I Work With</h2>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <div className="skill-box" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-items">
                {group.items.map((item) => (
                  <Skill key={item.name} {...item} />
                ))}
              </div>
            </div>
          ))}

          {/* CORE CONCEPTS */}
          <div className="skill-box">
            <h3>Core Concepts</h3>

            <div className="skill-tags">
              {CORE_CONCEPTS.map((concept) => (
                <span className="skill-tag" key={concept}>
                  {concept}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <p className="section-label">03 — PROJECTS</p>

        <div className="project-heading">
          <h2>Selected Projects</h2>
          <span>← Scroll →</span>
        </div>

        <div className="projects-container">
          {PROJECTS.map((project) => (
            <Project key={project.number} image={ss} {...project} />
          ))}
        </div>
      </section>

      {/* EXPERIENCE + CERTIFICATIONS */}
      <section id="experience" className="section">
        <p className="section-label">04 — EXPERIENCE</p>

        <h2>Experience</h2>

        <div className="education-card">
          <div>
            <h3>Fresher | Entry-Level Candidate</h3>
            <p>
              Seeking an entry-level opportunity to apply Python programming,
              backend development, API development and database management
              skills while gaining professional software development
              experience.
            </p>
          </div>
        </div>

        <h3 className="sub-heading">Certifications</h3>

        <div className="education-card">
          <div>
            <h3>Python Full Stack Developer</h3>
            <p>DUCAT</p>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <p className="section-label">05 — EDUCATION</p>

        <h2>Education</h2>

        <div className="education-card">
          <div>
            <h3>Master of Computer Applications (MCA)</h3>
            <p>Dr. A.P.J. Abdul Kalam Technical University (AKTU) · Pursuing</p>
          </div>

          <span>2026 — 2028</span>
        </div>

        <div className="education-card">
          <div>
            <h3>Bachelor of Computer Applications (BCA)</h3>
            <p>Chaudhary Charan Singh University (CCS University) · CGPA: 6.5</p>
          </div>

          <span>2022 — 2025</span>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <p className="section-label">06 — CONTACT</p>

        <h2>Let's build something together 🚀</h2>

        <p className="contact-description">
          Have a project or opportunity? Feel free to connect with me.
        </p>

        <div className="contact-links">
          <a href="mailto:vkar3212@gmail.com" className="email-contact">
            ✉ Email: vkar3212@gmail.com ↗
          </a>
        </div>

        <div className="social-container">
          <h4>Connect on Social Platforms</h4>

          <div className="social-grid">
            <Social icon="github" name="GitHub" url="https://github.com/vishal-k72" />
            <Social icon="leetcode" name="LeetCode" url="https://leetcode.com/u/Vishalkardam/" />
            <Social icon="instagram" name="Instagram" url="https://www.instagram.com/vishalll.vk" />
            <Social icon="facebook" name="Facebook" url="https://www.facebook.com/vishal.kardam.5494" />
            <Social icon="x" name="Twitter / X" url="https://x.com/vishal_7210" />
            <Social icon="youtube" name="YouTube" url="https://www.youtube.com/@SpringTeckY" />
            <Social icon="threads" name="Threads" url="https://www.threads.net/@vishal.kardam.7210" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Vishal<span>.</span>
            </a>

            <p>
              Python Backend Developer building reliable, API-driven and
              database-backed applications.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>

            <a href="mailto:vkar3212@gmail.com">vkar3212@gmail.com</a>

            <p>India</p>
            <p>Available for entry-level opportunities</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} <strong>Vishal Kardam</strong>. All
            Rights Reserved.
          </p>

          <p>
            Built with <span>React</span> · <span>CSS</span> ·
            <span> JavaScript</span>
          </p>
        </div>
      </footer>

      {/* SCROLL TO TOP BUTTON */}
      {showTop && (
        <a href="#home" aria-label="Back to top" className="back-to-top">
          ↑
        </a>
      )}
    </>
  );
}

/* =========================
   SKILL COMPONENT
   icon  -> devicon logo
   badge -> jin skills ka devicon logo nahi hai (SQL, Requests, BS4, pip)
========================= */

function Skill({ icon, name, light = false, variant = "original", badge }) {
  return (
    <div className="skill-item">
      <div className={`skill-logo ${light || badge ? "light-logo" : ""}`}>
        {badge ? (
          <span className="skill-text">{badge}</span>
        ) : (
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-${variant}.svg`}
            alt={name}
          />
        )}
      </div>

      {name}
    </div>
  );
}

/* =========================
   PROJECT COMPONENT
   github / live optional hain — sirf tab dikhenge jab link doge
========================= */

function Project({ number, image, title, description, tech, github, live }) {
  return (
    <article className="project-card">
      <span className="project-number">{number}</span>

      <div className="project-image">
        <img src={image} alt={`${title} preview`} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <small>{tech}</small>

      {(github || live) && (
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              Live Demo ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}

/* =========================
   SOCIAL COMPONENT
========================= */

function Social({ icon, name, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-card"
    >
      <img
        src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${icon}.svg`}
        alt={name}
      />

      {name}
    </a>
  );
}

export default App;