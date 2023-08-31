import './App.css'
import { Home, About, Contact, Gallery, Services, NotFound } from './pages'
import { Header, Footer } from './containers'
import { Nav } from './components'

export default function App() {
  return (
    <main className='main'>
      <Header />
      <section className="gradient__bg">        
        {/* <Nav /> */}
        <Home />
        <Services />
        <About />
        <Gallery />
        <Contact />
        <NotFound />
        <Footer />
      </section>
    </main>
  )
}

