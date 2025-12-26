import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Category } from "@/data/categories";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: Category;
  variant?: "default" | "compact" | "featured";
  className?: string;
}

export function CategoryCard({ category, variant = "default", className }: CategoryCardProps) {
  if (variant === "compact") {
    return (
      <Link to={`/products?category=${category.slug}`}>
        <Card
          className={cn(
            "group overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1",
            className
          )}
        >
          <CardContent className="flex items-center gap-3 p-4">
            <div className="h-12 w-12 overflow-hidden rounded-lg bg-muted">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{category.name}</h3>
              <p className="text-xs text-muted-foreground">
                {category.productCount} products
              </p>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
          </CardContent>
        </Card>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link to={`/products?category=${category.slug}`}>
        <Card
          className={cn(
            "group relative h-64 overflow-hidden transition-all duration-300 hover:shadow-xl",
            className
          )}
        >
          <img
            src={category.image}
            alt={category.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
          <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-background">
            <h3 className="mb-1 text-xl font-bold">{category.name}</h3>
            <p className="mb-3 text-sm text-background/80">{category.description}</p>
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <span>Shop Now</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/products?category=${category.slug}`}>
      <Card
        className={cn(
          "group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
          className
        )}
      >
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="mb-1 font-semibold">{category.name}</h3>
          <p className="mb-2 text-xs text-muted-foreground line-clamp-1">
            {category.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {category.productCount} products
            </span>
            <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
