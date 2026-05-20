export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  impact: string;
  tags: readonly string[];
  href?: string;
  image?: string;
  featured?: boolean;
};

export const projects: readonly Project[] = [
  {
    title: "SOCINTEL",
    eyebrow: "OSINT / Threat Intelligence Tool",
    description:
      "OSINT and threat intelligence tool for SOC workflows, with a Python backend, Electron GUI and CLI support for analyzing IPs, domains, MAC addresses, URLs and emails.",
    impact:
      "Built to centralize enrichment and produce JSON output that can evolve into reports, SIEM integrations and analyst investigation history.",
    tags: ["Python", "Electron", "OSINT", "Threat Intelligence", "JSON"],
    href: "https://github.com/Just1cup/socintel",
    featured: true,
  },
  {
    title: "SOC Monitor",
    eyebrow: "Microsoft Edge Extension",
    description:
      "Manifest V3 browser extension that monitors a Grafana dashboard and triggers sound and system notifications when the queue value increases.",
    impact:
      "Designed for operational awareness: polling, DOM fallback strategies, Web Audio alerts and configurable selectors for different Grafana versions.",
    tags: ["Edge Extension", "Grafana", "JavaScript", "SOC", "Web Audio"],
    href: "https://github.com/Just1cup/Monitor/tree/main",
  },
  {
    title: "Defang",
    eyebrow: "IOC Handling Utility",
    description:
      "Utility focused on making indicators safer to share during security investigations by neutralizing URLs, domains and other potentially clickable artifacts.",
    impact:
      "Supports cleaner analyst communication when documenting suspicious indicators, alerts and threat intelligence findings.",
    tags: ["Security Utility", "IOC", "Threat Intelligence", "Analyst Workflow"],
    href: "https://github.com/Just1cup/socintel",
  },
  {
    title: "FireDice",
    eyebrow: "Discord Automation",
    description:
      "Discord bot created for tabletop RPG sessions, focused on fast dice interactions and a smoother remote game flow.",
    impact:
      "Turns a repetitive manual action into a lightweight command-driven experience.",
    tags: ["Bot", "JavaScript", "Automation", "TTRPG"],
    href: "https://github.com/Just1cup/Fire-Dice",
  },
] as const;
