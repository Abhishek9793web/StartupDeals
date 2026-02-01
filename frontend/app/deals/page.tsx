import PageTransition from "@/src/components/pageTransition";
import DealCard from "@/src/components/DealCard";
import DealsBentoGrid from "@/src/components/DealsBentoGrid";

const deals = [
    {
        id: "aws",
        title: "AWS Credits $5,000",
        partner: "Amazon Web Services",
        category: "Cloud",
        isPublic: false,
        size: "wide",
    },
    {
        id: "notion",
        title: "Notion Pro Free for 6 Months",
        partner: "Notion",
        category: "Productivity",
        isPublic: true,
        size: "small",
    },
    {
        id: "stripe",
        title: "Stripe Free for 6 Months",
        partner: "Stripe",
        category: "Payments",
        isPublic: true,
        size: "small",
    },
    {
        id: "chatgpt pro",
        title: "ChatGPT Pro Free for 6 Months",
        partner: "ChatGPT",
        category: "AI",
        isPublic: true,
        size: "wide",
    },
    {
        id: "Microsoft Azure",
        title: "Microsoft Azure Credits $5,000",
        partner: "Microsoft Azure",
        category: "Cloud",
        isPublic: true,
        size: "wide",
    },
    {
        id: "Microsoft 365",
        title: "Microsoft 365 Free for 12 Months",
        partner: "Microsoft 365",
        category: "Productivity",
        isPublic: false,
        size: "small",
    },
    {
        id: "Adobe",
        title: "Adobe Creative Cloud Free for 12 Months",
        partner: "Adobe",
        category: "Productivity",
        isPublic: false,
        size: "tall",
    },
    {
        id: "hubspot",
        title: "HubSpot Starter",
        partner: "HubSpot",
        category: "Marketing",
        isPublic: true,
        size: "tall",
    },



];

export default function DealsPage() {
    return (
        <PageTransition>
            <section className="max-w-7xl mx-auto px-6 py-16">
                <h1 className="text-3xl font-bold mb-8">
                    Available Deals
                </h1>

                <DealsBentoGrid deals={deals} />
            </section>
        </PageTransition>
    );
}
