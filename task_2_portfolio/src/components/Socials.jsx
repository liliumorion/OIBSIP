import Link from "next/link";
import { FaInstagram , FaGithub ,FaLinkedin } from "react-icons/fa";

const icons = [
  {
    path:"/",
    name: <FaGithub />
  },
  {
    path:"/",
    name: <FaInstagram />
  },
  {
    path:"/",
    name: <FaLinkedin />
  }
]

function Socials() {
  return (
    <div className="flex gap-x-6 mx-auto xl:mx-0">
      {icons.map((icon, index)=>(
          <Link href={icon.path} className="text-2xl text-white hover:text-red-800" key={index}>{icon.name}</Link>
      ))}
    </div>
  )
}

export default Socials;