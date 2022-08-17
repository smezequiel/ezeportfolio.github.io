import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
{/*import 'swiper/css/scrollbar'; tambien descartada*/}
{/*import 'swiper/css/navigation'; la descartamos porque vamos a instalar pagination*/}


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Typical fandom wiki. Even if a character is called one thing by one person once in a short scene, they list it as a nickname/alias.'
  },
  {
    avatar: AVTR2,
    name: 'Carlos Araujo',
    review: 'Typical fandom wiki. Even if a character is called one thing by one person once in a short scene, they list it as a nickname/alias.'
  },
  {
    avatar: AVTR3,
    name: 'Shata Wale',
    review: 'Typical fandom wiki. Even if a character is called one thing by one person once in a short scene, they list it as a nickname/alias.'
  },
  {
    avatar: AVTR4,
    name: 'Kwawe Despite',
    review: 'Typical fandom wiki. Even if a character is called one thing by one person once in a short scene, they list it as a nickname/alias.'
  },
]


const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        
        { //Aca reemplazamos el Swiper y Swiperslide como indica la pagina
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial