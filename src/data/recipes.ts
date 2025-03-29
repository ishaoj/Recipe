export interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  ingredients?: string[];
  steps?: {
    description: string;
    animation: string;
  }[];
  category?: 'drink' | 'snack' | 'dessert';
  location: 'great-hall' | 'hogsmeade' | 'kitchen' | 'common-room';
}

export const wizardingRecipes: Recipe[] = [
  {
    id: 1,
    title: "Butterbeer",
    description: "A warming, creamy drink beloved by wizards and witches, especially popular in Hogsmeade's Three Broomsticks.",
    image: "https://images.unsplash.com/photo-1563223771-375783ee91ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cookTime: "15 mins",
    servings: 4,
    difficulty: "Easy",
    category: "drink",
    location: "hogsmeade",
    ingredients: [
      "4 cups cream soda",
      "1/2 cup butterscotch syrup",
      "1 cup heavy cream",
      "1 tsp vanilla extract",
      "1/4 tsp cinnamon"
    ],
    steps: [
      {
        description: "In a large cauldron (or saucepan), warm the cream soda over low heat until small bubbles appear.",
        animation: "bubbles"
      },
      {
        description: "Wave your wand (or spoon) and stir in the butterscotch syrup until well combined.",
        animation: "wandStir"
      },
      {
        description: "In a separate bowl, whip the heavy cream with vanilla until soft peaks form.",
        animation: "whip"
      },
      {
        description: "Pour the warm butterbeer into frosted mugs and top with the whipped cream.",
        animation: "pour"
      },
      {
        description: "Finish with a sprinkle of cinnamon and serve immediately!",
        animation: "sparkle"
      }
    ]
  },
  {
    id: 2,
    title: "Pumpkin Pasties",
    description: "A favorite treat from the Hogwarts Express trolley, these sweet pastries are filled with spiced pumpkin.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cookTime: "45 mins",
    servings: 8,
    difficulty: "Medium",
    category: "snack",
    location: "kitchen",
    ingredients: [
      "2 cups pumpkin puree",
      "1 tsp cinnamon",
      "1/2 tsp nutmeg",
      "1/2 cup sugar",
      "1 package pie crust"
    ],
    steps: [
      {
        description: "Mix pumpkin puree with spices and sugar in your enchanted mixing bowl.",
        animation: "mix"
      },
      {
        description: "Roll out the pie crust and cut into circles using a magical cookie cutter.",
        animation: "roll"
      },
      {
        description: "Place a spoonful of filling in the center of each circle.",
        animation: "fill"
      },
      {
        description: "Fold and seal the edges with a fork, creating a magical crimped pattern.",
        animation: "seal"
      },
      {
        description: "Bake in a preheated oven at 375°F (190°C) for 20-25 minutes until golden brown.",
        animation: "bake"
      }
    ]
  },
  {
    id: 3,
    title: "Treacle Tart",
    description: "Harry Potter's favorite dessert, this golden syrup tart is a magical blend of sweet and citrus flavors.",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cookTime: "1 hour",
    servings: 8,
    difficulty: "Hard",
    category: "dessert",
    location: "great-hall",
    ingredients: [
      "1 shortcrust pastry",
      "2 cups golden syrup",
      "2 tbsp lemon juice",
      "1 cup breadcrumbs",
      "1 egg (for wash)"
    ],
    steps: [
      {
        description: "Roll out the shortcrust pastry and line a tart tin with a wave of your wand.",
        animation: "rollPastry"
      },
      {
        description: "In your cauldron, warm the golden syrup until it flows like liquid gold.",
        animation: "warmSyrup"
      },
      {
        description: "Stir in the lemon juice and breadcrumbs with three clockwise turns.",
        animation: "stir"
      },
      {
        description: "Pour the mixture into your pastry case, watching it settle like a golden sunset.",
        animation: "pourFilling"
      },
      {
        description: "Bake in your enchanted oven at 375°F (190°C) for 35-40 minutes until set.",
        animation: "bakeTart"
      }
    ]
  }
];

export const featuredRecipes = [
  {
    id: 1,
    title: "Roast Beef with Yorkshire Pudding",
    description: "A Great Hall classic, served during every Hogwarts feast with magical gravy and roasted vegetables.",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cookTime: "2 hours",
    servings: 6,
    difficulty: "Medium",
    location: "great-hall"
  },
  {
    id: 2,
    title: "Cauldron Cakes",
    description: "Sweet chocolate cakes shaped like miniature cauldrons, filled with magical cream.",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cookTime: "45 mins",
    servings: 12,
    difficulty: "Medium",
    location: "hogsmeade"
  },
  {
    id: 3,
    title: "Hot Chocolate with Floating Marshmallows",
    description: "Warming chocolate drink with enchanted marshmallows that float and never sink.",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cookTime: "15 mins",
    servings: 4,
    difficulty: "Easy",
    location: "common-room"
  }
];