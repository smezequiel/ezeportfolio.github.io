import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {SiTableau} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/in/ezequiel-sanmartin/" target="_blank"><FiLinkedin/></a>
        <a href="https://github.com/smezequiel" target="_blank"><FiGithub/></a>
        <a href="https://public.tableau.com/app/profile/ezequiel.san.martin" target="_blank"><SiTableau/></a>
    </div>
  )
}

export default HeaderSocials