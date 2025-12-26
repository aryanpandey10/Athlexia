import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To make sports and fitness accessible to everyone by connecting athletes, enthusiasts, and professionals with verified service providers across India.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We believe in building a strong community of sports lovers, trainers, venue owners, and fitness enthusiasts who support each other's journey.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Every listing on our platform is verified to ensure you get the best experience, whether you're booking a venue or hiring a coach.",
  },
  {
    icon: Heart,
    title: "Passion Driven",
    description: "Our team is made up of sports enthusiasts who understand your needs and are dedicated to making your fitness journey seamless.",
  },
];

const stats = [
  { number: "10,000+", label: "Active Users" },
  { number: "500+", label: "Verified Venues" },
  { number: "1,000+", label: "Professional Coaches" },
  { number: "50+", label: "Cities Covered" },
];

export default function About() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="container text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
            About Athlexia
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            India's premier sports & fitness marketplace connecting athletes with venues, coaches, equipment, and wellness services.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-heading text-3xl font-bold text-foreground">Our Story</h2>
            <p className="mb-4 text-muted-foreground">
              Athlexia was born from a simple observation: finding quality sports facilities, reliable coaches, and authentic equipment in India was unnecessarily complicated. We set out to change that.
            </p>
            <p className="mb-4 text-muted-foreground">
              Today, we're proud to be the trusted platform for thousands of athletes, fitness enthusiasts, and sports professionals across the country. From booking a badminton court to finding a certified nutritionist, Athlexia makes it simple.
            </p>
            <p className="text-muted-foreground">
              Our vision is to become the go-to ecosystem for everything sports and fitness in India, empowering every individual to lead an active, healthy lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 font-heading text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold text-foreground">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-16 text-background">
        <div className="container text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold">Join the Athlexia Community</h2>
          <p className="mb-8 text-background/70">Whether you're an athlete, coach, or venue owner, there's a place for you here.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/auth?mode=register">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
