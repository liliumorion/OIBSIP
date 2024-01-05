import MobileMenu from "./MobileMenu";
import links from "../../../lib/links";
import Link from "next/link";
function Navbar() {
  return (
    <nav>
      {links.map((link)=>(
        <Link href={link.path} className="">{link.name}</Link>
      ))}
      <MobileMenu/>
    </nav>
  )
}

export default Navbar;