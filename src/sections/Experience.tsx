import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { education, experience } from "../content/experience";

export function Experience() {
  return (
    <section className="section-shell experience" id="experience">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Practical SOC work, detection growth and technical depth."
          description="The portfolio narrative is grounded in operations, investigation and tooling, not generic buzzwords."
        />
      </Reveal>

      <div className="timeline">
        {experience.map((item) => (
          <Reveal className="timeline-card" key={`${item.role}-${item.company}`}>
            <div className="timeline-card__icon">
              <BriefcaseBusiness size={20} />
            </div>
            <div>
              <span>{item.period}</span>
              <h3>{item.role} · {item.company}</h3>
              <p>{item.description}</p>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}

        {education.map((item) => (
          <Reveal className="timeline-card timeline-card--quiet" key={item.title}>
            <div className="timeline-card__icon">
              <GraduationCap size={20} />
            </div>
            <div>
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <p>Academic foundation supporting systems, software engineering and security research.</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
