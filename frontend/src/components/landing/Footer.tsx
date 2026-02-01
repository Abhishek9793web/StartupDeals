import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t bg-white">
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

                {/* Brand */}
                <div>
                    <h3 className="text-xl font-bold">StartupBenefits</h3>
                    <p className="mt-3 text-sm text-gray-600">
                        Helping startups save money on the tools they need to grow.
                    </p>
                </div>

                {/* Product */}
                <div>
                    <h4 className="font-semibold mb-4">Product</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><Link href="/deals">Deals</Link></li>
                        <li><Link href="/dashboard">Dashboard</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><Link href="#">About</Link></li>
                        <li><Link href="#">Contact</Link></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="font-semibold mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><Link href="#">Privacy Policy</Link></li>
                        <li><Link href="#">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>

            <div className="border-t text-center py-6 text-sm text-gray-500">
                © {new Date().getFullYear()} StartupBenefits. All rights reserved.
            </div>
        </footer>
    );
}
