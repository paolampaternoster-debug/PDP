"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/products";
import { useState } from "react";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1">
      {/* Image */}
      <Link href={`/shop/${product.id}`} className="relative block overflow-hidden bg-gray-50 aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
            {product.badge}
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <Link href={`/shop/${product.id}`}>
          <h3 className="font-bold text-[var(--foreground)] text-lg leading-tight hover:text-pink-500 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2 flex-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-pink-600 font-extrabold text-xl">
            €{product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAdd}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              added
                ? "bg-green-400 text-white scale-95"
                : "bg-pink-500 hover:bg-pink-600 text-white hover:scale-105"
            }`}
          >
            {added ? "✓ Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
