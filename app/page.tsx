import Image from "next/image";
import Link from "next/link";
import BannerSlider from "@/components/BannerSlider";
import PropertyCard from "@/components/PropertyCard";
import { getFeaturedProperties, properties } from "@/lib/properties";

const slides = [
  {
    image: properties[0].images[0],
    eyebrow: "Signature collection · 2026",
    title: "Homes that feel like a private key.",
    subtitle: "Villas, penthouses, and courtyard residences curated for people who value light, craft, and quiet prestige.",
    href: `/properties/${properties[0].id}`,
    cta: "Enter Aurelia Villa",
  },
  {
    image: properties[1].images[0],
    eyebrow: "Skyline living",
    title: "Penthouse 42 above the city.",
    subtitle: "A dual-level terrace residence in Bandra Kurla, designed for entertaining with an unbroken horizon.",
    href: `/properties/${properties[1].id}`,
    cta: "View penthouse",
  },
  {
    image: properties[4].images[0],
    eyebrow: "Estate living",
    title: "The Meridian House, Jubilee Hills.",
    subtitle: "An acre of garden, a double-height foyer, and rooms that open to water and trees.",
    href: `/properties/${properties[4].id}`,
    cta: "Discover the estate",
  },
];

const neighborhoods = [
  { name: "South Mumbai", homes: "12 private listings", image: properties[5].images[0] },
  { name: "Gurugram Golf Course", homes: "8 townhomes", image: properties[3].images[0] },
  { name: "Whitefield", homes: "Residences for lease", image: properties[2].images[0] },
];

export default function Home() {
  const featured = getFeaturedProperties();

  return (
    <main>
      <BannerSlider slides={slides} />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-4 md:px-8">
        {[
          ["48+", "curated homes"],
          ["5", "primary cities"],
          ["12 yrs", "private brokerage"],
          ["1 key", "to exceptional living"],
        ].map(([stat, label]) => (
          <div key={label} className="border-t border-[#c4a574]/40 pt-5">
            <p className="font-serif text-4xl text-[#0c1210]">{stat}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#7a6a52]">{label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#8a7350]">Featured residences</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">A quieter kind of luxury.</h2>
          </div>
          <Link href="/properties" className="text-xs uppercase tracking-[0.22em] text-[#8a7350] hover:text-[#0c1210]">
            Browse the full collection →
          </Link>
        </div>
        <div className="mt-10 grid gap-7 md:grid-cols-3">
          {featured.slice(0, 6).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <section className="mt-16 bg-[#0c1210] py-20 text-[#f7f3eb]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
          <div className="relative h-[460px]">
            <Image
              src={properties[6].images[1]}
              alt="Interior living room at RoomKey residence"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#c4a574]">The RoomKey method</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">We do not list homes. We introduce them.</h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-[#f7f3eb]/70">
              Every residence is visited, photographed, and qualified by our advisors. You receive a shortlist — never a flood of listings — and a discreet path from first viewing to keys in hand.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block rounded-full border border-[#c4a574] px-7 py-3 text-xs uppercase tracking-[0.22em] text-[#e8d5b0]"
            >
              Our maison
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <p className="text-xs uppercase tracking-[0.32em] text-[#8a7350]">Neighborhoods</p>
        <h2 className="mt-3 font-serif text-4xl">Where our keys open doors.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {neighborhoods.map((place) => (
            <Link key={place.name} href="/properties" className="group relative block h-80 overflow-hidden">
              <Image src={place.image} alt={place.name} fill className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1210]/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-serif text-3xl">{place.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#e8d5b0]">{place.homes}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
