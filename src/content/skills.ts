export const skillGroups = [
  {
    title: "Detection & Threat Intelligence",
    description:
      "Rules, queries and intelligence workflows for analyst-driven detection and investigation.",
    skills: ["Sigma", "KQL", "AQL", "MITRE ATT&CK", "Threat Hunting", "IOC Enrichment"],
  },
  {
    title: "Platforms & Operations",
    description:
      "Hands-on SOC tooling for monitoring, correlation, investigation and response.",
    skills: ["QRadar", "Wazuh", "Microsoft Sentinel", "SOAR", "Docker", "Linux"],
  },
  {
    title: "Software Engineering",
    description:
      "Security-focused product development with typed frontend and backend tooling.",
    skills: ["TypeScript", "React", "Node.js", "JavaScript", "Redis", "API Design"],
  },
] as const;
