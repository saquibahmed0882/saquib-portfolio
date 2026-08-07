import { motion } from "framer-motion";
import aboutImg from "../assets/about.png";
import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaRobot,
  FaUserGraduate,
  FaLightbulb
} from "react-icons/fa";

function About() {

  const focus = [
    { icon: <FaBrain />, text: "Artificial Intelligence" },
    { icon: <FaRobot />, text: "Machine Learning" },
    { icon: <FaCode />, text: "Full Stack Development" },
    { icon: <FaDatabase />, text: "Data Science" },
  ];


  return (
    <section
      id="about"
      className="py-32 px-8 md:px-6 bg-[#1E293B]"
    >

      <div className="max-w-6xl mx-auto">


        {/* About Main Box */}

        <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:1}}
          className="
          bg-[#1E293B]
          backdrop-blur-xl
          border border-slate-600 shadow-lg
          rounded-3xl
          p-10
          shadow-2xl
          "
        >


          <div className="text-center mb-12">

            <p className="uppercase tracking-[6px] text-[#06B6D4]">
              About Me
            </p>

            <h2 className="text-5xl font-extrabold mt-4 text-[#FFFFFF]">

              Turning Ideas Into

              <span className="text-[#2563EB]">
                {" "}Intelligent Software
              </span>

            </h2>

          </div>



          <div className="grid lg:grid-cols-2 gap-14 items-center">


            {/* Photo */}

            <motion.div
              initial={{x:-80,opacity:0}}
              whileInView={{x:0,opacity:1}}
              transition={{duration:1}}
              className="flex justify-center"
            >

              <img
                src={aboutImg}
                alt="Saquib Ahmed"
                className="
                w-[420px]
                rounded-3xl
                border
                border-blue-500/40
                shadow-[0_0_50px_rgba(37,99,235,0.3)]
                "
              />

            </motion.div>



            {/* Overview */}

            <div>


              <div className="flex items-center gap-3 mb-5">

                <FaUserGraduate className="text-[#06B6D4] text-3xl"/>

                <h3 className="text-3xl font-semibold">
                  Overview
                </h3>

              </div>


              <p className="text-[#FFFFFF] text-lg leading-8">

                I am Saquib Ahmed, a B.Tech Artificial Intelligence &
                Machine Learning student at Birla Institute of Technology,
                Mesra, passionate about building intelligent software
                solutions and scalable applications.

                I specialize in Artificial Intelligence, Machine Learning,
                Data Science and Full Stack Development, with hands-on
                experience in creating AI-powered applications,
                data-driven solutions and modern web platforms.

                I enjoy transforming innovative ideas into real-world
                products by combining machine learning, software engineering
                and user-focused design.

              </p>


            </div>


          </div>


        </motion.div>



        {/* Details Box */}


        <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:1}}
          className="
          mt-10
          bg-[#1E293B]
          backdrop-blur-xl
          border border-slate-600 shadow-lg
          rounded-3xl
          p-10
          "
        >


          <div className="flex items-center gap-3 mb-6">

            <FaLightbulb className="text-[#06B6D4] text-3xl"/>

            <h3 className="text-3xl font-semibold">
              Details
            </h3>

          </div>



          <p className="text-[#FFFFFF] text-lg leading-8 mb-8">

            My interests include Artificial Intelligence,
            Machine Learning, Data Science and Full Stack Development.

            I enjoy transforming ideas into real-world products
            using modern technologies.

          </p>



          <div className="grid md:grid-cols-2 gap-5">

            {focus.map((item)=>(

              <div
                key={item.text}
                className="
                flex items-center gap-4
                bg-slate-800
                rounded-xl
                p-5
                border border-slate-600 shadow-lg
                hover:border-blue-500
                transition
                "
              >

                <span className="text-[#06B6D4] text-2xl">
                  {item.icon}
                </span>


                <span>
                  {item.text}
                </span>


              </div>

            ))}

          </div>


        </motion.div>


      </div>

    </section>
  )
}


export default About;
