export const products = [
  {
    id: 1,
    slug: "bakuchiol-retinol-serum",
    brand: "HERBIVORE",
    name: "Bakuchiol Retinol Alternative Serum",
    price: 54.00,
    images: [
      "/products/bakuchiol-serum-1.jpg",
      "/products/bakuchiol-serum-2.jpg",
      "/products/bakuchiol-serum-3.jpg"
    ],
    category: "serums",
    collection: "bestsellers",
    description: "A natural alternative to retinol, this gentle yet powerful serum helps reduce the appearance of fine lines and wrinkles while improving skin texture.",
    features: [
      "100% Vegan & organic",
      "Cruelty Free & Parabens Free",
      "Suitable for sensitive skin",
      "Strongly moisturizes, softens and smoothens"
    ],
    ingredients: "Aqua, Bakuchiol, Olive Squalane, Glycerin, Aloe Barbadensis Leaf Juice, Tremella Fuciformis Extract",
    howToUse: "Apply 4-6 drops to clean, slightly damp skin in the evening. Follow with moisturizer.",
    icons: ["vegan", "cruelty-free", "recyclable", "gluten-free"]
  },
  {
    id: 2,
    slug: "algae-peel-off-mask",
    brand: "OCEAN BLOOM",
    name: "Algae Peel-Off Mask",
    price: 38.00,
    images: [
      "/products/algae-mask-1.jpg",
      "/products/algae-mask-2.jpg",
      "/products/algae-mask-3.jpg"
    ],
    category: "masks",
    collection: "new-arrivals",
    description: "A purifying peel-off mask enriched with marine algae and botanical extracts to detoxify and revitalize tired skin.",
    features: [
      "With Japanese sea kelp",
      "Deep cleansing formula",
      "Removes impurities",
      "Brightens complexion"
    ],
    ingredients: "Marine Collagen, Spirulina Maxima Extract, Chlorella Vulgaris Extract, Laminaria Digitata Extract",
    howToUse: "Apply a thick, even layer to clean skin. Leave for 15-20 minutes until completely dry. Peel off gently from the edges.",
    icons: ["vegan", "cruelty-free", "recyclable"]
  },
  {
    id: 3,
    slug: "rose-body-scrub",
    brand: "BLOOM & GLOW",
    name: "Rose Body Scrub",
    price: 28.00,
    images: [
      "/products/rose-scrub-1.jpg",
      "/products/rose-scrub-2.jpg",
      "/products/rose-scrub-3.jpg"
    ],
    category: "body",
    collection: "bestsellers",
    description: "A luxurious body scrub infused with rose petals and himalayan salt to gently exfoliate and nourish the skin.",
    features: [
      "Natural exfoliants",
      "Rich in minerals",
      "Gentle formula",
      "Leaves skin glowing"
    ],
    ingredients: "Himalayan Pink Salt, Rosa Damascena Flower Extract, Sweet Almond Oil, Coconut Oil",
    howToUse: "Apply to damp skin in circular motions. Rinse thoroughly. Use 2-3 times per week.",
    icons: ["vegan", "cruelty-free", "recyclable"]
  },
  {
    id: 4,
    slug: "vitamin-c-brightening-serum",
    brand: "GLOW BOTANICS",
    name: "Vitamin C Brightening Serum",
    price: 48.00,
    images: [
      "/products/vitamin-c-serum-1.jpg",
      "/products/vitamin-c-serum-2.jpg",
      "/products/vitamin-c-serum-3.jpg"
    ],
    category: "serums",
    collection: "new-arrivals",
    description: "A powerful brightening serum with stable Vitamin C and Kakadu Plum to even skin tone and boost radiance.",
    features: [
      "15% Vitamin C complex",
      "Antioxidant rich",
      "Reduces dark spots",
      "Boosts collagen production"
    ],
    ingredients: "Kakadu Plum Extract, Ascorbic Acid, Ferulic Acid, Vitamin E, Hyaluronic Acid",
    howToUse: "Apply 3-4 drops to cleansed face in the morning. Follow with sunscreen.",
    icons: ["vegan", "cruelty-free", "recyclable", "gluten-free"]
  },
  {
    id: 5,
    slug: "hemp-facial-moisturizer",
    brand: "PURE EARTH",
    name: "Hemp Facial Moisturizer",
    price: 42.00,
    images: [
      "/products/hemp-moisturizer-1.jpg",
      "/products/hemp-moisturizer-2.jpg",
      "/products/hemp-moisturizer-3.jpg"
    ],
    category: "moisturizers",
    collection: "bestsellers",
    description: "A calming and balancing moisturizer with hemp seed oil and ceramides for healthy skin barrier function.",
    features: [
      "Non-comedogenic",
      "Balances oil production",
      "Reduces redness",
      "Strengthens skin barrier"
    ],
    ingredients: "Hemp Seed Oil, Ceramide Complex, Panthenol, Centella Asiatica Extract",
    howToUse: "Apply morning and evening to cleansed face and neck. Suitable for daily use.",
    icons: ["vegan", "cruelty-free", "recyclable"]
  }
];

export const collections = [
  {
    id: 1,
    name: "bestsellers",
    title: "Bestsellers",
    description: "Our most loved natural beauty products"
  },
  {
    id: 2,
    name: "new-arrivals",
    title: "New Arrivals",
    description: "The latest additions to our natural beauty range"
  }
];

export const categories = [
  {
    id: 1,
    name: "serums",
    title: "Serums",
    description: "Targeted treatments for specific skin concerns"
  },
  {
    id: 2,
    name: "masks",
    title: "Masks",
    description: "Deep treatments for radiant skin"
  },
  {
    id: 3,
    name: "moisturizers",
    title: "Moisturizers",
    description: "Hydrating formulas for all skin types"
  },
  {
    id: 4,
    name: "body",
    title: "Body Care",
    description: "Nourishing care from head to toe"
  }
]; 