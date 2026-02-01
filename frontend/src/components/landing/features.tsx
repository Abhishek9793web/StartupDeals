"use client";

import ScrollReveal from "@/src/components/animations/ScrollReveal";

const features = [
    {
        title: "Verified Startup Deals",
        desc: "Access discounts reserved for early-stage startups and founders.",
    },
    {
        title: "Simple Claim Process",
        desc: "Claim deals in one click and track approval status in your dashboard.",
    },
    {
        title: "Founder-First Design",
        desc: "Built to save time, money, and mental energy.",
    },
];

export default function Features() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
                {features.map((f, i) => (
                    <ScrollReveal key={f.title} delay={i * 0.15}>
                        <div className="p-6 border rounded-xl hover:shadow-md transition">
                            <h3 className="text-xl text-gray-400 font-semibold">{f.title}</h3>
                            <p className="mt-3 text-gray-600">{f.desc}</p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
