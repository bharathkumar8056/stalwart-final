import Link from "next/link"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/stalwart-logo.jpg" alt="Stalwart Logo" width={48} height={48} className="rounded-lg" />
              <h3 className="font-serif text-2xl font-bold">Stalwart</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Leading exporter of premium tissue paper products with global reach and commitment to quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/about#privacy"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/about#terms"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products/facial-tissues"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Facial Tissues
                </Link>
              </li>
              <li>
                <Link
                  href="/products/paper-napkins"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Paper Napkins
                </Link>
              </li>
              <li>
                <Link
                  href="/products/kitchen-towels"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Kitchen Towels
                </Link>
              </li>
              <li>
                <Link
                  href="/products/toilet-rolls"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Toilet Rolls
                </Link>
              </li>
              <li>
                <Link
                  href="/products/couch-rolls"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Couch Rolls
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="https://wa.me/919677199951"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +91 9677199951
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">info@stalwartexport.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Plot no.5, NGGO colony,
                  <br />
                  Bakkiyalakshmi Nagar,
                  <br />
                  Villupuram, 605602
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 pb-16 md:pb-8">
          <div className="text-center space-y-4">
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} Stalwart Export Services. All rights reserved.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 text-sm text-primary-foreground/80">
              <span className="flex items-center gap-1.5">
                Developed by{" "}
                <a
                  href="https://www.instagram.com/bkb_incorporation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground hover:text-primary-foreground/80 transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <Instagram className="h-3.5 w-3.5" />
                  BKB Incorporation
                </a>
              </span>
              <span className="text-primary-foreground/60">In association with</span>
              <a
                href="https://www.instagram.com/brandspark_sm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium inline-flex items-center gap-1"
              >
                <Instagram className="h-3.5 w-3.5" />
                Brandspark
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
