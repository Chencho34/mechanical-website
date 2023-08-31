import './Nav.css'
import { paths } from '../../constants/data'

function NavItems () {
  return (
    <ul className='nav__links'>
      {
        paths.map(({ item, path }) => (
          <li className='nav__link' key={item}>
            <a className='nav__item' href={`#${path}`}>{item}</a>
          </li>
        ))
      } 
    </ul>
  )
}

export default function Nav() {
  return (
    <nav className='nav'>
      <NavItems />
    </nav>
  )
}
