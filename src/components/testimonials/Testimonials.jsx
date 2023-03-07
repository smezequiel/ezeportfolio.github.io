import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/spanish-flag.png'
import AVTR2 from '../../assets/english-flag.jpg'
import AVTR3 from '../../assets/portuguese-flag.jpg'
import AVTR4 from '../../assets/italian-flag.jpg'
import AVTR5 from '../../assets/french-flag.png'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
{/*import 'swiper/css';
import 'swiper/css/pagination';*/}
{/*import 'swiper/css/scrollbar'; tambien descartada*/}
{/*import 'swiper/css/navigation'; la descartamos porque vamos a instalar pagination*/}


const data = [
  {
    avatar: AVTR1,
    name: 'Spanish',
    review: 'Native. 20+ years'
  },
  {
    avatar: AVTR2,
    name: 'English',
    review: 'Bilingual Proficiency. 20+ years'
  },
  {
    avatar: AVTR3,
    name: 'Portuguese',
    review: 'Fluent. 5+ years'
  },
  {
    avatar: AVTR4,
    name: 'Italian',
    review: 'Limited Proficiency. 2 years'
  },
  {
    avatar: AVTR5,
    name: 'French',
    review: 'Elementary Profiency. 1 year'
  },
]


const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>.</h5>
      <h2>Languages</h2>

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