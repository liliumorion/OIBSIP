import Link from "next/link"
import links from "../../../lib/links"

function MobileMenu() {
  return (
    <nav>
      {links.map((link)=>(
        <Link href={link.path} className="">{link.name}</Link>
      ))}
    </nav>
  )
}

export default MobileMenu