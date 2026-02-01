"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/components/AuthContext";

export default function Navbar() {
    const { isAuthenticated, logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    return (
        <header className="w-full border-b">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold">
                    StartupBenefits
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-6">
                    <Link href="/deals" className="hover:text-blue-600 transition">
                        Deals
                    </Link>

                    {!isAuthenticated ? (
                        <>
                            <Link href="/auth/login" className="hover:text-blue-600 transition">
                                Login
                            </Link>

                            <Link
                                href="/auth/register"
                                className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition"
                            >
                                Sign Up
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/dashboard"
                                className="hover:text-blue-600 transition"
                            >
                                Dashboard
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}
