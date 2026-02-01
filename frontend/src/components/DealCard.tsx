"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Lock } from "lucide-react";
import Link from "next/link";

/**
 * Deal model used by the card
 * Keep it minimal – UI should not depend on backend noise
 */
type Deal = {
    id: string;
    title: string;
    partner: string;
    category: string;
    isPublic: boolean;
};

export default function DealCard({ deal }: { deal: Deal }) {
    /**
     * Motion values for mouse position
     * These drive the 3D tilt effect
     */
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    /**
     * Convert mouse movement into rotation
     * Small values = premium feel (avoid over-tilt)
     */
    const rotateX = useTransform(y, [-50, 50], [8, -8]);
    const rotateY = useTransform(x, [-50, 50], [-8, 8]);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
    }

    function resetTilt() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            style={{ rotateX, rotateY }}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative rounded-xl border bg-white p-6 shadow-sm
                 hover:shadow-xl hover:border-blue-200
                 will-change-transform"
        >
            {/* LOCKED OVERLAY */}
            {!deal.isPublic && (
                <div className="absolute inset-0 z-10 rounded-xl
                        bg-white/10 backdrop-blur-xs
                        flex flex-col items-center justify-center text-center">
                    <Lock className="mb-2 text-gray-700" />
                    <p className="text-sm text-gray-400 font-medium">
                        Verification required
                    </p>
                </div>
            )}

            {/* CARD CONTENT */}
            <h3 className="text-lg text-gray-400 font-semibold">
                {deal.title}
            </h3>

            <p className="text-sm text-gray-600">
                {deal.partner}
            </p>

            <span className="inline-block mt-3 text-xs
                       bg-gray-400 px-2 py-1 rounded">
                {deal.category}
            </span>

            {/* ACTION */}
            {deal.isPublic && (
                <Link
                    href={`/deals/${deal.id}`}
                    className="mt-4 inline-block text-sm font-medium
                     text-blue-700 hover:text-blue-600"
                >
                    View deal →
                </Link>
            )}
        </motion.div>
    );
}
