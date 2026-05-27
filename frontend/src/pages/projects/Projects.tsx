import HoverTitle from "../../components/HoverTitle";
import JobsBoard from "../../assets/images/jobsBoard.png"
import ShieldX from "../../assets/images/shieldx.png"
import { techStack } from "../../constants/techStack";

type Project = {
    key: string;
    name: string;
    description: string;
    image: string;
    link: string;
    techStack: string[];
}

const projects: Project[] = [
    {
        key: "jobsBoard",
        name: "Jobs Board",
        description: "Built a full-stack job aggregation platform using React, TypeScript, and Express that aggregates listings from multiple providers (Adzuna, SerpAPI, Remotive, Himalayas, JSearch) into a unified search experience with portal-specific filtering. Developed a secure Node.js/Express API layer with server-side API key management and CORS configuration, using Supabase for auth/database and delivering a responsive Tailwind UI. Integrated Google Gemini API for CV parsing and PDF data extraction from uploaded resumes.",
        image: JobsBoard,
        link: "https://jobs-board-tracking.vercel.app/",
        techStack: ['react', 'typescript', 'express', 'tailwindcss', 'restapi', 'supabase', 'gemini'],
    },
    
    {
        key: "shieldX",
        name: "ShieldX",
        description: "Developed a full-stack password manager with React 19, TypeScript, and Supabase, implementing JWT-based authentication, user-scoped access control, and client-side AES-GCM encryption with PBKDF2 key derivation. Built vault CRUD operations with reveal/hide and lock/unlock flows, maintaining security separation between authentication, API access, and browserbased decryption with session-scoped keys.",
        image: ShieldX,
        link: "https://shieldx-protect.vercel.app/login",
        techStack: ['react', 'typescript', 'express', 'restapi', 'supabase', 'webcrypto', 'tailwindcss'],
    },
]

export default function Projects() {
  return (
    <div className="flex flex-col gap-8">
        {/* Title */}
        <div className="relative w-fit">
            <p className="text-3xl font-semibold text-text w-fit">Projects<span className="text-emerald-600 text-5xl">.</span></p>
        </div>
        {/* Cards */}
        <div className="relative sm:p-10 p-2 overflow-hidden">
            <div
                aria-hidden
                className="pointer-events-none absolute -inset-px bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-size-[32px_32px]"
            />
            <div className="relative grid grid-cols-1 gap-10">
        {
            projects.map((project) => (
                <div key={project.key} className="flex md:flex-row flex-col gap-5 items-center justify-between group" onClick={() => window.open(project.link, "_blank")} data-cursor="pointer">
                    <div className="flex flex-col">
                        <HoverTitle
                            title={project.name}
                            className="justify-end"
                            titleClassName="text-xl font-semibold"
                            arrowClassName="text-black"
                        />
                        <img src={project.image} alt={project.name} className="w-full h-60 object-cover border border-black/10 rounded-2xl" />
                    </div>
                    <div className="flex flex-col gap-3 md:w-1/2 w-full">
                        <p className="text-sm text-text/70 w-full">{project.description}</p>
                        <div className="flex flex-wrap gap-3">
                        {
                            project.techStack.map((tech: any) => (
                                <div key={tech?.key} className="flex items-center gap-1 border border-emerald-600 bg-white rounded-full px-2 py-1">
                                    <img src={techStack[tech]?.icon} alt={techStack[tech]?.label} className="w-4 h-4" />
                                    <p className="text-xs text-text/70">{techStack[tech]?.label}</p>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            ))
        }
            </div>
        </div>
    </div>
  )
}