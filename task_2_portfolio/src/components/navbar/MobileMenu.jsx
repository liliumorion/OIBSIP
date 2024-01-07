import Link from "next/link"
import links from "../../../lib/links"

function MobileMenu() {
  return (
    <nav className="md:hidden p-4 flex gap-4 justify-end">
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
  )
}

export default MobileMenu