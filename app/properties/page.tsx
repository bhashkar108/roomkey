"use client";

import { useMemo, useState } from "react";
import PageHero from "@/components/PageHero";
import PropertyCard from "@/components/PropertyCard";
import { cities, properties, propertyTypes } from "@/lib/properties";

export default function PropertiesPage() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("All");
  const [type, setType] = useState("All");
  const [status, setStatus] = useState("All");

  const filtered = useMemo(() => {
    return properties.filter((property) => {
      const matchesQuery = `${property.title} ${property.location} ${property.city}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesCity = city === "All" || property.city === city;
      const matchesType = type === "All" || property.type === type;
      const matchesStatus = status === "All" || property.status === status;
      return matchesQuery && matchesCity && matchesType && matchesStatus;
    });
  }, [query, city, type, status]);

  return (
    <main>
      <PageHero
        eyebrow="The collection"
        title="Residences, privately curated."
        image={properties[1].images[0]}
      />
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid gap-3 md:grid-cols-4">
          <input
            className="filter"
            placeholder="Search by home or city"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <select className="filter" value={city} onChange={(event) => setCity(event.target.value)}>
            <option>All</option>
            {cities.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <select className="filter" value={type} onChange={(event) => setType(event.target.value)}>
            <option>All</option>
            {propertyTypes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <select className="filter" value={status} onChange={(event) => setStatus(event.target.value)}>
            <option>All</option>
            <option>For Sale</option>
            <option>For Rent</option>
          </select>
        </div>

        <p className="mt-8 text-sm text-[#6b736c]">{filtered.length} residences available</p>
        <div className="mt-6 grid gap-7 md:grid-cols-3">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </main>
  );
}
