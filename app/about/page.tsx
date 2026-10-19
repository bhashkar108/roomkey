import Image from "next/image";
import PageHero from "@/components/PageHero";
import { properties } from "@/lib/properties";

export const metadata = {
  title: "Maison",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="The maison"
        title="A brokerage with the manners of a private club."
        image={properties[4].images[0]}
      />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8">
        <div>
          <h2 className="font-serif text-4xl">RoomKey was founded for people who dislike noise.</h2>
          <p className="mt-6 leading-8 text-[#3f4843]">
            We work with a limited number of homes each season. Each is photographed, qualified, and introduced only to clients whose brief it matches. The result is fewer viewings, better conversations, and residences that feel inevitable once you walk through the door.
          </p>
          <p className="mt-4 leading-8 text-[#3f4843]">
            From Nariman Point to Jubilee Hills, our advisors stay with you from the first shortlist to the moment the key turns.
          </p>
        </div>
        <div className="relative h-[420px]">
          <Image src={properties[0].images[1]} alt="RoomKey atelier interior" fill className="object-cover" />
        </div>
      </section>
    </main>
  );
}
