"use client";

import { useState } from "react";
import PageTransition from "@/src/components/pageTransition";
import { useAuth } from "@/src/components/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const { login } = useAuth();
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message);
                return;
            }

            // Save auth state
            login(data.token, data.user);
            router.push("/dashboard");
        } catch {
            setError("Something went wrong");
        }
    };


    return (
        <PageTransition>
            <div className="max-w-md mx-auto mt-20 border p-6 rounded-xl">
                <h1 className="text-2xl font-semibold mb-4">Login</h1>

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
                        Login
                    </button>
                </form>
            </div>
        </PageTransition>
    );
}
