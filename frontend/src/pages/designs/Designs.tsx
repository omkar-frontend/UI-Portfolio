import HoverTitle from "../../components/HoverTitle";
import UIComponents from "../../assets/images/components.png";
import Dashboard from "../../assets/images/dashboard.png";
import ChatAppUI from "../../assets/images/chat-app-ui.png";

const designColors = {
    design1: {
        bg: "#31572c",
        text: "#cee8ca",
        border: "#FFFFFF",
    },
    design2: {
        bg: "#1b263b",
        text: "#ccd8eb",
        border: "#FFFFFF",
    },
    design3: {
        bg: "#ad2831",
        text: "#f8d5d3",
        border: "#FFFFFF",
    },
} as const;

type DesignKey = keyof typeof designColors;

type Design = {
    key: DesignKey;
    name: string;
    description: string;
    image: string;
    link: string;
};

const designs: Design[] = [
    {
        key: "design1",
        name: "UI Components",
        description: "Designed modern, user-centric interfaces in Figma, balancing functionality, usability, and visual aesthetics to deliver intuitive user experiences.",
        image: UIComponents,
        link: "https://www.figma.com/proto/owJjfrJmXTkVpVHMJDSobY/Components?node-id=1-2&t=arp67JDEjPdPhUSp-1",
    },
    {
        key: "design2",
        name: "Dashboard",
        description: "Designed modern, user-friendly dashboards with intuitive navigation and effective data visualizations to deliver seamless and engaging user experiences.",
        image: Dashboard,
        link: "https://www.figma.com/proto/fNaQkhJlB3tpBOInyLIgx0/Dashboards?node-id=1-2&t=O4qiwBoKtITIoszf-1",
    },
    {
        key: "design3",
        name: "Chat App UI",
        description: "Designed a sleek and user-friendly chat application interface with a focus on intuitive navigation, real-time conversations, responsive design, and an engaging messaging experience.",
        image: ChatAppUI,
        link: "https://www.figma.com/make/BDadOVHWd5Zq65jYYyPUGH/Chat-application-UI?fullscreen=1&t=kGstREqxGbaCsSeR-1&code-node-id=0-6",
    },

];

export default function Designs() {
    return (
        <div className="flex flex-col gap-8">
            {/* Title */}
            <div className="relative w-fit">
                <p className="text-3xl font-semibold text-text w-fit">Designs<span className="text-emerald-600 text-5xl">.</span></p>
            </div>
            {/* Cards */}
            <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                {
                    designs.map((design) => (
                        <div key={design.key} className="rounded-2xl p-4 flex flex-col gap-3 group" style={{ backgroundColor: designColors[design.key].bg }} onClick={() => window.open(design.link, "_blank")} data-cursor="pointer">
                            <div className="flex flex-col justify-end items-end gap-1">
                                <HoverTitle
                                    title={design.name}
                                    titleClassName="text-xl font-semibold text-white"
                                    arrowClassName="text-white"
                                />
                                <img src={design.image} alt={design.name} className="w-full sm:h-full h-52 sm:object-contain object-cover border border-black/10 rounded-2xl" />
                            </div>
                            <p className="text-sm w-full" style={{ color: designColors[design.key].text }}>{design.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}