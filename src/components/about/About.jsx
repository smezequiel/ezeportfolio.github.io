import React from 'react'   
import './about.css'
import ME from '../../assets/me-about4.png'
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
              <small>0-1 Years Working</small>
            </article>
            
            <article className='about__card'>
              <TbUsers className='about__icon'/>
              <h5>Education</h5>
              <small>10+ Courses</small>
            </article>

            <article className='about__card'>
              <AiOutlineFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ Small Projects</small>
            </article>
          </div>

          <p>Hello, my name is Ezequiel San Martin, and I'm passionate about tech. While I may not have much professional experience, I've spent countless hours honing my skills through online courses, tutorials, and personal projects.</p>
          <p>I have experience with Python, HTML, CSS and JavaScript, as well as database handling using SQL and data visualization tools. and I'm eager to continue learning and expanding my skillset. I believe that technology has the power to make a positive impact on the world, and I want to be a part of that change.</p>
          <p>I'm excited to share my portfolio with you, which showcases my personal projects and the progress I've made so far. I'm constantly seeking feedback and new challenges to improve my abilities.</p>
          <p>Thank you for taking the time to learn a little bit about me. I'm looking forward to the opportunity to grow and contribute to meaningful projects.</p>

          <a href="#contact">Let's talk</a>

        </div>
      </div>
    </section>
  )
}

export default About