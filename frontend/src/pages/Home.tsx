import ReactLogo from "../assets/logo/react.svg";
import TypeScriptLogo from "../assets/logo/typescript.svg";
import JavaScriptLogo from "../assets/logo/javascript.svg";
import NodeLogo from "../assets/logo/node.svg";
import ExpressLogo from "../assets/logo/express.svg";
import SqlLogo from "../assets/logo/sql.svg";
import TailwindLogo from "../assets/logo/tailwind.svg";
import FigmaLogo from "../assets/logo/figma.svg";
import WordPressLogo from "../assets/logo/wordpress.svg";
import GitLogo from "../assets/logo/git.svg";
import SupabaseLogo from "../assets/logo/supabase.svg";
import ReduxLogo from "../assets/logo/redux.svg";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Designs from "./designs/Designs";
import Articles from "./articles/Articles";
import Connect from "./connect/Connect";
import HoverTitle from "../components/HoverTitle";
import { downloadCv } from "../constants/cv";
import GeminiLogo from "../assets/logo/gemini.svg";

// import TicTacToe from "../components/TicTacToe";
// import IllustartorLogo from "../assets/logo/illlu.svg";

type TechStack = {
  key: string;
  name: string;
  icon?: React.ReactNode;
}

const techStack: TechStack[] = [
  {
    key: "javascript",
    name: "JavaScript",
    icon: JavaScriptLogo,
  },
  {
    key: "react",
    name: "React",
    icon: ReactLogo,
  },
  {
    key: "typescript",
    name: "TypeScript",
    icon: TypeScriptLogo,
  },
  {
    key: "redux",
    name: "Redux",
    icon: ReduxLogo,
  },
  {
    key: "nodejs",
    name: "Node.js",
    icon: NodeLogo,
  },
  {
    key: "express",
    name: "Express",
    icon: ExpressLogo,
  },
  {
    key: "sql",
    name: "SQL",
    icon: SqlLogo,
  },
  {
    key: "tailwindcss",
    name: "Tailwind CSS",
    icon: TailwindLogo,
  },
  {
    key: "figma",
    name: "Figma",
    icon: FigmaLogo,
  },
  {
    key: "wordpress",
    name: "WordPress",
    icon: WordPressLogo,
  },
  {
    key: "git",
    name: "Git",
    icon: GitLogo,
  },
  {
    key: "supabase",
    name: "Supabase",
    icon: SupabaseLogo,
  },
  {
    key: "gemini",
    name: "Gemini",
    icon: GeminiLogo,
  }
]

type RecentWork = {
  key: string;
  name: string;
  type: string;
  link: string;
}

const recentWork: RecentWork[] = [
  {
    key: "jobsBoard",
    name: "Jobs Board",
    type: "Project",
    link: "https://jobs-board-tracking.vercel.app/"
  },
  {
    key: "ShieldX",
    name: "ShieldX",
    type: "Project",
    link: "https://shieldx-protect.vercel.app/"
  },
  {
    key: "uiconsistency",
    name: "UI Consistency",
    type: "Article",
    link: "https://medium.com/@omkar.frontenddev/ui-consistency-c7b52377b691"
  }
]

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-bg text-text lg:px-40 p-5 grid grid-cols-1 gap-16">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 min-h-[calc(70vh)] scroll-mt-20" id="home">
            {/* Name, Title & Summary */}
            <div className="h-full flex items-center justify-center">
              <div className="flex flex-col items-start gap-3">
                <p className="text-text/50">Hello,</p>
                <p className="text-4xl">I'm <span className="font-semibold">Omkar Bokil</span></p>
                <p>Software Developer</p>
                <p className="text-text/90 mt-3 text-sm leading-6">
                with 3+ years of experience building scalable web applications using React, TypeScript, and Node.js. Proven track record of
                improving performance metrics, reducing load times, and delivering enterprise-grade solutions across ERP and automation platforms
                </p>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mt-3">
                  {techStack.map((tech) => (
                    <div key={tech.key} className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border border-text/20 hover:border-emerald-600 transition-colors duration-500 cursor-default">
                      {
                        tech.icon &&
                        <img src={tech.icon as string} alt={tech.name} className="w-4 h-4" />
                      }
                      <p className="text-xs">{tech.name}</p>
                    </div>
                  ))}
                </div>
                {/* View CV */}
                <div className="flex items-center gap-2 mt-4">
                  <button
                    type="button"
                    onClick={downloadCv}
                    className="px-4 py-2 rounded-lg text-neutral-700 text-xs bg-black/10 font-medium hover:bg-emerald-600 hover:text-white transition-colors duration-300"
                  >
                    View CV
                  </button>
                </div>
              </div>
            </div>
            {/* Illustration */}
            <div className="h-full flex items-center md:justify-end justify-center w-full">
              {/* <img src={IllustartorLogo as string} alt="Illustration" className="w-full h-full 
              object-contain" /> */}
              <div className="flex flex-col md:items-end items-center gap-3 w-full">
                <p className="text-3xl font-semibold text-black/30">Recent Work</p>
                <div className="sm:w-1/2 w-full flex flex-col gap-3">
                  {
                    recentWork.map((work) => (
                      <div key={work.key} data-cursor="pointer" className="flex items-center p-3 border border-black/10 rounded-xl 
                      justify-between gap-3 w-full cursor-pointer hover:border-emerald-600 
                      transition-colors duration-500 group" onClick={() => window.open(work.link, "_blank")}>
                        <p className="text-sm font-medium">{work.name}</p>
                        <HoverTitle title={work.type} titleClassName="text-xs font-normal text-text/50" arrowClassName="text-text/50" />
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          {/* Experience */}
          <div id="experience" className="scroll-mt-20">
            <Experience />
          </div>
          {/* Projects */}
          <div id="projects" className="scroll-mt-20">
            <Projects />
          </div>
          {/* Designs */}
          <div id="designs" className="scroll-mt-20">
            <Designs />
          </div>
          {/* Articles */}
          <div id="articles" className="scroll-mt-20">
            <Articles />
          </div>
          {/* Connect */}
          <div id="connect" className="scroll-mt-20">
            <Connect />
          </div>
      </main>
    </>
  )
}