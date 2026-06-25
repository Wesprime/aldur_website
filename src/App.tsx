import { useEffect } from 'react'
import { gsap, ScrollTrigger } from './hooks/useGsap'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Location from './components/Location'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // Refresh ScrollTrigger after mount so all sections measure correctly
    const refreshEarly = setTimeout(() => ScrollTrigger.refresh(), 300)
    const refreshLate = setTimeout(() => ScrollTrigger.refresh(), 1000)
    return () => {
      clearTimeout(refreshEarly)
      clearTimeout(refreshLate)
    }
  }, [])

  return (
    <>
      <div className="noise" />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />
        <Location />
        <Leadership />
        <Contact />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  )
}
