import { carServices } from '../../constants/data'
import './Services.css'

export default function Services() {
  return (
    <section className='services' id='/services'>
      <article className='services__content'>
        <h2 className='services__title'>Nuestros Servicios</h2>
        <ul className='services__cards'>
          {
            carServices.map(({ description, id, price, title }) => (
              <li className='services__card' key={id}>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{price}</p>
              </li>
            ))
          }
        </ul>
      </article>
    </section>
  )
}
