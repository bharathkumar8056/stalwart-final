"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Filter } from "lucide-react"
import { useState } from "react"

const products = [
  {
    id: "facial-tissues",
    name: "Facial Tissues",
    category: "Personal Care",
    description: "Premium 2-ply facial tissues designed with exceptional softness for sensitive skin.",
    image: "/white-facial-tissue-box-premium-quality-close-up.jpg",
    ply: "2 Ply",
    sizes: ["20×20cm", "21×21cm"],
    packaging: ["Box Packing", "Soft Pack"],
  },
  {
    id: "paper-napkins",
    name: "Paper Napkins",
    category: "Dining & Hospitality",
    description: "Essential dining napkins for restaurants, hotels, and catering with superior absorbency.",
    image: "/folded-white-paper-napkins-stack-elegant-restauran.jpg",
    ply: "1-2 Ply",
    sizes: ["27×27cm", "30×30cm"],
    packaging: ["Bulk Packs"],
  },
  {
    id: "kitchen-towels",
    name: "Kitchen Towels",
    category: "Kitchen & Cleaning",
    description: "High-absorbency kitchen rolls perfect for commercial and domestic use.",
    image: "/white-kitchen-paper-towel-roll-on-holder-professio.jpg",
    ply: "2-3 Ply",
    sizes: ["27-28cm width"],
    packaging: ["Roll"],
  },
  {
    id: "toilet-rolls",
    name: "Toilet Rolls",
    category: "Personal Care",
    description: "Soft virgin 2-ply toilet tissue for superior comfort and hygiene.",
    image: "/white-toilet-paper-roll-premium-soft-quality-bathr.jpg",
    ply: "2 Ply",
    sizes: ["8cm", "9cm", "10cm", "12cm"],
    packaging: ["Roll"],
  },
  {
    id: "couch-rolls",
    name: "Couch Rolls / Bed Rolls",
    category: "Medical & Healthcare",
    description: "Medical-grade rolls for hospitals, clinics, spas, and beauty salons.",
    image: "/white-medical-couch-roll-paper-on-examination-bed-.jpg",
    ply: "2-3 Ply",
    sizes: ["50cm width"],
    packaging: ["Roll"],
  },
]

const categories = [
  "All Products",
  "Personal Care",
  "Dining & Hospitality",
  "Kitchen & Cleaning",
  "Medical & Healthcare",
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Products")

  const filteredProducts =
    selectedCategory === "All Products" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Our Products</h1>
              <p className="text-xl text-muted-foreground text-balance">
                Comprehensive range of premium tissue paper products for every need
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-6 md:py-8 border-b border-border bg-background/95 backdrop-blur sticky top-16 z-40">
          <div className="container">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-2 flex-shrink-0">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filter:</span>
              </div>
              <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`${
                      selectedCategory === category ? "bg-primary hover:bg-primary/90" : "hover:bg-secondary"
                    } whitespace-nowrap`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <span className="text-xs text-primary font-medium">{product.category}</span>
                      <h3 className="font-serif text-xl font-bold mt-1">{product.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                    <div className="space-y-2 pt-2 border-t border-border">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Ply:</span>
                        <span className="font-medium">{product.ply}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Sizes:</span>
                        <span className="font-medium text-right">{product.sizes.join(", ")}</span>
                      </div>
                    </div>
                    <Button
                      asChild
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground bg-transparent"
                      variant="outline"
                    >
                      <Link href={`/products/${product.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance">Ready to Place an Order?</h2>
              <p className="text-lg text-primary-foreground/90 text-balance">
                Contact us today for pricing, MOQ details, and custom packaging options
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" variant="secondary" className="text-base">
                  <Link href="/contact">Get Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-base border-primary-foreground/30 hover:bg-primary-foreground/10 bg-transparent"
                >
                  <a href="https://wa.me/919677199951" target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
