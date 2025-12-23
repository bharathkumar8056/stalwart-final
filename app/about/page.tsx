import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Target, Eye, Award, Users, Shield, Leaf } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section id="about-hero" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-balance">About Stalwart</h1>
              <p className="text-xl text-muted-foreground text-balance">
                Leading the tissue paper export industry with quality, sustainability, and global excellence
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/assets/tissue-facility.webp"
                  alt="Our facility"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Stalwart Export Services, located in Villupuram, Tamil Nadu, is a premier exporter of high-quality
                  tissue paper products. With over 15 years of experience in the industry, we have established ourselves
                  as a trusted partner for businesses and customers worldwide.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our commitment to excellence begins with careful raw material selection and extends through our
                  advanced manufacturing processes. We specialize in producing premium facial tissues, paper napkins,
                  kitchen towels, toilet rolls, and medical-grade couch rolls that meet international quality standards.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every product we manufacture undergoes rigorous quality control to ensure softness, absorbency, and
                  hygiene. We pride ourselves on sustainable practices, using biodegradable materials that minimize
                  environmental impact while delivering exceptional performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver premium quality tissue paper products globally while maintaining the highest standards of
                  hygiene, sustainability, and customer satisfaction. We strive to be the preferred partner for
                  businesses and individuals seeking reliable, eco-friendly tissue solutions.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the global leader in sustainable tissue paper manufacturing and export, recognized for
                  innovation, quality excellence, and environmental responsibility. We envision a world where every
                  tissue product contributes to both comfort and conservation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12 space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every decision we make
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Award,
                  title: "Quality First",
                  description: "Uncompromising standards in every product we manufacture and deliver.",
                },
                {
                  icon: Leaf,
                  title: "Sustainability",
                  description: "Eco-friendly practices that protect our planet for future generations.",
                },
                {
                  icon: Users,
                  title: "Customer Focus",
                  description: "Building lasting relationships through exceptional service and support.",
                },
                {
                  icon: Shield,
                  title: "Integrity",
                  description: "Transparent business practices and honest communication with all stakeholders.",
                },
              ].map((value, idx) => (
                <div key={idx} className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Redesigned Privacy Policy */}
        <section id="privacy" className="py-16 md:py-24 bg-gradient-to-br from-secondary/30 to-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="bg-card/80 backdrop-blur border-2 border-border rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-primary text-center">
                  Privacy Policy
                </h2>
                <div className="space-y-8">
                  <div className="space-y-5 p-8 rounded-2xl bg-gradient-to-br from-secondary/40 to-secondary/20 border-2 border-border/50 hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-3 text-foreground">Information Collection</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Stalwart Export Services collects personal information including name, email address, phone
                          number, shipping address, and business details when you place an order, request a quote, or
                          contact us. This information is used solely to process your orders, respond to inquiries, and
                          improve our services.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5 p-8 rounded-2xl bg-gradient-to-br from-secondary/40 to-secondary/20 border-2 border-border/50 hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-3 text-foreground">Data Protection</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          We implement appropriate security measures to protect your personal information from
                          unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and
                          is never shared with third parties without your explicit consent, except as required by law or
                          to fulfill your orders.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5 p-8 rounded-2xl bg-gradient-to-br from-secondary/40 to-secondary/20 border-2 border-border/50 hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-3 text-foreground">Cookies & Tracking</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Our website may use cookies to enhance user experience and analyze site traffic. You can
                          choose to disable cookies through your browser settings, though this may affect certain
                          website functionalities.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5 p-8 rounded-2xl bg-gradient-to-br from-secondary/40 to-secondary/20 border-2 border-border/50 hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-3 text-foreground">Your Rights</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          You have the right to access, correct, or delete your personal information at any time. To
                          exercise these rights or if you have questions about our privacy practices, please contact us
                          at info@stalwartexport.com or call +91 9677199951.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Redesigned Terms of Service */}
        <section id="terms" className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="bg-card/80 backdrop-blur border-2 border-border rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-primary text-center">
                  Terms of Service
                </h2>
                <div className="space-y-8">
                  <div className="space-y-5 p-8 rounded-2xl bg-gradient-to-br from-secondary/40 to-secondary/20 border-2 border-border/50 hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-3 text-foreground">Order Acceptance</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          All orders are subject to acceptance and product availability. We reserve the right to refuse
                          or cancel any order for any reason, including product unavailability, pricing errors, or
                          suspected fraudulent activity. Confirmation of your order will be sent via email.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5 p-8 rounded-2xl bg-gradient-to-br from-secondary/40 to-secondary/20 border-2 border-border/50 hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-3 text-foreground">Pricing & Payment</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          All prices are quoted in US Dollars and are subject to change without notice. Payment terms
                          include Letter of Credit (LC) or 50% advance payment with the balance due before shipping
                          document release. Prices do not include customs duties, taxes, or import fees, which are the
                          buyer's responsibility.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5 p-8 rounded-2xl bg-gradient-to-br from-secondary/40 to-secondary/20 border-2 border-border/50 hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-3 text-foreground">Shipping & Delivery</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Lead times typically range from 2-6 weeks depending on order size and destination. Shipping
                          costs are calculated based on weight, dimensions, destination, and selected shipping method.
                          We are not liable for delays caused by customs, weather, or carrier issues beyond our control.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5 p-8 rounded-2xl bg-gradient-to-br from-secondary/40 to-secondary/20 border-2 border-border/50 hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-3 text-foreground">Returns & Refunds</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Due to the nature of our products, returns are only accepted for damaged or defective items.
                          Claims must be reported within 7 days of delivery with photographic evidence. Refunds or
                          replacements will be issued at our discretion after investigation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5 p-8 rounded-2xl bg-gradient-to-br from-secondary/40 to-secondary/20 border-2 border-border/50 hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-3 text-foreground">Limitation of Liability</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Stalwart Export Services shall not be liable for any indirect, incidental, or consequential
                          damages arising from the use of our products or services. Our total liability is limited to
                          the purchase price of the products in question.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5 p-8 rounded-2xl bg-gradient-to-br from-secondary/40 to-secondary/20 border-2 border-border/50 hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-3 text-foreground">Contact Information</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          For questions regarding these terms, please contact us at: Stalwart Export Services, Plot
                          no.5, NGGO colony, Bakkiyalakshmi Nagar, Villupuram, 605602. Phone: +91 9677199951
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
