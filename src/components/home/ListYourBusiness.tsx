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
    <section className="bg-foreground py-16 text-background">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="mb-3 font-heading text-3xl font-bold italic md:text-4xl">
            List Your Business
          </h2>
          <p className="text-background/70 max-w-xl mx-auto mb-6">
            Join India's fastest-growing sports & fitness marketplace.
            Be discovered by thousands of athletes, parents, gyms, venues & training seekers.
          </p>
          <Button size="lg" asChild>
            <Link to="/list-business">Add My Business</Link>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-12 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-[180px]">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-background/10 border border-background/20">
                <feature.icon className="h-10 w-10 text-background" />
              </div>
              <h3 className="font-semibold text-background mb-1">{feature.title}</h3>
              <p className="text-sm text-background/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-heading text-xl italic text-background/60">
            Get customers. Get visibility. Grow your sports brand.
          </p>
        </div>
      </div>
    </section>
  );
}
