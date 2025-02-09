import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import './App.css'

export default function App() {
  const currentYear = new Date().getFullYear()

  return (
    <main className="min-h-screen bg-[#0e2442] text-white">
      <Hero />
      <Services />
      <About />
      <Contact />
      
      <footer className="py-8 bg-white/5">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {currentYear} Numeris. Sva prava pridržana.</p>
        </div>
      </footer>
    </main>
  )
} 