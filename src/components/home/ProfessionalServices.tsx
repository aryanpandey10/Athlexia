import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = ["Coaches", "Nutritionists", "Physio", "Kids Programs"];

const professionals = {
  Coaches: [
    {
      name: "Dr. Neha Joshi",
      category: "Sports Nutritionist",
      location: "Ahmedabad",
      specialization: "Athletic meal plans",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop",
    },
    {
      name: "FitFuel Diet & Wellness",
      category: "Weight Management",
      location: "Surat",
      specialization: "Weight management",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=300&fit=crop",
    },
    {
      name: "Ahmedabad Pro Clinic",
      category: "Performance nutrition",
      location: "Ahmedabad",
      specialization: "Elite performance",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=300&fit=crop",
    },
  ],
  Nutritionists: [
    {
      name: "Dr. Neha Joshi",
      category: "Sports Nutritionist",
      location: "Ahmedabad",
      specialization: "Athletic meal plans",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop",
    },
    {
      name: "FitFuel Diet & Wellness",
      category: "Weight Management",
      location: "Surat",
      specialization: "Weight management",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=300&fit=crop",
    },
    {
      name: "Ahmedabad Pro Clinic",
      category: "Performance nutrition",
      location: "Ahmedabad",
      specialization: "Elite performance",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=300&fit=crop",
    },
  ],
  Physio: [
    {
      name: "PhysioFirst Clinic",
      category: "Sports Physiotherapy",
      location: "Mumbai",
      specialization: "Injury recovery",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=300&fit=crop",
    },
    {
      name: "ActiveCare Sports",
      category: "Rehabilitation",
      location: "Delhi",
      specialization: "Sports rehab",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop",
    },
    {
      name: "Recover Pro",
      category: "Recovery Center",
      location: "Bangalore",
      specialization: "Complete recovery",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=300&fit=crop",
    },
  ],
  "Kids Programs": [
    {
      name: "Little Champs Academy",
      category: "Multi-sport Training",
      location: "Ahmedabad",
      specialization: "Ages 5-12",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300&h=300&fit=crop",
    },
    {
      name: "Sports Kidz",
      category: "Swimming Classes",
      location: "Pune",
      specialization: "Swimming for kids",
      image: "https://images.unsplash.com/photo-1560090995-01632a28895b?w=300&h=300&fit=crop",
    },
    {
      name: "Junior Athletes Hub",
      category: "Skating & Cycling",
      location: "Mumbai",
      specialization: "Outdoor activities",
      image: "https://images.unsplash.com/photo-1472745942893-4b9f730c7668?w=300&h=300&fit=crop",
    },
  ],
};

export function ProfessionalServices() {
  const [activeTab, setActiveTab] = useState("Nutritionists");

  const currentProfessionals = professionals[activeTab as keyof typeof professionals];

  return (
    <section className="bg-background py-12">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - CTA Card */}
          <div className="lg:w-72">
            <div className="relative h-full min-h-[350px] overflow-hidden rounded-xl bg-foreground">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop"
                alt="Professional Services"
                className="absolute inset-0 h-full w-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-6 text-background">
                <h3 className="mb-2 font-heading text-2xl font-bold italic leading-tight">
                  Find Professional Services
                </h3>
                <p className="mb-4 text-sm text-background/80">
                  Book trusted experts across sports, fitness & wellness.
                </p>
                <Button size="sm" className="w-fit" asChild>
                  <Link to="/products?category=services">
                    Explore Now →
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Tabs and Cards */}
          <div className="flex-1">
            {/* Tabs */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-1 border-b border-border">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                      activeTab === tab
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                    )}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background hover:bg-muted transition-colors">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Professional Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentProfessionals.map((professional, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-xl border border-border bg-card p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3 h-24 w-24 overflow-hidden rounded-xl">
                      <img
                        src={professional.image}
                        alt={professional.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-semibold text-foreground">{professional.name}</h3>
                    <p className="text-sm text-primary mb-1">{professional.category}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                      <MapPin className="h-3 w-3" />
                      <span>{professional.location}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      {professional.specialization}
                    </p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link to={`/products?search=${encodeURIComponent(professional.name)}`}>
                        CONNECT
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
