"use client";

import DealCard from "./DealCard";

type Deal = {
    id: string;
    title: string;
    partner: string;
    category: string;
    isPublic: boolean;
    size?: "small" | "wide" | "tall";
};

export default function DealsBentoGrid({ deals }: { deals: Deal[] }) {
    return (
        <div
            className="
        grid grid-cols-1
        md:grid-cols-6
        auto-rows-[180px]
        gap-6
      "
        >
            {deals.map((deal) => (
                <div
                    key={deal.id}
                    className={`
            ${deal.size === "wide" ? "md:col-span-4" : ""}
            ${deal.size === "tall" ? "md:row-span-2 md:col-span-2" : ""}
            ${!deal.size || deal.size === "small" ? "md:col-span-2" : ""}
          `}
                >
                    <DealCard deal={deal} />
                </div>
            ))}
        </div>
    );
}
