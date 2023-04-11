import React from 'react'
import './education.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Education = () => {
  return (
    <section id='services'>

      <h5>Courses/Certifications</h5>
      <h2>My Education</h2>

      <div className=" container services__container">
        <article className='service'>
        <div className="service__head">
          <h3>Web Development</h3>
        </div>
        <ul className='service__list'>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>Intro to Programming and Computer Science </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>CS50 - Harvard University </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>Web Developing and Database with Python </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>Data Structure and Algorythm </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>Java and Software Testing </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>Front-end Development with HTML, CSS and JS </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>Building with React </p>
          </li>
        </ul>
        </article>
        {/*END OF UI/UX*/}
        <article className='service'>
        <div className="service__head">
          <h3>Data Science</h3>
        </div>
        <ul className='service__list'>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>What is Data Science? </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>Tools for Data Science </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>Data Science Methodology</p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>Databases and SQL </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>Data Analysis with Python, AI and Development </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>Beginning with Tableau </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>Introduction to RPA and Automation </p>
          </li>
        </ul>
        </article>
        {/*END OF Web Development*/}
        <article className='service'>
        <div className="service__head">
          <h3>Others</h3>
        </div>
        <ul className='service__list'>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>Cloud Computing </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>AWS Cloud Technical Essentials</p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>Professional Web with Wordpress </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>Introduction to Ethical Hacking </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>Blockchain </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>Digital Marketing and Sales </p>
          </li>
          <li>
          <AiOutlineCheckCircle className='service__list-icon'/>
          <p>Google Project Management </p>
          </li>
        </ul>
        </article>
        {/*END OF VIDEOGAME DESIGN*/}
      </div>

    </section>
  )
}

export default Education