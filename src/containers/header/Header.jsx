import './Header.css'
import { Nav } from '../../components'

export default function Header() {
  return (
    <header className='header'>
      <section className='header__texts'>
        <h1 className='header__title'>The projects of team</h1>
      </section> 
      <div className='header__div'/> 
      <Nav />
    </header>
  )
}
