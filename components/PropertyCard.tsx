import Image from "next/image";
import Link from "next/link";
import { formatArea, formatPrice } from "@/lib/format";
import type { Property } from "@/lib/types";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/properties/${property.id}`} className="group block overflow-hidden bg-white shadow-[0_20px_50px_-28px_rgba(12,18,16,0.35)]">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-[#0c1210]/80 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#e8d5b0]">
            {property.status}
          </span>
          <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#0c1210]">
            {property.type}
          </span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.22em] text-[#8a7350]">{property.city}</p>
        <h3 className="mt-2 font-serif text-2xl text-[#1b2420]">{property.title}</h3>
        <p className="mt-1 text-sm text-[#5d675f]">{property.location}</p>
        <p className="mt-4 text-lg tracking-wide text-[#0c1210]">{formatPrice(property.price, property.status)}</p>
        <div className="mt-4 flex gap-5 border-t border-[#ece6db] pt-4 text-xs uppercase tracking-[0.14em] text-[#6b736c]">
          <span>{property.beds} beds</span>
          <span>{property.baths} baths</span>
          <span>{formatArea(property.area)}</span>
        </div>
      </div>
    </Link>
  );
}
