import './Header.css'
import { Nav } from '../../components'

export default function Header() {
  return (
    <header className='header' id='/header'>
      <section className='header__texts'>
        <h1 className='header__title'>Lorem ipsum dolor sit amet.</h1>
      </section> 
      <div className='header__div'/> 
      <Nav />
    </header>
  )
}
