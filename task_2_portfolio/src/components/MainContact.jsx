import { useState } from "react";
import { MdOutlineCheck, MdOutlineContentCopy } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

function MainContact() {
  const qualities= [
    {id:1,
    name:"Frontend Developer",
  },
  {
    id:2,
    name:"Active Learner",
  },
  {id:3,
  name:"Successful Team Leader",}
  ];
  const [isCopied, setIsCopied] = useState(false);
  const email = "hadiadjd@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };
  return (
    <section id="contact" className="relative min-h-[70vh] text-stone-100 flex flex-col justify-center items-center px-8 pt-16 bg-stone-700">
      <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-8">
      <div>
        <span className="font-light tracking-wider">-Contact</span>
        <p className="font-bold text-2xl w-80 py-4">
          Reach out for any type of query or discussion.
        </p>

         <div className="flex items-center gap-2 text-lg md:text-xl font-semibold text-slate-50 text-opacity-10 bg-clip-text bg-gradient-to-r from-yellow-500 via-rose-500 to-red-500">
          <span>{email}</span>
          <button onClick={copyToClipboard}>
            {isCopied ? <MdOutlineCheck className="text-green-500"/> : <MdOutlineContentCopy className="text-rose-800"/>}
          </button>
        </div>
      </div>
    <span className="text-2xl">Creativity is the spark that ignites imagination, turning dreams into reality and transforming the ordinary into the extraordinary.</span>
      </div>
<div className="flex flex-col md:flex-row gap-4 py-8">
  {qualities.map((quality)=>(
    <div key={quality.id} className="card w-80 bg-base-100 shadow-xl flex justify-center items-center">
    <div className="card-body">
      <h2 className="card-title">{quality.name}</h2>
    </div>
  </div>
  ))}
</div>
    </section>
  )
}

export default MainContact;