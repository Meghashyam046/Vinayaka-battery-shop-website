"use client"

import { Clock, CheckCircle2, XCircle, User, MapPin, Package } from "lucide-react"

const sampleOrders = [
  {
    id: "ORD-001",
    customer: "Rajesh Kumar",
    product: "Exide Inva Tubular IT500",
    quantity: 1,
    price: "12,500",
    location: "Hyderabad",
    status: "pending" as const,
    date: "2026-02-24",
  },
  {
    id: "ORD-002",
    customer: "Suresh Reddy",
    product: "Exide Mileage ML38B20L",
    quantity: 2,
    price: "8,400",
    location: "Secunderabad",
    status: "confirmed" as const,
    date: "2026-02-23",
  },
  {
    id: "ORD-003",
    customer: "Priya Sharma",
    product: "SF Sonic PowerCharge PC1500TT",
    quantity: 1,
    price: "14,500",
    location: "Kukatpally",
    status: "delivered" as const,
    date: "2026-02-22",
  },
  {
    id: "ORD-004",
    customer: "Anil Yadav",
    product: "Exide Xplore XLTZ5",
    quantity: 1,
    price: "1,650",
    location: "Ameerpet",
    status: "pending" as const,
    date: "2026-02-24",
  },
  {
    id: "ORD-005",
    customer: "Kavitha Devi",
    product: "Exide Inva Tubular IT750",
    quantity: 1,
    price: "18,200",
    location: "Dilsukhnagar",
    status: "confirmed" as const,
    date: "2026-02-23",
  },
]

const statusStyles = {
  pending: {
    bg: "bg-secondary/30",
    text: "text-secondary-foreground",
    icon: Clock,
    label: "Pending",
  },
  confirmed: {
    bg: "bg-primary/10",
    text: "text-primary",
    icon: CheckCircle2,
    label: "Confirmed",
  },
  delivered: {
    bg: "bg-muted",
    text: "text-muted-foreground",
    icon: CheckCircle2,
    label: "Delivered",
  },
}

export function OrdersPanel() {
  return (
    <div>
      {/* Stats */}
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Total Orders</p>
          <p className="mt-1 text-3xl font-bold text-card-foreground">5</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Pending</p>
          <p className="mt-1 text-3xl font-bold text-primary">2</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Revenue</p>
          <p className="mt-1 text-3xl font-bold text-card-foreground">
            {"₹"}55,250
          </p>
        </div>
      </div>

      {/* Orders List */}
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Order
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Customer
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Product
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Amount
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {sampleOrders.map((order) => {
                const style = statusStyles[order.status]
                return (
                  <tr
                    key={order.id}
                    className="border-b border-border last:border-b-0 hover:bg-muted/50"
                  >
                    <td className="px-5 py-4">
                      <span className="text-sm font-bold text-card-foreground">
                        {order.id}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {order.date}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                          <User className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <span className="block text-sm font-medium text-card-foreground">
                            {order.customer}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {order.location}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="flex items-center gap-1 text-sm text-card-foreground">
                        <Package className="h-3.5 w-3.5 text-muted-foreground" />
                        {order.product}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Qty: {order.quantity}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm font-semibold text-card-foreground">
                      {"₹"}{order.price}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${style.bg} ${style.text}`}
                      >
                        <style.icon className="h-3.5 w-3.5" />
                        {style.label}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
