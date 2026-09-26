// Complete structured menu data for Mini Monal Restaurant, Gujranwala

export const RESTAURANT_INFO = {
  name: "Mini Monal Restaurant",
  tagline: "Authentic Flavors. Memorable Family Dining.",
  subTagline: "Experience rich Pakistani flavors, sizzling BBQ, traditional karahi, Chinese favorites and family platters at Mini Monal Restaurant.",
  category: "Family Restaurant",
  address: "Grand Trunk Road, Rahwali Cantt, Choudry Bazar, near Dr Arshad, Muslim Town, Gujranwala, 52250, Pakistan",
  shortAddress: "GT Road, Rahwali Cantt, Gujranwala",
  phone: "+92 320 7462212",
  phoneRaw: "+923207462212",
  whatsapp: "923207462212",
  rating: 4.1,
  reviewsCount: 304,
  priceRange: "Rs 1–4,000 per person",
  hours: "Open Daily until 2:00 AM (Late Night)",
  services: [
    { title: "Dine-in", desc: "Spacious family hall & rooftop ambiance", icon: "Utensils" },
    { title: "Drive-through", desc: "Quick car-side takeaway service", icon: "Car" },
    { title: "No-contact Delivery", desc: "Fresh & piping hot to your doorstep", icon: "Truck" }
  ],
  googleMapsUrl: "https://maps.google.com/?q=Grand+Trunk+Road+Rahwali+Cantt+Muslim+Town+Gujranwala"
};

export const MENU_CATEGORIES = [
  { id: "soups", name: "Soups", group: "Starters & Chinese", icon: "Soup", image: "/images/soup.jpg" },
  { id: "chowmein", name: "Chowmein", group: "Starters & Chinese", icon: "UtensilsCrossed", image: "/images/chinese.jpg" },
  { id: "fish", name: "Fish Grill / Fry", group: "Seafood", icon: "Fish", image: "/images/fish.jpg" },
  { id: "chinese", name: "Chinese Food", group: "Starters & Chinese", icon: "Flame", image: "/images/chinese.jpg" },
  { id: "special-rice", name: "Special Rice", group: "Rice & Biryani", icon: "Wheat", image: "/images/handi.jpg" },
  { id: "daal", name: "Daal & Veg", group: "Traditional", icon: "Salad", image: "/images/daal.jpg" },
  { id: "tawa", name: "Tawa Specialties", group: "Traditional", icon: "Pan", image: "/images/tawa.jpg" },
  { id: "mutton-karahi", name: "Mutton Karahi", group: "Karahi & Handi", icon: "Flame", image: "/images/karahi.jpg" },
  { id: "chicken-karahi", name: "Chicken Karahi", group: "Karahi & Handi", icon: "Flame", image: "/images/karahi.jpg" },
  { id: "chicken-handi", name: "Chicken Handi", group: "Karahi & Handi", icon: "Soup", image: "/images/handi.jpg" },
  { id: "desi-murgh", name: "Desi Murgh Karahi", group: "Karahi & Handi", icon: "Award", image: "/images/karahi.jpg" },
  { id: "beef-karahi", name: "Beef Karahi", group: "Karahi & Handi", icon: "Flame", image: "/images/karahi.jpg" },
  { id: "chicken-bbq", name: "Chicken BBQ", group: "Live Sizzling BBQ", icon: "Sparkles", image: "/images/bbq.jpg" },
  { id: "mutton-bbq", name: "Mutton BBQ", group: "Live Sizzling BBQ", icon: "Sparkles", image: "/images/bbq.jpg" },
  { id: "family-platters", name: "Family Platters", group: "Special Royal Platters", icon: "Crown", image: "/images/bbq.jpg" },
  { id: "tandoor", name: "Tandoor", group: "Fresh Bread", icon: "CircleDot", image: "/images/dining.jpg" },
  { id: "salad", name: "Salad & Raita", group: "Sides & Beverages", icon: "Salad", image: "/images/salad.jpg" },
  { id: "cold-drink", name: "Cold Drinks & Beverages", group: "Sides & Beverages", icon: "Coffee", image: "/images/drinks.jpg" }
];

