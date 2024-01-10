import Link from "next/link";
import links from "../../../lib/links";
import { useState } from "react";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((open) => !open);
  };
  return (
    <nav className="md:hidden py-8">
      <button className="absolute right-10 top-3 p-4 text-xl" onClick={handleOpen}>{open? <MdOutlineClose/>: <MdOutlineMenu/>}</button>
      <div className={`${open?"h-screen w-screen flex flex-col" : "hidden"}`}>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className="text-4xl text-center py-4 hover:text-red-800"
        >
          {link.name}
        </Link>
      ))}
      </div>
    
    </nav>
  );
}

export default MobileMenu;
