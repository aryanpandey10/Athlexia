import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MainLayout } from "@/components/layout/MainLayout";
import { PopularVenues } from "@/components/home/PopularVenues";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProductCategories } from "@/components/home/ProductCategories";
import { ProfessionalServices } from "@/components/home/ProfessionalServices";
import { ListYourBusiness } from "@/components/home/ListYourBusiness";
import { BrandLogos } from "@/components/home/BrandLogos";
import { categories } from "@/data/categories";

// Service categories matching Figma design
const serviceCategories = [
  {
    name: "Trainers & Coaches",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop",
  },
  {
    name: "Physiotherapy & Recovery",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
  },
  {
    name: "Sports Store",
    image: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=400&h=300&fit=crop",
  },
  {
    name: "Nutritionist & Dieticians",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop",
  },
  {
    name: "Kids Activities",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=300&fit=crop",
  },
  {
    name: "Event Services",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=300&fit=crop",
  },
  {
    name: "Sports Wear & Apparel",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=300&fit=crop",
  },
  {
    name: "Gyms & Fitness Studios",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
  },
];

export default function Index() {
  const [location, setLocation] = useState("Ahmedabad");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set("search", searchQuery);
    if (selectedCategory) params.set("category", selectedCategory);
    window.location.href = `/products?${params.toString()}`;
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-background py-12 md:py-16">
        <div className="container">
          {/* Hero Heading */}
          <div className="mb-8 text-center">
            <h1 className="mb-4 font-heading text-3xl italic font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl">
              Find Everything<br />
              You Need in Sports & Fitness — In One Place
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              From venues to equipment, discover verified providers near you.
            </p>
          </div>

          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="mx-auto mb-12 flex max-w-4xl flex-col gap-0 overflow-hidden rounded-lg border border-border shadow-md sm:flex-row"
          >
            {/* Location */}
            <div className="flex items-center gap-2 border-b border-border bg-background px-4 py-3 sm:border-b-0 sm:border-r">
              <MapPin className="h-5 w-5 text-primary" />
              <div className="flex flex-col">
                <span className="text-xs text-primary font-medium">Location</span>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium">{location}</span>
                  <ChevronDown className="h-3 w-3 text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Search Input */}
            <div className="flex-1 border-b border-border sm:border-b-0 sm:border-r">
              <Input
                type="text"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-full border-0 px-4 py-3 text-sm focus-visible:ring-0"
              />
            </div>

            {/* Category Select */}
            <div className="border-b border-border sm:border-b-0 sm:border-r">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-full w-full border-0 px-4 py-3 text-sm sm:w-44 focus:ring-0">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.slug}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <Button
              type="submit"
              className="m-0 h-auto rounded-none px-6 py-3 text-sm font-semibold"
            >
              SEARCH
              <Search className="ml-2 h-4 w-4" />
            </Button>
          </form>

          {/* Service Categories Grid */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {serviceCategories.map((category, index) => (
              <Link
                key={index}
                to={`/products?search=${encodeURIComponent(category.name)}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-heading text-sm font-bold italic text-background md:text-base">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Venues Section */}
      <PopularVenues />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Product Categories Section */}
      <ProductCategories />

      {/* Professional Services Section */}
      <ProfessionalServices />

      {/* List Your Business CTA */}
      <ListYourBusiness />

      {/* Brand Logos */}
      <BrandLogos />
    </MainLayout>
  );
}
