"use client";

import Link from "next/link";
import ScrollReveal from "@/src/components/animations/ScrollReveal";

export default function CTA() {
    return (
        <section className="py-20 bg-gray-50 text-center">
            <ScrollReveal>
                <h2 className="text-4xl font-bold">
                    Start Saving from Day One
                </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
                <p className="mt-4 text-gray-600">
                    Join founders who are scaling smarter, not harder.
                </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
                <Link
                    href="/auth/register"
                    className="inline-block mt-8 px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
                >
                    Create Free Account
                </Link>
            </ScrollReveal>
        </section>
    );
}
