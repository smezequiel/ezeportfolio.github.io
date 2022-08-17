import React from 'react'
import './services.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>

      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className=" container services__container">
        <article className='service'>
        <div className="service__head">
          <h3>UI/UX Designs</h3>
        </div>
        <ul className='service__list'>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>lorem ipsum bla bla bla clas </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>lorem ipsum bla bla bla clas </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>lorem ipsum bla bla bla clas </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>lorem ipsum bla bla bla clas </p>
          </li>
        </ul>
        </article>
        {/*END OF UI/UX*/}
        <article className='service'>
        <div className="service__head">
          <h3>Web Development</h3>
        </div>
        <ul className='service__list'>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>lorem ipsum bla bla bla clas </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>lorem ipsum bla bla bla clas </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>lorem ipsum bla bla bla clas </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>lorem ipsum bla bla bla clas </p>
          </li>
        </ul>
        </article>
        {/*END OF Web Development*/}
        <article className='service'>
        <div className="service__head">
          <h3>Videogame Design</h3>
        </div>
        <ul className='service__list'>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>lorem ipsum bla bla bla clas </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>lorem ipsum bla bla bla clas </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>lorem ipsum bla bla bla clas </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>lorem ipsum bla bla bla clas </p>
          </li>
        </ul>
        </article>
        {/*END OF VIDEOGAME DESIGN*/}
      </div>

    </section>
  )
}

export default Services