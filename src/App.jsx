import './App.css'
import { Home, About, Contact, Gallery, Services, NotFound } from './pages'
import { Header, Footer } from './containers'

export default function App() {
  return (
    <main className='main'>
      <Header />
      <section className="gradient__bg">        
        <Home />
        <Services />
        <About />
        <Gallery />
        <Contact />
        <Footer />
      </section>
    </main>
  )
}

