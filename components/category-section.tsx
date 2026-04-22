"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { categories } from "@/lib/products"

export function CategorySection() {
  return (
    <section id="categories" className="bg-background py-16 lg:py-24"> 
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            <span className="text-balance">Battery Categories</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From inverters to two-wheelers, we carry the complete range of trusted battery brands for every need.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#products`}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="mb-1 text-lg font-bold text-card-foreground">{cat.name}</h3>
                <p className="mb-3 text-sm text-muted-foreground">{cat.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-primary/80">
                  View Products
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
