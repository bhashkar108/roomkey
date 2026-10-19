export type ListingStatus = "For Sale" | "For Rent";
export type PropertyType = "Villa" | "Apartment" | "Penthouse" | "Townhouse";

export type Agent = {
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
};

export type Property = {
  id: string;
  title: string;
  location: string;
  city: string;
  price: number;
  type: PropertyType;
  status: ListingStatus;
  beds: number;
  baths: number;
  area: number;
  year: number;
  images: string[];
  featured: boolean;
  description: string;
  amenities: string[];
  agent: Agent;
};

export type Inquiry = {
  id: string;
  propertyId?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
};
