"use client";

import { Container, SectionHeading } from "@/shared/ui";
import type { TechItemData } from "@/sanity/lib/types";
import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiSanity,
  SiVercel,
  SiGit,
  SiPostgresql,
  SiFigma,
  SiDocker,
  SiPrisma,
} from "react-icons/si";

const techLogos = [
  {
    node: <SiReact className="text-[#61DAFB]" />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiNextdotjs className="text-white" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTypescript className="text-[#3178C6]" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss className="text-[#06B6D4]" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiNodedotjs className="text-[#339933]" />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiSanity className="text-[#F03E2F]" />,
    title: "Sanity",
    href: "https://www.sanity.io",
  },
  {
    node: <SiVercel className="text-white" />,
    title: "Vercel",
    href: "https://vercel.com",
  },
  {
    node: <SiGit className="text-[#F05032]" />,
    title: "Git",
    href: "https://git-scm.com",
  },
  {
    node: <SiPostgresql className="text-[#4169E1]" />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  {
    node: <SiFigma className="text-[#F24E1E]" />,
    title: "Figma",
    href: "https://www.figma.com",
  },
  {
    node: <SiDocker className="text-[#2496ED]" />,
    title: "Docker",
    href: "https://www.docker.com",
  },
  {
    node: <SiPrisma className="text-white" />,
    title: "Prisma",
    href: "https://www.prisma.io",
  },
];

interface TechStackProps {
  title: string;
  items: TechItemData[];
}

export function TechStack({ title }: TechStackProps) {
  return (
    <section className="pt-24 pb-32 bg-bg-secondary border-y border-white/5" id="tech">
      <Container>
        <SectionHeading
          variant="minimalist"
          description="Современный стек технологий"
        >
          {title}
        </SectionHeading>

        <div className="pt-32">
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={120}
            gap={48}
            hoverSpeed={10}
            scaleOnHover
            ariaLabel="Технологии и инструменты"
          />
        </div>
      </Container>
    </section>
  );
}
