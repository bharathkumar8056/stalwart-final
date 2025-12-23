import { Ship, Plane, Package, Shield, MapPin, Clock, DollarSign, FileText } from "lucide-react"

export function ShippingSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Global Shipping & Logistics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Reliable international shipping with comprehensive tracking, insurance coverage, and transparent policies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4 p-6 rounded-2xl border-2 border-border bg-card hover:border-primary/30 transition-all">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Ship className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-semibold text-xl">Sea Freight</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sea freight is more common for large, heavy, or bulk shipments over long distances, making it a popular
              choice for larger volumes. Cost-effective for FCL shipments above 15CBM.
            </p>
          </div>

          <div className="space-y-4 p-6 rounded-2xl border-2 border-border bg-card hover:border-primary/30 transition-all">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Plane className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-semibold text-xl">Air Freight</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Air freight often preferred for time-sensitive shipments. Fast delivery for urgent orders requiring quick
              turnaround with expedited customs clearance. Air freight is the more expensive shipping option (double the
              amount comparatively to sea freight).
            </p>
          </div>

          <div className="space-y-4 p-6 rounded-2xl border-2 border-border bg-card hover:border-primary/30 transition-all">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Package className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-semibold text-xl">Secure Packaging</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Strong, durable packaging materials like corrugated cardboard or multi-wall paper bags protect tissues
              from crushing, moisture, dust, and contamination during transit. Customized packaging available.
            </p>
          </div>

          <div className="space-y-4 p-6 rounded-2xl border-2 border-border bg-card hover:border-primary/30 transition-all">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-semibold text-xl">Insurance Coverage</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Protection for goods in transit against risks while goods are often shipped internationally. Insurance is
              essential for protecting the physical shipment and is mandatory for securing cargo.
            </p>
          </div>

          <div className="space-y-4 p-6 rounded-2xl border-2 border-border bg-card hover:border-primary/30 transition-all">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <MapPin className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-semibold text-xl">Real-Time Tracking</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Buyer can monitor and track the cargo's location and condition in real-time from the moment it leaves our
              facility until it reaches its final destination. Regular communication maintained post-shipment.
            </p>
          </div>

          <div className="space-y-4 p-6 rounded-2xl border-2 border-border bg-card hover:border-primary/30 transition-all">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <DollarSign className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-semibold text-xl">Shipping Costs & Customs</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Shipping fees depend on selected method, destination country, package weight, and dimensions. Import
              duties, taxes, and customs fees are buyer's responsibility and vary by country.
            </p>
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-10 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Clock className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold">Lead Time: 2-6 Weeks</h3>
              <p className="text-sm text-muted-foreground">Complete production and delivery timeline</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Typical lead times connected to MOQ depending on order size and logistics. The estimated lead time
              includes production, export processing, shipping, and customs clearance. Occasional delays due to weather
              or port congestion may extend delivery time.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4 p-4 rounded-xl bg-primary/5">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-semibold mb-2">Manufacturing & Production: 2-3 weeks</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Which includes the specific process of manufacturing and packaging of the product. These steps are
                    specialized and take time before the product is ready for shipment. If the demand is more essential
                    or immediate, we will process within few days and make it ready to dispatch early depending on the
                    order quantity, preferably done by air freight.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-primary/5">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-semibold mb-2">Customs Clearance & Shipping: 1-2 weeks</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Depending on mode of transport (sea freight being common), customs clearance and transit to the
                    port, loading, and overseas shipping. Includes potential customs delays.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="font-semibold mb-4">Sea Freight Transit Times by Destination:</h4>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-secondary/30">
                  <div className="font-serif text-2xl font-bold text-primary">30-45</div>
                  <div className="text-sm text-muted-foreground">Days to USA</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary/30">
                  <div className="font-serif text-2xl font-bold text-primary">20-35</div>
                  <div className="text-sm text-muted-foreground">Days to Europe</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary/30">
                  <div className="font-serif text-2xl font-bold text-primary">10-30</div>
                  <div className="text-sm text-muted-foreground">Days to China</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Payment Terms */}
          <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold">Payment Terms</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-primary/5">
                <h4 className="font-semibold mb-2">Letter of Credit (LC)</h4>
                <p className="text-sm text-muted-foreground">
                  We abide by the standard protocols specified within the LC agreement. Preferred payment method for
                  international transactions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-primary/5">
                <h4 className="font-semibold mb-2">Direct Remittance</h4>
                <p className="text-sm text-muted-foreground">
                  An advance of 50% is required once your order is confirmed. The rest of the amount should be settled
                  after products are shipped but before we release shipping documents.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <span className="text-sm font-medium">Payment Currency</span>
                <span className="text-sm font-bold text-primary">US Dollars (USD)</span>
              </div>
            </div>
          </div>

          {/* MOQ */}
          <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Package className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold">Minimum Order Quantity</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-primary/5">
                <h4 className="font-semibold mb-2">FCL Based Orders</h4>
                <p className="text-sm text-muted-foreground">
                  MOQ is preferable FCL based which is above 15CBM as a larger quantity for bulk shipments.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-primary/5">
                <h4 className="font-semibold mb-2">B2B Sales (Business to Business)</h4>
                <p className="text-sm text-muted-foreground">
                  MOQ starts from 500-1000 packs for wholesale and business orders.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-primary/5">
                <h4 className="font-semibold mb-2">B2C Sales (Business to Customer)</h4>
                <p className="text-sm text-muted-foreground">
                  MOQ starts from pack of 10-500 for direct customer orders and smaller quantities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
