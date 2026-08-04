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
    <div className="bg-[#050816] text-white overflow-hidden">

      <Navbar />

      <main>

        <section className="min-h-screen mb-20">
          <Hero />
        </section>


        <section className="mb-24">
          <About />
        </section>


        <section className="mb-24">
          <Skills />
        </section>


        <section className="mb-24">
          <Experience />
        </section>


        <section className="mb-24">
          <Education />
        </section>


        <section className="mb-24">
          <Projects />
        </section>


        <section className="mb-24">
          <Contact />
        </section>


      </main>


      <Footer />


    </div>
  )
}

export default App;
