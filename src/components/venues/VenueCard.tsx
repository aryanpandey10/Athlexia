import { Link } from "react-router-dom";
import { Star, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Venue } from "@/data/venues";
import { formatPrice } from "@/helpers/formatters";
import { cn } from "@/lib/utils";

interface VenueCardProps {
  venue: Venue;
  className?: string;
}

export function VenueCard({ venue, className }: VenueCardProps) {
  return (
    <Card
      className={cn(
        "group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={venue.image}
          alt={venue.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute left-3 top-3 bg-background/90 text-foreground backdrop-blur-sm">
          {venue.type}
        </Badge>
      </div>

      <CardContent className="p-4">
        {/* Title */}
        <h3 className="mb-2 text-lg font-bold line-clamp-1">{venue.name}</h3>

        {/* Location */}
        <div className="mb-2 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>
            {venue.location}, {venue.city}
          </span>
        </div>

        {/* Rating & Reviews */}
        <div className="mb-3 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md bg-success/10 px-2 py-0.5">
            <Star className="h-3.5 w-3.5 fill-success text-success" />
            <span className="text-sm font-semibold text-success">{venue.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            ({venue.reviews} reviews)
          </span>
        </div>

        {/* Timing */}
        {venue.openTime && venue.closeTime && (
          <div className="mb-3 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>
              {venue.openTime} - {venue.closeTime}
            </span>
          </div>
        )}

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground">Starting from</span>
            <p className="text-lg font-bold text-primary">
              {formatPrice(venue.priceFrom)}
              <span className="text-sm font-normal text-muted-foreground">
                /{venue.priceUnit}
              </span>
            </p>
          </div>
          <Button size="sm" asChild>
            <Link to={`/venue/${venue.id}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
