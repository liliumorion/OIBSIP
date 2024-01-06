import MobileMenu from "./MobileMenu";
import links from "../../../lib/links";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="py-4 bg-yellow-100">
      {links.map((link)=>(
        <Link href={link.path} className="">{link.name}</Link>
      ))}
      <MobileMenu/>
    </nav>
  )
}

export default Navbar;