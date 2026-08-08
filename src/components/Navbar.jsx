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
      bg-[#0B1120]/90
      backdrop-blur-xl
      border-b
      border-white/10
      "
    >

      <div className="
      max-w-7xl
      mx-auto
      px-8 md:px-6
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
        
        from-cyan-400
        via-blue-500
        to-cyan-600
        
        text-[#FFFFFF]
        "
        >
          SA
        </h1>



        <div className="
        hidden
        lg:flex
        gap-8
        items-center
        text-[#FFFFFF]
        ">


        {links.map((link)=>(

          <a
          key={link.name}
          href={link.href}
          className="
          hover:text-[#06B6D4]
          transition
          "
          >
            {link.name}
          </a>

        ))}



        <a
        href="/Saquib-Ahmed-CV.pdf"
        download
        className="
        px-5
        py-2
        rounded-full
        bg-[#2563EB]
        hover:bg-[#1D4ED8]
        "
        >
          Resume
        </a>


        </div>



        <button
        className="lg:hidden text-2xl text-white hover:text-cyan-400 transition"
        onClick={()=>setOpen(!open)}
        >

          {open ? <FaTimes/> : <FaBars/>}

        </button>


      </div>



      {open && (

      <div className="
      lg:hidden
      px-8 md:px-6
      pb-6
      flex
      flex-col
      gap-5
      text-[#FFFFFF]
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
