"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Check, MessageCircle, Package, Truck, Shield, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface Product {
  id: string
  name: string
  category: string
  shortDescription: string
  fullDescription: string
  images: string[]
  specifications: Record<string, string | string[]>
  useCases: string[]
  benefits: string[]
  whyChoose: string[]
}

export function ProductDetailContent({ product }: { product: Product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const handleGetQuote = () => {
    const message = `Hi, I would like to get a quote for ${product.name}. Please provide details on pricing, MOQ, and lead time.`
    window.open(`https://wa.me/919677199951?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="py-6 border-b border-border bg-secondary/20">
        <div className="container">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
              Products
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary/20">
                <img
                  src={product.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === idx ? "border-primary" : "border-transparent hover:border-border"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="text-sm text-primary font-medium">{product.category}</span>
                <h1 className="font-serif text-3xl md:text-4xl font-bold mt-2">{product.name}</h1>
                <p className="text-lg text-muted-foreground mt-3">{product.shortDescription}</p>
              </div>

              {/* Key Features */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg">
                  <Package className="h-4 w-4" />
                  <span className="text-sm font-medium">{product.specifications.ply}</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm font-medium">Premium Quality</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg">
                  <Truck className="h-4 w-4" />
                  <span className="text-sm font-medium">Global Shipping</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button onClick={handleGetQuote} size="lg" className="bg-primary hover:bg-primary/90 flex-1">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Quote
                </Button>
                <Button asChild size="lg" variant="outline" className="flex-1 bg-transparent">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>

              {/* MOQ Information */}
              <Card className="bg-secondary/30 border-primary/20">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-semibold text-lg">Minimum Order Quantity (MOQ)</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">B2B (Business):</span>
                      <span className="font-medium">500-1000 packs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">B2C (Retail):</span>
                      <span className="font-medium">10-500 packs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">FCL Orders:</span>
                      <span className="font-medium">Above 15 CBM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-secondary/20">
        <div className="container max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Product Specifications</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <dt className="text-sm text-muted-foreground capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </dt>
                    <dd className="font-medium text-lg">{Array.isArray(value) ? value.join(", ") : value}</dd>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Full Description */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Product Description</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{product.fullDescription}</p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-secondary/20">
        <div className="container max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Applications & Use Cases</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {product.useCases.map((useCase, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Key Benefits</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.benefits.map((benefit, idx) => (
              <Card key={idx}>
                <CardContent className="p-6 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm leading-relaxed">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Why Choose This Product?</h2>
          <div className="space-y-4">
            {product.whyChoose.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-primary-foreground/10 p-6 rounded-lg backdrop-blur">
                <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">{idx + 1}</span>
                </div>
                <p className="text-primary-foreground/90 leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Ready to Order?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get in touch with our sales team for pricing, customization options, and bulk order discounts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button onClick={handleGetQuote} size="lg" className="bg-primary hover:bg-primary/90">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Quote on WhatsApp
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent">
                  <Link href="/contact">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
