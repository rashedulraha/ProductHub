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
  //  toggle Menu bar
  const handleToggleMenuBar = () => {
    setOpen(!open);
  };

  //  mobile navbar and menu link

  const NavLinkItem = (
    <>
      <div className="flex flex-col md:flex-row space-y-5 md:space-x-5 md:space-y-0 items-start px-4">
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
        {/*  button mobile device */}
        <div className="md:hidden ">
          <Button>Login</Button>
        </div>
      </div>
    </>
  );

  //  mobile menu link bar

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80     backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-2xl font-bold text-primary">
            ProductHub
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex"> {NavLinkItem}</div>

            <div className="flex gap-3">
              <ModeToggle />
              <Button asChild className="hidden md:flex">
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

            {/* mobile */}
            <div className="md:hidden" onClick={handleToggleMenuBar}>
              {open ? <X /> : <Menu />}
            </div>
          </div>
        </div>
      </nav>
      {open && (
        <>
          <div className="my-5 md:hidden absolute top-15 bg-background w-full">
            {NavLinkItem}
          </div>
        </>
      )}
    </>
  );
}
