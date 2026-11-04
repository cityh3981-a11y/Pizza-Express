// EDITABLE DEMO MENU
// Replace each samplePrice with Pizza Express's confirmed price later.
// All prices below are placeholders in Bangladeshi Taka (BDT), not verified restaurant prices.
export type MenuCategory = 'Pizza' | 'Burgers' | 'Pasta' | 'Shawarma' | 'Sides' | 'Drinks';

export type MenuItem = {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  samplePrice: number;
  badge?: string;
};

export const menuCategories: Array<'All' | MenuCategory> = [
  'All', 'Pizza', 'Burgers', 'Pasta', 'Shawarma', 'Sides', 'Drinks'
];

export const menuItems: MenuItem[] = [
  { id: 'pizza-01', name: 'Classic Cheese Pizza', category: 'Pizza', description: 'A comforting classic with tomato sauce and melted cheese.', samplePrice: 399, badge: 'DEMO PRICE' },
  { id: 'pizza-02', name: 'Chicken BBQ Pizza', category: 'Pizza', description: 'BBQ-style chicken, cheese and a smoky-inspired finish.', samplePrice: 549, badge: 'DEMO PRICE' },
  { id: 'pizza-03', name: 'Loaded Supreme Pizza', category: 'Pizza', description: 'A generous combination of toppings for a satisfying bite.', samplePrice: 649, badge: 'DEMO PRICE' },
  { id: 'burger-01', name: 'Classic Chicken Burger', category: 'Burgers', description: 'Crispy chicken, fresh vegetables and house-style sauce.', samplePrice: 199, badge: 'DEMO PRICE' },
  { id: 'burger-02', name: 'Double Cheese Burger', category: 'Burgers', description: 'A hearty burger layered with cheese and signature sauce.', samplePrice: 299, badge: 'DEMO PRICE' },
  { id: 'pasta-01', name: 'Creamy Chicken Pasta', category: 'Pasta', description: 'Creamy-style pasta with chicken. Ask about available sauces.', samplePrice: 299, badge: 'DEMO PRICE' },
  { id: 'pasta-02', name: 'Baked Pasta', category: 'Pasta', description: 'Oven-finished pasta with a cheesy top.', samplePrice: 349, badge: 'DEMO PRICE' },
  { id: 'shawarma-01', name: 'Chicken Shawarma', category: 'Shawarma', description: 'Chicken wrapped with fresh fillings and sauce.', samplePrice: 149, badge: 'DEMO PRICE' },
  { id: 'side-01', name: 'French Fries', category: 'Sides', description: 'Golden, crisp fries for sharing or keeping all to yourself.', samplePrice: 99, badge: 'DEMO PRICE' },
  { id: 'side-02', name: 'Chicken Nuggets', category: 'Sides', description: 'A crunchy snack-sized favourite.', samplePrice: 179, badge: 'DEMO PRICE' },
  { id: 'drink-01', name: 'Cold Coffee', category: 'Drinks', description: 'A chilled coffee treat.', samplePrice: 149, badge: 'DEMO PRICE' },
  { id: 'drink-02', name: 'Soft Drink', category: 'Drinks', description: 'A refreshing cold drink. Size and brand may vary.', samplePrice: 40, badge: 'DEMO PRICE' },
];
