import { Bike, Dumbbell, Goal, ShoppingBag, Shirt, Volleyball, Waves, Timer } from "lucide-react";

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
  productCount: number;
  subcategories?: string[];
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Cricket",
    slug: "cricket",
    description: "Bats, pads, gloves & accessories",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=400&fit=crop",
    icon: "Goal",
    productCount: 156,
    subcategories: ["Bats", "Pads", "Gloves", "Helmets", "Balls", "Accessories"],
  },
  {
    id: "2",
    name: "Football",
    slug: "football",
    description: "Shoes, balls, shirts, guards",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop",
    icon: "Goal",
    productCount: 234,
    subcategories: ["Boots", "Balls", "Jerseys", "Shin Guards", "Gloves", "Training"],
  },
  {
    id: "3",
    name: "Badminton",
    slug: "badminton",
    description: "Rackets, shuttlecocks & gear",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=400&fit=crop",
    icon: "Volleyball",
    productCount: 89,
    subcategories: ["Rackets", "Shuttlecocks", "Shoes", "Bags", "Strings", "Grips"],
  },
  {
    id: "4",
    name: "Running",
    slug: "running",
    description: "Shoes, apparel & accessories",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    icon: "Timer",
    productCount: 312,
    subcategories: ["Shoes", "T-Shirts", "Shorts", "Watches", "Socks", "Hydration"],
  },
  {
    id: "5",
    name: "Cycling",
    slug: "cycling",
    description: "Bikes, helmets & cycling gear",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&h=400&fit=crop",
    icon: "Bike",
    productCount: 178,
    subcategories: ["Bikes", "Helmets", "Jerseys", "Gloves", "Pumps", "Lights"],
  },
  {
    id: "6",
    name: "Swimming",
    slug: "swimming",
    description: "Swimwear, goggles & pool gear",
    image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=600&h=400&fit=crop",
    icon: "Waves",
    productCount: 145,
    subcategories: ["Swimwear", "Goggles", "Caps", "Kickboards", "Fins", "Towels"],
  },
  {
    id: "7",
    name: "Fitness",
    slug: "fitness",
    description: "Gym equipment & home workout",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    icon: "Dumbbell",
    productCount: 267,
    subcategories: ["Weights", "Machines", "Mats", "Bands", "Kettlebells", "Accessories"],
  },
  {
    id: "8",
    name: "Sportswear",
    slug: "sportswear",
    description: "Athletic clothing & apparel",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop",
    icon: "Shirt",
    productCount: 445,
    subcategories: ["T-Shirts", "Shorts", "Track Pants", "Jackets", "Compression", "Socks"],
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((c) => c.slug === slug);
};
