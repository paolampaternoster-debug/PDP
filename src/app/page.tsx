import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, CATEGORIES } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

const FEATURED_IDS = ["ring-multicolor", "charm-crab", "charm-fish", "charm-gecko"];
const featured = PRODUCTS.filter((p) => FEATURED_IDS.includes(p.id));

export default function HomePage() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #ff94ba 0%, #ffd93d 40%, #ff6b6b 70%, #c77dff 100%)",
        }}
      >
        {/* Floating emojis */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {["🌸", "🐚", "🌊", "🌺", "💎", "🦀", "🐠", "⭐", "🌼", "🍹"].map(
            (e, i) => (
              <span
                key={i}
                className="absolute text-3xl opacity-60"
                style={{
                  left: `${(i * 11 + 5) % 95}%`,
                  top: `${(i * 17 + 10) % 80}%`,
                  animation: `float ${3 + (i % 3)}s ease-in-out ${i * 0.4}s infinite`,
                }}
              >
                {e}
              </span>
            )
          )}
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
          <div className="inline-block bg-white/30 backdrop-blur-sm text-white text-sm font-bold px-4 py-1 rounded-full mb-6 shadow">
            ✨ Handmade with love &amp; beads
          </div>
          <h1
            className="text-5xl md:text-7xl text-white drop-shadow-lg mb-6"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            BeadyBliss
          </h1>
          <p className="text-white/90 text-xl md:text-2xl font-semibold max-w-xl mb-10 drop-shadow">
            Colourful, handmade bead jewellery full of summer sunshine 🌞
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/shop"
              className="bg-white text-pink-600 font-extrabold text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Shop Now 🛍️
            </Link>
            <Link
              href="/shop?category=wine-glass-charms"
              className="bg-pink-700/80 text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Gift Sets 🎁
            </Link>
          </div>
        </div>
      </section>

      {/* ── REAL PRODUCT PHOTOS ──────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2
            className="text-4xl text-pink-600 mb-3"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            Real creations, real love
          </h2>
          <p className="text-gray-600 text-lg">
            Every single piece is hand-crafted — here are some of our favourites 💕
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              src: "https://github.com/user-attachments/assets/71466abb-da34-4119-aafb-e458372dc7e1",
              alt: "Multicolour beaded ring",
              label: "Rainbow Ring",
              href: "/shop/ring-multicolor",
            },
            {
              src: "https://github.com/user-attachments/assets/1a5cb41d-dcbf-46e5-8fe8-0eedd5fcd861",
              alt: "Gecko bead charm",
              label: "Gecko Charm",
              href: "/shop/charm-gecko",
            },
            {
              src: "https://github.com/user-attachments/assets/097bce58-498a-4396-88a6-bc82c461433a",
              alt: "Red crab bead charm",
              label: "Crab Charm",
              href: "/shop/charm-crab",
            },
            {
              src: "https://github.com/user-attachments/assets/56b0e5ac-1ea0-4421-a5df-3e5cd3524dcd",
              alt: "Tropical fish bead charm",
              label: "Fish Charm",
              href: "/shop/charm-fish",
            },
          ].map((img) => (
            <Link
              key={img.href}
              href={img.href}
              className="group relative rounded-3xl overflow-hidden aspect-square bg-gray-50 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute bottom-3 left-0 right-0 text-center text-white font-bold text-sm drop-shadow">
                {img.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CATEGORIES ───────────────────────────────────────── */}
      <section className="bg-pink-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-3xl text-center text-pink-600 mb-8"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            Browse by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.filter((c) => c.value !== "all").map((cat) => (
              <Link
                key={cat.value}
                href={`/shop?category=${cat.value}`}
                className="flex items-center gap-2 bg-white hover:bg-pink-500 hover:text-white text-[var(--foreground)] font-bold px-6 py-3 rounded-full shadow hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <span className="text-xl">{cat.emoji}</span>
                <span>{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2
            className="text-3xl text-pink-600"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            Featured Pieces ✨
          </h2>
          <Link
            href="/shop"
            className="text-pink-500 font-bold hover:underline text-sm"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ── HANDMADE PROMISE ─────────────────────────────────── */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(135deg, #fff0f6 0%, #fff8e7 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-3xl text-pink-600 mb-6"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            Made with heart 💕
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌸",
                title: "100% Handmade",
                text: "Every bead is placed by hand. No two pieces are exactly alike.",
              },
              {
                icon: "☀️",
                title: "Summer Vibes",
                text: "Inspired by warm days, ocean waves and endless sunshine.",
              },
              {
                icon: "🎁",
                title: "Perfect Gift",
                text: "Wine glass charm sets come gift-ready in an organza bag.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="font-extrabold text-lg text-[var(--foreground)] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
