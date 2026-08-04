import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {

  const projects = [

    {
      title: "ChatSphere - Real-Time Chat Application",
      
      description:
        "A full-stack real-time chat application with secure authentication, instant messaging, online status, typing indicator and persistent chat history.",

      features:[
        "Real-time messaging using Socket.IO",
        "JWT based authentication",
        "Online/offline user status",
        "MongoDB persistent chat storage"
      ],

      tech:[
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "JWT"
      ],

      github:
      "https://github.com/saquibahmed0882/chatsphere",

      live:"#"

    },


    {
      title:"House Price Prediction",
      
      description:
      "A machine learning application that predicts house prices using data preprocessing and regression algorithms.",

      features:[
        "Data preprocessing pipeline",
        "Machine learning regression model",
        "Prediction interface using Streamlit",
        "Model evaluation and analysis"
      ],

      tech:[
        "Python",
        "Machine Learning",
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "Streamlit"
      ],

      github:
      "https://github.com/saquibahmed0882/house-price-prediction",

      live:"#"

    }

  ];


  return (

    <section
      id="projects"
      className="py-32 px-6 bg-[#080b1a]"
    >

      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-blue-400">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Featured Projects
          </h2>

        </div>



        <div className="grid md:grid-cols-2 gap-10">


        {projects.map((project,index)=>(

          <motion.div

          key={project.title}

          initial={{opacity:0,y:50}}

          whileInView={{opacity:1,y:0}}

          transition={{duration:0.7,delay:index*0.2}}

          className="
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          rounded-3xl
          p-8
          hover:-translate-y-3
          transition
          "

          >


            <div className="
            h-40
            rounded-2xl
            bg-gradient-to-r
            from-blue-600/30
            to-purple-600/30
            flex
            items-center
            justify-center
            mb-8
            ">

              <h3 className="text-2xl font-bold text-center">
                {project.title}
              </h3>

            </div>



            <p className="text-gray-400 leading-7 mb-6">
              {project.description}
            </p>



            <h4 className="text-xl font-semibold mb-3">
              Features
            </h4>


            <ul className="space-y-2 text-gray-300 mb-6">

              {project.features.map((feature)=>(

                <li key={feature}>
                  ✓ {feature}
                </li>

              ))}

            </ul>



            <div className="flex flex-wrap gap-2 mb-8">

              {project.tech.map((item)=>(

                <span
                key={item}
                className="
                px-3
                py-1
                rounded-full
                bg-blue-500/10
                border
                border-blue-500/30
                text-blue-300
                text-sm
                "
                >

                {item}

                </span>

              ))}

            </div>



            <div className="flex gap-4">


              <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
              flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              bg-blue-600
              hover:bg-blue-700
              "
              >

              <FaGithub/>
              GitHub

              </a>






            </div>


          </motion.div>


        ))}


        </div>


      </div>


    </section>

  )

}

export default Projects;
