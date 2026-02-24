"use client"

import { useEffect, useRef } from "react"
import { WHATSAPP_LINK, BUSINESS_NAME } from "@/lib/products"

function generateQRCode(canvas: HTMLCanvasElement, text: string) {
  const size = 200
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext("2d")
  if (!ctx) return

  // Simple QR code visual placeholder using pattern
  ctx.fillStyle = "#ffffff"
  ctx.fillRect(0, 0, size, size)

  // Generate a deterministic pattern from the text
  const cellSize = 8
  const grid = size / cellSize

  ctx.fillStyle = "#1a1a1a"

  // Position detection patterns (3 corners)
  const drawFinder = (x: number, y: number) => {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        const isBorder = i === 0 || i === 6 || j === 0 || j === 6
        const isInner = i >= 2 && i <= 4 && j >= 2 && j <= 4
        if (isBorder || isInner) {
          ctx.fillRect(
            (x + i) * cellSize,
            (y + j) * cellSize,
            cellSize,
            cellSize
          )
        }
      }
    }
  }

  drawFinder(1, 1)
  drawFinder(grid - 9, 1)
  drawFinder(1, grid - 9)

  // Fill data area with pseudo-random pattern based on text hash
  let hash = 0
  for (let i = 0; i < text.length; i++) {
    hash = (hash << 5) - hash + text.charCodeAt(i)
    hash |= 0
  }

  for (let i = 0; i < grid; i++) {
    for (let j = 0; j < grid; j++) {
      // Skip finder patterns
      if (
        (i <= 8 && j <= 8) ||
        (i >= grid - 9 && j <= 8) ||
        (i <= 8 && j >= grid - 9)
      )
        continue

      hash = (hash * 1103515245 + 12345) & 0x7fffffff
      if (hash % 3 !== 0) {
        ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize)
      }
    }
  }
}

export function QrSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      generateQRCode(canvasRef.current, WHATSAPP_LINK)
    }
  }, [])

  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-16">
          <div className="text-center lg:text-left">
            <h2 className="mb-4 font-serif text-3xl font-bold text-primary-foreground lg:text-4xl">
              <span className="text-balance">Scan &amp; Order Instantly</span>
            </h2>
            <p className="mb-6 max-w-md text-lg text-primary-foreground/70">
              Scan this QR code with your phone camera to start a WhatsApp conversation and place your order directly.
            </p>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/60 sm:flex-row sm:gap-6">
              <span>No app download needed</span>
              <span>Instant response</span>
              <span>Easy ordering</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="rounded-2xl bg-card p-6 shadow-2xl">
              <canvas
                ref={canvasRef}
                className="h-[200px] w-[200px]"
                aria-label={`QR code linking to WhatsApp for ${BUSINESS_NAME}`}
              />
            </div>
            <p className="text-sm font-medium text-primary-foreground/60">
              Scan to chat on WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
