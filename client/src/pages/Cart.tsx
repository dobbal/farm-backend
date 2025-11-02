import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Link } from "wouter";
import chemicalImage from "@assets/generated_images/Agricultural_chemical_product_e680cae8.png";
import bioStimulantImage from "@assets/generated_images/Bio-stimulant_product_d228ec73.png";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Crop Protection Spray",
      price: 1250,
      quantity: 2,
      imageSrc: chemicalImage,
    },
    {
      id: 2,
      name: "Organic Bio-Stimulant",
      price: 950,
      quantity: 1,
      imageSrc: bioStimulantImage,
    },
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(items =>
      items.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 100;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4 p-8">
          <h2 className="text-2xl font-bold">Your cart is empty</h2>
          <p className="text-muted-foreground">Add products to get started</p>
          <Link href="/shop">
            <a>
              <Button data-testid="button-continue-shopping">Continue Shopping</Button>
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                onUpdateQuantity={(quantity) => updateQuantity(item.id, quantity)}
                onRemove={() => removeItem(item.id)}
              />
            ))}
          </div>

          <div className="lg:col-span-4">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span className="font-mono">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="font-mono">₹{shipping.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span className="font-mono" data-testid="text-total">₹{total.toLocaleString('en-IN')}</span>
                </div>

                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => console.log('Proceeding to checkout')}
                  data-testid="button-checkout"
                >
                  Proceed to Checkout
                </Button>

                <Link href="/shop">
                  <a>
                    <Button variant="outline" className="w-full" data-testid="button-continue-shopping">
                      Continue Shopping
                    </Button>
                  </a>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
