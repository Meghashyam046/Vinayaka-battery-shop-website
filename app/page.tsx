import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategorySection } from "@/components/category-section"
import { ProductSection } from "@/components/product-section"
import { QrSection } from "@/components/qr-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CategorySection />
      <ProductSection />
      <QrSection />
      <ContactSection />
      <Footer />
      <WhatsAppFab />
    </main>
  )
}
