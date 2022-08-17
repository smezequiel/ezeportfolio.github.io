import React from 'react'
import CVEzequielSanMartin from '../../assets/CVEzequielSanMartin.pdf'

const CTA = () => {
  return (
      <div className='cta'>
        <a href={CVEzequielSanMartin} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
  )
}

export default CTA