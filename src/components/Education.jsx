import { motion } from "framer-motion";

function Education() {

  return (
    <section
      id="education"
      className="py-32 px-8 md:px-6 bg-[#1E293B]"
    >

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-[#06B6D4]">
            Academic Journey
          </p>

          <h2 className="text-5xl font-extrabold mt-4 text-[#FFFFFF]">
            My Journey
          </h2>

        </div>


        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
          className="
          bg-[#1E293B]
          border border-slate-600 shadow-lg
          rounded-3xl
          p-10
          "
        >

          <span className="text-[#06B6D4] text-lg font-semibold">
            2023 - 2027
          </span>


          <h3 className="text-3xl font-bold mt-4">
            B.Tech Artificial Intelligence & Machine Learning
          </h3>


          <p className="text-[#FFFFFF] text-xl mt-3">
            Birla Institute of Technology, Mesra
          </p>



          <h4 className="text-2xl font-semibold mt-10 mb-4">
            Specialization
          </h4>

          <div className="flex flex-wrap gap-3">

            {[
              "Artificial Intelligence",
              "Machine Learning",
              "Software Engineering",
              "Full Stack Development",
              "Data Science"
            ].map((item)=>(
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-[#2563EB]/10 border border-blue-500/30 text-[#FFFFFF]"
              >
                {item}
              </span>
            ))}

          </div>




          <h4 className="text-2xl font-semibold mt-10 mb-4">
            Key Coursework
          </h4>


          <div className="grid md:grid-cols-2 gap-3 text-[#FFFFFF]">

            <p>• Data Structures & Algorithms</p>
            <p>• Machine Learning</p>
            <p>• Deep Learning</p>
            <p>• Database Management Systems</p>
            <p>• Computer Networks</p>
            <p>• Operating Systems</p>
            <p>• Software Engineering</p>
            <p>• Artificial Intelligence</p>

          </div>




          <h4 className="text-2xl font-semibold mt-10 mb-4">
            Developer Journey
          </h4>


          <ul className="space-y-3 text-[#FFFFFF]">

            <li>• Building AI-powered applications and intelligent systems</li>

            <li>• Developing scalable full-stack web applications</li>

            <li>• Designing backend APIs and database-driven solutions</li>

            <li>• Applying Machine Learning techniques to solve real-world problems</li>

            <li>• Following clean code, software engineering and development practices</li>

          </ul>




          <h4 className="text-2xl font-semibold mt-10 mb-4">
            Highlights
          </h4>


          <ul className="space-y-3 text-[#FFFFFF]">

            <li>• Built multiple AI/ML and Full Stack projects</li>

            <li>• Developed MERN-based real-time applications</li>

            <li>• Completed Industrial Internship at BLW Varanasi</li>

            <li>• Hands-on experience with Python, React.js, Node.js and Machine Learning</li>

          </ul>


        </motion.div>

      </div>

    </section>
  )
}

export default Education;
