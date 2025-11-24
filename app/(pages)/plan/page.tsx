"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

const timelineData = [
  {
    phase: "Alpha",
    status: "current",
    date: "Now - Dec 2025",
    title: "Foundation & Core Experience",
    description:
      "Building the foundation with focus on design, architecture, and user experience optimization.",
    items: [
      "Clean, modern UI design",
      "Robust architecture setup",
      "Performance optimization",
      "Core functionality implementation",
    ],
  },
  {
    phase: "Beta",
    status: "planned",
    date: "Jan 2026",
    title: "Data Integration & Personalization",
    description:
      "Integrating professional data sources and creating personalized user experiences.",
    items: [
      "LinkedIn profile integration",
      "GitHub data synchronization",
      "Global user context system",
      "Enhanced personalization features",
    ],
  },
  {
    phase: "Stable v1.0",
    status: "planned",
    date: "Jan 2026",
    title: "Production Release",
    description:
      "Stable release with all beta features fully tested and production-ready.",
    items: [
      "Complete data integration",
      "Stable API endpoints",
      "Full documentation",
      "Production deployment",
    ],
  },
  {
    phase: "Future",
    status: "planned",
    date: "Mid 2026",
    title: "AI-Powered Features",
    description:
      "Next-generation features powered by AI for enhanced content creation.",
    items: [
      "Resume builder integration",
      "Linktree-style options",
      "AI content optimization agents",
      "Smart content suggestions",
    ],
  },
];

export default function PlanPage() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      <Container size="lg" className="relative z-10 py-20 sm:py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 font-display text-4xl text-white sm:text-5xl md:text-6xl">
            Product Roadmap
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400 sm:text-xl">
            Our journey to build the future of personal portfolio websites
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {timelineData.map((item) => (
            <TimelineContent key={item.phase} item={item} />
          ))}
        </motion.div>
      </Container>
    </div>
  );
}

function TimelineContent({ item }: { item: (typeof timelineData)[0] }) {
  return (
    <div className="rounded-lg border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-sm">
      <div className="mb-2 flex items-center gap-2">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            item.status === "current"
              ? "bg-emerald-500/20 text-emerald-400"
              : "bg-sky-500/20 text-sky-400"
          }`}
        >
          {item.phase}
        </span>
        <span className="text-sm text-zinc-500">{item.date}</span>
      </div>
      <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
        {item.title}
      </h3>
      <p className="mb-4 text-zinc-400">{item.description}</p>
      <ul className="space-y-2">
        {item.items.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-sm text-zinc-300"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
