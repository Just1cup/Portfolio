import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code2, Mail, Network } from "lucide-react";
import { Button } from "../components/ui/Button";
import { profile, stats } from "../content/profile";
import { fadeUp, stagger } from "../lib/animation";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero section-shell" id="home">
      <div className="hero__ambient" aria-hidden="true" />
      <motion.div
        className="hero__content"
        variants={reduceMotion ? undefined : stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero__copy" variants={reduceMotion ? undefined : fadeUp}>
          <h1>Paulo Henrique</h1>
          <strong className="hero__role">Cybersecurity Analyst</strong>
          <p>{profile.headline}</p>

          <div className="hero__actions" aria-label="Primary actions">
            <Button href="#projects">
              View selected work
              <ArrowUpRight size={18} />
            </Button>
            <Button href={`mailto:${profile.email}`} variant="secondary">
              Email Paulo
              <Mail size={18} />
            </Button>
          </div>

          <div className="hero__socials" aria-label="Social links">
            <a href="https://github.com/Just1cup" target="_blank" rel="noreferrer">
              <Code2 size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/paulo-henrique-freitas-junior/"
              target="_blank"
              rel="noreferrer"
            >
              <Network size={18} />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.aside
          className="intel-panel"
          variants={reduceMotion ? undefined : fadeUp}
          aria-label="Illustrative IOC analysis console"
        >
          <div className="intel-panel__header">
            <span>IOC analysis console</span>
            <strong><i /> Live</strong>
          </div>
          <p className="intel-command">› IOC_LOOKUP <b>203.0.113.42</b></p>
          <div className="signal-card signal-card--hot">
            <span>Analyst priority</span>
            <strong>87</strong>
            <small>High priority after reputation, abuse history and context checks.</small>
          </div>
          <div className="intel-row">
            <span>Indicator type</span>
            <strong>IPv4 address</strong>
          </div>
          <div className="intel-row">
            <span>Context</span>
            <strong>Scanner activity · Suspicious ASN</strong>
          </div>
          <div className="intel-row">
            <span>Next action</span>
            <strong>Enrich · Correlate · Escalate</strong>
          </div>
          <div className="intel-stream" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        </motion.aside>
      </motion.div>

      <div className="hero__stats" aria-label="Areas of focus">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.value}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
