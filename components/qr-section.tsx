"use client"

import { useEffect, useRef } from "react"
import QRCode from "qrcode"
import { WHATSAPP_LINK, BUSINESS_NAME } from "@/lib/products"

export function QrSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, WHATSAPP_LINK, {
        width: 200,
        margin: 2,
        color: {
          dark: "#1a1a1a",
          light: "#ffffff",
        },
        errorCorrectionLevel: "H",
      })
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
