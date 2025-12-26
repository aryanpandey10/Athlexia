import { Package, HandCoins, Shield, Building2, BadgeCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Wide Range of Sports Products",
  },
  {
    icon: HandCoins,
    title: "Competitive Quotes",
  },
  {
    icon: Shield,
    title: "Safe & Secure Transactions",
  },
  {
    icon: Building2,
    title: "Nationwide Supplier Network",
  },
  {
    icon: BadgeCheck,
    title: "Verified & Trusted Sellers",
  },
  {
    icon: Headphones,
    title: "Quick Assistance & Support",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-background py-10 border-t border-border">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-[120px] group"
            >
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-muted-foreground/30 bg-background transition-all group-hover:border-primary group-hover:border-solid">
                <feature.icon className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-xs font-medium text-foreground leading-tight text-center">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
