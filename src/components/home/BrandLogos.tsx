import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const brandCategories = [
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    title: "New Arrivals",
    link: "/products?sort=newest",
  },
  {
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=300&fit=crop",
    title: "Clothing",
    link: "/products?category=clothing",
  },
  {
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    title: "Bags & Gear",
    link: "/products?category=bags",
  },
  {
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&h=300&fit=crop",
    title: "Fitness Items",
    link: "/products?category=fitness",
  },
];

const brands = [
  { name: "New Balance", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/200px-New_Balance_logo.svg.png" },
  { name: "Puma", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Puma_logo.svg/200px-Puma_logo.svg.png" },
  { name: "Columbia", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Columbia_Sportswear_logo.svg/200px-Columbia_Sportswear_logo.svg.png" },
  { name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/200px-Adidas_Logo.svg.png" },
  { name: "Peloton", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Peloton_Logo.svg/200px-Peloton_Logo.svg.png" },
  { name: "Reebok", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Reebok_2019_logo.svg/200px-Reebok_2019_logo.svg.png" },
  { name: "Asics", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Asics_Logo.svg/200px-Asics_Logo.svg.png" },
  { name: "Fila", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Fila_logo.svg/200px-Fila_logo.svg.png" },
];

export function BrandLogos() {
  return (
    <section className="bg-background py-10">
      {/* Brand Categories */}
      <div className="container mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {brandCategories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                <h3 className="font-heading text-sm font-bold text-background">
                  {category.title}
                </h3>
                <Button size="sm" variant="secondary" className="h-7 text-xs px-3">
                  Shop Now
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Brand Logos */}
      <div className="container border-t border-border pt-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand.logo}
              alt={brand.name}
              className="h-6 md:h-8 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
