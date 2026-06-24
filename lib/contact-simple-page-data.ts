export const CONTACT_COUNTRIES = [
  "Australia",
  "United States",
  "United Kingdom",
  "Pakistan",
  "Other",
] as const;

export const CONTACT_SERVICES = [
  "Web Development",
  "Mobile App Development",
  "AI Solutions & Automation",
  "UI/UX Design",
  "SEO & Digital Marketing",
  "Dedicated Software Development Team",
  "Not Sure Yet",
] as const;

export const CONTACT_PROJECT_STAGES = [
  "I Have an Idea",
  "I Need a New Website or App",
  "I Want to Improve an Existing Product",
  "I Need AI or Automation",
  "I Need SEO / Growth Support",
  "I Need a Dedicated Team",
] as const;

export const CONTACT_FAQ = [
  {
    question: "What happens after I submit the contact form?",
    answer:
      "Our team reviews your project details, identifies the most relevant service direction, and responds with the next recommended step. This may include a discovery call, project scope discussion, technical review, or service proposal depending on your request.",
    defaultOpen: true,
  },
  {
    question: "Can Skyen Systems review an existing website, app, or digital product?",
    answer:
      "Yes. You can share your existing website, app, platform, or product details. We can review the current structure, user experience, technical direction, SEO foundation, performance issues, and improvement opportunities.",
    defaultOpen: false,
  },
  {
    question: "Do you provide project planning before development starts?",
    answer:
      "Yes. Before development begins, Skyen Systems can help define the project scope, required features, design direction, technology approach, timeline, team structure, and launch roadmap so the project starts with clarity.",
    defaultOpen: false,
  },
] as const;
