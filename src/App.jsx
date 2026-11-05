import React, { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import "./styles.css";

const skills = [
  { name: "React", logo: "react" },
  { name: "React Native", logo: "reactnative" },
  { name: "JavaScript", logo: "javascript" },
  { name: "HTML5", logo: "html5" },
  { name: "CSS3", logo: "css3" },
  { name: "Redux", logo: "redux" },
  { name: "Java", logo: "java" },
  { name: "PHP", logo: "php" },
  { name: "ASP.NET Core", logo: "dotnetcore" },
  { name: "Node.js", logo: "nodejs" },
  { name: "REST APIs", logo: "swagger" },
  { name: "Firebase", logo: "firebase" },
  { name: "Microsoft SQL Server", logo: "microsoftsqlserver" },
  { name: "MySQL", logo: "mysql" },
  { name: "Git", logo: "git" },
  { name: "GitHub", logo: "github" },
];

const specialties = ["Software Engineer", "Full Stack Developer"];

const navigation = ["Home", "About", "Skills", "Projects", "Contact"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [specialtyIndex, setSpecialtyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpecialtyIndex((current) => (current + 1) % specialties.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const whatsappLink =
    "https://wa.me/94779099306?text=Hello%20Januka!%20I%20visited%20your%20portfolio.";

  return (
    <div className="portfolio">
      {/* NAVIGATION */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            JK<span>.</span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>
            {navigation.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            ))}

            <a href="#contact" className="nav-contact" onClick={closeMenu}>
              Let's Talk <ArrowDownRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section-container" id="home">
          <div className="hero-content reveal">
            <div className="availability">
              <span className="availability-dot"></span>
              Available for opportunities
            </div>

            <p className="hero-greeting">Hello, I'm</p>

            <h1>
              Januka
              <br />
              <span>Herath.</span>
            </h1>

            <div className="specialty">
              <Sparkles size={18} />
              <span key={specialtyIndex}>{specialties[specialtyIndex]}</span>
            </div>

            <p className="hero-description">
              I build modern web and mobile applications with clean code,
              thoughtful design, and a focus on creating useful digital
              experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work <ArrowDownRight size={18} />
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/januka29"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>

              <a
                href="https://linkedin.com/in/januka-herath"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a href="mailto:ih.januka@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="hero-glow"></div>
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="portrait-frame">
              <img
                src="/januka-profile.jpg"
                alt="Januka Herath"
                className="profile-image"
              />
            </div>

            <div className="hero-decoration">✳</div>
          </div>

          {/* SCROLL INDICATOR - OUTSIDE BOTH HERO COLUMNS */}
          <a href="#about" className="scroll-indicator">
            <span className="scroll-mouse">
              <span className="scroll-wheel"></span>
            </span>

            <span className="scroll-text">Scroll to Explore</span>
          </a>
        </section>

        {/* ABOUT */}
        <section className="about section-container" id="about">
          <div className="section-heading reveal">
            <span className="section-label">01 / ABOUT ME</span>

            <h2>
              A little about <span>myself.</span>
            </h2>
          </div>

          <div className="about-content reveal">
            <div className="about-highlight">
              <span className="quote-mark">“</span>

              <h3>Turning ideas into meaningful digital experiences.</h3>
            </div>

            <div className="about-description">
              <p>
                I'm Januka Herath, a software developer passionate about
                building applications that solve real-world problems. I enjoy
                working across frontend and backend technologies to create
                complete software solutions.
              </p>

              <p>
                I have experience with web and mobile application development,
                database management, and API integration. I continuously explore
                new technologies and improve my skills through practical
                projects.
              </p>

              <a href="#contact" className="text-link">
                Let's work together <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills section-container" id="skills">
          <div className="section-heading reveal">
            <span className="section-label">02 / MY EXPERTISE</span>

            <h2>
              Technologies I <span>work with.</span>
            </h2>

            <p className="section-description">
              Tools and technologies I use to bring ideas to life.
            </p>
          </div>

          <div className="skills-grid reveal">
            {skills.map((skill) => (
              <div className="skill-item" key={skill.name}>
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.logo}/${skill.logo}-original.svg`}
                  alt={skill.name}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <span className="skill-tooltip">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects section-container" id="projects">
          <div className="section-heading reveal">
            <span className="section-label">03 / MY WORK</span>

            <h2>
              Featured <span>projects.</span>
            </h2>

            <p className="section-description">
              A selection of projects and work will be showcased here.
            </p>
          </div>

          <div className="project-placeholder reveal">
            <div className="placeholder-icon">
              <Sparkles size={30} />
            </div>

            <h3>Projects coming soon</h3>

            <p>
              I'm preparing my project showcase. Check back soon to explore my
              work.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section-container" id="contact">
          <div className="contact-card reveal">
            <span className="section-label">04 / GET IN TOUCH</span>

            <h2>
              Have an idea?
              <br />
              <span>Let's create something.</span>
            </h2>

            <p>
              I'm always open to discussing new opportunities, creative ideas,
              and interesting projects.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button contact-button"
            >
              Say Hello <ArrowDownRight size={18} />
            </a>

            <div className="contact-details">
              <a href="mailto:ih.januka@gmail.com">
                <Mail size={18} />
                ih.januka@gmail.com
              </a>

              <a
                href="https://github.com/januka29"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/januka-herath"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <a href="#home" className="logo">
            JK<span>.</span>
          </a>

          <p>Designed & built by Januka Herath.</p>

          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
