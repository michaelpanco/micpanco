import { experiences } from "@micpanco/data/experiences";

function ExperienceCard({ experience }) {
  return (
    <article className="experience-card">
      <div className="company-mark" aria-hidden="true">{experience.mark}</div>
      <div className="experience-card-content">
        <div className="experience-card-heading">
          <h3>{experience.company}</h3>
          <time>{experience.dates}</time>
        </div>
        <div className="experience-role">{experience.role}</div>
        <p>{experience.description}</p>
        <div className="experience-tech">
          {experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      </div>
    </article>
  );
}

export default function ExperienceTimeline() {
  const renderExperience = (experience, index) => (
    <div
      className={`experience-row experience-tone-${index % 3} ${index % 2 === 0 ? "experience-left" : "experience-right"}`}
      key={`${experience.company}-${experience.dates}`}
      style={{ "--experience-order": index }}
    >
      <ExperienceCard experience={experience} />
      <div className="experience-year" aria-label={`Started in ${experience.year}`}>{experience.year}</div>
    </div>
  );

  return (
    <section id="experience" className="section journey-section" aria-labelledby="journey-title">
      <div className="site-shell journey-shell">
        <header className="journey-heading">
          <div className="journey-label">Experience</div>
          <h2 id="journey-title">My Professional <span>Journey</span></h2>
          <p>Over 15 years of experience building web applications, from design to full-stack development. Here&apos;s a look at the companies I&apos;ve worked with and the experiences that shaped my career.</p>
        </header>
        <div className="experience-timeline">
          <div className="experience-column experience-column-left">
            {experiences.map((experience, index) => index % 2 === 0 && renderExperience(experience, index))}
          </div>
          <div className="experience-column experience-column-right">
            {experiences.map((experience, index) => index % 2 !== 0 && renderExperience(experience, index))}
          </div>
        </div>
      </div>
    </section>
  );
}
