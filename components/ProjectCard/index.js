import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({ project }) {
  return (
    <Link className="project-card" href={`/projects/${project.slug}`} aria-label={`View ${project.name} case study`}>
      <div className="project-media">
        {project.featuredImages ? (
          <div className="project-media-montage" aria-label={`${project.name} mobile interface preview`}>
            {project.featuredImages.map((image) => (
              <span className="project-media-screen" key={image.src}>
                <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="120px" />
              </span>
            ))}
          </div>
        ) : project.image ? <Image src={project.image} alt={project.imageAlt || `${project.name} interface`} fill sizes="(max-width: 700px) 100vw, (max-width: 920px) 50vw, 33vw" style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined} /> : (
          <div className="project-placeholder"><div><strong>{project.name}</strong><span>Verified project imagery coming soon</span></div></div>
        )}
      </div>
      <div className="project-body">
        <div className="project-kicker">{project.category}</div>
        <h3 className="project-title">{project.name}<FiArrowUpRight aria-hidden="true" /></h3>
        <p>{project.description}</p>
        <div className="chip-row">{project.technologies.slice(0, 4).map((tech) => <span className="chip" key={tech}>{tech}</span>)}</div>
      </div>
    </Link>
  );
}
