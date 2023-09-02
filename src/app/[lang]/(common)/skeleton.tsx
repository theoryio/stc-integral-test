interface SkeletonProps {
    type?: string,
    lang?: string
}
export default function Skeleton({ lang }: SkeletonProps) {
    return <div className="w-full flex flex-col items-start justify-start gap-6">
        <div className="flex flex-row items-start justify-start gap-7 w-full mb-4">
            <div className="w-16 h-20 rounded-lg bg-skeleton-gradient bg-[200%] animate-shine" style={{ backgroundSize: "400% 100%", backgroundPositionX: "200%" }}>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
                <div className="w-60 h-6 max-w-full rounded bg-skeleton-gradient bg-[200%] animate-shine" style={{ backgroundSize: "200% 100%", backgroundPositionX: "200%" }}></div>
                <div className="w-80 h-4 max-w-full rounded bg-skeleton-gradient bg-[200%] animate-shine" style={{ backgroundSize: "200% 100%", backgroundPositionX: "200%" }}></div>
                <div className="flex flex-row items-start justify-start gap-2 md:hidden">
                    <div className="py-2 px-3 w-32 text-xs rounded-full bg-skeleton-gradient bg-[200%] animate-shine" style={{ backgroundSize: "200% 100%", backgroundPositionX: "200%" }}></div>
                </div>
            </div>
            <div className="hidden md:flex flex-row items-start justify-start gap-2">
                <div className="py-2 px-3 h-8 w-24 text-sm rounded-full bg-background/10 text-background bg-skeleton-gradient bg-[200%] animate-shine" style={{ backgroundSize: "200% 100%", backgroundPositionX: "200%" }}></div>
                <div className="py-2 px-3 h-8 w-24 text-sm rounded-full bg-background/10 text-background bg-skeleton-gradient bg-[200%] animate-shine" style={{ backgroundSize: "200% 100%", backgroundPositionX: "200%" }}></div>
                <div className="py-2 px-3 h-8 w-24 text-sm rounded-full bg-background/10 text-background bg-skeleton-gradient bg-[200%] animate-shine" style={{ backgroundSize: "200% 100%", backgroundPositionX: "200%" }}></div>
            </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-stretch justify-start gap-20 md:gap-0">
            <div className="flex-[2] flex flex-row items-start justify-start gap-2">
                <div className="w-[138px] h-[226px] rounded-lg bg-skeleton-gradient bg-[200%] animate-shine" style={{ backgroundSize: "400% 100%", backgroundPositionX: "200%" }}></div>
                <div className="w-[138px] h-[226px] rounded-lg bg-skeleton-gradient bg-[200%] animate-shine" style={{ backgroundSize: "400% 100%", backgroundPositionX: "200%" }}></div>
            </div>
            <div className={`flex-1 flex flex-col items-start justify-start gap-2 md:border-gray-600/5 ${lang == "ar" ? "md:border-r md:mr-4 md:pr-4" : "md:border-l md:ml-4 md:pl-4"}`}>
                <div className="w-60 h-6 max-w-full rounded bg-skeleton-gradient bg-[200%] animate-shine" style={{ backgroundSize: "200% 100%", backgroundPositionX: "200%" }}></div>
                <div className="w-80 h-4 max-w-full rounded bg-skeleton-gradient bg-[200%] animate-shine" style={{ backgroundSize: "200% 100%", backgroundPositionX: "200%" }}></div>
                <div className="w-80 h-4 max-w-full rounded bg-skeleton-gradient bg-[200%] animate-shine" style={{ backgroundSize: "200% 100%", backgroundPositionX: "200%" }}></div>
                <div className="w-60 h-4 max-w-full rounded bg-skeleton-gradient bg-[200%] animate-shine" style={{ backgroundSize: "200% 100%", backgroundPositionX: "200%" }}></div>
                <div className="mt-4 w-60 h-6 max-w-full rounded bg-skeleton-gradient bg-[200%] animate-shine" style={{ backgroundSize: "200% 100%", backgroundPositionX: "200%" }}></div>
                <div className="w-80 h-4 max-w-full rounded bg-skeleton-gradient bg-[200%] animate-shine" style={{ backgroundSize: "200% 100%", backgroundPositionX: "200%" }}></div>
                <div className="w-60 h-4 max-w-full rounded bg-skeleton-gradient bg-[200%] animate-shine" style={{ backgroundSize: "200% 100%", backgroundPositionX: "200%" }}></div>
                <div className="mt-4 w-60 h-6 max-w-full rounded bg-skeleton-gradient bg-[200%] animate-shine" style={{ backgroundSize: "200% 100%", backgroundPositionX: "200%" }}></div>
                <div className="w-80 h-4 max-w-full rounded bg-skeleton-gradient bg-[200%] animate-shine" style={{ backgroundSize: "200% 100%", backgroundPositionX: "200%" }}></div>
                <div className="w-60 h-4 max-w-full rounded bg-skeleton-gradient bg-[200%] animate-shine" style={{ backgroundSize: "200% 100%", backgroundPositionX: "200%" }}></div>
            </div>
        </div>
    </div>
}