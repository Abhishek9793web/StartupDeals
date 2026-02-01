"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");

        // If user is not logged in, redirect to login
        if (!token) {
            router.replace("/auth/login");
        }
    }, [router]);

    // Render children ONLY if token exists
    return <>{children}</>;
}
