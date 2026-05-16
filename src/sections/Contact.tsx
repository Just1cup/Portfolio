import { Code2, Mail, Network, Phone } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { profile } from "../content/profile";

export function Contact() {
  return (
    <section className="section-shell contact" id="contact">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about security, tooling and resilient workflows."
          description="Open to conversations around SOC engineering, detection work, CTI pipelines and frontend systems with a security mindset."
        />
      </Reveal>

      <Reveal className="contact-card">
        <div className="contact-card__links">
          <a href={`mailto:${profile.email}`}>
            <Mail size={18} />
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            <Phone size={18} />
            {profile.phone}
          </a>
          <a href="https://github.com/Just1cup" target="_blank" rel="noreferrer">
            <Code2 size={18} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/paulo-henrique-freitas-junior/" target="_blank" rel="noreferrer">
            <Network size={18} />
            LinkedIn
          </a>
        </div>

        <div className="contact-card__cta">
          <p>
            The fastest path is email. I read messages with project context, security goals or collaboration ideas.
          </p>
          <Button href={`mailto:${profile.email}?subject=Portfolio contact - SOC Engineering`}>
            Send Email
            <Mail size={18} />
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
