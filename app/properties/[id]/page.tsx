import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import InquiryForm from "@/components/InquiryForm";
import PropertyCard from "@/components/PropertyCard";
import { formatArea, formatPrice } from "@/lib/format";
import { getProperty, properties } from "@/lib/properties";

export function generateStaticParams() {
  return properties.map((property) => ({ id: property.id }));
}

export default async function PropertyDetailPage({ params }: PageProps<"/properties/[id]">) {
  const { id } = await params;
  const property = getProperty(id);
  if (!property) notFound();

  const similar = properties.filter((item) => item.id !== property.id && item.city === property.city).slice(0, 3);

  return (
    <main>
      <section className="grid h-[72vh] min-h-[520px] md:grid-cols-[1.4fr_0.8fr]">
        <div className="relative">
          <Image src={property.images[0]} alt={property.title} fill className="object-cover" priority />
        </div>
        <div className="hidden h-full grid-rows-3 md:grid">
          {property.images.slice(1, 4).map((image) => (
            <div key={image} className="relative">
              <Image src={image} alt={`${property.title} gallery`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_0.8fr] md:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#8a7350]">
            {property.city} · {property.type} · {property.status}
          </p>
          <h1 className="mt-3 font-serif text-5xl">{property.title}</h1>
          <p className="mt-2 text-[#5d675f]">{property.location}</p>
          <p className="mt-6 font-serif text-3xl">{formatPrice(property.price, property.status)}</p>

          <div className="mt-8 grid grid-cols-2 gap-4 border-y border-[#ddd4c4] py-6 md:grid-cols-4">
            {[
              ["Bedrooms", String(property.beds)],
              ["Bathrooms", String(property.baths)],
              ["Area", formatArea(property.area)],
              ["Year", String(property.year)],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#8a7350]">{label}</p>
                <p className="mt-1 text-lg">{value}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#3f4843]">{property.description}</p>

          <h2 className="mt-12 font-serif text-3xl">Amenities</h2>
          <ul className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
            {property.amenities.map((amenity) => (
              <li key={amenity} className="border border-[#ddd4c4] bg-white px-4 py-3 text-sm">
                {amenity}
              </li>
            ))}
          </ul>

          <div className="mt-12 flex items-center gap-5 bg-white p-5">
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <Image src={property.agent.image} alt={property.agent.name} fill className="object-cover" />
            </div>
            <div>
              <p className="font-medium">{property.agent.name}</p>
              <p className="text-sm text-[#6b736c]">{property.agent.role}</p>
              <p className="text-sm text-[#8a7350]">{property.agent.phone}</p>
            </div>
          </div>
        </div>

        <InquiryForm propertyId={property.id} heading="Arrange a viewing" />
      </section>

      {similar.length > 0 ? (
        <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-serif text-3xl">More in {property.city}</h2>
            <Link href="/properties" className="text-xs uppercase tracking-[0.2em] text-[#8a7350]">
              All residences
            </Link>
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {similar.map((item) => (
              <PropertyCard key={item.id} property={item} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
