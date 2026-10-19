import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#c4a574]/20 bg-[#0c1210] text-[#f7f3eb]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <p className="font-serif text-2xl tracking-[0.18em]">ROOMKEY</p>
          <p className="mt-4 max-w-xs text-sm leading-7 text-[#f7f3eb]/65">
            A private brokerage for exceptional homes. We unlock residences that feel considered, calm, and quietly rare.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#c4a574]">Explore</p>
          <ul className="mt-5 space-y-3 text-sm text-[#f7f3eb]/75">
            <li><Link href="/properties" className="hover:text-white">Residences</Link></li>
            <li><Link href="/agents" className="hover:text-white">Advisors</Link></li>
            <li><Link href="/about" className="hover:text-white">Maison</Link></li>
            <li><Link href="/contact" className="hover:text-white">Private desk</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#c4a574]">Cities</p>
          <ul className="mt-5 space-y-3 text-sm text-[#f7f3eb]/75">
            <li>Mumbai</li>
            <li>Gurugram</li>
            <li>Bengaluru</li>
            <li>Hyderabad · Pune</li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#c4a574]">Atelier</p>
          <p className="mt-5 text-sm leading-7 text-[#f7f3eb]/75">
            14th Floor, The Residence Tower<br />
            Nariman Point, Mumbai 400021
          </p>
          <p className="mt-4 text-sm text-[#e8d5b0]">hello@roomkey.in</p>
          <p className="text-sm text-[#e8d5b0]">+91 22 4000 1800</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs tracking-[0.12em] text-[#f7f3eb]/45 md:flex-row md:justify-between md:px-8">
          <p>© 2026 RoomKey Private Residences. All rights reserved.</p>
          <p>Crafted for collectors of quiet luxury.</p>
        </div>
      </div>
    </footer>
  );
}
