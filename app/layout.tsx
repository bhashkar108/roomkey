import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "RoomKey · Private Residences",
    template: "%s · RoomKey",
  },
  description:
    "RoomKey is a premium real estate maison for villas, penthouses, and private homes across India.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#f4efe6] text-[#1b2420]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
