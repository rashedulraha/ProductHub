"use client";

import Link from "next/link";
import { useState } from "react";
import { logout } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle/ModeToggle";

export default function Navbar() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold text-primary">
          ProductHub
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link
            href="/items"
            className="text-sm font-medium hover:text-primary transition-colors">
            Items
          </Link>

          <div className="flex gap-3">
            <ModeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button
              size="sm"
              onClick={handleLogout}
              disabled={isLoading}
              className="hidden"
              id="logout-btn">
              {isLoading ? "Logging out..." : "Logout"}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
