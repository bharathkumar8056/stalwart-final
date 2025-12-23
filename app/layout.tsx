import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "Stalwart Export Services | Premium Tissue Paper Products",
  description:
    "Leading exporter of premium tissue paper products including facial tissues, paper napkins, kitchen towels, toilet rolls, and couch rolls. Global shipping available.",
  generator: "BKB Incorporation",
  keywords: [
    "tissue paper export",
    "facial tissues",
    "paper napkins",
    "kitchen towels",
    "toilet rolls",
    "wholesale tissue paper",
  ],
  icons: {
    icon: [
      {
        url: "/stalwart-logo.jpg",
      },
    ],
    apple: "/stalwart-logo.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
