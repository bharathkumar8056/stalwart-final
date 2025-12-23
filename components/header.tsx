"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/40 bg-primary/95 backdrop-blur-md supports-[backdrop-filter]:bg-primary/90 shadow-lg">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12">
            <Image
              src="/stalwart-logo.jpg"
              alt="Stalwart Export Services Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-white/80 transition-colors">
              Stalwart
            </span>
            <span className="text-xs text-zinc-400 -mt-1">Export Services</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-primary-foreground/90 hover:text-primary-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-foreground after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            asChild
            className="bg-background text-foreground hover:bg-background/90 shadow-md hover:shadow-lg transition-all"
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-primary-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-primary-foreground/20 bg-primary">
          <nav className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-background text-foreground hover:bg-background/90 w-full">
              <a
                href={`https://wa.me/919677199951?text=${encodeURIComponent(
                  "Hi, I would like to inquire about your products."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Quote
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
