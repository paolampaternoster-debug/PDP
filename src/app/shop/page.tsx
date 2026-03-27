"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS, CATEGORIES, Category } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { Suspense } from "react";

function ShopContent() {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category") as Category | "all" | null;
  const [active, setActive] = useState<Category | "all">(urlCategory ?? "all");

  useEffect(() => {
    if (urlCategory) setActive(urlCategory);
    else setActive("all");
  }, [urlCategory]);

  const filtered =
    active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1
          className="text-4xl md:text-5xl text-pink-600 mb-3"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          The Shop ✨
        </h1>
        <p className="text-gray-600 text-lg">
          All handmade with love — pick your favourite!
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActive(cat.value)}
            className={`flex items-center gap-1 px-5 py-2 rounded-full font-bold text-sm transition-all duration-200 ${
              active === cat.value
                ? "bg-pink-500 text-white shadow-md scale-105"
                : "bg-white text-[var(--foreground)] hover:bg-pink-100 shadow"
            }`}
          >
            <span>{cat.emoji}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="text-gray-400 text-sm mb-6 text-center">
        {filtered.length} piece{filtered.length !== 1 ? "s" : ""} found
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-xl font-semibold">Nothing here yet!</p>
          <p className="mt-2">Check back soon — more pieces coming 💕</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense>
      <ShopContent />
    </Suspense>
  );
}
