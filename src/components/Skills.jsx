import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiMongodb,
  SiExpress,
  SiTensorflow,
  SiOpencv,
  SiJupyter,
  SiLinux,
} from "react-icons/si";

function Skills() {

  const categories = [
    {
      title: "Programming",
      items: [
        { icon: <FaPython />, name: "Python" },
        { icon: <FaJava />, name: "Java" },
        { icon: <SiCplusplus />, name: "C++" },
        { icon: "🗄️", name: "SQL" },
      ],
    },

    {
      title: "AI & Machine Learning",
      items: [
        { icon: <SiTensorflow />, name: "TensorFlow" },
        { icon: <SiOpencv />, name: "OpenCV" },
        { icon: "🤖", name: "Machine Learning" },
        { icon: "📊", name: "NumPy" },
      ],
    },

    {
      title: "Web Development",
      items: [
        { icon: <FaReact />, name: "React.js" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <SiMongodb />, name: "MongoDB" },
      ],
    },

    {
      title: "Tools",
      items: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaDocker />, name: "Docker" },
        { icon: <SiJupyter />, name: "Jupyter" },
        { icon: <SiLinux />, name: "Linux" },
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

              <div className="grid grid-cols-2 gap-4">

                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-xl bg-[#11162a] p-4 hover:bg-blue-500/10 transition"
                  >
                    <div className="text-2xl text-blue-400">
                      {skill.icon}
                    </div>

                    <span>{skill.name}</span>
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
