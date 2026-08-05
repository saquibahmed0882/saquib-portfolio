import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiMongodb,
  SiExpress,
  SiTensorflow,
  SiOpencv,
  SiJupyter,
  SiLinux,
  SiPostman,
  SiVercel,
  SiNpm,
  SiVite,
  SiFirebase,
} from "react-icons/si";


function Skills() {

  const categories = [
    {
      title: "Programming",
      items: [
        { icon: <FaPython />, name: "Python", level: "Advanced", progress: "90%" },
        { icon: <FaJava />, name: "Java", level: "Intermediate", progress: "70%" },
        { icon: <SiCplusplus />, name: "C++", level: "Intermediate", progress: "70%" },
        { icon: "🗄️", name: "SQL", level: "Intermediate", progress: "75%" },
      ],
    },

    {
      title: "AI & Machine Learning",
      items: [
        { icon: <SiTensorflow />, name: "TensorFlow", level: "Intermediate", progress: "70%" },
        { icon: <SiOpencv />, name: "OpenCV", level: "Intermediate", progress: "70%" },
        { icon: "🤖", name: "Machine Learning", level: "Advanced", progress: "90%" },
        { icon: "📊", name: "NumPy", level: "Intermediate", progress: "75%" },
      ],
    },

    {
      title: "Web Development",
      items: [
        { icon: <FaReact />, name: "React.js", level: "Intermediate", progress: "75%" },
        { icon: <FaNodeJs />, name: "Node.js", level: "Intermediate", progress: "70%" },
        { icon: <SiExpress />, name: "Express.js", level: "Intermediate", progress: "70%" },
        { icon: <SiMongodb />, name: "MongoDB", level: "Intermediate", progress: "75%" },
      ],
    },

    {
      title: "Tools & Platforms",
      items: [
        { icon: <FaGitAlt />, name: "Git", level: "Intermediate", progress: "75%" },
        { icon: <FaDocker />, name: "Docker", level: "Intermediate", progress: "70%" },
        { icon: <SiJupyter />, name: "Jupyter Notebook", level: "Advanced", progress: "90%" },
        { icon: <SiLinux />, name: "Linux", level: "Intermediate", progress: "70%" },
        { icon: <FaGithub />, name: "GitHub", level: "Advanced", progress: "90%" },
        { icon: <SiPostman />, name: "Postman", level: "Intermediate", progress: "70%" },
        { icon: <SiVercel />, name: "Vercel", level: "Intermediate", progress: "70%" },
        { icon: <SiNpm />, name: "npm", level: "Intermediate", progress: "70%" },
        { icon: <SiVite />, name: "Vite", level: "Intermediate", progress: "70%" },
        { icon: <SiFirebase />, name: "Firebase", level: "Familiar", progress: "50%" },
      ],
    },
  ];


  return (
    <section
      id="skills"
      className="pt-48 pb-28 px-6 bg-gradient-to-b from-[#0d1328] to-[#050816]"
    >

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >

          <p className="uppercase tracking-[6px] text-blue-400">
            Expertise
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Technical Skills
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Technologies I use to build AI-powered and scalable applications.
          </p>

        </motion.div>


        <div className="grid md:grid-cols-2 gap-8">

          {categories.map((category) => (

            <motion.div
              key={category.title}
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
            >

              <h3 className="text-2xl font-semibold mb-6">
                {category.title}
              </h3>


              <div className="space-y-5">

                {category.items.map((skill) => (

                  <div
                    key={skill.name}
                    className="bg-[#11162a] rounded-xl p-4 hover:bg-blue-500/10 transition"
                  >

                    <div className="flex items-center gap-3">

                      <div className="text-2xl text-blue-400">
                        {skill.icon}
                      </div>


                      <div className="flex-1">

                        <div className="flex justify-between">

                          <span className="font-medium">
                            {skill.name}
                          </span>

                          <span className="text-sm text-blue-400">
                            {skill.level}
                          </span>

                        </div>


                        <div className="w-full bg-gray-700 h-2 rounded-full mt-3">

                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: skill.progress }}
                          />

                        </div>


                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;
