import Image from "next/image"
import Socials from "./Socials"

function HeroSection() {
  return (
    <main className="min-h-[70vh] px-8 flex flex-col md:flex-row justify-between text-white">
      <div className="flex flex-col gap-4 justify-center items-center w-full">
        <div>
        <span className="uppercase">hello my name is</span>
        <h1 className="text-5xl md:text-7xl font-bold py-2">Hadia <br/>Djadallah.
        <div className="bg-red-800 h-full w-full my-2 p-1"/></h1>
        </div>
        <Socials/>
      </div>
      <figure className="w-full h-full flex justify-center items-center">
        <Image src="/bgHero.png" alt="hero" height={400} width={400}/>
      </figure>
    </main>
  )
}

export default HeroSection