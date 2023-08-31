import './Contact.css'

export default function Contact() {
  return (
    <section className='contact' id='/contact'>
      <article className='contact__content'>
        <form className='contact__form' action="procesar_formulario.php" method="POST">
          <span>Nombre y Apellido</span>
          <label htmlFor="nombre">
            <input type="text" id="nombre" /> 
          </label>
          <span>Ciudad</span>
          <label htmlFor="ciudad">
            <input type="country" id="ciudad" /> 
          </label>
          <span>Edad</span>
          <label htmlFor='edad'>
            <input type="int" id="edad" /> 
          </label>
        </form>
      </article>
    </section>
  )
}
