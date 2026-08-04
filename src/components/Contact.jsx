import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {

  return (

    <section
      id="contact"
      className="py-32 px-6 bg-[#080b1a]"
    >

      <div className="max-w-6xl mx-auto">


        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-blue-400">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let's Start a Project Together
          </h2>

        </div>



        <div className="grid md:grid-cols-2 gap-10">



          <motion.div
          initial={{opacity:0,x:-40}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.8}}
          className="
          bg-white/5
          border border-white/10
          rounded-3xl
          p-10
          "
          >

            <h3 className="text-3xl font-bold mb-6">
              Have an AI idea?
            </h3>


            <p className="text-gray-300 leading-8">

              Need a developer for your project?

              <br/><br/>

              I collaborate on Artificial Intelligence,
              Machine Learning, Full Stack Development
              and innovative software solutions.

              <br/><br/>

              Let's build something impactful together.

            </p>


            <div className="mt-8 space-y-4">


              <a
              href="mailto:saquibahmed0882@gmail.com"
              className="flex items-center gap-3 text-blue-400"
              >
                <FaEnvelope/>
                saquibahmed0882@gmail.com
              </a>


              <a
              href="https://github.com/saquibahmed0882"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-blue-400"
              >
                <FaGithub/>
                GitHub
              </a>


              <a
              href="https://www.linkedin.com/in/saquib-ahmed-ab21023a9"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-blue-400"
              >
                <FaLinkedin/>
                LinkedIn
              </a>


            </div>


          </motion.div>





          <motion.div
          initial={{opacity:0,x:40}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.8}}
          className="
          bg-gradient-to-br
          from-blue-600/20
          to-purple-600/20
          border border-white/10
          rounded-3xl
          p-10
          "
          >

            <h3 className="text-2xl font-bold mb-6">
              Connect With Me
            </h3>


            <p className="text-gray-300 leading-7">

              Open for internships, collaborations,
              AI projects and software development opportunities.

            </p>


            <div className="mt-8">


              <a
              href="mailto:saquibahmed0882@gmail.com"
              className="
              inline-flex
              px-8
              py-3
              rounded-full
              bg-blue-600
              hover:bg-blue-700
              transition
              "
              >

                Send Email

              </a>


            </div>


          </motion.div>



        </div>


      </div>


    </section>

  )

}

export default Contact;
