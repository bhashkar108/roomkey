export default function PageHero({
  eyebrow,
  title,
  image,
}: {
  eyebrow: string;
  title: string;
  image: string;
}) {
  return (
    <section
      className="relative flex h-[42vh] min-h-[320px] items-end"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(12,18,16,0.2), rgba(12,18,16,0.78)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-5 pb-12 md:px-8">
        <p className="text-xs uppercase tracking-[0.35em] text-[#e8d5b0]">{eyebrow}</p>
        <h1 className="mt-3 font-serif text-4xl text-[#f7f3eb] md:text-6xl">{title}</h1>
      </div>
    </section>
  );
}
