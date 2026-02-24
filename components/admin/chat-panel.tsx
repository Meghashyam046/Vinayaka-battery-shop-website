"use client"

import { User, Store } from "lucide-react"

const sampleChats = [
  {
    id: 1,
    customer: "Rajesh Kumar",
    phone: "+91 93980 92392",
    messages: [
      { from: "customer", text: "Hi", time: "10:00 AM" },
      {
        from: "bot",
        text: "Welcome to Sri Vinayaka Enterprises! How can we help?\n1. View Batteries\n2. Price Enquiry\n3. Contact Owner\n4. Location",
        time: "10:00 AM",
      },
      { from: "customer", text: "1", time: "10:01 AM" },
      {
        from: "bot",
        text: "Here are our battery categories:\n- Exide Inverter Batteries\n- SF Sonic Batteries\n- Car Batteries\n- Bike Batteries\n\nReply with category name for details.",
        time: "10:01 AM",
      },
    ],
  },
  {
    id: 2,
    customer: "Suresh Reddy",
    phone: "+91 90325 32392",
    messages: [
      { from: "customer", text: "Hi", time: "11:30 AM" },
      {
        from: "bot",
        text: "Welcome to Sri Vinayaka Enterprises! How can we help?\n1. View Batteries\n2. Price Enquiry\n3. Contact Owner\n4. Location",
        time: "11:30 AM",
      },
      { from: "customer", text: "2", time: "11:31 AM" },
      {
        from: "bot",
        text: "Please tell us which battery you need a price for, and we will get back to you shortly!",
        time: "11:31 AM",
      },
      { from: "customer", text: "Exide IT500 price?", time: "11:32 AM" },
    ],
  },
  {
    id: 3,
    customer: "Priya Sharma",
    phone: "+91 98765 43210",
    messages: [
      { from: "customer", text: "Hi", time: "2:00 PM" },
      {
        from: "bot",
        text: "Welcome to Sri Vinayaka Enterprises! How can we help?\n1. View Batteries\n2. Price Enquiry\n3. Contact Owner\n4. Location",
        time: "2:00 PM",
      },
      { from: "customer", text: "3", time: "2:01 PM" },
      {
        from: "bot",
        text: "You can reach the owner at:\nPhone: 7993148967\nWhatsApp: wa.me/917993148967",
        time: "2:01 PM",
      },
    ],
  },
]

export function ChatPanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-1">
      {sampleChats.map((chat) => (
        <div
          key={chat.id}
          className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
        >
          <div className="flex items-center gap-3 border-b border-border bg-muted px-5 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
              <User className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-bold text-card-foreground">{chat.customer}</p>
              <p className="text-xs text-muted-foreground">{chat.phone}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 p-5">
            {chat.messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 ${
                  msg.from === "bot" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                    msg.from === "bot" ? "bg-primary/10" : "bg-muted"
                  }`}
                >
                  {msg.from === "bot" ? (
                    <Store className="h-3.5 w-3.5 text-primary" />
                  ) : (
                    <User className="h-3.5 w-3.5 text-muted-foreground" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] rounded-xl px-4 py-2.5 ${
                    msg.from === "bot"
                      ? "bg-muted text-card-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  <p className="whitespace-pre-line text-sm">{msg.text}</p>
                  <p
                    className={`mt-1 text-right text-xs ${
                      msg.from === "bot"
                        ? "text-muted-foreground"
                        : "text-primary-foreground/60"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
