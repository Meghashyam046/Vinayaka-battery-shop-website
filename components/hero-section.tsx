"use client"

import Image from "next/image"
import { Phone, ShieldCheck, Truck, Award } from "lucide-react"
import { WHATSAPP_LINK, BUSINESS_NAME } from "@/lib/products"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-banner.jpg"
          alt={`${BUSINESS_NAME} banner`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-medium text-secondary backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4" />
            Authorized Dealer
          </div>

          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground lg:text-6xl">
            <span className="text-balance">Power Your Life With Premium Batteries</span>
          </h1>

          <p className="mb-8 max-w-lg text-lg leading-relaxed text-primary-foreground/80">
            Trusted dealer of Exide &amp; SF Sonic batteries for cars, bikes, and inverters. Best prices with warranty and free delivery.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-xl bg-secondary px-8 py-3.5 text-base font-bold text-secondary-foreground shadow-lg transition-transform hover:scale-105"
            >
              Browse Products
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary-foreground/30 bg-primary-foreground/10 px-8 py-3.5 text-base font-bold text-primary-foreground backdrop-blur-sm transition-transform hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Order on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, label: "Genuine Products", sub: "100% Authentic" },
            { icon: Truck, label: "Free Delivery", sub: "Across City" },
            { icon: Award, label: "Best Warranty", sub: "Up to 60 Months" },
            { icon: Phone, label: "24/7 Support", sub: "Always Available" },
          ].map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-3 rounded-xl bg-primary-foreground/10 p-4 backdrop-blur-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/20">
                <feature.icon className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-foreground">{feature.label}</p>
                <p className="text-xs text-primary-foreground/60">{feature.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