export const MENU_DATA = [
  // CATEGORY: SOUPS
  {
    id: "soup-1",
    name: "Special Soup",
    category: "soups",
    halfPrice: 850,
    fullPrice: 1600,
    tag: "Chef's Special",
    isPopular: true,
    description: "Our signature thick soup loaded with shredded chicken, fresh prawns, winter vegetables, and secret spices.",
    image: "/images/soup.jpg"
  },
  {
    id: "soup-2",
    name: "Hot and Sour Soup",
    category: "soups",
    halfPrice: 550,
    fullPrice: 1000,
    description: "Classic spicy and tangy Indo-Chinese soup with chicken, mushrooms, and beaten egg ribbons.",
    image: "/images/soup.jpg"
  },
  {
    id: "soup-3",
    name: "Chicken Corn Soup",
    category: "soups",
    halfPrice: 500,
    fullPrice: 900,
    description: "Comforting sweet corn soup simmered with tender shredded chicken and egg broth.",
    image: "/images/soup.jpg"
  },
  {
    id: "soup-4",
    name: "Vegetable Soup",
    category: "soups",
    halfPrice: 400,
    fullPrice: 700,
    description: "Light, nourishing garden-fresh vegetable broth with light seasoning and herbs.",
    image: "/images/soup.jpg"
  },

  // CATEGORY: CHOWMEIN
  {
    id: "chow-1",
    name: "Special Chowmein",
    category: "chowmein",
    price: 900,
    tag: "Recommended",
    isPopular: true,
    description: "Wok-tossed noodles with chicken, fresh prawns, crunchy bell peppers, and savoury house sauce.",
    image: "/images/chinese.jpg"
  },
  {
    id: "chow-2",
    name: "Chicken Chowmein",
    category: "chowmein",
    price: 800,
    description: "Classic stir-fried egg noodles with tender chicken strips and julienne garden vegetables.",
    image: "/images/chinese.jpg"
  },
  {
    id: "chow-3",
    name: "Vegetable Chowmein",
    category: "chowmein",
    price: 700,
    description: "Stir-fried noodles with seasonal crunchy vegetables in light soy and garlic sauce.",
    image: "/images/chinese.jpg"
  },

  // CATEGORY: FISH GRILL / FRY
  {
    id: "fish-1",
    name: "Kala Rohu",
    category: "fish",
    priceText: "Price on Request",
    tag: "Seasonal Fresh",
    isPopular: true,
    description: "Premium river Kala Rohu marinated in traditional Lahori spices and crisp-fried to perfection.",
    image: "/images/fish.jpg"
  },
  {
    id: "fish-2",
    name: "Fish Kabab",
    category: "fish",
    priceText: "Price on Request",
    description: "Delicate spiced boneless fish mince skewered and charcoal-grilled over hot coals.",
    image: "/images/fish.jpg"
  },
  {
    id: "fish-3",
    name: "Cheeda Fish",
    category: "fish",
    priceText: "Price on Request",
    description: "Traditional freshwater catch marinated in crushed coriander, carom seeds (ajwain), and deep fried.",
    image: "/images/fish.jpg"
  },
  {
    id: "fish-4",
    name: "Sohal Fish",
    category: "fish",
    priceText: "Price on Request",
    description: "Premium succulent fish fillet marinated in zesty lemon and house tandoori spice blend.",
    image: "/images/fish.jpg"
  },
  {
    id: "fish-5",
    name: "Fish Tikka",
    category: "fish",
    priceText: "Price on Request",
    description: "Juicy boneless fish cubes chargrilled on skewers with charred bell peppers and lemons.",
    image: "/images/fish.jpg"
  },
  {
    id: "fish-6",
    name: "Bangish",
    category: "fish",
    priceText: "Price on Request",
    description: "Signature pan-fried spiced fish delicacy served with mint chutney and lemon wedges.",
    image: "/images/fish.jpg"
  },

  // CATEGORY: CHINESE FOOD
  {
    id: "chin-1",
    name: "Chicken Manchurian",
    category: "chinese",
    price: 800,
    tag: "Bestseller",
    isPopular: true,
    description: "Tender chicken balls in a rich, sweet and spicy red Manchurian gravy with ginger and spring onions.",
    image: "/images/chinese.jpg"
  },
  {
    id: "chin-2",
    name: "Chicken Shashlik",
    category: "chinese",
    price: 800,
    description: "Boneless chicken cubes skewered with capsicum and onions in a tangy tomato garlic sauce.",
    image: "/images/chinese.jpg"
  },
  {
    id: "chin-3",
    name: "Chicken Chilli Dry",
    category: "chinese",
    price: 800,
    description: "Crispy fried chicken strips tossed with spicy green chillies, garlic, and dark soy.",
    image: "/images/chinese.jpg"
  },
  {
    id: "chin-4",
    name: "Chicken Roasted",
    category: "chinese",
    price: 1000,
    description: "Whole roasted succulent chicken seasoned in Chinese herbs and soy glaze.",
    image: "/images/chinese.jpg"
  },
  {
    id: "chin-5",
    name: "Black Paper Chicken",
    category: "chinese",
    price: 750,
    description: "Stir-fried boneless chicken tossed in freshly cracked black peppercorn sauce and onions.",
    image: "/images/chinese.jpg"
  },

  // CATEGORY: SPECIAL RICE
  {
    id: "rice-1",
    name: "Special Rice",
    category: "special-rice",
    price: 950,
    tag: "Chef's Special",
    isPopular: true,
    description: "Fragrant premium Basmati rice stir-fried with chicken, prawns, eggs, and toasted cashews.",
    image: "/images/handi.jpg"
  },
  {
    id: "rice-2",
    name: "Chicken Fried Rice",
    category: "special-rice",
    price: 850,
    description: "Classic wok-tossed aromatic rice with diced chicken, eggs, scallions, and light seasoning.",
    image: "/images/chinese.jpg"
  },
  {
    id: "rice-3",
    name: "Egg Fried Rice",
    category: "special-rice",
    price: 800,
    description: "Fluffy basmati rice tossed with golden scrambled eggs, spring onions, and white pepper.",
    image: "/images/chinese.jpg"
  },
  {
    id: "rice-4",
    name: "Masala Rice",
    category: "special-rice",
    price: 800,
    description: "Spiced aromatic basmati rice cooked with caramelized onions and warming Punjabi spices.",
    image: "/images/handi.jpg"
  },
  {
    id: "rice-5",
    name: "Vegetable Rice",
    category: "special-rice",
    price: 650,
    description: "Light wok-tossed rice loaded with fresh green peas, carrots, and sweet corn.",
    image: "/images/chinese.jpg"
  },
  {
    id: "rice-6",
    name: "Garlic Rice",
    category: "special-rice",
    price: 600,
    description: "Fragrant rice infused with golden toasted garlic butter and fresh herbs.",
    image: "/images/handi.jpg"
  },
  {
    id: "rice-7",
    name: "Chest Biryani",
    category: "special-rice",
    price: 700,
    tag: "Authentic",
    description: "Richly spiced dum biryani served with a juicy succulent chicken chest piece and raita.",
    image: "/images/handi.jpg"
  },
  {
    id: "rice-8",
    name: "Leg Biryani",
    category: "special-rice",
    price: 600,
    description: "Layered saffron basmati biryani with tender whole chicken leg quarter and fragrant herbs.",
    image: "/images/handi.jpg"
  },
  {
    id: "rice-9",
    name: "Tikka Biryani",
    category: "special-rice",
    price: 450,
    description: "Smoky charcoal-grilled chicken tikka pieces layered with aromatic masala biryani rice.",
    image: "/images/handi.jpg"
  },

  // CATEGORY: DAAL & VEGETABLES
  {
    id: "daal-1",
    name: "Shahi Daal",
    category: "daal",
    price: 700,
    tag: "Royal Recipe",
    isPopular: true,
    description: "Rich lentils cooked in desi butter, cream, and dry nuts with royal spices.",
    image: "/images/daal.jpg"
  },
  {
    id: "daal-2",
    name: "Dal Makhni",
    category: "daal",
    price: 450,
    description: "Slow-simmered black lentils and kidney beans in a velvety butter and cream gravy.",
    image: "/images/daal.jpg"
  },
  {
    id: "daal-3",
    name: "Dal Maash",
    category: "daal",
    price: 300,
    description: "Punjabi style dry white lentils tempered with cumin, whole red chillies, and desi ghee.",
    image: "/images/daal.jpg"
  },
  {
    id: "daal-4",
    name: "Dal Chana",
    category: "daal",
    price: 250,
    description: "Wholesome split chickpea lentils simmered and tempered with garlic and spices.",
    image: "/images/daal.jpg"
  },
  {
    id: "daal-5",
    name: "Mix Vegetables",
    category: "daal",
    price: 350,
    description: "Fresh seasonal vegetables sautéed with onions, tomatoes, and ground spices.",
    image: "/images/daal.jpg"
  },

  // CATEGORY: TAWA SPECIALTIES
  {
    id: "tawa-1",
    name: "Tawa Mutton Qeema",
    category: "tawa",
    price: 1200,
    tag: "Specialty",
    isPopular: true,
    description: "Hand-minced prime mutton cooked on a live iron tawa with green chilies, ginger, and butter.",
    image: "/images/tawa.jpg"
  },
  {
    id: "tawa-2",
    name: "Tawa Beef Qeema",
    category: "tawa",
    price: 1100,
    description: "Spiced beef mince sizzling on iron tawa with crushed tomatoes, garlic, and fresh mint.",
    image: "/images/tawa.jpg"
  },
  {
    id: "tawa-3",
    name: "Tawa Chicken Qeema",
    category: "tawa",
    price: 900,
    description: "Tender minced chicken flash-cooked on tawa with aromatic garam masala and lemon juice.",
    image: "/images/tawa.jpg"
  },
  {
    id: "tawa-4",
    name: "Tawa Chest Piece",
    category: "tawa",
    price: 680,
    description: "Marinated chicken breast steak pan-sizzled on iron tawa with robust spiced gravy.",
    image: "/images/tawa.jpg"
  },
  {
    id: "tawa-5",
    name: "Tawa Leg Piece",
    category: "tawa",
    price: 580,
    description: "Juicy chicken leg quarter seared on flat tawa with spicy pan masala and herbs.",
    image: "/images/tawa.jpg"
  },

  // CATEGORY: MUTTON KARAHI
  {
    id: "m-karahi-1",
    name: "Special Mutton Karahi",
    category: "mutton-karahi",
    halfPrice: 2400,
    fullPrice: 4700,
    tag: "Signature Dish",
    isPopular: true,
    description: "Mini Monal's renowned mutton karahi cooked in pure iron wok with ripe tomatoes, julienned ginger, and green chillies.",
    image: "/images/karahi.jpg"
  },
  {
    id: "m-karahi-2",
    name: "Mutton Desi Ghee Karahi",
    category: "mutton-karahi",
    halfPrice: 2350,
    fullPrice: 4600,
    tag: "Desi Ghee",
    isPopular: true,
    description: "Prepared exclusively in aromatic pure Desi Ghee with premium cuts of fresh tender mutton.",
    image: "/images/karahi.jpg"
  },
  {
    id: "m-karahi-3",
    name: "Mutton Zaiton Karahi",
    category: "mutton-karahi",
    halfPrice: 2350,
    fullPrice: 4600,
    description: "Prepared in premium olive oil for a rich, healthy, and authentic gourmet flavor.",
    image: "/images/karahi.jpg"
  },
  {
    id: "m-karahi-4",
    name: "Mutton Slemani Karahi",
    category: "mutton-karahi",
    halfPrice: 2300,
    fullPrice: 4500,
    description: "Authentic northern recipe cooked with minimal spices, fresh tomatoes, and green chillies.",
    image: "/images/karahi.jpg"
  },
  {
    id: "m-karahi-5",
    name: "Mutton Shanwari Karahi",
    category: "mutton-karahi",
    halfPrice: 2300,
    fullPrice: 4500,
    tag: "Shinwari",
    description: "Peshawari Shinwari style mutton cooked in its own natural juices with salt and ripe tomatoes.",
    image: "/images/karahi.jpg"
  },
  {
    id: "m-karahi-6",
    name: "Mutton White Karahi",
    category: "mutton-karahi",
    halfPrice: 2250,
    fullPrice: 4400,
    description: "Creamy white gravy mutton prepared with thick dairy cream, yogurt, white pepper, and green chillies.",
    image: "/images/karahi.jpg"
  },
  {
    id: "m-karahi-7",
    name: "Mutton Achari Karahi",
    category: "mutton-karahi",
    halfPrice: 2250,
    fullPrice: 4400,
    description: "Tender mutton infused with tangy traditional pickling spices and whole mustard seeds.",
    image: "/images/karahi.jpg"
  },
  {
    id: "m-karahi-8",
    name: "Mutton Machli Karahi",
    category: "mutton-karahi",
    halfPrice: 2300,
    fullPrice: 4500,
    description: "Made exclusively with tender mutton shank (machli) cuts simmered in rich Punjabi masala.",
    image: "/images/karahi.jpg"
  },
  {
    id: "m-karahi-9",
    name: "Mutton Chanp Karahi",
    category: "mutton-karahi",
    halfPrice: 2300,
    fullPrice: 4500,
    description: "Juicy mutton chops cooked in spicy karahi gravy with fresh coriander and ginger.",
    image: "/images/karahi.jpg"
  },
  {
    id: "m-karahi-10",
    name: "Mutton Hara Masala",
    category: "mutton-karahi",
    halfPrice: 2200,
    fullPrice: 4500,
    description: "Cooked in a fragrant green paste of fresh mint, coriander, and green chillies.",
    image: "/images/karahi.jpg"
  },
  {
    id: "m-karahi-11",
    name: "Mutton Black Pepper Krhi",
    category: "mutton-karahi",
    halfPrice: 2200,
    fullPrice: 4300,
    description: "Mild yet flavorful karahi highlighted with freshly crushed black peppercorns and ginger.",
    image: "/images/karahi.jpg"
  },
  {
    id: "m-karahi-12",
    name: "Mutton Kabab Masala",
    category: "mutton-karahi",
    fullPrice: 4300,
    description: "Charcoal-grilled mutton seekh kababs tossed in a rich, buttery karahi masala gravy.",
    image: "/images/karahi.jpg"
  },

  // CATEGORY: CHICKEN KARAHI
  {
    id: "c-karahi-1",
    name: "Special Chicken Karahi",
    category: "chicken-karahi",
    halfPrice: 1200,
    fullPrice: 2300,
    tag: "Bestseller",
    isPopular: true,
    description: "Our signature chicken karahi cooked in iron wok with fresh tomatoes, ginger, garlic, and special house spices.",
    image: "/images/karahi.jpg"
  },
  {
    id: "c-karahi-2",
    name: "Chicken Makhni Karahi",
    category: "chicken-karahi",
    halfPrice: 1150,
    fullPrice: 2200,
    tag: "Butter Special",
    isPopular: true,
    description: "Tender chicken cooked with lavish amounts of fresh country butter and rich tomato gravy.",
    image: "/images/karahi.jpg"
  },
  {
    id: "c-karahi-3",
    name: "Chicken Zaiton Karahi",
    category: "chicken-karahi",
    halfPrice: 1150,
    fullPrice: 2200,
    description: "Healthy and delicious chicken karahi prepared in pure virgin olive oil.",
    image: "/images/karahi.jpg"
  },
  {
    id: "c-karahi-4",
    name: "Chicken White Karahi",
    category: "chicken-karahi",
    halfPrice: 1100,
    fullPrice: 2100,
    description: "Creamy chicken cooked with white pepper, yogurt, and fresh dairy cream.",
    image: "/images/karahi.jpg"
  },
  {
    id: "c-karahi-5",
    name: "Peshawari Karahi",
    category: "chicken-karahi",
    halfPrice: 1100,
    fullPrice: 2100,
    description: "Rustic Peshawari street style chicken karahi with fresh crushed tomatoes and green chillies.",
    image: "/images/karahi.jpg"
  },
  {
    id: "c-karahi-6",
    name: "Chicken Achari Karahi",
    category: "chicken-karahi",
    halfPrice: 1100,
    fullPrice: 2100,
    description: "Zesty chicken karahi flavored with traditional mango pickle spices and nigella seeds.",
    image: "/images/karahi.jpg"
  },
  {
    id: "c-karahi-7",
    name: "Chicken Hara Masala Karahi",
    category: "chicken-karahi",
    halfPrice: 1050,
    fullPrice: 2000,
    description: "Chicken cooked in aromatic green herb paste with mint, coriander, and mild green chillies.",
    image: "/images/karahi.jpg"
  },
  {
    id: "c-karahi-8",
    name: "Chicken Black Pepper Karahi",
    category: "chicken-karahi",
    halfPrice: 1000,
    fullPrice: 1900,
    description: "Tender chicken tossed in freshly crushed black pepper and ginger juliennes.",
    image: "/images/karahi.jpg"
  },

  // CATEGORY: CHICKEN HANDI
  {
    id: "handi-1",
    name: "Special Chicken Handi",
    category: "chicken-handi",
    halfPrice: 1200,
    fullPrice: 2300,
    tag: "Claypot Special",
    isPopular: true,
    description: "Boneless chicken simmered in traditional earthen clay handi with rich cashew cream and butter.",
    image: "/images/handi.jpg"
  },
  {
    id: "handi-2",
    name: "Chicken Makhni Handi",
    category: "chicken-handi",
    halfPrice: 1200,
    fullPrice: 2300,
    description: "Boneless chicken cubes slow-cooked in a silky buttery tomato cream gravy in clay pot.",
    image: "/images/handi.jpg"
  },
  {
    id: "handi-3",
    name: "Chicken White Handi",
    category: "chicken-handi",
    halfPrice: 1150,
    fullPrice: 2200,
    description: "Mild boneless chicken in a velvety cream and yogurt base with almonds and white pepper.",
    image: "/images/handi.jpg"
  },
  {
    id: "handi-4",
    name: "Chicken Malai Handi",
    category: "chicken-handi",
    halfPrice: 1150,
    fullPrice: 2200,
    description: "Melt-in-mouth chicken cubes simmered in fresh dairy malai and aromatic spices.",
    image: "/images/handi.jpg"
  },
  {
    id: "handi-5",
    name: "Chicken Achari Handi",
    category: "chicken-handi",
    halfPrice: 1100,
    fullPrice: 2100,
    description: "Boneless chicken in earthenware handi spiced with tangy Punjabi pickle seasonings.",
    image: "/images/handi.jpg"
  },
  {
    id: "handi-6",
    name: "Green Chilli Lemon Handi",
    category: "chicken-handi",
    halfPrice: 1100,
    fullPrice: 2100,
    description: "Zesty handi prepared with freshly squeezed lemon juice and sliced green chillies.",
    image: "/images/handi.jpg"
  },
  {
    id: "handi-7",
    name: "Chicken Black Pepper Handi",
    category: "chicken-handi",
    halfPrice: 1050,
    fullPrice: 2000,
    description: "Creamy handi infused with coarse roasted black pepper and garlic.",
    image: "/images/handi.jpg"
  },
  {
    id: "handi-8",
    name: "Chicken Ginger",
    category: "chicken-handi",
    fullPrice: 1250,
    description: "Stir-fried boneless chicken laden with generous julienned ginger and savory Punjabi masala.",
    image: "/images/handi.jpg"
  },
  {
    id: "handi-9",
    name: "Chicken Jalfraizi",
    category: "chicken-handi",
    fullPrice: 1300,
    description: "Boneless chicken sautéed with fresh bell peppers, onions, tomatoes, and scrambled egg.",
    image: "/images/handi.jpg"
  },
  {
    id: "handi-10",
    name: "Chicken Kabab Masala",
    category: "chicken-handi",
    fullPrice: 1350,
    description: "Charcoal grilled chicken seekh kababs tossed in a rich and fragrant handi masala gravy.",
    image: "/images/handi.jpg"
  },

  // CATEGORY: DESI MURGH KARAHI
  {
    id: "desi-1",
    name: "Desi Murgh Karahi",
    category: "desi-murgh",
    price: 3400,
    tag: "Authentic Desi",
    isPopular: true,
    description: "Organic country rooster (Desi Murgh) slow-cooked in traditional wok until succulent.",
    image: "/images/karahi.jpg"
  },
  {
    id: "desi-2",
    name: "Desi Murgh Karahi (Desi Ghee)",
    category: "desi-murgh",
    price: 3600,
    tag: "Desi Ghee",
    description: "Desi chicken cooked in 100% pure fragrant Desi Ghee with traditional village spices.",
    image: "/images/karahi.jpg"
  },
  {
    id: "desi-3",
    name: "Desi Murgh Karahi (Zaitoon)",
    category: "desi-murgh",
    price: 3600,
    description: "Organic desi chicken cooked gently in extra virgin olive oil with fresh herbs.",
    image: "/images/karahi.jpg"
  },
  {
    id: "desi-4",
    name: "Desi Murgh Karahi (Shorba)",
    category: "desi-murgh",
    price: 3800,
    description: "Traditional nutrient-rich desi chicken broth gravy (shorba) seasoned with black pepper and herbs.",
    image: "/images/karahi.jpg"
  },

  // CATEGORY: BEEF KARAHI
  {
    id: "beef-1",
    name: "Beef Karahi",
    category: "beef-karahi",
    halfPrice: 1350,
    fullPrice: 2600,
    tag: "Hearty Beef",
    isPopular: true,
    description: "Tender beef chunks simmered in a heavy iron wok with ripe tomatoes, ginger, and spices.",
    image: "/images/karahi.jpg"
  },
  {
    id: "beef-2",
    name: "Beef Karahi (Desi Ghee)",
    category: "beef-karahi",
    halfPrice: 1450,
    fullPrice: 2800,
    description: "Succulent beef karahi cooked in pure Desi Ghee with warming spices and green chillies.",
    image: "/images/karahi.jpg"
  },
  {
    id: "beef-3",
    name: "Beef Karahi (Zaitoon)",
    category: "beef-karahi",
    halfPrice: 1450,
    fullPrice: 2800,
    description: "Prime beef cuts cooked with virgin olive oil, tomatoes, and aromatic whole spices.",
    image: "/images/karahi.jpg"
  },
  {
    id: "beef-4",
    name: "Beef Kabab Masala",
    category: "beef-karahi",
    halfPrice: 750,
    fullPrice: 1450,
    description: "Charcoal-grilled beef seekh kababs simmered in a thick, spicy Punjabi karahi gravy.",
    image: "/images/karahi.jpg"
  },
  {
    id: "beef-5",
    name: "Beef Kabab",
    category: "beef-karahi",
    halfPrice: 220,
    fullPrice: 860,
    description: "Traditional spicy minced beef seekh kababs grilled over hot coals.",
    image: "/images/bbq.jpg"
  },

  // CATEGORY: FAMILY PLATTERS
  {
    id: "platter-1",
    name: "Family Mix Platter",
    category: "family-platters",
    price: 8500,
    tag: "Ultimate Feast",
    isPopular: true,
    serves: "Serves 6–8 Persons",
    description: "The Grand Royal Feast! A massive platter featuring Special Mutton Karahi, Chicken Malai Boti, Seekh Kababs, Rajastani Tikka, Biryani Rice, assorted Tandoori Naans, Fresh Salad & Mint Raita.",
    image: "/images/bbq.jpg"
  },
  {
    id: "platter-2",
    name: "Mutton Platter",
    category: "family-platters",
    price: 6000,
    tag: "Mutton Lover's",
    isPopular: true,
    serves: "Serves 4–5 Persons",
    description: "Dedicated to mutton enthusiasts: Mutton Karahi, Mutton Seekh Kababs, Mutton Chanp, Special Rice, Garlic Naan, and Mint Raita.",
    image: "/images/karahi.jpg"
  },
  {
    id: "platter-3",
    name: "Chicken Platter",
    category: "family-platters",
    price: 4500,
    tag: "Family Value",
    isPopular: true,
    serves: "Serves 4–5 Persons",
    description: "Rich assortment of Chicken Karahi, Malai Boti, Chicken Seekh Kababs, Fried Rice, Fresh Tandoori Naans, and Raita.",
    image: "/images/bbq.jpg"
  },

  // CATEGORY: MUTTON BBQ (Preserving exact supplied values per prompt instruction)
  {
    id: "m-bbq-1",
    name: "Mutton Ran on Order",
    category: "mutton-bbq",
    priceText: "Price on Request",
    tag: "Pre-order Specialty",
    isPopular: true,
    description: "Whole roasted leg of mutton marinated for 24 hours in royal spices and slow-roasted to melt-in-the-mouth tenderness.",
    image: "/images/bbq.jpg"
  },
  {
    id: "m-bbq-2",
    name: "Special Mutton Machli",
    category: "mutton-bbq",
    fullPrice: 1300,
    description: "Tender shank cuts roasted over charcoal embers with subtle spices.",
    image: "/images/bbq.jpg"
  },
  {
    id: "m-bbq-3",
    name: "Mutton Chanp",
    category: "mutton-bbq",
    halfPrice: 2950,
    fullPrice: 1000,
    description: "Prime mutton ribs marinated in papaya, yoghurt, and roasted spices, charcoal grilled.",
    image: "/images/bbq.jpg"
  },
  {
    id: "m-bbq-4",
    name: "Mutton Ganderi",
    category: "mutton-bbq",
    halfPrice: 1770,
    fullPrice: 450,
    description: "Delicate spiced mutton mince wrapped around sugarcane sticks and grilled.",
    image: "/images/bbq.jpg"
  },
  {
    id: "m-bbq-5",
    name: "Mutton Tikka",
    category: "mutton-bbq",
    halfPrice: 1770,
    fullPrice: 450,
    description: "Juicy mutton cubes skewered and grilled over live charcoal coals.",
    image: "/images/bbq.jpg"
  },
  {
    id: "m-bbq-6",
    name: "Mutton Special Kabab",
    category: "mutton-bbq",
    halfPrice: 1300,
    fullPrice: 330,
    description: "House secret recipe mutton seekh kababs spiced with ground herbs.",
    image: "/images/bbq.jpg"
  },
  {
    id: "m-bbq-7",
    name: "Mutton Reshmi Kabab",
    category: "mutton-bbq",
    halfPrice: 1150,
    fullPrice: 290,
    description: "Silky textured mutton kababs infused with cream and subtle spices.",
    image: "/images/bbq.jpg"
  },
  {
    id: "m-bbq-8",
    name: "Mutton Cheese Kabab",
    category: "mutton-bbq",
    halfPrice: 1260,
    fullPrice: 320,
    description: "Mutton seekh kababs stuffed with molten mozzarella cheese.",
    image: "/images/bbq.jpg"
  },
  {
    id: "m-bbq-9",
    name: "Mutton Afghani Kabab",
    category: "mutton-bbq",
    halfPrice: 1260,
    fullPrice: 320,
    description: "Mildly spiced Afghani style mutton seekh kababs with black pepper.",
    image: "/images/bbq.jpg"
  },
  {
    id: "m-bbq-10",
    name: "Mutton Gola Kabab",
    category: "mutton-bbq",
    halfPrice: 1260,
    fullPrice: 280,
    description: "Round succulent spiced mutton meatballs grilled on skewers.",
    image: "/images/bbq.jpg"
  },
  {
    id: "m-bbq-11",
    name: "Mutton Kabab",
    category: "mutton-bbq",
    halfPrice: 1100,
    priceText: "Full: Price on Request",
    description: "Classic traditional spiced mutton seekh kababs.",
    image: "/images/bbq.jpg"
  },

  // CATEGORY: CHICKEN BBQ (Preserving exact supplied values per prompt instruction)
  {
    id: "c-bbq-1",
    name: "Special Rajastani Tikka",
    category: "chicken-bbq",
    halfPrice: 1480,
    fullPrice: 500,
    tag: "Chef's BBQ Special",
    isPopular: true,
    description: "Boneless chicken marinated in Rajasthani spices, mustard oil, and hung curd, charcoal grilled.",
    image: "/images/bbq.jpg"
  },
  {
    id: "c-bbq-2",
    name: "Special Sheesh Tao Boti",
    category: "chicken-bbq",
    halfPrice: 1480,
    fullPrice: 500,
    description: "Lebanese inspired Shish Taouk style chicken cubes with garlic, lemon, and olive oil.",
    image: "/images/bbq.jpg"
  },
  {
    id: "c-bbq-3",
    name: "Special Cheese Tikka",
    category: "chicken-bbq",
    halfPrice: 1780,
    fullPrice: 450,
    description: "Grilled chicken tikka boti topped with molten cheese and oregano.",
    image: "/images/bbq.jpg"
  },
  {
    id: "c-bbq-4",
    name: "Kastoori Boti",
    category: "chicken-bbq",
    halfPrice: 1330,
    fullPrice: 450,
    description: "Boneless chicken marinated in fenugreek (kastoori methi), saffron, and fresh cream.",
    image: "/images/bbq.jpg"
  },
  {
    id: "c-bbq-5",
    name: "Malai Boti",
    category: "chicken-bbq",
    halfPrice: 1570,
    fullPrice: 400,
    tag: "Crowd Favorite",
    isPopular: true,
    description: "Ultra-tender boneless chicken marinated in heavy dairy cream, green chillies, and green cardamom.",
    image: "/images/bbq.jpg"
  },
  {
    id: "c-bbq-6",
    name: "Green Boti",
    category: "chicken-bbq",
    halfPrice: 1700,
    fullPrice: 430,
    description: "Chicken skewers marinated with fresh coriander, mint leaves, and green chillies.",
    image: "/images/bbq.jpg"
  },
  {
    id: "c-bbq-7",
    name: "Irani Boti",
    category: "chicken-bbq",
    halfPrice: 1270,
    fullPrice: 430,
    description: "Mild Persian style chicken boti with saffron, sumac, and lemon marinade.",
    image: "/images/bbq.jpg"
  },
  {
    id: "c-bbq-8",
    name: "Chilli Tikka",
    category: "chicken-bbq",
    halfPrice: 1350,
    fullPrice: 230,
    description: "Spicy and fiery chicken tikka for lovers of authentic Pakistani heat.",
    image: "/images/bbq.jpg"
  },
  {
    id: "c-bbq-9",
    name: "Achari Tikka",
    category: "chicken-bbq",
    halfPrice: 1350,
    fullPrice: 230,
    description: "Tangy chicken skewers infused with pickling herbs and crushed spices.",
    image: "/images/bbq.jpg"
  },
  {
    id: "c-bbq-10",
    name: "Chicken Tikka Boti",
    category: "chicken-bbq",
    halfPrice: 1180,
    fullPrice: 200,
    description: "Traditional red-marinated chicken cubes grilled over smoky charcoal.",
    image: "/images/bbq.jpg"
  },
  {
    id: "c-bbq-11",
    name: "Chicken Kabab",
    category: "chicken-bbq",
    halfPrice: 780,
    fullPrice: 200,
    description: "Minced chicken seekh kababs seasoned with coriander and garam masala.",
    image: "/images/bbq.jpg"
  },
  {
    id: "c-bbq-12",
    name: "Chicken Wings",
    category: "chicken-bbq",
    halfPrice: 660,
    fullPrice: 170,
    description: "Crispy grilled chicken wings brushed with spicy BBQ glaze.",
    image: "/images/bbq.jpg"
  },
  {
    id: "c-bbq-13",
    name: "Leg Piece",
    category: "chicken-bbq",
    fullPrice: 370,
    description: "Whole chicken leg quarter marinated in tandoori masala and char-grilled.",
    image: "/images/bbq.jpg"
  },
  {
    id: "c-bbq-14",
    name: "Malai Leg Piece",
    category: "chicken-bbq",
    fullPrice: 400,
    description: "Chicken leg quarter coated in rich malai cream and white pepper.",
    image: "/images/bbq.jpg"
  },
  {
    id: "c-bbq-15",
    name: "Chest Piece",
    category: "chicken-bbq",
    fullPrice: 480,
    description: "Tender chicken breast piece marinated in spicy red tandoori blend.",
    image: "/images/bbq.jpg"
  },
  {
    id: "c-bbq-16",
    name: "Special Kabab",
    category: "chicken-bbq",
    halfPrice: 980,
    fullPrice: 250,
    description: "House special spiced minced chicken seekh kababs.",
    image: "/images/bbq.jpg"
  },
  {
    id: "c-bbq-17",
    name: "Chicken Cheese Kabab",
    category: "chicken-bbq",
    halfPrice: 950,
    fullPrice: 240,
    description: "Chicken seekh kababs filled with gooey melted cheese center.",
    image: "/images/bbq.jpg"
  },
  {
    id: "c-bbq-18",
    name: "Reshmi Kabab",
    category: "chicken-bbq",
    halfPrice: 920,
    fullPrice: 230,
    description: "Silky soft chicken seekh kababs made with cream and subtle saffron.",
    image: "/images/bbq.jpg"
  },
  {
    id: "c-bbq-19",
    name: "Mughlai Kabab",
    category: "chicken-bbq",
    halfPrice: 920,
    fullPrice: 230,
    description: "Rich Mughlai-style spiced chicken mince kababs with roasted nuts.",
    image: "/images/bbq.jpg"
  },
  {
    id: "c-bbq-20",
    name: "Hara Bhara Kabab",
    category: "chicken-bbq",
    halfPrice: 920,
    fullPrice: 230,
    description: "Chicken kababs loaded with fresh green spinach, mint, and cilantro.",
    image: "/images/bbq.jpg"
  },
  {
    id: "c-bbq-21",
    name: "Afghani Kabab",
    category: "chicken-bbq",
    halfPrice: 950,
    fullPrice: 240,
    description: "Mild white pepper Afghani chicken kababs seasoned with garlic.",
    image: "/images/bbq.jpg"
  },
  {
    id: "c-bbq-22",
    name: "Gola Kabab",
    category: "chicken-bbq",
    halfPrice: 950,
    fullPrice: 240,
    description: "Spiced rounded chicken meatball skewers with melted butter glaze.",
    image: "/images/bbq.jpg"
  },

  // CATEGORY: TANDOOR
  {
    id: "tan-1",
    name: "Chicken Cheese Naan",
    category: "tandoor",
    price: 600,
    tag: "Bestseller",
    isPopular: true,
    description: "Hot crispy tandoori naan stuffed with seasoned chicken and gooey molten cheese.",
    image: "/images/naan.jpg"
  },
  {
    id: "tan-2",
    name: "Mutton Cheese Naan",
    category: "tandoor",
    price: 700,
    tag: "Deluxe",
    isPopular: true,
    description: "Fluffy naan packed with spiced minced mutton and melted cheese blend.",
    image: "/images/naan.jpg"
  },
  {
    id: "tan-3",
    name: "Mutton Qeema Naan",
    category: "tandoor",
    price: 550,
    description: "Clay tandoor baked naan stuffed with flavorful spiced minced mutton.",
    image: "/images/naan.jpg"
  },
  {
    id: "tan-4",
    name: "Chicken Qeema Naan",
    category: "tandoor",
    price: 450,
    description: "Fresh naan stuffed with minced chicken seasoned with green chilies and onions.",
    image: "/images/naan.jpg"
  },
  {
    id: "tan-5",
    name: "Cheese Naan",
    category: "tandoor",
    price: 250,
    description: "Tandoori flatbread oozing with melted cheese and butter.",
    image: "/images/naan.jpg"
  },
  {
    id: "tan-6",
    name: "Special Naan",
    category: "tandoor",
    price: 120,
    description: "Soft buttered special sesame seed naan baked in authentic clay tandoor.",
    image: "/images/naan.jpg"
  },
  {
    id: "tan-7",
    name: "Tanduri Paratha",
    category: "tandoor",
    price: 120,
    description: "Crispy layered whole wheat paratha baked in hot tandoor with pure ghee.",
    image: "/images/naan.jpg"
  },
  {
    id: "tan-8",
    name: "Garlic Naan",
    category: "tandoor",
    price: 100,
    description: "Topped with freshly minced garlic, coriander, and melted butter.",
    image: "/images/naan.jpg"
  },
  {
    id: "tan-9",
    name: "Kalwanji Naan",
    category: "tandoor",
    price: 100,
    description: "Aromatic naan sprinkled with black nigella seeds (kalonji).",
    image: "/images/naan.jpg"
  },
  {
    id: "tan-10",
    name: "Rogni Naan",
    category: "tandoor",
    price: 100,
    description: "Traditional soft and thick Punjabi rogni naan with sesame seeds and butter glaze.",
    image: "/images/naan.jpg"
  },
  {
    id: "tan-11",
    name: "Achari Naan",
    category: "tandoor",
    price: 150,
    description: "Naan spiced with tangy crushed pickling masala and fennel.",
    image: "/images/naan.jpg"
  },
  {
    id: "tan-12",
    name: "Khamiri Roti",
    category: "tandoor",
    price: 50,
    description: "Traditional leavened soft tandoori flatbread.",
    image: "/images/roti.jpg"
  },
  {
    id: "tan-13",
    name: "Roti Per Head",
    category: "tandoor",
    price: 80,
    description: "Fresh piping hot whole-wheat tandoori rotis served per head unlimited during dining.",
    image: "/images/roti.jpg"
  },

  // CATEGORY: SALAD & RAITA
  {
    id: "sal-1",
    name: "Special Salad",
    category: "salad",
    price: 600,
    tag: "House Special",
    description: "Assorted garden greens, fruits, sweet corn, olives, and house signature dressing.",
    image: "/images/salad.jpg"
  },
  {
    id: "sal-2",
    name: "Russian Salad",
    category: "salad",
    price: 500,
    description: "Classic creamy blend of potatoes, apples, peas, pineapple, and sweet mayonnaise.",
    image: "/images/salad.jpg"
  },
  {
    id: "sal-3",
    name: "Three Been Salad",
    category: "salad",
    price: 500,
    description: "Trio of healthy beans tossed with lemon vinaigrette and herbs.",
    image: "/images/salad.jpg"
  },
  {
    id: "sal-4",
    name: "Mint Raita Family",
    category: "salad",
    price: 400,
    description: "Large family bowl of cool whipped yogurt infused with fresh mint and roasted cumin.",
    image: "/images/salad.jpg"
  },
  {
    id: "sal-5",
    name: "Kachumar Salad",
    category: "salad",
    price: 200,
    description: "Finely diced cucumbers, tomatoes, onions, and green chilies with lemon dressing.",
    image: "/images/salad.jpg"
  },
  {
    id: "sal-6",
    name: "Fresh Salad",
    category: "salad",
    price: 150,
    description: "Sliced crispy cucumbers, tomatoes, carrots, and onions with lemon wedges.",
    image: "/images/salad.jpg"
  },
  {
    id: "sal-7",
    name: "Raita Single",
    category: "salad",
    price: 100,
    description: "Individual serving of chilled seasoned mint yogurt raita.",
    image: "/images/salad.jpg"
  },
  {
    id: "sal-8",
    name: "Achari Onion",
    category: "salad",
    price: 100,
    description: "Pickled red onion rings soaked in tangy spice vinegar.",
    image: "/images/salad.jpg"
  },

  // CATEGORY: COLD DRINK & BEVERAGES
  {
    id: "bev-1",
    name: "Fresh Lime Soda",
    category: "cold-drink",
    price: 200,
    tag: "Refreshing",
    description: "Freshly squeezed lemon juice with chilled soda water, mint sprigs, and black salt.",
    image: "/images/fresh-lime.jpg"
  },
  {
    id: "bev-2",
    name: "Pepsi Cold Drink (1.5L)",
    category: "cold-drink",
    price: 240,
    tag: "Family Size",
    description: "Family size 1.5L chilled bottle of Pepsi / 7Up / Mirinda / Mountain Dew.",
    image: "/images/pepsi-1.5l.jpg"
  },
  {
    id: "bev-3",
    name: "Cold Drink (1L)",
    category: "cold-drink",
    price: 180,
    description: "1 Liter chilled soda bottle (Pepsi, 7Up, Mirinda, Coke).",
    image: "/images/pepsi-1.5l.jpg"
  },
  {
    id: "bev-4",
    name: "Tin Pack Pepsi (Can)",
    category: "cold-drink",
    price: 150,
    tag: "Chilled Can",
    description: "Chilled single-serve 250ml Pepsi tin pack can with cool condensation.",
    image: "/images/pepsi-can.jpg"
  },
  {
    id: "bev-5",
    name: "Aquafina Mineral Water (1.5L)",
    category: "cold-drink",
    price: 140,
    tag: "Pure Hydration",
    description: "Large 1.5L bottle of 100% pure chilled Aquafina mineral drinking water.",
    image: "/images/aquafina.jpg"
  },
  {
    id: "bev-6",
    name: "Aquafina Mineral Water (500ml)",
    category: "cold-drink",
    price: 70,
    description: "500ml regular bottle of chilled pure Aquafina mineral drinking water.",
    image: "/images/aquafina.jpg"
  },
  {
    id: "bev-7",
    name: "Special Karak Doodh Patti Chai",
    category: "cold-drink",
    price: 120,
    tag: "Hot & Fresh",
    description: "Authentic Pakistani Karak doodh patti chai slow-brewed with green cardamom and spices.",
    image: "/images/chai.jpg"
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Mini Monal Restaurant Storefront",
    category: "Restaurant",
    image: "/images/storefront.jpg",
    description: "Our iconic night facade on Grand Trunk Road, Rahwali Cantt, Gujranwala."
  },
  {
    id: 2,
    title: "Special Mutton Karahi",
    category: "Karahi",
    image: "/images/karahi.jpg",
    description: "Simmering authentic iron wok karahi with ginger and chilies."
  },
  {
    id: 3,
    title: "Royal Mixed BBQ Platter",
    category: "BBQ",
    image: "/images/bbq.jpg",
    description: "Charcoal-grilled seekh kababs, malai boti, and sizzling chops on slate."
  },
  {
    id: 4,
    title: "Special Chicken Handi & Leg Biryani",
    category: "Food",
    image: "/images/handi.jpg",
    description: "Earthenware claypot chicken handi served with steaming saffron biryani."
  },
  {
    id: 5,
    title: "Warm Pakistani Family Dining",
    category: "Family Dining",
    image: "/images/dining.jpg",
    description: "Memorable dining moments, hospitality, and fresh tandoor naans."
  },
  {
    id: 6,
    title: "Chicken Manchurian & Sizzling Chowmein",
    category: "Food",
    image: "/images/chinese.jpg",
    description: "Crisp wok-tossed chowmein and glossy sweet-sour Manchurian."
  },
  {
    id: 7,
    title: "Crispy Fried Kala Rohu & Fish Tikka",
    category: "Food",
    image: "/images/fish.jpg",
    description: "Fresh seasoned river fish fry served with zesty lemon and mint raita."
  },
  {
    id: 8,
    title: "Fresh Salads & Traditional Mint Raita",
    category: "Food",
    image: "/images/salad.jpg",
    description: "Crispy garden salad, creamy Russian salad, and spiced mint raita."
  },
  {
    id: 9,
    title: "Chilled Fresh Lime & Karak Chai",
    category: "Food",
    image: "/images/drinks.jpg",
    description: "Refreshing fresh lime mint soda and authentic Pakistani Karak tea."
  },
  {
    id: 10,
    title: "Sizzling Tawa Qeema & Live Kitchen",
    category: "Restaurant",
    image: "/images/tawa.jpg",
    description: "Chefs preparing sizzling Tawa Mutton and Chicken Qeema live."
  },
  {
    id: 11,
    title: "Traditional Shahi Daal & Makhni",
    category: "Food",
    image: "/images/daal.jpg",
    description: "Rich copper pot lentils garnished with pure butter and ginger."
  },
  {
    id: 12,
    title: "Clay Tandoor & Fresh Butter Naans",
    category: "Family Dining",
    image: "/images/dining.jpg",
    description: "Golden blistered cheese naan and roghni naan baked over live fire."
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Verified Google Reviewer",
    date: "Recent Visit",
    rating: 5,
    comment: "The Special Mutton Karahi and Chicken Cheese Naan at Mini Monal are unmatched in Rahwali Cantt. Authentic flavor and prompt service for families!",
    badge: "Local Guide"
  },
  {
    id: 2,
    name: "Family Dining Customer",
    date: "1 month ago",
    rating: 5,
    comment: "Family Mix Platter is huge and extremely good value for money. The BBQ is tender, juicy and smoky. Truly a top family restaurant in Gujranwala.",
    badge: "Verified Diner"
  },
  {
    id: 3,
    name: "Drive-Through Diner",
    date: "2 months ago",
    rating: 4.5,
    comment: "Piping hot delivery and quick drive-through service. The Chicken Handi was creamy and fresh. Highly recommended!",
    badge: "Regular Customer"
  }
];
