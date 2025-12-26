import { Link } from "react-router-dom";
import { MapPin, Star, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { venues } from "@/data/venues";

export function PopularVenues() {
  return (
    <section className="bg-background py-12">
      <div className="container">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-primary" />
            <h2 className="font-heading text-xl font-bold italic md:text-2xl">
              Popular Venues Near You
            </h2>
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
        <p className="text-sm text-muted-foreground mb-6">
          Top-rated sports facilities around your location
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {venues.slice(0, 4).map((venue) => (
            <div
              key={venue.id}
              className="group overflow-hidden rounded-xl bg-card border border-border shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-background/90 text-muted-foreground transition-colors hover:text-primary">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-semibold text-foreground text-sm">{venue.name}</h3>
                </div>
                <p className="text-xs text-primary mb-2">
                  From ₹{venue.priceFrom}/{venue.priceUnit}
                </p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                  <MapPin className="h-3 w-3" />
                  <span>{venue.location}</span>
                  <span className="mx-1">•</span>
                  <span>{venue.type}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                    <span className="text-xs font-medium">{venue.rating}</span>
                    <span className="text-xs text-muted-foreground">
                      ({venue.reviews} Reviews)
                    </span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3 text-xs" asChild>
                  <Link to={`/venue/${venue.id}`}>VIEW DETAILS</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
