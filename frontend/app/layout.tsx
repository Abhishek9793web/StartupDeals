import { AuthProvider } from "@/src/components/AuthContext";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup Benefits Platform",
  description: "Exclusive SaaS deals for startups"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <AuthProvider>
          <Navbar />
          <main className="pt-4">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
