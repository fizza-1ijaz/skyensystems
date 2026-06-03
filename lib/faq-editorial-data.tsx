import type { ReactNode } from "react";
import Link from "next/link";

export type FaqAnswer = ReactNode;

export type FaqItem = { q: string; a: FaqAnswer };

export type FaqChapter = {
  id: string;
  title: string;
  subtitle: string;
  items: FaqItem[];
};

function Email() {
  return (
    <a href="mailto:info@skyensystems.com" className="text-[#6C63FF] hover:underline">
      Info@skyensystems.com
    </a>
  );
}

export const FAQ_HERO = {
  eyebrow: "Before we start",
  headline: "Questions worth asking before building software.",
  supporting: [
    "We work transparently — fixed scope, milestone payments, and direct access to the engineers doing the work.",
    "Clients usually ask about cost, timeline, engagement models, and how a remote team fits their existing org.",
    "This page is a decision guide, not a support centre. Every answer reflects how we actually deliver.",
  ],
} as const;

export const FAQ_NAV_CATEGORIES = [
  { id: "featured", label: "Featured", num: "01" },
  { id: "projects", label: "Projects", num: "02" },
  { id: "engineering", label: "Technology", num: "03" },
  { id: "engagement", label: "Team structure", num: "04" },
  { id: "communication", label: "Communication", num: "05" },
  { id: "pricing", label: "Pricing", num: "06" },
  { id: "process", label: "Process", num: "07" },
  { id: "security", label: "Security", num: "08" },
  { id: "support", label: "Support", num: "09" },
] as const;

export const FAQ_FEATURED: FaqItem[] = [
  {
    q: "How much does a software project cost?",
    a: (
      <p>
        Starter websites from PKR 420,000 (~USD 1,500). Growth-tier web applications from PKR 1,120,000 (~USD
        4,000). Scale and mobile platforms are quoted individually — always fixed price, never hourly billing.{" "}
        <Link href="/pricing" className="text-[#6C63FF] hover:underline">
          Full pricing frameworks →
        </Link>
      </p>
    ),
  },
  {
    q: "How long does a project take?",
    a: (
      <p>
        A standard business website typically ships in 3–5 weeks. Growth-tier web applications run 6–10 weeks. Mobile
        apps and complex platforms receive a specific timeline in every proposal before work begins — no vague
        estimates after kickoff.
      </p>
    ),
  },
  {
    q: "What engagement models do you offer?",
    a: (
      <p>
        Three operating models: <strong>project delivery</strong> for bounded launches,{" "}
        <strong>staff augmentation</strong> to extend your existing team, and{" "}
        <strong>dedicated teams</strong> for ongoing product evolution.{" "}
        <Link href="/services" className="text-[#6C63FF] hover:underline">
          Compare models →
        </Link>
      </p>
    ),
  },
  {
    q: "How do you handle project communication?",
    a: (
      <p>
        Weekly demos, Slack or your preferred channel, and a single delivery lead accountable for status. US clients
        receive responses within 4 hours during US business hours. You speak directly with engineers — not layers of
        account management.
      </p>
    ),
  },
];

