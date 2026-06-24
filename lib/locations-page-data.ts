export const LOCATIONS_HERO = {
  eyebrow: "Locations",
  headline: "Engineering talent where innovation happens.",
  supporting:
    "A global delivery network — head office in Bahrain, engineering centre in Lahore, and client operations across the US, UK, and GCC.",
} as const;

export const GLOBAL_NODES = [
  { id: "bahrain", label: "Manama", role: "Head Office", x: 58, y: 38 },
  { id: "lahore", label: "Lahore", role: "Engineering Hub", x: 72, y: 28 },
  { id: "us", label: "United States", role: "Client Market", x: 22, y: 26 },
  { id: "uk", label: "United Kingdom", role: "Client Market", x: 46, y: 16 },
  { id: "gcc", label: "GCC", role: "Client Market", x: 62, y: 34 },
] as const;

export const LOCATION_SHOWCASE = [
  {
    city: "Manama, Bahrain",
    role: "Corporate headquarters & governance",
    capabilities: ["Legal entity", "Client contracts", "Executive leadership", "GCC market access"],
    expertise: "Qismat Ventures W.L.L. (CR 190698-1) — Office 501, Building 1025, Road 3621, Block 436, Al-Seef.",
    contact: "+973 8048045 · Info@qismatventures.com",
    dark: false,
  },
  {
    city: "Lahore, Pakistan",
    role: "Primary development & delivery centre",
    capabilities: [
      "Full-stack engineering",
      "Mobile & AI development",
      "Design & digital marketing",
      "PSEB-certified export operations",
    ],
    expertise:
      "12/27 AA Commercial, Sector D, Bahria Town — senior developers, designers, and AI engineers on client projects Mon–Fri, 9am–6pm PKT.",
    contact: "+92-423-5482980 · Info@skyensystems.com",
    dark: true,
  },
  {
    city: "United States",
    role: "Client operations & timezone overlap",
    capabilities: ["US business-hour response", "Dedicated team overlap", "English-first delivery"],
    expertise: "Info@skyensystems.com — response within 4 hours during US business hours (Mon–Fri, 9am–6pm ET).",
    contact: "Remote-first client partnerships",
    dark: false,
  },
] as const;

export const GLOBAL_MODEL_PILLARS = [
  {
    title: "Timezone Coverage",
    description: "US-friendly overlap from Lahore plus Bahrain coordination for GCC clients.",
  },
  {
    title: "Talent Access",
    description: "PSEB-registered engineering hub with senior full-time practitioners — not bench freelancers.",
  },
  {
    title: "Scalability",
    description: "Dedicated squads scale with your roadmap without re-hiring or agency handoffs.",
  },
  {
    title: "Regional Expertise",
    description: "Local entity in Bahrain, export-grade delivery from Pakistan, global client experience.",
  },
] as const;

export const LOCATION_STATS = [
  { value: "4", label: "Regions served — US, UK, GCC, Pakistan" },
  { value: "2", label: "Operational Offices" },
  { value: "20+", label: "Projects Delivered Internationally" },
  { value: "8+", label: "Industries Supported" },
] as const;
