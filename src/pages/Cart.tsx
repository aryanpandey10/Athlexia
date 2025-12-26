import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layout/MainLayout";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/helpers/formatters";

export default function Cart() {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <MainLayout>
        <div className="container flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
          <ShoppingBag className="mb-4 h-16 w-16 text-muted-foreground" />
          <h1 className="mb-2 font-heading text-2xl font-bold">Your cart is empty</h1>
          <p className="mb-6 text-muted-foreground">Add some products to get started</p>
          <Button asChild><Link to="/products">Continue Shopping</Link></Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="mb-8 font-heading text-3xl font-bold">Shopping Cart</h1>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex gap-4 rounded-lg border bg-card p-4">
                <img src={item.product.image} alt={item.product.name} className="h-24 w-24 rounded-lg object-cover" />
                <div className="flex-1">
                  <Link to={`/product/${item.product.id}`} className="font-semibold hover:text-primary">{item.product.name}</Link>
                  <p className="text-sm text-muted-foreground">{item.product.brand}</p>
                  <p className="mt-1 font-bold text-primary">{formatPrice(item.product.price)}</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <Button variant="ghost" size="icon-sm" onClick={() => removeFromCart(item.product.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon-sm" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}><Minus className="h-3 w-3" /></Button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <Button variant="outline" size="icon-sm" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}><Plus className="h-3 w-3" /></Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-lg border bg-card p-6 h-fit">
            <h2 className="mb-4 font-heading text-xl font-bold">Order Summary</h2>
            <div className="space-y-2 border-b pb-4">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{formatPrice(totalPrice)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span className="text-success">Free</span></div>
            </div>
            <div className="flex justify-between py-4 text-lg font-bold"><span>Total</span><span>{formatPrice(totalPrice)}</span></div>
            <Button className="w-full" size="lg">Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" /></Button>
            <Button variant="outline" className="mt-2 w-full" onClick={clearCart}>Clear Cart</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
