import './Home.css'

import bgimg from '../../assets/bg-home.jpg'

export default function Home() {
  return (
    <section className='home' id='/'>
      <article className='home__content'>
        <h2 className='home__title'>Home</h2>
        <p className='home__paragraph'>Bienvenidos a nuestro taller mecánico, donde la pasión por los autos se encuentra con la experiencia técnica. Somos tu destino confiable para todos los servicios de reparación y mantenimiento automotriz. Nuestro equipo de mecánicos altamente calificados está listo para cuidar de tu vehículo y asegurarse de que vuelvas a la carretera de manera segura. En nuestro taller, la calidad y la satisfacción del cliente son nuestra prioridad número uno. ¡Confía en nosotros para mantener tu auto en su mejor forma!</p>
        <button className='home__cta'>Read More</button>
      </article>
      <figure className='home__img-container'>
        {/* <img className='home__img' src="https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2021/Products/Porsche-Exclusive-Manufaktur,-Porsche-Tequipment-und-Porsche-Classic/TE22U35IX0001.jpeg/jcr:content/TE22U35IX0001.jpeg" alt="" /> */}
        <img className='home__img' src={bgimg} alt="" />
      </figure>
    </section>
  )
}
