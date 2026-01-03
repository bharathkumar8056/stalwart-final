import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { QuoteForm } from "@/components/contact/quote-form"
import { FAQSection } from "@/components/contact/faq-section"
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section id="contact-hero" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Get in Touch</h1>
              <p className="text-xl text-muted-foreground text-balance">
                We're here to answer your questions and help you find the perfect tissue solutions
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-16">
              <Card className="shadow-lg hover:shadow-xl transition-all border-2">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Phone</h3>
                  <a
                    href="https://wa.me/919677199951"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                  >
                    +91 9677199951
                  </a>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-all border-2">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href="mailto:info@stalwartexport.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                  >
                    info@stalwartexport.com
                  </a>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-all border-2">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p className="text-sm text-muted-foreground">Mon - Sat: 9AM - 6PM IST</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-all border-2">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Global Shipping</h3>
                  <p className="text-sm text-muted-foreground">Serving 50+ Countries</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8 text-center">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Request a Quote</h2>
                <p className="text-lg text-muted-foreground">
                  Ready to place an order? Tell us your requirements and we'll provide a detailed quote within 24 hours.
                </p>
              </div>
              <div className="bg-card/80 backdrop-blur border-2 border-border rounded-2xl p-8 md:p-10 shadow-2xl">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Address Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Visit Our Office</h2>
                  <p className="text-lg text-muted-foreground">
                    Located in Villupuram, Tamil Nadu, we welcome visitors by appointment. Contact us to schedule a
                    visit.
                  </p>
                </div>

                <Card className="border-2">
                  <CardContent className="p-6 space-y-4">
                      <div className="flex flex-col sm:flex-row items-start gap-4">
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div className="min-w-0">
                          <h3 className="font-semibold mb-1">Stalwart Export Services</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed break-words whitespace-normal">
                            Plot no.5, NGGO colony,
                            <br />
                            Bakkiyalakshmi Nagar,
                            <br />
                            Villupuram, Tamil Nadu 605602
                            <br />
                            India
                          </p>
                        </div>
                      </div>
                    </CardContent>
                </Card>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/919677199951"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium transition-colors shadow-md hover:shadow-lg"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </a>
                  <a
                    href="mailto:info@stalwartexport.com"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-border hover:bg-secondary transition-colors font-medium shadow-md hover:shadow-lg"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62418.77876834753!2d79.45077!3d11.93995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361ab0a49cfff%3A0x1d957a463af87419!2sVillupuram%2C%20Tamil%20Nadu%20605602!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Stalwart Export Services Location"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section with improved layout */}
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
