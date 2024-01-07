import Image from "next/image"
import Socials from "./Socials"

function HeroSection() {
  return (
    <main className="h-screen relative p-4 flex justify-center  text-white">
      <figure className="absolute top-24">
        <Image src="/bgHero.png" alt="hero" height={400} width={400} />
      </figure>

    </main>
  )
}

export default HeroSection