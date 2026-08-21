import { Binary, Crosshair, Radar } from "lucide-react";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { profile } from "../content/profile";

const pillars = [
  {
    icon: Radar,
    title: "Threat Detection",
    text: "Transforms telemetry, queries and attacker behavior into actionable detection workflows.",
  },
  {
    icon: Crosshair,
    title: "Investigation Focus",
    text: "Prioritizes context, confidence and analyst decision-making during triage.",
  },
  {
    icon: Binary,
    title: "Security Tooling",
    text: "Builds practical software for enrichment, automation and repeatable SOC operations.",
  },
] as const;

export function About() {
  return (
    <section className="section-shell about" id="about">
      <Reveal>
        <SectionHeading
          eyebrow="About / Expertise"
          title="Turning signals into clarity and response."
          description={profile.summary}
        />
      </Reveal>

      <div className="about__grid">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <Reveal className="pillar-card" key={pillar.title}>
              <Icon size={24} />
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
