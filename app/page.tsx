import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-pretty mb-6">
                Discover Your Next Favorite Product
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Browse our curated collection of premium items selected specifically for quality and value
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/items">
                    Explore Items
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 sm:py-28 bg-secondary/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-xl text-muted-foreground">Experience the difference with our service</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality Assured",
                  description: "Every product is carefully selected and tested for quality",
                },
                {
                  title: "Fast Shipping",
                  description: "Quick and reliable delivery to your doorstep",
                },
                {
                  title: "Easy Returns",
                  description: "Hassle-free returns within 30 days of purchase",
                },
              ].map((feature, i) => (
                <div key={i} className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
                  <Check className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground">Simple steps to find your perfect item</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Browse", desc: "Explore our collection" },
                { step: "2", title: "Select", desc: "Choose your favorite items" },
                { step: "3", title: "Checkout", desc: "Secure payment process" },
                { step: "4", title: "Enjoy", desc: "Receive and enjoy your purchase" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 sm:py-28 bg-secondary/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
              <p className="text-xl text-muted-foreground">Find what you're looking for</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {["Electronics", "Accessories", "Photography", "Bags", "Health", "Lifestyle"].map((cat, i) => (
                <button
                  key={i}
                  className="p-8 rounded-lg border border-border bg-card hover:bg-primary hover:text-primary-foreground transition-colors font-semibold text-lg cursor-pointer"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What Customers Say</h2>
              <p className="text-xl text-muted-foreground">Real feedback from our satisfied customers</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  role: "Verified Buyer",
                  comment: "Outstanding quality and great customer service. Highly recommend!",
                },
                {
                  name: "Michael Davis",
                  role: "Verified Buyer",
                  comment: "Fast shipping and excellent products. Very impressed with my purchase.",
                },
                {
                  name: "Emma Wilson",
                  role: "Verified Buyer",
                  comment: "Best online shopping experience. Will definitely be back!",
                },
              ].map((testimonial, i) => (
                <div key={i} className="p-8 rounded-lg border border-border bg-card">
                  <p className="text-muted-foreground mb-4">"{testimonial.comment}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 sm:py-28 bg-secondary/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Flexible Pricing</h2>
              <p className="text-xl text-muted-foreground">Choose the plan that works for you</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "Free",
                  features: ["Browse items", "Filter by category", "Save favorites"],
                },
                {
                  name: "Member",
                  price: "$9.99/mo",
                  features: ["All Basic features", "Free shipping", "Early access to sales"],
                },
                {
                  name: "Premium",
                  price: "$19.99/mo",
                  features: ["All Member features", "Priority support", "Exclusive deals"],
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`rounded-lg border p-8 ${
                    i === 1 ? "border-primary bg-primary/5 scale-105" : "border-border bg-card"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-6">{plan.price}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={i === 1 ? "default" : "outline"}>
                    Choose Plan
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of satisfied customers and find your next favorite product today
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/items">Start Shopping</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/login">Admin Login</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
