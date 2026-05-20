import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { skillGroups } from "../content/skills";

export function TechStack() {
  return (
    <section className="section-shell stack" id="stack">
      <Reveal>
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools grouped by real operational use."
          description="A stack shaped by detection work, SOC environments, CTI workflows and software engineering."
        />
      </Reveal>

      <div className="stack__grid">
        {skillGroups.map((group) => (
          <Reveal className="stack-card" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="tag-cloud">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
