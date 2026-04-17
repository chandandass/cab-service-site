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

export type StatItem = {
  value: string;
  label: string;
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type ServiceArea = {
  name: string;
  copy: string;
};

const navigation: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing", featured: true },
  { label: "Service Areas", href: "#service-areas" },
  { label: "Contact", href: "#contact" },
];

const stats: StatItem[] = [
  { value: "24x7", label: "Booking availability can be shown once confirmed" },
  { value: "5+", label: "Popular route pricing cards already ready" },
  { value: "3", label: "Core local zones: Panchkula, Chandigarh, Mohali" },
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
  },
  {
    title: "Outstation Cabs",
    description:
      "Comfortable rides for Delhi, nearby cities and planned route bookings with clear pricing visibility.",
  },
  {
    title: "Local City Travel",
    description:
      "Dependable taxi support for Panchkula, Chandigarh and Mohali for personal visits, errands and day travel.",
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
    eyebrow: "Panchkula, Chandigarh, Mohali, Airport and Delhi Routes",
    heroTitle: "Reliable Cab Service in Panchkula, Chandigarh and Mohali",
    heroDescription:
      "Book local, airport and outstation rides with transparent pricing, fast WhatsApp support and on-time pickup for Delhi and nearby routes.",
    trustLine: "Transparent fares, quick booking, comfortable rides and responsive local support.",
  },
  contact: {
    phoneNumber: "+919999999999",
    phoneLabel: "+91 99999 99999",
    whatsappNumber: "919999999999",
    whatsappLabel: "Book on WhatsApp",
    whatsappMessage:
      "Hello Abhi Cab Service, I want to book a cab. Please share the best fare and available car options.",
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
    "Transparent route pricing",
    "Airport and outstation rides",
    "Responsive local support",
  ],
  stats,
  routeFares,
  services,
  serviceAreas,
  advantages: [
    "Popular route fares shown clearly before inquiry",
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
