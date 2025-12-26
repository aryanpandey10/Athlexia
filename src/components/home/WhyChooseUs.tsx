import { Package, HandCoins, Shield, Building2, BadgeCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Wide Range of Sports Products",
    description: "Everything for every sport",
  },
  {
    icon: HandCoins,
    title: "Competitive Quotes",
    description: "Best prices guaranteed",
  },
  {
    icon: Shield,
    title: "Safe & Secure Transactions",
    description: "100% secure payments",
  },
  {
    icon: Building2,
    title: "Nationwide Supplier Network",
    description: "Suppliers across India",
  },
  {
    icon: BadgeCheck,
    title: "Verified & Trusted Sellers",
    description: "Quality assured",
  },
  {
    icon: Headphones,
    title: "Quick Assistance & Support",
    description: "24/7 customer support",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-background py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-[140px] group"
            >
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full border-2 border-border bg-background transition-all group-hover:border-primary group-hover:bg-primary/5">
                <feature.icon className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-sm font-medium text-foreground leading-tight">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
