export type Category =
  | "rings"
  | "charms"
  | "necklaces"
  | "bracelets"
  | "wine-glass-charms";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  details: string[];
  image: string;
  badge?: string;
  colors?: string[];
}

export const CATEGORIES: { value: Category | "all"; label: string; emoji: string }[] = [
  { value: "all", label: "All", emoji: "✨" },
  { value: "rings", label: "Rings", emoji: "💍" },
  { value: "charms", label: "Charms", emoji: "🌟" },
  { value: "necklaces", label: "Necklaces", emoji: "📿" },
  { value: "bracelets", label: "Bracelets", emoji: "🌈" },
  { value: "wine-glass-charms", label: "Wine Glass Charms", emoji: "🍷" },
];

export const PRODUCTS: Product[] = [
  {
    id: "ring-multicolor",
    name: "Rainbow Bead Ring",
    category: "rings",
    price: 8.5,
    description:
      "A joyful, colourful ring made with vibrant mixed glass beads on elastic wire. Each bead is unique — red, green, blue, yellow, orange, pink and more come together in a rainbow of summer happiness.",
    details: [
      "Handmade with glass seed beads",
      "Elastic wire base — one size fits most",
      "Each piece is unique",
      "Nickel-free",
    ],
    image:
      "https://github.com/user-attachments/assets/71466abb-da34-4119-aafb-e458372dc7e1",
    badge: "Bestseller",
    colors: ["multicolor"],
  },
  {
    id: "charm-gecko",
    name: "Gecko Charm",
    category: "charms",
    price: 12.0,
    description:
      "A charming little gecko sculpted entirely from green and yellow glass beads wrapped on wire. Perfect as a necklace pendant, bag charm or keyring addition — bring a bit of wild summer energy wherever you go!",
    details: [
      "Handmade with glass seed beads & wire",
      "Approx. 6 cm long",
      "Comes with a jump ring for attaching",
      "Each piece is unique",
    ],
    image:
      "https://github.com/user-attachments/assets/1a5cb41d-dcbf-46e5-8fe8-0eedd5fcd861",
    badge: "Fan Favourite",
    colors: ["green", "yellow"],
  },
  {
    id: "charm-crab",
    name: "Red Crab Charm",
    category: "charms",
    price: 12.0,
    description:
      "A sassy little crab made from shimmering red glass beads with cute black bead eyes. The silver jump ring makes it easy to attach to necklaces, bracelets or bags. Pure summer on the beach vibes!",
    details: [
      "Handmade with glass seed beads & wire",
      "Approx. 5 cm wide",
      "Silver-tone jump ring included",
      "Each piece is unique",
    ],
    image:
      "https://github.com/user-attachments/assets/097bce58-498a-4396-88a6-bc82c461433a",
    badge: "New",
    colors: ["red"],
  },
  {
    id: "charm-fish",
    name: "Tropical Fish Charm",
    category: "charms",
    price: 14.0,
    description:
      "A vibrant tropical fish swimming in orange, yellow, blue and green glass beads. Wire-sculpted to perfection with a cute pink nose and an orange ring loop. Hang it on a necklace or bracelet for an instant ocean mood!",
    details: [
      "Handmade with glass seed beads & wire",
      "Approx. 7 cm long",
      "Orange ring loop for easy attachment",
      "Each piece is unique",
    ],
    image:
      "https://github.com/user-attachments/assets/56b0e5ac-1ea0-4421-a5df-3e5cd3524dcd",
    badge: "New",
    colors: ["orange", "yellow", "blue", "green"],
  },
  {
    id: "bracelet-pink-summer",
    name: "Pink Summer Bracelet",
    category: "bracelets",
    price: 11.0,
    description:
      "A stretch bracelet bursting with pink, coral and white glass beads. The ultimate summer wrist candy — stack it or wear it solo, it goes with everything from beach cover-ups to sundresses.",
    details: [
      "Handmade with glass seed beads",
      "Elastic wire — one size fits most",
      "Approx. 18 cm circumference",
      "Nickel-free",
    ],
    image:
      "https://github.com/user-attachments/assets/71466abb-da34-4119-aafb-e458372dc7e1",
    colors: ["pink", "coral", "white"],
  },
  {
    id: "bracelet-ocean",
    name: "Ocean Vibes Bracelet",
    category: "bracelets",
    price: 11.0,
    description:
      "Inspired by the sea, this bracelet combines turquoise, blue and white glass beads in a cheerful stretch design. Wear it and feel like your toes are already in the sand.",
    details: [
      "Handmade with glass seed beads",
      "Elastic wire — one size fits most",
      "Approx. 18 cm circumference",
      "Nickel-free",
    ],
    image:
      "https://github.com/user-attachments/assets/71466abb-da34-4119-aafb-e458372dc7e1",
    colors: ["turquoise", "blue", "white"],
  },
  {
    id: "necklace-shell",
    name: "Beaded Summer Necklace",
    category: "necklaces",
    price: 18.0,
    description:
      "A delicate beaded necklace featuring colourful glass beads in summery shades. Light, cheerful and totally handmade — perfect for layering or wearing alone as a statement piece.",
    details: [
      "Handmade with glass seed beads",
      "Adjustable length: 40–45 cm",
      "Lobster clasp closure",
      "Nickel-free",
    ],
    image:
      "https://github.com/user-attachments/assets/1a5cb41d-dcbf-46e5-8fe8-0eedd5fcd861",
    colors: ["multicolor"],
  },
  {
    id: "necklace-pendant-fish",
    name: "Fish Pendant Necklace",
    category: "necklaces",
    price: 22.0,
    description:
      "The fan-favourite tropical fish charm on a dainty beaded chain. A true conversation starter — wear your love of the ocean around your neck.",
    details: [
      "Handmade fish charm + beaded chain",
      "Adjustable length: 40–45 cm",
      "Lobster clasp closure",
      "Nickel-free",
    ],
    image:
      "https://github.com/user-attachments/assets/56b0e5ac-1ea0-4421-a5df-3e5cd3524dcd",
    badge: "Popular",
    colors: ["orange", "blue", "yellow"],
  },
  {
    id: "wine-set-sea",
    name: "Under the Sea Wine Charm Set",
    category: "wine-glass-charms",
    price: 28.0,
    description:
      "Never mix up your glass again! This set of 6 hand-beaded wine glass charms features sea-themed designs: crab, fish, gecko, seahorse, shell and starfish. The perfect hostess gift for any summer gathering.",
    details: [
      "Set of 6 unique charms",
      "Handmade with glass seed beads & wire",
      "Wine-glass hoop included on each charm",
      "Presented in a gift-ready organza bag",
    ],
    image:
      "https://github.com/user-attachments/assets/097bce58-498a-4396-88a6-bc82c461433a",
    badge: "Gift Idea",
    colors: ["multicolor"],
  },
  {
    id: "wine-set-rainbow",
    name: "Rainbow Wine Charm Set",
    category: "wine-glass-charms",
    price: 24.0,
    description:
      "Six vibrant bead charms, each in a different bold colour of the rainbow, so everyone at the table knows their glass. A cheerful, colourful gift that's always appreciated.",
    details: [
      "Set of 6 charms (one per rainbow colour)",
      "Handmade with glass seed beads & wire",
      "Wine-glass hoop included on each charm",
      "Presented in a gift-ready organza bag",
    ],
    image:
      "https://github.com/user-attachments/assets/71466abb-da34-4119-aafb-e458372dc7e1",
    badge: "Gift Idea",
    colors: ["multicolor"],
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductsByCategory(category: Category | "all"): Product[] {
  if (category === "all") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}
