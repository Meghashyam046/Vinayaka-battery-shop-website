import { Zap } from "lucide-react"
import { BUSINESS_NAME } from "@/lib/products"

export function Footer() {
  return (
    <footer className="bg-foreground py-10 text-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Zap className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-serif text-lg font-bold">{BUSINESS_NAME}</span>
          </div>
          <p className="max-w-md text-sm text-background/60">
            Your trusted partner for premium batteries. Authorized dealer of Exide &amp; SF Sonic with doorstep delivery and installation.
          </p>
          <div className="flex gap-6 text-sm text-background/40">
            <a href="#home" className="transition-colors hover:text-background">Home</a>
            <a href="#categories" className="transition-colors hover:text-background">Categories</a>
            <a href="#products" className="transition-colors hover:text-background">Products</a>
            <a href="#contact" className="transition-colors hover:text-background">Contact</a>
          </div>
          <p className="mt-4 text-xs text-background/30">
            {`© ${new Date().getFullYear()} ${BUSINESS_NAME}. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
