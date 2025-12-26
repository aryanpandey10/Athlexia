import { Link } from "react-router-dom";
import { BadgeCheck, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: BadgeCheck,
    title: "Verified Listing",
    description: "Build trust and credibility",
  },
  {
    icon: Users,
    title: "Get More Customers",
    description: "Receive verified leads",
  },
  {
    icon: Globe,
    title: "Pan-India Reach",
    description: "Increase your visibility",
  },
];

export function ListYourBusiness() {
  return (
    <section className="bg-foreground py-14 text-background">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="mb-3 font-heading text-3xl font-bold md:text-4xl">
            List Your Business
          </h2>
          <p className="text-background/70 max-w-xl mx-auto mb-5 text-sm">
            Join India's fastest-growing sports & fitness marketplace.
            Be discovered by thousands of athletes, parents, gyms, venues & training seekers.
          </p>
          <Button size="default" asChild className="px-6">
            <Link to="/contact">Add My Business</Link>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-[160px]">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-background/30">
                <feature.icon className="h-8 w-8 text-background" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-background text-sm mb-1">{feature.title}</h3>
              <p className="text-xs text-background/60">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="font-heading text-lg text-background/40">
            Get customers. Get visibility. Grow your sports brand.
          </p>
        </div>
      </div>
    </section>
  );
}
