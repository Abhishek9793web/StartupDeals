import Hero from "@/src/components/landing/hero";
import Stats from "@/src/components/landing/Stats";
import Features from "@/src/components/landing/features";
import HowItWorks from "@/src/components/landing/HowItWorks";
import CTA from "@/src/components/landing/CTA";
import Footer from "@/src/components/landing/Footer";

export default function Home() {
    return (
        <>
            <Hero />
            <Stats />
            <Features />
            <HowItWorks />
            <CTA />
            <Footer />
        </>
    );
}
