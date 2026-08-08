import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import profile from "../assets/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#F7E9D3] text-[#241B16]"
    >

      {/* Warm background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full bg-[#F29B70]/35 blur-3xl" />
        <div className="absolute top-20 right-0 w-[450px] h-[450px] rounded-full bg-[#FFD7A8]/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] rounded-full bg-[#FFF5E6]/70 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-16">

        {/* Top information */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-16 sm:mb-20">

          <div className="flex items-center gap-3 text-xs sm:text-sm tracking-[0.18em] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#D9542B]" />
            <span className="text-[#8C4935]">
              AI/ML Engineer
            </span>
            <span className="text-[#9A8575]">·</span>
            <span className="text-[#9A8575]">
              Full Stack
            </span>
            <span className="text-[#9A8575]">·</span>
            <span className="text-[#9A8575]">
              Open Source
            </span>
          </div>

          <div className="text-xs sm:text-sm tracking-[0.18em] uppercase text-[#8C8178]">
            India · IST · 2027
          </div>

        </div>


        {/* Main content */}
        <div className="grid lg:grid-cols-[1.45fr_0.75fr] gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <div>

            <p className="text-xs sm:text-sm tracking-[0.22em] uppercase text-[#9A6954] mb-5">
              <span className="text-[#D9542B]">●</span>{" "}
              About me
            </p>


            <h1 className="font-serif text-[52px] sm:text-[70px] md:text-[88px] lg:text-[92px] leading-[0.9] tracking-[-0.045em] font-semibold text-[#201813]">
              hey, I'm{" "}
              <span className="italic font-normal">
                Saquib
              </span>
              <span className="text-[#D9542B]">.</span>
            </h1>


            {/* Intro */}
            <div className="mt-10 border-l-2 border-[#D9542B] pl-6 space-y-4 max-w-2xl">

              <p className="text-base sm:text-lg text-[#4E4037]">
                B.Tech Artificial Intelligence & Machine Learning student
                building intelligent and scalable software.
              </p>

              <p className="text-base sm:text-lg text-[#4E4037]">
                Experienced in AI/ML, full-stack development and data-driven
                applications.
              </p>

              <p className="text-base sm:text-lg text-[#4E4037]">
                Passionate about turning real-world problems into useful
                technology.
              </p>

            </div>


            {/* Mission card */}
            <div className="mt-10 max-w-2xl rounded-2xl border border-[#D8C5AC] bg-[#FFF9EF]/75 backdrop-blur-sm p-6 sm:p-7 shadow-[0_12px_40px_rgba(80,50,30,0.08)]">

              <p className="text-xs tracking-[0.2em] uppercase text-[#C65330] mb-4">
                ◎ My mission
              </p>

              <p className="text-base sm:text-lg leading-7 text-[#51443B]">
                Building AI-powered software that is practical, intelligent
                and easy to use — from machine learning solutions to scalable
                full-stack platforms.
              </p>

              <p className="font-serif italic text-lg sm:text-xl mt-5 text-[#6B5547]">
                “Keep learning, keep building.”
              </p>

            </div>


            {/* Scroll */}
            <div className="flex items-center gap-3 mt-10 text-xs tracking-[0.2em] uppercase text-[#9A6954]">
              <FaArrowDown className="text-[#D9542B]" />
              Scroll for the best
            </div>


            {/* Social links */}
            <div className="flex items-center gap-5 mt-8">

              <a
                href="https://github.com/saquibahmed0882"
                target="_blank"
                rel="noreferrer"
                className="text-[#3C312A] hover:text-[#D9542B] transition-colors text-xl"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/saquib-ahmed-ab21023a9"
                target="_blank"
                rel="noreferrer"
                className="text-[#3C312A] hover:text-[#D9542B] transition-colors text-xl"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:saquibahmed0882@gmail.com"
                className="text-[#3C312A] hover:text-[#D9542B] transition-colors text-xl"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>


          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative w-full max-w-[390px]">

              <div className="absolute -inset-3 rounded-[28px] bg-[#D9542B]/10 blur-xl" />

              <div className="relative overflow-hidden rounded-[24px] border border-[#D5BDA4] bg-[#E8D8C4] shadow-[0_25px_70px_rgba(70,45,25,0.18)]">

                <img
                  src={profile}
                  alt="Saquib Ahmed"
                  className="w-full aspect-[4/5] object-cover"
                />

                <div className="absolute bottom-4 left-4 rounded-full bg-[#FFF7E9]/90 backdrop-blur-sm border border-[#D6C1AA] px-4 py-2 text-xs tracking-[0.16em] uppercase text-[#6B5547]">
                  India · IST
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* Bottom stats */}
        <div className="mt-20 sm:mt-24 border-t border-[#D7C3AA] pt-7">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-7">

            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-[#A07863]">
                Education
              </p>
              <p className="mt-2 font-serif text-lg text-[#33271F]">
                B.Tech AI/ML
              </p>
            </div>

            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-[#A07863]">
                Projects
              </p>
              <p className="mt-2 font-serif text-lg text-[#33271F]">
                2+ Major Projects
              </p>
            </div>

            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-[#A07863]">
                Specialization
              </p>
              <p className="mt-2 font-serif text-lg text-[#33271F]">
                AI · ML · Software
              </p>
            </div>

            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-[#A07863]">
                Graduation
              </p>
              <p className="mt-2 font-serif text-lg text-[#33271F]">
                2027
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
