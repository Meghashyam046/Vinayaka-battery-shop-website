export interface Product {
  id: string
  name: string
  category: string
  price: string
  warranty: string
  image: string
  specs: string[]
} 

export const WHATSAPP_NUMBER = "917993148967"
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`
export const SECONDARY_NUMBER = "9032532392"
export const BUSINESS_NAME = "Sri Vinayaka Enterprises"

export function getWhatsAppOrderLink(productName: string) {
  const message = encodeURIComponent(
    `New Order - ${BUSINESS_NAME}\nProduct: ${productName}\nQuantity: 1\nCustomer Name: \nLocation: `
  )
  return `${WHATSAPP_LINK}?text=${message}`
}

export const categories = [
  {
    id: "exide-inverter",
    name: "Exide Inverter Batteries",
    description: "Long-lasting tubular batteries for uninterrupted power",
    image: "/images/exide-inverter.jpg",
  },
  {
    id: "sf-sonic",
    name: "SF Sonic Batteries",
    description: "High-performance batteries with advanced technology",
    image: "/images/sf-sonic.jpg",
  },
  {
    id: "car",
    name: "Car Batteries",
    description: "Reliable starting power for all vehicle types",
    image: "/images/car-battery.jpg",
  },
  {
    id: "bike",
    name: "Bike Batteries",
    description: "Compact power solutions for two-wheelers",
    image: "/images/bike-battery.jpg",
  },
]

export const products: Product[] = [
  // Exide Inverter Batteries
  {
    id: "exide-it500",
    name: "Exide Inva Tubular IT500",
    category: "exide-inverter",
    price: "12,500",
    warranty: "36 Months",
    image: "/images/exide-inverter.jpg",
    specs: ["150Ah", "Tall Tubular", "Low Maintenance"],
  },
  {
    id: "exide-it660",
    name: "Exide Inva Tubular IT660",
    category: "exide-inverter",
    price: "15,800",
    warranty: "48 Months",
    image: "/images/exide-inverter.jpg",
    specs: ["180Ah", "Tall Tubular", "Extra Long Life"],
  },
  {
    id: "exide-it750",
    name: "Exide Inva Tubular IT750",
    category: "exide-inverter",
    price: "18,200",
    warranty: "60 Months",
    image: "/images/exide-inverter.jpg",
    specs: ["200Ah", "Tall Tubular", "Premium Range"],
  },
  // SF Sonic Batteries
  {
    id: "sf-pc1000l",
    name: "SF Sonic PowerCharge PC1000L",
    category: "sf-sonic",
    price: "11,900",
    warranty: "36 Months",
    image: "/images/sf-sonic.jpg",
    specs: ["150Ah", "Flat Plate", "Flash Technology"],
  },
  {
    id: "sf-pc1500tt",
    name: "SF Sonic PowerCharge PC1500TT",
    category: "sf-sonic",
    price: "14,500",
    warranty: "48 Months",
    image: "/images/sf-sonic.jpg",
    specs: ["150Ah", "Tall Tubular", "ProBiQ Technology"],
  },
  {
    id: "sf-pc2000tt",
    name: "SF Sonic PowerCharge PC2000TT",
    category: "sf-sonic",
    price: "17,800",
    warranty: "60 Months",
    image: "/images/sf-sonic.jpg",
    specs: ["200Ah", "Tall Tubular", "Next-Gen Tech"],
  },
  // Car Batteries
  {
    id: "exide-mileage-ml38b20l",
    name: "Exide Mileage ML38B20L",
    category: "car",
    price: "4,200",
    warranty: "24 Months",
    image: "/images/car-battery.jpg",
    specs: ["35Ah", "Hatchback/Sedan", "Maintenance Free"],
  },
  {
    id: "exide-mileage-ml55d23l",
    name: "Exide Mileage ML55D23L",
    category: "car",
    price: "6,800",
    warranty: "36 Months",
    image: "/images/car-battery.jpg",
    specs: ["55Ah", "SUV/MUV", "Long Range"],
  },
  {
    id: "exide-matrix-mt75d23l",
    name: "Exide Matrix MTRED75D23L",
    category: "car",
    price: "8,500",
    warranty: "48 Months",
    image: "/images/car-battery.jpg",
    specs: ["68Ah", "Diesel SUV", "Premium"],
  },
  // Bike Batteries
  {
    id: "exide-xltz4",
    name: "Exide Xplore XLTZ4",
    category: "bike",
    price: "1,200",
    warranty: "18 Months",
    image: "/images/bike-battery.jpg",
    specs: ["3Ah", "100cc Bikes", "Sealed"],
  },
  {
    id: "exide-xltz5",
    name: "Exide Xplore XLTZ5",
    category: "bike",
    price: "1,650",
    warranty: "24 Months",
    image: "/images/bike-battery.jpg",
    specs: ["4Ah", "125-150cc Bikes", "VRLA"],
  },
  {
    id: "exide-xltz7",
    name: "Exide Xplore XLTZ7",
    category: "bike",
    price: "2,100",
    warranty: "24 Months",
    image: "/images/bike-battery.jpg",
    specs: ["6Ah", "200cc+ Bikes", "Heavy Duty"],
  },
]
