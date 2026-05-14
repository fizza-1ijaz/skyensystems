export type LaunchOrRetainerPlan = {
  name: string;
  price: string;
  cta: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export const PACKAGES: LaunchOrRetainerPlan[] = [
  {
    name: "Start",
    price: "$750",
    cta: "/contact?plan=start",
    description:
      "Everything you need to show up professionally online — website, social setup, and brand.",
    features: [
      "Professional website — up to 6 pages",
      "Mobile responsive + SEO-ready structure",
      "Social media profile optimization (3 platforms)",
      "Google Business Profile setup or optimization",
      "Basic brand kit — logo, colors, fonts",
      "Google Analytics setup",
      "30 days post-launch support",
    ],
  },
  {
    name: "Grow",
    price: "$1,500",
    cta: "/contact?plan=grow",
    featured: true,
    description:
      "The full digital foundation to scale with confidence — brand, web, social, and content.",
    features: [
      "Everything in START",
      "Website expanded to 10 pages + blog setup",
      "Full brand identity + brand guide document",
      "30 branded social post templates",
      "1 month social media management included",
      "Email newsletter template design",
      "60 days post-launch support",
    ],
  },
  {
    name: "Lead",
    price: "$4,000+",
    cta: "/contact?plan=lead",
    description:
      "Complete digital transformation — web, app, brand, SEO, and marketing. Custom scoped in discovery.",
    features: [
      "Everything in GROW",
      "Custom web app or mobile app (iOS + Android)",
      "Advanced SEO — keyword research + Search Console",
      "Paid ad campaign setup + ad creatives",
      "Dedicated project manager",
      "Quarterly strategy call",
      "90 days post-launch support",
    ],
  },
];

export const RETAINERS: LaunchOrRetainerPlan[] = [
  {
    name: "Steady",
    price: "$400/mo",
    cta: "/contact?plan=steady",
    description:
      "Consistent social presence across 2 platforms. Ideal for businesses that need to stay visible without the daily stress.",
    features: [
      "3 posts per week across 2 platforms",
      "Custom graphics for every post — no stock templates",
      "Caption writing + hashtag strategy",
      "Community management — comments and DMs",
      "Monthly performance report",
    ],
  },
  {
    name: "Amplify",
    price: "$600/mo",
    cta: "/contact?plan=amplify",
    featured: true,
    description:
      "Higher frequency, more platforms, paid ad management. For businesses ready to grow their reach and run campaigns.",
    features: [
      "5 posts per week across 3 platforms",
      "Custom graphics + 1 reel or video per week",
      "Bi-weekly strategy call",
      "Paid ad campaign management (client pays ad spend)",
      "Full community management",
      "Bi-weekly performance report",
    ],
  },
  {
    name: "Shield",
    price: "$100/mo",
    cta: "/contact?plan=shield",
    description:
      "Monthly website care — updates, security, backups, and performance monitoring. Peace of mind for your site.",
    features: [
      "Up to 5 content updates per month",
      "Security monitoring and backups",
      "Performance optimization checks",
      "Monthly website health report",
    ],
  },
];

export type IndividualServiceRow = {
  name: string;
  price: string;
  us: string;
  save: string;
};

export const INDIVIDUAL: IndividualServiceRow[] = [
  { name: "Logo Design (3 concepts, 2 revision rounds)", price: "$125", us: "$800–$2,500", save: "~85%" },
  { name: "Landing Page — single, conversion-focused", price: "$200", us: "$1,500–$3,000", save: "~87%" },
  { name: "Brand Identity Package — full system", price: "$300", us: "$2,000–$6,000", save: "~90%" },
  { name: "Social Media Audit + Strategy Document", price: "$100", us: "$500–$1,500", save: "~80%" },
  { name: "SEO Audit + Full Report", price: "$150", us: "$800–$2,000", save: "~82%" },
  { name: "Mobile App — iOS or Android", price: "From $2,000", us: "$15,000–$40,000", save: "~87%" },
  { name: "Mobile App — iOS + Android", price: "From $3,500", us: "$25,000–$80,000", save: "~90%" },
  { name: "Web Application / SaaS MVP", price: "From $2,500", us: "$15,000–$50,000", save: "~85%" },
];
