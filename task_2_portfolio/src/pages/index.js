import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Works from "@/components/Works";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Navbar />
      <HeroSection />
      <Skills/>
      <Works/>
      <Footer />
    </main>
  );
}
