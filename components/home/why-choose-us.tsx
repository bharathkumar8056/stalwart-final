import { Award, Globe, Package, TrendingUp, Users, Headphones } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reasons = [
  {
    icon: Award,
    title: "Certified Excellence",
    description: "ISO certified manufacturing with strict quality control ensuring premium products every time.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving 50+ countries with reliable international shipping and customs expertise.",
  },
  {
    icon: Package,
    title: "Custom Solutions",
    description: "Flexible MOQ options and customized packaging to meet your specific business needs.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Pricing",
    description: "Direct manufacturer pricing with transparent costs and flexible payment terms.",
  },
  {
    icon: Users,
    title: "B2B & B2C Focus",
    description: "Tailored solutions for both bulk business orders and direct customer purchases.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "24/7 customer service with real-time cargo tracking and prompt issue resolution.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Why Choose Stalwart Export Services?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Partnering with us means choosing quality, reliability, and excellence in every shipment
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <reason.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
