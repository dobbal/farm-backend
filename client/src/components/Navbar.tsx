import { Link, useLocation } from "wouter";
import { ShoppingCart, User, Menu, Sun, Moon, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

interface NavbarProps {
  cartItemCount?: number;
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export default function Navbar({ cartItemCount = 0, darkMode = false, onToggleDarkMode }: NavbarProps) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const categories = [
    { name: "Agriculture", icon: "🌾", path: "/fix-your-crop/agriculture" },
    { name: "Horticulture", icon: "🍅", path: "/fix-your-crop/horticulture" },
    { name: "Animal Husbandry", icon: "🐄", path: "/fix-your-crop/animal-husbandry" },
    { name: "Garden", icon: "🌻", path: "/fix-your-crop/garden" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/">
            <a className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-2 py-1" data-testid="link-home">
              <Sprout className="h-6 w-6 text-primary" />
              <span className="text-xl font-medium">AgroGuide</span>
            </a>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger data-testid="button-fix-your-crop">Fix Your Crop</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-2 gap-4 p-6">
                      {categories.map((category) => (
                        <div key={category.name} className="space-y-2">
                          <div className="flex items-center gap-2 text-lg font-medium">
                            <span>{category.icon}</span>
                            <span>{category.name}</span>
                          </div>
                          <div className="space-y-1 pl-8">
                            <Link href={`${category.path}/production`}>
                              <a
                                className="block rounded-md px-3 py-2 text-sm hover-elevate active-elevate-2"
                                onClick={() => setMobileOpen(false)}
                                data-testid={`link-${category.name.toLowerCase()}-production`}
                              >
                                Production Guides
                              </a>
                            </Link>
                            <Link href={`${category.path}/protection`}>
                              <a
                                className="block rounded-md px-3 py-2 text-sm hover-elevate active-elevate-2"
                                onClick={() => setMobileOpen(false)}
                                data-testid={`link-${category.name.toLowerCase()}-protection`}
                              >
                                Protection Guides
                              </a>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/shop">
              <a
                className={`px-4 py-2 rounded-md text-sm font-medium hover-elevate active-elevate-2 ${
                  location === "/shop" ? "bg-accent" : ""
                }`}
                data-testid="link-shop"
              >
                Shop
              </a>
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleDarkMode}
            data-testid="button-theme-toggle"
            className="hidden sm:inline-flex"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Link href="/cart">
            <a data-testid="link-cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -right-1 -top-1 h-5 min-w-5 rounded-full px-1 text-xs"
                    data-testid="badge-cart-count"
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </a>
          </Link>

          <Link href="/login">
            <a data-testid="link-login">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </a>
          </Link>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-mobile-menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-4 pt-8">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Fix Your Crop</h3>
                  {categories.map((category) => (
                    <div key={category.name} className="space-y-1 pl-4">
                      <div className="flex items-center gap-2 py-2 font-medium text-sm">
                        <span>{category.icon}</span>
                        <span>{category.name}</span>
                      </div>
                      <div className="space-y-1 pl-6">
                        <Link href={`${category.path}/production`}>
                          <a
                            className="block rounded-md px-3 py-2 text-sm hover-elevate active-elevate-2"
                            onClick={() => setMobileOpen(false)}
                          >
                            Production Guides
                          </a>
                        </Link>
                        <Link href={`${category.path}/protection`}>
                          <a
                            className="block rounded-md px-3 py-2 text-sm hover-elevate active-elevate-2"
                            onClick={() => setMobileOpen(false)}
                          >
                            Protection Guides
                          </a>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/shop">
                  <a
                    className="block rounded-md px-3 py-2 text-sm font-medium hover-elevate active-elevate-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    Shop
                  </a>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
