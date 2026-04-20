export type RouteFare = {
  route: string;
  vehicle: string;
  priceLabel: string;
  note?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type NavigationItem = {
  label: string;
  href: string;
  featured?: boolean;
};


export type ServiceItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
  whatsappMessage: string;
};

export type ServiceArea = {
  name: string;
  copy: string;
};


const navigation: NavigationItem[] = [
  { label: "Home",     href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing",  href: "#pricing", featured: true },
  { label: "About",    href: "#about" },
  { label: "Contact",  href: "#contact" },
];


const routeFares: RouteFare[] = [
  {
    route: "Panchkula to Delhi",
    vehicle: "Sedan",
    priceLabel: "Rs. 3700",
  },
  {
    route: "Panchkula to Delhi",
    vehicle: "SUV Ertiga",
    priceLabel: "Rs. 4700",
  },
  {
    route: "Panchkula to Delhi",
    vehicle: "Innova Crysta",
    priceLabel: "Rs. 6700",
  },
  {
    route: "Panchkula to Delhi",
    vehicle: "Innova Hycross Hybrid",
    priceLabel: "Rs. 7700",
  },
  {
    route: "Delhi to Chandigarh",
    vehicle: "Sedan",
    priceLabel: "Rs. 3500",
    note: "Parking extra",
  },
];

const services: ServiceItem[] = [
  {
    title: "Airport Taxi Service",
    description:
      "Smooth airport drop and pickup support for Chandigarh Airport with direct call and WhatsApp booking.",
    image: "/images/airport-cab.png",
    alt: "Airport taxi cab ready for pickup near Chandigarh airport terminal",
    badge: "Airport Pickup",
    whatsappMessage:
      "Hi, I need an airport taxi. Please share fare and availability.",
  },
  {
    title: "Outstation Cabs",
    description:
      "Comfortable rides for Delhi, nearby cities and planned route bookings with clear pricing visibility.",
    image: "/images/outstation-cab.png",
    alt: "Outstation taxi cab on a highway route for Delhi travel",
    badge: "Delhi Routes",
    whatsappMessage:
      "Hi, I need an outstation cab. Please share fare and available car options.",
  },
  {
    title: "Local City Travel",
    description:
      "Dependable taxi support for Panchkula, Chandigarh and Mohali for personal visits, errands and day travel.",
    image: "/images/hero-cab.png",
    alt: "Local taxi sedan on a clean city road in Panchkula or Chandigarh",
    badge: "City Rides",
    whatsappMessage:
      "Hi, I need a local cab. Please share fare and availability.",
  },
];


const serviceAreas: ServiceArea[] = [
  {
    name: "Panchkula",
    copy:
      "Local pickup support from Sector 20 and nearby areas with quick booking response for city and route rides.",
  },
  {
    name: "Chandigarh",
    copy:
      "Convenient booking for city travel, airport runs and Delhi transfers with clean and comfortable car options.",
  },
  {
    name: "Mohali",
    copy:
      "Reliable cabs for local travel, airport service and outstation bookings with simple call and WhatsApp support.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Do you provide cab service in Panchkula, Chandigarh and Mohali?",
    answer:
      "Yes. The website is positioned for local and route booking support across Panchkula, Chandigarh and Mohali.",
  },
  {
    question: "Can I book a Chandigarh airport taxi service from this website?",
    answer:
      "Yes. The page highlights airport taxi booking with direct call and WhatsApp CTA options for quick inquiry.",
  },
  {
    question: "Do you show fares for Panchkula to Delhi cab booking?",
    answer:
      "Yes. Popular pricing cards are listed for sedan, SUV Ertiga, Innova Crysta and Innova Hycross Hybrid options.",
  },
  {
    question: "Is Delhi to Chandigarh taxi fare available on the site?",
    answer:
      "Yes. A sedan fare is listed for Delhi to Chandigarh, with parking marked as extra.",
  },
  {
    question: "Can the site target near me cab service searches?",
    answer:
      "Yes. The content includes local location signals for Panchkula, Chandigarh, Mohali and Sector 20 near Suncity to support local search relevance.",
  },
];


export const siteConfig = {
  brand: {
    name: "Abhi Cab Service",
    eyebrow: "Local, Airport and Delhi Route Cab Booking",
    heroTitle: "Trusted Cab Service in Panchkula, Chandigarh and Mohali",
    heroDescription:
      "Book local rides, Chandigarh airport pickup and Delhi route cabs with quick WhatsApp support and on-time pickup.",
    trustLine: "Quick booking, clean cars and responsive local support.",
  },
  contact: {
    phoneNumber: "+919988256290",
    phoneLabel: "+91 99882 56290",
    whatsappNumber: "919988256290",
    whatsappLabel: "Book on WhatsApp",
    whatsappMessage:
      "Hi, I need a cab. Please share fare and availability.",
    address: "Sector 20, Panchkula, near Suncity",
    mapsLabel: "Sector 20 Panchkula, Near Suncity",
  },
  seo: {
    title: "Cab Service in Panchkula, Chandigarh and Mohali | Abhi Cab Service",
    description:
      "Abhi Cab Service offers local, airport and outstation taxi booking in Panchkula, Chandigarh and Mohali with route pricing for Chandigarh to Delhi and Delhi to Chandigarh rides.",
    keywords: [
      "cab service in Panchkula",
      "taxi service in Panchkula",
      "cab service in Chandigarh",
      "taxi service in Chandigarh",
      "cab service in Mohali",
      "Chandigarh to Delhi cab",
      "Delhi to Chandigarh cab",
      "Chandigarh airport taxi service",
      "airport taxi service Panchkula",
      "outstation cab Panchkula",
      "cab service near me",
      "taxi near me Panchkula",
    ],
  },
  navigation,
  highlights: [
    "Fast WhatsApp booking",
    "Clean car feel",
    "Fare confirmation",
    "On-time pickup support",
  ],
  routeFares,
  services,
  serviceAreas,
  advantages: [
    "Popular route fare examples before inquiry",
    "Dedicated pricing section in the top navigation",
    "Clean, modern and mobile-first layout",
    "Strong local SEO copy for city and near me searches",
    "Quick call and WhatsApp CTAs across the page",
    "Config-driven content for easy future updates",
  ],
  bookingSteps: [
    "Call or send a WhatsApp message with pickup and drop details.",
    "Confirm your route, fare and preferred car category.",
    "Get your cab on time with local support from Panchkula.",
  ],
  faqs,
};

export const phoneHref = `tel:${siteConfig.contact.phoneNumber}`;

export const whatsappHref = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.contact.whatsappMessage,
)}`;

export function buildWhatsAppHref(message: string) {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
