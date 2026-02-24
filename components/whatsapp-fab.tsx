"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Store, User, ShoppingCart } from "lucide-react"
import { WHATSAPP_LINK, BUSINESS_NAME, categories, products, getWhatsAppOrderLink } from "@/lib/products"

type Message = {
  from: "bot" | "customer"
  text: string
  time: string
  buttons?: { label: string; value: string }[]
}

function getCurrentTime() {
  return new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
}

const WELCOME_MESSAGE: Message = {
  from: "bot",
  text: `Welcome to ${BUSINESS_NAME}! We are your trusted battery dealer.\n\nHow can we help you today?`,
  time: getCurrentTime(),
  buttons: [
    { label: "View Batteries", value: "view_batteries" },
    { label: "Price Enquiry", value: "price_enquiry" },
    { label: "Book Now", value: "book_now" },
    { label: "Contact Owner", value: "contact_owner" },
    { label: "Our Location", value: "location" },
  ],
}

export function WhatsAppFab() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [started, setStarted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  function startChat() {
    if (started) return
    setStarted(true)
    const hiMsg: Message = { from: "customer", text: "Hi", time: getCurrentTime() }
    setMessages([hiMsg])
    setTimeout(() => {
      setMessages((prev) => [...prev, { ...WELCOME_MESSAGE, time: getCurrentTime() }])
    }, 600)
  }

  function handleOpen() {
    setIsOpen(true)
    if (!started) {
      startChat()
    }
  }

  function handleBotReply(value: string) {
    const time = getCurrentTime()

    if (value === "view_batteries") {
      const categoryList = categories.map((c) => `- ${c.name}`).join("\n")
      const reply: Message = {
        from: "bot",
        text: `Here are our battery categories:\n\n${categoryList}\n\nSelect a category to see products:`,
        time,
        buttons: [
          ...categories.map((c) => ({ label: c.name.replace(" Batteries", ""), value: `cat_${c.id}` })),
          { label: "Back to Menu", value: "main_menu" },
        ],
      }
      setMessages((prev) => [...prev, reply])
    } else if (value.startsWith("cat_")) {
      const catId = value.replace("cat_", "")
      const catProducts = products.filter((p) => p.category === catId)
      const cat = categories.find((c) => c.id === catId)
      if (catProducts.length > 0) {
        const productList = catProducts
          .map((p) => `*${p.name}*\nPrice: Rs.${p.price} | Warranty: ${p.warranty}\nSpecs: ${p.specs.join(", ")}`)
          .join("\n\n")
        const reply: Message = {
          from: "bot",
          text: `${cat?.name || "Products"}:\n\n${productList}`,
          time,
          buttons: [
            ...catProducts.map((p) => ({ label: `Book ${p.name.split(" ").slice(-1)[0]}`, value: `book_${p.id}` })),
            { label: "Back to Categories", value: "view_batteries" },
          ],
        }
        setMessages((prev) => [...prev, reply])
      }
    } else if (value.startsWith("book_")) {
      const productId = value.replace("book_", "")
      const product = products.find((p) => p.id === productId)
      if (product) {
        const reply: Message = {
          from: "bot",
          text: `Great choice! You selected:\n\n*${product.name}*\nPrice: Rs.${product.price}\nWarranty: ${product.warranty}\n\nClick below to complete your order on WhatsApp:`,
          time,
          buttons: [
            { label: "Order on WhatsApp", value: `order_wa_${product.id}` },
            { label: "Back to Menu", value: "main_menu" },
          ],
        }
        setMessages((prev) => [...prev, reply])
      }
    } else if (value.startsWith("order_wa_")) {
      const productId = value.replace("order_wa_", "")
      const product = products.find((p) => p.id === productId)
      if (product) {
        window.open(getWhatsAppOrderLink(product.name), "_blank")
      }
      return
    } else if (value === "book_now") {
      const reply: Message = {
        from: "bot",
        text: "To book a battery, please select a category first:",
        time,
        buttons: [
          ...categories.map((c) => ({ label: c.name.replace(" Batteries", ""), value: `cat_${c.id}` })),
          { label: "Back to Menu", value: "main_menu" },
        ],
      }
      setMessages((prev) => [...prev, reply])
    } else if (value === "price_enquiry") {
      const reply: Message = {
        from: "bot",
        text: "Please select a category to see prices:",
        time,
        buttons: [
          ...categories.map((c) => ({ label: c.name.replace(" Batteries", ""), value: `cat_${c.id}` })),
          { label: "Back to Menu", value: "main_menu" },
        ],
      }
      setMessages((prev) => [...prev, reply])
    } else if (value === "contact_owner") {
      const reply: Message = {
        from: "bot",
        text: `You can reach the owner at:\n\nPhone: 7993148967\nWhatsApp: wa.me/917993148967\n\nOr click below to chat directly:`,
        time,
        buttons: [
          { label: "Chat on WhatsApp", value: "open_wa" },
          { label: "Back to Menu", value: "main_menu" },
        ],
      }
      setMessages((prev) => [...prev, reply])
    } else if (value === "open_wa") {
      window.open(WHATSAPP_LINK, "_blank")
      return
    } else if (value === "location") {
      const reply: Message = {
        from: "bot",
        text: `Sri Vinayaka Enterprises\nOpposite Ramalayam, Main Road\nNear Bus Stand\n\nOpen: Mon-Sat, 9:00 AM - 8:00 PM`,
        time,
        buttons: [{ label: "Back to Menu", value: "main_menu" }],
      }
      setMessages((prev) => [...prev, reply])
    } else if (value === "main_menu") {
      setMessages((prev) => [...prev, { ...WELCOME_MESSAGE, time: getCurrentTime() }])
    }
  }

  function handleButtonClick(button: { label: string; value: string }) {
    const customerMsg: Message = { from: "customer", text: button.label, time: getCurrentTime() }
    setMessages((prev) => [...prev, customerMsg])
    setTimeout(() => {
      handleBotReply(button.value)
    }, 400)
  }

  function handleSend() {
    const trimmed = input.trim()
    if (!trimmed) return
    const customerMsg: Message = { from: "customer", text: trimmed, time: getCurrentTime() }
    setMessages((prev) => [...prev, customerMsg])
    setInput("")

    const lower = trimmed.toLowerCase()
    setTimeout(() => {
      if (["hi", "hello", "hey", "start", "menu"].includes(lower)) {
        setMessages((prev) => [...prev, { ...WELCOME_MESSAGE, time: getCurrentTime() }])
      } else if (["1", "batteries", "view", "products"].some((k) => lower.includes(k))) {
        handleBotReply("view_batteries")
      } else if (["2", "price", "cost", "rate"].some((k) => lower.includes(k))) {
        handleBotReply("price_enquiry")
      } else if (["3", "book", "order", "buy"].some((k) => lower.includes(k))) {
        handleBotReply("book_now")
      } else if (["4", "contact", "owner", "call", "phone"].some((k) => lower.includes(k))) {
        handleBotReply("contact_owner")
      } else if (["5", "location", "address", "where", "map"].some((k) => lower.includes(k))) {
        handleBotReply("location")
      } else {
        const reply: Message = {
          from: "bot",
          text: "Sorry, I didn't understand that. Please choose from the menu below:",
          time: getCurrentTime(),
          buttons: WELCOME_MESSAGE.buttons,
        }
        setMessages((prev) => [...prev, reply])
      }
    }, 400)
  }

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 flex h-[520px] w-[360px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl sm:right-6">
          {/* Chat Header */}
          <div className="flex items-center justify-between bg-[#075E54] px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <Store className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{BUSINESS_NAME}</p>
                <p className="text-xs text-white/70">Online | Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C9C9C' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundColor: "#ECE5DD",
            }}
          >
            <div className="flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === "bot" ? "justify-start" : "justify-end"}`}>
                  <div className="flex max-w-[85%] flex-col">
                    <div
                      className={`rounded-lg px-3 py-2 text-sm shadow-sm ${
                        msg.from === "bot"
                          ? "rounded-tl-none bg-white text-[#303030]"
                          : "rounded-tr-none bg-[#DCF8C6] text-[#303030]"
                      }`}
                    >
                      <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                      <p className="mt-1 text-right text-[10px] text-[#999]">{msg.time}</p>
                    </div>
                    {/* Quick Reply Buttons */}
                    {msg.from === "bot" && msg.buttons && i === messages.length - 1 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {msg.buttons.map((btn, j) => (
                          <button
                            key={j}
                            onClick={() => handleButtonClick(btn)}
                            className="flex items-center gap-1.5 rounded-full border border-[#25D366] bg-white px-3 py-1.5 text-xs font-medium text-[#075E54] shadow-sm transition-colors hover:bg-[#25D366] hover:text-white"
                          >
                            {btn.value.startsWith("book_") || btn.value.startsWith("order_wa_") ? (
                              <ShoppingCart className="h-3 w-3" />
                            ) : null}
                            {btn.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-border bg-[#F0F0F0] px-3 py-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 rounded-full bg-white px-4 py-2 text-sm text-[#303030] placeholder:text-[#999] focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white transition-colors hover:bg-[#128C7E]"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* FAB Button */}
      <button
        onClick={handleOpen}
        className="fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 sm:right-6"
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
      </button>
    </>
  )
}
