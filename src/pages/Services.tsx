import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { 
  Dumbbell, 
  MapPin, 
  Users, 
  Heart, 
  Baby, 
  Calendar, 
  Shirt, 
  Building 
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Trainers & Coaches",
    description: "Find certified coaches for cricket, football, badminton, tennis, swimming, and personal fitness training.",
    link: "/products?category=coaches",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: MapPin,
    title: "Sports Venues",
    description: "Book turfs, courts, swimming pools, indoor arenas, and multi-sport stadiums near you.",
    link: "/products?category=venues",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Dumbbell,
    title: "Gyms & Fitness Studios",
    description: "Discover gyms, CrossFit boxes, yoga studios, Zumba classes, and functional training centers.",
    link: "/products?category=gyms",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Heart,
    title: "Physiotherapy & Recovery",
    description: "Connect with sports physiotherapists, chiropractors, and injury rehabilitation specialists.",
    link: "/products?category=physio",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: Building,
    title: "Nutrition & Dieticians",
    description: "Get personalized diet plans from sports nutritionists and clinical dieticians.",
    link: "/products?category=nutrition",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Baby,
    title: "Kids Activities",
    description: "Enroll your children in skating, swimming, multi-sport programs, and more.",
    link: "/products?category=kids",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Calendar,
    title: "Event Services",
    description: "Plan sports events, tournaments, and corporate wellness programs with verified organizers.",
    link: "/products?category=events",
    color: "bg-teal-500/10 text-teal-600",
  },
  {
    icon: Shirt,
    title: "Sports Wear & Equipment",
    description: "Shop authentic sports gear, apparel, and fitness equipment from trusted sellers.",
    link: "/products",
    color: "bg-indigo-500/10 text-indigo-600",
  },
];

export default function Services() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="container text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            Everything you need for sports and fitness, all in one place. Discover verified providers across India.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/20"
              >
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${service.color}`}>
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold text-foreground">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">1</div>
              <h3 className="mb-2 font-heading text-xl font-semibold">Search</h3>
              <p className="text-muted-foreground">Find the service you need by location, category, or specific requirements.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">2</div>
              <h3 className="mb-2 font-heading text-xl font-semibold">Compare</h3>
              <p className="text-muted-foreground">Review ratings, prices, and availability to choose the best option.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">3</div>
              <h3 className="mb-2 font-heading text-xl font-semibold">Book</h3>
              <p className="text-muted-foreground">Connect directly with providers and book instantly or request a callback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground">Ready to Get Started?</h2>
          <p className="mb-8 text-muted-foreground">Join thousands of satisfied users who found their perfect sports and fitness solutions.</p>
          <Button size="lg" asChild>
            <Link to="/products">Explore All Services</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}
