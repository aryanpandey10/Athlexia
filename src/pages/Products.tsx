import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Filter, Grid3X3, List, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProductCard } from "@/components/products/ProductCard";
import { products, searchProducts } from "@/data/products";
import { categories } from "@/data/categories";

export default function Products() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category") || "";
  const searchQuery = searchParams.get("search") || "";
  
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryFilter ? [categoryFilter] : []
  );
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = searchQuery ? searchProducts(searchQuery) : products;
    
    if (selectedCategories.length > 0) {
      result = result.filter((p) =>
        selectedCategories.includes(p.category.toLowerCase())
      );
    }
    
    if (priceRange.min) {
      result = result.filter((p) => p.price >= Number(priceRange.min));
    }
    if (priceRange.max) {
      result = result.filter((p) => p.price <= Number(priceRange.max));
    }
    
    return result;
  }, [selectedCategories, priceRange, searchQuery]);

  const toggleCategory = (slug: string) => {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((c) => c !== slug) : [...prev, slug]
    );
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="font-heading text-3xl font-bold">
              {searchQuery ? `Results for "${searchQuery}"` : "All Products"}
            </h1>
            <p className="text-muted-foreground">{filteredProducts.length} products found</p>
          </div>
          <Button variant="outline" className="lg:hidden" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className={`w-64 flex-shrink-0 space-y-6 ${showFilters ? "block" : "hidden"} lg:block`}>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="mb-4 font-semibold">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={selectedCategories.includes(cat.slug)}
                      onCheckedChange={() => toggleCategory(cat.slug)}
                    />
                    <span className="text-sm">{cat.name}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="mb-4 font-semibold">Price Range</h3>
              <div className="flex gap-2">
                <Input placeholder="Min" value={priceRange.min} onChange={(e) => setPriceRange((p) => ({ ...p, min: e.target.value }))} />
                <Input placeholder="Max" value={priceRange.max} onChange={(e) => setPriceRange((p) => ({ ...p, max: e.target.value }))} />
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="py-16 text-center">
                <p className="text-lg text-muted-foreground">No products found</p>
                <Button asChild className="mt-4"><Link to="/products">View All Products</Link></Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
