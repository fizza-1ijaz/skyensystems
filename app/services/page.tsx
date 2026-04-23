import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/marketing/ServicesPageContent";

export const metadata: Metadata = {
  title: "Software Development Services – Odoo, Mobile Apps, AI, Web Development | Skyen Solutions",
  description: "Explore comprehensive software development services including Odoo implementation, custom platforms, mobile apps, web development, AI integration, branding, and digital marketing for growing businesses.",
  keywords: ["software development services", "custom software solutions", "AI software integration", "mobile app development", "Odoo implementation", "digital marketing services"],
};

const categories = [
  {
    title: "Enterprise Systems & Operations",
    items: [
      {
        name: "Odoo ERP Customization & Implementation",
        description: "Streamline administration, finance, HR, and operational lifecycle management with Odoo tailored to your organization.",
        features: ["Client Onboarding & Automation", "Billing & Fee Management", "Dynamic Scheduling", "Staff & Payroll Management", "Custom Analytics Dashboards"],
      },
      {
        name: "Odoo-Powered Training Platforms",
        description: "Unified platform for operations and training. Connect course delivery, customer records, and billing in one ecosystem.",
        features: ["Content Management Modules", "User Info Management", "Attendance & Timetabling", "Payment Gateway Integration", "Instructor Portals"],
      },
    ],
  },
  {
    title: "Custom Application Development",
    items: [
      {
        name: "Custom Learning Management Systems (LMS)",
        description: "Bespoke LMS aligned with your workflow, brand, and delivery model.",
        features: ["Course Architecture", "Assignment Builders", "Gamification Tools", "SCORM Compliance", "White-Label Branding"],
      },
      {
        name: "Client & Team Portals",
        description: "Secure portals for updates, attendance, and feedback.",
        features: ["Performance Tracking", "Direct Messaging", "Event Calendars", "Payment Integration", "Digital Reports"],
      },
      {
        name: "Mobile-First Apps (iOS & Android)",
        description: "Native and cross-platform apps for productivity and operations.",
        features: ["Communication Hubs", "Offline Modules", "ERP/LMS Extensions", "Push Notifications", "Biometric Login"],
      },
    ],
  },
  {
    title: "AI & Data Integration",
    items: [
      {
        name: "Intelligent Assistants & Chatbots",
        description: "24/7 AI-powered support and automated workflows.",
        features: ["NLP Chatbots", "Automated Scoring", "AI Writing Assistants", "Conversational Support", "LMS Integration"],
      },
      {
        name: "Predictive Analytics",
        description: "Forecast growth and measure effectiveness with custom dashboards.",
        features: ["Performance Risk Alerts", "Trend Forecasting", "Effectiveness Dashboards", "Data Visualization", "Automated Reporting"],
      },
      {
        name: "Adaptive Learning Pathways",
        description: "AI-driven content recommendations and skill gap analysis.",
        features: ["Skill Gap Analysis", "Recommendation Engines", "Adaptive Assessments", "Pathway Automation", "Mastery Dashboards"],
      },
    ],
  },
  {
    title: "Digital Experience & Design",
    items: [
      {
        name: "Branding & Graphic Design",
        description: "Establish a professional identity with custom visual assets.",
        features: ["Logo Systems", "Brand Guides", "Marketing Collateral", "Digital Art", "Infographics"],
      },
      {
        name: "UI/UX Design",
        description: "Intuitive, accessible interfaces for all user proficiencies.",
        features: ["User Research", "Prototyping", "WCAG Compliance", "User Testing", "Visual Design"],
      },
      {
        name: "Website Development",
        description: "Conversion-focused, SEO-optimized digital presence.",
        features: ["Responsive Corporate Sites", "Product Websites", "E-Commerce", "API Integration", "Performance SEO"],
      },
    ],
  },
  {
    title: "Growth & Marketing",
    items: [
      {
        name: "Digital Marketing",
        description: "SEO, content marketing, and social strategy to drive growth.",
        features: ["Technical SEO", "Social Community Management", "Paid Ad Campaigns", "Email Automation", "CRO Strategy"],
      },
      {
        name: "Content Strategy",
        description: "Authoritative content that drives organic traffic.",
        features: ["Keyword Research", "Authority Articles", "Case Studies", "Technical Audits", "Backlink Strategy"],
      },
    ],
  },
  {
    title: "Consulting & Strategy",
    items: [
      {
        name: "Strategic Technology Consulting",
        description: "15+ years of experience shaping digital transformation.",
        features: ["Operational Planning", "Workflow Workshops", "Transformation Roadmaps", "Team Enablement", "Procurement Strategy"],
      },
    ],
  },
  {
    title: "Virtual Administrative Support",
    items: [
      {
        name: "Virtual Assistants",
        description: "Specialized support for digital workflows.",
        features: ["Database Management", "Report Creation", "QA Documentation", "Content Preparation", "Assistant Services"],
      },
    ],
  },
];

export default function ServicesPage() {
  return <ServicesPageContent categories={categories} />;
}


