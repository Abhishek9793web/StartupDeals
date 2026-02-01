"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import PageTransition from "@/src/components/pageTransition";
import { useAuth } from "@/src/components/AuthContext";
import ProtectedRoute from "@/src/components/auth/ProtectedRoute";


export default function Dashboard() {
    const { user } = useAuth();
    const router = useRouter();

    // Protect dashboard
    useEffect(() => {
        if (!user) router.push("/auth/login");
    }, [user, router]);

    if (!user) return null;

    return (
        <ProtectedRoute>
            <PageTransition>
                <div className="space-y-4">
                    <h1 className="text-2xl font-semibold">
                        Welcome back 👋
                    </h1>

                    <p className="text-gray-600">
                        Manage your claimed SaaS deals and access exclusive startup benefits.
                    </p>

                    {/* Placeholder for claimed deals */}
                    <div className="mt-6 rounded-lg border p-4">
                        <h2 className="text-lg font-medium">Your Deals</h2>
                        <p className="text-sm text-gray-500 mt-1">
                            You haven't claimed any deals yet.
                        </p>
                    </div>
                </div>
            </PageTransition>
        </ProtectedRoute>
    );
}
