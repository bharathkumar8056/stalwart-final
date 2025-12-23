import { Leaf, Shield, Sparkles, Zap, Droplets, Recycle } from "lucide-react"

const highlights = [
  {
    icon: Sparkles,
    title: "Premium Quality Materials",
    description:
      "Our tissues are especially premium or organic, biodegradable, recyclable, and made from sustainable sources reducing deforestation and chemical pollution. Virgin fibre bonding ensures proper absorbency.",
  },
  {
    icon: Leaf,
    title: "Sustainable & Eco-Friendly",
    description:
      "They decompose quickly, lowering landfill waste compared to plastics. Made from sustainable sources that minimize environmental impact.",
  },
  {
    icon: Shield,
    title: "Advanced Hygiene Standards",
    description:
      "Careful selection and screening procedure for raw materials with advanced machinery to ensure tissues are free from contamination to secure hygiene and meet global market standards.",
  },
  {
    icon: Droplets,
    title: "Exceptional Softness & Absorbency",
    description:
      "Premium tissues offer exceptional softness, ideal for sensitive skin, along with excellent absorbency to handle spills and grease effectively.",
  },
  {
    icon: Zap,
    title: "Durable Yet Lightweight",
    description:
      "Combining durability with a lightweight feel, these tissues provide gentle protection for delicate surfaces without causing scratches, improving efficiency.",
  },
  {
    icon: Recycle,
    title: "Controlled Production Process",
    description:
      "Our production relies on premium raw material and controlled equipment to meet global market standards for hygiene, softness, and strength.",
  },
]

export function ManufacturingSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
              <img
                src="/modern-tissue-paper-manufacturing-facility-clean-p.jpg"
                alt="Manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-xl shadow-2xl border-4 border-background">
              <div className="font-serif text-4xl font-bold">ISO</div>
              <div className="text-sm">Certified Quality</div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance">How Our Products Are Made</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our products are made through a precise manufacturing process under a careful selection and screening
                procedure for raw materials which includes virgin fibre bonding for proper absorbency with advanced
                machinery to ensure the tissues are free from contamination to secure the hygiene and standard.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Our production relies on premium raw material and controlled equipment to meet global market standard
                for hygiene, softness and strength.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
