import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProductDetailContent } from "@/components/products/product-detail-content"
import { notFound } from "next/navigation"

const products = {
  "facial-tissues": {
    id: "facial-tissues",
    name: "Facial Tissues",
    category: "Personal Care",
    shortDescription: "Premium 2-ply facial tissues designed with exceptional softness for sensitive skin.",
    fullDescription:
      "Our premium facial tissues are crafted from 100% virgin fibers, offering exceptional softness and strength. Perfect for personal use in homes, offices, and healthcare settings, these tissues are designed to be gentle on sensitive skin while providing superior absorbency. Available in both box packing and soft pull packs for convenience.",
    images: [
      "/white-facial-tissue-box-premium-quality-close-up.jpg",
      "/assets/facial-tissue1.jpeg",
      "/assets/facial-tissue2.webp",
    ],
    specifications: {
      ply: "2 Ply",
      sizes: ["20 × 20 cm", "21 × 21 cm"],
      packaging: ["Box Packing", "Soft Pack (Pull Pack)"],
      gsm: "32-40 GSM per ply",
      material: "100% Virgin Fiber",
    },
    useCases: [
      "Personal hygiene and facial care",
      "Office and workplace environments",
      "Healthcare and medical facilities",
      "Hospitality industry (hotels, resorts)",
      "Retail and consumer markets",
    ],
    benefits: [
      "Exceptional softness ideal for sensitive skin",
      "Superior absorbency for effective cleaning",
      "Lint-free and strong when wet",
      "Hypoallergenic and dermatologically tested",
      "Biodegradable and eco-friendly",
      "Available in multiple packaging options",
    ],
    whyChoose: [
      "Premium virgin fiber ensures maximum softness",
      "Advanced manufacturing process maintains hygiene standards",
      "Customizable packaging options available",
      "Consistent quality across all batches",
      "Competitive pricing for bulk orders",
    ],
  },
  "paper-napkins": {
    id: "paper-napkins",
    name: "Paper Napkins",
    category: "Dining & Hospitality",
    shortDescription: "Essential dining napkins for restaurants, hotels, and catering with superior absorbency.",
    fullDescription:
      "Our paper napkins are designed for the hospitality and food service industry, combining elegance with functionality. Available in 1-ply and 2-ply options, these napkins offer excellent absorbency and durability. Perfect for restaurants, hotels, catering services, cafeterias, and special events, they provide a hygienic and convenient dining solution.",
    images: [
      "/folded-white-paper-napkins-stack-elegant-restauran.jpg",
      "/paper-napkin-alternate-1.jpg",
      "/paper-napkin-alternate-2.jpg",
    ],
    specifications: {
      ply: "1 Ply / 2 Ply",
      sizes: ["27 × 27 cm", "30 × 30 cm"],
      packaging: ["Bulk Packs", "Custom Packaging Available"],
      gsm: "28-38 GSM per ply",
      material: "Virgin Pulp",
    },
    useCases: [
      "Restaurants and dining establishments",
      "Hotels and resorts",
      "Catering services and events",
      "Cafeterias and food courts",
      "Airlines and transportation services",
      "Fast food chains and QSRs",
    ],
    benefits: [
      "High absorbency for spills and cleaning",
      "Strong and durable even when wet",
      "Elegant presentation for dining tables",
      "Available in multiple sizes to suit needs",
      "Cost-effective for bulk purchasing",
      "Environmentally friendly and biodegradable",
    ],
    whyChoose: [
      "Food-safe materials certified for dining use",
      "Consistent quality perfect for brand reputation",
      "Flexible MOQ options for businesses of all sizes",
      "Custom printing and branding available",
      "Reliable supply chain for consistent availability",
    ],
  },
  "kitchen-towels": {
    id: "kitchen-towels",
    name: "Kitchen Towels",
    category: "Kitchen & Cleaning",
    shortDescription: "High-absorbency kitchen rolls perfect for commercial and domestic use.",
    fullDescription:
      "Our kitchen towels are engineered for maximum absorbency and strength, making them ideal for tackling tough cleaning jobs. Whether in commercial kitchens, restaurants, food processing facilities, or home use, these towels provide reliable performance. Available in 2-ply and 3-ply options with high GSM ratings for superior durability.",
    images: [
      "/white-kitchen-paper-towel-roll-on-holder-professio.jpg",
      "/kitchen-towel-alternate-1.jpg",
      "/assets/kitchen-towels3.jpg",
    ],
    specifications: {
      ply: "2 Ply / 3 Ply",
      sizes: ["27-28 cm width"],
      packaging: ["Roll"],
      gsm: "32-40 GSM per ply",
      material: "High-grade Virgin Fiber",
      length: "Customizable length options",
    },
    useCases: [
      "Commercial kitchen cleaning and drying",
      "Restaurant food preparation areas",
      "Food processing facilities",
      "Domestic household cleaning",
      "Workshops and industrial cleaning",
      "Automotive and garage use",
    ],
    benefits: [
      "Exceptional absorbency for spills and grease",
      "High tensile strength when wet",
      "Lint-free performance for streak-free cleaning",
      "Gentle on surfaces without scratching",
      "Quick-drying capability",
      "Cost-effective alternative to cloth towels",
    ],
    whyChoose: [
      "Premium quality suitable for commercial use",
      "Consistent roll dimensions for dispenser compatibility",
      "Excellent value for high-volume users",
      "Hygienic single-use option reduces cross-contamination",
      "Sustainable and biodegradable materials",
    ],
  },
  "toilet-rolls": {
    id: "toilet-rolls",
    name: "Toilet Rolls",
    category: "Personal Care",
    shortDescription: "Soft virgin 2-ply toilet tissue for superior comfort and hygiene.",
    fullDescription:
      "Our toilet rolls are manufactured from 100% virgin pulp, ensuring unmatched softness and strength. Designed for use in homes, offices, public restrooms, and healthcare facilities, these 2-ply rolls provide superior comfort and hygiene. Available in multiple widths to fit various dispenser types.",
    images: [
      "/white-toilet-paper-roll-premium-soft-quality-bathr.jpg",
      "/toilet-roll-alternate-1.jpg",
      "/assets/toilet-rolls3.webp",
    ],
    specifications: {
      ply: "2 Ply – Virgin Soft",
      widths: ["8 cm", "9 cm", "10 cm", "12 cm"],
      packaging: ["Individual Wrapped", "Bulk Packs"],
      gsm: "30-36 GSM per ply",
      material: "100% Virgin Pulp",
      sheets: "200-400 sheets per roll (customizable)",
    },
    useCases: [
      "Residential bathrooms",
      "Office and workplace facilities",
      "Public restrooms and washrooms",
      "Healthcare facilities and hospitals",
      "Hotels and hospitality venues",
      "Educational institutions",
    ],
    benefits: [
      "Ultra-soft texture for sensitive skin",
      "Strong 2-ply construction prevents tearing",
      "Highly absorbent for effective cleaning",
      "Flushable and septic-safe",
      "Hypoallergenic and dermatologically approved",
      "Long-lasting rolls reduce replacement frequency",
    ],
    whyChoose: [
      "Premium virgin pulp ensures superior quality",
      "Multiple width options for universal compatibility",
      "Rigorous quality control for consistency",
      "Competitive bulk pricing for institutions",
      "Environmentally responsible manufacturing",
    ],
  },
  "couch-rolls": {
    id: "couch-rolls",
    name: "Couch Rolls / Bed Rolls",
    category: "Medical & Healthcare",
    shortDescription: "Medical-grade rolls for hospitals, clinics, spas, and beauty salons ensuring hygiene.",
    fullDescription:
      "Our couch rolls and bed rolls are specifically designed for medical and healthcare applications. These high-quality rolls provide a hygienic protective barrier for examination tables, treatment beds, and spa facilities. With 50cm width and 2-3 ply construction, they offer excellent coverage and absorbency for professional use.",
    images: [
      "/white-medical-couch-roll-paper-on-examination-bed-.jpg",
      "/assets/couch-rolls2.webp",
      "/assets/couch-rolls3.webp",
    ],
    specifications: {
      ply: "2 Ply / 3 Ply",
      width: "50 cm",
      packaging: ["Individual Rolls", "Bulk Cartons"],
      gsm: "32-40 GSM per ply",
      material: "Virgin Medical-Grade Fiber",
      length: "40-50 meters per roll (customizable)",
    },
    useCases: [
      "Hospitals and medical examination rooms",
      "Dental clinics and practices",
      "Veterinary clinics and animal care",
      "Physiotherapy and rehabilitation centers",
      "Spa and wellness centers",
      "Beauty salons and waxing studios",
      "Massage therapy facilities",
    ],
    benefits: [
      "Medical-grade hygiene standards",
      "High absorbency for patient comfort",
      "Strong and tear-resistant during use",
      "Wide 50cm format provides full coverage",
      "Soft texture for patient comfort",
      "Easy to dispense and cut to size",
      "Disposable for maximum hygiene",
    ],
    whyChoose: [
      "Certified for medical and healthcare use",
      "Meets international hygiene standards",
      "Trusted by healthcare professionals",
      "Consistent quality for reliable performance",
      "Bulk pricing options for facilities",
      "Customizable lengths available",
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }))
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const { slug } = (await params) as { slug: string }
  const product = products[slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        <ProductDetailContent product={product} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
