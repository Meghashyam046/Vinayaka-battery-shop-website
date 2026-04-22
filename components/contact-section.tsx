"use client"

import { Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import { WHATSAPP_LINK, BUSINESS_NAME, SECONDARY_NUMBER } from "@/lib/products"

export function ContactSection() {
  return (
    <section id="contact" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary"> 
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            <span className="text-balance">Contact Us</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Reach out to us for the best battery prices, bulk orders, or any queries.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-1 font-bold text-card-foreground">Phone</h3>
            <p className="text-sm text-muted-foreground">7993148967</p>
            <p className="text-sm text-muted-foreground">{SECONDARY_NUMBER}</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-1 font-bold text-card-foreground">WhatsApp</h3>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Chat with us now
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-1 font-bold text-card-foreground">Location</h3>
            <p className="text-sm text-muted-foreground">{BUSINESS_NAME}</p>
            <p className="text-sm text-muted-foreground">Your Local Battery Store</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-1 font-bold text-card-foreground">Business Hours</h3>
            <p className="text-sm text-muted-foreground">Mon - Sat: 9AM - 8PM</p>
            <p className="text-sm text-muted-foreground">Sun: 10AM - 5PM</p>
          </div>
        </div>
      </div>
    </section>
  )
}
