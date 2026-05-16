import HoverTitle from "../../components/HoverTitle";
import JobsBoard from "../../assets/images/jobsBoard.png"
import ShieldX from "../../assets/images/shieldx.png"

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
        description: "Built a full-stack job aggregation platform using React, TypeScript, and Express that consolidates listings from multiple providers (Adzuna, SerpAPI, Remotive, Himalayas, JSearch) into a unified search experience with portal-specific filtering and navigation. Implemented a secure Node.js/Express API layer with server-side API key management and CORS configuration, handling provider-specific constraints (Cloudflare proxying, asset handling) to deliver a responsive Tailwind UI.",
        image: JobsBoard,
        link: "https://jobs-board-tracking.vercel.app/",
        techStack: ["React", "TypeScript", "Express", "Tailwind CSS", "REST API"],
    },
    
    {
        key: "shieldX",
        name: "ShieldX",
        description: "Developed a full-stack password manager with React 19, TypeScript, and Supabase, implementing JWT-based authentication, user-scoped access control, and client-side AES-GCM encryption with PBKDF2 key derivation (100k iterations). Built vault CRUD operations with reveal/hide and lock/unlock flows, maintaining security separation between authentication, API access, and browserbased decryption with session-scoped keys.",
        image: ShieldX,
        link: "https://shieldx-protect.vercel.app/login",
        techStack: ["React", "TypeScript", "Express", "REST API", "Supabase", "Web Crypto", "Tailwind CSS"],
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
                        <div className="flex flex-wrap gap-2">
                            {
                                project.techStack.map((tech) => (
                                    <p key={tech} className="text-xs text-text/70 w-fit px-2 py-1 bg-black/10 rounded-sm">{tech}</p>
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