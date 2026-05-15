type Experience = {
    key: string;
    company: string;
    position: string;
    description: string;
    startDate: string;
    endDate: string;
}

const experience: Experience[] = [
    {
        key: "experience1",
        company: "Sapper",
        position: "Software Developer",
        description: "Develop pixel-perfect React components from Figma designs, building multi-stage approval workflows and real-time analytics dashboards with role-based data visualization. Optimize performance for data-heavy interfaces through lazy loading and code splitting, while implementing complex form validation and RESTful API integrations. Collaborate with UX designers to deliver responsive, production-ready components ensuring seamless cross-device experiences and improved data accuracy across the platform.",
        startDate: "May 2025",
        endDate: "Present"
    },
    {
        key: "experience2",
        company: " SoftwareGen Technologies",
        position: "Software Developer",
        description: "Built and styled responsive websites for diverse clients using React, JavaScript, and modern CSS frameworks (Tailwind, Bootstrap, SCSS), increasing client satisfaction by 40%. Designed and implemented pixel-perfect interfaces from Figma mockups, ensuring cross-platform consistency and improving UI quality by 30%. Integrated analytics tools (Google Analytics, Tag Manager) to track user behavior and optimize conversion funnels, while performing comprehensive QA testing that reduced user-reported issues by 20%.",
        startDate: "July 2024",
        endDate: "Jan 2025"
    },
    {
        key: "experience3",
        company: "Shrisoft System Solutions",
        position: "Software Developer",
        description: "Led full-stack development for an Enterprise Resource Planning (ERP) system, optimizing CRM, Projects, and Procurement modules through feature enhancements that reduced front-end loading time by 40%. Developed and maintained RESTful APIs using Node.js, Express, and MySQL to support core ERP functionality and improve data processing efficiency. Streamlined development workflows and presented technical solutions in client meetings, contributing to improved project delivery timelines and enhanced stakeholder satisfaction.",
        startDate: "Oct 2022",
        endDate: "Jun 2024"
    }
]

export default function Experience() {
  return (
    <div className="flex flex-col gap-8">
        {/* Title */}
        <div className="relative w-fit">
            <p className="text-3xl font-semibold text-text w-fit">Experience<span className="text-emerald-600 text-5xl">.</span></p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 gap-4">
            {
                experience.map((exp) => (
                    <div key={exp.key} className="group flex flex-col gap-2 p-6 bg-black/5 rounded-2xl cursor-default border border-transparent hover:border-emerald-200 transition-colors duration-500">
                        <div className="flex sm:flex-row flex-col justify-between">
                            <p className="text-lg font-medium text-text group-hover:text-emerald-600 transition-colors duration-500">{exp.company}</p>
                            <p className="text-sm text-text/70 sm:mt-0 mt-2">{exp.startDate} - {exp.endDate}</p>
                        </div>
                        <p className="text-sm text-text/70">{exp.position}</p>
                        <p className="text-sm text-text/70 group-hover:text-text transition-colors duration-500">{exp.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}