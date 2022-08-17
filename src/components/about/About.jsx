import React from 'react'   
import './about.css'
import ME from '../../assets/me-about2.png'
import {FaAward} from 'react-icons/fa'
import {TbUsers} from 'react-icons/tb'
import {AiOutlineFolder} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'> 
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div> 
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            
            <article className='about__card'>
              <TbUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <AiOutlineFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Small Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem numquam quaerat unde harum maxime error non iste explicabo eos, quod eligendi soluta fugit culpa esse eum consectetur aperiam reiciendis dicta.
          </p>

          <a href="#contact">Let's talk</a>

        </div>
      </div>
    </section>
  )
}

export default About