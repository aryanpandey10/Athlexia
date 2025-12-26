import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = ["Sports Shops", "Supplements", "Equipment", "Sportswear"];

const categoryProducts = {
  "Sports Shops": [
    {
      name: "Cricket Gear",
      description: "Bat, pads, gloves & accessories",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=300&fit=crop",
    },
    {
      name: "Gym Accessories",
      description: "Belts, gloves, bands, mats",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
    },
    {
      name: "Football Gear",
      description: "Shoes, balls, shin guards",
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=300&fit=crop",
    },
  ],
  Supplements: [
    {
      name: "Protein Powders",
      description: "Whey, casein & plant protein",
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=300&fit=crop",
    },
    {
      name: "Pre-Workout",
      description: "Energy & performance boosters",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
    },
    {
      name: "Vitamins & Minerals",
      description: "Essential daily supplements",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop",
    },
  ],
  Equipment: [
    {
      name: "Cardio Machines",
      description: "Treadmills, cycles & more",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&h=300&fit=crop",
    },
    {
      name: "Strength Training",
      description: "Dumbbells, barbells, racks",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop",
    },
    {
      name: "Yoga & Pilates",
      description: "Mats, blocks, straps",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
    },
  ],
  Sportswear: [
    {
      name: "Athletic Wear",
      description: "T-shirts, shorts, jerseys",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=300&fit=crop",
    },
    {
      name: "Sports Shoes",
      description: "Running, training, football",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    },
    {
      name: "Accessories",
      description: "Bags, caps, socks",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    },
  ],
};

export function ProductCategories() {
  const [activeTab, setActiveTab] = useState("Sports Shops");

  const products = categoryProducts[activeTab as keyof typeof categoryProducts];

  return (
    <section className="bg-muted py-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Tabs and Products */}
          <div className="flex-1">
            {/* Tabs */}
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-0 bg-background rounded-lg p-1 border border-border">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-xs font-semibold rounded-md transition-all ${
                      activeTab === tab
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab}
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

            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-xl bg-card border border-border hover:shadow-lg transition-all"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground text-sm">{product.name}</h3>
                    <p className="text-xs text-muted-foreground mb-3">
                      {product.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full text-xs h-8" asChild>
                      <Link to={`/products?search=${encodeURIComponent(product.name)}`}>
                        VIEW PRODUCTS
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Buy Products CTA */}
          <div className="lg:w-72">
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-xl bg-foreground">
              <img
                src="https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=400&h=500&fit=crop"
                alt="Sports Shop"
                className="absolute inset-0 h-full w-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-6 text-background">
                <h3 className="mb-2 font-heading text-2xl font-bold">
                  Buy Products
                </h3>
                <p className="mb-4 text-sm text-background/80">
                  Everything you need for your game — from trusted shops & brands.
                </p>
                <Button
                  size="sm"
                  className="w-fit"
                  asChild
                >
                  <Link to="/products">
                    Explore Now →
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
