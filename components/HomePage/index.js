import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiDownload, FiMail, FiMonitor } from "react-icons/fi";
import Header from "@micpanco/components/Header";
import Footer from "@micpanco/components/Footer";
import ProjectCard from "@micpanco/components/ProjectCard";
import ExperienceTimeline from "@micpanco/components/ExperienceTimeline";
import AboutSection from "@micpanco/components/AboutSection";
import ContactSection from "@micpanco/components/ContactSection";
import { featuredProjects } from "@micpanco/data/projects";
import { skills } from "@micpanco/data/skills";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="site-shell hero-grid">
            <div>
              <div className="eyebrow">
                Senior Frontend / Full-Stack Developer
              </div>
              <h1 id="hero-title">
                Michael <span>Panco</span>
              </h1>
              <p className="hero-lede">
                I build modern, user-centered web applications with clean
                design, solid architecture, and great user experiences.
              </p>
              <p className="hero-support">
                With over 15 years in web development, I specialize in React and
                Next.js, turning complex ideas into intuitive digital products.
              </p>
              <div className="chip-row">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "React Native",
                ].map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="hero-actions">
                <Link
                  href="mailto:micpanco@gmail.com"
                  className="button button-primary"
                >
                  <FiMail /> Get in touch
                </Link>
                <Link
                  href="/assets/files/resume_v3.2.3.pdf"
                  target="_blank"
                  className="button button-secondary"
                >
                  <FiDownload /> Download my CV
                </Link>
              </div>
            </div>
            <div className="portrait-wrap">
              <div className="portrait-orb" aria-hidden="true" />
              <Image
                className="portrait"
                src="/assets/img/avatar.png"
                width={449}
                height={449}
                alt="Portrait of Michael Panco"
                priority
              />
              <div className="experience-pill">
                <FiMonitor size={24} color="var(--brand-dark)" />
                <div>
                  <strong>15+ years</strong>
                  <span>Web development experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="site-shell">
            <div className="section-heading">
              <div>
                <div className="eyebrow">Featured projects</div>
                <h2 className="section-title">Some things I’ve built</h2>
              </div>
              <p className="section-copy">
                Selected professional and personal work spanning finance, AI,
                and fitness experiences.
              </p>
            </div>
            <div className="projects-grid">
              {featuredProjects.map((project) => (
                <ProjectCard project={project} key={project.slug} />
              ))}
            </div>
            <div className="projects-more">
              <Link href="/projects" className="view-all-link">
                View all projects <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <ExperienceTimeline />

        <section id="skills" className="section skills-section">
          <div className="site-shell">
            <div className="section-heading">
              <div>
                <div className="eyebrow">Skills</div>
                <h2 className="section-title">Technologies I work with</h2>
              </div>
              <p className="section-copy">
                A focused toolkit for building reliable, thoughtful digital
                products.
              </p>
            </div>
            <div className="skills-grid">
              {skills.map(({ name, category, icon }) => (
                <div className="skill-card" key={name}>
                  <span className="skill-icon" aria-hidden="true">
                    <Image src={icon} width={32} height={32} alt="" />
                  </span>
                  <div>
                    <strong>{name}</strong>
                    <small>{category}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AboutSection />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
