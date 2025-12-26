export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory?: string;
  image: string;
  images?: string[];
  rating: number;
  reviews: number;
  stock: number;
  brand: string;
  tags?: string[];
  featured?: boolean;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Yonex Astrox 88D Pro Badminton Racket",
    description: "Professional grade badminton racket with rotational generator system for powerful drives.",
    price: 12999,
    originalPrice: 15999,
    category: "Badminton",
    subcategory: "Rackets",
    image: "https://images.unsplash.com/photo-1617083934555-ac7d3b5b0e61?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 234,
    stock: 15,
    brand: "Yonex",
    tags: ["professional", "power", "control"],
    featured: true,
    isNew: true,
  },
  {
    id: "2",
    name: "Nike Air Zoom Pegasus 40 Running Shoes",
    description: "Responsive cushioning meets incredible energy return for your everyday runs.",
    price: 8495,
    originalPrice: 10995,
    category: "Running",
    subcategory: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 892,
    stock: 45,
    brand: "Nike",
    tags: ["running", "comfort", "speed"],
    featured: true,
  },
  {
    id: "3",
    name: "SG Cricket Bat - English Willow",
    description: "Premium English willow cricket bat with perfect balance and sweet spot.",
    price: 7999,
    originalPrice: 9499,
    category: "Cricket",
    subcategory: "Bats",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 567,
    stock: 22,
    brand: "SG",
    tags: ["cricket", "professional", "willow"],
    featured: true,
  },
  {
    id: "4",
    name: "Adidas Predator Edge Football Boots",
    description: "Precision control zones for lethal accuracy on every pass and shot.",
    price: 14999,
    originalPrice: 17999,
    category: "Football",
    subcategory: "Boots",
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 423,
    stock: 18,
    brand: "Adidas",
    tags: ["football", "control", "professional"],
    featured: true,
    isNew: true,
  },
  {
    id: "5",
    name: "Speedo Fastskin Pure Intent Goggles",
    description: "Hydrodynamic racing goggles with anti-fog and UV protection.",
    price: 2999,
    category: "Swimming",
    subcategory: "Goggles",
    image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 156,
    stock: 67,
    brand: "Speedo",
    tags: ["swimming", "racing", "protection"],
  },
  {
    id: "6",
    name: "Hero Sprint Pro 26T Mountain Bike",
    description: "21-speed mountain bike with front suspension and disc brakes.",
    price: 15999,
    originalPrice: 18999,
    category: "Cycling",
    subcategory: "Bikes",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 312,
    stock: 8,
    brand: "Hero",
    tags: ["cycling", "mountain", "adventure"],
    featured: true,
  },
  {
    id: "7",
    name: "Wilson Pro Staff Tennis Racket",
    description: "RF97 Autograph series with legendary precision and feel.",
    price: 19999,
    originalPrice: 24999,
    category: "Tennis",
    subcategory: "Rackets",
    image: "https://images.unsplash.com/photo-1617083934555-ac7d3b5b0e61?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 178,
    stock: 12,
    brand: "Wilson",
    tags: ["tennis", "professional", "precision"],
    isNew: true,
  },
  {
    id: "8",
    name: "Nivia Gym Dumbbell Set 20kg",
    description: "Adjustable dumbbell set with rubber coating for home workouts.",
    price: 3499,
    category: "Fitness",
    subcategory: "Weights",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 445,
    stock: 34,
    brand: "Nivia",
    tags: ["gym", "strength", "home"],
  },
  {
    id: "9",
    name: "Puma Training T-Shirt Dri-Fit",
    description: "Moisture-wicking technology keeps you dry during intense workouts.",
    price: 1299,
    originalPrice: 1799,
    category: "Sportswear",
    subcategory: "T-Shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 789,
    stock: 120,
    brand: "Puma",
    tags: ["training", "comfort", "dri-fit"],
  },
  {
    id: "10",
    name: "Reebok Yoga Mat 6mm Premium",
    description: "Non-slip surface with alignment lines for perfect poses.",
    price: 1999,
    category: "Yoga",
    subcategory: "Mats",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 567,
    stock: 89,
    brand: "Reebok",
    tags: ["yoga", "fitness", "non-slip"],
  },
  {
    id: "11",
    name: "Asics Gel-Kayano 29 Running Shoes",
    description: "Maximum support running shoes with gel technology cushioning.",
    price: 11999,
    originalPrice: 14999,
    category: "Running",
    subcategory: "Shoes",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 634,
    stock: 28,
    brand: "Asics",
    tags: ["running", "support", "gel"],
  },
  {
    id: "12",
    name: "SS Ton English Willow Cricket Bat",
    description: "Hand-crafted English willow with perfect pickup and balance.",
    price: 12499,
    originalPrice: 14999,
    category: "Cricket",
    subcategory: "Bats",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 423,
    stock: 16,
    brand: "SS",
    tags: ["cricket", "professional", "willow"],
    isNew: true,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured);
};

export const getNewProducts = (): Product[] => {
  return products.filter((p) => p.isNew);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery) ||
      p.category.toLowerCase().includes(lowercaseQuery) ||
      p.brand.toLowerCase().includes(lowercaseQuery)
  );
};
