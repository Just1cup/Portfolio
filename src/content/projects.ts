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
    title: "VÊ AÍ!",
    eyebrow: "Threat Intelligence Visualization",
    description:
      "Web application that turns IOC data into an interactive investigation graph, combining a Rust API with a React visualization workspace.",
    impact:
      "Normalizes and deduplicates indicators, persists relationships in PostgreSQL and streams graph updates over WebSocket as source data changes.",
    tags: ["Rust", "React", "Sigma.js", "PostgreSQL", "WebSocket", "Docker"],
    href: "https://github.com/Just1cup/ve-ai",
  },
] as const;
