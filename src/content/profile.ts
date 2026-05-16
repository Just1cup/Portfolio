export const profile = {
  name: "Paulo Henrique",
  role: "Cybersecurity Analyst & SOC Engineering Developer",
  location: "Brazil",
  email: "paulohfreitas22@gmail.com",
  phone: "+55 31 99534-6402",
  headline:
    "Cybersecurity analyst focused on detection, threat intelligence and SOC automation.",
  summary:
    "I work at the intersection of cybersecurity operations and software engineering, with hands-on experience in SIEM monitoring, incident investigation, threat hunting and intelligence-driven analysis. My current focus is building practical tools and workflows that reduce investigation time, improve detection quality and help security teams make better decisions under pressure.",
  focus: [
    "Detection Engineering",
    "Threat Hunting",
    "CTI Workflows",
    "SOC Automation",
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/Just1cup",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/paulo-henrique-freitas-junior/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/paulo_lyric/",
    },
  ],
} as const;

export const stats = [
  { value: "SIEM", label: "QRadar, Wazuh and Sentinel workflows" },
  { value: "CTI", label: "IOC enrichment and investigation context" },
  { value: "SOC", label: "Detection, triage and response operations" },
] as const;
