"use client";

import ScrollReveal from "@/src/components/animations/ScrollReveal";

const stats = [
    { label: "Startup Deals", value: "150+" },
    { label: "Founders Joined", value: "2,000+" },
    { label: "Avg Savings", value: "$12k" },
];

export default function Stats() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
                {stats.map((stat, i) => (
                    <ScrollReveal key={stat.label} delay={i * 0.15}>
                        <div>
                            <h3 className="text-4xl text-gray-400 font-bold">{stat.value}</h3>
                            <p className="mt-2 text-gray-600">{stat.label}</p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
