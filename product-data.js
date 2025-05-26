const productList = [
  // Seraphic Grace
  {
    name: "Destined Fairness",
    category: "Seraphic Grace",
    img: "Destined Fairness.png",
    price: 120,
    desc: "A dreamy gown with shimmering accents."
  },
  {
    name: "Gale Seeker",
    category: "Seraphic Grace",
    img: "Gale Seeker.png",
    price: 95,
    desc: "Lightweight cape with cosmic embroidery."
  },
  {
    name: "Isolde's Promise",
    category: "Seraphic Grace",
    img: "Isolde’s Promise.png",
    price: 70,
    desc: "Boots for walking among the stars."
  },
  {
    name: "Veiled Faithful",
    category: "Seraphic Grace",
    img: "Veiled Faithful.png",
    price: 105,
    desc: "A flowing robe with sunset hues."
  },

  // Iridescent Glow
  {
    name: "Elegance",
    category: "Iridescent Glow",
    img: "Elegance.png",
    price: 130,
    desc: "A shimmering cloak with crystal details."
  },
  {
    name: "Eternity",
    category: "Iridescent Glow",
    img: "Eternity.png",
    price: 65,
    desc: "Soft blouse in a gentle lavender shade."
  },
  {
    name: "Resplendence",
    category: "Iridescent Glow",
    img: "Resplendence.png",
    price: 140,
    desc: "A sleek jacket for midnight adventures."
  },
  {
    name: "Transparency",
    category: "Iridescent Glow",
    img: "Transparency.png",
    price: 30,
    desc: "A soft beret in pastel tones."
  },

  // Midnight Descenders
  {
    name: "Cosmic Cascade",
    category: "Midnight Descenders",
    img: "Cosmic Cascade.png",
    price: 25,
    desc: "Elegant gloves in a deep scarlet shade."
  },
  {
    name: "Deep Sea Voyager",
    category: "Midnight Descenders",
    img: "Deep Sea Voyager.png",
    price: 40,
    desc: "A scarf that shines with solar warmth."
  },
  {
    name: "Starshaper",
    category: "Midnight Descenders",
    img: "Starshaper.png",
    price: 90,
    desc: "Trendy jacket for city nights."
  },
  {
    name: "Twilight Forager",
    category: "Midnight Descenders",
    img: "Twilight Forager.png",
    price: 28,
    desc: "A playful hat blessed by Bandle City."
  },

  // Bandle City Blessed
  {
    name: "Mushroom Mage",
    category: "Bandle City Blessed",
    img: "Mushroom Mage.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },
  {
    name: "Red Riding Annie",
    category: "Bandle City Blessed",
    img: "Red Riding Annie.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },
  {
    name: "Shrooglet's Shroomcap",
    category: "Bandle City Blessed",
    img: "Shrooglet's Shroomcap.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },
  {
    name: "Woodland Skipper",
    category: "Bandle City Blessed",
    img: "Woodland Skipper.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },

  // Lucid Lavender
  {
    name: "Eliza's Elegance",
    category: "Lucid Lavender",
    img: "Eliza's Elegance.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },
  {
    name: "Lady Luck in Lavender",
    category: "Lucid Lavender",
    img: "Lady Luck in Lavender.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },
  {
    name: "Magister Magician",
    category: "Lucid Lavender",
    img: "Magister Magician.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },
  {
    name: "Malevolent Maid",
    category: "Lucid Lavender",
    img: "Malevolent Maid.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },

  // Pastel Princess
  {
    name: "Cuddle Core",
    category: "Pastel Princess",
    img: "Cuddle Core.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },
  {
    name: "Gentle Heartbreaker",
    category: "Pastel Princess",
    img: "Gentle Heartbreaker.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },
  {
    name: "Jolly Jumpers",
    category: "Pastel Princess",
    img: "Jolly Jumpers.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },
  {
    name: "Strawberry Milk",
    category: "Pastel Princess",
    img: "Strawberry Milk.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },

  // Scarlett's Letter
  {
    name: "Bloodletter's Scholar",
    category: "Scarletts Letter",
    img: "Bloodletter's Scholar.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },
  {
    name: "Cranberry Pinafore",
    category: "Scarletts Letter",
    img: "Cranberry Pinafore.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },
  {
    name: "Fair Crimson Lady",
    category: "Scarletts Letter",
    img: "Fair Crimson Lady.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },
  {
    name: "Sangria Deaconess",
    category: "Scarletts Letter",
    img: "Sangria Deaconess.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },

  // In Solari's Name
  {
    name: "Kiongozi The Flaming God of War",
    category: "In Solari's Name",
    img: "Kiongozi The Flaming God of War.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },
  {
    name: "Messenger of Rakkor",
    category: "In Solari's Name",
    img: "Messenger of Rakkor.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },
  {
    name: "The Radiant Dawn",
    category: "In Solari's Name",
    img: "The Radiant Dawn.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },
  {
    name: "Zenith Raydancer",
    category: "In Solari's Name",
    img: "Zenith Raydancer.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },

  // Urban Street Dwellers
  {
    name: "Magatsukami no Kage",
    category: "Urban Street Dwellers",
    img: "Magatsukami no Kage.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },
  {
    name: "Rojiura ni Hisomu Yurebito",
    category: "Urban Street Dwellers",
    img: "Rojiura ni Hisomu Yurebito.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },
  {
    name: "URBAN: Cypressus Custos",
    category: "Urban Street Dwellers",
    img: "URBAN Cypressus Custos.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },
  {
    name: "URBAN: Divina Vulpes",
    category: "Urban Street Dwellers",
    img: "URBAN Divina Vulpes.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },

  // Star Guardians
  {
    name: "Daughter of the Stars",
    category: "Star Guardians",
    img: "Daughter of the Stars.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },
  {
    name: "Rebellious Star",
    category: "Star Guardians",
    img: "Rebellious Star.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },
  {
    name: "Star-studded Fox",
    category: "Star Guardians",
    img: "Star-studded Fox.png",
    price: 48,
    desc: "Shorts that glow in the moonlight."
  },
  {
    name: "Starry-eyed Songstress",
    category: "Star Guardians",
    img: "Starry-eyed Songstress.png",
    price: 48,
    desc: "This delightful pinafore dress layers a vibrant red tartan with crisp white and charming details."
  }
];