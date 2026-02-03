import { SiteConfig, MenuCategory, Review, Announcement } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Trio Italian',
  tagline: 'Authentic Italian • Great Cocktails • More than Dining',
  description: 'Welcome to TRIO, the newest Italian dining spot in the heart of Saffron Walden. We pride ourselves on delivering an authentic and vibrant atmosphere, coupled with delicious cuisine and exceptional service.',
  address: {
    street: '1-3 Cross St',
    city: 'Saffron Walden',
    postcode: 'CB10 1EX',
  },
  phone: '01799 796530',
  email: 'info@trioitalian.co.uk',
  openingHours: [
    { day: 'Monday', hours: '4:30pm - 10pm' },
    { day: 'Tuesday - Thursday', hours: '11:30am - 10pm' },
    { day: 'Friday - Saturday', hours: '11:30am - 11pm' },
    { day: 'Sunday', hours: '11:30am - 10pm' },
  ],
  socialLinks: {
    instagram: 'https://www.instagram.com/trio_italian/',
  },
  openTableUrl: 'https://www.opentable.co.uk/booking/restref/availability?lang=en-GB&correlationId=c8b27579-d5a6-447f-8cb7-accef01bcdb5&restRef=359370',
};

export const defaultAnnouncement: Announcement = {
  id: '1',
  title: 'Valentine\'s Day at Trio',
  message: 'Love is in the air! Book your romantic dinner now.',
  link: {
    text: 'Book Now',
    url: siteConfig.openTableUrl,
  },
  backgroundColor: '#C4664A',
  textColor: '#FFFDF7',
  isActive: true,
};

