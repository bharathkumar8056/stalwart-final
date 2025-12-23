import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: "facial-tissues",
    name: "Facial Tissues",
    description:
      "Premium 2-ply facial tissues for personal care, designed with exceptional softness for sensitive skin.",
    image: "/white-facial-tissue-box-premium-quality-close-up.jpg",
    features: ["2 Ply", "20×20cm / 21×21cm", "Box & Soft Pack"],
  },
  {
    id: "paper-napkins",
    name: "Paper Napkins",
    description: "Essential dining napkins for restaurants, hotels, and catering with superior absorbency.",
    image: "/folded-white-paper-napkins-stack-elegant-restauran.jpg",
    features: ["1-2 Ply", "27×27cm / 30×30cm", "Premium Quality"],
  },
  {
    id: "kitchen-towels",
    name: "Kitchen Towels",
    description: "High-absorbency kitchen rolls perfect for commercial and domestic use.",
    image: "/white-kitchen-paper-towel-roll-on-holder-professio.jpg",
    features: ["2-3 Ply", "27-28cm Width", "32-40 GSM"],
  },
  {
    id: "toilet-rolls",
    name: "Toilet Rolls",
    description: "Soft virgin 2-ply toilet tissue for superior comfort and hygiene in any setting.",
    image: "/white-toilet-paper-roll-premium-soft-quality-bathr.jpg",
    features: ["2 Ply Virgin", "8-12cm Width", "Ultra Soft"],
  },
  {
    id: "couch-rolls",
    name: "Couch Rolls / Bed Rolls",
    description: "Medical-grade rolls for hospitals, clinics, spas, and beauty salons ensuring hygiene.",
    image: "/white-medical-couch-roll-paper-on-examination-bed-.jpg",
    features: ["2-3 Ply", "50cm Width", "High Absorbency"],
  },
]

export function ProductsOverview() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Our Premium Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore our comprehensive range of high-quality tissue paper products designed for diverse applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-serif text-xl font-bold">{product.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link href={`/products/${product.id}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
