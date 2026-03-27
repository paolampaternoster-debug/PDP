"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import { getProductById, PRODUCTS, Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: Props) {
  const { id } = use(params);
  const product = getProductById(id);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);

  if (!product) notFound();

  const safeProduct: Product = product;

  const related = PRODUCTS.filter(
    (p) => p.category === safeProduct.category && p.id !== safeProduct.id
  ).slice(0, 4);

  function handleAdd() {
    for (let i = 0; i < qty; i++) addToCart(safeProduct);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8 flex gap-2 items-center flex-wrap">
        <Link href="/" className="hover:text-pink-500 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-pink-500 transition-colors">Shop</Link>
        <span>/</span>
        <span className="text-pink-500 font-semibold">{safeProduct.name}</span>
      </nav>

      {/* Main */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Image */}
        <div className="relative rounded-3xl overflow-hidden bg-gray-50 aspect-square shadow-lg">
          <Image
            src={safeProduct.image}
            alt={safeProduct.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          {safeProduct.badge && (
            <span className="absolute top-4 left-4 bg-pink-500 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
              {safeProduct.badge}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <span className="text-pink-400 font-semibold text-sm uppercase tracking-widest mb-2">
            {safeProduct.category.replace(/-/g, " ")}
          </span>
          <h1 className="text-4xl font-extrabold text-[var(--foreground)] mb-4 leading-tight">
            {safeProduct.name}
          </h1>
          <p className="text-3xl font-extrabold text-pink-600 mb-6">
            €{safeProduct.price.toFixed(2)}
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">{safeProduct.description}</p>

          {/* Details */}
          <ul className="mb-8 space-y-2">
            {safeProduct.details.map((d) => (
              <li key={d} className="flex items-center gap-2 text-gray-600 text-sm">
                <span className="text-pink-400 font-bold">✓</span>
                {d}
              </li>
            ))}
          </ul>

          {/* Qty + Add */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center border-2 border-pink-200 rounded-full overflow-hidden">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-4 py-2 font-bold text-pink-500 hover:bg-pink-50 transition-colors"
              >
                −
              </button>
              <span className="px-4 py-2 font-bold text-[var(--foreground)] min-w-[2rem] text-center">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="px-4 py-2 font-bold text-pink-500 hover:bg-pink-50 transition-colors"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAdd}
              className={`flex-1 min-w-[160px] py-3 rounded-full font-extrabold text-lg transition-all duration-300 shadow-lg ${
                added
                  ? "bg-green-400 text-white scale-95"
                  : "bg-pink-500 hover:bg-pink-600 text-white hover:shadow-xl hover:-translate-y-0.5"
              }`}
            >
              {added ? "✓ Added to Cart!" : "🛒 Add to Cart"}
            </button>
          </div>

          <p className="text-gray-400 text-xs mt-4">
            🌸 Each piece is handmade — slight variations make it uniquely yours!
          </p>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div>
          <h2
            className="text-2xl text-pink-600 mb-6"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            You might also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
