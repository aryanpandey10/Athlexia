export interface Venue {
  id: string;
  name: string;
  type: string;
  location: string;
  city: string;
  image: string;
  rating: number;
  reviews: number;
  priceFrom: number;
  priceUnit: string;
  facilities?: string[];
  openTime?: string;
  closeTime?: string;
}

export const venues: Venue[] = [
  {
    id: "1",
    name: "Striker Football Turf",
    type: "Football",
    location: "Prahlad Nagar",
    city: "Ahmedabad",
    image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=600&h=400&fit=crop",
    rating: 4.7,
    reviews: 180,
    priceFrom: 800,
    priceUnit: "hour",
    facilities: ["Floodlights", "Changing Room", "Parking", "Drinking Water"],
    openTime: "06:00",
    closeTime: "22:00",
  },
  {
    id: "2",
    name: "Smash Badminton Arena",
    type: "Badminton",
    location: "Sinchu Shavan",
    city: "Ahmedabad",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=400&fit=crop",
    rating: 4.9,
    reviews: 220,
    priceFrom: 400,
    priceUnit: "hour",
    facilities: ["AC Courts", "Pro Shop", "Coaching", "Locker Room"],
    openTime: "05:00",
    closeTime: "23:00",
  },
  {
    id: "3",
    name: "AquaBlue Swimming Pool",
    type: "Swimming",
    location: "Prahlad Nagar",
    city: "Ahmedabad",
    image: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=600&h=400&fit=crop",
    rating: 4.5,
    reviews: 145,
    priceFrom: 300,
    priceUnit: "session",
    facilities: ["Heated Pool", "Lifeguard", "Coaching", "Steam Room"],
    openTime: "05:30",
    closeTime: "21:00",
  },
  {
    id: "4",
    name: "Prime Cricket Nets",
    type: "Cricket",
    location: "Bodakdev",
    city: "Ahmedabad",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=400&fit=crop",
    rating: 4.8,
    reviews: 190,
    priceFrom: 500,
    priceUnit: "hour",
    facilities: ["Bowling Machine", "Video Analysis", "Coaching", "Equipment Rental"],
    openTime: "06:00",
    closeTime: "21:00",
  },
  {
    id: "5",
    name: "FitZone Gym & Fitness",
    type: "Gym",
    location: "Satellite",
    city: "Ahmedabad",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    rating: 4.6,
    reviews: 312,
    priceFrom: 200,
    priceUnit: "day",
    facilities: ["Personal Training", "Group Classes", "Sauna", "Cardio Zone"],
    openTime: "05:00",
    closeTime: "23:00",
  },
  {
    id: "6",
    name: "Tennis Pro Academy",
    type: "Tennis",
    location: "Thaltej",
    city: "Ahmedabad",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=400&fit=crop",
    rating: 4.7,
    reviews: 98,
    priceFrom: 600,
    priceUnit: "hour",
    facilities: ["Clay Courts", "Hard Courts", "Pro Coaching", "Equipment Shop"],
    openTime: "06:00",
    closeTime: "21:00",
  },
];

export const getVenueById = (id: string): Venue | undefined => {
  return venues.find((v) => v.id === id);
};

export const getVenuesByType = (type: string): Venue[] => {
  return venues.filter((v) => v.type.toLowerCase() === type.toLowerCase());
};
