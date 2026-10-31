import Header from "@micpanco/components/Header";
import Footer from "@micpanco/components/Footer";
import ProjectCard from "@micpanco/components/ProjectCard";
import { projects } from "@micpanco/data/projects";

export const metadata = {
  title: "Projects",
  description: "Professional, client, and personal projects by Michael Panco.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="projects-page-hero">
          <div className="site-shell projects-page-intro">
            <div className="eyebrow">My work</div>
            <h1>Projects I’ve worked on</h1>
            <p>
              A collection of professional, client, and personal work across web
              applications, mobile experiences, dashboards, and product interfaces.
            </p>
          </div>
        </section>
        <section className="section projects-directory" aria-label="All projects">
          <div className="site-shell">
            <div className="projects-grid projects-grid-all">
              {projects.map((project) => (
                <ProjectCard project={project} key={project.slug} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
