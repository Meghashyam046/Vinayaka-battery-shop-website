import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Panel | Sri Vinayaka Enterprises",
  description: "Manage orders, products, and chat history",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
