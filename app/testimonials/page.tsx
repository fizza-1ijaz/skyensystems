import type { Metadata } from "next";
import { TestimonialsPageContent } from "@/components/marketing/TestimonialsPageContent";

export const metadata: Metadata = {
  title: "Testimonials | Skyen Systems",
  description: "See client feedback, ratings, and outcomes delivered by Skyen Systems.",
};

const testimonials = [
  {
    name: "A. Rahman, COO",
    rating: 5,
    feedback: "Skyen Systems delivered exactly what we needed and transformed our daily operations.",
    result: "Reduced operational workload by 50%",
  },
  {
    name: "M. Chen, Product Director",
    rating: 5,
    feedback: "Their team combined engineering excellence with practical business thinking.",
    result: "Improved system efficiency and user retention",
  },
  {
    name: "S. Malik, Founder",
    rating: 5,
    feedback: "From strategy to launch, everything was smooth and highly professional.",
    result: "Increased user engagement",
  },
];

export default function TestimonialsPage() {
  return <TestimonialsPageContent testimonials={testimonials} />;
}

