"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Header() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-pink-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">💎</span>
          <span
            className="font-display text-2xl text-pink-500 group-hover:text-pink-600 transition-colors"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            BeadyBliss
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="font-semibold text-[var(--foreground)] hover:text-pink-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="font-semibold text-[var(--foreground)] hover:text-pink-500 transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/shop?category=charms"
            className="font-semibold text-[var(--foreground)] hover:text-pink-500 transition-colors"
          >
            Charms
          </Link>
          <Link
            href="/shop?category=wine-glass-charms"
            className="font-semibold text-[var(--foreground)] hover:text-pink-500 transition-colors"
          >
            Gift Sets
          </Link>
        </nav>

        {/* Cart & Mobile menu */}
        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className="relative flex items-center gap-1 bg-pink-500 hover:bg-pink-600 text-white font-bold px-4 py-2 rounded-full transition-colors"
          >
            🛒
            <span className="hidden sm:inline ml-1">Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--color-sun)] text-[var(--foreground)] text-xs font-extrabold w-5 h-5 rounded-full flex items-center justify-center pulse-soft">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-pink-500"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-pink-100 px-4 py-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="font-semibold text-[var(--foreground)] hover:text-pink-500">
            Home
          </Link>
          <Link href="/shop" onClick={() => setMenuOpen(false)} className="font-semibold text-[var(--foreground)] hover:text-pink-500">
            Shop All
          </Link>
          <Link href="/shop?category=rings" onClick={() => setMenuOpen(false)} className="font-semibold text-[var(--foreground)] hover:text-pink-500">
            💍 Rings
          </Link>
          <Link href="/shop?category=charms" onClick={() => setMenuOpen(false)} className="font-semibold text-[var(--foreground)] hover:text-pink-500">
            🌟 Charms
          </Link>
          <Link href="/shop?category=necklaces" onClick={() => setMenuOpen(false)} className="font-semibold text-[var(--foreground)] hover:text-pink-500">
            📿 Necklaces
          </Link>
          <Link href="/shop?category=bracelets" onClick={() => setMenuOpen(false)} className="font-semibold text-[var(--foreground)] hover:text-pink-500">
            🌈 Bracelets
          </Link>
          <Link href="/shop?category=wine-glass-charms" onClick={() => setMenuOpen(false)} className="font-semibold text-[var(--foreground)] hover:text-pink-500">
            🍷 Gift Sets
          </Link>
        </div>
      )}
    </header>
  );
}
