import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  HelpCircle,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/AuthContext";
import Logo from "@/assets/athelexia-logo.svg";

// Find Services menu data
const findServicesMenu = [
  {
    title: "Trainers & Coaches",
    items: ["Cricket Coaches", "Football Coaches", "Badminton Coaches", "Tennis Coaches", "Swimming Instructors", "Personal Fitness Trainers"],
  },
  {
    title: "Sports Venues",
    items: ["Turfs (Football/Cricket)", "Badminton Courts", "Tennis Courts", "Swimming Pools", "Indoor Arenas", "Multi-Sport Stadiums"],
  },
  {
    title: "Gyms & Fitness",
    items: ["Gyms", "CrossFit Boxes", "Pilates Studios", "Yoga Studios", "Zumba Classes", "Functional Training"],
  },
  {
    title: "Physiotherapy",
    items: ["Sports Physiotherapists", "Chiropractors", "Injury Rehab", "Sports Massage"],
  },
  {
    title: "Nutrition",
    items: ["Sports Nutritionists", "Clinical Dieticians", "Weight-loss Specialists"],
  },
  {
    title: "Kids Activities",
    items: ["Skating Classes", "Swimming Classes", "Multi-sport Programs"],
  },
];

// Buy Products menu data
const buyProductsMenu = [
  {
    title: "Sports Shops",
    items: ["Cricket Gear", "Football Equipment", "Badminton/Tennis", "Cycling", "Swimming Gear", "Running Gear"],
  },
  {
    title: "Supplements",
    items: ["Protein & Nutrition", "Pre-Workout/BCAA", "Ayurvedic Supplements", "Performance Supplements"],
  },
  {
    title: "Fitness Equipment",
    items: ["Cardio Equipment", "Home Gym Machines", "Commercial Gym Setup", "Fitness Accessories"],
  },
  {
    title: "Sportswear",
    items: ["Sports Clothing", "Team Jerseys", "Custom Sportswear"],
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      {/* Main Nav */}
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Athlexia" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {/* Find Services */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("services")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${
                  activeMenu === "services" ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                FIND SERVICES
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeMenu === "services" ? "rotate-180" : ""}`} />
              </button>

              {/* Mega Menu */}
              {activeMenu === "services" && (
                <div className="absolute left-1/2 top-full z-50 w-[900px] -translate-x-1/2 pt-2 animate-fade-in">
                  <div className="rounded-2xl bg-card border border-border shadow-xl overflow-hidden">
                    <div className="bg-primary/5 px-6 py-3 border-b border-border">
                      <h3 className="font-heading text-sm font-semibold text-primary">Find Services Near You</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-0 p-4">
                      {findServicesMenu.map((section, idx) => (
                        <div key={section.title} className={`px-4 py-3 ${idx < 3 ? "border-b border-border" : ""} ${idx % 3 !== 2 ? "border-r border-border" : ""}`}>
                          <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">{section.title}</h4>
                          <ul className="space-y-2">
                            {section.items.map((item) => (
                              <li key={item}>
                                <Link
                                  to={`/products?search=${encodeURIComponent(item)}`}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-0.5"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="bg-muted/50 px-6 py-3 border-t border-border flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Can't find what you're looking for?</span>
                      <Link to="/contact" className="text-xs font-medium text-primary hover:underline">Contact Us →</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Buy Products */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("products")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${
                  activeMenu === "products" ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                BUY PRODUCTS
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeMenu === "products" ? "rotate-180" : ""}`} />
              </button>

              {/* Mega Menu */}
              {activeMenu === "products" && (
                <div className="absolute left-1/2 top-full z-50 w-[700px] -translate-x-1/2 pt-2 animate-fade-in">
                  <div className="rounded-2xl bg-card border border-border shadow-xl overflow-hidden">
                    <div className="bg-primary/5 px-6 py-3 border-b border-border">
                      <h3 className="font-heading text-sm font-semibold text-primary">Shop Sports & Fitness Products</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-0 p-4">
                      {buyProductsMenu.map((section, idx) => (
                        <div key={section.title} className={`px-4 py-3 ${idx < 2 ? "border-b border-border" : ""} ${idx % 2 === 0 ? "border-r border-border" : ""}`}>
                          <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">{section.title}</h4>
                          <ul className="space-y-2">
                            {section.items.map((item) => (
                              <li key={item}>
                                <Link
                                  to={`/products?search=${encodeURIComponent(item)}`}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-0.5"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="bg-muted/50 px-6 py-3 border-t border-border">
                      <Link to="/products" className="text-xs font-medium text-primary hover:underline">View All Products →</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* About */}
            <Link
              to="/about"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isActive("/about") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              ABOUT
            </Link>

            {/* Services */}
            <Link
              to="/services"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isActive("/services") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              SERVICES
            </Link>

            {/* List of Business */}
            <Link
              to="/contact"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isActive("/contact") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              CONTACT
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Support */}
            <Link
              to="/contact"
              className="hidden items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground lg:flex"
            >
              <HelpCircle className="h-4 w-4" />
              SUPPORT
            </Link>

            {/* Sign Up / User Menu */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-1.5">
                    <User className="h-4 w-4" />
                    {user?.name?.split(" ")[0]}
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{user?.name}</p>
                    <p className="text-xs text-muted-foreground">{user?.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile">My Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/orders">My Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-destructive">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-1.5">
                    <User className="h-4 w-4" />
                    SIGN UP
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/auth">Sign In</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/auth?mode=register">Create Account</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-t bg-background p-4 shadow-lg lg:hidden animate-slide-up">
          <nav className="space-y-4">
            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase text-muted-foreground">Find Services</h4>
              <div className="grid grid-cols-2 gap-2">
                {findServicesMenu.slice(0, 6).map((section) => (
                  <Link
                    key={section.title}
                    to={`/products?search=${encodeURIComponent(section.title)}`}
                    className="rounded-lg p-2 text-sm hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {section.title}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase text-muted-foreground">Buy Products</h4>
              <div className="grid grid-cols-2 gap-2">
                {buyProductsMenu.map((section) => (
                  <Link
                    key={section.title}
                    to={`/products?search=${encodeURIComponent(section.title)}`}
                    className="rounded-lg p-2 text-sm hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {section.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="border-t pt-4 space-y-2">
              <Link
                to="/about"
                className="block rounded-lg p-2 text-sm font-medium hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="block rounded-lg p-2 text-sm font-medium hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="block rounded-lg p-2 text-sm font-medium hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
