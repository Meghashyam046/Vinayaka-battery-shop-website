"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, ShieldCheck, Tag } from "lucide-react"
import { products, categories, getWhatsAppOrderLink } from "@/lib/products"

export function ProductSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <section id="products" className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Our Collection
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            <span className="text-balance">Premium Batteries</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Choose from our wide range of genuine batteries with industry-leading warranty and support.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-card text-muted-foreground hover:bg-card/80"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-card/80"
              }`}
            >
              {cat.name.replace(" Batteries", "")}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-md">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {product.warranty}
                </div>
              </div>

              <div className="p-5">
                <div className="mb-2 flex flex-wrap gap-1.5">
                  {product.specs.map((spec) => (
                    <span
                      key={spec}
                      className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <h3 className="mb-2 text-lg font-bold text-card-foreground">
                  {product.name}
                </h3>

                <div className="mb-4 flex items-center gap-2">
                  <Tag className="h-4 w-4 text-primary" />
                  <span className="text-2xl font-bold text-primary">
                    {"₹"}{product.price}
                  </span>
                  <span className="text-sm text-muted-foreground">onwards</span>
                </div>

                <a
                  href={getWhatsAppOrderLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:scale-[1.02] hover:shadow-md"
                >
                  <Phone className="h-4 w-4" />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
