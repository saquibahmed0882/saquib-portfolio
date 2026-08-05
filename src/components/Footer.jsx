import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer(){

  return(

    <footer
    className="
    py-12
    px-6
    bg-[#061a14]
    border-t
    border-white/10
    "
    >

      <div className="max-w-6xl mx-auto text-center">


        <h2
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
        </h2>



        <p className="text-gray-400 mt-4 text-lg">
          AI/ML Engineer | Full Stack Developer
        </p>


        <p className="text-gray-500 mt-2">
          Building intelligent software and scalable digital solutions.
        </p>



        <div className="
        flex
        justify-center
        gap-8
        mt-8
        text-2xl
        ">


          <a
          href="https://github.com/saquibahmed0882"
          target="_blank"
          rel="noreferrer"
          className="hover:text-emerald-400 transition"
          >
            <FaGithub/>
          </a>


          <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-emerald-400 transition"
          >
            <FaLinkedin/>
          </a>


          <a
          href="mailto:saquibahmed0882@gmail.com"
          className="hover:text-emerald-400 transition"
          >
            <FaEnvelope/>
          </a>


        </div>



        <p className="
        text-gray-500
        mt-10
        text-sm
        ">
          © 2026 Saquib Ahmed. All Rights Reserved.
        </p>


      </div>


    </footer>

  )

}

export default Footer;
