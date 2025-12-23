import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle } from "lucide-react"

const faqs = [
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer:
      "Our MOQ varies by customer type: For B2B customers, MOQ starts from 500-1000 packs. For B2C customers, MOQ starts from 10-500 packs. For FCL (Full Container Load) orders, we prefer orders above 15 CBM. Contact us for specific MOQ details for your requirements.",
  },
  {
    question: "What are the payment terms?",
    answer:
      "We accept Letter of Credit (LC) as the preferred payment method. For direct remittance, we require 50% advance payment upon order confirmation, with the remaining balance due before shipping document release. All payments are in US Dollars.",
  },
  {
    question: "How long is the lead time for orders?",
    answer:
      "Typical lead times range from 2-6 weeks depending on order size and destination. This includes 2-3 weeks for manufacturing and production, and 1-2 weeks for customs clearance and shipping. Sea freight transit times vary: USA (30-45 days), Europe (20-35 days), China (10-30 days).",
  },
  {
    question: "Which countries do you ship to?",
    answer:
      "We ship globally to over 50 countries. We offer both sea freight and air freight options. Sea freight is more economical for large bulk orders, while air freight is available for time-sensitive shipments. We handle all export documentation and provide real-time tracking.",
  },
  {
    question: "Can you customize packaging with our brand?",
    answer:
      "Yes, we offer customized packaging options including custom printing, branding, and packaging designs. This is subject to MOQ requirements and may affect lead times. Contact us with your specific customization needs for a detailed quote.",
  },
  {
    question: "Are your products eco-friendly?",
    answer:
      "Our products are made from biodegradable, recyclable materials sourced sustainably. They decompose quickly compared to plastics, reducing landfill waste. We use virgin fibers and minimize chemical use in our manufacturing process.",
  },
  {
    question: "Do you provide product samples?",
    answer:
      "Yes, we can provide product samples for evaluation. Sample costs and shipping fees apply and can be discussed based on your requirements. Contact us to request samples of specific products you're interested in.",
  },
  {
    question: "What quality certifications do you have?",
    answer:
      "Our products meet international hygiene and quality standards. We are ISO certified and our manufacturing process follows strict quality control protocols. All products undergo rigorous testing for softness, absorbency, strength, and hygiene.",
  },
  {
    question: "How do I track my shipment?",
    answer:
      "We provide real-time cargo tracking from the moment your order leaves our facility until it reaches your destination. You'll receive tracking information via email and can monitor your shipment's location and status throughout transit.",
  },
  {
    question: "What is your return and refund policy?",
    answer:
      "Due to the nature of our products, returns are only accepted for damaged or defective items. Claims must be reported within 7 days of delivery with photographic evidence. After investigation, we will issue refunds or replacements at our discretion.",
  },
]

export function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our products and services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-card/80 backdrop-blur border-2 border-border rounded-xl px-6 hover:border-primary/40 transition-all"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-base md:text-lg pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <a
              href="https://wa.me/919677199951"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
