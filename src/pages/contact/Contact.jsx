import { useState } from 'react';
import './Contact.css'

export default function Contact () {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    auto: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí manejar los datos, enviarlos a un servidor.*
    // console.log(formData)
  }

  return (
    <section className='contact' id='/contact'>
      <article className='contact__wrapper'>
        <form onSubmit={handleSubmit}>
          <h1 className='contact__title'>Login</h1>
          <label className='form__label'>
            <input
              type="text"
              placeholder='Username'
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <i className='bx bxs-user'/>
          </label>
          <label className='form__label'>
            <input
              type="password"
              placeholder='Password'
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <i className='bx bxs-lock-alt' />
          </label>
          <label className='form__label'>
            <input
              type="email"
              placeholder='Email'
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <i className='bx bxs-envelope' />
          </label>
          <label className='form__label'>
            <input
              type="text"
              placeholder='Auto/modelo'
              name="auto"
              value={formData.auto}
              onChange={handleChange}
            />
            <i className='bx bxs-car' />
          </label>
          <div className='form__remember-forgot'>
            <label>
              <input type="checkbox" name="" id="" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button className='form__btn' type="submit">Login</button>
          <div className="form__register-link">
            <p>Dont have an account?<a href="#">Register</a></p>
          </div>
        </form>
      </article>
    </section>
  )
}
