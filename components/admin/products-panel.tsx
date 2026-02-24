"use client"

import { useState } from "react"
import Image from "next/image"
import { Save, Pencil, X } from "lucide-react"
import { products as initialProducts } from "@/lib/products"

export function ProductsPanel() {
  const [items, setItems] = useState(
    initialProducts.map((p) => ({ ...p, editing: false, editPrice: p.price }))
  )

  function startEdit(id: string) {
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, editing: true, editPrice: p.price } : p))
    )
  }

  function cancelEdit(id: string) {
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, editing: false } : p))
    )
  }

  function savePrice(id: string) {
    setItems((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, price: p.editPrice, editing: false } : p
      )
    )
  }

  function updateEditPrice(id: string, value: string) {
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, editPrice: value } : p))
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((product) => (
        <div
          key={product.id}
          className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
        >
          <div className="relative aspect-[16/9] overflow-hidden bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="mb-1 flex flex-wrap gap-1">
              {product.specs.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
            <h3 className="mb-2 text-sm font-bold text-card-foreground">
              {product.name}
            </h3>

            {product.editing ? (
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-card-foreground">{"₹"}</span>
                <input
                  type="text"
                  value={product.editPrice}
                  onChange={(e) => updateEditPrice(product.id, e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground"
                />
                <button
                  onClick={() => savePrice(product.id)}
                  className="rounded-lg bg-primary p-2 text-primary-foreground transition-colors hover:bg-primary/90"
                  aria-label="Save price"
                >
                  <Save className="h-4 w-4" />
                </button>
                <button
                  onClick={() => cancelEdit(product.id)}
                  className="rounded-lg bg-muted p-2 text-muted-foreground transition-colors hover:bg-muted/80"
                  aria-label="Cancel editing"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-primary">
                  {"₹"}{product.price}
                </span>
                <button
                  onClick={() => startEdit(product.id)}
                  className="flex items-center gap-1.5 rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/80"
                >
                  <Pencil className="h-3.5 w-3.5" />
                  Edit Price
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
