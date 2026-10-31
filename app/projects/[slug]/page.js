import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import Header from "@micpanco/components/Header";
import Footer from "@micpanco/components/Footer";
import ProjectScreenshotGallery from "@micpanco/components/ProjectScreenshotGallery";
import { getProject, projects } from "@micpanco/data/projects";
import { nextsharkScreens } from "@micpanco/data/nextsharkScreens";
import { smartcentsScreens } from "@micpanco/data/smartcentsScreens";
import { tomoriScreens } from "@micpanco/data/tomoriScreens";
import { alliedTherapyAdminScreens, alliedTherapyPublicScreens } from "@micpanco/data/alliedTherapyScreens";

const projectGalleries = {
  "allied-therapy-staffing": [
    {
      screens: alliedTherapyPublicScreens,
      heading: "Public website",
      eyebrow: "Project gallery",
      description: "The agency and clinician experience, from service discovery and regional coverage to staffing requests and open roles.",
      variant: "desktop",
    },
    {
      screens: alliedTherapyAdminScreens,
      heading: "Administrative system",
      eyebrow: "Operations workspace",
      description: "Data-driven tools for managing jobs, applications, territory markets, leads, and owners. Private details are omitted from the published captures.",
      variant: "desktop",
    },
  ],
  nextshark: {
    screens: nextsharkScreens,
    heading: "Explore NextShark App",
    description: "A look at the mobile news experience, from reading and saving stories to sharing and personalizing the app.",
  },
  smartcents: {
    screens: smartcentsScreens,
    heading: "Explore SmartCents",
    description: "A look at the mobile experience of SmartCents, from affordability planning through financial review.",
  },
  tomori: {
    screens: tomoriScreens,
    heading: "Explore Tomori",
    description: "A glimpse into the mobile experience of Tomori, an AI-powered companion platform.",
  },
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
    openGraph: { title: project.name, description: project.description, type: "article" },
  };
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  const gallery = projectGalleries[project.gallery];
  const gallerySections = gallery ? (Array.isArray(gallery) ? gallery : [gallery]) : [];
  return <>
    <Header />
    <main>
      <section className="case-hero">
        <div className="site-shell">
          <Link href="/projects" className="back-link"><FiArrowLeft /> Back to all projects</Link>
          <div className="case-intro"><div><div className="eyebrow">{project.category}</div><h1>{project.name}</h1><p>{project.description}</p><div className="chip-row">{project.technologies.map((tech) => <span className="chip" key={tech}>{tech}</span>)}</div></div>{project.status && <span className="chip">{project.status}</span>}</div>
        </div>
      </section>
      {gallerySections.map((section) => <ProjectScreenshotGallery {...section} projectName={project.name} key={section.heading} />)}
      <section className="section">
        <div className="site-shell case-content">
          <div>
            <div className="case-block"><h2>Project overview</h2><p>{project.context || project.description}</p></div>
            {project.contributions?.length > 0 && <div className="case-block"><h2>My contribution</h2><ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul></div>}
            {project.keyFeatures?.length > 0 && <div className="case-block"><h2>Key features</h2><ul>{project.keyFeatures.map((item) => <li key={item}>{item}</li>)}</ul></div>}
            {project.note && <div className="case-block"><h2>Implementation notes</h2><p>{project.note}</p></div>}
            {project.screenshots.length > 0 && <div className="case-block"><h2>Selected screens</h2><div className="screen-grid">{project.screenshots.map((src, index) => <div className="screen" key={src}><Image src={src} alt={`${project.name} screen ${index + 1}`} fill sizes="(max-width: 430px) 100vw, 50vw" /></div>)}</div></div>}
          </div>
          <aside className="case-aside" aria-label="Project facts">{project.role && <div className="case-fact"><span>Role</span><strong>{project.role}</strong></div>}<div className="case-fact"><span>Category</span><strong>{project.category}</strong></div><div className="case-fact"><span>Project type</span><strong>{project.projectType}</strong></div><div className="case-fact"><span>Technologies</span><strong>{project.technologies.join(", ")}</strong></div>{project.website && <a className="button button-primary case-website-link" href={project.website} target="_blank" rel="noreferrer">Visit live website <FiArrowUpRight aria-hidden="true" /></a>}</aside>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
