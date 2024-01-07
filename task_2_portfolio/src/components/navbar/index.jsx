import MobileMenu from "./MobileMenu";
import links from "../../../lib/links";
import Link from "next/link";
function Navbar() {
  return (
    <header>
      <nav className="hidden p-4 md:flex gap-4 justify-end">
      {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className="relative transition-all after:block after:content-[''] after:absolute after:h-[6px] after:bg-red-900 after:w-[6px] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:mx-6 after:rounded-full"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <MobileMenu/>
    </header>
  )
}

export default Navbar;