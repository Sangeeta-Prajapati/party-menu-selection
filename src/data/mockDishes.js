export const dishes = [
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "https://i.pinimg.com/736x/d5/32/53/d53253638d3f18ac83bd8cd70172e375.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://i.pinimg.com/736x/d5/32/53/d53253638d3f18ac83bd8cd70172e375.jpg",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 1,
    name: "Kadhai Paneer ",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Onion", quantity: "2 large" },
      { name: "Capsicum", quantity: "1 large" },
      { name: "Tomato Puree", quantity: "1 cup" }
    ]
  },

  {
    categoryId: 2,
    mealType: "STARTER",
    type: "NON-VEG",
    description: "Marinated chicken skewers grilled to perfection.",
    image: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili_2829-19997.jpg?semt=ais_incoming&w=740&q=80",
    category: {
      id: 2,
      name: "North Indian",
      image: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili_2829-19997.jpg?semt=ais_incoming&w=740&q=80",
      isRecommendedForMealSuggestion: true
    },
    dishType: "APPETIZER",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 2,
    name: "Chicken Tikka ",
    ingredients: [
      { name: "Chicken Breast", quantity: "500g" },
      { name: "Yogurt", quantity: "1 cup" },
      { name: "Ginger Garlic Paste", quantity: "2 tbsp" },
      { name: "Garam Masala", quantity: "1 tsp" }
    ]
  },

  {
    categoryId: 3,
    mealType: "SIDES",
    type: "VEG",
    description: "Creamy chickpea dip served with warm pita.",
    image: "https://sherisilver.com/wp-content/uploads/2023/03/homemade-hummus-and-pita-chips-4.jpg",
    category: {
      id: 3,
      name: "Mediterranean",
      image: "https://sherisilver.com/wp-content/uploads/2023/03/homemade-hummus-and-pita-chips-4.jpg",
      isRecommendedForMealSuggestion: true
    },
    dishType: "DIP",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 3,
    name: "Hummus & Pita ",
    ingredients: [
      { name: "Chickpeas", quantity: "400g can" },
      { name: "Tahini", quantity: "3 tbsp" },
      { name: "Lemon Juice", quantity: "2 tbsp" },
      { name: "Pita Bread", quantity: "4 pieces" }
    ]
  },

  {
    categoryId: 4,
    mealType: "DESSERT",
    type: "VEG",
    description: "Deep-fried milk solids soaked in rose syrup.",
    image: "https://png.pngtree.com/png-vector/20241123/ourmid/pngtree-traditional-indian-gulab-jamun-dessert-png-image_14407857.png",
    category: {
      id: 4,
      name: "North Indian",
      image: "https://png.pngtree.com/png-vector/20241123/ourmid/pngtree-traditional-indian-gulab-jamun-dessert-png-image_14407857.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "SWEET",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 4,
    name: "Gulab Jamun ",
    ingredients: [
      { name: "Milk Powder", quantity: "1 cup" },
      { name: "Flour", quantity: "1/4 cup" },
      { name: "Sugar Syrup", quantity: "2 cups" },
      { name: "Rose Water", quantity: "1 tsp" }
    ]
  },

  {
    categoryId: 5,
    mealType: "STARTER",
    type: "VEG",
    description: "Crispy vegetable balls tossed in tangy sauce.",
    image: "https://i.ytimg.com/vi/xkMbJCtaaqA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDrMLgdijp9TJ92IUYugdtisp2tIw",
    category: {
      id: 5,
      name: "Indo-Chinese",
      image: "https://i.ytimg.com/vi/xkMbJCtaaqA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDrMLgdijp9TJ92IUYugdtisp2tIw",
      isRecommendedForMealSuggestion: true
    },
    dishType: "APPETIZER",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 5,
    name: "Veg Manchurian ",
    ingredients: [
      { name: "Mixed Vegetables", quantity: "2 cups" },
      { name: "Corn Flour", quantity: "3 tbsp" },
      { name: "Soy Sauce", quantity: "2 tbsp" },
      { name: "Vinegar", quantity: "1 tbsp" }
    ]
  },

  {
    categoryId: 6,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    description: "Rich tomato-based curry with tender chicken.",
    image: "https://img.taste.com.au/qPAElV3h/taste/2013/07/easy-butter-chicken-image1-197844-1.jpg",
    category: {
      id: 6,
      name: "North Indian",
      image: "https://img.taste.com.au/qPAElV3h/taste/2013/07/easy-butter-chicken-image1-197844-1.jpg",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 6,
    name: "Butter Chicken ",
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Tomatoes", quantity: "4 large" },
      { name: "Cream", quantity: "1/2 cup" },
      { name: "Butter", quantity: "2 tbsp" }
    ]
  },

  {
    categoryId: 7,
    mealType: "SIDES",
    type: "VEG",
    description: "Fragrant basmati rice tempered with cumin.",
    image: "https://www.whiskaffair.com/wp-content/uploads/2021/06/Jeera-Rice-2-3-1-500x375.jpg",
    category: {
      id: 7,
      name: "North Indian",
      image: "https://www.whiskaffair.com/wp-content/uploads/2021/06/Jeera-Rice-2-3-1-500x375.jpg",
      isRecommendedForMealSuggestion: true
    },
    dishType: "RICE",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 7,
    name: "Jeera Rice ",
    ingredients: [
      { name: "Basmati Rice", quantity: "1 cup" },
      { name: "Cumin Seeds", quantity: "1 tsp" },
      { name: "Ghee", quantity: "2 tbsp" },
      { name: "Bay Leaves", quantity: "2 pieces" }
    ]
  },

  {
    categoryId: 8,
    mealType: "DESSERT",
    type: "VEG",
    description: "Dense chocolate brownie with nuts.",
    image: "https://img.freepik.com/free-photo/front-view-delicious-chocolate-cake-with-almonds_23-2148549975.jpg?semt=ais_hybrid&w=740&q=80",
    category: {
      id: 8,
      name: "Continental",
      image: "https://img.freepik.com/free-photo/front-view-delicious-chocolate-cake-with-almonds_23-2148549975.jpg?semt=ais_hybrid&w=740&q=80",
      isRecommendedForMealSuggestion: true
    },
    dishType: "DESSERT",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 8,
    name: "Brownie ",
    ingredients: [
      { name: "Dark Chocolate", quantity: "200g" },
      { name: "Butter", quantity: "100g" },
      { name: "Eggs", quantity: "3 large" },
      { name: "Walnuts", quantity: "1/2 cup" }
    ]
  },

  {
    categoryId: 9,
    mealType: "STARTER",
    type: "VEG",
    description: "Crisp lettuce with creamy dressing and croutons.",
    image: "https://www.foodandwine.com/thmb/AjgLe5Y5KdZ7yCJ651kdSsPb4pg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CAESAR-SALAD-FT-MAG-RECIPE-0824-5594874ae0524369870bbbbfc754264d.jpg",
    category: {
      id: 9,
      name: "Continental",
      image: "https://www.foodandwine.com/thmb/AjgLe5Y5KdZ7yCJ651kdSsPb4pg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CAESAR-SALAD-FT-MAG-RECIPE-0824-5594874ae0524369870bbbbfc754264d.jpg",
      isRecommendedForMealSuggestion: true
    },
    dishType: "SALAD",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 9,
    name: "Caesar Salad ",
    ingredients: [
      { name: "Romaine Lettuce", quantity: "1 head" },
      { name: "Parmesan Cheese", quantity: "50g" },
      { name: "Croutons", quantity: "1 cup" },
      { name: "Caesar Dressing", quantity: "1/4 cup" }
    ]
  },

  {
    categoryId: 10,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    description: "Spicy coastal-style fish curry.",
    image: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsb2ZmaWNlMTVfcGhvdG9fb2ZfZmlzaF9jdXJyeV9hcmFiaWNfcmFtYWRhbl9mb29kX3RvcF92aV9hZTc0Mzg5NC0wYjYzLTQ5OWYtYWQxNy04NWM3ZGRiYTM1ZGYucG5n.png",
    category: {
      id: 10,
      name: "South Indian",
      image: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsb2ZmaWNlMTVfcGhvdG9fb2ZfZmlzaF9jdXJyeV9hcmFiaWNfcmFtYWRhbl9mb29kX3RvcF92aV9hZTc0Mzg5NC0wYjYzLTQ5OWYtYWQxNy04NWM3ZGRiYTM1ZGYucG5n.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 10,
    name: "Fish Curry ",
    ingredients: [
      { name: "Fish Fillets", quantity: "500g" },
      { name: "Coconut Milk", quantity: "1 can" },
      { name: "Curry Leaves", quantity: "10 leaves" },
      { name: "Red Chili Powder", quantity: "2 tsp" }
    ]
  },

  {
    categoryId: 11,
    mealType: "STARTER",
    type: "VEG",
    description: "Crispy fried potato balls served with mint chutney.",
    image: "https://www.seriouseats.com/thmb/iGjj5YgyBmeLcPb9KAB_h46SZZQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20220303-aloo-tikki-vicky-wasik-24-6895c79edeee4e618e5fc7a1d39e85a0.jpg",
    category: {
      id: 11,
      name: "North Indian",
      image: "https://www.seriouseats.com/thmb/iGjj5YgyBmeLcPb9KAB_h46SZZQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20220303-aloo-tikki-vicky-wasik-24-6895c79edeee4e618e5fc7a1d39e85a0.jpg",
      isRecommendedForMealSuggestion: true
    },
    dishType: "APPETIZER",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 11,
    name: "Aloo Tikki ",
    ingredients: [
      { name: "Potatoes", quantity: "4 large" },
      { name: "Bread Crumbs", quantity: "1/2 cup" },
      { name: "Mint Chutney", quantity: "1/4 cup" },
      { name: "Oil for frying", quantity: "as needed" }
    ]
  },

  {
    categoryId: 12,
    mealType: "STARTER",
    type: "NON-VEG",
    description: "Tender lamb chops marinated in spices and grilled.",
    image: "https://www.foodandwine.com/thmb/OcL6AM2AesU9QxdilKFmPZj7ris=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/201305-r-xl-lamb-chops-with-garlic-and-olive-oil-2000-edb2f7473e7d47a78a219ca26dc0fe05.jpg",
    category: {
      id: 12,
      name: "Continental",
      image: "https://www.foodandwine.com/thmb/OcL6AM2AesU9QxdilKFmPZj7ris=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/201305-r-xl-lamb-chops-with-garlic-and-olive-oil-2000-edb2f7473e7d47a78a219ca26dc0fe05.jpg",
      isRecommendedForMealSuggestion: true
    },
    dishType: "APPETIZER",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 12,
    name: "Lamb Chops ",
    ingredients: [
      { name: "Lamb Chops", quantity: "6 pieces" },
      { name: "Rosemary", quantity: "2 sprigs" },
      { name: "Garlic", quantity: "4 cloves" },
      { name: "Olive Oil", quantity: "3 tbsp" }
    ]
  },

  {
    categoryId: 13,
    mealType: "STARTER",
    type: "VEG",
    description: "Fresh spring rolls with vegetables and noodles.",
    image: "https://redhousespice.com/wp-content/uploads/2021/12/whole-spring-rolls-and-halved-ones-scaled.jpg",
    category: {
      id: 13,
      name: "Asian",
      image: "https://redhousespice.com/wp-content/uploads/2021/12/whole-spring-rolls-and-halved-ones-scaled.jpg",
      isRecommendedForMealSuggestion: true
    },
    dishType: "APPETIZER",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 13,
    name: "Spring Rolls ",
    ingredients: [
      { name: "Rice Paper", quantity: "12 sheets" },
      { name: "Vermicelli Noodles", quantity: "100g" },
      { name: "Carrots", quantity: "2 medium" },
      { name: "Cucumber", quantity: "1 large" }
    ]
  },

  {
    categoryId: 14,
    mealType: "STARTER",
    type: "NON-VEG",
    description: "Spicy chicken wings with hot sauce glaze.",
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/2/19/1/FN_Air-Fryer-Chicken-Wings-H_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1550611553388.webp",
    category: {
      id: 14,
      name: "American",
      image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/2/19/1/FN_Air-Fryer-Chicken-Wings-H_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1550611553388.webp",
      isRecommendedForMealSuggestion: true
    },
    dishType: "APPETIZER",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 14,
    name: "Chicken Wings ",
    ingredients: [
      { name: "Chicken Wings", quantity: "1 kg" },
      { name: "Hot Sauce", quantity: "1/2 cup" },
      { name: "Butter", quantity: "3 tbsp" },
      { name: "Honey", quantity: "2 tbsp" }
    ]
  },

  {
    categoryId: 15,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Rich and creamy dal makhani with black lentils.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrqlmuM6fhCcLstM0zaHv2AFs-cusaSe5lUw&s",
    category: {
      id: 15,
      name: "North Indian",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrqlmuM6fhCcLstM0zaHv2AFs-cusaSe5lUw&s",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 15,
    name: "Dal Makhani ",
    ingredients: [
      { name: "Black Lentils", quantity: "1 cup" },
      { name: "Kidney Beans", quantity: "1/2 cup" },
      { name: "Heavy Cream", quantity: "1/2 cup" },
      { name: "Butter", quantity: "3 tbsp" }
    ]
  },

  {
    categoryId: 16,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    description: "Tender mutton cooked in rich onion gravy.",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&h=400&fit=crop",
    category: {
      id: 16,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 16,
    name: "Mutton Curry ",
    ingredients: [
      { name: "Mutton", quantity: "750g" },
      { name: "Onions", quantity: "4 large" },
      { name: "Tomatoes", quantity: "3 medium" },
      { name: "Garam Masala", quantity: "2 tsp" }
    ]
  },

  {
    categoryId: 17,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Spicy mixed vegetable curry with coconut milk.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-paaafurHProP91UduXuWCb-rroNYLWESUA&s",
    category: {
      id: 17,
      name: "South Indian",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-paaafurHProP91UduXuWCb-rroNYLWESUA&s",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 17,
    name: "Veg Kurma ",
    ingredients: [
      { name: "Mixed Vegetables", quantity: "3 cups" },
      { name: "Coconut Milk", quantity: "1 cup" },
      { name: "Cashews", quantity: "15 pieces" },
      { name: "Coconut Oil", quantity: "2 tbsp" }
    ]
  },

  {
    categoryId: 18,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    description: "Aromatic biryani with tender chicken and basmati rice.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/048/067/082/small_2x/biryani-dish-malabar-biryani-with-thalassery-chicken-isolated-illustration-on-a-transparent-background-png.png",
    category: {
      id: 18,
      name: "Mughlai",
      image: "https://static.vecteezy.com/system/resources/thumbnails/048/067/082/small_2x/biryani-dish-malabar-biryani-with-thalassery-chicken-isolated-illustration-on-a-transparent-background-png.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "BIRYANI",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 18,
    name: "Chicken Biryani ",
    ingredients: [
      { name: "Basmati Rice", quantity: "2 cups" },
      { name: "Chicken", quantity: "750g" },
      { name: "Saffron", quantity: "1 pinch" },
      { name: "Yogurt", quantity: "1/2 cup" }
    ]
  },

  {
    categoryId: 19,
    mealType: "SIDES",
    type: "VEG",
    description: "Fluffy naan bread brushed with butter.",
    image: "https://t3.ftcdn.net/jpg/08/95/50/04/360_F_895500474_IDUMxbOGEBn29tyPyjG8oLEEWlK8ZlOg.jpg",
    category: {
      id: 19,
      name: "North Indian",
      image: "https://t3.ftcdn.net/jpg/08/95/50/04/360_F_895500474_IDUMxbOGEBn29tyPyjG8oLEEWlK8ZlOg.jpg",
      isRecommendedForMealSuggestion: true
    },
    dishType: "BREAD",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 19,
    name: "Butter Naan ",
    ingredients: [
      { name: "All Purpose Flour", quantity: "2 cups" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Butter", quantity: "2 tbsp" },
      { name: "Baking Powder", quantity: "1 tsp" }
    ]
  },

  {
    categoryId: 20,
    mealType: "SIDES",
    type: "VEG",
    description: "Crispy papadum served with mint chutney.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIm8KkJ6CFZ8xcZ54joEEFVvHemc60tTLlmA&s",
    category: {
      id: 20,
      name: "Indian",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIm8KkJ6CFZ8xcZ54joEEFVvHemc60tTLlmA&s",
      isRecommendedForMealSuggestion: true
    },
    dishType: "SNACK",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 20,
    name: "Papadum ",
    ingredients: [
      { name: "Urad Dal Flour", quantity: "1 cup" },
      { name: "Cumin Seeds", quantity: "1 tsp" },
      { name: "Black Pepper", quantity: "1/2 tsp" },
      { name: "Oil for frying", quantity: "as needed" }
    ]
  },

  {
    categoryId: 21,
    mealType: "SIDES",
    type: "VEG",
    description: "Spiced yogurt with cucumber and mint.",
    image: "https://www.whiskaffair.com/wp-content/uploads/2020/12/Boondi-Raita-2-3.jpg",
    category: {
      id: 21,
      name: "Indian",
      image: "https://www.whiskaffair.com/wp-content/uploads/2020/12/Boondi-Raita-2-3.jpg",
      isRecommendedForMealSuggestion: true
    },
    dishType: "SIDE",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 21,
    name: "Raita ",
    ingredients: [
      { name: "Yogurt", quantity: "2 cups" },
      { name: "Cucumber", quantity: "1 large" },
      { name: "Mint Leaves", quantity: "1/4 cup" },
      { name: "Cumin Powder", quantity: "1 tsp" }
    ]
  },

  {
    categoryId: 22,
    mealType: "SIDES",
    type: "NON-VEG",
    description: "Spicy chicken kebabs grilled to perfection.",
    image: "https://simplehomeedit.com/wp-content/uploads/2020/01/Homemade-Chicken-Kebabs-3.webp",
    category: {
      id: 22,
      name: "Mughlai",
      image: "https://simplehomeedit.com/wp-content/uploads/2020/01/Homemade-Chicken-Kebabs-3.webp",
      isRecommendedForMealSuggestion: true
    },
    dishType: "APPETIZER",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 22,
    name: "Chicken Kebab ",
    ingredients: [
      { name: "Chicken Mince", quantity: "500g" },
      { name: "Onion", quantity: "1 large" },
      { name: "Ginger Garlic Paste", quantity: "2 tbsp" },
      { name: "Green Chilies", quantity: "3 pieces" }
    ]
  },

  {
    categoryId: 23,
    mealType: "DESSERT",
    type: "VEG",
    description: "Creamy rice pudding flavored with cardamom and saffron.",
    image: "https://shivanilovesfood.com/wp-content/uploads/2024/01/Creamy-Kheer-6.jpg",
    category: {
      id: 23,
      name: "Indian",
      image: "https://shivanilovesfood.com/wp-content/uploads/2024/01/Creamy-Kheer-6.jpg",
      isRecommendedForMealSuggestion: true
    },
    dishType: "DESSERT",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 23,
    name: "Kheer ",
    ingredients: [
      { name: "Basmati Rice", quantity: "1/2 cup" },
      { name: "Milk", quantity: "1 liter" },
      { name: "Sugar", quantity: "1/2 cup" },
      { name: "Cardamom", quantity: "5 pods" }
    ]
  },

  {
    categoryId: 24,
    mealType: "DESSERT",
    type: "VEG",
    description: "Classic vanilla ice cream with chocolate chips.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop",
    category: {
      id: 24,
      name: "Continental",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/continental.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "DESSERT",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 24,
    name: "Ice Cream ",
    ingredients: [
      { name: "Heavy Cream", quantity: "2 cups" },
      { name: "Whole Milk", quantity: "1 cup" },
      { name: "Sugar", quantity: "3/4 cup" },
      { name: "Vanilla Extract", quantity: "2 tsp" }
    ]
  },

  {
    categoryId: 25,
    mealType: "DESSERT",
    type: "VEG",
    description: "Traditional Indian sweet made with milk and sugar.",
    image: "data:image/jpeg;base64,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",
    category: {
      id: 25,
      name: "Indian",
      image: "data:image/jpeg;base64,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",
      isRecommendedForMealSuggestion: true
    },
    dishType: "DESSERT",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 25,
    name: "Barfi ",
    ingredients: [
      { name: "Milk Powder", quantity: "2 cups" },
      { name: "Sugar", quantity: "1 cup" },
      { name: "Ghee", quantity: "1/2 cup" },
      { name: "Cardamom Powder", quantity: "1/2 tsp" }
    ]
  },

  {
    categoryId: 26,
    mealType: "DESSERT",
    type: "VEG",
    description: "Rich chocolate cake with creamy frosting.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop",
    category: {
      id: 26,
      name: "Continental",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop",
      isRecommendedForMealSuggestion: true
    },
    dishType: "DESSERT",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 26,
    name: "Chocolate Cake ",
    ingredients: [
      { name: "All Purpose Flour", quantity: "1.5 cups" },
      { name: "Cocoa Powder", quantity: "3/4 cup" },
      { name: "Sugar", quantity: "1.5 cups" },
      { name: "Butter", quantity: "1/2 cup" }
    ]
  }
];
