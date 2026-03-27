"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, totalItems, totalPrice, increment, decrement, removeFromCart, clearCart } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <div className="text-8xl mb-6">🛒</div>
        <h1
          className="text-4xl text-pink-600 mb-4"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          Your cart is empty
        </h1>
        <p className="text-gray-500 mb-8 text-lg">
          Looks like you haven&apos;t added anything yet — let&apos;s fix that! 💕
        </p>
        <Link
          href="/shop"
          className="bg-pink-500 hover:bg-pink-600 text-white font-extrabold text-lg px-8 py-3 rounded-full shadow-lg hover:-translate-y-0.5 transition-all inline-block"
        >
          Shop Now 🛍️
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <h1
          className="text-4xl text-pink-600"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          Your Cart 🛒
        </h1>
        <button
          onClick={clearCart}
          className="text-sm text-gray-400 hover:text-red-400 transition-colors font-semibold"
        >
          Clear all
        </button>
      </div>

      <div className="space-y-4 mb-8">
        {items.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl shadow-md p-4 flex gap-4 items-center"
          >
            {/* Image */}
            <Link href={`/shop/${product.id}`} className="relative shrink-0 w-20 h-20 rounded-2xl overflow-hidden bg-gray-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </Link>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <Link href={`/shop/${product.id}`}>
                <h3 className="font-bold text-[var(--foreground)] hover:text-pink-500 transition-colors truncate">
                  {product.name}
                </h3>
              </Link>
              <p className="text-pink-600 font-bold">€{product.price.toFixed(2)}</p>
            </div>

            {/* Qty controls */}
            <div className="flex items-center border-2 border-pink-200 rounded-full overflow-hidden shrink-0">
              <button
                onClick={() => decrement(product.id)}
                className="px-3 py-1.5 font-bold text-pink-500 hover:bg-pink-50 transition-colors"
              >
                −
              </button>
              <span className="px-3 py-1.5 font-bold text-[var(--foreground)] min-w-[2rem] text-center">
                {quantity}
              </span>
              <button
                onClick={() => increment(product.id)}
                className="px-3 py-1.5 font-bold text-pink-500 hover:bg-pink-50 transition-colors"
              >
                +
              </button>
            </div>

            {/* Line total + remove */}
            <div className="text-right shrink-0 ml-2">
              <p className="font-extrabold text-[var(--foreground)]">
                €{(product.price * quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-xs text-gray-300 hover:text-red-400 transition-colors mt-1"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-white rounded-3xl shadow-md p-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>{totalItems} item{totalItems !== 1 ? "s" : ""}</span>
          <span>Subtotal</span>
        </div>
        <div className="flex justify-between items-center border-t border-gray-100 pt-4">
          <span className="font-extrabold text-2xl text-[var(--foreground)]">Total</span>
          <span className="font-extrabold text-2xl text-pink-600">
            €{totalPrice.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-400 text-xs mt-2 mb-6">
          Shipping calculated at checkout. All pieces are handmade to order.
        </p>
        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-extrabold text-lg py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
          Checkout 🌸
        </button>
        <Link
          href="/shop"
          className="block text-center text-pink-500 font-semibold mt-4 hover:underline"
        >
          ← Continue Shopping
        </Link>
      </div>
    </div>
  );
}
