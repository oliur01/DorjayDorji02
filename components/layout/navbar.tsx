"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/fabrics",
    label: "Fabric Catalog",
  },
  {
    href: "/how-it-works",
    label: "How It Works",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full border-b bg-background z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Scissors className="h-6 w-6" />
          <span className="font-bold">DorjayDorji</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Button asChild>
            <Link href="/book">Book Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}