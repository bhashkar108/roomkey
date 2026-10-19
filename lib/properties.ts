import type { Property } from "./types";

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const agents = {
  aanya: {
    name: "Aanya Mehra",
    role: "Principal Broker",
    phone: "+91 98100 11220",
    email: "aanya@roomkey.in",
    image: img("photo-1573496359142-b8d87734a5a2", 600),
  },
  kabir: {
    name: "Kabir Sharma",
    role: "Luxury Specialist",
    phone: "+91 98200 33441",
    email: "kabir@roomkey.in",
    image: img("photo-1507003211169-0a1dd7228f2d", 600),
  },
  diya: {
    name: "Diya Kapoor",
    role: "Residential Advisor",
    phone: "+91 98711 55667",
    email: "diya@roomkey.in",
    image: img("photo-1544005313-94ddf0286df2", 600),
  },
};

export const properties: Property[] = [
  {
    id: "rk-01",
    title: "The Aurelia Villa",
    location: "Palm Jumeirah Lane, South Mumbai",
    city: "Mumbai",
    price: 185000000,
    type: "Villa",
    status: "For Sale",
    beds: 5,
    baths: 6,
    area: 7200,
    year: 2023,
    featured: true,
    images: [
      img("photo-1613490493576-7fde63acd811"),
      img("photo-1600210492486-724fe5c67fb0"),
      img("photo-1600607687939-ce8a6c25118c"),
      img("photo-1600566753190-17f0baa2a6c3"),
    ],
    description:
      "A waterfront residence with private garden courts, a linear pool, and floor-to-ceiling glass that frames the Arabian Sea. Aurelia is designed for collectors of quiet luxury — limestone, teak, and tailored lighting throughout.",
    amenities: ["Infinity pool", "Private cinema", "Smart home", "Staff quarters", "Sea view", "Wine cellar"],
    agent: agents.aanya,
  },
  {
    id: "rk-02",
    title: "Skyline Penthouse 42",
    location: "Bandra Kurla Complex",
    city: "Mumbai",
    price: 98000000,
    type: "Penthouse",
    status: "For Sale",
    beds: 4,
    baths: 4,
    area: 4100,
    year: 2024,
    featured: true,
    images: [
      img("photo-1512917774080-9991f1c4c750"),
      img("photo-1600585154340-be6161a56a0c"),
      img("photo-1600047509807-ba8f99d2cdbc"),
      img("photo-1616137466211-f939a420be84"),
    ],
    description:
      "A dual-level penthouse with a wraparound terrace, chef’s kitchen, and gallery-scale living. Evening light pours across the city skyline from every principal room.",
    amenities: ["Private elevator", "Terrace lounge", "Concierge", "Gym", "Valet parking", "City views"],
    agent: agents.kabir,
  },
  {
    id: "rk-03",
    title: "Olive Grove Residences",
    location: "Whitefield, EPIP Zone",
    city: "Bengaluru",
    price: 185000,
    type: "Apartment",
    status: "For Rent",
    beds: 3,
    baths: 3,
    area: 2100,
    year: 2022,
    featured: true,
    images: [
      img("photo-1502672260266-1c1ef2d93688"),
      img("photo-1560448204-e02f11c3d0e2"),
      img("photo-1554995207-c18c203602cb"),
      img("photo-1616594039964-ae9021a400a0"),
    ],
    description:
      "Calm, sunlit interiors with olive-toned millwork and a courtyard balcony. A refined rental for professionals who want club amenities without a high-rise feel.",
    amenities: ["Clubhouse", "Pool", "Co-working lounge", "EV charging", "Landscaped courts", "24/7 security"],
    agent: agents.diya,
  },
  {
    id: "rk-04",
    title: "Casa Norte Townhouse",
    location: "Golf Course Road, Sector 54",
    city: "Gurugram",
    price: 42500000,
    type: "Townhouse",
    status: "For Sale",
    beds: 4,
    baths: 4,
    area: 3450,
    year: 2021,
    featured: false,
    images: [
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1600573472550-8090b5e0745e"),
      img("photo-1484154218962-a197022b5858"),
      img("photo-1560185007-cde436f6a4d0"),
    ],
    description:
      "A contemporary townhouse with a private courtyard, rooftop deck, and an atelier-style study. Quiet streets, club access, and effortless entertaining spaces.",
    amenities: ["Rooftop deck", "Private courtyard", "Club access", "Home office", "Modular kitchen", "Visitor parking"],
    agent: agents.diya,
  },
  {
    id: "rk-05",
    title: "The Meridian House",
    location: "Jubilee Hills, Road 46",
    city: "Hyderabad",
    price: 67500000,
    type: "Villa",
    status: "For Sale",
    beds: 6,
    baths: 7,
    area: 8900,
    year: 2020,
    featured: true,
    images: [
      img("photo-1600585154526-990dced4db0d"),
      img("photo-1600566753086-00f18fb6b3ea"),
      img("photo-1583608205776-bfd35f0d9f83"),
      img("photo-1570129477492-45c003edd2be"),
    ],
    description:
      "An estate-scale villa with a double-height foyer, indoor-outdoor living pavilion, and a landscaped acre. Crafted for families who host with ease.",
    amenities: ["Guest pavilion", "Pool & spa", "Home gym", "Library", "Service elevator", "Landscaped acre"],
    agent: agents.aanya,
  },
  {
    id: "rk-06",
    title: "Harbour View Loft",
    location: "Marine Drive, Churchgate",
    city: "Mumbai",
    price: 275000,
    type: "Apartment",
    status: "For Rent",
    beds: 2,
    baths: 2,
    area: 1650,
    year: 2019,
    featured: false,
    images: [
      img("photo-1522708323590-d24dbb6b0267"),
      img("photo-1493809842364-82890fbb0a01"),
      img("photo-1560448204-603b3fc33ddc"),
      img("photo-1505693416388-ac5ce068fe85"),
    ],
    description:
      "A coastal loft with an open plan, walnut cabinetry, and an unobstructed promenade view. Evening walks, morning light, and a lock-up-and-leave lifestyle.",
    amenities: ["Sea view", "Doorman", "Gym", "High-speed lift", "Covered parking", "Pet friendly"],
    agent: agents.kabir,
  },
  {
    id: "rk-07",
    title: "Atelier 18 Penthouse",
    location: "Cyber City, DLF Phase 2",
    city: "Gurugram",
    price: 112000000,
    type: "Penthouse",
    status: "For Sale",
    beds: 5,
    baths: 5,
    area: 5300,
    year: 2025,
    featured: true,
    images: [
      img("photo-1600607687920-4e2a09cf159d"),
      img("photo-1600585154363-67eb9e2e2099"),
      img("photo-1600210491892-03d54c0aaf87"),
      img("photo-1618221195710-dd6b41faaea6"),
    ],
    description:
      "Gallery walls, a floating staircase, and a 360-degree terrace. Atelier 18 is a statement residence for those who collect art as readily as they collect views.",
    amenities: ["Private pool", "Art lighting", "Smart climate", "Wine wall", "Helipad access", "Triple parking"],
    agent: agents.kabir,
  },
  {
    id: "rk-08",
    title: "Lakeside Courtyard Home",
    location: "Kalyani Nagar",
    city: "Pune",
    price: 31800000,
    type: "Townhouse",
    status: "For Sale",
    beds: 3,
    baths: 3,
    area: 2680,
    year: 2022,
    featured: false,
    images: [
      img("photo-1605276374104-dee2a0ed3cd6"),
      img("photo-1600585153490-76fb20a32601"),
      img("photo-1505691938895-1758d7feb511"),
      img("photo-1615874959471-d26200333973"),
    ],
    description:
      "A courtyard home facing the lake belt, with lime-washed walls and a kitchen that opens to a dining terrace. Intimate, luminous, and walkable to cafés.",
    amenities: ["Lake view", "Courtyard", "Solar roof", "Community pool", "Jogging trail", "Covered parking"],
    agent: agents.diya,
  },
];

export function getProperty(id: string) {
  return properties.find((property) => property.id === id);
}

export function getFeaturedProperties() {
  return properties.filter((property) => property.featured);
}

export const cities = [...new Set(properties.map((property) => property.city))];
export const propertyTypes = [...new Set(properties.map((property) => property.type))];
