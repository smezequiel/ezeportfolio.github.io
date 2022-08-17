import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ezequiel San Martin</a>
      <ul className='permalinks'>
        <li><a href="#"></a>Home</li>
        <li><a href="#about"></a>About</li>
        <li><a href="#experience"></a>Experience</li>
        <li><a href="#services"></a>Services</li>
        <li><a href="#portfolio"></a>Portfolio</li>
        <li><a href="#testimonial"></a>Testimonials</li>
        <li><a href="#contact"></a>Contact</li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://linkedin.com/"><FaLinkedinIn/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ezequiel San Martin. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer