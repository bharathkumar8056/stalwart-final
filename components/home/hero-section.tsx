import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Award, Globe2, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/10 to-accent/5"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 py-16 md:py-24 items-center">
          {/* Left: Company Info */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                <span className="text-primary">Stalwart</span> Export Services
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance">
                Premium Tissue Paper Products for Global Markets
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Leading exporter of high-quality tissue paper products including facial tissues, paper napkins, kitchen
                towels, toilet rolls, and medical-grade couch rolls. We specialize in delivering premium, sustainable
                products to B2B and B2C customers worldwide with exceptional quality standards.
              </p>
              <p className="text-base text-foreground/70 leading-relaxed">
                Our products are manufactured through precise processes with carefully selected raw materials, virgin
                fiber bonding, and advanced machinery ensuring contamination-free, hygienic products that meet
                international standards.
              </p>
              <p className="text-base text-foreground/70 leading-relaxed">
                Experience unparalleled softness, superior absorbency, and eco-friendly solutions with biodegradable,
                recyclable materials from sustainable sources.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-base shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/products">
                  View Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base border-2 hover:bg-primary/5 bg-transparent"
              >
                <a
                  href={`https://wa.me/919677199951?text=${encodeURIComponent(
                    "Hi, I would like to inquire about your products."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Quote
                </a>
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t-2 border-border">
              <div className="text-center lg:text-left">
                <div className="font-serif text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-serif text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-serif text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Quality Assured</div>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl" />
            <img
              src="/premium-white-tissue-paper-products-elegantly-stac.jpg"
              alt="Premium tissue paper products"
              className="relative rounded-2xl shadow-2xl w-full h-full object-cover border-4 border-background"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-2xl" />

            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
              <div className="bg-card/95 backdrop-blur-sm p-3 rounded-xl border-2 border-primary/20 shadow-lg text-center">
                <Award className="h-6 w-6 text-primary mx-auto mb-1" />
                <p className="text-xs font-semibold">ISO Certified</p>
              </div>
              <div className="bg-card/95 backdrop-blur-sm p-3 rounded-xl border-2 border-primary/20 shadow-lg text-center">
                <Shield className="h-6 w-6 text-primary mx-auto mb-1" />
                <p className="text-xs font-semibold">100% Hygienic</p>
              </div>
              <div className="bg-card/95 backdrop-blur-sm p-3 rounded-xl border-2 border-primary/20 shadow-lg text-center">
                <Globe2 className="h-6 w-6 text-primary mx-auto mb-1" />
                <p className="text-xs font-semibold">Global Export</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}