export const menuData: MenuCategory[] = [
  {
    name: 'Winter Specials',
    subtitle: 'Seasonal favourites',
    items: [
      {
        name: 'Bistecca di Controfiletto',
        description: '8oz sirloin steak served with chunky fries & tenderstem broccoli. Choice of sauce: Peppercorn or Porcini Mushroom',
        price: 29.95,
      },
      {
        name: 'Branzino alla Mugnaia',
        description: 'Pan-seared sea bass fillet in white wine, lemon & caper sauce, served with new potatoes and sautéed winter greens',
        price: 26.95,
        tags: ['GF'],
      },
      {
        name: 'Winter Picante Pizza',
        description: 'Tomato, mozzarella, pepperoni, nduja & fresh chilli',
        price: 17.00,
      },
    ],
  },
  {
    name: 'Starters',
    items: [
      {
        name: 'Bruschetta',
        description: 'Tomato, basil, garlic, oregano & extra virgin olive oil on our homemade bread',
        price: 7.95,
        tags: ['V', 'VG'],
      },
      {
        name: 'Parmigiana',
        description: 'Layered fried aubergine baked with tomato sauce & mozzarella, topped with parmesan, served with homemade bread',
        price: 10.25,
        tags: ['V'],
      },
      {
        name: 'Burrata e Pomodorini',
        description: 'Creamy burrata with sliced tomatoes, pistachio, balsamic glaze & extra virgin olive oil',
        price: 9.95,
        tags: ['V', 'GF'],
      },
      {
        name: 'Antipasto Italiano',
        description: 'Selection of cured Italian meats, cheeses, olives, pickles & homemade bread',
        price: 14.50,
      },
      {
        name: 'Homemade Arancini',
        description: 'Vegetable with saffron & ragù arborio rice balls with parmesan',
        price: 8.25,
        tags: ['V'],
      },
      {
        name: 'Polpette della Casa',
        description: 'Homemade beef meatballs in tomato sauce, garnished with basil and parmesan, served with homemade bread',
        price: 10.25,
      },
      {
        name: 'Sautéed de Gamberi',
        description: 'Sautéed prawns in a fresh tomato, garlic and chilli sauce served with homemade bread',
        price: 9.50,
        tags: ['GF'],
      },
    ],
  },
  {
    name: 'Cicchetti',
    subtitle: 'Great for sharing or enjoying as starters',
    items: [
      {
        name: 'Gnocchi Fritti',
        description: 'Crispy fried dough bites with rosemary salt & garlic mayo',
        price: 5.95,
        tags: ['V'],
      },
      {
        name: 'Calamari Fritti',
        description: 'Crispy squid served with lemon & garlic mayo',
        price: 14.50,
      },
      {
        name: 'Mixed Olives',
        description: 'A selection of marinated olives',
        price: 5.95,
        tags: ['VG', 'GF'],
      },
      {
        name: 'Homemade Bread',
        description: 'With extra virgin olive oil and balsamic',
        price: 5.50,
      },
      {
        name: 'Focaccia al Rosmarino',
        description: 'Warm rosemary focaccia with sea salt & olive oil',
        price: 5.50,
        tags: ['V'],
      },
      {
        name: 'Garlic Bread',
        description: 'Classic garlic bread',
        price: 5.95,
        tags: ['V'],
      },
      {
        name: 'Garlic Bread with Cheese',
        description: 'Garlic bread topped with melted cheese',
        price: 7.50,
        tags: ['V'],
      },
    ],
  },
  {
    name: 'Pasta & Risotto',
    subtitle: 'Gluten-free pasta available on request',
    items: [
      {
        name: 'Spaghetti alla Carbonara',
        description: 'Famous Italian dish of homemade pasta served with pancetta & parmesan in a creamy sauce',
        price: 16.25,
      },
      {
        name: 'Spaghetti alle Polpette',
        description: 'Homemade spaghetti served with meatballs in a tomato sauce',
        price: 16.25,
      },
      {
        name: 'Lasagne',
        description: 'Layers of homemade pasta with bolognese, bechamel sauce and cheese with a salad garnish',
        price: 15.95,
      },
      {
        name: 'Rigatoni alla Norma',
        description: 'Homemade rigatoni served in a tomato sauce topped with fried aubergine, basil with grated ricotta cheese',
        price: 15.95,
        tags: ['V'],
      },
      {
        name: 'Fettuccine alla Bolognese',
        description: 'Fresh fettuccine in slow-cooked beef ragù',
        price: 16.25,
      },
      {
        name: 'Rigatoni e Burrata',
        description: 'Homemade rigatoni with tomato, garlic & extra virgin olive oil, topped with fresh torn burrata & black pepper',
        price: 16.50,
        tags: ['V'],
      },
      {
        name: 'Gnocchi al Pesto',
        description: 'Potato gnocchi in homemade basil pesto with a touch of cream & parmesan',
        price: 17.00,
        tags: ['V'],
      },
      {
        name: 'Fettuccine Pollo e Peperoni',
        description: 'Homemade fettuccine served with chicken in a peperonata sauce (peppers, onion, capers and olives)',
        price: 17.25,
      },
      {
        name: 'Penne Broccoli e Salsiccia',
        description: 'Sicilian sausage, broccoli, garlic, tomato & pecorino romano',
        price: 17.00,
      },
      {
        name: 'Linguine alle Vongole',
        description: 'Homemade linguine served with clams in a white wine sauce',
        price: 21.00,
      },
      {
        name: 'Risotto ai Funghi e Spinaci',
        description: 'Creamy mushroom & spinach risotto with garlic & parmesan',
        price: 19.00,
        tags: ['V', 'GF'],
      },
      {
        name: 'Linguine allo Scoglio',
        description: 'Mixed fresh seafood (clams, mussels, squid and king prawns) with homemade linguine served in a tomato sauce',
        price: 22.25,
      },
    ],
  },
  {
    name: 'Homemade 12" Pizza',
    subtitle: 'Vegan cheese available on request',
    items: [
      {
        name: 'Margherita',
        description: 'Tomato, mozzarella & basil',
        price: 13.50,
        tags: ['V'],
      },
      {
        name: 'Pepperoni',
        description: 'Tomato, mozzarella & pepperoni',
        price: 15.25,
      },
      {
        name: 'Picante',
        description: 'Tomato, mozzarella, pepperoni, nduja & chilli',
        price: 17.00,
      },
      {
        name: 'Diavola',
        description: 'Tomato, mozzarella, Sicilian sausage, chilli & chorizo',
        price: 17.25,
      },
      {
        name: 'Hawaiian',
        description: 'Tomato, mozzarella, ham & pineapple',
        price: 16.75,
      },
      {
        name: 'Marinara',
        description: 'Tomato, garlic, oregano & olive oil (no cheese)',
        price: 12.50,
        tags: ['VG'],
      },
      {
        name: 'Capricciosa',
        description: 'Tomato, mozzarella, mushroom, ham, olives & artichoke',
        price: 16.95,
      },
      {
        name: 'Campania',
        description: "Tomato, mozzarella, goat's cheese, caramelised red onion jam & spinach",
        price: 16.95,
        tags: ['V'],
      },
      {
        name: 'Vegetarian',
        description: 'Tomato, mozzarella, grilled aubergine, courgette & peppers',
        price: 16.75,
        tags: ['V'],
      },
      {
        name: 'Pollo e Chorizo',
        description: 'Tomato, mozzarella, chicken & chorizo',
        price: 17.25,
      },
      {
        name: 'Calzone Classico',
        description: 'Folded pizza with tomato, mozzarella, ham & mushrooms',
        price: 17.25,
      },
      {
        name: 'Siciliana Calzone',
        description: 'Tomato, mozzarella, anchovies, olives & oregano',
        price: 16.50,
      },
    ],
  },
  {
    name: 'Main Course',
    items: [
      {
        name: 'Tagliata di Manzo',
        description: 'Sliced steak with rocket, cherry tomatoes and shaved parmesan with fries',
        price: 26.25,
      },
      {
        name: 'Scaloppina di Pollo ai Funghi e Spinaci',
        description: 'Sautéed chicken breast in a creamy mushroom and spinach sauce served with mashed potatoes or fries',
        price: 20.50,
      },
      {
        name: 'Branzino alla Magalotta',
        description: 'Sea bass fillet with tomatoes, capers, olives and oregano sauce served with mashed potato and green beans',
        price: 26.50,
      },
      {
        name: 'Melanzane Ripiene',
        description: 'Stuffed aubergine with Mediterranean vegetables topped with pesto and mozzarella',
        price: 17.95,
        tags: ['V'],
      },
    ],
  },
  {
    name: 'Salads',
    items: [
      {
        name: 'Caesar Salad with Chicken',
        description: 'Cos lettuce served with crispy pancetta, chicken, anchovies, parmesan, croutons and Caesar dressing',
        price: 16.50,
      },
      {
        name: 'Mediterranean Salad',
        description: 'Grilled aubergine, courgettes and peppers on a bed of mix leaves topped with warm goat cheese and a pomegranate balsamic dressing',
        price: 15.75,
        tags: ['V'],
      },
    ],
  },
  {
    name: 'Sides',
    items: [
      {
        name: 'Rucola e Pomodorini',
        description: 'Rocket, cherry tomato and shaved parmesan with a balsamic dressing',
        price: 6.95,
        tags: ['V'],
      },
      {
        name: 'Insalata Mista',
        description: 'Mixed leaves, cucumber, tomatoes and olives with a balsamic dressing',
        price: 6.25,
        tags: ['V', 'VG'],
      },
      {
        name: 'Mixed Seasonal Vegetables',
        description: 'Mixed vegetables and new potatoes',
        price: 6.45,
        tags: ['V'],
      },
      {
        name: 'Fries',
        description: 'Crispy golden fries',
        price: 5.75,
        tags: ['V'],
      },
    ],
  },
  {
    name: "Children's Menu",
    subtitle: '2 Course Meal - £9.00',
    items: [
      {
        name: 'Main Options',
        description: 'Spaghetti Bolognese, Spaghetti Napoli, Margherita Pizza, Pepperoni Pizza, or Chicken Goujons and Chips',
        price: 9.00,
      },
      {
        name: 'Dessert',
        description: 'Ice Cream - Vanilla, Chocolate or Strawberry',
        price: 0,
      },
    ],
  },
];

export const reviews: Review[] = [
  {
    id: '1',
    author: 'Asha',
    content: "Trio has a welcoming and cosy atmosphere whether you're visiting for a spot of lunch, family dinner or date night. The staff are on hand as soon as you walk through the door, attentive and friendly throughout. There's such an array of dishes on offer from pizza to pasta, risotto and salads - so many choices I'll be back to try more! All the food was incredibly tasty and very generous in portions, giving excellent value for money. I'll be recommending Trio to all my friends and family!",
    rating: 5,
  },
];

export const specialOccasions = [
  'None',
  'Birthday',
  'Anniversary',
  'Engagement',
  'Business Dinner',
  'Date Night',
  'Family Gathering',
  'Other',
];

export const timeSlots = [
  '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00',
];

export const guestNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
