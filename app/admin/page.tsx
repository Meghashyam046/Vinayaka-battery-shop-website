"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ShoppingCart,
  Package,
  MessageSquare,
  ArrowLeft,
  Zap,
  Menu,
  X,
} from "lucide-react"
import { BUSINESS_NAME } from "@/lib/products"
import { OrdersPanel } from "@/components/admin/orders-panel"
import { ProductsPanel } from "@/components/admin/products-panel"
import { ChatPanel } from "@/components/admin/chat-panel"

type Tab = "orders" | "products" | "chat"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>("orders")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const tabs = [
    { id: "orders" as Tab, label: "Orders", icon: ShoppingCart, count: 5 },
    { id: "products" as Tab, label: "Products", icon: Package, count: 12 },
    { id: "chat" as Tab, label: "Chat History", icon: MessageSquare, count: 8 },
  ]

  return (
    <div className="flex min-h-screen bg-muted">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-foreground text-background transition-transform lg:relative lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-3 border-b border-background/10 px-6 py-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Zap className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <p className="text-sm font-bold">{BUSINESS_NAME}</p>
            <p className="text-xs text-background/50">Admin Panel</p>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id)
                setSidebarOpen(false)
              }}
              className={`mb-1 flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "text-background/60 hover:bg-background/10 hover:text-background"
              }`}
            >
              <tab.icon className="h-5 w-5" />
              {tab.label}
              <span
                className={`ml-auto rounded-full px-2 py-0.5 text-xs font-bold ${
                  activeTab === tab.id
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-background/10 text-background/50"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </nav>

        <div className="border-t border-background/10 px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-background/50 transition-colors hover:text-background"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Website
          </Link>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-foreground/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex-1">
        <header className="sticky top-0 z-20 flex items-center gap-4 border-b border-border bg-card px-4 py-3 shadow-sm lg:px-8">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-md p-2 hover:bg-muted lg:hidden"
            aria-label="Open sidebar"
          >
            <Menu className="h-5 w-5 text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">
            {tabs.find((t) => t.id === activeTab)?.label}
          </h1>
        </header>

        <div className="p-4 lg:p-8">
          {activeTab === "orders" && <OrdersPanel />}
          {activeTab === "products" && <ProductsPanel />}
          {activeTab === "chat" && <ChatPanel />}
        </div>
      </div>
    </div>
  )
}
