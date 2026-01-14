"use client";

import Link from "next/link";
import { useState } from "react";
import { logout } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle/ModeToggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

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
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          ProductHub
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link
            href="/items"
            className="text-sm font-medium hover:text-primary">
            Items
          </Link>

          <ModeToggle />

          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>

          <Button
            size="sm"
            onClick={handleLogout}
            disabled={isLoading}
            variant="outline">
            {isLoading ? "Logging out..." : "Logout"}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-background px-4 py-6 space-y-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block text-sm font-medium">
            Home
          </Link>

          <Link
            href="/items"
            onClick={() => setOpen(false)}
            className="block text-sm font-medium">
            Items
          </Link>

          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="block text-sm font-medium">
            Login
          </Link>

          <Button
            onClick={handleLogout}
            disabled={isLoading}
            className="w-full">
            {isLoading ? "Logging out..." : "Logout"}
          </Button>

          <ModeToggle />
        </div>
      )}
    </nav>
  );
}