export const FAQ_CHAPTERS: FaqChapter[] = [
  {
    id: "projects",
    title: "Projects",
    subtitle: "How engagements begin and what we need from you.",
    items: [
      {
        q: "How do projects start?",
        a: (
          <p>
            A discovery conversation — no cost, no commitment. We clarify goals, constraints, and success metrics,
            then deliver a written proposal with fixed scope, timeline, and price before any build begins.
          </p>
        ),
      },
      {
        q: "What information do you need?",
        a: (
          <p>
            Business context, target users, existing systems, brand assets if available, and what success looks like
            in measurable terms. A vague idea is enough to start — our discovery process sharpens the scope.
          </p>
        ),
      },
      {
        q: "How long does discovery take?",
        a: (
          <p>
            Typically 3–7 business days for standard projects. Complex platforms may run 1–2 weeks including technical
            feasibility and architecture outline.
          </p>
        ),
      },
      {
        q: "Do I need a fully formed idea?",
        a: (
          <p>
            No. Many relationships start with a goal and an open conversation. We help you define what to build first,
            what fits the budget, and in what order.
          </p>
        ),
      },
      {
        q: "Do you sign NDAs?",
        a: (
          <p>
            Yes. Mutual NDAs before detailed discussions. Request one at <Email />.
          </p>
        ),
      },
    ],
  },
  {
    id: "engineering",
    title: "Engineering",
    subtitle: "Technology choices, quality, and scale.",
    items: [
      {
        q: "What technologies do you use?",
        a: (
          <p>
            Next.js, React, TypeScript, Node.js, PostgreSQL, React Native, Flutter, Swift, Kotlin, and modern AI
            stacks (OpenAI, Claude, LangChain). We match the stack to your product — not the other way around.{" "}
            <Link href="/services" className="text-[#6C63FF] hover:underline">
              Technology landscape →
            </Link>
          </p>
        ),
      },
      {
        q: "How do you ensure code quality?",
        a: (
          <p>
            Code review, documented handover, CI/CD pipelines, and revision rounds built into every fixed-scope
            project. Dedicated teams follow your standards and rituals where required.
          </p>
        ),
      },
      {
        q: "How do you handle scalability?",
        a: (
          <p>
            Architecture decisions are made at discovery — not patched later. We design for growth paths, monitoring,
            and sensible infrastructure on Vercel, AWS, or your preferred cloud.
          </p>
        ),
      },
      {
        q: "Who owns the work you build?",
        a: (
          <p>
            You do. Upon full payment, custom work is assigned to you. We may showcase work in our portfolio unless
            you request otherwise in writing.
          </p>
        ),
      },
    ],
  },
  {
    id: "communication",
    title: "Communication",
    subtitle: "How we stay aligned throughout delivery.",
    items: [
      {
        q: "What does weekly communication look like?",
        a: (
          <p>
            A scheduled demo or written status update every week, plus async access via Slack or your preferred
            tool. Decisions and blockers are surfaced early — not at the end of a sprint.
          </p>
        ),
      },
      {
        q: "Who will I talk to day to day?",
        a: (
          <p>
            A delivery lead plus the engineers building your product. No relay through sales or junior account
            coordinators.
          </p>
        ),
      },
      {
        q: "What are your response times?",
        a: (
          <p>
            US enquiries: within 4 hours during US business hours (Mon–Fri, 9am–6pm ET). Other regions: within one
            business day. Urgent production issues are prioritised immediately.
          </p>
        ),
      },
    ],
  },
  {
    id: "engagement",
    title: "Engagement models",
    subtitle: "How teams embed in your organisation.",
    items: [
      {
        q: "Dedicated teams",
        a: (
          <p>
            A full-time squad — developers, design, and delivery leadership — on your roadmap with US-friendly
            overlap. Best for ongoing product evolution.
          </p>
        ),
      },
      {
        q: "Staff augmentation",
        a: (
          <p>
            Senior engineers and designers join your rituals, tools, and management. We handle recruitment and bench
            strength. Best when you need capacity inside your current structure.
          </p>
        ),
      },
      {
        q: "Fixed-scope projects",
        a: (
          <p>
            Defined outcomes, milestones, and handover from discovery through launch. Best for launches, redesigns,
            and bounded initiatives with a single accountable partner.
          </p>
        ),
      },
      {
        q: "Do you work with startups and enterprises?",
        a: (
          <p>
            Both. Founders going from idea to App Store launch and established businesses overhauling legacy systems.
            What matters is a clear goal and commitment to building properly.
          </p>
        ),
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing & payments",
    subtitle: "Fixed pricing, milestones, and transparency.",
    items: [
      {
        q: "Are there hidden fees?",
        a: (
          <p>
            No. Every proposal is fixed for agreed scope. Additional work is quoted and approved before we proceed.
          </p>
        ),
      },
      {
        q: "What payment methods do you accept?",
        a: (
          <p>
            Bank transfer (local and SWIFT), Stripe, and PayPal. We do not accept cryptocurrency.
          </p>
        ),
      },
      {
        q: "Do you offer payment plans?",
        a: (
          <p>
            Yes. Projects over PKR 560,000 (~USD 2,000) typically use 50/50 milestone billing. Larger projects may use
            three stages. Dedicated teams bill monthly in advance.
          </p>
        ),
      },
      {
        q: "Can I get a PKR quote?",
        a: (
          <p>
            Yes. Pakistan-based clients receive PKR pricing at prevailing rates. Contact <Email /> for a
            PKR-denominated quote.
          </p>
        ),
      },
    ],
  },
  {
    id: "security",
    title: "Security & compliance",
    subtitle: "Data protection and professional standards.",
    items: [
      {
        q: "How is client data protected?",
        a: (
          <p>
            Confidential by default. We do not share client information except as required to deliver your project.
            Mutual NDAs available before any detailed discussion.
          </p>
        ),
      },
      {
        q: "Access control",
        a: (
          <p>
            Least-privilege access to repositories and infrastructure. Credentials managed through your preferred
            systems where possible.
          </p>
        ),
      },
      {
        q: "Are you a registered company?",
        a: (
          <p>
            Qismat Ventures W.L.L. (Bahrain CR 190698-1) with PSEB-registered operations in Lahore — verified for
            international software export.{" "}
            <Link href="/about/who-we-are" className="text-[#6C63FF] hover:underline">
              Company profile →
            </Link>
          </p>
        ),
      },
      {
        q: "What data do you collect from visitors?",
        a: (
          <p>
            Standard analytics (GA4) and form submissions. We do not sell data. See our{" "}
            <Link href="/privacy-policy" className="text-[#6C63FF] hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        ),
      },
    ],
  },
  {
    id: "support",
    title: "Post-launch support",
    subtitle: "After go-live — maintenance, growth, and iteration.",
    items: [
      {
        q: "Maintenance",
        a: (
          <p>
            Support periods cover bug fixes, minor content updates, and technical questions about delivered work.
            New features are quoted separately.
          </p>
        ),
      },
      {
        q: "Optimization",
        a: (
          <p>
            Performance, SEO, and conversion improvements as ongoing partnership or scoped initiatives after launch.
          </p>
        ),
      },
      {
        q: "Feature development",
        a: (
          <p>
            Roadmap items beyond original scope are estimated and approved before build — same transparent process
            as the initial project.
          </p>
        ),
      },
      {
        q: "What is your refund policy?",
        a: (
          <p>
            Full refund if cancelled before work starts. Once work commences, you receive all completed work to date.
            If deliverables do not meet agreed specifications, we redo work or issue appropriate refunds.{" "}
            <Link href="/refund-policy" className="text-[#6C63FF] hover:underline">
              Refund Policy →
            </Link>
          </p>
        ),
      },
    ],
  },
];

export const FAQ_CLIENT_CONCERNS = [
  {
    concern: "We've never worked with a remote team.",
    solution:
      "Weekly demos, written status, and direct engineer access replace the ambiguity of offshore outsourcing. US clients get 4-hour response during business hours.",
  },
  {
    concern: "We have an existing development team.",
    solution:
      "Staff augmentation slots senior Skyen engineers into your rituals and toolchain — we extend capacity without replacing your leadership.",
  },
  {
    concern: "We only have an idea.",
    solution:
      "Discovery is designed for that. We help define MVP scope, phasing, and budget before any code is written — at no cost for the initial conversation.",
  },
  {
    concern: "We need to move quickly.",
    solution:
      "Parallel design and engineering, pre-built component patterns, and dedicated squads when velocity is the priority. Timelines are committed in writing upfront.",
  },
] as const;

export const FAQ_PROCESS = [
  { phase: "01", title: "Discovery", detail: "Goals, constraints, and feasibility." },
  { phase: "02", title: "Strategy", detail: "Scope, architecture, and delivery model." },
  { phase: "03", title: "Design", detail: "Flows, systems, and validated prototypes." },
  { phase: "04", title: "Development", detail: "Build with weekly visibility." },
  { phase: "05", title: "Launch", detail: "QA, deployment, and handover." },
  { phase: "06", title: "Scale", detail: "Iteration, growth, and partnership." },
] as const;
