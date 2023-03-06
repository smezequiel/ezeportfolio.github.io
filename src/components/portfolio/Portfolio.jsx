import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/modena.jpg'
import IMG2 from '../../assets/bunnito.png'
import IMG3 from '../../assets/chaco.png'
import IMG4 from '../../assets/calculator.png'
import IMG5 from '../../assets/weather.png'
import IMG6 from '../../assets/covidtableau.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Modena Ristorante & Vinoteca - WordPress',
    demo: 'https://modenaristorante.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Bunnito - 2D Videogame with Godot',
    github: 'https://github.com',
    demo: 'https://github.com/smezequiel/ProyectoBunnito'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Full Stack Survey Website with Django',
    github: 'https://github.com',
    demo: 'https://github.com/smezequiel/repojuegote'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Calculator App with JS',
    github: 'https://github.com',
    demo: 'https://github.com/smezequiel/Mini-Projects/tree/master/CalculatorApp'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Weather App with HTML, CSS and JavaScript',
    github: 'https://github.com',
    demo: 'https://github.com/smezequiel/Mini-Projects/tree/master/WeatherApp'
  },
  {
    id: 6,
    image: IMG6,
    title: 'COVID Dashboard using Tableau',
    github: 'https://github.com',
    demo: 'https://public.tableau.com/shared/2939QQCBM?:display_count=n&:origin=viz_share_link'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  {/*<a href={github} className='btn'>Github</a>*/}
                  <a href={demo} className='btn btn-primary' target='_blank'>View</a> {/*target blank es para que se abra en otra pagina*/}
                </div>
              </article>
            )
          })
        }
        

      </div>
    </section>
  )
}

export default Portfolio