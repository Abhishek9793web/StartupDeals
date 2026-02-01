"use client";

import ScrollReveal from "@/src/components/animations/ScrollReveal";

const steps = [
    {
        title: "Create an Account",
        desc: "Sign up as a founder or startup team in minutes.",
    },
    {
        title: "Browse Exclusive Deals",
        desc: "Explore SaaS discounts across cloud, marketing, and tools.",
    },
    {
        title: "Claim & Save",
        desc: "Claim eligible deals and start saving instantly.",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <ScrollReveal>
                    <h2 className="text-4xl font-bold text-center">
                        How It Works
                    </h2>
                </ScrollReveal>

                <div className="mt-16 grid md:grid-cols-3 gap-10">
                    {steps.map((step, i) => (
                        <ScrollReveal key={step.title} delay={i * 0.15}>
                            <div className="p-6 border rounded-xl">
                                <span className="text-sm font-semibold text-blue-600">
                                    Step {i + 1}
                                </span>
                                <h3 className="mt-2 text-xl font-semibold">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    {step.desc}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
