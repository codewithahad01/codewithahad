import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import About from './components/About'
import Testimonial from './components/Testimonial'
import Portfolio from './components/Portfilio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Testimonial />
      <Portfolio />
      <Contact />
      <Footer />

    </div>
  )
}
