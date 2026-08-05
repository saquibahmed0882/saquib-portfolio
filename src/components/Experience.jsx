import { motion } from "framer-motion";

function Experience() {

  const experiences = [
    {
      year: "2026",
      role: "Industrial Intern - EDP Department",
      company: "Banaras Locomotive Works (BLW), Varanasi",
      points: [
        "Worked on EDP operations and industrial data management.",
        "Gained exposure to CNC programming and manufacturing processes.",
        "Learned industrial workflow and technical documentation."
      ]
    },

    {
      year: "2026",
      role: "Data Analyst & Machine Learning Intern",
      company: "Olinp Technology Pvt. Limited",
      points: [
        "Worked on data analysis and preprocessing techniques.",
        "Explored machine learning concepts and practical AI solutions.",
        "Worked with datasets to generate meaningful insights."
      ]
    }
  ];


  return (

    <section
      id="experience"
      className="py-32 px-6 bg-gray-50"
    >

      <div className="max-w-6xl mx-auto">


        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-emerald-400">
            Career
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Experience
          </h2>

        </div>



        <div className="relative border-l border-emerald-500/40 ml-5">


          {experiences.map((exp,index)=>(

            <motion.div
              key={index}
              initial={{opacity:0,x:-40}}
              whileInView={{opacity:1,x:0}}
              transition={{duration:0.7}}
              className="mb-14 ml-10"
            >

              <div className="
              absolute
              -left-[9px]
              w-4
              h-4
              rounded-full
              bg-emerald-500
              ">
              </div>


              <span className="text-emerald-400 font-semibold">
                {exp.year}
              </span>


              <div className="
              mt-3
              bg-white
              border
              border-white/10
              rounded-2xl
              p-7
              ">


                <h3 className="text-2xl font-bold">
                  {exp.role}
                </h3>


                <p className="text-gray-600 mt-2">
                  {exp.company}
                </p>


                <ul className="mt-5 space-y-3 text-gray-700">

                  {exp.points.map((point)=>(

                    <li key={point}>
                      • {point}
                    </li>

                  ))}

                </ul>


              </div>


            </motion.div>

          ))}


        </div>


      </div>

    </section>

  )
}

export default Experience;
