"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle } from "lucide-react"

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    quantity: "",
    requirements: "",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Create WhatsApp message
    const message = `
*Quote Request*

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Product: ${formData.product}
Quantity: ${formData.quantity}

Requirements:
${formData.requirements}
    `.trim()

    // Open WhatsApp
    window.open(`https://wa.me/919677199951?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="quote-name">Full Name *</Label>
            <Input
              id="quote-name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quote-email">Email Address *</Label>
            <Input
              id="quote-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quote-phone">Phone Number *</Label>
            <Input
              id="quote-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 234 567 8900"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quote-company">Company Name</Label>
            <Input
              id="quote-company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="ABC Corporation"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quote-product">Product *</Label>
            <Select value={formData.product} onValueChange={(value) => setFormData({ ...formData, product: value })}>
              <SelectTrigger id="quote-product">
                <SelectValue placeholder="Select a product" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="facial-tissues">Facial Tissues</SelectItem>
                <SelectItem value="paper-napkins">Paper Napkins</SelectItem>
                <SelectItem value="kitchen-towels">Kitchen Towels</SelectItem>
                <SelectItem value="toilet-rolls">Toilet Rolls</SelectItem>
                <SelectItem value="couch-rolls">Couch Rolls / Bed Rolls</SelectItem>
                <SelectItem value="mixed">Mixed Products</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quote-quantity">Estimated Quantity *</Label>
            <Input
              id="quote-quantity"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              placeholder="e.g., 1000 packs or 15 CBM"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quote-requirements">Additional Requirements</Label>
            <Textarea
              id="quote-requirements"
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              placeholder="Packaging preferences, shipping destination, customization needs, etc."
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#20BA5A]">
            <MessageCircle className="mr-2 h-4 w-4" />
            Get Quote via WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
