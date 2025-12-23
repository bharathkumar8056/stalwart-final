import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/home/hero-section"
import { ProductsOverview } from "@/components/home/products-overview"
import { ManufacturingSection } from "@/components/home/manufacturing-section"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { ShippingSection } from "@/components/home/shipping-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductsOverview />
        <ManufacturingSection />
        <WhyChooseUs />
        <ShippingSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
