import PageHero from "@/components/PageHero";
import InquiryForm from "@/components/InquiryForm";
import { properties } from "@/lib/properties";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Private desk"
        title="Tell us the life you want the home to hold."
        image={properties[7].images[0]}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8">
        <div>
          <h2 className="font-serif text-4xl">Visit the atelier</h2>
          <p className="mt-5 max-w-md leading-8 text-[#3f4843]">
            14th Floor, The Residence Tower, Nariman Point, Mumbai 400021. Viewings are by appointment; our desk is open Monday to Saturday, 10:00–19:00 IST.
          </p>
          <div className="mt-8 space-y-2 text-[#8a7350]">
            <p>hello@roomkey.in</p>
            <p>+91 22 4000 1800</p>
          </div>
          <div className="relative mt-10 h-72 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${properties[5].images[0]})` }}
            />
          </div>
        </div>
        <InquiryForm heading="Write to the desk" />
      </section>
    </main>
  );
}
