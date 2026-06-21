import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Programs from './sections/Programs'
import Trainers from './sections/Trainers'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Membership from './sections/Membership'
import Footer from './components/Footer'
import './App.css'
import './styles/index.css'

function App() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Programs />
        <Membership />
        <Trainers />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
