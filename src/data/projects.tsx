import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiBootstrap,
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiSymfony,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiWordpress,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  laravel: {
    title: "Laravel",
    bg: "black",
    fg: "white",
    icon: <SiLaravel />,
  },
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <SiPhp />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  symfony: {
    title: "Symfony",
    bg: "black",
    fg: "white",
    icon: <SiSymfony />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  wordpress: {
    title: "WordPress",
    bg: "black",
    fg: "white",
    icon: <SiWordpress />,
  },
  elementor: {
    title: "Elementor",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold text-sm">El</span>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold text-sm">JV</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "akakus",
    category: "Real Estate",
    title: "Akakus Real Estate",
    src: "/assets/projects-screenshots/akakus/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.bootstrap],
      backend: [PROJECT_SKILLS.laravel, PROJECT_SKILLS.php, PROJECT_SKILLS.mysql],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A real estate sales platform built with Laravel 10 and MySQL. Features secure payment gateways, CRUD operations for property listings, and a responsive UI.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "harmud",
    category: "Education",
    title: "Harmud School Portal",
    src: "/assets/projects-screenshots/harmud/landing.png",
    screenshots: ["landing.png"],
    live: "#",
    skills: {
      frontend: [PROJECT_SKILLS.bootstrap],
      backend: [PROJECT_SKILLS.laravel, PROJECT_SKILLS.php, PROJECT_SKILLS.mysql],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A real estate portal specifically designed for private schools, developed with Laravel 10. Features responsive design and robust database architecture.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "tunisietelecom",
    category: "Mobile App",
    title: "Tunisie Telecom Store Locator",
    src: "/assets/projects-screenshots/tunisietelecom/landing.png",
    screenshots: ["landing.png"],
    live: "#",
    skills: {
      frontend: [PROJECT_SKILLS.bootstrap],
      backend: [PROJECT_SKILLS.symfony, PROJECT_SKILLS.php, PROJECT_SKILLS.mysql],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A mobile web app for store location management built with Symfony. Features REST API endpoints and hybrid app integration for seamless location tracking.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "captb",
    category: "Enterprise",
    title: "CapTb HR & Accounting",
    src: "/assets/projects-screenshots/captb/landing.png",
    screenshots: ["landing.png"],
    live: "#",
    skills: {
      frontend: [PROJECT_SKILLS.bootstrap],
      backend: [PROJECT_SKILLS.php, PROJECT_SKILLS.java, PROJECT_SKILLS.mysql],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            An HR and accounting management system developed with PHP5, C, and Java/JSP. Manages employee records, payroll, and financial data with a Bootstrap frontend.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "mairiefacile",
    category: "Government",
    title: "Mairie-Facile",
    src: "/assets/projects-screenshots/mairiefacile/landing.png",
    screenshots: ["landing.png"],
    live: "#",
    skills: {
      frontend: [PROJECT_SKILLS.bootstrap],
      backend: [PROJECT_SKILLS.laravel, PROJECT_SKILLS.php, PROJECT_SKILLS.mysql],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A municipal services portal built with Laravel Breeze. Features user authentication, service request management, and OVH hosting deployment.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "travelin",
    category: "Travel",
    title: "Travelin",
    src: "/assets/projects-screenshots/travelin/landing.png",
    screenshots: ["landing.png"],
    live: "#",
    skills: {
      frontend: [PROJECT_SKILLS.elementor],
      backend: [PROJECT_SKILLS.wordpress, PROJECT_SKILLS.php, PROJECT_SKILLS.mysql],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A travel agency WordPress site with booking engine integration. Custom Elementor blocks and responsive layouts for multi-region support.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];
export default projects;
