import './Services.css'

const carServices = [
  {
    id: 1,
    title: 'Cambio de aceite',
    description: 'Realizamos cambios de aceite con productos de alta calidad para mantener tu motor en óptimas condiciones.',
    price: '$50',
  },
  {
    id: 2,
    title: 'Reparación de frenos',
    description: 'Ofrecemos servicios de reparación y mantenimiento de frenos para garantizar tu seguridad en la carretera.',
    price: '$100 - $300',
  },
  {
    id: 3,
    title: 'Alineación y balanceo',
    description: 'Mantenemos tus llantas en excelente estado con nuestros servicios de alineación y balanceo.',
    price: '$60',
  },
  {
    id: 4,
    title: 'Alineación y balanceo',
    description: 'Mantenemos tus llantas en excelente estado con nuestros servicios de alineación y balanceo.',
    price: '$60',
  },
  {
    id: 5,
    title: 'Alineación y balanceo',
    description: 'Mantenemos tus llantas en excelente estado con nuestros servicios de alineación y balanceo.',
    price: '$60',
  },
  {
    id: 6,
    title: 'Alineación y balanceo',
    description: 'Mantenemos tus llantas en excelente estado con nuestros servicios de alineación y balanceo.',
    price: '$60',
  },
  {
    id: 7,
    title: 'Alineación y balanceo',
    description: 'Mantenemos tus llantas en excelente estado con nuestros servicios de alineación y balanceo.',
    price: '$60',
  },
  {
    id: 8,
    title: 'Alineación y balanceo',
    description: 'Mantenemos tus llantas en excelente estado con nuestros servicios de alineación y balanceo.',
    price: '$60',
  },
  {
    id: 9,
    title: 'Alineación y balanceo',
    description: 'Mantenemos tus llantas en excelente estado con nuestros servicios de alineación y balanceo.',
    price: '$60',
  },
  {
    id: 10,
    title: 'Alineación y balanceo',
    description: 'Mantenemos tus llantas en excelente estado con nuestros servicios de alineación y balanceo.',
    price: '$60',
  },
];

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
