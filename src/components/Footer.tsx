import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-pink-600 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">💎</span>
            <span
              className="text-2xl font-bold"
              style={{ fontFamily: "Pacifico, cursive" }}
            >
              BeadyBliss
            </span>
          </div>
          <p className="text-pink-100 text-sm leading-relaxed">
            Handmade bead jewellery crafted with love and a whole lot of summer
            sunshine. Every piece is unique, just like you! 🌸
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Shop</h3>
          <ul className="space-y-2 text-pink-100 text-sm">
            <li><Link href="/shop?category=rings" className="hover:text-white transition-colors">💍 Rings</Link></li>
            <li><Link href="/shop?category=charms" className="hover:text-white transition-colors">🌟 Charms</Link></li>
            <li><Link href="/shop?category=necklaces" className="hover:text-white transition-colors">📿 Necklaces</Link></li>
            <li><Link href="/shop?category=bracelets" className="hover:text-white transition-colors">🌈 Bracelets</Link></li>
            <li><Link href="/shop?category=wine-glass-charms" className="hover:text-white transition-colors">🍷 Wine Glass Charms</Link></li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="font-bold text-lg mb-3">About</h3>
          <p className="text-pink-100 text-sm leading-relaxed">
            Each piece is handmade to order with love. Because everything is
            made by hand, tiny variations are what make your jewellery
            one-of-a-kind. ✨
          </p>
          <p className="text-pink-100 text-sm mt-3">
            Questions? Reach out at{" "}
            <a
              href="mailto:hello@beadybliss.com"
              className="underline hover:text-white transition-colors"
            >
              hello@beadybliss.com
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-pink-500 py-4 text-center text-pink-200 text-sm">
        © {new Date().getFullYear()} BeadyBliss — Made with 💕 &amp; beads
      </div>
    </footer>
  );
}
