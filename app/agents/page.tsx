import Image from "next/image";
import PageHero from "@/components/PageHero";
import { properties } from "@/lib/properties";

export const metadata = {
  title: "Advisors",
};

const uniqueAgents = Array.from(
  new Map(properties.map((property) => [property.agent.email, property.agent])).values(),
);

export default function AgentsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Private advisors"
        title="The people who hold the keys."
        image={properties[6].images[0]}
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-3 md:px-8">
        {uniqueAgents.map((agent) => (
          <article key={agent.email} className="bg-white p-6">
            <div className="relative h-80">
              <Image src={agent.image} alt={agent.name} fill className="object-cover" />
            </div>
            <h2 className="mt-5 font-serif text-3xl">{agent.name}</h2>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#8a7350]">{agent.role}</p>
            <p className="mt-4 text-sm text-[#5d675f]">{agent.email}</p>
            <p className="text-sm text-[#5d675f]">{agent.phone}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
