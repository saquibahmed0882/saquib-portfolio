import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {

  return (
    <div className="bg-[#061a14] text-white overflow-hidden">

      <Navbar />

      <main>

        <section className="min-h-screen mb-20">
          <Hero />
        </section>


        <section className="section-space">
          <About />
        </section>


        <section className="section-space">
          <Skills />
        </section>


        <section className="section-space">
          <Experience />
        </section>


        <section className="section-space">
          <Education />
        </section>


        <section className="section-space">
          <Projects />
        </section>


        <section className="section-space">
          <Contact />
        </section>


      </main>


      <Footer />


    </div>
  )
}

export default App;
