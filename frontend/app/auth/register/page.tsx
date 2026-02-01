"use client";

import { useState } from "react";
import PageTransition from "@/src/components/pageTransition";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message);
                return;
            }

            router.push("/auth/login");
        } catch {
            setError("Registration failed");
        }
    };


    return (
        <PageTransition>
            <div className="max-w-md mx-auto mt-20 border p-6 rounded-xl">
                <h1 className="text-2xl font-semibold mb-4">Create Account</h1>

                {error && <p className="text-sm text-red-600 mb-3">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border px-3 py-2 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border px-3 py-2 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded"
                    >
                        Register
                    </button>
                </form>
            </div>
        </PageTransition>
    );
}
