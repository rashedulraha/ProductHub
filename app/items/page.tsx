import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Star } from "lucide-react"
import { mockItems } from "@/lib/data"

export const metadata = {
  title: "Items - ProductHub",
  description: "Browse our complete collection of premium products",
}

export default function ItemsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">All Items</h1>
            <p className="text-muted-foreground">Browse our curated collection of {mockItems.length} products</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockItems.map((item) => (
              <Link key={item.id} href={`/items/${item.id}`}>
                <div className="group cursor-pointer h-full">
                  <div className="rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden bg-secondary">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-4 flex flex-col flex-1">
                      <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-2">
                        {item.category}
                      </span>

                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {item.name}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">{item.description}</p>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="text-sm font-semibold">{item.rating}</span>
                        </div>
                        <span className="text-xl font-bold text-primary">${item.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
