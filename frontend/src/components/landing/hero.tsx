"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

// Load 3D scene only on client (VERY IMPORTANT)
const HeroScene = dynamic(() => import("./HeroScene"), {
    ssr: false,
});

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">

            {/* Text Content */}
            <div className="relative z-10 max-w-4xl px-6 ml-10">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-bold leading-tight"
                >
                    Unlock Premium SaaS Deals
                    <span className="block text-blue-600">Built for Startups</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 text-lg text-gray-600 max-w-xl"
                >
                    Exclusive discounts on cloud, marketing, analytics, and productivity tools —
                    designed for founders who care about runway.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 flex gap-4"
                >
                    <Link
                        href="/deals"
                        className="px-6 py-3 rounded-md bg-black text-white hover:bg-gray-800 transition"
                    >
                        Explore Deals
                    </Link>

                    <Link
                        href="/auth/register"
                        className="px-6 py-3 rounded-md border hover:bg-gray-50 transition"
                    >
                        Get Started
                    </Link>
                </motion.div>
            </div>

            {/* 3D Visual */}
            <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block">
                <HeroScene />
            </div>
        </section>
    );
}
