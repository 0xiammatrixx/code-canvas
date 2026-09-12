export const identity = {
  name: "Otom David",
  role: "Software Engineer · Applied AI & Research",
  email: "davidotom50@gmail.com",
  github: "https://github.com/0xiammatrixx",
  twitter: "https://twitter.com/_i_am_matrix",
  zenodo: "https://zenodo.org/records/22652119",
  paperDoi: "10.5281/zenodo.22652119",
  paperTitle:
    "A Validated Semantic Boundary Between Natural Language and Database Execution",
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  kind: string;
  description: string;
  detail?: string;
  results?: string[];
  stack: string[];
  links: ProjectLink[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: identity.paperTitle,
    kind: "Research paper · independent",
    description:
      "A database-instruction system in which a large language model translates instructions into a formally specified JSON intermediate representation, while validation, compilation, and execution are performed entirely by deterministic code. The LLM never emits executable code and never executes.",
    detail:
      "Published independently on Zenodo in 2026, the paper evaluates that boundary across five controlled experiments against a direct code-generation baseline.",
    results: [
      "20/20 semantically equivalent phrasings converged to one canonical IR",
      "4/4 ambiguous instructions met with grounded clarification, not guesses",
      "5/5 adversarial instructions handled safely — zero unsafe executions",
      "Baseline executed unsafe operations in 6/25 adversarial cases and crashed twice",
    ],
    stack: ["Python", "Pydantic", "DeepSeek API", "MongoDB", "pytest"],
    links: [
      { label: "Zenodo record", href: identity.zenodo },
      { label: "yourLang on GitHub", href: "https://github.com/0xiammatrixx/yourLang" },
    ],
    featured: true,
  },
  {
    title: "GIOC — Global Infrastructure Operations Console",
    kind: "Full-stack IoT fleet operations console",
    description:
      "A full-stack console for monitoring and controlling a fleet of 1,000 simulated IoT devices across 10 countries — live telemetry dashboard, world map, automatic alert engine, one-click firmware rollout, and role-based access control, served by a single Go process handling ~12,000 requests per minute.",
    stack: ["Go", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Tailwind"],
    links: [{ label: "GitHub", href: "https://github.com/0xiammatrixx/GIOC" }],
  },
  {
    title: "PhotoBook",
    kind: "Freelance client app · in progress",
    description:
      "A photo-book client application in active development for a freelance engagement, built end to end in Flutter.",
    stack: ["Dart", "Flutter"],
    links: [{ label: "GitHub", href: "https://github.com/0xiammatrixx/Photobook-app" }],
  },
  {
    title: "ArbiChat",
    kind: "Decentralized messaging · proof of concept",
    description:
      "A proof-of-concept decentralized messaging application running on a smart contract on Arbitrum Sepolia — wallet dashboard, secure on-chain messaging, tipping, and a trust-score and ranking system.",
    stack: ["Flutter", "Dart", "Firebase", "Web3Auth", "Solidity"],
    links: [
      { label: "App", href: "https://github.com/0xiammatrixx/flutter_quick_start" },
      { label: "Contracts", href: "https://github.com/0xiammatrixx/arbichat_solidity" },
      { label: "Demo", href: "https://youtu.be/FrANv7GnACM" },
    ],
  },
  {
    title: "PayWallet",
    kind: "Fintech wallet",
    description:
      "A fintech wallet supporting secure funding, transfers, withdrawals, and transaction tracking through a Paystack-backed payment flow, with a Python backend service.",
    stack: ["Flutter", "Dart", "Python", "Hive", "Provider"],
    links: [
      { label: "Frontend", href: "https://github.com/0xiammatrixx/fintech_frontend" },
      { label: "Backend", href: "https://github.com/0xiammatrixx/fintech_backend" },
      { label: "Demo", href: "https://youtu.be/PY04cv3hruQ" },
    ],
  },
  {
    title: "Aptos NFT Marketplace",
    kind: "Blockchain · marketplace frontend",
    description:
      "A frontend for an NFT marketplace smart contract on Aptos, supporting minting, listing, buying, selling, and burning — with categories, tags, and rarity levels.",
    stack: ["TypeScript", "Move", "Solidity", "Foundry"],
    links: [
      { label: "GitHub", href: "https://github.com/0xiammatrixx/apt4bounty" },
      { label: "Demo", href: "https://youtu.be/ALgkD_2Hhvk" },
    ],
  },
  {
    title: "songdownloader",
    kind: "Music download & conversion utility",
    description:
      "Downloads music from multiple sources — YouTube Music, Amazon, Apple Music, Deezer, and Spotify — through a yt-dlp and cookie-session workaround, and converts mp4 to mp3 or downloads YouTube videos.",
    stack: ["Flutter", "Dart", "Python"],
    links: [
      { label: "App", href: "https://github.com/0xiammatrixx/songdownloader" },
      { label: "Backend", href: "https://github.com/0xiammatrixx/Songdownloadbackend" },
    ],
  },
  {
    title: "pretty_duration",
    kind: "Dart package",
    description:
      "A small Dart utility that formats Duration objects into clean, human-friendly strings — built to understand package structure and the publishing flow.",
    stack: ["Dart"],
    links: [{ label: "GitHub", href: "https://github.com/0xiammatrixx/pretty_duration" }],
  },
  {
    title: "odos wallet-recovery tool",
    kind: "Wallet recovery · critical infrastructure",
    description:
      "A wallet-recovery tool built around the odos ecosystem, written in JavaScript. Documentation in progress.",
    stack: ["JavaScript"],
    links: [{ label: "GitHub", href: "https://github.com/0xiammatrixx/odos" }],
  },
  {
    title: "AxiaStack",
    kind: "Co-founder & CTO · early development",
    description:
      "A school management platform in early development, where I lead architecture and engineering as CTO and co-founder.",
    stack: ["Architecture", "Early development"],
    links: [],
  },
];

export type SkillGroup = {
  name: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    items: ["Python", "TypeScript", "Dart", "Go", "Solidity", "Move", "JavaScript", "SQL"],
  },
  {
    name: "AI & research",
    items: [
      "LLM integration",
      "Semantic IR design",
      "Deterministic validation",
      "Prompt design",
      "Vector search",
    ],
  },
  {
    name: "Systems",
    items: [
      "Software architecture",
      "REST APIs",
      "MongoDB",
      "SQLite",
      "Firebase",
      "Testing",
      "CI/CD",
    ],
  },
  {
    name: "Mobile & web3",
    items: ["Flutter", "Provider", "Bloc", "Web3Auth", "Smart contracts", "Foundry"],
  },
];
