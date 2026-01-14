// Mock product data
export const mockItems = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "High-quality sound with active noise cancellation",
    price: 299.99,
    image: "/wireless-headphones.jpg",
    category: "Electronics",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Minimalist Watch",
    description: "Sleek design with precision timekeeping",
    price: 149.99,
    image: "/minimalist-watch.jpg",
    category: "Accessories",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Ergonomic Keyboard",
    description: "Comfortable typing experience with mechanical switches",
    price: 179.99,
    image: "/ergonomic-keyboard.jpg",
    category: "Electronics",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Vintage Camera",
    description: "Classic film camera with manual controls",
    price: 89.99,
    image: "/vintage-camera.jpg",
    category: "Photography",
    rating: 4.3,
  },
  {
    id: 5,
    name: "Leather Backpack",
    description: "Durable and stylish for everyday use",
    price: 199.99,
    image: "/leather-backpack.jpg",
    category: "Bags",
    rating: 4.7,
  },
  {
    id: 6,
    name: "Smart Water Bottle",
    description: "Track hydration with intelligent reminders",
    price: 59.99,
    image: "/smart-water-bottle.jpg",
    category: "Health",
    rating: 4.4,
  },
]

export type Item = (typeof mockItems)[0]
