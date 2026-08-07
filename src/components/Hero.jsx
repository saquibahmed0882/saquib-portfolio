import React from "react";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816] text-white flex items-center px-6 md:px-16 pt-32"
    >

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>

        <div className="absolute w-80 h-80 bg-purple-600/20 rounded-full blur-3xl bottom-20 right-20 animate-pulse"></div>
      </div>


      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">


        <div className="space-y-6">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for AI/ML & Software Engineering Roles
          </div>


          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Saquib Ahmed
          </h1>


          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
            AI & Machine Learning Engineer
          </h2>


          <p className="text-gray-400 max-w-xl text-lg">
            B.Tech Artificial Intelligence & Machine Learning student at BIT Mesra.
            Building AI solutions, ML models and scalable applications.
          </p>


          <div className="flex gap-4 pt-4">

            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              View Projects
            </a>


            <a
              href="/resume.pdf"
              className="px-6 py-3 border border-blue-500 rounded-lg hover:bg-blue-600"
            >
              Resume
            </a>

          </div>


        </div>



        <div className="flex justify-center">

          <div className="w-72 h-72 rounded-full border-4 border-blue-500 overflow-hidden shadow-xl">

            <img
              src={profile}
              alt="Saquib Ahmed"
              className="w-full h-full object-cover"
            />

          </div>

        </div>


      </div>

    </section>
  );
};

export default Hero;
