import HoverTitle from "../../components/HoverTitle"

const articles = [
    {
        key: "article1",
        title: "UI Consistency",
        description: "When people talk about good design, they often focus on animations, gradients, modern layouts, or trending aesthetics. But one thing that silently separates a polished product from an average one is UI consistency.",
        link: "https://medium.com/@omkar.frontenddev/is-ai-making-us-think-less-f08727b128e5"
    },
    {
        key: "article2",
        title: "Is AI Making Us Think Less?",
        description: "Artificial Intelligence has made life easier in ways we never imagined. Today, people use AI for almost everything, writing emails, solving coding issues, generating ideas, making decisions, and even replying to messages.",
        link: "https://medium.com/@omkar.frontenddev/ui-consistency-c7b52377b691"
    },
]

export default function Articles() {
    return (
        <div className="flex flex-col gap-8">
            {/* Title */}
            <div className="relative w-fit">
                <p className="text-3xl font-semibold text-text w-fit">Articles<span className="text-emerald-600 text-5xl">.</span></p>
            </div>
            {/* Cards */}
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                {
                    articles.map((article) => (
                        <div className="flex flex-col gap-1 group" onClick={() => window.open(article.link, "_blank")} data-cursor="pointer">
                            <HoverTitle
                                title={article.title}
                                titleClassName="text-lg font-semibold"
                                className="justify-end text-nowrap"
                            />
                            <div className="p-5 bg-black/5 rounded-2xl">
                                <p className="text-sm line-clamp-4 text-ellipsis overflow-hidden">{article.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}