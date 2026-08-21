import { ArrowUpRight, ExternalLink } from "lucide-react";
import socintelImage from "../assets/socintel-operations.png";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { projects } from "../content/projects";

export function Projects() {
  const featured = projects.find((project) => project.featured);
  const secondary = projects.filter((project) => !project.featured);

  return (
    <section className="section-shell projects" id="projects">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Security tooling and experiments with a practical edge."
          description="The strongest direction is SOCINTEL: a threat intelligence workflow built around enrichment, risk and analyst speed."
        />
      </Reveal>

      {featured ? (
        <Reveal className="featured-project">
          <img
            className="featured-project__image"
            src={socintelImage}
            alt="Dark security operations center with threat intelligence visualizations"
            loading="lazy"
          />
          <div className="featured-project__copy">
            <span className="eyebrow">{featured.eyebrow}</span>
            <h3>{featured.title}</h3>
            <p>{featured.description}</p>
            <strong>{featured.impact}</strong>
            <div className="tag-cloud">
              {featured.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            {featured.href ? (
              <a className="project-link" href={featured.href} target="_blank" rel="noreferrer">
                View case study
                <ExternalLink size={17} />
              </a>
            ) : null}
          </div>
        </Reveal>
      ) : null}

      <div className="project-grid">
        {secondary.map((project) => (
          <Reveal className="project-card" key={project.title}>
            {project.image ? <img src={project.image} alt="" loading="lazy" /> : null}
            <div>
              <span>{project.eyebrow}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>{project.impact}</small>
              <div className="project-card__footer">
                <div className="tag-cloud">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                    <ArrowUpRight size={18} />
                  </a>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
