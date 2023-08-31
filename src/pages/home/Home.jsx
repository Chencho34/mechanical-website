import './Home.css'
export default function Home() {
  return (
    <section className='home' id='/'>
      <article className='home__content'>
        <h2 className='home__title'>Home</h2>
        <p className='home__paragraph'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum cum assumenda culpa magnam esse fugit perspiciatis est at distinctio qui deserunt aliquid recusandae veritatis ab tempore, nesciunt natus fuga hic placeat dolore.</p>
        <button className='home__cta'>Read More</button>
      </article>
      <figure className='home__img-container'>
        <img className='home__img' src="https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2021/Products/Porsche-Exclusive-Manufaktur,-Porsche-Tequipment-und-Porsche-Classic/TE22U35IX0001.jpeg/jcr:content/TE22U35IX0001.jpeg" alt="" />
      </figure>
    </section>
  )
}
