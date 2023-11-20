import './App.css'
import { Home, Contact, Gallery, Services } from './pages'
import { Header, Footer } from './containers'

export default function App() {
  return (
    <main className='main'>
      <Header />
      <section className="gradient__bg">        
        <Home />
        <Services />
        <Gallery />
        <Contact />
        <Footer />
      </section>
    </main>
  )
}

