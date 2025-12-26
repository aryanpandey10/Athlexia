import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories";

export function Footer() {
  return (
    <footer className="border-t bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10 bg-primary">
        <div className="container py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-foreground">
                Subscribe to our Newsletter
              </h3>
              <p className="text-sm text-primary-foreground/80">
                Get the latest updates on new products and upcoming sales
              </p>
            </div>
            <form className="flex w-full max-w-md gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="accent">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="mb-4 flex items-center gap-2 font-heading text-2xl font-bold">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-hero">
                <span className="text-lg font-bold text-primary-foreground">A</span>
              </div>
              <span>
                Athl<span className="text-primary">exia</span>
              </span>
            </Link>
            <p className="mb-4 max-w-xs text-sm text-background/70">
              India's premier sports & fitness marketplace. Find venues, equipment, coaches, and
              everything you need to stay active.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-2 text-sm text-background/70">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products?category=${cat.slug}`}
                    className="transition-colors hover:text-primary"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link to="/about" className="transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/venues" className="transition-colors hover:text-primary">
                  Sports Venues
                </Link>
              </li>
              <li>
                <Link to="/coaches" className="transition-colors hover:text-primary">
                  Coaches & Trainers
                </Link>
              </li>
              <li>
                <Link to="/list-business" className="transition-colors hover:text-primary">
                  List Your Business
                </Link>
              </li>
              <li>
                <Link to="/support" className="transition-colors hover:text-primary">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link to="/careers" className="transition-colors hover:text-primary">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>123 Sports Complex, Prahlad Nagar, Ahmedabad 380015</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 9876 543 210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@athlexia.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container flex flex-col items-center justify-between gap-4 py-4 text-xs text-background/60 sm:flex-row">
          <p>© 2024 Athlexia. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary">
              Terms & Conditions
            </Link>
            <Link to="/refund" className="hover:text-primary">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
