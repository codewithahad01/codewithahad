import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import About from './components/About'
import Testimonial from './components/Testimonial'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GoogleAdSense from './components/GoogleAdSense'

export default function Home() {
  return (
    <div>
      <Hero />
      <Service />
      <GoogleAdSense />
      <About />
      <Testimonial />
      <Portfolio />
      <Contact />
      <Footer />

    </div>
  )
}
