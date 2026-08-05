import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];


  return (

    <motion.nav
      initial={{ y:-100 }}
      animate={{ y:0 }}
      transition={{duration:0.8}}
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-white/80
      backdrop-blur-xl
      border-b
      border-white/10
      "
    >

      <div className="
      max-w-7xl
      mx-auto
      px-6
      py-5
      flex
      justify-between
      items-center
      ">


        <h1
        className="
        text-3xl
        font-black
        italic
        tracking-widest
        bg-gradient-to-r
        from-cyan-400
        via-emerald-500
        to-green-600
        bg-clip-text
        text-transparent
        "
        >
          SA
        </h1>



        <div className="
        hidden
        lg:flex
        gap-8
        items-center
        text-gray-700
        ">


        {links.map((link)=>(

          <a
          key={link.name}
          href={link.href}
          className="
          hover:text-emerald-400
          transition
          "
          >
            {link.name}
          </a>

        ))}



        <a
        href="/Saquib Ahmed CV.pdf"
        download
        className="
        px-5
        py-2
        rounded-full
        bg-emerald-600
        hover:bg-emerald-700
        "
        >
          Resume
        </a>


        </div>



        <button
        className="lg:hidden text-2xl"
        onClick={()=>setOpen(!open)}
        >

          {open ? <FaTimes/> : <FaBars/>}

        </button>


      </div>



      {open && (

      <div className="
      lg:hidden
      px-6
      pb-6
      flex
      flex-col
      gap-5
      text-gray-700
      ">


      {links.map((link)=>(

        <a
        key={link.name}
        href={link.href}
        onClick={()=>setOpen(false)}
        >
          {link.name}
        </a>

      ))}


      </div>

      )}


    </motion.nav>

  )

}

export default Navbar;
