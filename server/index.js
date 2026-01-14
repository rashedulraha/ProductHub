import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Mock database
const items = [
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

// Routes

// Get all items
app.get("/api/items", (req, res) => {
  res.json(items)
})

// Get single item by ID
app.get("/api/items/:id", (req, res) => {
  const item = items.find((i) => i.id === Number.parseInt(req.params.id))

  if (!item) {
    return res.status(404).json({ error: "Item not found" })
  }

  res.json(item)
})

// Create new item
app.post("/api/items", (req, res) => {
  const { name, description, price, image, category, rating } = req.body

  if (!name || !description || !price) {
    return res.status(400).json({ error: "Missing required fields" })
  }

  const newItem = {
    id: Math.max(...items.map((i) => i.id)) + 1,
    name,
    description,
    price: Number.parseFloat(price),
    image: image || "",
    category: category || "Electronics",
    rating: Number.parseFloat(rating) || 4.5,
  }

  items.push(newItem)
  res.status(201).json(newItem)
})

// Update item
app.put("/api/items/:id", (req, res) => {
  const item = items.find((i) => i.id === Number.parseInt(req.params.id))

  if (!item) {
    return res.status(404).json({ error: "Item not found" })
  }

  const { name, description, price, image, category, rating } = req.body

  Object.assign(item, {
    ...(name && { name }),
    ...(description && { description }),
    ...(price && { price: Number.parseFloat(price) }),
    ...(image && { image }),
    ...(category && { category }),
    ...(rating && { rating: Number.parseFloat(rating) }),
  })

  res.json(item)
})

// Delete item
app.delete("/api/items/:id", (req, res) => {
  const index = items.findIndex((i) => i.id === Number.parseInt(req.params.id))

  if (index === -1) {
    return res.status(404).json({ error: "Item not found" })
  }

  const deletedItem = items.splice(index, 1)
  res.json(deletedItem[0])
})

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" })
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: "Internal server error" })
})

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`)
})
