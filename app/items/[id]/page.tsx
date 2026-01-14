import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, ArrowLeft } from "lucide-react"
import { mockItems } from "@/lib/data"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return mockItems.map((item) => ({
    id: item.id.toString(),
  }))
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const id = Number.parseInt((params as unknown as { id: string }).id)
  const item = mockItems.find((i) => i.id === id)

  if (!item) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${item.name} - ProductHub`,
    description: item.description,
  }
}

export default async function ItemDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const item = mockItems.find((i) => i.id === Number.parseInt(id))

  if (!item) {
    notFound()
  }

  const relatedItems = mockItems.filter((i) => i.category === item.category && i.id !== item.id).slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Link href="/items" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Items
          </Link>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="rounded-lg border border-border overflow-hidden bg-secondary h-96 md:h-auto md:aspect-square flex items-center justify-center">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={500}
                height={500}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-sm text-muted-foreground font-semibold uppercase tracking-wide mb-3">
                {item.category}
              </span>

              <h1 className="text-4xl font-bold mb-4">{item.name}</h1>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <span className="font-semibold text-lg">{item.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">(127 reviews)</span>
              </div>

              <p className="text-2xl font-bold text-primary mb-6">${item.price}</p>

              <p className="text-lg text-muted-foreground mb-8">{item.description}</p>

              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold mb-2">Key Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Premium quality materials
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Satisfaction guaranteed
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Free shipping on orders over $50
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      30-day money back guarantee
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  Save for Later
                </Button>
              </div>
            </div>
          </div>

          {relatedItems.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Related Items</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedItems.map((relatedItem) => (
                  <Link key={relatedItem.id} href={`/items/${relatedItem.id}`}>
                    <div className="group cursor-pointer">
                      <div className="rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative h-48 overflow-hidden bg-secondary">
                          <Image
                            src={relatedItem.image || "/placeholder.svg"}
                            alt={relatedItem.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>

                        <div className="p-4">
                          <h3 className="font-semibold mb-2 group-hover:text-primary line-clamp-2">
                            {relatedItem.name}
                          </h3>
                          <p className="text-xl font-bold text-primary">${relatedItem.price}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
