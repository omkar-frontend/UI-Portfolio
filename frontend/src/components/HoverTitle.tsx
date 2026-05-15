import { ArrowRight } from "lucide-react";

type HoverTitleProps = {
    title: string;
    fontSize?: string;
    textColor?: string;
    arrowColor?: string;
    className?: string;
};

export default function HoverTitle({
    title,
    fontSize = "text-xl",
    textColor,
    arrowColor,
    className = "",
}: HoverTitleProps) {
    return (
        <div className={`flex items-center ${className}`}>
            <p
                className={`${fontSize} font-semibold transition-transform duration-500 group-hover:-translate-x-2`}
                style={textColor ? { color: textColor } : undefined}
            >
                {title}
            </p>
            <span className="inline-flex items-center overflow-hidden max-w-0 opacity-0 -translate-x-3 transition-all duration-500 group-hover:max-w-6 group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-1">
                <ArrowRight
                    className="w-4 h-4 shrink-0"
                    style={arrowColor ? { color: arrowColor } : undefined}
                />
            </span>
        </div>
    );
}
